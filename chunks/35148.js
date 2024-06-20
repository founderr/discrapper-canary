var s = n(735250);
n(470079);
var o = n(120356),
  r = n.n(o),
  a = n(920906),
  l = n(481060),
  i = n(113434),
  c = n(497505),
  u = n(685613),
  d = n(340100),
  p = n(644646),
  x = n(898170),
  m = n(46140),
  g = n(689938),
  C = n(51582);
t.Z = function(e) {
  var t;
  let {
    className: n,
    expansionSpring: o,
    isExpanded: h,
    isExpansionAnimationComplete: S,
    quest: E,
    useReducedMotion: f
  } = e, N = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {
    percentComplete: T
  } = (0, i.Rf)({
    quest: E,
    location: m.dr.QUESTS_BAR
  });
  return (0, s.jsxs)(a.animated.div, {
    "aria-hidden": h && S,
    className: r()(n, C.contentCollapsed, {
      [C.contentCollapsedExpanded]: h,
      [C.contentCollapsedAccepted]: N
    }),
    style: {
      opacity: o.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, s.jsx)(x.Z, {
      quest: E,
      useReducedMotion: f
    }), (0, s.jsx)("div", {
      className: C.contentCollapsedWrapper,
      children: N ? (0, s.jsxs)("div", {
        className: C.questProgressWrapper,
        children: [(0, s.jsx)(p.Z, {
          className: C.questProgressRewardTile,
          quest: E,
          questContent: c.jn.QUEST_BAR,
          autoplay: !1
        }), T > 0 ? (0, s.jsx)(d.Z, {
          className: C.questProgressBar,
          quest: E
        }) : (0, s.jsx)(l.Text, {
          className: C.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: g.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, s.jsxs)("div", {
        className: C.brandingWrapper,
        children: [(0, s.jsx)(u.Z, {
          className: C.partnerBranding,
          quest: E
        }), (0, s.jsx)(l.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: C.questName,
          children: g.Z.Messages.QUEST.format({
            questName: E.config.messages.questName
          })
        })]
      })
    })]
  })
}