let body=document.querySelector("body"),hamburger=document.querySelector(".hamburger"),navLinks=document.querySelector(".nav__links");hamburger.onclick=function(){hamburger.classList.toggle("hamburger_active"),navLinks.classList.toggle("nav__links_active"),body.classList.toggle("scroll-none")};let navLinksList=document.querySelectorAll(".nav__links a");for(let s=0;s<navLinksList.length;s++)navLinksList[s].onclick=function(){hamburger.classList.remove("hamburger_active"),navLinks.classList.remove("nav__links_active"),body.classList.remove("scroll-none")};let coursesButtons=document.querySelectorAll(".courses__item button"),coursesDiscriptionItems=document.querySelectorAll(".courses__discription .models__item"),wrapper=document.querySelector(".wrapper");for(let s=0;s<coursesButtons.length;s++)coursesButtons[s].onclick=function(){coursesDiscriptionItems[s].classList.add("models_active"),wrapper.classList.add("wrapper_active"),body.classList.add("scroll-none")};let startTime=new Date,clock=startTime.getHours().toString();clock>6&&clock<20?body.classList.remove("boby_darck"):body.classList.add("boby_darck");let inputs=document.querySelectorAll(".input-box input"),spans=document.querySelectorAll(".input-box span"),textarea=document.querySelector("textarea");for(let s=0;s<inputs.length;s++)inputs[s].onfocus=function(){2==s?(spans[3].classList.add("span_top"),spans[3].classList.add("span_color")):(spans[s].classList.add("span_top"),spans[s].classList.add("span_color"),1==s&&""==inputs[1].value&&(inputs[1].value="+"))},inputs[s].onblur=function(){2==s?(spans[3].classList.remove("span_color"),""==inputs[2].value&&spans[3].classList.remove("span_top")):(""!=inputs[s].value&&"+"!=inputs[s].value||(spans[s].classList.remove("span_top"),1==s&&(inputs[1].value="")),spans[s].classList.remove("span_color"))};textarea.onfocus=function(){spans[2].classList.add("span_top"),spans[2].classList.add("span_color")},textarea.onblur=function(){spans[2].classList.remove("span_color"),""==textarea.value&&spans[2].classList.remove("span_top")};let submitIframe=document.querySelector("#order iframe"),submitWrapper=document.querySelector("#order .submit-wrapper");submitIframe.onload=function(){submitWrapper.classList.add("submit-wrapper_active"),setTimeout((()=>{document.forms.order.reset();for(let s=0;s<spans.length;s++)spans[s].classList.remove("span_top"),spans[s].classList.remove("span_color");submitWrapper.classList.remove("submit-wrapper_active")}),3e3)};let privacyButton=document.querySelector("#privacy-button"),privacyText=document.querySelector(".text-privacy");privacyButton.onclick=function(){privacyText.classList.add("text-privacy_active"),wrapper.classList.add("wrapper_active"),body.classList.add("scroll-none")},wrapper.onclick=function(){privacyText.classList.remove("text-privacy_active"),wrapper.classList.remove("wrapper_active"),body.classList.remove("scroll-none");for(let s=0;s<coursesButtons.length;s++)coursesDiscriptionItems[s].classList.remove("models_active")};