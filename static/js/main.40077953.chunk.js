(this["webpackJsonpgif-libs"]=this["webpackJsonpgif-libs"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),i=a.n(c),u=(a(9),a(1));function s(){return l.a.createElement("div",null,l.a.createElement("header",{className:"Header"},l.a.createElement("h1",null,"GIF-Libs"),l.a.createElement("h2",{className:"nav"},"Sample ||| Nav")))}function r(e){return l.a.createElement("div",{className:"SearchFields"},l.a.createElement("div",{className:"inputs"},l.a.createElement("div",{className:"adjectiveInputDiv"},l.a.createElement("label",null,"Please enter an"),l.a.createElement("input",{type:"text",className:"adjectiveInput",placeholder:"Adjective...",value:e.adjectiveValue,onChange:function(t){e.setValue(t.target.value)}}),l.a.createElement("label",null,","))))}function o(e){return l.a.createElement("div",{className:"SearchFields"},l.a.createElement("div",{className:"inputs"},l.a.createElement("div",{className:"nounInputDiv"},l.a.createElement("label",null,"then enter a"),l.a.createElement("input",{type:"text",className:"nounInput",placeholder:"Noun...",value:e.nounValue,onChange:function(t){e.setValue(t.target.value)}}),l.a.createElement("label",null,","))))}function m(e){return l.a.createElement("form",{onSubmit:function(t){if(""!==e.nounValue)try{fetch("https://api.giphy.com/v1/gifs/search?api_key=a15jk0QUUQFTun4jox8DnPfZd701vIX2&q=".concat(e.nounValue,"&limit=1&offset=0&rating=r&lang=en")).then((function(e){return e.json()})).then((function(t){e.setNounGif({url:t.data[0].embed_url,alt:""})}))}catch(a){console.log(a)}if(""!==e.adjectiveValue)try{fetch("https://api.giphy.com/v1/gifs/search?api_key=a15jk0QUUQFTun4jox8DnPfZd701vIX2&q=".concat(e.adjectiveValue,"&limit=1&offset=0&rating=r&lang=en")).then((function(e){return e.json()})).then((function(t){e.setAdjectiveGif({url:t.data[0].embed_url,alt:"adjective"})}))}catch(a){console.log(a)}if(""!==e.adjectiveValue&&""!==e.nounValue)try{fetch("https://api.giphy.com/v1/gifs/search?api_key=a15jk0QUUQFTun4jox8DnPfZd701vIX2&q=".concat(e.adjectiveValue,"%20").concat(e.nounValue,"&limit=1&offset=0&rating=r&lang=en")).then((function(e){return e.json()})).then((function(t){e.setCombinedGif({url:t.data[0].embed_url,alt:"noun"})}))}catch(a){console.log(a)}e.setAdjectiveValue(""),e.setNounValue(""),t.preventDefault()}},l.a.createElement("div",{className:"SearchFields"},l.a.createElement(r,{setGifs:e.setGifs,value:e.adjectiveValue,setValue:e.setAdjectiveValue}),l.a.createElement(o,{setGifs:e.setGifs,value:e.nounValue,setValue:e.setNounValue})),l.a.createElement("input",{className:"submitBtn",type:"submit",value:"Mix 'em Up"}))}function d(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"resultsTitle"},"Gif Results"),l.a.createElement("div",{className:"Results"},l.a.createElement("div",{className:"adjectiveResult"},l.a.createElement("iframe",{src:e.adjectiveGif.url,title:e.adjectiveGif.alt,value:e.adjectiveValue,height:"270",width:"480"})),l.a.createElement("div",{className:"nounResult"},l.a.createElement("iframe",{src:e.nounGif.url,title:e.nounGif.alt,value:e.nounValue,height:"270",width:"480"}))))}function f(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"combinedResultsTitle"},"Combined Gif Result"),l.a.createElement("div",{className:"CombinedResults"},l.a.createElement("div",{className:"CombinedResultsChild"},l.a.createElement("iframe",{src:e.combinedGif.url,title:e.combinedGif.alt,height:"338",width:"480"}))))}function v(){return l.a.createElement("div",{className:"Footer"},"Copyright 2020, Austin Veatch")}a(10);var h=function(){var e=Object(n.useState)((function(){return{url:"https://giphy.com/embed/3o6MbtSmRdZEB7jnwI",alt:""}})),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)((function(){return{url:"https://giphy.com/embed/l2JdTaFdKBU4uCdJS",alt:""}})),r=Object(u.a)(i,2),o=r[0],h=r[1],p=Object(n.useState)((function(){return{url:"https://giphy.com/embed/3o6ZsYIHKbppBG37dm",alt:"adjective and noun combined"}})),j=Object(u.a)(p,2),E=j[0],b=j[1],g=Object(n.useState)(""),N=Object(u.a)(g,2),G=N[0],V=N[1],y=Object(n.useState)(""),S=Object(u.a)(y,2),C=S[0],F=S[1];return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(m,{adjectiveGif:a,setAdjectiveGif:c,nounGif:o,setNounGif:h,setCombinedGif:b,nounValue:G,setNounValue:V,adjectiveValue:C,setAdjectiveValue:F}),l.a.createElement(d,{adjectiveGif:a,setAdjectiveGif:c,nounGif:o,setNounGif:h}),l.a.createElement(f,{combinedGif:E,setCombinedGif:b}),l.a.createElement(v,null))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.40077953.chunk.js.map