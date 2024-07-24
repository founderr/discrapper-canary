i.d(s, {
  Z: function() {
return L;
  }
}), i(47120);
var n = i(735250);
i(470079);
var l = i(481060),
  t = i(100527),
  o = i(906732),
  a = i(5192),
  r = i(785717),
  d = i(318661),
  c = i(78675),
  u = i(741308),
  I = i(899007),
  _ = i(438163),
  f = i(681837),
  m = i(502762),
  E = i(530),
  x = i(645410),
  v = i(437758),
  Z = i(357836),
  S = i(544989),
  h = i(934861),
  p = i(616140),
  j = i(29530),
  T = i(228168),
  g = i(981631),
  N = i(689938),
  C = i(612309),
  A = i(392214);

function L(e) {
  let {
user: s,
currentUser: i,
guildId: L,
channelId: O,
messageId: R,
roleId: U,
initialSection: M,
initialSubsection: y,
transitionState: P,
onClose: b,
sourceAnalyticsLocations: D = []
  } = e, F = L === g.ME ? void 0 : L, B = (0, d.ZP)(s.id, F), {
analyticsLocations: G
  } = (0, o.ZP)([
...D,
t.Z.SIMPLIFIED_PROFILE_MODAL
  ]), w = (0, j.Z)(s);
  return (0, n.jsx)(o.Gt, {
value: G,
children: (0, n.jsx)(r.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: F,
  channelId: O,
  messageId: R,
  roleId: U,
  showGuildProfile: !0,
  children: (0, n.jsx)(l.ModalRoot, {
    transitionState: P,
    className: A.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: (0, n.jsxs)(m.Z, {
      user: s,
      displayProfile: B,
      profileType: T.y0.FULL_SIZE,
      children: [
        (0, n.jsx)(S.Z, {
          profileType: T.y0.FULL_SIZE,
          children: (0, n.jsx)(v.Z, {
            user: s,
            guildId: F
          })
        }),
        (0, n.jsxs)('header', {
          children: [
            (0, n.jsx)(c.Z, {
              user: s,
              displayProfile: B,
              profileType: T.y0.FULL_SIZE,
              hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
            }),
            (0, n.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, n.jsx)(I.Z, {
                  user: s,
                  displayProfile: B,
                  guildId: F,
                  channelId: O,
                  profileType: T.y0.FULL_SIZE
                }),
                (0, n.jsxs)('div', {
                  className: C.buttons,
                  children: [
                    (0, n.jsx)(h.c, {
                      userId: s.id,
                      onClose: b,
                      className: C.messageTextButton
                    }),
                    (0, n.jsx)(h.v, {
                      userId: s.id,
                      onClose: b,
                      tooltipContainerClassName: C.messageIconButton
                    }),
                    (0, n.jsx)(Z.Z, {
                      user: s,
                      guildId: F
                    }),
                    (0, n.jsx)(x.Z, {
                      user: s
                    })
                  ]
                }),
                (0, n.jsx)(_.Z, {
                  user: s,
                  profileType: T.y0.FULL_SIZE,
                  hasEntered: P === l.ModalTransitionState.ENTERED,
                  onClose: b
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: A.body,
          children: [
            (0, n.jsx)(E.Z, {
              user: s,
              profileType: T.y0.FULL_SIZE,
              nickname: a.ZP.getName(F, O, s),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, n.jsx)(f.Z, {
                userId: s.id
              }),
              tags: (0, n.jsx)(u.Z, {
                displayProfile: B,
                profileType: T.y0.FULL_SIZE,
                onClose: b
              })
            }),
            (0, n.jsx)(m.Z.Overlay, {
              className: A.overlay,
              children: (0, n.jsx)(p.Z, {
                user: s,
                currentUser: i,
                displayProfile: B,
                items: w,
                initialSection: null != M ? M : T.oh.BOT_INFO,
                initialSubsection: y,
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