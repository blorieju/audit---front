<template>
  <br />
  <hr />
      <form action="/charges" method="post" v-on:submit="stripe">
      <article>
        <label class="amount">
          <span>Amount: $5.00</span>
        </label>
      </article>
    <button type="submit">Purchase</button>
    </form>
  <hr />
  <br />
</template>
<script>
import stripecontroller from '../auth/stripecontroller'

  export default {
    data(){
      return {
        StripeHandler: null
      }
    },
    methods: {
      stripe(e){
          e.preventDefault()
            var handler = StripeCheckout.configure({
                key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
                image: '/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                token: function(token) {
                  stripecontroller.stripe(this, token)
                  // Use the token to create the charge with a server-side script.
                  // You can access the token ID with `token.id`
                }
            })
            handler.open({
              name: 'Stripe.com',
              description: '2 widgets',
              amount: 2000
            })
      }
    }
  }
</script>
