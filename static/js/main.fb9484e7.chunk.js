(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),l=(a(17),a(1));var u=function(){var e=Object(n.useState)(new Date),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return s(new Date)}),1e3);return function(){clearInterval(e)}})),r.a.createElement("h1",{className:"clockFont text-white"},a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}))};var o=function(){var e=Object(n.useState)(new Date),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({days:null,hrs:null,min:null,sec:null,mil:null}),u=Object(l.a)(c,2),o=u[0],i=u[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),b=d[0],h=d[1],p=36e5;function E(e){return e=e<10?"0".concat(e):e}return Object(n.useEffect)((function(){var e=(new Date).getFullYear(),t=new Date(e,5,22,16,40);new Date>t&&e++,s(new Date(e,5,22,16,40))}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){var t=a.valueOf()-Date.now(),n=Math.floor(t/864e5);t-=864e5*n;var r=Math.floor(t/p);t-=r*p;var s=Math.floor(t/6e4);t-=6e4*s;var c=Math.floor(t/1e3);t-=1e3*c;var l=Math.floor(t/100);0===n&&0===r&&0===s&&0===c&&0===l&&(h(!0),clearInterval(e)),i({days:n,hrs:r,min:s,sec:c,mil:l})}),100);return function(){clearInterval(e)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-warning rounded"},r.a.createElement("div",{className:"row"},b?r.a.createElement("h1",{className:"mx-auto"},"Happy Birthday!"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"clockFont"},o.days+" days "+E(o.hrs)+":"+E(o.min)+":"+E(o.sec)+"."+o.mil),r.a.createElement("p",{className:"mx-auto"},"until my birthday")))))};var i=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),u=Object(l.a)(c,2),o=u[0],i=u[1];function m(e){i({lat:e.coords.latitude,long:e.coords.longitude})}return Object(n.useEffect)((function(){o&&!a&&fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(o.lat,"&lon=").concat(o.long,"&APPID=").concat("3304f27423b1698d8944ae09a12b24d9")).then((function(e){return e.json()})).then((function(e){s(e)}))})),o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-info rounded"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"text-white mx-auto"},a?a.name:"loading weather...")),r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"text-white col-9"},a?(1.8*(a.main.temp-273.15)+32).toFixed(0)+"\xb0":null),a?r.a.createElement("img",{className:"col-3",src:"http://openweathermap.org/img/w/"+a.weather[0].icon+".png",alt:"Weather Icon"}):null))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-info rounded"},r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"button",id:"loadWeather",onClick:function(){navigator.geolocation.getCurrentPosition(m)},className:"btn bg-primary mx-auto my-4"},"Load Local Weather"))))},m=a(3),d=a(6),b=a(9),h=a(7),p=a(2),E=a(10),f=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).calcBtns=["C","","","/","7","8","9","X","4","5","6","-","1","2","3","+","0","",".","="],a.state={num1:"",num2:"",operand:"",equalTemp:void 0,eqPress:!1,display:"0"},a.userClick=a.userClick.bind(Object(p.a)(a)),a.numPress=a.numPress.bind(Object(p.a)(a)),a.keyPress=a.keyPress.bind(Object(p.a)(a)),a.mathCalc=a.mathCalc.bind(Object(p.a)(a)),a.multiCalc=a.multiCalc.bind(Object(p.a)(a)),a.equalCalc=a.equalCalc.bind(Object(p.a)(a)),a.clear=a.clear.bind(Object(p.a)(a)),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"userClick",value:function(e){var t=e.target.innerHTML;"C"===t||"/"===t||"X"===t||"-"===t||"+"===t||"="===t||"."===t?this.keyPress(t):this.numPress(t)}},{key:"numPress",value:function(e){if(this.setState({equalTemp:void 0}),""===this.state.operand||this.state.eqPress)if(this.state.eqPress&&this.setState({num1:e,operand:"",eqPress:!1,display:e}),"0"!==e||"0"!==this.state.num1&&""!==this.state.num1){if(this.state.num1.length<10)if("0"===this.state.num1)this.setState({num1:e,display:e});else{var t=this.state.num1+e;this.setState({num1:t,display:t})}}else this.setState({num1:"0",display:"0"});else if("0"!==e||"0"!==this.state.num2&&""!==this.state.num2){if(this.state.num2.length<10)if("0"===this.state.num2)this.setState({num2:e,display:e});else{var a=this.state.num2+e;this.setState({num2:a,display:a})}}else this.setState({num2:"0",display:"0"})}},{key:"keyPress",value:function(e){switch("="!==e&&this.setState({equalTemp:void 0,eqPress:!1}),e){default:if(""!==this.state.num1){if(""===this.state.num2){this.setState({display:e,operand:"X"===e?"*":e});break}this.multiCalc(this.state.operand),this.setState({operand:"X"===e?"*":e});break}break;case"=":if("."===this.state.num1||"."===this.state.num2){this.clear(),this.setState({display:"error:decimal use"});break}if(this.state.num1===1/0||this.state.num1===-1/0){this.clear(),this.setState({display:"Infinity"});break}if("/"===this.state.operand&&"0"===this.state.num2){this.clear(),this.setState({display:"error:div by zero"});break}if(this.setState({eqPress:!0}),""===this.state.num1&&""===this.state.num2)break;if(""===this.state.num2){this.equalCalc(this.state.operand);break}this.setState({equalTemp:this.state.num2,display:this.mathCalc(this.state.operand)});break;case".":""===this.state.operand?this.state.num1.includes(".")||this.setState({num1:this.state.num1+".",display:this.state.num1+"."}):this.state.num2.includes(".")||this.setState({num2:this.state.num2+".",display:this.state.num2+"."});break;case"C":this.clear()}}},{key:"mathCalc",value:function(e){switch(e){case"+":var t=Number(this.state.num1)+Number(this.state.num2);return this.setState({num1:t,num2:""}),t;case"-":var a=Number(this.state.num1)-Number(this.state.num2);return this.setState({num1:a,num2:""}),a;case"/":var n=Number(this.state.num1)/Number(this.state.num2);return this.setState({num1:n,num2:""}),n;case"*":var r=Number(this.state.num1)*Number(this.state.num2);return this.setState({num1:r,num2:""}),r;default:console.log("WARNING: Math Calc default case.")}}},{key:"multiCalc",value:function(e){switch(e){case"+":this.setState({num1:Number(this.state.num1)+Number(this.state.num2),num2:"",display:Number(this.state.num1)+Number(this.state.num2)});break;case"-":this.setState({num1:Number(this.state.num1)-Number(this.state.num2),num2:"",display:Number(this.state.num1)-Number(this.state.num2)});break;case"/":this.setState({num1:Number(this.state.num1)/Number(this.state.num2),num2:"",display:Number(this.state.num1)/Number(this.state.num2)});break;case"*":this.setState({num1:Number(this.state.num1)*Number(this.state.num2),num2:"",display:Number(this.state.num1)*Number(this.state.num2)});break;default:console.log("WARNING: Multi Calc default case")}}},{key:"equalCalc",value:function(e){var t=this.state.equalTemp;switch(void 0===this.state.equalTemp&&(this.setState({equalTemp:this.state.num1}),t=this.state.num1),e){case"+":this.setState({num1:Number(this.state.num1)+Number(t),num2:"",display:Number(this.state.num1)+Number(t)});break;case"-":this.setState({num1:Number(this.state.num1)-Number(t),num2:"",display:Number(this.state.num1)-Number(t)});break;case"/":this.setState({num1:Number(this.state.num1)/Number(t),num2:"",display:Number(this.state.num1)/Number(t)});break;case"*":this.setState({num1:Number(this.state.num1)*Number(t),num2:"",display:Number(this.state.num1)*Number(t)});break;case"":return this.state.num1;default:console.log("WARNING: Equal Calc default case triggered.")}}},{key:"clear",value:function(){this.setState({num1:"",num2:"",operand:"",equalTemp:void 0,eqPress:!1,display:"0"})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-light rounded"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{id:"displayWindow",className:"col bg-light text-right display-4 rounded"},this.state.display)),r.a.createElement("div",{className:"row"},this.calcBtns.map((function(t,a){return r.a.createElement("button",{key:""!==t?t:"blank".concat(a),onClick:e.userClick,type:"button",className:"col-3 border bg-light display-4 btn",disabled:""===t},t)})))))}}]),t}(r.a.Component);var y=function(){var e=Object(n.useRef)("all"),t=Object(n.useRef)([]),a=Object(n.useState)(),s=Object(l.a)(a,2),c=s[0],u=s[1],o="",i=r.a.createRef(),d=function e(t,a,n){Object(m.a)(this,e),this.id=t,this.title=a,this.done=n};Object(n.useEffect)((function(){t.current.map((function(e,t){var a=document.getElementById(t);return e.done&&a?a.checked=!0:!e.done&&a&&(a.checked=!1,a.nextSibling.className="custom-control-label"),null}))}),[c]),Object(n.useEffect)((function(){if(localStorage.length>0){for(var e=0;e<JSON.parse(window.localStorage.todoList).length;e++){var a=JSON.parse(window.localStorage.todoList)["".concat(e)];t.current.push(new d(e,a.title,a.done))}h()}}),[]),document.addEventListener("keydown",(function(e){13===e.keyCode&&""!==o.trim()&&(t.current.push(new d(t.length,o,!1)),localStorage.setItem("todoList",JSON.stringify(t.current)),o="",i.value="",h())}));var b={wordBreak:"break-all"};function h(){u(r.a.createElement(r.a.Fragment,null,t.current.map((function(e,t){return r.a.createElement("div",{key:"groupKey_".concat(t),className:"custom-control custom-checkbox ml-5"},r.a.createElement("input",{key:"inputKey_".concat(t),onChange:p,type:"checkbox",className:"custom-control-input",id:t}),r.a.createElement("label",{style:b,key:"labelKey_".concat(t),className:e.done?"custom-control-label text-success":"custom-control-label",htmlFor:t},e.title))}))))}function p(e){e.target.checked?(e.target.nextElementSibling.className="custom-control-label text-success",t.current[e.target.id].done=!0,localStorage.setItem("todoList",JSON.stringify(t.current))):(e.target.nextElementSibling.className="custom-control-label",t.current[e.target.id].done=!1,localStorage.setItem("todoList",JSON.stringify(t.current))),E()}function E(){switch(e.current){case"todo":u(r.a.createElement(r.a.Fragment,null,t.current.map((function(e,t){return e.done?null:r.a.createElement("div",{key:"groupKey_".concat(t),className:"custom-control custom-checkbox ml-5"},r.a.createElement("input",{key:"inputKey_".concat(t),onChange:p,type:"checkbox",className:"custom-control-input",id:t}),r.a.createElement("label",{key:"labelKey_".concat(t),className:e.done?"custom-control-label text-success":"custom-control-label",htmlFor:t},e.title))}))));break;case"done":u(r.a.createElement(r.a.Fragment,null,t.current.map((function(e,t){return e.done?r.a.createElement("div",{key:"groupKey_".concat(t),className:"custom-control custom-checkbox ml-5"},r.a.createElement("input",{key:"inputKey_".concat(t),onChange:p,type:"checkbox",className:"custom-control-input",id:t}),r.a.createElement("label",{key:"labelKey_".concat(t),className:e.done?"custom-control-label text-success":"custom-control-label",htmlFor:t},e.title)):null}))));break;default:h()}}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-info border rounded"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{id:"todoTitle",className:"display-4 text-dark mt-2 mx-auto"},"to-do")),r.a.createElement("div",{className:"row"},r.a.createElement("input",{id:"todoInput",ref:function(e){return i=e},className:"m-2 test-dark rounded mx-auto",style:{width:"80%"},type:"text",placeholder:"What needs to get done?",onChange:function(e){o=e.target.value}})),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{id:"listRow"},c)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{onMouseEnter:function(){if(localStorage.length>0){for(var e=0,a=0,n=0;n<t.current.length;n++)t.current[n].done?e++:a++;document.getElementById("viewDone").innerHTML="".concat(e),document.getElementById("viewAll").innerHTML="".concat(t.current.length),document.getElementById("viewTodo").innerHTML="".concat(a)}},onMouseLeave:function(){localStorage.length>0&&(document.getElementById("viewDone").innerHTML="&#10004;",document.getElementById("viewAll").innerHTML="ALL",document.getElementById("viewTodo").innerHTML="&#10006;")},className:"btn-group pt-2 mx-auto",role:"group","aria-label":"Selection Buttons"},r.a.createElement("button",{id:"viewDone",onClick:function(){e.current="done",E()},type:"button",className:"btn btn-success"},"\u2714"),r.a.createElement("button",{id:"viewAll",onClick:function(){e.current="all",E()},type:"button",className:"btn btn-secondary"},"ALL"),r.a.createElement("button",{id:"viewTodo",onClick:function(){e.current="todo",E()},type:"button",className:"btn btn-danger"},"\u2716"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"btn-group p-2 mb-2 mx-auto",display:"block","aria-label":"Selection Buttons"},r.a.createElement("button",{id:"toggleAll",onClick:function(){return function(){var e=!0;t.current.map((function(t){return t.done||(e=!1),null})),t.current.map((function(t,a){return t.done&&e&&document.getElementById(a).click(),t.done||e||document.getElementById(a).click(),null}))}()},type:"button",className:"btn btn-primary"},r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udd18")),r.a.createElement("button",{id:"delete",onClick:function(){return function(){var e=[];t.current.map((function(t){return t.done?e.push(!1):e.push(!0),null}));var a=t.current;t.current=[],e.map((function(e,n){return e&&t.current.push(a[n]),null})),localStorage.setItem("todoList",JSON.stringify(t.current)),u(r.a.createElement(r.a.Fragment,null,t.current.map((function(e,t){return r.a.createElement("div",{key:"groupKey_".concat(t),className:"custom-control custom-checkbox ml-5"},r.a.createElement("input",{key:"inputKey_".concat(t),onChange:p,type:"checkbox",className:"custom-control-input",id:t}),r.a.createElement("label",{key:"labelKey_".concat(t),className:e.done?"custom-control-label text-success":"custom-control-label",htmlFor:t},e.title))})),";"))}()},type:"button",className:"btn btn-primary"},r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udca3"))))))};var g=function(){var e=Object(n.useState)("I can read your mind"),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(r.a.createElement("p",{className:"text-primary mx-auto p-3"},"Press go")),u=Object(l.a)(c,2),o=u[0],i=u[1],m=Object(n.useState)(""),d=Object(l.a)(m,2),b=d[0],h=d[1],p=Object(n.useState)("GO"),E=Object(l.a)(p,2),f=E[0],y=E[1],g=Object(n.useRef)(1),N=Object(n.useRef)();function v(){switch(g.current){case 1:s("I can read your mind"),i(r.a.createElement("p",{className:"text-primary mx-auto p-3"},"Press go")),h(""),y("GO");break;case 2:s("Pick a number from 01-99"),i(r.a.createElement("p",{className:"text-primary mx-auto p-3"},"When you have your number, click next")),h("NEXT"),y("RESET");break;case 3:s("Add both digits together to get a new number"),i(r.a.createElement("p",{className:"text-primary mx-auto p-3"},"Ex: 25 is 2 + 5 = 7",r.a.createElement("br",null),"Ex: 05 is 0 + 5 = 5",r.a.createElement("br",null),"Click next to proceed")),h("NEXT"),y("RESET");break;case 4:s("Subtract your new number from your old number"),i(r.a.createElement("p",{className:"text-primary mx-auto p-3"},"Ex: 25 - 07 = 18 ",r.a.createElement("br",null),"Ex: 05 - 05 = 0 ",r.a.createElement("br",null),"Click next to proceed")),h("NEXT"),y("RESET");break;case 5:var e=function(e){for(var t=[],a=[],n=["=","@","*","$","%","^","&","+","#"],r=0;r<9;r++){var s=Math.floor(Math.random()*(9-(9-n.length)));a.push(n[s]),n.splice(s,1)}for(var c=0;c<e;c++){var l=c;t.push("".concat(l," - ").concat(a[c%9]))}return t}(100);s(e.map((function(e,t){return r.a.createElement("div",{key:t},e)}))),i(r.a.createElement("p",{className:"text-primary mx-auto p-3"},"Scroll to find the result of the previous equation.",r.a.createElement("br",null),"Note the symbol beside the result.")),h("REVEAL"),N.current=e[0][4],y("RESET");break;case 6:s("Your symbol is: ".concat(N.current)),i(r.a.createElement("p",{className:"text-primary mx-auto p-3"},"Press reset to start over")),h(""),y("RESET");break;default:return null}}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-light rounded"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{style:{maxHeight:"250px",fontSize:"40px",overflow:"scroll"},id:"text",className:"text-center"},a)),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"button",id:"reset",onClick:function(){1===g.current?g.current++:g.current=1,v()},className:"btn bg-primary mx-auto"},f)),r.a.createElement("div",{className:"row"},o),r.a.createElement("div",{className:"row text-center"},r.a.createElement("button",{type:"button",id:"next",onClick:function(){g.current++,v()},className:"btn rounded-circle border p-3 mx-auto mb-3"},b))))},N=a(8),v=a.n(N);var k=function(){var e={backgroundImage:"url(".concat(v.a,")"),backgroundSize:"442px 1500px",borderRadius:"10px",backgroundRepeat:"no-repeat",width:"442px",height:"1500px",borderWidth:"3px",borderStyle:"solid"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid bg-dark"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-0 col-sm-2 col-md-3 col-lg-4"}),r.a.createElement("div",{className:"col-12 col-sm-8 col-md-6 col-lg-4 text-center"},r.a.createElement("div",{className:"p-1 py-3"},r.a.createElement("section",{style:e,className:"d-none d-sm-block"},r.a.createElement(u,null),r.a.createElement(i,null),r.a.createElement(o,null),r.a.createElement(f,null),r.a.createElement(y,null),r.a.createElement(g,null)),r.a.createElement("section",{className:"d-block d-sm-none"},r.a.createElement(u,null),r.a.createElement(i,null),r.a.createElement(o,null),r.a.createElement(f,null),r.a.createElement(y,null),r.a.createElement(g,null)))),r.a.createElement("div",{className:"col-0 col-sm-2 col-md-3 col-lg-4"}))))};a(18);var S=function(){return r.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a.p+"static/media/background-1.935f36cf.jpg"}},[[11,1,2]]]);
//# sourceMappingURL=main.fb9484e7.chunk.js.map