var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(920906),
  r = n(481060),
  o = n(113434),
  c = n(497505),
  d = n(685613),
  u = n(340100),
  E = n(644646),
  _ = n(898170),
  h = n(46140),
  m = n(689938),
  T = n(51582);
t.Z = function(e) {
  var t;
  let {
    className: n,
    expansionSpring: a,
    isExpanded: C,
    isExpansionAnimationComplete: g,
    quest: p,
    useReducedMotion: N
  } = e, I = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {
    percentComplete: A
  } = (0, o.Rf)({
    quest: p,
    location: h.dr.QUESTS_BAR
  });
  return (0, s.jsxs)(l.animated.div, {
    "aria-hidden": C && g,
    className: i()(n, T.contentCollapsed, {
      [T.contentCollapsedExpanded]: C,
      [T.contentCollapsedAccepted]: I
    }),
    style: {
      opacity: a.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, s.jsx)(_.Z, {
      quest: p,
      useReducedMotion: N
    }), (0, s.jsx)("div", {
      className: T.contentCollapsedWrapper,
      children: I ? (0, s.jsxs)("div", {
        className: T.questProgressWrapper,
        children: [(0, s.jsx)(E.Z, {
          className: T.questProgressRewardTile,
          quest: p,
          questContent: c.jn.QUEST_BAR,
          autoplay: !1
        }), A > 0 ? (0, s.jsx)(u.Z, {
          className: T.questProgressBar,
          quest: p
        }) : (0, s.jsx)(r.Text, {
          className: T.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: m.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, s.jsxs)("div", {
        className: T.brandingWrapper,
        children: [(0, s.jsx)(d.Z, {
          className: T.partnerBranding,
          quest: p
        }), (0, s.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: T.questName,
          children: m.Z.Messages.QUEST.format({
            questName: p.config.messages.questName
          })
        })]
      })
    })]
  })
}