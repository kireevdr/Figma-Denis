<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios';

interface Menu {
  text: string,
  title: string,
  link: string,
  body: string,
  userId: string,
}

interface DataObject {
  aboutmeData: Array<Menu>,
  postsData: Array<Menu>,
  commentsData: Array<Menu>,
}

export default defineComponent({
  data(): DataObject {
    return {
      aboutmeData: [],
      postsData: [],
      commentsData: []
    }
  },

  async mounted() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.postsData = res.data
    const resComments = await axios.get('https://jsonplaceholder.typicode.com/comments');
    this.commentsData = resComments.data
    const resUsers = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = resUsers.data.map(user => {
      user.posts = this.postsData.filter(post => user.id == post.userId)
      return user
    })
    this.aboutmeData = resUsers.data
  }
})
</script>

<template lang="pug">
.wrapper
  .container
    .row
      .col-4(v-for='user in aboutmeData' :key='user.id')
        #user-2.user(style='visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);')
          .user-header
            .user-avatar
              img(src='https://randomuser.me/api/portraits/men/2.jpg')
            .user-basic-info
              .user-nick {{ user.username }}
              .user-fullname {{ user.name }}
          .user-info
            span.user-title COMPANY
            span.user-data {{ user.company.name }}  company
          .user-info
            span.user-title EMAIL
            span.user-data {{ user.email }}
          .user-info
            span.user-title PHONE
            span.user-data {{ user.phone }}
          .user-info
            span.user-title WEBSITE
            span.user-data {{ user.website }}
          .user-info
            span.user-title(v-for='post in user.posts' :key='post.id') POSTS
              .user-info
                span.user-title Title
                span.user-data {{ post.title }}
              .user-info
                span.user-title Text
                span.user-data {{ post.body }}
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.wrapper {
  margin-top: 50px;
  background-color: $backlor;
  margin-left: auto;
  margin-right: auto;
  width: $width;
  @include marg-max-width;
  color: #282833;
}
.b-aboutme {
  @include marg-max-width;
  @include padding;
  background-color: $backlor;
  text-align: center;
  max-width: rem(600);
}
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
.user {
  margin: 20px;
  border-radius: 6px;
  //width: calc(33.3% - 40px);
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .05), 0 0 0 1px #ddd inset;
  position: relative;
  &-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    font-size: 0;
    margin-right: 12px;
  }
  &-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 1%, rgba(0, 0, 0, 0) 100%);
  }
  &-basic-info {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
  }
  &-fullname {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-nick {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-data {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 20px;
  }
  &-fullname {
    color: rgba(#333, .6);
    font-size: 14px;
  }
  &-info {
    padding: 16px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
  }
  &-info + &-info {
    border-top: 1px solid #efefef;
  }
  &-title {
    font-size: 11px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.4);
    letter-spacing: 1px;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    max-width: 1200px;
    margin: auto;
  }
  &-remove {
    position: absolute;
    top: 50%;
    transition: .3s;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    background-color: #d80c0c;
    box-shadow: 0 0 0 40px rgba(#fff, .8), 0 0 0 5px rgba(#d80c0c, .8);
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    opacity: 0;
    outline: 0;
    cursor: pointer;
  }
}
</style>