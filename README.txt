ORGIT WEBSITE - GITHUB PAR LAGANE KA GUIDE
==========================================

A) GITHUB PAR DAALNA (ek baar)
1. github.com par account banayein > New repository > naam: orgit-website > Public > Create.
2. "uploading an existing file" par click karein. Is folder ke SAARE files aur folders (index.html, config.js, css, js, assets...) drag-drop karein > Commit changes.
3. Settings > Pages > "Deploy from a branch" > Branch: main, folder: /(root) > Save.
4. 1-2 minute baad aapki site chalu: https://AAPKA-USERNAME.github.io/orgit-website/
5. Apna domain (orgit.in) lagana ho to: Settings > Pages > Custom domain mein orgit.in likhein, aur domain provider ke DNS mein GitHub ke batae record jodein (GitHub ka "Configuring a custom domain" guide dekhein). Domain lagne ke baad index.html mein "YOUR-DOMAIN" ko orgit.in se badal dein (WhatsApp/Facebook preview ke liye).

B) DUKAANDAAR / DISTRIBUTOR FORM CHALU KARNA (zaroori)
1. web3forms.com par jayein, apna email (jahan enquiry chahiye) daalein > "Create Access Key". Key email par aa jayegi (free).
2. config.js kholein, formKey: "" ke andar wo key paste karein > Commit.
3. Site par ek test enquiry bhej kar dekhein (phone se bhi). Har enquiry aapke email par aayegi: Type, Name, Business, City, State, Pincode, Mobile, Email, GST, First order, Message.
4. Customer "Send on WhatsApp" dabaye to saari details bhara hua WhatsApp message ban jata hai (config.js mein whatsapp number daalna zaroori).
Note: Key public hoti hai (sab form tools mein aisa hi hota hai). Web3Forms dashboard mein spam filter lagayein. Enquiry ka jawab jaldi dein: dukaandaar usi samay dusre brands se bhi baat karta hai.

C) BAAR BAAR UPDATE KAISE NA KARNA PADE
- WhatsApp number, marketplace links, phone, email, Instagram, "launched" ka switch: sab sirf config.js mein hain.
- Launch par: stores mein link daalein aur launched: true kar dein. Bas.
- Photo badalni ho to assets/ mein nayi photo ussi naam se upload karein (jaise pack.webp).
- Text badalna ho (jaise FAQ): index.html mein data-hi="..." Hindi hai aur andar ka text English.

D) LAUNCH SE PEHLE CHECKLIST
[ ] Asli WhatsApp number config.js mein
[ ] Form key lagakar test enquiry
[ ] Marketplace links (jab live ho jayein)
[ ] Pack par FSSAI, MRP, Batch, Use By wahi hai jo site par likha hai
[ ] "YOUR-DOMAIN" badla (A, step 5)
[ ] privacy.html mein address/email sahi
[ ] Hindi toggle dabakar poora page ek baar padh lein
