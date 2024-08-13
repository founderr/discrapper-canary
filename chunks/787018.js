n.d(s, {
  Z: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(481060),
  o = n(100527),
  r = n(906732),
  a = n(138201),
  d = n(785717),
  c = n(221292),
  u = n(318661),
  _ = n(299261),
  I = n(502762),
  f = n(475413),
  E = n(228168),
  m = n(981631),
  x = n(689938),
  S = n(493248),
  v = n(161068);

function Z(e) {
  let {
user: s,
guildId: n,
channelId: Z,
messageId: p,
roleId: h,
transitionState: T,
onViewBlockedProfileClick: g,
showGuildProfile: N = !0,
sourceAnalyticsLocations: j = []
  } = e, C = n === m.ME ? void 0 : n, {
analyticsLocations: A
  } = (0, r.ZP)([
...j,
o.Z.BLOCKED_PROFILE_MODAL
  ]), R = (0, d.ZB)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: s.id,
guildId: C,
channelId: Z,
messageId: p,
roleId: h,
showGuildProfile: N
  }), O = [{
  icon: t.BellSlashIcon,
  description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
},
{
  icon: t.DenyIcon,
  description: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
}
  ], L = (0, u.ZP)(s.id, N ? C : void 0), M = l.createRef();
  return (0, i.jsx)(r.Gt, {
value: A,
children: (0, i.jsx)(d.Mt, {
  value: R,
  children: (0, i.jsx)(t.ModalRoot, {
    transitionState: T,
    className: S.root,
    hideShadow: !0,
    'aria-label': x.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsx)(I.Z, {
      user: s,
      displayProfile: L,
      profileType: E.y0.FULL_SIZE,
      ref: M,
      children: (0, i.jsxs)('div', {
        className: S.container,
        children: [
          (0, i.jsx)('img', {
            alt: '',
            src: v,
            className: S.previewForCollected,
            'aria-hidden': !0
          }),
          (0, i.jsxs)('div', {
            className: S.body,
            children: [
              (0, i.jsx)(_.Z, {
                user: s,
                guildId: C
              }),
              (0, i.jsx)(t.Heading, {
                variant: 'heading-xl/bold',
                className: S.header,
                children: x.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
              }),
              (0, i.jsx)(t.Text, {
                variant: 'text-md/medium',
                children: x.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({
                  username: s.username
                })
              }),
              (0, i.jsx)(t.Text, {
                variant: 'text-md/medium',
                children: x.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
              }),
              (0, i.jsx)('div', {
                className: S.safetyTable,
                children: O.map((e, s) => {
                  let {
                    icon: n,
                    description: l
                  } = e;
                  return (0, i.jsx)(a.Z, {
                    icon: n,
                    description: l
                  }, s);
                })
              }),
              (0, i.jsx)(f.tG, {
                className: S.centeredButton,
                action: 'VIEW_BLOCKED_PROFILE',
                text: x.Z.Messages.VIEW_PROFILE,
                autoFocus: !0,
                fullWidth: !1,
                onClick: () => {
                  null == g || g(), (0, c.pQ)({
                    action: 'VIEW_BLOCKED_PROFILE',
                    analyticsLocations: A,
                    ...R
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