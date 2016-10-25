<template>
  <br />
  <hr />
    <!-- <form action="/your-server-side-code" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          data-key="pk_test_UzmswYlWXIwAXhRHCfT0R5Lp"
          data-amount="999"
          data-name="Demo Site"
          data-description="Widget"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto">
        </script>
      </form> -->
      <h1><a href="#" v-on:click="stripe">Payment</a></h1>
      <form autocomplete="off" v-on:submit="stripe">
      <button type="submit" class="btn btn-default">Pay now</button>
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
            stripecontroller.stripe(this, this)
          var handler = StripeCheckout.configure({
              key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
              image: '/img/documentation/checkout/marketplace.png',
              locale: 'auto',
              token: function(token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
              }
            });
            stripecontroller.open({
              name: 'Stripe.com',
              description: '2 widgets',
              amount: 2000
            });
      }

    }
  }
</script>



<!-- <script src="https://checkout.stripe.com/checkout.js"></script>

<button id="customButton">Purchase</button>

<script>
var handler = StripeCheckout.configure({
  key: 'pk_test_UzmswYlWXIwAXhRHCfT0R5Lp',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});

document.getElementById('customButton').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: 2000
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
</script> -->
