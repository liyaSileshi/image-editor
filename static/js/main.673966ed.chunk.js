(this.webpackJsonpfame=this.webpackJsonpfame||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(2),i=a.n(r),c=(a(13),a(3)),l=a(4),o=a(6),u=a(5),h=a(7);a(14);var m=function(t){var e=t.min,a=t.max,n=t.value,r=t.type,i=t.onChange;return s.a.createElement("div",{className:"Slider"},s.a.createElement("input",{min:e,max:a,type:r,value:n,onChange:i}))},g=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={hue:0,blur:0,grayscale:0,contrast:100,opacity:100,brightness:100,invert:0,sepia:0,saturate:100},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e={filter:"hue-rotate(".concat(this.state.hue,"deg) blur(").concat(this.state.blur,"px) \n        grayscale(").concat(this.state.grayscale,"%) contrast(").concat(this.state.contrast,"%)\n        opacity(").concat(this.state.opacity,"%) brightness(").concat(this.state.brightness,"%)\n        invert(").concat(this.state.invert,"%) sepia(").concat(this.state.sepia,"%)\n        saturate(").concat(this.state.saturate,"%)"),transform:"rotate(45deg)"};return s.a.createElement("div",{style:p.container},s.a.createElement("img",{src:"images/liya.jpeg",width:"500",height:"auto",style:e,alt:"enteredimg"}),s.a.createElement("span",null,"Hue: ",this.state.hue),s.a.createElement(m,{min:"0",max:"360",type:"range",value:this.state.hue,onChange:function(e){t.setState({hue:e.target.value})}}),s.a.createElement("span",null,"Blur: ",this.state.blur),s.a.createElement(m,{min:"0",max:"10",type:"range",value:this.state.blur,onChange:function(e){t.setState({blur:e.target.value})}}),s.a.createElement("span",null,"Grayscale: ",this.state.grayscale),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.grayscale,onChange:function(e){t.setState({grayscale:e.target.value})}}),s.a.createElement("span",null,"Contrast: ",this.state.contrast),s.a.createElement(m,{min:"0",max:"200",type:"range",value:this.state.contrast,onChange:function(e){t.setState({contrast:e.target.value})}}),s.a.createElement("span",null,"Opacity: ",this.state.opacity),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.opacity,onChange:function(e){t.setState({opacity:e.target.value})}}),s.a.createElement("span",null,"Brightness: ",this.state.brightness),s.a.createElement(m,{min:"0",max:"200",type:"range",value:this.state.brightness,onChange:function(e){t.setState({brightness:e.target.value})}}),s.a.createElement("span",null,"Invert: ",this.state.invert),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.invert,onChange:function(e){t.setState({invert:e.target.value})}}),s.a.createElement("span",null,"Sepia: ",this.state.sepia),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.sepia,onChange:function(e){t.setState({sepia:e.target.value})}}),s.a.createElement("span",null,"Saturate: ",this.state.saturate),s.a.createElement(m,{min:"0",max:"200",type:"range",value:this.state.saturate,onChange:function(e){t.setState({saturate:e.target.value})}}))}}]),e}(n.Component),p={container:{display:"flex",flexDirection:"column"},input:{padding:"".concat(.33,"em"),fontSize:"".concat(20,"px")},output:{fontSize:"".concat(30,"px"),padding:"".concat(.33,"em"),fontWeight:"bold"},label:{alignSelf:"flex-start"}};a(15);var v=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.673966ed.chunk.js.map