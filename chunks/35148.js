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
  x = n(689938),
  f = n(53075);
t.Z = function(e) {
  var t;
  let {
className: n,
expansionSpring: o,
isExpanded: g,
isExpansionAnimationComplete: C,
quest: _,
useReducedMotion: h
  } = e, E = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {
percentComplete: S
  } = (0, i.Rf)(_), T = (0, i.Jf)(_), v = null != T ? T.completedRatio > 0 : S > 0;
  return (0, s.jsxs)(a.animated.div, {
'aria-hidden': g && C,
className: r()(n, f.contentCollapsed, {
  [f.contentCollapsedExpanded]: g,
  [f.contentCollapsedAccepted]: E
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
    quest: _,
    useReducedMotion: h
  }),
  (0, s.jsx)('div', {
    className: f.contentCollapsedWrapper,
    children: E ? (0, s.jsxs)('div', {
      className: f.questProgressWrapper,
      children: [
        (0, s.jsx)(p.Z, {
          className: f.questProgressRewardTile,
          quest: _,
          questContent: c.jn.QUEST_BAR,
          autoplay: !1
        }),
        v ? (0, s.jsx)(u.Z, {
          className: f.questProgressBar,
          quest: _
        }) : (0, s.jsx)(l.Text, {
          className: f.questProgressHint,
          color: 'always-white',
          variant: 'text-sm/semibold',
          children: x.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })
      ]
    }) : (0, s.jsxs)('div', {
      className: f.brandingWrapper,
      children: [
        (0, s.jsx)(d.Z, {
          className: f.partnerBranding,
          quest: _
        }),
        (0, s.jsx)(l.Heading, {
          color: 'always-white',
          variant: 'heading-sm/medium',
          className: f.questName,
          children: x.Z.Messages.QUEST.format({
            questName: _.config.messages.questName
          })
        })
      ]
    })
  })
]
  });
};