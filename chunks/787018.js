s.d(n, {
  Z: function() {
return Z;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(481060),
  t = s(100527),
  r = s(906732),
  a = s(785717),
  d = s(221292),
  c = s(318661),
  u = s(502762),
  I = s(475413),
  _ = s(228168),
  f = s(981631),
  E = s(689938),
  m = s(570129),
  S = s(161068);

function Z(e) {
  let {
user: n,
guildId: s,
channelId: Z,
messageId: v,
roleId: x,
transitionState: h,
onViewBlockedProfileClick: T,
showGuildProfile: p = !0,
sourceAnalyticsLocations: g = []
  } = e, N = s === f.ME ? void 0 : s, {
analyticsLocations: C
  } = (0, r.ZP)([
...g,
t.Z.BLOCKED_PROFILE_MODAL
  ]), j = (0, a.ZB)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: n.id,
guildId: N,
channelId: Z,
messageId: v,
roleId: x,
showGuildProfile: p
  }), A = (0, c.ZP)(n.id, p ? N : void 0), O = l.createRef();
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
      user: n,
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