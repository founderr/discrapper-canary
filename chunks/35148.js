var o = n(735250);
n(470079);
var s = n(120356),
  r = n.n(s),
  a = n(920906),
  i = n(481060),
  l = n(113434),
  c = n(497505),
  d = n(685613),
  u = n(340100),
  p = n(644646),
  m = n(898170),
  x = n(46140),
  g = n(689938),
  C = n(51582);
t.Z = function(e) {
  var t;
  let {
    className: n,
    expansionSpring: s,
    isExpanded: f,
    isExpansionAnimationComplete: h,
    quest: _,
    useReducedMotion: E
  } = e, S = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {
    percentComplete: T
  } = (0, l.Rf)({
    quest: _,
    location: x.dr.QUESTS_BAR
  });
  return (0, o.jsxs)(a.animated.div, {
    "aria-hidden": f && h,
    className: r()(n, C.contentCollapsed, {
      [C.contentCollapsedExpanded]: f,
      [C.contentCollapsedAccepted]: S
    }),
    style: {
      opacity: s.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, o.jsx)(m.Z, {
      quest: _,
      useReducedMotion: E
    }), (0, o.jsx)("div", {
      className: C.contentCollapsedWrapper,
      children: S ? (0, o.jsxs)("div", {
        className: C.questProgressWrapper,
        children: [(0, o.jsx)(p.Z, {
          className: C.questProgressRewardTile,
          quest: _,
          questContent: c.jn.QUEST_BAR,
          autoplay: !1
        }), T > 0 ? (0, o.jsx)(u.Z, {
          className: C.questProgressBar,
          quest: _
        }) : (0, o.jsx)(i.Text, {
          className: C.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: g.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, o.jsxs)("div", {
        className: C.brandingWrapper,
        children: [(0, o.jsx)(d.Z, {
          className: C.partnerBranding,
          quest: _
        }), (0, o.jsx)(i.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: C.questName,
          children: g.Z.Messages.QUEST.format({
            questName: _.config.messages.questName
          })
        })]
      })
    })]
  })
}