const { allow } = require('joi')
const stripe = require('stripe')

const Stripe = stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion: '2020-08-27'
})

const createCheckoutSession = async(customerID,price) => {
    const session = await Stripe.checkout.session.create({
        mode: "subscription",
        payment_method_types: ['card'],
        customer: customerID,
        lines_items: [
        {
            price,
            quantity: 1
        }
    ],
    consent_collection: {
        terms_of_service: 'required',
    },
    allow_promotion_codes: true,
    success_url: `${process.env.DOMAIN}?success=1`,
    cancel_url: `${process.env.DOMAIN}`
    })

    return session
}