n.d(i, {
  Z: function() {
return U;
  }
}), n(47120);
var s = n(735250);
n(470079);
var l = n(481060),
  o = n(100527),
  t = n(906732),
  r = n(5192),
  a = n(785717),
  d = n(318661),
  c = n(78675),
  u = n(741308),
  I = n(899007),
  f = n(438163),
  _ = n(681837),
  E = n(502762),
  m = n(530),
  S = n(645410),
  Z = n(437758),
  x = n(357836),
  v = n(544989),
  h = n(934861),
  p = n(616140),
  T = n(29530),
  g = n(228168),
  N = n(981631),
  C = n(689938),
  j = n(984904),
  A = n(505451);

function U(e) {
  let {
user: i,
currentUser: n,
guildId: U,
channelId: R,
messageId: O,
roleId: M,
initialSection: L,
initialSubsection: P,
transitionState: b,
onClose: y,
sourceAnalyticsLocations: D = []
  } = e, F = U === N.ME ? void 0 : U, B = (0, d.ZP)(i.id, F), {
analyticsLocations: G
  } = (0, t.ZP)([
...D,
o.Z.SIMPLIFIED_PROFILE_MODAL
  ]), w = (0, T.Z)(i);
  return (0, s.jsx)(t.Gt, {
value: G,
children: (0, s.jsx)(a.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: F,
  channelId: R,
  messageId: O,
  roleId: M,
  showGuildProfile: !0,
  children: (0, s.jsx)(l.ModalRoot, {
    transitionState: b,
    className: A.root,
    hideShadow: !0,
    'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
    children: (0, s.jsxs)(E.Z, {
      user: i,
      displayProfile: B,
      profileType: g.y0.FULL_SIZE,
      children: [
        (0, s.jsx)(v.Z, {
          profileType: g.y0.FULL_SIZE,
          children: (0, s.jsx)(Z.Z, {
            user: i,
            guildId: F
          })
        }),
        (0, s.jsxs)('header', {
          children: [
            (0, s.jsx)(c.Z, {
              user: i,
              displayProfile: B,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
            }),
            (0, s.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, s.jsx)(I.Z, {
                  user: i,
                  displayProfile: B,
                  guildId: F,
                  channelId: R,
                  profileType: g.y0.FULL_SIZE
                }),
                (0, s.jsxs)('div', {
                  className: j.buttons,
                  children: [
                    (0, s.jsx)(h.v, {
                      userId: i.id,
                      onClose: y
                    }),
                    (0, s.jsx)(x.Z, {
                      user: i,
                      guildId: F
                    }),
                    (0, s.jsx)(S.Z, {
                      user: i
                    })
                  ]
                }),
                (0, s.jsx)(f.Z, {
                  user: i,
                  profileType: g.y0.FULL_SIZE,
                  hasEntered: b === l.ModalTransitionState.ENTERED,
                  onClose: y
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)('div', {
          className: A.body,
          children: [
            (0, s.jsx)(m.Z, {
              user: i,
              profileType: g.y0.FULL_SIZE,
              nickname: r.ZP.getName(F, R, i),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, s.jsx)(_.Z, {
                userId: i.id
              }),
              tags: (0, s.jsx)(u.Z, {
                displayProfile: B,
                profileType: g.y0.FULL_SIZE,
                onClose: y
              })
            }),
            (0, s.jsx)(E.Z.Overlay, {
              className: A.overlay,
              children: (0, s.jsx)(p.Z, {
                user: i,
                currentUser: n,
                displayProfile: B,
                items: w,
                initialSection: null != L ? L : g.oh.BOT_INFO,
                initialSubsection: P,
                onClose: y
              })
            })
          ]
        })
      ]
    })
  })
})
  });
}