var s = n(735250);
n(470079);
var o = n(481060),
  r = n(497505),
  a = n(644646),
  l = n(613087),
  i = n(472144),
  c = n(569379),
  d = n(596282);
t.Z = e => {
  let {
quest: t,
progressBarRef: n,
isExpanded: u,
taskDetails: p
  } = e, {
percentComplete: m
  } = p, x = (0, c.eQ)(t), f = (0, c.vf)(t, u), g = u ? 'expanded' : 'collapsed';
  return (0, s.jsxs)('div', {
className: d.questProgressWrapper,
children: [
  (0, s.jsx)(l.l7, {
    inState: g,
    id: 'progress-bar',
    ref: n,
    children: e => (0, s.jsx)(i.Z, {
      ref: e,
      quest: t,
      percentComplete: m,
      size: 42,
      strokeWidth: 3,
      children: (0, s.jsx)(a.Z, {
        className: d.questProgressRewardTile,
        quest: t,
        questContent: r.jn.QUEST_BAR_V2,
        autoplay: !1
      })
    })
  }),
  (0, s.jsxs)('div', {
    className: d.questProgressCopy,
    children: [
      (0, s.jsx)(l.l7, {
        inState: g,
        id: 'progress-title',
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: d.questProgressHint,
          color: 'header-primary',
          variant: 'text-sm/semibold',
          children: x
        })
      }),
      (0, s.jsx)(l.l7, {
        inState: g,
        id: 'progress-subtitle',
        isTextTransition: !0,
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: d.questProgressHint,
          color: 'text-muted',
          variant: 'text-xs/normal',
          children: f
        })
      })
    ]
  })
]
  });
};