n.d(s, {
  Z: function() {
return O;
  }
}), n(47120);
var i = n(735250);
n(470079);
var l = n(481060),
  o = n(100527),
  t = n(906732),
  r = n(5192),
  a = n(785717),
  d = n(318661),
  c = n(78675),
  u = n(741308),
  _ = n(899007),
  I = n(438163),
  E = n(681837),
  f = n(502762),
  m = n(530),
  S = n(645410),
  Z = n(437758),
  x = n(357836),
  v = n(544989),
  h = n(934861),
  T = n(616140),
  p = n(29530),
  g = n(228168),
  N = n(981631),
  C = n(689938),
  j = n(984904),
  A = n(505451);

function O(e) {
  let {
user: s,
currentUser: n,
guildId: O,
channelId: R,
messageId: L,
roleId: U,
sessionId: M,
initialSection: P,
initialSubsection: b,
transitionState: y,
onClose: D,
sourceAnalyticsLocations: B = []
  } = e, F = O === N.ME ? void 0 : O, G = (0, d.ZP)(s.id, F), {
analyticsLocations: w
  } = (0, t.ZP)([
...B,
o.Z.SIMPLIFIED_PROFILE_MODAL
  ]), k = (0, a.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: M,
guildId: F,
channelId: R,
messageId: L,
roleId: U
  }), V = (0, p.Z)(s);
  return (0, i.jsx)(t.Gt, {
value: w,
children: (0, i.jsx)(a.Mt, {
  value: k,
  children: (0, i.jsx)(l.ModalRoot, {
    transitionState: y,
    className: A.root,
    hideShadow: !0,
    'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsxs)(f.Z, {
      user: s,
      displayProfile: G,
      profileType: g.y0.FULL_SIZE,
      children: [
        (0, i.jsx)(v.Z, {
          profileType: g.y0.FULL_SIZE,
          children: (0, i.jsx)(Z.Z, {
            user: s,
            guildId: F
          })
        }),
        (0, i.jsxs)('header', {
          children: [
            (0, i.jsx)(c.Z, {
              user: s,
              displayProfile: G,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == G ? void 0 : G.profileEffectId) != null
            }),
            (0, i.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, i.jsx)(_.Z, {
                  user: s,
                  displayProfile: G,
                  guildId: F,
                  channelId: R,
                  profileType: g.y0.FULL_SIZE
                }),
                (0, i.jsxs)('div', {
                  className: j.buttons,
                  children: [
                    (0, i.jsx)(h.c, {
                      userId: s.id,
                      onClose: D,
                      className: j.messageTextButton
                    }),
                    (0, i.jsx)(h.v, {
                      userId: s.id,
                      onClose: D,
                      tooltipContainerClassName: j.messageIconButton
                    }),
                    (0, i.jsx)(x.Z, {
                      user: s,
                      guildId: F
                    }),
                    (0, i.jsx)(S.Z, {
                      user: s
                    })
                  ]
                }),
                (0, i.jsx)(I.Z, {
                  user: s,
                  profileType: g.y0.FULL_SIZE,
                  hasEntered: y === l.ModalTransitionState.ENTERED,
                  onClose: D
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)('div', {
          className: A.body,
          children: [
            (0, i.jsx)(m.Z, {
              user: s,
              profileType: g.y0.FULL_SIZE,
              nickname: r.ZP.getName(F, R, s),
              pronouns: null == G ? void 0 : G.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, i.jsx)(E.Z, {
                userId: s.id
              }),
              tags: (0, i.jsx)(u.Z, {
                displayProfile: G,
                profileType: g.y0.FULL_SIZE,
                onClose: D
              })
            }),
            (0, i.jsx)(f.Z.Overlay, {
              className: A.overlay,
              children: (0, i.jsx)(T.Z, {
                user: s,
                currentUser: n,
                displayProfile: G,
                items: V,
                initialSection: null != P ? P : g.oh.BOT_INFO,
                initialSubsection: b,
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