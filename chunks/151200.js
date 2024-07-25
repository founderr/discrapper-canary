t.d(n, {
  Z: function() {
return v;
  }
});
var l = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(481060),
  o = t(256139),
  s = t(61165),
  c = t(435439),
  u = t(206295),
  d = t(297781),
  m = t(43205),
  f = t(792125),
  _ = t(231338),
  p = t(909707);

function v(e) {
  let {
entry: n,
channel: t,
title: r,
subtitle: v,
thumbnailUrl: C,
onClickTitle: h,
onClickSubtitle: x,
onClickThumbnail: E,
providerIconProps: I,
style: N = {}
  } = e, {
primaryColor: T,
secondaryColor: g
  } = (0, u.Z)(C);
  return null != C && (N.background = 'linear-gradient(45deg, '.concat(T, ', ').concat(g, ')')), (0, l.jsxs)('div', {
'data-disable-adaptive-theme': !0,
className: i()(p.container, (0, f.Q)(_.BR.DARK)),
style: N,
children: [
  (0, l.jsx)(a.Clickable, {
    onClick: E,
    style: {
      height: 64
    },
    className: i()(null != E && p.clickable),
    children: (0, l.jsx)(m.f, {
      src: C,
      size: 64
    })
  }),
  (0, l.jsxs)('div', {
    children: [
      (0, l.jsx)(s.Z, {
        channel: t,
        entry: n
      }),
      (0, l.jsx)(a.Spacer, {
        size: 2
      }),
      (0, l.jsx)(o.Z, {
        onClick: h,
        children: (0, l.jsx)(a.Heading, {
          variant: 'heading-md/medium',
          lineClamp: 3,
          className: p.textPrimary,
          children: r
        })
      }),
      (0, l.jsx)(a.Spacer, {
        size: 2
      }),
      (0, l.jsx)(o.Z, {
        onClick: x,
        children: (0, l.jsx)(a.Text, {
          variant: 'text-sm/normal',
          className: p.textSecondary,
          children: v
        })
      }),
      (0, l.jsx)(d.PZ, {
        className: p.badges,
        entry: n,
        location: d.Gt.EMBED
      }),
      (0, l.jsx)('div', {
        className: p.headerIcons,
        children: null != I ? (0, l.jsx)(c.Z, {
          ...I
        }) : null
      })
    ]
  })
]
  });
}