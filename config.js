/* ===== ORGIT SITE SETTINGS =====
   Sirf yehi file badalni hai. Baaki files ko chhuna nahi hai.
   Badalne ke baad GitHub par is file ko save (commit) kar dijiye, site khud update ho jayegi. */
window.ORGIT = {
  // WhatsApp business number, bina +91 ke 10 digit (abhi khali hai)
  whatsapp: "7982669762",

  // Trade enquiry form ki key: README mein step dekhiye (web3forms.com se free milti hai)
  formKey: "",

  phone: "+91 1135812384",
  email: "care@orgit.in",
  website: "https://www.orgit.in",
  instagram: "orgitindia",

  // Launch ho chuka hai to true rakhiye (marketplace ke dabbe "Buy now" ban jate hain)
  launched: true,

  // Marketplace links. Link daalte hi "Soon" ki jagah "Buy now" button ban jayega
  stores: { amazon: "https://www.amazon.in/s?k=ORGIT+makhana", flipkart: "https://www.flipkart.com/search?q=ORGIT%20makhana", bigbasket: "https://www.bigbasket.com/ps/?q=ORGIT%20makhana", blinkit: "https://blinkit.com/s/?q=ORGIT%20makhana" },

  // Offline stores jahan ORGIT milta hai. Example: { name: "Store ka naam", city: "Shehar" }. Khali ho to ye hissa chhup jata hai
  offline: [{ city: "New Delhi" }, { city: "Ranchi" }],

  // Google reviews: rating aur count profile se dekh kar bharein, url mein reviews ka link
  google: { rating: "", count: "", url: "" },

  // Asli customer reviews (unki ijaazat se). Example: { text: "Bahut kurkura!", name: "Naam", city: "Shehar" }. Khali ho to section chhup jata hai
  testimonials: [],

  // Delivery aur return/refund ka chhota text (jo aap sach mein dete hain). Khali ho to section chhup jata hai
  delivery: "Delivery is handled by the platform you order from (Amazon, Flipkart, BigBasket or Blinkit). Delivery time depends on your location and the platform.",
  returns: "Returns and refunds follow the standard policy of the platform you ordered from (Amazon, Flipkart, BigBasket or Blinkit). Please check your order page there. For orders placed directly with us on WhatsApp, message us."
};
