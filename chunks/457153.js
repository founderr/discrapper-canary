"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("718017"),
  r = a("481060"),
  o = a("497505"),
  u = a("685613"),
  d = a("340100"),
  c = a("644646"),
  f = a("898170"),
  E = a("689938"),
  h = a("336471");
t.default = function(e) {
  var t, s, _;
  let {
    className: C,
    expansionSpring: m,
    isExpanded: S,
    isExpansionAnimationComplete: p,
    quest: I,
    useReducedMotion: g
  } = e, T = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, A = (null !== (_ = null === (s = I.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds) && void 0 !== _ ? _ : 0) > 0;
  return (0, n.jsxs)(i.animated.div, {
    "aria-hidden": S && p,
    className: l()(C, h.contentCollapsed, {
      [h.contentCollapsedExpanded]: S,
      [h.contentCollapsedAccepted]: T
    }),
    style: {
      opacity: m.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, n.jsx)(f.QuestBarBackgroundAnimation, {
      className: h.background,
      animationClassName: h.backgroundAnimation,
      quest: I,
      useReducedMotion: g
    }), (0, n.jsx)("div", {
      className: h.contentCollapsedWrapper,
      children: T ? (0, n.jsxs)("div", {
        className: h.questProgressWrapper,
        children: [(0, n.jsx)(c.default, {
          className: h.questProgressRewardTile,
          quest: I,
          questContent: o.QuestContent.QUEST_BAR,
          autoplay: !1
        }), A ? (0, n.jsx)(d.default, {
          className: h.questProgressBar,
          quest: I
        }) : (0, n.jsx)(r.Text, {
          className: h.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, n.jsxs)("div", {
        className: h.preEnrollmentWrapper,
        children: [(0, n.jsx)("img", {
          alt: "",
          className: h.wreathIcon,
          src: a("896145")
        }), (0, n.jsx)(u.default, {
          className: h.partnerBranding,
          quest: I,
          withGameTile: !1
        }), (0, n.jsx)(r.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: h.questAvailable,
          children: E.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}