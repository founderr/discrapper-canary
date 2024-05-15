"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("120356"),
  i = n.n(s),
  l = n("685626"),
  r = n("481060"),
  o = n("497505"),
  u = n("685613"),
  d = n("340100"),
  c = n("644646"),
  f = n("898170"),
  E = n("689938"),
  h = n("743451");
t.default = function(e) {
  var t, n, s;
  let {
    className: _,
    expansionSpring: C,
    isExpanded: m,
    isExpansionAnimationComplete: p,
    quest: S,
    useReducedMotion: g
  } = e, I = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = (null !== (s = null === (n = S.userStatus) || void 0 === n ? void 0 : n.streamProgressSeconds) && void 0 !== s ? s : 0) > 0;
  return (0, a.jsxs)(l.animated.div, {
    "aria-hidden": m && p,
    className: i()(_, h.contentCollapsed, {
      [h.contentCollapsedExpanded]: m,
      [h.contentCollapsedAccepted]: I
    }),
    style: {
      opacity: C.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsx)(f.QuestBarBackgroundAnimation, {
      quest: S,
      useReducedMotion: g
    }), (0, a.jsx)("div", {
      className: h.contentCollapsedWrapper,
      children: I ? (0, a.jsxs)("div", {
        className: h.questProgressWrapper,
        children: [(0, a.jsx)(c.default, {
          className: h.questProgressRewardTile,
          quest: S,
          questContent: o.QuestContent.QUEST_BAR,
          autoplay: !1
        }), T ? (0, a.jsx)(d.default, {
          className: h.questProgressBar,
          quest: S
        }) : (0, a.jsx)(r.Text, {
          className: h.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsxs)("div", {
        className: h.brandingWrapper,
        children: [(0, a.jsx)(u.default, {
          className: h.partnerBranding,
          quest: S
        }), (0, a.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: h.questName,
          children: E.default.Messages.QUEST.format({
            questName: S.config.messages.questName
          })
        })]
      })
    })]
  })
}