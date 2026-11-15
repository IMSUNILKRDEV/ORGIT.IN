(function(){
"use strict";
var C=window.ORGIT||{};
var q=function(s){return document.querySelector(s)},qa=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
function wa(t){var n=String(C.whatsapp||"").replace(/\D/g,"");if(n.length===10)n="91"+n;return"https://wa.me/"+n+"?text="+encodeURIComponent(t)}
qa(".wa").forEach(function(a){a.href=wa("Hi ORGIT, I want to order makhana.")});
qa("[data-cfg],[data-cfg-href]").forEach(function(a){var k=a.getAttribute("data-cfg")||a.getAttribute("data-cfg-href"),v=C[k];if(!v)return;
var h=k==="phone"?"tel:"+v.replace(/[^+\d]/g,""):k==="email"?"mailto:"+v:k==="instagram"?"https://instagram.com/"+v.replace("@",""):v;
a.href=h;var t=a.querySelector(".t")||a;if(a.hasAttribute("data-cfg"))t.textContent=k==="instagram"?v.replace("@",""):k==="website"?v.replace(/^https?:\/\//,""):v});
qa("[data-store]").forEach(function(s){var u=(C.stores||{})[s.getAttribute("data-store")];if(!u)return;
var a=document.createElement("a");a.className="live";a.href=u;a.target="_blank";a.rel="noopener";a.innerHTML=s.innerHTML;
var m=a.querySelector("small");m.textContent="Buy now";m.setAttribute("data-hi","अभी खरीदें");s.parentNode.replaceChild(a,s)});
if(C.launched)qa(".rib").forEach(function(e){e.style.display="none"});
var lang="en",els=qa("[data-hi]");
els.forEach(function(e){e.setAttribute("data-en",e.textContent)});
function setL(l){lang=l;document.documentElement.lang=l;document.body.classList.toggle("hi",l==="hi");
els.forEach(function(e){e.textContent=e.getAttribute(l==="hi"?"data-hi":"data-en")});
qa("[data-l]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-l")===l)});
try{localStorage.setItem("orgit-lang",l)}catch(x){}}
qa("[data-l]").forEach(function(b){b.onclick=function(){setL(b.getAttribute("data-l"))}});
try{if(localStorage.getItem("orgit-lang")==="hi")setL("hi")}catch(x){}
var pk=q("#pack"),red=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
function sc(){if(red||!pk)return;var p=Math.min(window.scrollY/520,1);pk.style.transform="rotate("+(-6+p*7)+"deg) translateY("+(-p*22)+"px) scale("+(1-p*.05)+")"}
window.addEventListener("scroll",sc,{passive:true});sc();
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.15});qa(".rv").forEach(function(e){io.observe(e)})}else{qa(".rv").forEach(function(e){e.classList.add("in")})}
var f=q("#enq"),st=q("#fstat"),btn=q("#send");
var T=function(en,hi){return lang==="hi"?hi:en};
function say(t,c){st.textContent=t;st.className="fstat "+c;st.style.display="block"}
function val(n){return(f.elements[n].value||"").trim()}
var F=["btype","name","business","city","state","pincode","phone","email","gst","qty","message"];
function summary(){return"ORGIT trade enquiry\nType: "+val("btype")+"\nName: "+val("name")+"\nBusiness: "+val("business")+"\nCity: "+val("city")+", "+val("state")+" "+val("pincode")+"\nMobile: "+val("phone")+"\nEmail: "+val("email")+"\nGST: "+val("gst")+"\nFirst order: "+val("qty")+"\nMessage: "+val("message")}
q("#waSend").onclick=function(){if(!val("name")||!val("phone")){say(T("Please fill your name and mobile number first.","पहले अपना नाम और मोबाइल नंबर भरें।"),"err");return}window.open(wa(summary()),"_blank","noopener")};
f.addEventListener("submit",function(e){
e.preventDefault();if(f.elements.botcheck.checked)return;
if(!C.formKey){say(T("The form is not live yet. Please use WhatsApp or email.","फ़ॉर्म अभी चालू नहीं है। कृपया WhatsApp या ईमेल का उपयोग करें।"),"err");return}
btn.disabled=true;say(T("Sending…","भेज रहे हैं…"),"ok");
var d={access_key:C.formKey,subject:"New ORGIT trade enquiry: "+val("btype")+", "+val("city"),from_name:"ORGIT Website"};
F.forEach(function(k){d[k]=val(k)});
fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)})
.then(function(r){return r.json()}).then(function(j){btn.disabled=false;if(!j.success)throw 0;f.reset();say(T("Thank you! Your enquiry has reached ORGIT. Our team will contact you on the mobile number you shared.","धन्यवाद! आपकी पूछताछ ORGIT तक पहुँच गई है। हमारी टीम आपके दिए नंबर पर संपर्क करेगी।"),"ok")})
.catch(function(){btn.disabled=false;say(T("Could not send. Please try again, or use WhatsApp.","भेज नहीं पाए। फिर कोशिश करें या WhatsApp का उपयोग करें।"),"err")});
});
})();
