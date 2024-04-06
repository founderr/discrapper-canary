"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("718017"),
  r = n("481060"),
  o = n("918701"),
  u = n("685613"),
  d = n("340100"),
  c = n("78826"),
  f = n("580168"),
  E = n("689938"),
  _ = n("603961");
t.default = function(e) {
  var t, n, s;
  let {
    className: h,
    expansionSpring: C,
    isExpanded: m,
    isExpansionAnimationComplete: S,
    quest: I,
    useReducedMotion: T
  } = e, p = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, g = (null !== (s = null === (n = I.userStatus) || void 0 === n ? void 0 : n.streamProgressSeconds) && void 0 !== s ? s : 0) > 0;
  return (0, a.jsxs)(i.animated.div, {
    "aria-hidden": m && S,
    className: l()(h, _.contentCollapsed, {
      [_.contentCollapsedExpanded]: m,
      [_.contentCollapsedAccepted]: p
    }),
    style: {
      opacity: C.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsx)(f.QuestsBarBackgroundAnimation, {
      quest: I,
      useReducedMotion: T
    }), (0, a.jsx)("div", {
      className: _.contentCollapsedWrapper,
      children: p ? (0, a.jsxs)("div", {
        className: _.questProgressWrapper,
        children: [(0, a.jsx)(c.QuestsAsset, {
          id: "QuestsBarContentCollapsed_rewardTile",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: I.config.messages.rewardName,
            className: _.questProgressRewardTile,
            src: (0, o.getRewardAssetUrl)(I)
          })
        }), g ? (0, a.jsx)(d.default, {
          className: _.questProgressBar,
          quest: I
        }) : (0, a.jsx)(r.Text, {
          className: _.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsxs)("div", {
        className: _.brandingWrapper,
        children: [(0, a.jsx)(u.default, {
          className: _.partnerBranding,
          quest: I
        }), (0, a.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: _.questName,
          children: E.default.Messages.QUEST.format({
            questName: I.config.messages.questName
          })
        })]
      })
    })]
  })
}