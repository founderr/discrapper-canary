var s = n(735250);
n(470079);
var o = n(120356),
  r = n.n(o),
  a = n(338545),
  l = n(481060),
  i = n(113434),
  c = n(497505),
  d = n(685613),
  u = n(340100),
  p = n(644646),
  m = n(898170),
  x = n(46140),
  f = n(689938),
  g = n(974772);
t.Z = function(e) {
  var t;
  let {
className: n,
expansionSpring: o,
isExpanded: C,
isExpansionAnimationComplete: _,
quest: h,
useReducedMotion: E
  } = e, S = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {
percentComplete: T
  } = (0, i.Rf)(h), v = (0, i.Jf)(h), A = null != v ? v.completedRatio > 0 : T > 0;
  return (0, s.jsxs)(a.animated.div, {
'aria-hidden': C && _,
className: r()(n, g.contentCollapsed, {
  [g.contentCollapsedExpanded]: C,
  [g.contentCollapsedAccepted]: S
}),
style: {
  opacity: o.to({
    range: [
      0,
      1
    ],
    output: [
      1,
      0
    ]
  })
},
children: [
  (0, s.jsx)(m.Z, {
    quest: h,
    useReducedMotion: E
  }),
  (0, s.jsx)('div', {
    className: g.contentCollapsedWrapper,
    children: S ? (0, s.jsxs)('div', {
      className: g.questProgressWrapper,
      children: [
        (0, s.jsx)(p.Z, {
          className: g.questProgressRewardTile,
          quest: h,
          questContent: c.jn.QUEST_BAR,
          autoplay: !1,
          location: x.dr.QUESTS_BAR
        }),
        A ? (0, s.jsx)(u.Z, {
          className: g.questProgressBar,
          quest: h
        }) : (0, s.jsx)(l.Text, {
          className: g.questProgressHint,
          color: 'always-white',
          variant: 'text-sm/semibold',
          children: f.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })
      ]
    }) : (0, s.jsxs)('div', {
      className: g.brandingWrapper,
      children: [
        (0, s.jsx)(d.Z, {
          className: g.partnerBranding,
          quest: h
        }),
        (0, s.jsx)(l.Heading, {
          color: 'always-white',
          variant: 'heading-sm/medium',
          className: g.questName,
          children: f.Z.Messages.QUEST.format({
            questName: h.config.messages.questName
          })
        })
      ]
    })
  })
]
  });
};