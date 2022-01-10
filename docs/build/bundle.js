var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let c=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const f=new Set;function a(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&u(a)}function d(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function p(t){const e=x("style");return function(t,e){d(t.head||t,e)}(h(t),e),e}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function k(){return v(" ")}function $(){return v("")}function b(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}const O=new Set;let S,A=0;function M(t,e,n,l,o,r,s,i=0){const c=16.666/l;let u="{\n";for(let t=0;t<=1;t+=c){const l=e+(n-e)*r(t);u+=100*t+`%{${s(l,1-l)}}\n`}const f=u+`100% {${s(n,1-n)}}\n}`,a=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(f)}_${i}`,d=h(t);O.add(d);const g=d.__svelte_stylesheet||(d.__svelte_stylesheet=p(t).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[a]||(m[a]=!0,g.insertRule(`@keyframes ${a} ${f}`,g.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${l}ms linear ${o}ms 1 both`,A+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-l.length;o&&(t.style.animation=l.join(", "),A-=o,A||u((()=>{A||(O.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),O.clear())})))}function N(t){S=t}const D=[],T=[],j=[],I=[],L=Promise.resolve();let R=!1;function U(t){j.push(t)}const Y=new Set;let P,H=0;function B(){const t=S;do{for(;H<D.length;){const t=D[H];H++,N(t),W(t.$$)}for(N(null),D.length=0,H=0;T.length;)T.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];Y.has(e)||(Y.add(e),e())}j.length=0}while(D.length);for(;I.length;)I.pop()();R=!1,Y.clear(),N(t)}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}function q(t,e,n){t.dispatchEvent(function(t,e,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,!1,e),l}(`${e?"intro":"outro"}${n}`))}const F=new Set;let G;function J(t,e){t&&t.i&&(F.delete(t),t.i(e))}function K(t,e,n,l){if(t&&t.o){if(F.has(t))return;F.add(t),G.c.push((()=>{F.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}const Q={duration:0};function V(n,l,s,i){let d=l(n,s),h=i?0:1,p=null,g=null,m=null;function y(){m&&z(n,m)}function x(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(l){const{delay:r=0,duration:s=300,easing:i=e,tick:w=t,css:v}=d||Q,k={start:c()+r,b:l};l||(k.group=G,G.r+=1),p||g?g=k:(v&&(y(),m=M(n,h,l,s,r,i,v)),l&&w(0,1),p=x(k,s),U((()=>q(n,l,"start"))),function(t){let e;0===f.size&&u(a),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(p=x(g,s),g=null,q(n,p.b,"start"),v&&(y(),m=M(n,h,p.b,p.duration,0,i,d.css))),p)if(t>=p.end)w(h=p.b,1-h),q(n,p.b,"end"),g||(p.b?y():--p.group.r||o(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;h=p.a+p.d*i(e/p.duration),w(h,1-h)}return!(!p&&!g)})))}return{run(t){r(d)?(P||(P=Promise.resolve(),P.then((()=>{P=null}))),P).then((()=>{d=d(),w(t)})):w(t)},end(){y(),p=g=null}}}function X(t,e){-1===t.$$.dirty[0]&&(D.push(t),R||(R=!0,L.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,s,i,c,u,f,a,d=[-1]){const h=S;N(e);const p=e.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:l(),dirty:d,skip_bound:!1,root:s.target||h.$$.root};a&&a(p.root);let g=!1;if(p.ctx=i?i(e,s.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),g&&X(e,t)),n})):[],p.update(),g=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();s.intro&&J(e.$$.fragment),function(t,e,l,s){const{fragment:i,on_mount:c,on_destroy:u,after_update:f}=t.$$;i&&i.m(e,l),s||U((()=>{const e=c.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(U)}(e,s.target,s.anchor,s.customElement),B()}N(h)}let tt,et=t=>{let e=function(t){for(var e=0,n=1779033703^t.length;e<t.length;e++)n=(n=Math.imul(n^t.charCodeAt(e),3432918353))<<13|n>>>19;return function(){return n=Math.imul(n^n>>>16,2246822507),n=Math.imul(n^n>>>13,3266489909),(n^=n>>>16)>>>0}}(t);var n,l,o,r;n=e(),l=e(),o=e(),r=e(),tt=function(){var t=(n>>>=0)+(l>>>=0)|0;return n=l^l>>>9,l=(o>>>=0)+(o<<3)|0,o=(o=o<<21|o>>>11)+(t=t+(r=1+(r>>>=0)|0)|0)|0,(t>>>0)/4294967296}};function nt(t){return t[Math.floor(t.length*tt())]}let lt=async t=>fetch(t).then((t=>t.text())).then((t=>{let e=t.split("\n");return e.pop(),e})),ot=(t,e)=>{let n=new Array;for(let l of e){for(let e of t.get(l))for(let n of e)n!=l&&t.get(n).delete(e);n.push(t.get(l)),t.delete(l)}return n},rt=(t,e,n)=>{for(let l of Array.from(e).reverse()){t.set(l,n.pop());for(let e of t.get(l))for(let n of e)n!=l&&t.get(n).add(e)}},st=t=>{let e=Array.from(new Set(t)),n=new Array;for(let t=0;t<e.length;t++)for(let l=t+1;l<e.length;l++)n.push(e[t]+e[l]);return n},it=(t,e)=>{let n=t+e.slice(1),l=new Array;for(let t of(t=>{let e=new Array,n=Array.from(new Set(t));for(let t=0;t<n.length;t++)for(let l=t+1;l<n.length;l++)for(let o=l+1;o<n.length;o++)e.push(n[t]+n[l]+n[o]);return e})(n))st(t).some((t=>-1!=n.indexOf(t)))||l.push(t);return(t=>{let e=new Map;for(let n of t)for(let t of n)e.has(t)||e.set(t,new Set),e.get(t).add(n);let n=new Array,l=()=>{if(0==e.size)return n;let t=e.keys().next().value;for(const n of e.keys())e.get(n).size<e.get(t).size&&(t=n);for(let o of e.get(t)){n.push(o);let t=ot(e,o),r=l();if(r)return r;rt(e,o,t),n.pop()}return!1};return l()})(l)},ct=(t,e,n)=>{for(;;){let l=nt(t),o=nt(e.get(l.slice(-1)));if(12==new Set(l+o).size&&(!n||13==(l+o).length))return[l,o]}},ut=t=>(t||(t=new Date),t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()),ft=t=>e=>{e=e.toLowerCase();let n=t=>{let n=null;for(let l of t){let t=e.indexOf(l);if(-1==t||t==n)return!1;n=t}return!0},l=new Map;for(let e of t)if(n(e))for(let[t,n]of[[0,e.slice(-1)],[1,e[0]]])l.has(n)||l.set(n,[[],[]]),l.get(n)[t].push(e);let o=[];for(let[t,e]of l.values())for(let n of t)for(let t of e)13==(n+t).length&&12==new Set(n+t).size&&o.push([n,t]);return o};function at(t,{delay:n=0,duration:l=400,easing:o=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:l,easing:o,css:t=>"opacity: "+t*r}}function dt(t,e,n){const l=t.slice();return l[33]=e[n],l}function ht(t,e,n){const l=t.slice();return l[33]=e[n],l}function pt(t,e,n){const l=t.slice();return l[38]=e[n],l[40]=n,l}function gt(t,e,n){const l=t.slice();return l[41]=e[n],l[43]=n,l}function mt(t,e,n){const l=t.slice();return l[44]=e[n],l[40]=n,l}function yt(e){let n,l,o;return{c(){n=x("div"),n.innerHTML='<div class="modal-content svelte-ppmkcy"><h3 style="margin-top: .5em">How to Play</h3> \n                <ul class="svelte-ppmkcy"><li>Connect letters to spell words</li> \n                    <li>Words must be at least 3 letters long</li> \n                    <li>Letters can be reused</li> \n                    <li>Consecutive letters cannot be from the same side</li> \n                    <li>The last letter of a word becomes the first letter of\n                        the next word <br/>\n                        e.g. THY &gt; YES &gt; SINCE</li> \n                    <li>Words cannot be proper nouns or hyphenated</li> \n                    <li>Use all letters to solve!</li> \n                    <li>There is always a solution with two words that repeats\n                        only the common letter <br/>\n                        e.g. LANDS &gt; SECURITY</li></ul></div>',_(n,"class","modal svelte-ppmkcy")},m(t,r){g(t,n,r),e[26](n),l||(o=b(n,"click",e[27]),l=!0)},p:t,d(t){t&&m(n),e[26](null),l=!1,o()}}}function xt(t){let e,n,l,o;return{c(){e=x("span"),n=v(t[3]),E(e,"position","absolute"),E(e,"left","0"),E(e,"right","0"),E(e,"font-size","medium"),_(e,"class","message svelte-ppmkcy")},m(t,l){g(t,e,l),d(e,n),o=!0},p(t,e){(!o||8&e[0])&&C(n,t[3])},i(t){o||(U((()=>{l||(l=V(e,at,{},!0)),l.run(1)})),o=!0)},o(t){l||(l=V(e,at,{},!1)),l.run(0),o=!1},d(t){t&&m(e),t&&l&&l.end()}}}function wt(e){let n;return{c(){n=x("span"),n.textContent="YOU WIN!",_(n,"class","blink svelte-ppmkcy"),E(n,"display","inline")},m(t,e){g(t,n,e)},p:t,d(t){t&&m(n)}}}function vt(t){let e,n,l,o,r;return{c(){e=x("span"),n=v(t[1]),l=x("span"),o=v(t[10]),E(e,"display","inline"),_(l,"class","unselectable svelte-ppmkcy"),_(l,"style",r=(t[1]?"width: 0em;":"")+"display: inline-block;")},m(t,r){g(t,e,r),d(e,n),g(t,l,r),d(l,o)},p(t,e){2&e[0]&&C(n,t[1]),1024&e[0]&&C(o,t[10]),2&e[0]&&r!==(r=(t[1]?"width: 0em;":"")+"display: inline-block;")&&_(l,"style",r)},d(t){t&&m(e),t&&m(l)}}}function kt(t){let e,n,l,o,r,s,i;return{c(){e=w("line"),_(e,"x1",n=t[17][t[21](t[0].indexOf(t[44]))].x),_(e,"y1",l=t[17][t[21](t[0].indexOf(t[44]))].y),_(e,"x2",o=t[17][t[21](t[0].indexOf(t[41][t[40]+1]))].x),_(e,"y2",r=t[17][t[21](t[0].indexOf(t[41][t[40]+1]))].y),_(e,"stroke",s=t[43]==t[2].length?"#ff3e00":"#ff3e0080"),_(e,"stroke-width",It),_(e,"stroke-dasharray",i=t[43]==t[2].length?2:0)},m(t,n){g(t,e,n)},p(t,c){7&c[0]&&n!==(n=t[17][t[21](t[0].indexOf(t[44]))].x)&&_(e,"x1",n),7&c[0]&&l!==(l=t[17][t[21](t[0].indexOf(t[44]))].y)&&_(e,"y1",l),7&c[0]&&o!==(o=t[17][t[21](t[0].indexOf(t[41][t[40]+1]))].x)&&_(e,"x2",o),7&c[0]&&r!==(r=t[17][t[21](t[0].indexOf(t[41][t[40]+1]))].y)&&_(e,"y2",r),4&c[0]&&s!==(s=t[43]==t[2].length?"#ff3e00":"#ff3e0080")&&_(e,"stroke",s),4&c[0]&&i!==(i=t[43]==t[2].length?2:0)&&_(e,"stroke-dasharray",i)},d(t){t&&m(e)}}}function $t(t){let e,n=t[40]+1<t[41].length&&kt(t);return{c(){n&&n.c(),e=$()},m(t,l){n&&n.m(t,l),g(t,e,l)},p(t,l){t[40]+1<t[41].length?n?n.p(t,l):(n=kt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&m(e)}}}function bt(t){let e,n=t[41],l=[];for(let e=0;e<n.length;e+=1)l[e]=$t(mt(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=$()},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);g(t,e,n)},p(t,o){if(2228231&o[0]){let r;for(n=t[41],r=0;r<n.length;r+=1){const s=mt(t,n,r);l[r]?l[r].p(s,o):(l[r]=$t(s),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){y(l,t),t&&m(e)}}}function _t(t){let e,n,l,o,r,s,i,c,u,f,a,h,p,y,x,k=t[0][t[20](t[40])]+"";function $(){return t[29](t[40])}return{c(){e=w("circle"),r=w("text"),s=v(k),u=w("rect"),_(e,"cx",n=t[38].x),_(e,"cy",l=t[38].y),_(e,"r","1"),_(e,"fill",(t[13],t[1],o=t[25](t[20](t[40])))),_(e,"stroke","black"),_(e,"stroke-width",It),_(r,"text-anchor","middle"),_(r,"dominant-baseline","central"),_(r,"x",i=t[18][t[40]].x),_(r,"y",c=t[18][t[40]].y),_(r,"font-size",jt),_(u,"x",f=t[19][t[40]].x),_(u,"y",a=t[19][t[40]].y),_(u,"width",h=t[19][t[40]].width),_(u,"height",p=t[19][t[40]].height),_(u,"fill","none"),_(u,"stroke","none"),_(u,"stroke-width",".1"),_(u,"pointer-events","fill")},m(t,n){g(t,e,n),g(t,r,n),d(r,s),g(t,u,n),y||(x=b(u,"click",$),y=!0)},p(n,l){t=n,8194&l[0]&&o!==(t[13],t[1],o=t[25](t[20](t[40])))&&_(e,"fill",o),1&l[0]&&k!==(k=t[0][t[20](t[40])]+"")&&C(s,k)},d(t){t&&m(e),t&&m(r),t&&m(u),y=!1,x()}}}function Ct(e){let n,l,r,s,i;return{c(){n=x("p"),n.textContent="Yesterday",l=k(),r=x("p"),r.textContent="Help",_(n,"class","link svelte-ppmkcy"),_(r,"class","link svelte-ppmkcy")},m(t,o){g(t,n,o),g(t,l,o),g(t,r,o),s||(i=[b(n,"click",e[30]),b(r,"click",e[31])],s=!0)},p:t,d(t){t&&m(n),t&&m(l),t&&m(r),s=!1,o(i)}}}function Et(t){let e,n,l,o,r=t[8],s=[];for(let e=0;e<r.length;e+=1)s[e]=Ot(ht(t,r,e));let i=t[9],c=[];for(let e=0;e<i.length;e+=1)c[e]=At(dt(t,i,e));return{c(){e=x("div"),n=x("p"),n.textContent="Some solutions for yesterday",l=k();for(let t=0;t<s.length;t+=1)s[t].c();o=k();for(let t=0;t<c.length;t+=1)c[t].c();_(e,"class","solutions")},m(t,r){g(t,e,r),d(e,n),d(e,l);for(let t=0;t<s.length;t+=1)s[t].m(e,null);d(e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null)},p(t,n){if(256&n[0]){let l;for(r=t[8],l=0;l<r.length;l+=1){const i=ht(t,r,l);s[l]?s[l].p(i,n):(s[l]=Ot(i),s[l].c(),s[l].m(e,o))}for(;l<s.length;l+=1)s[l].d(1);s.length=r.length}if(768&n[0]){let l;for(i=t[9],l=0;l<i.length;l+=1){const o=dt(t,i,l);c[l]?c[l].p(o,n):(c[l]=At(o),c[l].c(),c[l].m(e,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=i.length}},d(t){t&&m(e),y(s,t),y(c,t)}}}function Ot(t){let e,n,l=t[33]+"";return{c(){e=x("p"),n=v(l),E(e,"font-weight","bold")},m(t,l){g(t,e,l),d(e,n)},p(t,e){256&e[0]&&l!==(l=t[33]+"")&&C(n,l)},d(t){t&&m(e)}}}function St(t){let e,n,l=t[33]+"";return{c(){e=x("p"),n=v(l)},m(t,l){g(t,e,l),d(e,n)},p(t,e){512&e[0]&&l!==(l=t[33]+"")&&C(n,l)},d(t){t&&m(e)}}}function At(t){let e,n=!t[8].includes(t[33]),l=n&&St(t);return{c(){l&&l.c(),e=$()},m(t,n){l&&l.m(t,n),g(t,e,n)},p(t,o){768&o[0]&&(n=!t[8].includes(t[33])),n?l?l.p(t,o):(l=St(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&m(e)}}}function Mt(t){let e,n,l,r,s,i,c,u,f,a,h,p,O,S,A,M,z,N,D,T,j,I,L,R,U,Y=t[11]&&yt(t),P=t[3]&&xt(t);function H(t,e){return t[15]?wt:vt}let B=H(t),W=B(t),q=[...t[2],t[1]],F=[];for(let e=0;e<q.length;e+=1)F[e]=bt(gt(t,q,e));let Q=t[17],V=[];for(let e=0;e<Q.length;e+=1)V[e]=_t(pt(t,Q,e));function X(t,e){return t[7]?Et:Ct}let Z=X(t),tt=Z(t);return{c(){e=x("main"),n=x("h1"),n.textContent="litter boxed",l=k(),Y&&Y.c(),r=k(),s=x("div"),P&&P.c(),i=k(),W.c(),c=k(),u=x("hr"),f=k(),a=x("div"),h=x("p"),p=v(t[14]),O=k(),S=w("svg"),A=w("rect");for(let t=0;t<F.length;t+=1)F[t].c();M=$();for(let t=0;t<V.length;t+=1)V[t].c();z=k(),N=x("div"),D=x("button"),D.textContent="Delete",T=k(),j=x("button"),j.textContent="Enter",I=k(),tt.c(),_(n,"class","svelte-ppmkcy"),E(u,"min-width","10em"),E(u,"max-width","13em"),E(u,"border","1px solid black"),E(u,"margin-top","0"),_(s,"class","current svelte-ppmkcy"),E(h,"width","fit-content"),E(h,"margin","auto"),_(a,"class","words svelte-ppmkcy"),_(A,"x",Nt),_(A,"y",Dt),_(A,"width",zt),_(A,"height",zt),_(A,"stroke","black"),_(A,"stroke-width",It),_(A,"fill","none"),_(S,"xmlns","http://www.w3.org/2000/svg"),_(S,"viewBox","0 0 42 42"),_(S,"class","svelte-ppmkcy"),_(D,"class","svelte-ppmkcy"),_(j,"class","svelte-ppmkcy"),_(N,"class","buttons svelte-ppmkcy"),_(e,"class","svelte-ppmkcy")},m(o,m){g(o,e,m),d(e,n),d(e,l),Y&&Y.m(e,null),d(e,r),d(e,s),P&&P.m(s,null),d(s,i),W.m(s,null),d(s,c),d(s,u),d(e,f),d(e,a),d(a,h),d(h,p),d(e,O),d(e,S),d(S,A);for(let t=0;t<F.length;t+=1)F[t].m(S,null);d(S,M);for(let t=0;t<V.length;t+=1)V[t].m(S,null);d(e,z),d(e,N),d(N,D),d(N,T),d(N,j),d(e,I),tt.m(e,null),L=!0,R||(U=[b(h,"click",t[28]),b(D,"click",t[23]),b(j,"click",t[24])],R=!0)},p(t,n){if(t[11]?Y?Y.p(t,n):(Y=yt(t),Y.c(),Y.m(e,r)):Y&&(Y.d(1),Y=null),t[3]?P?(P.p(t,n),8&n[0]&&J(P,1)):(P=xt(t),P.c(),J(P,1),P.m(s,i)):P&&(G={r:0,c:[],p:G},K(P,1,1,(()=>{P=null})),G.r||o(G.c),G=G.p),B===(B=H(t))&&W?W.p(t,n):(W.d(1),W=B(t),W&&(W.c(),W.m(s,c))),(!L||16384&n[0])&&C(p,t[14]),2228231&n[0]){let e;for(q=[...t[2],t[1]],e=0;e<q.length;e+=1){const l=gt(t,q,e);F[e]?F[e].p(l,n):(F[e]=bt(l),F[e].c(),F[e].m(S,M))}for(;e<F.length;e+=1)F[e].d(1);F.length=q.length}if(39723011&n[0]){let e;for(Q=t[17],e=0;e<Q.length;e+=1){const l=pt(t,Q,e);V[e]?V[e].p(l,n):(V[e]=_t(l),V[e].c(),V[e].m(S,null))}for(;e<V.length;e+=1)V[e].d(1);V.length=Q.length}Z===(Z=X(t))&&tt?tt.p(t,n):(tt.d(1),tt=Z(t),tt&&(tt.c(),tt.m(e,null)))},i(t){L||(J(P),L=!0)},o(t){K(P),L=!1},d(t){t&&m(e),Y&&Y.d(),P&&P.d(),W.d(),y(F,t),y(V,t),tt.d(),R=!1,o(U)}}}let zt=30,Nt=6,Dt=6,Tt=3.5,jt=4,It=.3;function Lt(t,e,n){let l,o,r,s,i,c,u,f="loading",a=t=>{n(3,f=t),setTimeout((()=>{n(3,f="")}),1e3)},d=[],h=[],p="";localStorage.getItem("date")!=ut()&&localStorage.removeItem("puzzle"),p=localStorage.getItem("puzzle")||"            ";let g,m,y=!1;(async()=>{et(ut());let t=await lt("./easy.txt");n(4,s=(t=>{let e=new Map;for(let n of t){let t=n[0];e.has(t)||e.set(t,new Array),e.get(t).push(n)}return n=>{for(n&&et(n);;){let[n,l]=ct(t,e,!0),o=it(n,l);if(o)return o}}})(t)),n(0,p=s(ut()).join("").toUpperCase()),localStorage.setItem("puzzle",p),localStorage.setItem("date",ut()),n(3,f="loading dict");let e=await lt("./scrabble.txt");i=(t=>e=>{e=e.toLowerCase();let n=0,l=t.length;for(;l-n>1;){let o=Math.floor((n+l)/2);e<t[o]?l=o:n=o}return e==t[n]})(e),n(3,f=" "),n(5,c=ft(t)),n(6,u=ft(e))})();let x=[];for(let t=0;t<3;t++){let e=zt/3*(t+.5);d.push({x:Nt,y:Dt+e}),h.push({x:Nt-Tt,y:Dt+e}),x.push({x:Nt-Tt-jt/2,y:Dt+e-jt/2,width:jt+Tt,height:jt}),d.push({x:Nt+zt,y:Dt+e}),h.push({x:Nt+zt+Tt,y:Dt+e}),x.push({x:Nt+zt-jt/2,y:Dt+e-jt/2,width:jt+Tt,height:jt}),d.push({x:Nt+e,y:Dt}),h.push({x:Nt+e,y:Dt-Tt}),x.push({x:Nt+e-jt/2,y:Dt-Tt-jt/2,width:jt,height:jt+Tt}),d.push({x:Nt+e,y:Dt+zt}),h.push({x:Nt+e,y:Dt+zt+Tt}),x.push({x:Nt+e-jt/2,y:Dt+zt-jt/2,width:jt,height:jt+Tt})}let w=t=>t%4*3+Math.floor(t/4),v="",k=t=>{o||Math.floor(l/3)!=Math.floor(t/3)&&n(1,v+=p[t])},$=()=>{n(1,v=v.slice(0,-1)),""==v&&b.length&&(n(1,v=b.pop()),n(2,b))},b=[],_=()=>{if(!o){if(v.length<3)return a("Too short");if(!i(v))return a("Not a word");n(2,b=[...b,v]),n(1,v=v.slice(-1)),o&&n(1,v="")}},C="?";setInterval((()=>{n(10,C=C?"":"?")}),500);document.addEventListener("keydown",(function(t){if("Enter"==t.key)_();else if("Backspace"==t.key)$();else{let e=p.indexOf(t.key.toUpperCase());-1!=e&&k(e)}}));let E,O=!1;return t.$$.update=()=>{3&t.$$.dirty[0]&&n(13,l=v?p.indexOf(v.slice(-1)):-1),5&t.$$.dirty[0]&&n(15,o=[...Array(12).keys()].every((t=>b.join("").indexOf(p[t])>-1))),4&t.$$.dirty[0]&&n(14,r=b.join(" - "))},[p,v,b,f,s,c,u,y,g,m,C,O,E,l,r,o,a,d,h,x,w,t=>t%3*4+Math.floor(t/3),k,$,_,t=>t==l?"#ff3e00":b.join("").indexOf(p[t])>-1?"grey":v.indexOf(p[t])>-1?"black":"white",function(t){T[t?"unshift":"push"]((()=>{E=t,n(12,E)}))},t=>{n(11,O=t.target!=E)},()=>{navigator.clipboard.writeText(r),a("copied")},t=>k(w(t)),()=>{n(7,y=!0);let t=s((e=new Date,e.setDate(e.getDate()-1),ut(e))).join("").toUpperCase();var e;n(0,p=t),n(2,b=[]),n(1,v="");let l=t=>`${t[0]} - ${t[1]}`;n(8,g=c(t).map(l)),n(9,m=u(t).map(l))},()=>{n(11,O=!0)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),Z(this,t,Lt,Mt,s,{},null,[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
