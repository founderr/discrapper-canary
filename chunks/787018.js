i.d(s, {
  Z: function() {
return S;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(481060),
  o = i(100527),
  a = i(906732),
  r = i(785717),
  d = i(221292),
  c = i(318661),
  u = i(502762),
  I = i(475413),
  _ = i(228168),
  f = i(981631),
  E = i(689938),
  m = i(570129),
  v = i(161068);

function S(e) {
  let {
user: s,
guildId: i,
channelId: S,
messageId: x,
roleId: Z,
transitionState: p,
onViewBlockedProfileClick: h,
showGuildProfile: T = !0,
sourceAnalyticsLocations: g = []
  } = e, N = i === f.ME ? void 0 : i, {
analyticsLocations: j
  } = (0, a.ZP)([
...g,
o.Z.BLOCKED_PROFILE_MODAL
  ]), C = (0, r.ZB)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: s.id,
guildId: N,
channelId: S,
messageId: x,
roleId: Z,
showGuildProfile: T
  }), A = (0, c.ZP)(s.id, T ? N : void 0), R = l.createRef();
  return (0, n.jsx)(a.Gt, {
value: j,
children: (0, n.jsx)(r.Mt, {
  value: C,
  children: (0, n.jsx)(t.ModalRoot, {
    transitionState: p,
    className: m.root,
    hideShadow: !0,
    'aria-label': E.Z.Messages.USER_PROFILE_MODAL,
    children: (0, n.jsx)(u.Z, {
      user: s,
      displayProfile: A,
      profileType: _.y0.FULL_SIZE,
      ref: R,
      children: (0, n.jsxs)('div', {
        className: m.container,
        children: [
          (0, n.jsx)('img', {
            alt: '',
            src: v,
            className: m.previewForCollected,
            'aria-hidden': !0
          }),
          (0, n.jsx)(I.tG, {
            className: m.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: E.Z.Messages.VIEW_PROFILE,
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == h || h(), (0, d.pQ)({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: j,
                ...C
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