var s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  r = n(338545),
  l = n(481060),
  i = n(113434),
  c = n(497505),
  d = n(685613),
  u = n(340100),
  p = n(644646),
  x = n(898170),
  m = n(46140),
  g = n(689938),
  f = n(974772);
t.Z = function(e) {
  var t;
  let {
className: n,
expansionSpring: o,
isExpanded: _,
isExpansionAnimationComplete: C,
quest: h,
useReducedMotion: E
  } = e, T = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {
percentComplete: S
  } = (0, i.Rf)(h), v = (0, i.Jf)(h), A = null != v ? v.completedRatio > 0 : S > 0;
  return (0, s.jsxs)(r.animated.div, {
'aria-hidden': _ && C,
className: a()(n, f.contentCollapsed, {
  [f.contentCollapsedExpanded]: _,
  [f.contentCollapsedAccepted]: T
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
  (0, s.jsx)(x.Z, {
    quest: h,
    useReducedMotion: E
  }),
  (0, s.jsx)('div', {
    className: f.contentCollapsedWrapper,
    children: T ? (0, s.jsxs)('div', {
      className: f.questProgressWrapper,
      children: [
        (0, s.jsx)(p.Z, {
          className: f.questProgressRewardTile,
          quest: h,
          questContent: c.jn.QUEST_BAR,
          autoplay: !1,
          location: m.dr.QUESTS_BAR
        }),
        A ? (0, s.jsx)(u.Z, {
          className: f.questProgressBar,
          quest: h
        }) : (0, s.jsx)(l.Text, {
          className: f.questProgressHint,
          color: 'always-white',
          variant: 'text-sm/semibold',
          children: g.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })
      ]
    }) : (0, s.jsxs)('div', {
      className: f.brandingWrapper,
      children: [
        (0, s.jsx)(d.Z, {
          className: f.partnerBranding,
          quest: h
        }),
        (0, s.jsx)(l.Heading, {
          color: 'always-white',
          variant: 'heading-sm/medium',
          className: f.questName,
          children: g.Z.Messages.QUEST.format({
            questName: h.config.messages.questName
          })
        })
      ]
    })
  })
]
  });
};