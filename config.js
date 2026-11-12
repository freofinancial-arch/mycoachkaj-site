/* Site settings (L11, Nov 12). The one place to turn pay and go on, and to add the founder call booking page.
   Read by /join and /welcome. Change a value here, commit, and the site updates.

   payAndGo     false: the survey's last screen shows the holding line. No pay step appears anywhere.
                true:  the survey ends with Step 1 (the $27 checkout) and Step 2 (the founder call).
   checkoutUrl  The $27 Stripe payment link (plink_1U3NHgAJEmUQyEijWsKYFZfd, the link the server's price list names).
                Her survey email is added as prefilled_email, so her payment matches her survey.
   bookingUrl   Barth's Zoom booking page for founder calls. While it is empty, the button on /welcome stays hidden. */
window.KAJ_SITE = {
  payAndGo: false,
  checkoutUrl: "https://buy.stripe.com/cNi5kCbeVdSs0YVas8cIE00",
  bookingUrl: ""
};
