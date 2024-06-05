"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("920906"),
  r = n("481060"),
  o = n("497505"),
  u = n("918701"),
  d = n("685613"),
  c = n("340100"),
  f = n("644646"),
  E = n("898170"),
  h = n("46140"),
  _ = n("689938"),
  C = n("743451");
t.default = function(e) {
  var t;
  let {
    className: n,
    expansionSpring: s,
    isExpanded: m,
    isExpansionAnimationComplete: S,
    quest: p,
    useReducedMotion: I
  } = e, g = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = (0, u.calculatePercentComplete)({
    quest: p,
    location: h.QuestsExperimentLocations.QUESTS_BAR
  });
  return (0, a.jsxs)(i.animated.div, {
    "aria-hidden": m && S,
    className: l()(n, C.contentCollapsed, {
      [C.contentCollapsedExpanded]: m,
      [C.contentCollapsedAccepted]: g
    }),
    style: {
      opacity: s.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsx)(E.QuestBarBackgroundAnimation, {
      quest: p,
      useReducedMotion: I
    }), (0, a.jsx)("div", {
      className: C.contentCollapsedWrapper,
      children: g ? (0, a.jsxs)("div", {
        className: C.questProgressWrapper,
        children: [(0, a.jsx)(f.default, {
          className: C.questProgressRewardTile,
          quest: p,
          questContent: o.QuestContent.QUEST_BAR,
          autoplay: !1
        }), T > 0 ? (0, a.jsx)(c.default, {
          className: C.questProgressBar,
          quest: p
        }) : (0, a.jsx)(r.Text, {
          className: C.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: _.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsxs)("div", {
        className: C.brandingWrapper,
        children: [(0, a.jsx)(d.default, {
          className: C.partnerBranding,
          quest: p
        }), (0, a.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: C.questName,
          children: _.default.Messages.QUEST.format({
            questName: p.config.messages.questName
          })
        })]
      })
    })]
  })
}