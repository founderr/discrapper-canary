i.d(s, {
  Z: function() {
return x;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(481060),
  o = i(100527),
  a = i(906732),
  r = i(785717),
  d = i(318661),
  c = i(502762),
  u = i(475413),
  I = i(228168),
  _ = i(981631),
  f = i(689938),
  E = i(570129),
  m = i(161068);

function x(e) {
  let {
user: s,
guildId: i,
channelId: x,
messageId: v,
roleId: S,
transitionState: Z,
onViewBlockedProfileClick: h,
showGuildProfile: p = !0,
sourceAnalyticsLocations: T = []
  } = e, g = i === _.ME ? void 0 : i, {
analyticsLocations: N
  } = (0, a.ZP)([
...T,
o.Z.BLOCKED_PROFILE_MODAL
  ]), j = (0, r.Q1)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: s.id,
guildId: g,
channelId: x,
messageId: v,
roleId: S,
showGuildProfile: p
  }), C = (0, d.ZP)(s.id, p ? g : void 0), A = l.createRef();
  return (0, n.jsx)(a.Gt, {
value: N,
children: (0, n.jsx)(r.Mt, {
  layout: 'BLOCKED_PROFILE_MODAL',
  userId: s.id,
  guildId: g,
  channelId: x,
  messageId: v,
  roleId: S,
  showGuildProfile: p,
  children: (0, n.jsx)(t.ModalRoot, {
    transitionState: Z,
    className: E.root,
    hideShadow: !0,
    'aria-label': f.Z.Messages.USER_PROFILE_MODAL,
    children: (0, n.jsx)(c.Z, {
      user: s,
      displayProfile: C,
      profileType: I.y0.FULL_SIZE,
      ref: A,
      children: (0, n.jsxs)('div', {
        className: E.container,
        children: [
          (0, n.jsx)('img', {
            alt: '',
            src: m,
            className: E.previewForCollected,
            'aria-hidden': !0
          }),
          (0, n.jsx)(u.tG, {
            className: E.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: f.Z.Messages.VIEW_PROFILE,
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == h || h(), j({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: N
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