(function(t){function e(e){for(var i,a,n=e[0],l=e[1],c=e[2],p=0,d=[];p<n.length;p++)a=n[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,n=1;n<s.length;n++){var l=s[n];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/zti/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"popup",appear:""}},[t.showPopup?s("div",{staticClass:"backdrop",on:{click:function(e){t.popupItem=null}}}):t._e()]),s("transition",{attrs:{name:"popup",appear:""}},[t.showPopup?s("Popup",{attrs:{item:t.popupItem},on:{close:function(e){t.popupItem=null}}}):t._e()],1),s("TheHeader"),s("router-view",{staticClass:"layout"}),s("TheFooter")],1)},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showSearchBar&&"Login"!=t.$route.name?i("header",{staticClass:"header header--search"},[i("label",{staticClass:"primary-input"},[i("i",{staticClass:"mdi mdi-magnify"}),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchStr,expression:"searchStr",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Szukaj..."},domProps:{value:t.searchStr},on:{input:function(e){e.target.composing||(t.searchStr=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("button",{attrs:{title:"Zamknij wyszukiwanie"},on:{click:t.hideSearchbar}},[i("i",{staticClass:"mdi mdi-close-circle-outline"})])])]):i("header",{staticClass:"header"},[i("button",{attrs:{title:"Menu"},on:{click:function(e){t.sidebarOpen=!0}}},[i("i",{staticClass:"mdi mdi-menu"})]),i("h1",{staticClass:"header-title",on:{click:t.home}},[i("img",{staticClass:"header-title-logo",attrs:{src:s("fef8"),alt:"LOGO"}}),t._v(" Notatnik ")]),i("transition",{attrs:{name:"sidebar"}},[i("nav",{directives:[{name:"show",rawName:"v-show",value:t.sidebarOpen,expression:"sidebarOpen"}],staticClass:"header-nav",on:{click:function(e){t.sidebarOpen=!1}}},[i("ul",[i("li",[i("router-link",{attrs:{to:{name:"Start"}}},[t._v("Start")])],1),i("li",[i("router-link",{attrs:{to:{name:"Notes"}}},[t._v("Notes")])],1),t.$store.state.user?t._e():i("li",[i("router-link",{attrs:{to:{name:"Login"}}},[t._v("Zaloguj się")])],1)])])]),"Login"!==t.$route.name?i("button",{attrs:{title:"Szukaj"},on:{click:function(e){t.showSearchBar=!0}}},[i("i",{staticClass:"mdi mdi-magnify"})]):i("div",{staticClass:"fill"})],1)},n=[],l={name:"Header",data(){return{sidebarOpen:!1,showSearchBar:!1}},methods:{hideSearchbar(){this.showSearchBar=!1,this.searchStr=""},home(){"Start"!=this.$route.name&&this.$router.push({name:"Start"})}},computed:{searchStr:{get(){return this.$store.state.searchStr},set(t){this.$store.commit("setSearch",t)}}}},c=l,u=s("2877"),p=Object(u["a"])(c,a,n,!1,null,null,null),d=p.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div"),t._v(" Artur Borkowski, WSB © 2022 "),s("button",{on:{click:t.scrollTop}},[s("i",{staticClass:"mdi mdi-arrow-up-drop-circle"})])])},h=[],v={name:"Footer",methods:{scrollTop(){window.scrollTo(0,0)}}},f=v,g=Object(u["a"])(f,m,h,!1,null,null,null),y=g.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dialog",{staticClass:"popup",attrs:{open:"true"},on:{click:function(t){t.stopPropagation()}}},[t.editMode?[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],staticClass:"popup-title popup-title--edit",attrs:{type:"text",placeholder:"Podaj tytuł"},domProps:{value:t.title},on:{focus:function(e){t.err=!1},input:function(e){e.target.composing||(t.title=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.description,expression:"description",modifiers:{trim:!0}}],staticClass:"popup-text popup-text--edit",attrs:{placeholder:"Podaj opis"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("div",{staticClass:"popup-actions"},[t.err?s("p",{staticClass:"popup-actions__errmsg"},[t._v(" Tytuł nie może być pusty! ")]):t._e(),s("button",{staticClass:"btn btn-secondary",on:{click:t.cancel}},[t._v("Anuluj")]),t.objExists?s("button",{staticClass:"btn btn-primary",on:{click:t.remove}},[t._v(" Usuń ")]):t._e(),s("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Zapisz")])])]:[s("h2",{staticClass:"popup-title"},[t._v(t._s(t.$props.item.title))]),s("p",{staticClass:"popup-text"},[t._v(t._s(t.$props.item.description))]),s("div",{staticClass:"popup-actions"},[s("button",{staticClass:"btn btn-secondary",on:{click:t.close}},[t._v("Zamknij")]),s("button",{staticClass:"btn btn-primary",on:{click:t.edit}},[t._v("Edytuj")])])]],2)},w=[],_={name:"Popup",props:{item:{type:Object,required:!0}},data(){return{editMode:!1,id:null,title:"",description:"",err:!1,pin:!1}},methods:{setObject(){var t,e,s,i,o,r,a,n;this.id=null!==(t=null===(e=this.$props.item)||void 0===e?void 0:e.id)&&void 0!==t?t:this.$store.state.incrementId,this.title=null!==(s=null===(i=this.$props.item)||void 0===i?void 0:i.title)&&void 0!==s?s:"",this.description=null!==(o=null===(r=this.$props.item)||void 0===r?void 0:r.description)&&void 0!==o?o:"",this.pin=null!==(a=null===(n=this.$props.item)||void 0===n?void 0:n.pin)&&void 0!==a&&a},cancel(){this.objExists||this.close(),this.editMode=!1},close(){this.$emit("close")},edit(){this.setObject(),this.editMode=!0},remove(){var t;this.$store.dispatch("_removeNote",null===(t=this.$props.item)||void 0===t?void 0:t.id),this.close()},save(){this.title?(this.$store.dispatch(this.objExists?"_editNote":"_addNote",{id:this.id,title:this.title,description:this.description,pin:this.pin}),this.close()):this.err=!0}},computed:{objExists(){var t;return!(null===(t=this.$props.item)||void 0===t||!t.id)}},mounted(){this.objExists||this.edit()}},k=_,$=Object(u["a"])(k,b,w,!1,null,null,null),C=$.exports,N={name:"App",components:{TheHeader:d,TheFooter:y,Popup:C},computed:{popupItem:{get(){return this.$store.state.popup},set(t){this.$store.commit("setPopup",t)}},showPopup(){return null!==this.popupItem}},mounted(){this.$store.dispatch("setApp")}},j=N,x=(s("5c0b"),Object(u["a"])(j,o,r,!1,null,null,null)),S=x.exports,O=s("9483");Object(O["a"])("/zti/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var P=s("8c4f"),I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"layout-start"},[s("article",{staticClass:"layout-start-hello"},[s("section",{staticClass:"layout-start-hello-item"},[s("h2",[t._v("Witaj "+t._s(t.username)+"!")]),t.user?s("button",{staticClass:"btn btn-primary",attrs:{title:"Wyloguj się"},on:{click:t.logout}},[t._v(" Wyloguj się ")]):s("button",{staticClass:"btn btn-primary",attrs:{title:"Zaloguj się"},on:{click:t.login}},[t._v(" Zaloguj się ")])]),s("section",{staticClass:"layout-start-hello-item"},[s("h3",[t._v(" Pogoda w "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.city,expression:"city",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Wpisz miasto"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(": "),s("button",{attrs:{title:"Odśwież"},on:{click:t.refreshWeather}},[s("i",{staticClass:"mdi mdi-refresh",class:t.isLoading?"mdi-spin":null})])]),t.weatherOk?s("div",{staticClass:"layout-start-hello-item__weather"},[s("img",{attrs:{src:t.weatherIconUrl,alt:"Pogoda"}}),t._v(" "+t._s(t.weatherText)+" ")]):s("div",{staticClass:"layout-start-hello-item__weather"},[t._v(" "+t._s(t.isLoading?"Wczytywanie":"Brak aktualnych danych pogodowych")+" ")])])]),s("h3",[t._v("Twoje przypięte notatki:")]),s("article",{staticClass:"layout-start-notes"},[t.pinnedNotes.length?t._l(t.pinnedNotes,(function(t){return s("NoteItem",{key:t.id,attrs:{item:t}})})):s("p",[t._v(" Nie masz przypiętych notatek, naciśnij "),s("router-link",{attrs:{to:{name:"Notes"}}},[t._v(" tutaj")]),t._v(" aby coś przypiąć ")],1)],2)])},z=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"layout-notes-item",on:{click:t.showItem}},[s("h2",{staticClass:"layout-notes-item-title"},[t._v(" "+t._s(t.item.title)+" "),s("button",{staticClass:"btn btn-secondary",on:{click:function(e){return e.stopPropagation(),t.togglePin.apply(null,arguments)}}},[s("i",{staticClass:"mdi",class:t.item.pin?"mdi-pin-off":"mdi-pin"})])]),s("p",{staticClass:"layout-notes-item-description"},[t._v(" "+t._s(t.item.description)+" ")])])},A=[],E={name:"Notes",props:{item:{type:Object,required:!0}},methods:{showItem(){this.$store.commit("setPopup",this.item)},togglePin(){this.$store.dispatch("_toggleNotePin",this.item.id)}}},Z=E,M=Object(u["a"])(Z,L,A,!1,null,null,null),T=M.exports,W={name:"Start",components:{NoteItem:T},data(){return{isLoading:!1}},computed:{city:{get(){return this.$store.state.city},set(t){this.$store.commit("setCity",t)}},weather(){return this.$store.state.weather},weatherOk(){var t;return 200===(null===(t=this.weather)||void 0===t?void 0:t.status)},weatherText(){let t="";var e,s;this.weatherOk&&(t+=`${this.weather.data.name}, ${null===(e=this.weather.data.weather)||void 0===e||null===(s=e[0])||void 0===s?void 0:s.description} (${this.weather.data.main.temp}°C)`);return t},weatherIconUrl(){var t,e,s;if(!this.weatherOk)return"";let i="http://openweathermap.org/img/wn/";return i+=null!==(t=null===(e=this.weather.data.weather)||void 0===e||null===(s=e[0])||void 0===s?void 0:s.icon)&&void 0!==t?t:"02d",i+="@2x.png",i},user(){return this.$store.state.user},username(){let t=this.user;return t?(t=t.split("@"),t[0]):"Niezalogowany"},pinnedNotes(){console.log(this.$store.state.incrementId);let t=this.$store.getters.myNotes;return t=t.filter(t=>!0===t.pin),t}},methods:{async refreshWeather(){if(!this.isLoading){this.$store.commit("setWeather",{}),this.isLoading=!0;try{await this.$store.dispatch("fetchWeather")}catch(t){console.error(t)}finally{this.isLoading=!1}}},login(){this.$router.push({name:"Login"})},logout(){this.$store.commit("setUser",null)}},async mounted(){await this.refreshWeather()}},B=W,U=Object(u["a"])(B,I,z,!1,null,null,null),F=U.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"layout-notes"},[s("article",{staticClass:"layout-notes-item layout-notes-item--first",attrs:{title:"Dodaj nowe"},on:{click:t.openPopup}},[t._m(0)]),t._l(t.myNotes,(function(t){return s("NoteItem",{key:t.id,attrs:{item:t}})}))],2)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",[s("i",{staticClass:"mdi mdi-plus-circle"})])}],J={name:"Notes",components:{NoteItem:T},computed:{myNotes(){console.log(this.$store.state.incrementId);let t=this.$store.getters.myNotes;return t}},methods:{openPopup(){this.$store.commit("setPopup",{})}}},D=J,G=Object(u["a"])(D,H,q,!1,null,null,null),V=G.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"layout-login"},[s("form",{on:{submit:function(t){t.preventDefault()}}},[s("label",{staticClass:"primary-input"},[s("i",{staticClass:"mdi mdi-at"}),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("label",{staticClass:"primary-input"},[s("i",{staticClass:"mdi mdi-key"}),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.pass,expression:"pass",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"Hasło"},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.login}},[t._v("Zaloguj się")]),s("p",{staticClass:"errmsg"},[t._v(t._s(t.errorMsg))])])])},Q=[],R={name:"Login",data(){return{email:"",pass:"",errorMsg:null}},methods:{login(){this.emailIsValid()?(this.errorMsg=this.passIsInvalid(),null===this.errorMsg&&(this.$store.commit("setUser",this.email),this.$router.push({name:"Start"}))):this.errorMsg="Niepoprawny adres email"},emailIsValid(){var t;if((null===(t=this.email)||void 0===t?void 0:t.length)<6)return!1;const e=/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return e.test(this.email)},passIsInvalid(){var t;return(null===(t=this.pass)||void 0===t?void 0:t.length)<8?"Hasło jest zbyt krótkie":/[A-Z]/.test(this.pass)?/[a-z]/.test(this.pass)?/[0-9]/.test(this.pass)?/[^A-Za-z0-9]/.test(this.pass)?null:"Brak znaku specjalnego":"Brak cyfry":"Brak małej litery":"Brak dużej litery"}}},X=R,Y=Object(u["a"])(X,K,Q,!1,null,null,null),tt=Y.exports;i["a"].use(P["a"]);const et=[{path:"/",name:"Start",component:F},{path:"/notatki",name:"Notes",component:V},{path:"/login",name:"Login",component:tt}],st=new P["a"]({mode:"hash",base:"/zti/",routes:et});var it=st,ot=(s("caad"),s("2f62")),rt=s("bc3a"),at=s.n(rt);i["a"].use(ot["a"]);var nt=new ot["a"].Store({state:{notes:[],searchStr:"",popup:null,incrementId:1,user:null,city:"Gdańsk",weather:null},mutations:{setSearch(t,e){t.searchStr=e},setPopup(t,e){t.popup=e},addNote(t,e){t.notes.push(e)},editNote(t,e){const s=t.notes.findIndex(t=>t.id===e.id);-1!==s&&(t.notes[s]=e)},removeNote(t,e){t.notes=t.notes.filter(t=>t.id!==e)},saveNotes(t){t.incrementId++,localStorage.setItem("NoteList",JSON.stringify(t.notes))},getNotes(t){const e=localStorage.getItem("NoteList");e&&(t.notes=JSON.parse(e))},setCity(t,e){t.city=e},setWeather(t,e){t.weather=e},toggleNotePin(t,e){const s=t.notes.findIndex(t=>t.id===e);-1!==s&&(t.notes[s].pin=!t.notes[s].pin)},setUser(t,e){t.user=e}},actions:{_addNote({commit:t},e){t("addNote",e),t("saveNotes")},_editNote({commit:t},e){t("editNote",e),t("saveNotes")},_removeNote({commit:t},e){t("removeNote",e),t("saveNotes")},_toggleNotePin({commit:t},e){t("toggleNotePin",e),t("saveNotes")},setApp({commit:t}){t("getNotes")},async fetchWeather({commit:t,state:e}){const s="https://api.openweathermap.org/data/2.5/weather?q="+e.city+"&appid=5d88d93cdf6856f899b662d83a133959&units=metric&lang=pl";await at.a.get(s).then(e=>t("setWeather",e)).catch(t=>console.error(t))}},getters:{myNotes(t){var e;let s=t.notes,i=t.searchStr;return(null===(e=i)||void 0===e?void 0:e.length)>1&&(i=i.toLocaleLowerCase(),s=s.filter(t=>t.title.toLocaleLowerCase().includes(i))),s}}});i["a"].config.productionTip=!1,new i["a"]({router:it,store:nt,render:t=>t(S)}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){},fef8:function(t,e,s){t.exports=s.p+"img/logo.497d4e55.svg"}});
//# sourceMappingURL=app.7420eccf.js.map