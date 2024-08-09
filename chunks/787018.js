n.d(s, {
  Z: function() {
return x;
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
  u = n(299261),
  _ = n(502762),
  I = n(475413),
  E = n(228168),
  f = n(981631),
  m = n(689938),
  S = n(570129),
  Z = n(161068);

function x(e) {
  let {
user: s,
guildId: n,
channelId: x,
messageId: v,
roleId: h,
transitionState: T,
onViewBlockedProfileClick: p,
showGuildProfile: g = !0,
sourceAnalyticsLocations: N = []
  } = e, C = n === f.ME ? void 0 : n, {
analyticsLocations: j
  } = (0, r.ZP)([
...N,
t.Z.BLOCKED_PROFILE_MODAL
  ]), A = (0, a.ZB)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: s.id,
guildId: C,
channelId: x,
messageId: v,
roleId: h,
showGuildProfile: g
  }), O = (0, c.ZP)(s.id, g ? C : void 0), R = l.createRef();
  return (0, i.jsx)(r.Gt, {
value: j,
children: (0, i.jsx)(a.Mt, {
  value: A,
  children: (0, i.jsx)(o.ModalRoot, {
    transitionState: T,
    className: S.root,
    hideShadow: !0,
    'aria-label': m.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsx)(_.Z, {
      user: s,
      displayProfile: O,
      profileType: E.y0.FULL_SIZE,
      ref: R,
      children: (0, i.jsxs)('div', {
        className: S.container,
        children: [
          (0, i.jsx)('img', {
            alt: '',
            src: Z,
            className: S.previewForCollected,
            'aria-hidden': !0
          }),
          (0, i.jsxs)('div', {
            className: S.body,
            children: [
              (0, i.jsx)(u.Z, {
                user: s,
                guildId: C
              }),
              (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/bold',
                className: S.header,
                children: m.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
              }),
              (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                children: m.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({
                  username: s.username
                })
              }),
              (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                children: m.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
              }),
              (0, i.jsx)(I.tG, {
                className: S.centeredButton,
                action: 'VIEW_BLOCKED_PROFILE',
                text: m.Z.Messages.VIEW_PROFILE,
                autoFocus: !0,
                fullWidth: !1,
                onClick: () => {
                  null == p || p(), (0, d.pQ)({
                    action: 'VIEW_BLOCKED_PROFILE',
                    analyticsLocations: j,
                    ...A
                  });
                }
              })
            ]
          })
        ]
      })
    })
  })
})
  });
}