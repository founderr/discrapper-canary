"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("513715"),
  r = a("481060"),
  o = a("497505"),
  u = a("685613"),
  d = a("340100"),
  c = a("644646"),
  f = a("898170"),
  E = a("689938"),
  h = a("743451");
t.default = function(e) {
  var t, a, s;
  let {
    className: _,
    expansionSpring: C,
    isExpanded: m,
    isExpansionAnimationComplete: S,
    quest: p,
    useReducedMotion: I
  } = e, T = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, g = (null !== (s = null === (a = p.userStatus) || void 0 === a ? void 0 : a.streamProgressSeconds) && void 0 !== s ? s : 0) > 0;
  return (0, n.jsxs)(i.animated.div, {
    "aria-hidden": m && S,
    className: l()(_, h.contentCollapsed, {
      [h.contentCollapsedExpanded]: m,
      [h.contentCollapsedAccepted]: T
    }),
    style: {
      opacity: C.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, n.jsx)(f.QuestBarBackgroundAnimation, {
      quest: p,
      useReducedMotion: I
    }), (0, n.jsx)("div", {
      className: h.contentCollapsedWrapper,
      children: T ? (0, n.jsxs)("div", {
        className: h.questProgressWrapper,
        children: [(0, n.jsx)(c.default, {
          className: h.questProgressRewardTile,
          quest: p,
          questContent: o.QuestContent.QUEST_BAR,
          autoplay: !1
        }), g ? (0, n.jsx)(d.default, {
          className: h.questProgressBar,
          quest: p
        }) : (0, n.jsx)(r.Text, {
          className: h.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, n.jsxs)("div", {
        className: h.brandingWrapper,
        children: [(0, n.jsx)(u.default, {
          className: h.partnerBranding,
          quest: p
        }), (0, n.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: h.questName,
          children: E.default.Messages.QUEST.format({
            questName: p.config.messages.questName
          })
        })]
      })
    })]
  })
}