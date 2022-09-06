(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))_(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&_(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var U,d,B,E,O,T={},q=[],Z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(t,e){for(var n in e)t[n]=e[n];return t}function z(t){var e=t.parentNode;e&&e.removeChild(t)}function ee(t,e,n){var _,l,o,s={};for(o in e)o=="key"?_=e[o]:o=="ref"?l=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?U.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return A(t,s,_,l,null)}function A(t,e,n,_,l){var o={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++B:l};return l==null&&d.vnode!=null&&d.vnode(o),o}function I(t){return t.children}function D(t,e){this.props=t,this.context=e}function C(t,e){if(e==null)return t.__?C(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?C(t):null}function G(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return G(t)}}function $(t){(!t.__d&&(t.__d=!0)&&E.push(t)&&!N.__r++||O!==d.debounceRendering)&&((O=d.debounceRendering)||setTimeout)(N)}function N(){for(var t;N.__r=E.length;)t=E.sort(function(e,n){return e.__v.__b-n.__v.__b}),E=[],t.some(function(e){var n,_,l,o,s,p;e.__d&&(s=(o=(n=e).__v).__e,(p=n.__P)&&(_=[],(l=w({},o)).__v=o.__v+1,W(p,o,l,n.__n,p.ownerSVGElement!==void 0,o.__h!=null?[s]:null,_,s==null?C(o):s,o.__h),Q(_,o),o.__e!=s&&G(o)))})}function V(t,e,n,_,l,o,s,p,f,u){var r,h,c,i,a,x,m,y=_&&_.__k||q,k=y.length;for(n.__k=[],r=0;r<e.length;r++)if((i=n.__k[r]=(i=e[r])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?A(null,i,null,null,i):Array.isArray(i)?A(I,{children:i},null,null,null):i.__b>0?A(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(c=y[r])===null||c&&i.key==c.key&&i.type===c.type)y[r]=void 0;else for(h=0;h<k;h++){if((c=y[h])&&i.key==c.key&&i.type===c.type){y[h]=void 0;break}c=null}W(t,i,c=c||T,l,o,s,p,f,u),a=i.__e,(h=i.ref)&&c.ref!=h&&(m||(m=[]),c.ref&&m.push(c.ref,null,i),m.push(h,i.__c||a,i)),a!=null?(x==null&&(x=a),typeof i.type=="function"&&i.__k===c.__k?i.__d=f=K(i,f,t):f=J(t,i,c,y,a,f),typeof n.type=="function"&&(n.__d=f)):f&&c.__e==f&&f.parentNode!=t&&(f=C(c))}for(n.__e=x,r=k;r--;)y[r]!=null&&(typeof n.type=="function"&&y[r].__e!=null&&y[r].__e==n.__d&&(n.__d=C(_,r+1)),Y(y[r],y[r]));if(m)for(r=0;r<m.length;r++)X(m[r],m[++r],m[++r])}function K(t,e,n){for(var _,l=t.__k,o=0;l&&o<l.length;o++)(_=l[o])&&(_.__=t,e=typeof _.type=="function"?K(_,e,n):J(n,_,_,l,_.__e,e));return e}function J(t,e,n,_,l,o){var s,p,f;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(n==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(l),s=null;else{for(p=o,f=0;(p=p.nextSibling)&&f<_.length;f+=2)if(p==l)break e;t.insertBefore(l,o),s=o}return s!==void 0?s:l.nextSibling}function te(t,e,n,_,l){var o;for(o in n)o==="children"||o==="key"||o in e||M(t,o,null,n[o],_);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||M(t,o,e[o],n[o],_)}function H(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Z.test(e)?n:n+"px"}function M(t,e,n,_,l){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||H(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||H(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_||t.addEventListener(e,o?R:j,o):t.removeEventListener(e,o?R:j,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function j(t){this.l[t.type+!1](d.event?d.event(t):t)}function R(t){this.l[t.type+!0](d.event?d.event(t):t)}function W(t,e,n,_,l,o,s,p,f){var u,r,h,c,i,a,x,m,y,k,S,F,P,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,p=e.__e=n.__e,e.__h=null,o=[p]),(u=d.__b)&&u(e);try{e:if(typeof g=="function"){if(m=e.props,y=(u=g.contextType)&&_[u.__c],k=u?y?y.props.value:u.__:_,n.__c?x=(r=e.__c=n.__c).__=r.__E:("prototype"in g&&g.prototype.render?e.__c=r=new g(m,k):(e.__c=r=new D(m,k),r.constructor=g,r.render=oe),y&&y.sub(r),r.props=m,r.state||(r.state={}),r.context=k,r.__n=_,h=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),g.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=w({},r.__s)),w(r.__s,g.getDerivedStateFromProps(m,r.__s))),c=r.props,i=r.state,h)g.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(g.getDerivedStateFromProps==null&&m!==c&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(m,k),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(m,r.__s,k)===!1||e.__v===n.__v){r.props=m,r.state=r.__s,e.__v!==n.__v&&(r.__d=!1),r.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(L){L&&(L.__=e)}),r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(m,r.__s,k),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(c,i,a)})}if(r.context=k,r.props=m,r.__v=e,r.__P=t,S=d.__r,F=0,"prototype"in g&&g.prototype.render)r.state=r.__s,r.__d=!1,S&&S(e),u=r.render(r.props,r.state,r.context);else do r.__d=!1,S&&S(e),u=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++F<25);r.state=r.__s,r.getChildContext!=null&&(_=w(w({},_),r.getChildContext())),h||r.getSnapshotBeforeUpdate==null||(a=r.getSnapshotBeforeUpdate(c,i)),P=u!=null&&u.type===I&&u.key==null?u.props.children:u,V(t,Array.isArray(P)?P:[P],e,n,_,l,o,s,p,f),r.base=e.__e,e.__h=null,r.__h.length&&s.push(r),x&&(r.__E=r.__=null),r.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ne(n.__e,e,n,_,l,o,s,f);(u=d.diffed)&&u(e)}catch(L){e.__v=null,(f||o!=null)&&(e.__e=p,e.__h=!!f,o[o.indexOf(p)]=null),d.__e(L,e,n)}}function Q(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(_){_.call(n)})}catch(_){d.__e(_,n.__v)}})}function ne(t,e,n,_,l,o,s,p){var f,u,r,h=n.props,c=e.props,i=e.type,a=0;if(i==="svg"&&(l=!0),o!=null){for(;a<o.length;a++)if((f=o[a])&&"setAttribute"in f==!!i&&(i?f.localName===i:f.nodeType===3)){t=f,o[a]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),o=null,p=!1}if(i===null)h===c||p&&t.data===c||(t.data=c);else{if(o=o&&U.call(t.childNodes),u=(h=n.props||T).dangerouslySetInnerHTML,r=c.dangerouslySetInnerHTML,!p){if(o!=null)for(h={},a=0;a<t.attributes.length;a++)h[t.attributes[a].name]=t.attributes[a].value;(r||u)&&(r&&(u&&r.__html==u.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(te(t,c,h,l,p),r)e.__k=[];else if(a=e.props.children,V(t,Array.isArray(a)?a:[a],e,n,_,l&&i!=="foreignObject",o,s,o?o[0]:n.__k&&C(n,0),p),o!=null)for(a=o.length;a--;)o[a]!=null&&z(o[a]);p||("value"in c&&(a=c.value)!==void 0&&(a!==t.value||i==="progress"&&!a||i==="option"&&a!==h.value)&&M(t,"value",a,h.value,!1),"checked"in c&&(a=c.checked)!==void 0&&a!==t.checked&&M(t,"checked",a,h.checked,!1))}return t}function X(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(_){d.__e(_,n)}}function Y(t,e,n){var _,l;if(d.unmount&&d.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||X(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){d.__e(o,e)}_.base=_.__P=null}if(_=t.__k)for(l=0;l<_.length;l++)_[l]&&Y(_[l],e,typeof t.type!="function");n||t.__e==null||z(t.__e),t.__e=t.__d=void 0}function oe(t,e,n){return this.constructor(t,n)}function re(t,e,n){var _,l,o;d.__&&d.__(t,e),l=(_=typeof n=="function")?null:n&&n.__k||e.__k,o=[],W(e,t=(!_&&n||e).__k=ee(I,null,[t]),l||T,T,e.ownerSVGElement!==void 0,!_&&n?[n]:l?null:e.firstChild?U.call(e.childNodes):null,o,!_&&n?n:l?l.__e:e.firstChild,_),Q(o,t)}U=q.slice,d={__e:function(t,e,n,_){for(var l,o,s;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(t)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(t,_||{}),s=l.__d),s)return l.__E=l}catch(p){t=p}throw t}},B=0,D.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},n),this.props)),t&&w(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),$(this))},D.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),$(this))},D.prototype.render=I,E=[],N.__r=0;var _e=0;function v(t,e,n,_,l){var o,s,p={};for(s in e)s=="ref"?o=e[s]:p[s]=e[s];var f={type:t,props:p,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_e,__source:l,__self:_};if(typeof t=="function"&&(o=t.defaultProps))for(s in o)p[s]===void 0&&(p[s]=o[s]);return d.vnode&&d.vnode(f),f}function b({src:t,scroll:e,width:n,height:_="5em",transform:l,scale:o=2}){return v("div",{style:{width:n,height:_,padding:0,overflow:e?"scroll":"hidden",scroll:"none",border:"1px solid black"},children:v("iframe",{style:{width:"2000px",height:"2000px",border:"0px",transform:`scale(${o})`,transformOrigin:l},src:t})})}const le=v(b,{src:"https://bleacherreport.com/articles/10047694-grading-every-drafted-2022-rookie-qbs-preseason-performance",transform:"1730px 1050px",width:"16em",height:"7em",scale:1.8}),ie=v(b,{src:"https://j3s.sh/projects.html",transform:"1443px 450px",width:"9em",height:"5em",scale:3.1}),se=v(b,{src:"https://math-ias.github.io/",transform:"864px 1410px",width:"4em",height:"4em",scale:3}),ce=v(b,{src:"https://hotemogirlfriend.blogspot.com/2022/08/all-this-life-is-about-remembering.html",transform:"1725px 210px",width:"4.5em",height:"4em",scale:3}),ae=v(b,{src:"https://www.arklatexhomepage.com/news/crime/shreveport-man-just-released-from-15-year-prison-sentence-arrested/",transform:"860px 850px",width:"25em",height:"7em",scale:2}),pe=v(b,{src:"https://www.nolo.com/legal-encyclopedia/what-is-will.html",transform:"2080px 1250px",width:"4em",height:"4em",scale:2}),fe=v(b,{src:"https://www.scienceabc.com/humans/life-like-humans-suddenly-disappeared.html",transform:"1250px 1920px",width:"12.88em",height:"5em",scale:2}),de=v(b,{src:"http://www.katarxis3.com/Alexander_Eisenman_Debate.htm",transform:"423px 1775.5px",width:"5em",height:"6em",scale:15});v(b,{src:"https://support.microsoft.com/en-us/microsoft-edge/this-website-works-better-in-microsoft-edge-160fa918-d581-4932-9e4e-1075c4713595",transform:"5000px 1400px",width:"18em",height:"5em",scroll:!0,scale:1.1});function ue(){return v("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"},children:[le,ie,se,ce,ae,pe,fe,de]})}function he(){return v("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},children:[v(ue,{}),v("p",{style:{maxWidth:"22em",paddingTop:"2em",fontFamily:"Roboto Mono"},children:"The average lifespan of a URL is two years. Each word on this website is displayed live from a distinct webpage. As the internet decays, this page will follow."})]})}re(v(he,{}),document.getElementById("app"));
