n.d(i, {
  Z: function() {
return R;
  }
}), n(47120);
var s = n(735250);
n(470079);
var l = n(481060),
  t = n(100527),
  o = n(906732),
  a = n(5192),
  r = n(785717),
  d = n(318661),
  c = n(78675),
  u = n(741308),
  I = n(899007),
  _ = n(438163),
  f = n(681837),
  m = n(502762),
  E = n(530),
  x = n(645410),
  v = n(437758),
  h = n(357836),
  S = n(544989),
  Z = n(934861),
  p = n(616140),
  g = n(29530),
  j = n(228168),
  T = n(981631),
  N = n(689938),
  C = n(984904),
  A = n(505451);

function R(e) {
  let {
user: i,
currentUser: n,
guildId: R,
channelId: L,
messageId: y,
roleId: O,
initialSection: U,
initialSubsection: P,
transitionState: M,
onClose: b,
sourceAnalyticsLocations: D = []
  } = e, F = R === T.ME ? void 0 : R, B = (0, d.ZP)(i.id, F), {
analyticsLocations: G
  } = (0, o.ZP)([
...D,
t.Z.SIMPLIFIED_PROFILE_MODAL
  ]), w = (0, g.Z)(i);
  return (0, s.jsx)(o.Gt, {
value: G,
children: (0, s.jsx)(r.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: F,
  channelId: L,
  messageId: y,
  roleId: O,
  showGuildProfile: !0,
  children: (0, s.jsx)(l.ModalRoot, {
    transitionState: M,
    className: A.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: (0, s.jsxs)(m.Z, {
      user: i,
      displayProfile: B,
      profileType: j.y0.FULL_SIZE,
      children: [
        (0, s.jsx)(S.Z, {
          profileType: j.y0.FULL_SIZE,
          children: (0, s.jsx)(v.Z, {
            user: i,
            guildId: F
          })
        }),
        (0, s.jsxs)('header', {
          children: [
            (0, s.jsx)(c.Z, {
              user: i,
              displayProfile: B,
              profileType: j.y0.FULL_SIZE,
              hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
            }),
            (0, s.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, s.jsx)(I.Z, {
                  user: i,
                  displayProfile: B,
                  guildId: F,
                  channelId: L,
                  profileType: j.y0.FULL_SIZE
                }),
                (0, s.jsxs)('div', {
                  className: C.buttons,
                  children: [
                    (0, s.jsx)(Z.c, {
                      userId: i.id,
                      onClose: b,
                      className: C.messageTextButton
                    }),
                    (0, s.jsx)(Z.v, {
                      userId: i.id,
                      onClose: b,
                      tooltipContainerClassName: C.messageIconButton
                    }),
                    (0, s.jsx)(h.Z, {
                      user: i,
                      guildId: F
                    }),
                    (0, s.jsx)(x.Z, {
                      user: i
                    })
                  ]
                }),
                (0, s.jsx)(_.Z, {
                  user: i,
                  profileType: j.y0.FULL_SIZE,
                  hasEntered: M === l.ModalTransitionState.ENTERED,
                  onClose: b
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)('div', {
          className: A.body,
          children: [
            (0, s.jsx)(E.Z, {
              user: i,
              profileType: j.y0.FULL_SIZE,
              nickname: a.ZP.getName(F, L, i),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, s.jsx)(f.Z, {
                userId: i.id
              }),
              tags: (0, s.jsx)(u.Z, {
                displayProfile: B,
                profileType: j.y0.FULL_SIZE,
                onClose: b
              })
            }),
            (0, s.jsx)(m.Z.Overlay, {
              className: A.overlay,
              children: (0, s.jsx)(p.Z, {
                user: i,
                currentUser: n,
                displayProfile: B,
                items: w,
                initialSection: null != U ? U : j.oh.BOT_INFO,
                initialSubsection: P,
                onClose: b
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