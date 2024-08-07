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
  E = i(502762),
  m = i(530),
  v = i(645410),
  S = i(437758),
  x = i(357836),
  Z = i(544989),
  p = i(934861),
  h = i(616140),
  T = i(29530),
  g = i(228168),
  N = i(981631),
  j = i(689938),
  C = i(984904),
  A = i(505451);

function R(e) {
  let {
user: s,
currentUser: i,
guildId: R,
channelId: O,
messageId: L,
roleId: M,
sessionId: U,
initialSection: b,
initialSubsection: P,
transitionState: y,
onClose: D,
sourceAnalyticsLocations: F = []
  } = e, B = R === N.ME ? void 0 : R, G = (0, d.ZP)(s.id, B), {
analyticsLocations: w
  } = (0, o.ZP)([
...F,
t.Z.SIMPLIFIED_PROFILE_MODAL
  ]), k = (0, r.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: U,
guildId: B,
channelId: O,
messageId: L,
roleId: M
  }), V = (0, T.Z)(s);
  return (0, n.jsx)(o.Gt, {
value: w,
children: (0, n.jsx)(r.Mt, {
  value: k,
  children: (0, n.jsx)(l.ModalRoot, {
    transitionState: y,
    className: A.root,
    hideShadow: !0,
    'aria-label': j.Z.Messages.USER_PROFILE_MODAL,
    children: (0, n.jsxs)(E.Z, {
      user: s,
      displayProfile: G,
      profileType: g.y0.FULL_SIZE,
      children: [
        (0, n.jsx)(Z.Z, {
          profileType: g.y0.FULL_SIZE,
          children: (0, n.jsx)(S.Z, {
            user: s,
            guildId: B
          })
        }),
        (0, n.jsxs)('header', {
          children: [
            (0, n.jsx)(c.Z, {
              user: s,
              displayProfile: G,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == G ? void 0 : G.profileEffectId) != null
            }),
            (0, n.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, n.jsx)(I.Z, {
                  user: s,
                  displayProfile: G,
                  guildId: B,
                  channelId: O,
                  profileType: g.y0.FULL_SIZE
                }),
                (0, n.jsxs)('div', {
                  className: C.buttons,
                  children: [
                    (0, n.jsx)(p.c, {
                      userId: s.id,
                      onClose: D,
                      className: C.messageTextButton
                    }),
                    (0, n.jsx)(p.v, {
                      userId: s.id,
                      onClose: D,
                      tooltipContainerClassName: C.messageIconButton
                    }),
                    (0, n.jsx)(x.Z, {
                      user: s,
                      guildId: B
                    }),
                    (0, n.jsx)(v.Z, {
                      user: s
                    })
                  ]
                }),
                (0, n.jsx)(_.Z, {
                  user: s,
                  profileType: g.y0.FULL_SIZE,
                  hasEntered: y === l.ModalTransitionState.ENTERED,
                  onClose: D
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: A.body,
          children: [
            (0, n.jsx)(m.Z, {
              user: s,
              profileType: g.y0.FULL_SIZE,
              nickname: a.ZP.getName(B, O, s),
              pronouns: null == G ? void 0 : G.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, n.jsx)(f.Z, {
                userId: s.id
              }),
              tags: (0, n.jsx)(u.Z, {
                displayProfile: G,
                profileType: g.y0.FULL_SIZE,
                onClose: D
              })
            }),
            (0, n.jsx)(E.Z.Overlay, {
              className: A.overlay,
              children: (0, n.jsx)(h.Z, {
                user: s,
                currentUser: i,
                displayProfile: G,
                items: V,
                initialSection: null != b ? b : g.oh.BOT_INFO,
                initialSubsection: P,
                onClose: D
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