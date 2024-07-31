i.d(s, {
  Z: function() {
return M;
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
  f = i(438163),
  _ = i(681837),
  m = i(502762),
  E = i(530),
  v = i(645410),
  x = i(437758),
  S = i(357836),
  Z = i(544989),
  h = i(934861),
  p = i(616140),
  g = i(29530),
  T = i(228168),
  N = i(981631),
  j = i(689938),
  C = i(984904),
  A = i(505451);

function M(e) {
  let {
user: s,
currentUser: i,
guildId: M,
channelId: R,
messageId: U,
roleId: L,
initialSection: O,
initialSubsection: y,
transitionState: b,
onClose: P,
sourceAnalyticsLocations: D = []
  } = e, F = M === N.ME ? void 0 : M, B = (0, d.ZP)(s.id, F), {
analyticsLocations: G
  } = (0, o.ZP)([
...D,
t.Z.SIMPLIFIED_PROFILE_MODAL
  ]), w = (0, g.Z)(s);
  return (0, n.jsx)(o.Gt, {
value: G,
children: (0, n.jsx)(r.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: F,
  channelId: R,
  messageId: U,
  roleId: L,
  showGuildProfile: !0,
  children: (0, n.jsx)(l.ModalRoot, {
    transitionState: b,
    className: A.root,
    hideShadow: !0,
    'aria-label': j.Z.Messages.USER_PROFILE_MODAL,
    children: (0, n.jsxs)(m.Z, {
      user: s,
      displayProfile: B,
      profileType: T.y0.FULL_SIZE,
      children: [
        (0, n.jsx)(Z.Z, {
          profileType: T.y0.FULL_SIZE,
          children: (0, n.jsx)(x.Z, {
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
                  channelId: R,
                  profileType: T.y0.FULL_SIZE
                }),
                (0, n.jsxs)('div', {
                  className: C.buttons,
                  children: [
                    (0, n.jsx)(h.c, {
                      userId: s.id,
                      onClose: P,
                      className: C.messageTextButton
                    }),
                    (0, n.jsx)(h.v, {
                      userId: s.id,
                      onClose: P,
                      tooltipContainerClassName: C.messageIconButton
                    }),
                    (0, n.jsx)(S.Z, {
                      user: s,
                      guildId: F
                    }),
                    (0, n.jsx)(v.Z, {
                      user: s
                    })
                  ]
                }),
                (0, n.jsx)(f.Z, {
                  user: s,
                  profileType: T.y0.FULL_SIZE,
                  hasEntered: b === l.ModalTransitionState.ENTERED,
                  onClose: P
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
              nickname: a.ZP.getName(F, R, s),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, n.jsx)(_.Z, {
                userId: s.id
              }),
              tags: (0, n.jsx)(u.Z, {
                displayProfile: B,
                profileType: T.y0.FULL_SIZE,
                onClose: P
              })
            }),
            (0, n.jsx)(m.Z.Overlay, {
              className: A.overlay,
              children: (0, n.jsx)(p.Z, {
                user: s,
                currentUser: i,
                displayProfile: B,
                items: w,
                initialSection: null != O ? O : T.oh.BOT_INFO,
                initialSubsection: y,
                onClose: P
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