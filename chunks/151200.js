t.d(n, {
  Z: function() {
return C;
  }
});
var l = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(481060),
  o = t(256139),
  s = t(328731),
  c = t(435439),
  u = t(206295),
  d = t(297781),
  m = t(43205),
  f = t(792125),
  _ = t(231338),
  p = t(909707);

function C(e) {
  let {
entry: n,
channel: t,
title: r,
subtitle: C,
thumbnailUrl: v,
onClickTitle: h,
onClickSubtitle: E,
onClickThumbnail: x,
providerIconProps: I,
style: T = {}
  } = e, {
primaryColor: N,
secondaryColor: g
  } = (0, u.Z)(v);
  return null != v && (T.background = 'linear-gradient(45deg, '.concat(N, ', ').concat(g, ')')), (0, l.jsxs)('div', {
'data-disable-adaptive-theme': !0,
className: i()(p.container, (0, f.Q)(_.BR.DARK)),
style: T,
children: [
  (0, l.jsx)(a.Clickable, {
    onClick: x,
    className: i()(p.thumbnailContainer, null != x && p.clickable),
    children: (0, l.jsx)(m.f, {
      src: v,
      constrain: 'width',
      size: 64
    })
  }),
  (0, l.jsxs)('div', {
    className: p.infoContainer,
    children: [
      (0, l.jsx)(s.Z, {
        channel: t,
        entry: n,
        className: p.users
      }),
      (0, l.jsx)(a.Spacer, {
        size: 2
      }),
      (0, l.jsx)(o.Z, {
        onClick: h,
        children: (0, l.jsx)(a.Heading, {
          variant: 'heading-md/medium',
          lineClamp: 1,
          className: i()(p.textPrimary, p.truncatedText),
          children: r
        })
      }),
      null != C ? (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)(a.Spacer, {
            size: 2
          }),
          (0, l.jsx)(o.Z, {
            onClick: E,
            children: (0, l.jsx)(a.Text, {
              variant: 'text-sm/normal',
              className: i()(p.textSecondary, p.truncatedText),
              lineClamp: 1,
              children: C
            })
          })
        ]
      }) : null,
      (0, l.jsx)(d.PZ, {
        className: p.badges,
        entry: n,
        location: d.Gt.EMBED
      })
    ]
  }),
  (0, l.jsx)('div', {
    className: p.headerIcons,
    children: null != I ? (0, l.jsx)(c.Z, {
      ...I
    }) : null
  })
]
  });
}