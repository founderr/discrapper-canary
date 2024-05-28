"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("920906"),
  r = s("481060"),
  u = s("497505"),
  o = s("685613"),
  d = s("340100"),
  c = s("644646"),
  E = s("898170"),
  _ = s("689938"),
  f = s("743451");
t.default = function(e) {
  var t, s, n;
  let {
    className: h,
    expansionSpring: m,
    isExpanded: T,
    isExpansionAnimationComplete: C,
    quest: g,
    useReducedMotion: A
  } = e, N = (null === (t = g.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, p = (null !== (n = null === (s = g.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds) && void 0 !== n ? n : 0) > 0;
  return (0, a.jsxs)(i.animated.div, {
    "aria-hidden": T && C,
    className: l()(h, f.contentCollapsed, {
      [f.contentCollapsedExpanded]: T,
      [f.contentCollapsedAccepted]: N
    }),
    style: {
      opacity: m.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsx)(E.QuestBarBackgroundAnimation, {
      quest: g,
      useReducedMotion: A
    }), (0, a.jsx)("div", {
      className: f.contentCollapsedWrapper,
      children: N ? (0, a.jsxs)("div", {
        className: f.questProgressWrapper,
        children: [(0, a.jsx)(c.default, {
          className: f.questProgressRewardTile,
          quest: g,
          questContent: u.QuestContent.QUEST_BAR,
          autoplay: !1
        }), p ? (0, a.jsx)(d.default, {
          className: f.questProgressBar,
          quest: g
        }) : (0, a.jsx)(r.Text, {
          className: f.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: _.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsxs)("div", {
        className: f.brandingWrapper,
        children: [(0, a.jsx)(o.default, {
          className: f.partnerBranding,
          quest: g
        }), (0, a.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: f.questName,
          children: _.default.Messages.QUEST.format({
            questName: g.config.messages.questName
          })
        })]
      })
    })]
  })
}