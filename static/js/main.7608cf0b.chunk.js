(this["webpackJsonpgoit-react-hw"]=this["webpackJsonpgoit-react-hw"]||[]).push([[0],[,,function(e,t,a){e.exports={list:"Statistics_list__MX_tb",item:"Statistics_item__1KCkT"}},,function(e,t,a){e.exports={section:"Section_section__91AdT",title:"Section_title__1uIq1"}},,,,,function(e,t,a){e.exports={container:"Container_container__Vm2bt"}},,function(e,t,a){e.exports={btn:"Button_btn__376B7"}},function(e,t,a){e.exports={notification:"Notification_notification__vty7k"}},,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(5),o=a.n(i),s=(a(19),a(6)),r=a(7),l=a(8),d=a(14),u=a(13),b=(a(20),a(9)),j=a.n(b),h=a(0);function v(e){var t=e.children;return Object(h.jsx)("div",{className:j.a.container,children:t})}var f=a(4),p=a.n(f);function k(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{className:p.a.section,children:[Object(h.jsx)("p",{className:p.a.title,children:t}),a]})}var m=a(10),x=a.n(m),O=a(11),_=a.n(O),g=function(e){var t=e.feedbackType,a=e.onLeaveFeedback;return Object(h.jsx)("button",{className:_.a.btn,"data-action":t,onClick:a,children:t},t)};function N(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return g({feedbackType:e,onLeaveFeedback:a})}))}N.propTypes={options:x.a.array.isRequired};var y=a(2),F=a.n(y);var T=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{className:F.a.list,children:[Object(h.jsxs)("li",{className:F.a.item,children:["Good: ",t]}),Object(h.jsxs)("li",{className:F.a.item,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:F.a.item,children:["Bad: ",n]}),Object(h.jsxs)("li",{className:F.a.item,children:["Total: ",c]}),Object(h.jsxs)("li",{className:F.a.item,children:["Positive feedback: ",i,"%"]})]})},P=a(12),S=a.n(P);function w(e){var t=e.message;return Object(h.jsx)("div",{className:S.a.notification,children:t})}var B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var a=t.target.dataset.action;e.setState((function(e){return Object(s.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good,t=this.countTotalFeedback();return 0===t?0:Math.floor(e/t*100)}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return Object(h.jsxs)(v,{children:[Object(h.jsx)(k,{title:".:::eXpresso cafe:::."}),Object(h.jsx)(k,{title:"Please leave feedback",children:Object(h.jsx)(N,{options:["good","neutral","bad"],onLeaveFeedback:this.handleFeedback})}),Object(h.jsx)(k,{title:"Statistics",children:0!==this.countTotalFeedback()?Object(h.jsx)(T,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(w,{message:"no feedback given yet"})})]})}}]),a}(n.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.7608cf0b.chunk.js.map