/* Site settings (L11, Nov 12; Insider offer, Nov 20). The one place to turn pay and go on, and to add the founder call booking page.
   Read by /join, /welcome and /pay. Change a value here, commit, and the site updates.

   payAndGo     false: the survey's last screen shows the holding line. No pay step appears anywhere.
                true:  the survey's last screen shows "Thank you.", $27 a month, the Become an Insider button
                       (the $27 checkout) and the guarantee line. Nothing else.
   checkoutUrl  The $27 Stripe payment link (plink_1U3NHgAJEmUQyEijWsKYFZfd, the link the server's price list names).
                Her survey email is added as prefilled_email, so her payment matches her survey.
   bookingUrl   Barth's Zoom booking page for an optional call with the founder, offered on /welcome after she pays.
                While it is empty, the call line and button on /welcome stay hidden.
   endpoint     The Caerus server. Read by /pay (D14x, Text HI), which forwards her join link there.
   sendVisitCode  D14x. false: the survey is sent exactly as before.
                true:  the survey also sends the page's anonymous visit code, so the server can record when a Text HI woman started it.
                Turn on ONLY after the Caerus D14x pull request is deployed. Before that the server refuses a survey that carries it. */
window.KAJ_SITE = {
  payAndGo: false,
  checkoutUrl: "https://buy.stripe.com/cNi5kCbeVdSs0YVas8cIE00",
  bookingUrl: "",
  endpoint: "https://caerus-production.up.railway.app",
  sendVisitCode: true
};
