"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("920906"),
  r = s("481060"),
  o = s("497505"),
  u = s("918701"),
  d = s("685613"),
  c = s("340100"),
  E = s("644646"),
  _ = s("898170"),
  f = s("46140"),
  h = s("689938"),
  m = s("743451");
t.default = function(e) {
  var t;
  let {
    className: s,
    expansionSpring: n,
    isExpanded: C,
    isExpansionAnimationComplete: T,
    quest: g,
    useReducedMotion: A
  } = e, p = (null === (t = g.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, N = (0, u.calculatePercentComplete)({
    quest: g,
    location: f.QuestsExperimentLocations.QUESTS_BAR
  });
  return (0, a.jsxs)(i.animated.div, {
    "aria-hidden": C && T,
    className: l()(s, m.contentCollapsed, {
      [m.contentCollapsedExpanded]: C,
      [m.contentCollapsedAccepted]: p
    }),
    style: {
      opacity: n.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsx)(_.QuestBarBackgroundAnimation, {
      quest: g,
      useReducedMotion: A
    }), (0, a.jsx)("div", {
      className: m.contentCollapsedWrapper,
      children: p ? (0, a.jsxs)("div", {
        className: m.questProgressWrapper,
        children: [(0, a.jsx)(E.default, {
          className: m.questProgressRewardTile,
          quest: g,
          questContent: o.QuestContent.QUEST_BAR,
          autoplay: !1
        }), N > 0 ? (0, a.jsx)(c.default, {
          className: m.questProgressBar,
          quest: g
        }) : (0, a.jsx)(r.Text, {
          className: m.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: h.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsxs)("div", {
        className: m.brandingWrapper,
        children: [(0, a.jsx)(d.default, {
          className: m.partnerBranding,
          quest: g
        }), (0, a.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: m.questName,
          children: h.default.Messages.QUEST.format({
            questName: g.config.messages.questName
          })
        })]
      })
    })]
  })
}