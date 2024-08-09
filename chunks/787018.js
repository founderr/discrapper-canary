n.d(s, {
  Z: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  o = n(481060),
  t = n(100527),
  r = n(906732),
  a = n(785717),
  d = n(221292),
  c = n(318661),
  u = n(502762),
  I = n(475413),
  _ = n(228168),
  f = n(981631),
  E = n(689938),
  m = n(570129),
  S = n(161068);

function Z(e) {
  let {
user: s,
guildId: n,
channelId: Z,
messageId: x,
roleId: v,
transitionState: h,
onViewBlockedProfileClick: T,
showGuildProfile: p = !0,
sourceAnalyticsLocations: g = []
  } = e, N = n === f.ME ? void 0 : n, {
analyticsLocations: C
  } = (0, r.ZP)([
...g,
t.Z.BLOCKED_PROFILE_MODAL
  ]), j = (0, a.ZB)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: s.id,
guildId: N,
channelId: Z,
messageId: x,
roleId: v,
showGuildProfile: p
  }), A = (0, c.ZP)(s.id, p ? N : void 0), O = l.createRef();
  return (0, i.jsx)(r.Gt, {
value: C,
children: (0, i.jsx)(a.Mt, {
  value: j,
  children: (0, i.jsx)(o.ModalRoot, {
    transitionState: h,
    className: m.root,
    hideShadow: !0,
    'aria-label': E.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsx)(u.Z, {
      user: s,
      displayProfile: A,
      profileType: _.y0.FULL_SIZE,
      ref: O,
      children: (0, i.jsxs)('div', {
        className: m.container,
        children: [
          (0, i.jsx)('img', {
            alt: '',
            src: S,
            className: m.previewForCollected,
            'aria-hidden': !0
          }),
          (0, i.jsx)(I.tG, {
            className: m.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: E.Z.Messages.VIEW_PROFILE,
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == T || T(), (0, d.pQ)({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: C,
                ...j
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