<template>
<div class="ui inverted page grid masthead segment">
    <div class="column">
      <div class="inverted secondary pointing ui menu">
        <div class="header item">AUDIT</div>
        <div class="right menu">
          <a class="item" v-link="{name: 'home' }">Home</a>
          <a class="item" v-link="{name: 'services' }">Properties</a>
          <a class="item" v-link="{name: 'auth.signin' }" v-if="!auth.user.authenticated">Sign in</a>
          <a class="item" v-link="{name: 'auth.signup' }" v-if="!auth.user.authenticated">Sign up</a>
          <a class="item" href="#" v-on:click="signout" v-if="auth.user.authenticated">Sign out</a>
          <p class="item" class="item" v-if="auth.user.authenticated">Hi, {{ auth.user.profile.account_type['name'][0] }}</p>
        </div>
      </div>
      <img src="/static/images/cat.png" class="ui medium image">
      <div class="ui hidden transition information">
        <h1 class="ui inverted header">
          Your Cat is Cute
        </h1>
        <p>At least he won't reach his highest potential unless you enroll him in Cat University's 2013 class.</p>
        <div class="large basic inverted animated fade ui button">
          <div class="visible content">Be a member now</div>
          <div class="hidden content">Sign up</div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <div class="ui inverted teal page grid segment">
    <div class="ten wide column">
      <div class="ui three column stackable grid">
        <div class="column">
          <div class="ui header">Courses</div>
          <div class="ui inverted link list">
            <a class="item">Registration</a>
            <a class="item">Course Calendar</a>
            <a class="item">Professors</a>
          </div>
        </div>
        <div class="column">
          <div class="ui header">Library</div>
          <div class="ui inverted link list">
            <a class="item">A-Z</a>
            <a class="item">Most Popular</a>
            <a class="item">Recently Changed</a>
          </div>
        </div>
        <div class="column">
          <div class="ui header">Community</div>
          <div class="ui inverted link list">
            <a class="item">BBS</a>
            <a class="item">Careers</a>
            <a class="item">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
    <div class="six wide right floated aligned column">
      <h3 class="ui header">Contact Us</h3>
      <addr>
        237 Catberry Road <br>
        Milton Keynes, London <br>
      </addr>
      <p>(404) 867-5309</p>
    </div>
  </div>
</template>
<script>
import auth from '../auth'

export default{
    data(){
        return {
            auth: auth
        }
    },
    methods: {
        signout () {
            auth.signout()
        }
    },
    ready () {
        auth.check()
    }
}
</script>
