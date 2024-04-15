exports.id=2996,exports.ids=[2996],exports.modules={71691:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,13724,23)),Promise.resolve().then(t.t.bind(t,35365,23)),Promise.resolve().then(t.t.bind(t,44900,23)),Promise.resolve().then(t.t.bind(t,44714,23)),Promise.resolve().then(t.t.bind(t,45392,23)),Promise.resolve().then(t.t.bind(t,8898,23))},46293:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,30614,23)),Promise.resolve().then(t.bind(t,19351)),Promise.resolve().then(t.bind(t,84012)),Promise.resolve().then(t.bind(t,64105)),Promise.resolve().then(t.bind(t,53141)),Promise.resolve().then(t.bind(t,34513)),Promise.resolve().then(t.bind(t,79096)),Promise.resolve().then(t.bind(t,87030)),Promise.resolve().then(t.bind(t,93662)),Promise.resolve().then(t.bind(t,71495)),Promise.resolve().then(t.bind(t,46905))},19351:(e,s,t)=>{"use strict";t.r(s),t.d(s,{ActiveLink:()=>ActiveLink});var n=t(30784),r=t(9885),a=t(57114),l=t(11440),i=t.n(l);let ActiveLink=e=>{let{children:s,className:t,activeClassName:l,regex:c,...d}=e,o=(0,a.usePathname)(),[m,x]=(0,r.useState)(t);return(0,r.useEffect)(()=>{let e=new URL(d.as||d.href,location.href).pathname,s=c?new RegExp(c).test(o):o===e,n=s?`${t} ${l}`.trim():t;n!==m&&x(n)},[o,d.as,d.href,l,t]),n.jsx(i(),{className:m,...d,children:s})}},84012:(e,s,t)=>{"use strict";t.r(s),t.d(s,{BetCard:()=>BetCard});var n=t(30784),r=t(6135),a=t(83689),l=t.n(a),i=t(11440),c=t.n(i),d=t(9885),o=t(10566);let m={[r.d5.Accepted]:"Accepted",[r.d5.Canceled]:"Canceled",[r.d5.Live]:"Live",[r.d5.PendingResolution]:"Pending resolution",[r.d5.Resolved]:"Resolved"},x={[r.XI.Canceled]:"Canceled",[r.XI.Live]:"Live",[r.XI.Paused]:"Paused",[r.XI.PendingResolution]:"Pending resolution",[r.XI.Preparing]:"Preparing",[r.XI.Resolved]:"Resolved"};function BetCard(e){let s,t;let{bet:a}=e,{createdAt:i,status:h,amount:u,outcomes:p,payout:f,possibleWin:b,freebetId:j,isWin:v,isLose:g,isCanceled:N,isRedeemed:w}=a,{betToken:y}=(0,r.Ab)(),P=(0,d.useMemo)(()=>(0,r.Nj)({graphStatus:h,games:p.map(({game:e})=>e)}),[]),{submit:k,isPending:z,isProcessing:M}=(0,r.HG)(),$=z||M;N?(s="––",t="Refund"):(s=`${v?"+":""}${b.toFixed(2)} ${y.symbol}`,t="Redeem"),z?t="Waiting for approval":M&&(t="Processing...");let handleRedeem=async()=>{try{await k({bets:[a]})}catch{}};return(0,n.jsxs)("div",{className:"p-4 bg-zinc-50 mt-2 first-of-type:mt-0 rounded-lg bet-card",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[n.jsx("p",{children:l()(1e3*+i).format("DD.MM.YYYY, hh:mm A")}),n.jsx("p",{children:m[P]})]}),p.map(e=>{let{odds:s,marketName:t,game:a,selectionName:i,isWin:d,isLose:m}=e,{status:h,gameId:u,participants:p,startsAt:f,sport:{slug:b},league:j}=a,{name:v,country:{name:g}}=j,N=(0,o.Z)("mt-4 p-4 rounded-md",{"bg-zinc-200":!d&&!m,"bg-green-100":d,"bg-red-100":m});return(0,n.jsxs)("div",{className:N,children:[(0,n.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[(0,n.jsxs)("div",{className:"flex items-center flex-wrap",children:[n.jsx("p",{className:"mr-4",children:l()(1e3*+f).format("DD.MM.YYYY, hh:mm A")}),n.jsx("p",{children:`${g}: ${v}`})]}),n.jsx("p",{children:x[(0,r.VS)({graphStatus:h,startsAt:f})]})]}),n.jsx("div",{className:"flex items-center",children:n.jsx(c(),{href:`/events/${b}/${u}`,className:"flex items-center mr-4",children:p.map(({image:e,name:s})=>(0,n.jsxs)("div",{className:"flex items-center ml-2 first-of-type:ml-0",children:[n.jsx("div",{className:"flex items-center justify-center w-8 h-8 mr-2 border border-zinc-300 rounded-full",children:!!e&&n.jsx("img",{className:"w-4 h-4",src:e,alt:""})}),n.jsx("span",{className:"text-md",children:s})]},s))})}),(0,n.jsxs)("div",{className:"grid md:grid-cols-3 md:gap-16",children:[(0,n.jsxs)("div",{children:[n.jsx("p",{children:"Market"}),n.jsx("p",{children:t})]}),(0,n.jsxs)("div",{children:[n.jsx("p",{children:"Outcome"}),n.jsx("p",{children:i})]}),(0,n.jsxs)("div",{className:"min-w-40 pr-4",children:[n.jsx("p",{children:"Odds"}),n.jsx("p",{children:s})]})]})]},u)}),(0,n.jsxs)("div",{className:"flex items-center justify-between mt-2 flex-wrap",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[n.jsx("p",{children:"Bet Amount:"}),"\xa0",n.jsx("p",{children:`${u} ${y.symbol}`})]}),(0,n.jsxs)("div",{className:"flex items-center flex-wrap",children:[(0,n.jsxs)("div",{className:"flex items-center mr-4",children:[n.jsx("p",{children:v?"Winning:":"Possible Win:"}),"\xa0",n.jsx("p",{children:s})]}),w?n.jsx("p",{children:"Redeemed"}):!!(f||N&&!j)&&n.jsx("button",{className:(0,o.Z)("md:w-[200px] py-3.5 text-white font-semibold text-center rounded-xl",{"bg-blue-500 hover:bg-blue-600 transition shadow-md":!$,"bg-zinc-300 cursor-not-allowed":$}),disabled:$,onClick:handleRedeem,children:t})]})]})]})}},64105:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GameMarkets:()=>GameMarkets});var n=t(30784),r=t(9885),a=t(23670);function GameMarkets(e){let{gameId:s,markets:t}=e,[l,i]=(0,r.useState)(),handleOutcomeClick=e=>{i(e)};return(0,n.jsxs)(n.Fragment,{children:[n.jsx("div",{className:"max-w-[600px] mx-auto mt-12 space-y-6",children:t?.map(({name:e,description:s,outcomeRows:t})=>n.jsxs("div",{className:"",children:[n.jsx("div",{className:"mb-0.5 text-lg font-semibold",children:e}),n.jsx("div",{className:"mb-2 text-md text-zinc-500",children:s}),n.jsx("div",{className:"space-y-1",children:t.map((e,s)=>n.jsx("div",{className:"flex justify-between",children:n.jsx("div",{className:"flex gap-2 w-full",children:e.map(e=>n.jsx(a.Ii,{className:l===e?"bg-purple-200":"",outcome:e,onClick:()=>handleOutcomeClick(e)},e.selectionName))})},s))})]},e))}),!!l&&n.jsx(a.HS,{gameId:s,outcome:l,closeModal:()=>{i(void 0)}})]})}},53141:(e,s,t)=>{"use strict";t.r(s),t.d(s,{Header:()=>Header});var n=t(30784),r=t(11440),a=t.n(r),l=t(9885),i=t(6135),c=t(33029),d=t(40965);function Header(){(0,i.$N)();let e=(0,d.ZR)();return(0,l.useEffect)(()=>{(async()=>{try{await e.autoConnect()}catch{}})()},[]),(0,n.jsxs)("header",{className:"container flex items-center py-3.5 border-b border-zinc-200",children:[n.jsx("div",{className:"text-xl font-semibold custom-title",children:"Haze Betting"}),(0,n.jsxs)("div",{className:"flex ml-10",children:[n.jsx(a(),{className:"text-zinc-500 hover:text-black transition",href:"/events/top",children:"Events"}),n.jsx(a(),{className:"text-zinc-500 hover:text-black transition ml-4",href:"/bets",children:"Bets History"})]}),n.jsx("div",{className:"ml-auto flex items-center",children:n.jsx(c.NL,{chainStatus:"none"})})]})}},34513:(e,s,t)=>{"use strict";t.r(s),t.d(s,{OutcomeButton:()=>OutcomeButton});var n=t(30784),r=t(6135);function OutcomeButton(e){let{className:s="",outcome:t,onClick:a}=e,{odds:l,isLocked:i,isOddsFetching:c}=(0,r.Ol)({selection:t,initialOdds:t.odds,initialStatus:t.status}),d=`flex justify-between p-5 bg-zinc-50 hover:bg-zinc-100 transition rounded-2xl cursor-pointer w-full disabled:cursor-not-allowed ${s}`;return(0,n.jsxs)("button",{className:d,onClick:()=>a(t),disabled:i,children:[n.jsx("span",{className:"text-zinc-500",children:t.selectionName}),n.jsx("span",{className:"font-medium",children:c?"--":parseFloat(l).toFixed(2)})]})}},79096:(e,s,t)=>{"use strict";t.r(s),t.d(s,{PlaceBetModal:()=>PlaceBetModal});var n=t(30784),r=t(9885),a=t(6135),l=t(13085),i=t(23670);let AmountInput=e=>{let{amount:s,onChange:t}=e,{betToken:r}=(0,a.Ab)(),{loading:l,balance:i}=(0,a.KJ)();return(0,n.jsxs)("div",{className:"mt-4 pt-4 border-t border-zinc-300 space-y-2",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-md text-zinc-400",children:"Wallet balance"}),n.jsx("span",{className:"text-md font-semibold",children:l?n.jsx(n.Fragment,{children:"Loading..."}):void 0!==i?(0,n.jsxs)(n.Fragment,{children:[(+i).toFixed(2)," ",r.symbol]}):n.jsx(n.Fragment,{children:"-"})})]}),(0,n.jsxs)("label",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-md text-zinc-400",children:"Bet amount"}),n.jsx("input",{className:"w-[140px] py-2 px-4 border border-zinc-400 text-md text-right font-semibold rounded-md",type:"number",inputMode:"decimal",placeholder:"Bet amount",value:s,onChange:e=>t(e.target.value)})]})]})};var c=t(40965),d=t(10566);let SubmitButton=e=>{let{amount:s,isAllowanceLoading:t,isApproveRequired:r,isPending:l,isProcessing:i,onClick:o}=e,m=(0,c.mA)(),{appChain:x,isRightNetwork:h}=(0,a.Ab)(),{loading:u,balance:p}=(0,a.KJ)();if(!m.address)return n.jsx("div",{className:"mt-6 py-3.5 text-center bg-red-200 rounded-2xl",children:"Connect your wallet"});if(!h)return(0,n.jsxs)("div",{className:"mt-6 py-3.5 text-center bg-red-200 rounded-2xl",children:["Switch network to ",n.jsx("b",{children:x.name})," in your wallet"]});let f=!!(+s&&p&&+p>+s),b=u||!f||t||l||i||!+s;return(0,n.jsxs)("div",{className:"mt-6",children:[!!(+s&&!f)&&n.jsx("div",{className:"mb-1 text-red-500 text-center font-semibold",children:"Not enough balance."}),n.jsx("button",{className:(0,d.Z)("w-full py-3.5 text-white font-semibold text-center rounded-xl",{"bg-blue-500 hover:bg-blue-600 transition shadow-md":!b,"bg-zinc-300 cursor-not-allowed":b}),disabled:b,onClick:o,children:l?"Waiting for approval":i?"Processing...":r?"Approve":"Place Bet"})]})};function CheckBadgeIcon(e){return n.jsx("svg",{className:e.className,"aria-hidden":"true",fill:"none","stroke-width":"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z","stroke-linecap":"round","stroke-linejoin":"round"})})}function PlaceBetModal(e){let{gameId:s,outcome:t,closeModal:c}=e,{data:d}=(0,a.G$)({gameId:s}),[o,m]=(0,r.useState)(""),[x,h]=(0,r.useState)(!1),{isOddsLoading:u,totalOdds:p,isAllowanceLoading:f,isApproveRequired:b,submit:j,approveTx:v,betTx:g}=(0,a.Pf)({amount:o,slippage:5,affiliate:"0x0000000000000000000000000000000000000000",selections:[t],onSuccess:()=>{h(!0)}}),N=(0,l.lA)({outcomeId:String(t.outcomeId)}),w=v.isPending||g.isPending,y=v.isProcessing||g.isProcessing;return n.jsx("div",{className:"fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-20",onClick:c,children:n.jsx("div",{className:"w-[480px] bg-white max-h-[calc(100vh-40px)] overflow-y-auto no-scrollbar rounded-[40px] shadow-2xl",onClick:e=>e.stopPropagation(),children:x?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center h-[400px]",children:[n.jsx(CheckBadgeIcon,{className:"w-28 h-28 text-purple-500"}),n.jsx("div",{className:"mt-5 text-2xl font-semibold",children:"Success!"})]}):(0,n.jsxs)(n.Fragment,{children:[n.jsx(i.x2,{game:d}),(0,n.jsxs)("div",{className:"pt-4 px-6 pb-6",children:[(0,n.jsxs)("div",{className:"grid grid-cols-[auto_1fr] gap-y-3 mt-2 text-md",children:[n.jsx("span",{className:"text-zinc-400",children:"Market"}),n.jsx("span",{className:"text-right font-semibold",children:N}),n.jsx("span",{className:"text-zinc-400",children:"Selection"}),n.jsx("span",{className:"text-right font-semibold",children:t.selectionName}),n.jsx("span",{className:"text-zinc-400",children:"Odds"}),n.jsx("span",{className:"text-right font-semibold",children:u?"Loading...":void 0!==p?n.jsx(n.Fragment,{children:(+p).toFixed(3)}):n.jsx(n.Fragment,{children:"-"})})]}),n.jsx(AmountInput,{amount:o,onChange:m}),n.jsx(SubmitButton,{amount:o,isAllowanceLoading:f,isApproveRequired:b,isPending:w,isProcessing:y,onClick:j})]})]})})})}},87030:(e,s,t)=>{"use strict";t.r(s),t.d(s,{Providers:()=>Providers});var n=t(30784);t(9885);var r=t(6135),a=t(58630),l=t(33029),i=t(3993),c=t(40965),d=t(71701),o=t(47e3),m=t(81033);let x={[d.v.id]:"https://polygon-mumbai-bor.publicnode.com"},{chains:h,publicClient:u}=(0,i.QB)([d.v],[(0,o.R)({rpc:e=>({http:x[e.id]})}),(0,m.I)()]),{connectors:p}=(0,l.wo)({appName:"Azuro",projectId:"31ade19a870abe77af74f989c73970da",chains:h}),f=(0,c._g)({connectors:p,publicClient:u});function Providers(e){let{children:s}=e;return n.jsx(c.eM,{config:f,children:n.jsx(l.pj,{chains:h,children:n.jsx(r.WZ,{initialChainId:d.v.id,children:n.jsx(a.e,{children:s})})})})}},93662:(e,s,t)=>{"use strict";t.r(s),t.d(s,{RedeemAll:()=>RedeemAll});var n=t(30784);t(9885);var r=t(6135),a=t(10566);function RedeemAll(e){let{bets:s}=e,{submit:t,isPending:l,isProcessing:i}=(0,r.HG)(),c=s?.filter(e=>!e.freebetContractAddress&&e.isRedeemable),d=!c.length||l||i||!0,handleRedeem=async()=>{try{await t({bets:c})}catch{}},o="Redeem all";return l?o="Waiting for approval":i&&(o="Processing..."),n.jsx("button",{className:(0,a.Z)("md:w-[200px] py-3.5 text-white font-semibold text-center rounded-xl mb-4",{"bg-blue-500 hover:bg-blue-600 transition shadow-md":!d,"bg-zinc-300 cursor-not-allowed":d}),disabled:d,onClick:handleRedeem,children:o})}},71495:(e,s,t)=>{"use strict";t.r(s),t.d(s,{SportsNavigation:()=>SportsNavigation});var n=t(30784),r=t(6135),a=t(23670);function SportsNavigation(){let{loading:e,data:s}=(0,r.A7)({withGameCount:!0});if(e)return n.jsx("div",{children:"Loading..."});let t=[...s?.sports||[]].sort((e,s)=>s.games.length-e.games.length);return n.jsx("div",{className:"w-full mb-8 overflow-hidden",children:n.jsx("div",{className:"w-full overflow-x-auto no-scrollbar",children:(0,n.jsxs)("div",{className:"flex space-x-1",children:[n.jsx(a.O$,{className:"py-2 px-4 bg-zinc-100 whitespace-nowrap rounded-full",activeClassName:"!bg-purple-200",href:"/events/top",children:"Top"}),t.map(({slug:e,name:s,games:t})=>(0,n.jsxs)(a.O$,{className:"flex items-center py-2 px-4 bg-zinc-100 whitespace-nowrap rounded-full",activeClassName:"!bg-purple-200",href:`/events/${e}`,children:[n.jsx("span",{children:s}),t&&n.jsx("span",{className:"pl-1.5 text-zinc-400",children:t.length})]},e)),n.jsx("div",{className:"flex-none w-3 h-4"})]})})})}},46905:(e,s,t)=>{"use strict";t.r(s),t.d(s,{Watchers:()=>Watchers});var n=t(6135);function Watchers(){return(0,n.$N)(),null}},23670:(e,s,t)=>{"use strict";t.d(s,{O$:()=>c.ActiveLink,ar:()=>h.BetCard,yb:()=>GameCard,x2:()=>GameInfo,Pd:()=>m.GameMarkets,Ii:()=>o.OutcomeButton,HS:()=>x.PlaceBetModal,I_:()=>u.RedeemAll,ct:()=>d.SportsNavigation}),t(87030),t(53141),t(46905);var n=t(30784),r=t(11440),a=t.n(r),l=t(83689),i=t.n(l);function GameCard(e){let{gameId:s,sport:t,league:r,participants:l,startsAt:c}=e.game;return(0,n.jsxs)(a(),{className:"bet-card p-4 bg-zinc-50 rounded-3xl hover:bg-zinc-100 transition",href:`/events/${t.slug}/${s}`,children:[(0,n.jsxs)("div",{className:"flex justify-between text-sm",children:[n.jsx("span",{children:t.name}),n.jsx("span",{children:i()(1e3*c).format("DD MMM HH:mm")})]}),(0,n.jsxs)("div",{className:"mt-2 text-sm font-bold",children:[r.country.name," \xb7 ",r.name]}),n.jsx("div",{className:"mt-3 space-y-1",children:l.map(({image:e,name:s})=>(0,n.jsxs)("div",{className:"flex items-center",children:[n.jsx("div",{className:"flex items-center justify-center w-8 h-8 mr-2 border border-zinc-300 rounded-full",children:!!e&&n.jsx("img",{className:"w-4 h-4",src:e,alt:""})}),n.jsx("span",{className:"text-md",children:s})]},s))})]})}var c=t(19351),d=t(71495);function ParticipantLogo(e){let{image:s,name:t}=e;return(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"flex items-center justify-center w-20 h-20 bg-white rounded-full",children:!!s&&n.jsx("img",{className:"w-12 h-12",src:s,alt:""})}),n.jsx("span",{className:"max-w-[210px] mt-3 text-lg text-center",children:t})]})}function GameInfo(e){let{sport:s,league:t,participants:r,startsAt:a}=e.game;return(0,n.jsxs)("div",{className:"flex flex-col items-center pt-6 pb-8 bg-zinc-50 rounded-[40px]",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center text-md",children:[n.jsx("div",{children:s.name}),(0,n.jsxs)("div",{className:"mt-2 text-zinc-500",children:[t.country.name," \xb7 ",t.name]})]}),(0,n.jsxs)("div",{className:"mt-5 grid grid-cols-[1fr_auto_1fr]",children:[n.jsx(ParticipantLogo,{...r[0]}),n.jsx("div",{className:"mx-5 pt-7 text-md text-zinc-500",children:i()(1e3*a).format("DD MMM HH:mm")}),n.jsx(ParticipantLogo,{...r[1]})]})]})}var o=t(34513),m=t(64105),x=t(79096),h=t(84012),u=t(93662)},13009:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>RootLayout,metadata:()=>G});var n=t(4656),r=t(60177),a=t.n(r);t(5023),t(94782);var l=t(95153);let i=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/Providers.tsx`),{__esModule:c,$$typeof:d}=i;i.default;let o=i.Providers,m=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/Header.tsx`),{__esModule:x,$$typeof:h}=m;m.default;let u=m.Header,p=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/Watchers.tsx`),{__esModule:f,$$typeof:b}=p;p.default;let j=p.Watchers;t(24353),t(79736);let v=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/ActiveLink.tsx`),{__esModule:g,$$typeof:N}=v;v.default,v.ActiveLink;let w=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/SportsNavigation.tsx`),{__esModule:y,$$typeof:P}=w;w.default,w.SportsNavigation;let k=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/OutcomeButton.tsx`),{__esModule:z,$$typeof:M}=k;k.default,k.OutcomeButton;let $=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/GameMarkets.tsx`),{__esModule:A,$$typeof:C}=$;$.default,$.GameMarkets;let S=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/PlaceBetModal/PlaceBetModal.tsx`),{__esModule:B,$$typeof:R}=S;S.default,S.PlaceBetModal;let _=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/BetCard.tsx`),{__esModule:I,$$typeof:L}=_;_.default,_.BetCard;let D=(0,l.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/components/RedeemAll.tsx`),{__esModule:H,$$typeof:O}=D;D.default,D.RedeemAll;let G={title:"Haze Betting dApp"};function RootLayout({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:a().className,children:(0,n.jsxs)(o,{children:[n.jsx(u,{}),n.jsx("main",{className:"container pt-5 pb-10",children:e}),n.jsx(j,{})]})})})}},5023:()=>{}};