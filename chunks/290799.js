"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(63063),
  u = n(981631),
  _ = n(689938),
  c = n(333110);
let d = [{
  getQuestion: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1,
  getAnswer: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
}, {
  getQuestion: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2,
  getAnswer: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({
    helpCenterUrl: l.Z.getArticleURL(u.BhN.GUILD_BOOSTING_FAQ)
  })
}, {
  getQuestion: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3,
  getAnswer: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
}, {
  getQuestion: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4,
  getAnswer: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
}];
t.Z = function(e) {
  let {
    className: t
  } = e, [n, s] = r.useState(null);
  return (0, i.jsxs)("div", {
    className: o()(c.wrapper, t),
    children: [(0, i.jsx)(a.Heading, {
      className: c.heading,
      variant: "heading-xxl/bold",
      children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING
    }), (0, i.jsx)("ul", {
      className: c.list,
      children: d.map((e, t) => {
        let r = n === t;
        return (0, i.jsxs)("div", {
          className: c.listItem,
          children: [(0, i.jsxs)(a.Clickable, {
            className: o()(c.questionWrapper, {
              [c.questionWrapperExpanded]: r
            }),
            onClick: () => s(e => e === t ? null : t),
            tag: "li",
            children: [(0, i.jsx)(a.Text, {
              className: c.question,
              variant: "text-lg/normal",
              children: e.getQuestion()
            }), r ? (0, i.jsx)(a.MinusIcon, {
              size: "md",
              color: "currentColor",
              className: c.questionIcon
            }) : (0, i.jsx)(a.PlusSmallIcon, {
              size: "md",
              color: "currentColor",
              className: c.questionIcon
            })]
          }), r && (0, i.jsx)(a.Text, {
            className: c.answer,
            color: "text-normal",
            variant: "text-md/normal",
            children: e.getAnswer()
          })]
        }, t)
      })
    })]
  })
}