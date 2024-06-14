"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  i = s("920906"),
  r = s("481060"),
  o = s("113434"),
  u = s("497505"),
  d = s("685613"),
  c = s("340100"),
  E = s("644646"),
  f = s("898170"),
  _ = s("46140"),
  h = s("689938"),
  C = s("743451");
t.default = function(e) {
  var t;
  let {
    className: s,
    expansionSpring: a,
    isExpanded: m,
    isExpansionAnimationComplete: T,
    quest: g,
    useReducedMotion: A
  } = e, p = (null === (t = g.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {
    percentComplete: N
  } = (0, o.useQuestTaskDetails)({
    quest: g,
    location: _.QuestsExperimentLocations.QUESTS_BAR
  });
  return (0, n.jsxs)(i.animated.div, {
    "aria-hidden": m && T,
    className: l()(s, C.contentCollapsed, {
      [C.contentCollapsedExpanded]: m,
      [C.contentCollapsedAccepted]: p
    }),
    style: {
      opacity: a.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, n.jsx)(f.QuestBarBackgroundAnimation, {
      quest: g,
      useReducedMotion: A
    }), (0, n.jsx)("div", {
      className: C.contentCollapsedWrapper,
      children: p ? (0, n.jsxs)("div", {
        className: C.questProgressWrapper,
        children: [(0, n.jsx)(E.default, {
          className: C.questProgressRewardTile,
          quest: g,
          questContent: u.QuestContent.QUEST_BAR,
          autoplay: !1
        }), N > 0 ? (0, n.jsx)(c.default, {
          className: C.questProgressBar,
          quest: g
        }) : (0, n.jsx)(r.Text, {
          className: C.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: h.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, n.jsxs)("div", {
        className: C.brandingWrapper,
        children: [(0, n.jsx)(d.default, {
          className: C.partnerBranding,
          quest: g
        }), (0, n.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: C.questName,
          children: h.default.Messages.QUEST.format({
            questName: g.config.messages.questName
          })
        })]
      })
    })]
  })
}