i.d(s, {
  Z: function() {
return R;
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
  S = i(645410),
  x = i(437758),
  v = i(357836),
  Z = i(544989),
  h = i(934861),
  p = i(616140),
  T = i(29530),
  g = i(228168),
  N = i(981631),
  j = i(689938),
  A = i(984904),
  C = i(505451);

function R(e) {
  let {
user: s,
currentUser: i,
guildId: R,
channelId: O,
messageId: M,
roleId: U,
initialSection: L,
initialSubsection: b,
transitionState: P,
onClose: y,
sourceAnalyticsLocations: D = []
  } = e, F = R === N.ME ? void 0 : R, B = (0, d.ZP)(s.id, F), {
analyticsLocations: G
  } = (0, o.ZP)([
...D,
t.Z.SIMPLIFIED_PROFILE_MODAL
  ]), w = (0, T.Z)(s);
  return (0, n.jsx)(o.Gt, {
value: G,
children: (0, n.jsx)(r.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: F,
  channelId: O,
  messageId: M,
  roleId: U,
  showGuildProfile: !0,
  children: (0, n.jsx)(l.ModalRoot, {
    transitionState: P,
    className: C.root,
    hideShadow: !0,
    'aria-label': j.Z.Messages.USER_PROFILE_MODAL,
    children: (0, n.jsxs)(m.Z, {
      user: s,
      displayProfile: B,
      profileType: g.y0.FULL_SIZE,
      children: [
        (0, n.jsx)(Z.Z, {
          profileType: g.y0.FULL_SIZE,
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
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
            }),
            (0, n.jsxs)('div', {
              className: C.headerInner,
              children: [
                (0, n.jsx)(I.Z, {
                  user: s,
                  displayProfile: B,
                  guildId: F,
                  channelId: O,
                  profileType: g.y0.FULL_SIZE
                }),
                (0, n.jsxs)('div', {
                  className: A.buttons,
                  children: [
                    (0, n.jsx)(h.c, {
                      userId: s.id,
                      onClose: y,
                      className: A.messageTextButton
                    }),
                    (0, n.jsx)(h.v, {
                      userId: s.id,
                      onClose: y,
                      tooltipContainerClassName: A.messageIconButton
                    }),
                    (0, n.jsx)(v.Z, {
                      user: s,
                      guildId: F
                    }),
                    (0, n.jsx)(S.Z, {
                      user: s
                    })
                  ]
                }),
                (0, n.jsx)(_.Z, {
                  user: s,
                  profileType: g.y0.FULL_SIZE,
                  hasEntered: P === l.ModalTransitionState.ENTERED,
                  onClose: y
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: C.body,
          children: [
            (0, n.jsx)(E.Z, {
              user: s,
              profileType: g.y0.FULL_SIZE,
              nickname: a.ZP.getName(F, O, s),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, n.jsx)(f.Z, {
                userId: s.id
              }),
              tags: (0, n.jsx)(u.Z, {
                displayProfile: B,
                profileType: g.y0.FULL_SIZE,
                onClose: y
              })
            }),
            (0, n.jsx)(m.Z.Overlay, {
              className: C.overlay,
              children: (0, n.jsx)(p.Z, {
                user: s,
                currentUser: i,
                displayProfile: B,
                items: w,
                initialSection: null != L ? L : g.oh.BOT_INFO,
                initialSubsection: b,
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