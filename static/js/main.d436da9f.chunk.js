(this.webpackJsonpfame=this.webpackJsonpfame||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),i=a.n(r),l=(a(13),a(3)),c=a(4),o=a(6),u=a(5),h=a(7);a(14);var m=function(e){var t=e.min,a=e.max,n=e.value,r=e.type,i=e.onChange;return s.a.createElement("div",{className:"Slider"},s.a.createElement("input",{min:t,max:a,type:r,value:n,onChange:i}))};a(15);var g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).fileChangedHandler=function(e){a.setState({selectedFile:e.target.files[0]});var t=new FileReader;t.onloadend=function(){a.setState({imagePreviewUrl:t.result})},t.readAsDataURL(e.target.files[0])},a.handleDownloadClick=function(e){e.preventDefault();var t,n=a.imagePreviewCanvasRef.current,s=a.state.imagePreviewUrl,r=(t=s).substring("data:image/".length,t.indexOf(";base64")),i=n.toDataURL("image/"+r),l="previewFile."+r,c=function(e,t){for(var a=e.split(","),n=a[0].match(/:(.*?);/)[1],s=atob(a[1]),r=s.length,i=new Uint8Array(r);r--;)i[r]=s.charCodeAt(r);return new File([i],t,{type:n})}(i,l);console.log(c),function(e,t){var a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("download",t),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}(i,l)},a.saveOnCanvas=function(e){!function(e,t,a){var n=e,s=n.getContext("2d"),r=new Image;r.src=t,r.onload=function(){s.filter=a,s.drawImage(r,0,0,n.width,n.height)}}(a.imagePreviewCanvasRef.current,a.state.imagePreviewUrl,a.getFilterString())},a.imagePreviewCanvasRef=s.a.createRef(),a.state={hue:0,blur:0,grayscale:0,contrast:100,opacity:100,brightness:100,invert:0,sepia:0,saturate:100,selectedFile:null,imagePreviewUrl:null,fileExtension:null},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getFilterStyle",value:function(){return{filter:"hue-rotate(".concat(this.state.hue,"deg) blur(").concat(this.state.blur,"px) \n        grayscale(").concat(this.state.grayscale,"%) contrast(").concat(this.state.contrast,"%)\n        opacity(").concat(this.state.opacity,"%) brightness(").concat(this.state.brightness,"%)\n        invert(").concat(this.state.invert,"%) sepia(").concat(this.state.sepia,"%)\n        saturate(").concat(this.state.saturate,"%)"),transform:"rotate(0deg)"}}},{key:"getFilterString",value:function(){return"hue-rotate(".concat(this.state.hue,"deg) blur(").concat(this.state.blur,"px) \n        grayscale(").concat(this.state.grayscale,"%) contrast(").concat(this.state.contrast,"%)\n        opacity(").concat(this.state.opacity,"%) brightness(").concat(this.state.brightness,"%)\n        invert(").concat(this.state.invert,"%) sepia(").concat(this.state.sepia,"%)\n        saturate(").concat(this.state.saturate,"%)")}},{key:"render",value:function(){var e=this,t=this.getFilterStyle(),a=s.a.createElement("div",{className:"previewText image-container"},"Please select an Image for Preview");return this.state.imagePreviewUrl&&(a=s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.state.imagePreviewUrl,style:t,alt:"icon",width:"600",height:"500"})," ")),s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("div",{className:"btn"},s.a.createElement("input",{type:"file",className:"choosefile",name:"avatar",onChange:this.fileChangedHandler}),s.a.createElement("button",{className:"save",onClick:this.saveOnCanvas},"Save"),s.a.createElement("button",{className:"download",onClick:this.handleDownloadClick},"Download")," "),a," ",s.a.createElement("canvas",{width:"500",height:"500",ref:this.imagePreviewCanvasRef})),s.a.createElement("div",null,s.a.createElement("span",null,"Hue: ",this.state.hue),s.a.createElement(m,{min:"0",max:"360",type:"range",value:this.state.hue,onChange:function(t){e.setState({hue:t.target.value})}}),s.a.createElement("span",null,"Blur: ",this.state.blur),s.a.createElement(m,{min:"0",max:"10",type:"range",value:this.state.blur,onChange:function(t){e.setState({blur:t.target.value})}}),s.a.createElement("span",null,"Grayscale: ",this.state.grayscale),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.grayscale,onChange:function(t){e.setState({grayscale:t.target.value})}}),s.a.createElement("span",null,"Contrast: ",this.state.contrast),s.a.createElement(m,{min:"0",max:"200",type:"range",value:this.state.contrast,onChange:function(t){e.setState({contrast:t.target.value})}}),s.a.createElement("span",null,"Opacity: ",this.state.opacity),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.opacity,onChange:function(t){e.setState({opacity:t.target.value})}}),s.a.createElement("span",null,"Brightness: ",this.state.brightness),s.a.createElement(m,{min:"0",max:"200",type:"range",value:this.state.brightness,onChange:function(t){e.setState({brightness:t.target.value})}}),s.a.createElement("span",null,"Invert: ",this.state.invert),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.invert,onChange:function(t){e.setState({invert:t.target.value})}}),s.a.createElement("span",null,"Sepia: ",this.state.sepia),s.a.createElement(m,{min:"0",max:"100",type:"range",value:this.state.sepia,onChange:function(t){e.setState({sepia:t.target.value})}}),s.a.createElement("span",null,"Saturate: ",this.state.saturate),s.a.createElement(m,{min:"0",max:"200",type:"range",value:this.state.saturate,onChange:function(t){e.setState({saturate:t.target.value})}}))))}}]),t}(n.Component);a(16),a(17);var v=function(){return s.a.createElement("div",{className:"PageHeader"},s.a.createElement("h1",null,"Image Editor"))};var d=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null),s.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.d436da9f.chunk.js.map