n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(597312),
  l = n(410030),
  r = n(100527),
  o = n(906732),
  c = n(785717),
  u = n(221292),
  d = n(318661),
  h = n(502762),
  m = n(475413),
  p = n(228168),
  _ = n(689938),
  f = n(833802),
  E = n(321975);

function g(e) {
  let {
user: t,
channel: n,
onViewBlockedProfileClick: g
  } = e, C = (0, d.ZP)(t.id), I = (0, l.ZP)(), {
analyticsLocations: x
  } = (0, o.ZP)(r.Z.BLOCKED_PROFILE_PANEL), T = (0, c.ZB)({
layout: 'BLOCKED_PROFILE_PANEL',
userId: t.id,
channelId: n.id
  }), N = a.useRef(null);
  return (0, i.jsx)(o.Gt, {
value: x,
children: (0, i.jsx)(c.Mt, {
  value: T,
  children: (0, i.jsx)(h.Z, {
    ref: N,
    user: t,
    displayProfile: C,
    profileType: p.y0.PANEL,
    themeOverride: I,
    className: f.container,
    children: (0, i.jsx)(s.u2, {
      children: (0, i.jsxs)('div', {
        className: f.container,
        children: [
          (0, i.jsx)('img', {
            alt: '',
            src: E,
            className: f.previewForCollected,
            'aria-hidden': !0
          }),
          (0, i.jsx)(m.tG, {
            className: f.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: _.Z.Messages.VIEW_PROFILE,
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == g || g(), (0, u.pQ)({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: x,
                ...T
              });
            }
          })
        ]
      })
    })
  })
})
  });
}