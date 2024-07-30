i.d(n, {
  Z: function() {
return y;
  }
}), i(47120);
var s = i(735250);
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
  h = i(544989),
  S = i(934861),
  p = i(616140),
  g = i(29530),
  j = i(228168),
  N = i(981631),
  T = i(689938),
  C = i(984904),
  A = i(505451);

function y(e) {
  let {
user: n,
currentUser: i,
guildId: y,
channelId: R,
messageId: O,
roleId: L,
initialSection: U,
initialSubsection: M,
transitionState: b,
onClose: P,
sourceAnalyticsLocations: D = []
  } = e, F = y === N.ME ? void 0 : y, B = (0, d.ZP)(n.id, F), {
analyticsLocations: G
  } = (0, o.ZP)([
...D,
t.Z.SIMPLIFIED_PROFILE_MODAL
  ]), w = (0, g.Z)(n);
  return (0, s.jsx)(o.Gt, {
value: G,
children: (0, s.jsx)(r.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: F,
  channelId: R,
  messageId: O,
  roleId: L,
  showGuildProfile: !0,
  children: (0, s.jsx)(l.ModalRoot, {
    transitionState: b,
    className: A.root,
    hideShadow: !0,
    'aria-label': T.Z.Messages.USER_PROFILE_MODAL,
    children: (0, s.jsxs)(m.Z, {
      user: n,
      displayProfile: B,
      profileType: j.y0.FULL_SIZE,
      children: [
        (0, s.jsx)(h.Z, {
          profileType: j.y0.FULL_SIZE,
          children: (0, s.jsx)(v.Z, {
            user: n,
            guildId: F
          })
        }),
        (0, s.jsxs)('header', {
          children: [
            (0, s.jsx)(c.Z, {
              user: n,
              displayProfile: B,
              profileType: j.y0.FULL_SIZE,
              hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
            }),
            (0, s.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, s.jsx)(I.Z, {
                  user: n,
                  displayProfile: B,
                  guildId: F,
                  channelId: R,
                  profileType: j.y0.FULL_SIZE
                }),
                (0, s.jsxs)('div', {
                  className: C.buttons,
                  children: [
                    (0, s.jsx)(S.c, {
                      userId: n.id,
                      onClose: P,
                      className: C.messageTextButton
                    }),
                    (0, s.jsx)(S.v, {
                      userId: n.id,
                      onClose: P,
                      tooltipContainerClassName: C.messageIconButton
                    }),
                    (0, s.jsx)(Z.Z, {
                      user: n,
                      guildId: F
                    }),
                    (0, s.jsx)(x.Z, {
                      user: n
                    })
                  ]
                }),
                (0, s.jsx)(_.Z, {
                  user: n,
                  profileType: j.y0.FULL_SIZE,
                  hasEntered: b === l.ModalTransitionState.ENTERED,
                  onClose: P
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)('div', {
          className: A.body,
          children: [
            (0, s.jsx)(E.Z, {
              user: n,
              profileType: j.y0.FULL_SIZE,
              nickname: a.ZP.getName(F, R, n),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, s.jsx)(f.Z, {
                userId: n.id
              }),
              tags: (0, s.jsx)(u.Z, {
                displayProfile: B,
                profileType: j.y0.FULL_SIZE,
                onClose: P
              })
            }),
            (0, s.jsx)(m.Z.Overlay, {
              className: A.overlay,
              children: (0, s.jsx)(p.Z, {
                user: n,
                currentUser: i,
                displayProfile: B,
                items: w,
                initialSection: null != U ? U : j.oh.BOT_INFO,
                initialSubsection: M,
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