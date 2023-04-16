The main way that I implemented  is in "PaymentCart" file.
It required some additional configuration on the Stripe website: the main being the activation of "Client side integration" --- very easy to set up.

Essentially, in my implementation I gave the whole control to stripe:
            
            * Whenever a user goes to checkout, they are redirected to a checkout page stripe itself provides.
            * Your implementation was going along the lines where the checkout page would have been embedded in the site. No redirects (like Amazon's checkout). But that would have required a Back-end and you would have to implement the security protocols, making transactions vulnerable to Hacking.

            * PLus this the most simple method that requires no effort on your part and the this is very effective.


Chnages I made:
        // PaymentCart.js = all the logic
        // lib -> getSprite.js = connecting to Stripe
        // App.js = 2 extra Routes.


I have added the payment to only the "Buy Now" buttons on the "Plans" section of homepage. For payment from any other place simply send the price data through useNavigation - state.

Good use of the useNav by the way.

Hope it was satisfactory. For any doubts contact.