(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},118:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),c=(a(104),a(34)),o=a(7),s=a(173),m=a(172),p=a(166),u=a(175),d=a(178),h=a(171),g=a(167),E=a(179),v=a(168),f=a(169),b=a(88),y=a.n(b),w=a(90),N=a.n(w),I=a(174),x=a(49),C=a(164),k=a(12),j=a(64),S=a.n(j),G=a(65),F=a.n(G),L=a(35),R=a.n(L),A=a(37),P=a(66),J=a(41),z=a(40),q=a(2),D=a(67),O=(a(105),new Audio);O.src="nintendo.wav",O.volume=.2;var B=function(e){Object(J.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleClick=function(){O.play()},e}return Object(P.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("canvas.webgl"),t=e.getBoundingClientRect(),a=new D.a,n=new q.Y,i=new q.a(16777215,.2);n.add(i);var r=new q.i(16777215,1);r.position.x=5,r.position.y=5,r.position.z=5,n.add(r);var l=new q.m;l.scale.set(.5,.5,.5),a.load("models/cube/cube.gltf",(function(e){for(;e.scene.children.length;){var t=e.scene.children[0];l.add(t)}}),(function(e){console.log("progress"),console.log(e)}),(function(e){console.log("error"),console.log(e)})),n.add(l);var c=new q.P(75,t.width/t.height,.01,100);c.position.z=1,c.position.x=1,c.position.y=1,n.add(c),c.lookAt(new q.ib(0,0,0));var o=new q.kb({canvas:e,alpha:!0});o.setSize(t.width,t.height),o.setClearColor(0,0),window.addEventListener("resize",(function(){var t=e.getBoundingClientRect();c.aspect=t.width/t.height,c.updateProjectionMatrix(),o.setSize(t.width,t.height)}));!function e(){l.rotation.y+=.005,l.rotation.x+=.005,o.render(n,c),window.requestAnimationFrame(e)}()}},{key:"render",value:function(){return i.a.createElement("div",{className:"webglCtnr"},i.a.createElement("canvas",{className:"webgl",onClick:this.handleClick}))}}]),a}(n.Component),T=(a(106),Object(n.createContext)("ENG")),W=a(176),M=a(13),H=a.n(M),V=function(){var e=i.a.useContext(T);return i.a.createElement("section",{className:"hero"},i.a.createElement("div",{className:"hero-body"},"ENG"===e?i.a.createElement(H.a,null,i.a.createElement("h1",null,"Front-end Developer"),i.a.createElement(x.a,{paragraph:!0,className:"aboutDescription"},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"I've been interested in programming since I was 13, I love what I do, especially bringing ideas to life."))):i.a.createElement(H.a,null,i.a.createElement("h1",null,"Developpeur Front-end"),i.a.createElement(x.a,{paragraph:!0,className:"aboutDescription"},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"Je m'int\xe9resse \xe0 la programmation depuis que j'ai 13 ans, j'adore ce que je fais, surtout donner vie \xe0 mes id\xe9es."))),i.a.createElement("div",{className:"hero-body-center"},i.a.createElement(H.a,null,i.a.createElement("div",{className:"profilePicCtnr"},i.a.createElement("div",null,i.a.createElement("img",{className:"profilePic",height:"150",width:"150",src:S.a}))),i.a.createElement(B,null)))),i.a.createElement(H.a,null,i.a.createElement("div",{className:"hero-foot"},i.a.createElement("div",{className:"illustrationCtnr"},i.a.createElement("img",{className:"illustration",src:F.a,title:"Designed by Freepik"})))))},_=(a(113),a(130)),K=a(165),U=a(71),Z=a.n(U),X=a(72),Y=a.n(X),$=a(73),Q=a.n($),ee=a(74),te=a.n(ee),ae=a(75),ne=a.n(ae),ie=a(76),re=a.n(ie),le=a(77),ce=a.n(le),oe=a(78),se=a.n(oe),me=a(79),pe=a.n(me),ue=[{iconClass:"htmlIcon",imgId:"htmlShow",imgAlt:"HTML5",iconSrc:Z.a,title:"HTML 5",textENG:"It's been nearly a year that I started coding with HTML 5",textFR:"Cela fait presque 1 an que je code avec HTML"},{iconClass:"cssIcon",imgId:"cssShow",imgAlt:"CSS3",iconSrc:Y.a,title:"CSS 3",textENG:"It's been nearly a year that I started coding with CSS 3",textFR:"Cela fait presque 1 an que je code avec CSS"},{iconClass:"jsIcon",imgId:"jsShow",imgAlt:"JavaScript",iconSrc:Q.a,title:"JavaScript",textENG:"It's been nearly a year that I started coding with JavaScript",textFR:"Cela fait presque 1 an que je code avec JavaScript"},{iconClass:"pythonIcon",imgId:"pythonShow",imgAlt:"Python",iconSrc:te.a,title:"Python",textENG:"I've began started coding with python since 2015. I really like it !",textFR:"J'ai commenc\xe9 \xe0 utiliser Python depuis 2015. J'adore ce language !"}],de=[{iconClass:"reactIcon",imgId:"reactShow",imgAlt:"ReactJS",iconSrc:ne.a,title:"ReactJS",textENG:"I just began using this technology. I love how it work!",textFR:"J'ai recemment commenc\xe9 a utiliser ReactJS. J'adore son principe de fonctionnement!"},{iconClass:"webglIcon",imgId:"webglShow",imgAlt:"WebGL",iconSrc:re.a,title:"WebGL",textENG:"I also just began with it, I love the the way it's working. I am also using ThreeJS with it!",textFR:"Recemment j'ai aussi commenc\xe9 a utiliser WebGL, j'adore la mani\xe8re dont il marche. J'utilise aussi ThreeJS avec..."},{iconClass:"firebaseIcon",imgId:"firebaseShow",imgAlt:"Firebase",iconSrc:ce.a,title:"Firebase",textENG:"I did some projects with this tool, really powerful and useful!",textFR:"J'ai d\xe9j\xe0 fais quelques projets avec Firebase, c'est tr\xe8s puissant et utile!"}],he=[{iconClass:"gitIcon",imgId:"gitShow",imgAlt:"Git",iconSrc:se.a,title:"Git",textENG:"This year, I began using git. I just realize how important it is !",textFR:"Cette ann\xe9e j'ai commenc\xe9 \xe0 utiliser git. Je comprend maintenant \xe0 quelle point c'est important !"},{iconClass:"vsCodeIcon",imgId:"vsCodeShow",imgAlt:"Visual Studio Code",iconSrc:pe.a,title:"VsCode",textENG:"I am working with Visual Code Studio IDE",textFR:"Je travaille avec l'IDE Visual Code Studio "}],ge=Object(C.a)((function(e){return{root:{height:180},container:{display:"flex"},paper:{width:200,position:"absolute",cursor:"default",top:"100%",left:"50%",transform:"translateX(-50%) !important",zIndex:1},typo:{padding:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}})),Ee=function(){var e=ge(),t=i.a.useContext(T),a=i.a.useState({htmlIcon:!1,cssIcon:!1,jsIcon:!1,pythonIcon:!1,reactIcon:!1,webglIcon:!1,firebaseIcon:!1,gitIcon:!1,vsCodeIcon:!1}),n=Object(c.a)(a,2),r=n[0],l=n[1],s=function(e){var t=e.currentTarget.getAttribute("class").split(" ")[1];l(Object(o.a)({htmlIcon:!1,cssIcon:!1,jsIcon:!1,pythonIcon:!1,reactIcon:!1,webglIcon:!1,firebaseIcon:!1,gitIcon:!1,vsCodeIcon:!1},t,!r[t]))};return i.a.createElement("section",{className:"skills"},i.a.createElement(H.a,null,"ENG"===t?i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Hi, I'm Aur\xe9lien. Welcome to my portfolio !"),i.a.createElement(x.a,{paragraph:!0,className:"skillsDescription"},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"I like programming since 2012, I first began doing small CLI projects that were only useful for me (usually done with Batch or Visual Basic), then I moved on to Python, to make more useful applications. I recently started learning web development, I really love it!"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Je m'appelle Aur\xe9lien. Bienvenue !"),i.a.createElement(x.a,{paragraph:!0,className:"skillsDescription"},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"J'adore programmer depuis 2012, j'ai d'abord commenc\xe9 par faire des petits projets \"CLI\" \xe0 des fins personnels (fait en Batch ou Visual Basic), puis j'ai decouvert Python ce qui m'as permis de faire des projets personnels plus complexes. J'ai recemment debut\xe9 le d\xe9veloppement web, j'adore \xe7a!")))),"ENG"===t?i.a.createElement("h4",null,"The langages I speak"):i.a.createElement("h4",null,"Les langages dont je parle"),i.a.createElement("div",{className:"skillsCtnr"},ue.map((function(a){return i.a.createElement("div",{key:a.imgId,className:"icon ".concat(a.iconClass),onClick:s},i.a.createElement(H.a,null,i.a.createElement("img",{src:a.iconSrc,id:a.imgId,alt:"".concat(a.imgAlt," icon"),width:"90px",height:"90px"})),i.a.createElement("span",{className:"tooltiptext"},a.title),i.a.createElement(K.a,{in:r[a.iconClass]},i.a.createElement(_.a,{elevation:4,className:e.paper},i.a.createElement(x.a,{className:e.typo},a.title),i.a.createElement(p.a,null),i.a.createElement(x.a,{className:e.typo},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"ENG"===t?a.textENG:a.textFR)))))}))),i.a.createElement(H.a,null,"ENG"===t?i.a.createElement("h4",null,"Technologies I am using"):i.a.createElement("h4",null,"Les technologies que j'utilise")),i.a.createElement("div",{className:"techCtnr"},de.map((function(a){return i.a.createElement("div",{key:a.imgId,className:"icon ".concat(a.iconClass),onClick:s},i.a.createElement(H.a,null,"Firebase"===a.title?i.a.createElement("img",{src:a.iconSrc,id:a.imgId,alt:"".concat(a.imgAlt," icon"),width:64,height:87}):i.a.createElement("img",{src:a.iconSrc,id:a.imgId,alt:"".concat(a.imgAlt," icon"),width:"90px",height:"90px"})),i.a.createElement("span",{className:"tooltiptext"},a.title),i.a.createElement(K.a,{in:r[a.iconClass]},i.a.createElement(_.a,{elevation:4,className:e.paper},i.a.createElement(x.a,{className:e.typo},a.title),i.a.createElement(p.a,null),i.a.createElement(x.a,{className:e.typo},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"ENG"===t?a.textENG:a.textFR)))))}))),i.a.createElement(H.a,null,"ENG"===t?i.a.createElement("h4",null,"Applications I am using"):i.a.createElement("h4",null,"Les applications que j'utilise")),i.a.createElement("div",{className:"appCtnr"},he.map((function(a){return i.a.createElement("div",{key:a.imgId,className:"icon ".concat(a.iconClass),onClick:s},i.a.createElement(H.a,null,i.a.createElement("img",{src:a.iconSrc,id:a.imgId,alt:"".concat(a.imgAlt," icon"),width:"90px",height:"90px"})),i.a.createElement("span",{className:"tooltiptext"},a.title),i.a.createElement(K.a,{in:r[a.iconClass]},i.a.createElement(_.a,{elevation:4,className:e.paper},i.a.createElement(x.a,{className:e.typo},a.title),i.a.createElement(p.a,null),i.a.createElement(x.a,{className:e.typo},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"ENG"===t?a.textENG:a.textFR)))))}))))},ve=(a(114),[{name:"Ponctual",description:{ENG:"Application intended for schools, allowing to manage students, teachers, delays, absences etc ...",FR:"Application destin\xe9e aux \xe9coles, permettant de g\xe9rer les \xe9l\xe8ves, les enseignants, les retards, les absences etc ..."},github:"https://github.com/strak-stark/Ponctual",type:{type:"courseProject",ENG:"course project",FR:"projet d'\xe9cole"},live:{toggle:!1,link:""}},{name:"nezzarKwick",description:{ENG:"Online chat using Kwick API",FR:"Chat en ligne utilisant l'API Kwick"},github:"https://github.com/strak-stark/nezzarKwick",type:{type:"courseProject",ENG:"course project",FR:"projet d'\xe9cole"},live:{toggle:!1,link:""}},{name:"Connect4",description:{ENG:"Simple Connect4 made with HTML, CSS and JavaScript",FR:"Simple Puissance 4 fait avec HTML, CSS et JavaScript"},github:"https://github.com/strak-stark/Connect4",type:{type:"sideProject",ENG:"side project",FR:"projet personnel"},live:{toggle:!0,link:"https://connect4-d38b3.web.app/"}},{name:"Strak's Lsb Hider",description:{ENG:"Strak's Lsb Hider is a CLI oriented Linux project that help you embed files (images, videos, texts etc...) into Images using least significant bit of each pixel.",FR:'Strak\'s Lsb Hider est un projet Linux orient\xe9 "CLI" qui vous aide \xe0 int\xe9grer des fichiers (images, vid\xe9os, textes etc ...) dans des images en utilisant le bit de poid faible (LSB) de chaque pixel.'},github:"https://github.com/strak-stark/StrakLsbHider",type:{type:"sideProject",ENG:"side project",FR:"projet personnel"},live:{toggle:!1,link:""}},{name:"WinCrypt",description:{ENG:'WinCrypt is a CLI oriented Linux project that help you encrypt files (images, videos, texts etc...) into ".wc" files that can be secure and encrypted with a custom key.',FR:'WinCrypt est un projet Linux orient\xe9 CLI qui vous aide \xe0 crypter des fichiers (images, vid\xe9os, textes etc ...) en fichiers ".wc" qui peuvent \xeatre s\xe9curis\xe9s et crypt\xe9s avec une cl\xe9 personnalis\xe9e.'},github:"https://github.com/strak-stark/WinCrypt",type:{type:"sideProject",ENG:"side project",FR:"projet personnel"},live:{toggle:!1,link:""}},{name:"DirCleaner",description:{ENG:"DirCleaner is a python program that help you clear your PC desktop using tkinter UI.",FR:"DirCleaner est un programme python qui vous aide \xe0 nettoyer le bureau de votre PC \xe0 l'aide de l'interface utilisateur de tkinter."},github:"https://github.com/strak-stark/DirCleaner",type:{type:"sideProject",ENG:"side project",FR:"projet personnel"},live:{toggle:!1,link:""}}]),fe=a(80),be=a(81),ye=function(){var e=i.a.useContext(T);return i.a.createElement("section",{className:"projects"},"ENG"===e?i.a.createElement("h2",null,"My last projects"):i.a.createElement("h2",null,"Mes derniers projets"),i.a.createElement("div",{className:"projectsCtnr"},i.a.createElement(H.a,null,ve.map((function(t){return i.a.createElement("article",{className:"project ".concat(t.name),key:t.name},"ENG"===e?i.a.createElement("span",{className:"badge ".concat(t.type.type)},t.type.ENG):i.a.createElement("span",{className:"badge ".concat(t.type.type)},t.type.FR),i.a.createElement("div",{className:"projectDataCtnr"},i.a.createElement("div",{className:"projectData"},i.a.createElement("h4",null,t.name),i.a.createElement(x.a,{paragraph:!0,className:"aboutDescription"},i.a.createElement(W.a,{fontFamily:"Lato",m:1},"ENG"===e?t.description.ENG:t.description.FR)),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:t.live.toggle?"space-between":"center",width:"250px"}},i.a.createElement("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"dataBtn"},i.a.createElement("div",{style:{width:"75px",display:"flex",alignItems:"center",justifyContent:"space-between"}},"Github",i.a.createElement("img",{src:R.a,alt:"Github Icon",width:"22px",height:"22px"}))),t.live.toggle?i.a.createElement("a",{href:t.live.link,target:"_blank",rel:"noopener noreferrer",className:"dataBtn"},i.a.createElement("div",{style:{width:"75px",display:"flex",alignItems:"center",justifyContent:"space-between"}},"ENG"===e?"Go live":"Tester",i.a.createElement(fe.a,{icon:be.a}))):null))))})))))},we=(a(118),a(82)),Ne=a.n(we),Ie=a(83),xe=a.n(Ie),Ce=function(){var e=i.a.useContext(T);return i.a.createElement("section",{className:"contact"},i.a.createElement("div",{className:"contactData"},"ENG"===e?i.a.createElement("h2",null,"Find me on social medias..."):i.a.createElement("h2",null,"Retrouvez moi sur les r\xe9saux sociaux..."),i.a.createElement("div",{className:"contactIcons"},i.a.createElement("a",{href:"https://twitter.com/AurelienNezzar",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:Ne.a,alt:"Twitter Icon",width:35,height:35})),i.a.createElement("a",{href:"https://github.com/strak-stark",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:R.a,alt:"Github Icon",width:35,height:35})),i.a.createElement("a",{href:"https://fr.linkedin.com/in/aur%C3%A9lien-nezzar-a33438180",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:xe.a,alt:"Linkedin Icon",width:35,height:35}))),"ENG"===e?i.a.createElement("h5",null,"... or send me an email : "):i.a.createElement("h5",null,"... ou envoyez-moi un email : "),i.a.createElement("div",{className:"emailCtnr"},i.a.createElement("p",null,i.a.createElement("a",{href:"mailto:aurelien.nezzar@outlooK.fr?subject=SweetWords"},"aurelien.nezzar@outlooK.fr")))))};var ke=function(){return i.a.createElement("div",null,i.a.createElement(V,null),i.a.createElement(Ee,null),i.a.createElement(ye,null),i.a.createElement(Ce,null))},je=a(85),Se=a.n(je),Ge=a(86),Fe=a.n(Ge),Le=a(87),Re=a.n(Le),Ae=a(89),Pe=a.n(Ae),Je=a(177),ze=a(84),qe=a(170),De=Object(C.a)((function(e){return{root:{display:"flex"},drawer:Object(o.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:{zIndex:e.zIndex.drawer+1},menuButton:Object(o.a)({},e.breakpoints.up("sm"),{display:"none"}),title:{flexGrow:1,fontSize:"25px"},toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1}}}));var Oe=function(e){var t=e.window,a=De(),n=(Object(k.a)(),i.a.useState(!1)),r=Object(c.a)(n,2),l=r[0],o=r[1],b=i.a.useState(!1),w=Object(c.a)(b,2),C=w[0],j=w[1],S=i.a.useState("ENG"),G=Object(c.a)(S,2),F=G[0],L=G[1],R=function(){o(!l)},A=[["ENG"===F?"About":"A propos",i.a.createElement(Se.a,null),"hero"],["ENG"===F?"Skills":"Comp\xe9tences",i.a.createElement(Fe.a,null),"skills"],["ENG"===F?"Projects":"Projets",i.a.createElement(Re.a,null),"projects"],["ENG"===F?"Contact me":"Me contacter",i.a.createElement(y.a,null),"contact"]],P=i.a.createElement("div",null,i.a.createElement("div",{className:a.toolbar}),i.a.createElement(p.a,null),i.a.createElement(g.a,null,A.map((function(e){return i.a.createElement(ze.Link,{activeClass:"active",to:e[2],spy:!0,smooth:!0,offset:-64,duration:100,key:e[0]},i.a.createElement(E.a,{button:!0},i.a.createElement(v.a,null,e[1]),i.a.createElement(f.a,{primary:e[0]})))})),i.a.createElement(E.a,{button:!0,key:"Open resume"},i.a.createElement(v.a,null,i.a.createElement(Pe.a,null)),i.a.createElement(f.a,{primary:"ENG"===F?"Open resume":"Voir CV"})),i.a.createElement(E.a,{key:"SwitchLang"},i.a.createElement(x.a,{component:"div"},i.a.createElement(qe.a,{component:"label",container:!0,alignItems:"center",spacing:1},i.a.createElement(qe.a,{item:!0},"ENG"),i.a.createElement(qe.a,{item:!0},i.a.createElement(Je.a,{checked:C,onChange:function(e){j(e.target.checked),e.target.checked?L("FR"):L("ENG")},name:"checkedLng",color:"primary"})),i.a.createElement(qe.a,{item:!0},"FR")))))),J=void 0!==t?function(){return t().document.body}:void 0;return i.a.createElement("div",{className:a.root},i.a.createElement(m.a,null),i.a.createElement(s.a,{position:"fixed",className:a.appBar},i.a.createElement(I.a,null,i.a.createElement(x.a,{className:a.title,variant:"h1",noWrap:!0},"Aur\xe9lien NEZZAR"),i.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:R,className:a.menuButton},i.a.createElement(N.a,null)))),i.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},i.a.createElement(d.a,{smUp:!0,implementation:"css"},i.a.createElement(u.a,{container:J,variant:"temporary",anchor:"right",open:l,onClose:R,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},P)),i.a.createElement(d.a,{xsDown:!0,implementation:"css"},i.a.createElement(u.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},P))),i.a.createElement("main",{className:a.content},i.a.createElement("div",{className:a.toolbar}),i.a.createElement(T.Provider,{value:F},i.a.createElement(ke,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){e.exports=a.p+"static/media/githubIcon.07883e93.svg"},64:function(e,t,a){e.exports=a.p+"static/media/avatar.6ce16990.png"},65:function(e,t,a){e.exports=a.p+"static/media/illustration.db0b7ae5.png"},71:function(e,t,a){e.exports=a.p+"static/media/html5-brands.f7e0c7ae.svg"},72:function(e,t,a){e.exports=a.p+"static/media/css3-alt-brands.9c1c2da2.svg"},73:function(e,t,a){e.exports=a.p+"static/media/js-brands.a4f804e9.svg"},74:function(e,t,a){e.exports=a.p+"static/media/python-brands.32c95a3f.svg"},75:function(e,t,a){e.exports=a.p+"static/media/react-brands.a046060a.svg"},76:function(e,t,a){e.exports=a.p+"static/media/WebGL_Logo.c36b25d9.svg"},77:function(e,t,a){e.exports=a.p+"static/media/firebase-logo.c24b6b9c.png"},78:function(e,t,a){e.exports=a.p+"static/media/Git_icon.1acf1264.svg"},79:function(e,t,a){e.exports=a.p+"static/media/vsCodeIcon.e00a3569.svg"},82:function(e,t,a){e.exports=a.p+"static/media/twitterIcon.923455be.svg"},83:function(e,t,a){e.exports=a.p+"static/media/linkedinLogo.4b475fb3.svg"},99:function(e,t,a){e.exports=a(127)}},[[99,1,2]]]);
//# sourceMappingURL=main.146aaa37.chunk.js.map