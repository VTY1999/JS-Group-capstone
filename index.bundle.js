(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nbody {\r\n  font-family: "Poppins", sans-serif;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.navlist {\r\n  display: none;\r\n}\r\n\r\n.main {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 20px;\r\n  padding: 0 50px;\r\n}\r\n\r\n.movie-art {\r\n  width: 100%;\r\n}\r\n\r\n.subtitles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.subtitles h4 {\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-btn {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.common-btn {\r\n  background-color: white;\r\n  color: black;\r\n  padding: 5px;\r\n  border: none;\r\n}\r\n\r\n.counter {\r\n  width: 50px;\r\n  border: none;\r\n  background: none;\r\n  font-size: 16px;\r\n  color: white;\r\n  pointer-events: none;\r\n}\r\n\r\n.bot::before {\r\n  background: none;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.support-container {\r\n  display: flex;\r\n  padding: 20px 10px 0 20px;\r\n  gap: 60px;\r\n}\r\n\r\n.icon-link {\r\n  margin-right: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 30px 50px 0 50px;\r\n  }\r\n\r\n  .logoImg {\r\n    height: 60px;\r\n  }\r\n\r\n  .navlist {\r\n    display: flex;\r\n    list-style-type: none;\r\n    gap: 50px;\r\n    font-size: 24px;\r\n  }\r\n\r\n  .nav-items {\r\n    color: white;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .nav-items:hover {\r\n    color: green;\r\n  }\r\n\r\n  .main {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 20px;\r\n    padding: 0 50px;\r\n  }\r\n\r\n  .grid-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: 500ms ease-in;\r\n  }\r\n\r\n  .grid-items:hover {\r\n    transform: scale(1.05);\r\n  }\r\n\r\n  footer {\r\n    bottom: 0;\r\n    left: 25%;\r\n    color: white;\r\n  }\r\n\r\n  .footer-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  .heading {\r\n    padding: 10px 0;\r\n  }\r\n\r\n  .news {\r\n    text-align: center;\r\n  }\r\n\r\n  input[type="email"] {\r\n    padding: 10px;\r\n  }\r\n\r\n  input[type="submit"] {\r\n    background: rgb(240, 8, 8);\r\n    border: none;\r\n    color: white;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .list {\r\n    list-style-type: none;\r\n  }\r\n\r\n  .social {\r\n    display: flex;\r\n    padding-top: 20px;\r\n    margin-top: 40px;\r\n    gap: 40px;\r\n    justify-content: center;\r\n  }\r\n\r\n  .s-icon {\r\n    margin: 5px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .icon-link:hover {\r\n    color: rgb(4, 187, 4);\r\n  }\r\n\r\n  .pop-up {\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 111;\r\n    background-color: rgba(231, 224, 224, 0.1);\r\n  }\r\n\r\n  .pop-content {\r\n    position: relative;\r\n    padding: 50px;\r\n    width: 90vw;\r\n    border-radius: 15px;\r\n    height: 90vh;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    background: rgb(85, 83, 83);\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n  .res-image-container {\r\n    width: 44%;\r\n    height: auto;\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    gap: 100px;\r\n  }\r\n\r\n  .block {\r\n    display: flex;\r\n    flex-flow: column;\r\n  }\r\n}\r\n\r\n#active {\r\n  color: rgb(4, 163, 4);\r\n}\r\n\r\n.nav-items {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-items:hover {\r\n  color: rgb(3, 160, 3);\r\n}\r\n\r\n#main {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 20px;\r\n  padding: 0 50px;\r\n}\r\n\r\n.grid-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter {\r\n  bottom: 0;\r\n  left: 25%;\r\n  color: white;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.heading {\r\n  padding: 10px 0;\r\n}\r\n\r\n.news {\r\n  text-align: center;\r\n}\r\n\r\ninput[type="email"] {\r\n  padding: 10px;\r\n}\r\n\r\ninput[type="submit"] {\r\n  background: rgb(240, 8, 8);\r\n  border: none;\r\n  color: white;\r\n  padding: 10px;\r\n}\r\n\r\n.list {\r\n  list-style-type: none;\r\n}\r\n\r\n.list-item:hover {\r\n  color: rgb(4, 173, 4);\r\n}\r\n\r\n.social {\r\n  display: flex;\r\n  padding-top: 20px;\r\n  margin-top: 40px;\r\n  justify-content: center;\r\n}\r\n\r\n.reserve-pop-up {\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: auto;\r\n  padding-bottom: 10000px;\r\n  backdrop-filter: blur(10px);\r\n  z-index: 1111;\r\n  background-color: rgba(14, 13, 13, 0.9);\r\n}\r\n\r\n.res-pop-content {\r\n  position: relative;\r\n  font-size: 9px;\r\n  padding: 10px;\r\n  padding-bottom: 20px;\r\n  margin-top: 10px;\r\n  width: 90vw;\r\n  height: 100%;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n  background-color: rgb(25, 26, 25);\r\n}\r\n\r\n.res-close-btn {\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  background: none;\r\n  border: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin-top: 14px;\r\n  margin-right: 55px;\r\n  cursor: pointer;\r\n  color: pink;\r\n}\r\n\r\n.top-container {\r\n  padding-top: 30px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.big-comments-div {\r\n  display: none;\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  backdrop-filter: blur(10px);\r\n  z-index: 1111;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  width: 100%;\r\n}\r\n\r\n.comments-popup {\r\n  position: relative;\r\n  height: 100vh;\r\n  background-color: rgba(25, 26, 25, 0.25);\r\n}\r\n\r\n.image-and-download {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 20px;\r\n}\r\n\r\n.tv-show-image {\r\n  width: 60%;\r\n  max-width: 400px;\r\n}\r\n\r\n.download-btn {\r\n  width: 60%;\r\n  max-width: 400px;\r\n  margin-top: 10px;\r\n  background-color: pink;\r\n  border: none;\r\n  padding: 10px;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.reserve-img {\r\n  width: 100%;\r\n}\r\n\r\n.close-btn {\r\n  background: none;\r\n  border: none;\r\n  color: pink;\r\n  font-weight: 700;\r\n  font-size: 3em;\r\n  position: absolute;\r\n  right: 0;\r\n  padding-right: 5%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.tv-show-info {\r\n  margin-top: 30px;\r\n  padding: 0 10%;\r\n}\r\n\r\n.tv-show-title {\r\n  font-size: 25px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tv-shows-genres {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.lang-and-rating {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.summary-div {\r\n  text-align: justify;\r\n}\r\n\r\n.comments-header,\r\n.add-comments-header {\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  font-size: 25px;\r\n}\r\n\r\n.all-comments {\r\n  max-height: 50vh;\r\n  overflow-y: auto;\r\n  padding-bottom: 20px;\r\n  margin-bottom: 30px;\r\n  color: #fff;\r\n}\r\n\r\n.single-comment {\r\n  width: 80%;\r\n  margin: 7px auto;\r\n  background-color: whitesmoke;\r\n  color: pink;\r\n  padding: 2.5%;\r\n}\r\n\r\n.add-comments-form {\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.comments-input {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  max-width: 550px;\r\n}\r\n\r\n.comment-nameInput {\r\n  padding: 10px;\r\n  outline-color: pink;\r\n}\r\n\r\n.comment-insights {\r\n  padding: 10px;\r\n  height: 120px;\r\n  outline-color: pink;\r\n}\r\n\r\n::placeholder {\r\n  font-family: poppins, sans-serif;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.add-comment-btn {\r\n  background-color: pink;\r\n  border: none;\r\n  padding: 7px;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.download-link {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.submission-fail {\r\n  color: red;\r\n  text-align: center;\r\n}\r\n\r\n.tv-shows-parent {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-bottom: 20px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.tvshows-tvshows {\r\n  color: white;\r\n  font-size: 30px;\r\n}\r\n\r\n.movies-number {\r\n  color: white;\r\n  margin-right: 10px;\r\n  font-size: 30px;\r\n}\r\n\r\n/* [MEDIA QUERIES] FOR MAIN CONTENT */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 30px 50px 0 50px;\r\n  }\r\n\r\n  .logoImg {\r\n    height: 60px;\r\n  }\r\n\r\n  .navlist {\r\n    display: flex;\r\n    list-style-type: none;\r\n    gap: 50px;\r\n    font-size: 24px;\r\n  }\r\n\r\n  .nav-items {\r\n    color: white;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .nav-items:hover {\r\n    color: green;\r\n  }\r\n\r\n  .main {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 20px;\r\n    padding: 0 50px;\r\n  }\r\n\r\n  .grid-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  footer {\r\n    bottom: 0;\r\n    left: 25%;\r\n    color: white;\r\n  }\r\n\r\n  .footer-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  .heading {\r\n    padding: 10px 0;\r\n  }\r\n\r\n  .news {\r\n    text-align: center;\r\n  }\r\n\r\n  input[type="email"] {\r\n    padding: 10px;\r\n  }\r\n\r\n  input[type="submit"] {\r\n    background: rgb(240, 8, 8);\r\n    border: none;\r\n    color: white;\r\n    padding: 10px;\r\n  }\r\n\r\n  .list {\r\n    list-style-type: none;\r\n  }\r\n\r\n  .social {\r\n    display: flex;\r\n    padding-top: 20px;\r\n    margin-top: 40px;\r\n    justify-content: center;\r\n  }\r\n\r\n  .pop-up {\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 111;\r\n    background-color: rgba(231, 224, 224, 0.1);\r\n  }\r\n\r\n  .pop-content {\r\n    position: relative;\r\n    padding: 50px;\r\n    width: 90vw;\r\n    border-radius: 15px;\r\n    height: 90vh;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    background: rgb(85, 83, 83);\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n  .image-container {\r\n    width: 30%;\r\n    height: auto;\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    gap: 100px;\r\n  }\r\n\r\n  .block {\r\n    display: flex;\r\n    flex-flow: column;\r\n  }\r\n}\r\n\r\n/* [MEDIA QUERIES] COMMENTS POP-UP */\r\n\r\n@media only screen and (min-width: 800px) {\r\n  .top-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .tv-show-info {\r\n    margin-top: 0;\r\n    padding: 20px 5% 0 0;\r\n    max-width: 550px;\r\n  }\r\n\r\n  .tv-show-image {\r\n    width: 100%;\r\n    max-width: 400px;\r\n  }\r\n\r\n  .download-btn {\r\n    width: 100%;\r\n  }\r\n\r\n  .pop-up {\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 111;\r\n    background-color: rgba(231, 224, 224, 0.1);\r\n  }\r\n\r\n  .pop-content {\r\n    position: relative;\r\n    padding: 50px;\r\n    width: 90vw;\r\n    border-radius: 15px;\r\n    height: 90vh;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    background: rgb(85, 83, 83);\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 95%;\r\n  }\r\n\r\n  .image-container {\r\n    width: 30%;\r\n    height: auto;\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    gap: 100px;\r\n  }\r\n\r\n  .block {\r\n    display: flex;\r\n    flex-flow: column;\r\n  }\r\n\r\n  .single-comment {\r\n    max-width: 600px;\r\n    padding: 5px 20px;\r\n  }\r\n}\r\n\r\n#res-form {\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.reserve-form {\r\n  text-align: center;\r\n}\r\n\r\nlabel {\r\n  color: white;\r\n}\r\n\r\ninput[type="text"],\r\ninput[type="date"] {\r\n  height: 40px;\r\n  width: 300px;\r\n  margin: 10px auto;\r\n  border: none;\r\n  border-radius: 10px;\r\n}\r\n\r\n#res-btn {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  background-color: rgba(3, 107, 3);\r\n  width: 150px;\r\n  padding: 13px;\r\n  border-radius: 10px;\r\n  margin-left: 150px;\r\n  transition: all 1s;\r\n  cursor: pointer;\r\n}\r\n\r\n#res-btn:hover {\r\n  background-color: rgba(13, 202, 13, 0.7);\r\n}\r\n\r\n.res-container {\r\n  height: 150px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* media querries for reservation popup */\r\n@media screen and (max-width: 767px) {\r\n  .res-image-container {\r\n    width: 50%;\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 689px) {\r\n  .res-image-container {\r\n    width: 40%;\r\n    height: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .res-image-container {\r\n    width: 25%;\r\n    height: 50%;\r\n  }\r\n\r\n  .res-container {\r\n    height: 50px;\r\n  }\r\n\r\n  #res-form {\r\n    height: 72%;\r\n  }\r\n\r\n  #res-btn {\r\n    padding: 10px;\r\n    font-size: 13px;\r\n    width: 74px;\r\n  }\r\n}\r\n',""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var m=e(d),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)r[m].references++,r[m].updater(g);else{var u=o(g,t);t.byIndex=s,r.splice(s,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var p=e(i[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},313:(n,r,e)=>{n.exports=e.p+"4fa8a72f2c939a28294a.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),p=e.n(l),d=e(589),m=e.n(d),g=e(426),u={};u.styleTagTransform=m(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),r()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals;var f=e(313);const h="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NSCVuCbdO9LZQzdC9gT1",x="https://api.tvmaze.com/shows",b=(document.querySelector(".logo"),document.querySelector(".details-wrapper")),y=document.querySelector(".all-comments"),w=document.querySelector(".comment-nameInput"),v=document.querySelector(".comment-insights"),k=document.querySelector(".add-comment-btn"),j=document.querySelector(".submission-fail"),S=document.querySelector(".main"),$=document.querySelector(".big-comments-div"),E=(document.querySelector(".comments-counter"),async(n,r)=>{const e=await fetch(`${h}/likes`);(await e.json()).forEach((e=>{e.item_id===n&&(r.value=`${e.likes}`)}))}),T=n=>{n.forEach(((n,r)=>{const e=document.querySelector(".main");r>219&&(e.innerHTML+=`\n      <div class="grid-items">\n        <ul class="image-card">\n          <img class="movie-art" src="${n.image.medium}" alt="">\n        </ul>\n        <div class="subtitles">\n          <h4>${n.name}</h4>    \n          <span class="Like-container">\n          <span><i id="${n.id}" class="fa fa-heart bot"></i></span>\n          \n          <input type="number" id="${n.id}" class="counter" value="" name="">\n          \n          <span id="${n.id}"></span>\n          </span>   \n        </div>\n        <div class="movie-btn">\n          <button class="common-btn" id="${n.id}">Comments</i></button>\n        </div> \n      </div>\n    `)})),(()=>{const n=document.querySelector(".main"),r=document.querySelector(".movies-number"),e=n.childElementCount;r.textContent=`${document.querySelector(".main").childElementCount}`})(),document.querySelectorAll(".counter").forEach(((n,r)=>{E(r+1,n)}))},z=new Image;z.src=f,document.querySelector(".logo").appendChild(z),(async()=>{const n=await(async()=>{const n=await fetch(x);return await n.json()})();await T(n)})(),S.addEventListener("click",(async n=>{if("common-btn"===n.target.className){const r=n.target.id;$.style.display="block",await(async n=>{const r=await fetch(`${x}/${n}`),e=await r.json(),t=e.name,o=e.image.medium,i=e.language,a=e.officialSite,s=e.rating.average,c=(350,(l=e.summary).length>350?l.substring(0,350):l);var l;let p="";const d=e.genres;d.forEach(((n,r)=>{r<d.length-1?p+=`${n}, `:p+=n}));const m=`\n    <button class="close-btn">X</button>\n    <div class="top-container">\n      <div class="image-and-download">\n        <img class="tv-show-image" src="${o}">\n        <button class="download-btn" type="button">\n          <a class="download-link" href="${a}" target="_blank">Download</a>\n        </button>\n      </div>\n      <div class="tv-show-info">\n        <h3 class="tv-show-title">${t}</h3>\n        <div class="tv-shows-genres">\n          <strong>Genre: </strong>${p}\n        </div>\n        <div class="lang-and-rating">\n          <p class="tv-show-language"><strong>Language: </strong>${i}</p>\n          <p class="tv-show-rating"><strong>Rating: </strong>${s}</p>\n        </div>\n        <div class="summary-div">\n          <strong>SUMMARY: </strong><br>\n          ${c}\n        </div>\n      </div>\n    </div>\n  `;b.innerHTML=m})(r),await(async n=>{const r=await fetch(`${h}/comments?item_id=${n}`),e=await r.json();let t,o="";e.length>0&&(t=e.reverse(),t.forEach((r=>{o+=`\n        <div class="single-comment" id='${n}'>\n          <div class="comment-date">${r.creation_date}</div>\n          <p class="name-and-message"><strong>${r.username}: </strong>${r.comment}</p>\n        </div>\n      `}))),y.innerHTML=o})(r),await(async n=>{const r=await fetch(`${h}/comments?item_id=${n}`),e=(await r.json()).length;return document.querySelector(".comments-counter").innerHTML=void 0===e?"(0)":`(${e})`,e})(r)}})),k.addEventListener("click",(async()=>{""!==w.value&&""!==v.value?((async n=>{await fetch(`${h}/comments`,{method:"POST",body:JSON.stringify({item_id:"100",username:`${w.value}`,comment:`${v.value}`}),headers:{"Content-Type":"application/json; charset=UTF-8"}})})(),w.value="",v.value=""):j.innerHTML="Submission failed. Please try again."})),b.addEventListener("click",(n=>{"close-btn"===n.target.className&&($.style.display="none")})),w.addEventListener("click",(()=>{j.innerHTML=""})),v.addEventListener("click",(()=>{j.innerHTML=""})),S.addEventListener("click",(async n=>{if("fa fa-heart bot"===n.target.className){const r=n.target.id,e=parseInt(r,10);await(async n=>await fetch(`${h}/likes`,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({item_id:n})}))(e);const t=n.target.parentElement.nextElementSibling;await E(e,t)}}))})()})();