import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),m=t.elements.message,s=t.elements.email,a="feedback-form-state";try{s.value=JSON.parse(localStorage.getItem(a)).email??"",m.value=JSON.parse(localStorage.getItem(a)).message??""}catch(e){console.log(e.stack)}t.addEventListener("input",e=>{const l={email:t.elements.email.value.trim(),message:t.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(l))});t.addEventListener("submit",e=>{if(e.preventDefault(),!e.target.elements.email.value||!e.target.elements.message.value){alert("All fields must be filled out.");return}console.log("Submitted Form:",{email:e.target.elements.email.value.trim(),message:e.target.elements.message.value.trim()}),localStorage.removeItem(a),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
