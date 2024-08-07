s.d(n, {
  Z: function() {
return O;
  }
}), s(47120);
var i = s(735250);
s(470079);
var l = s(481060),
  o = s(100527),
  t = s(906732),
  r = s(5192),
  a = s(785717),
  d = s(318661),
  c = s(78675),
  u = s(741308),
  I = s(899007),
  _ = s(438163),
  f = s(681837),
  E = s(502762),
  m = s(530),
  S = s(645410),
  Z = s(437758),
  v = s(357836),
  x = s(544989),
  h = s(934861),
  T = s(616140),
  p = s(29530),
  g = s(228168),
  N = s(981631),
  C = s(689938),
  j = s(984904),
  A = s(505451);

function O(e) {
  let {
user: n,
currentUser: s,
guildId: O,
channelId: R,
messageId: L,
roleId: U,
sessionId: M,
initialSection: P,
initialSubsection: b,
transitionState: y,
onClose: D,
sourceAnalyticsLocations: F = []
  } = e, B = O === N.ME ? void 0 : O, G = (0, d.ZP)(n.id, B), {
analyticsLocations: w
  } = (0, t.ZP)([
...F,
o.Z.SIMPLIFIED_PROFILE_MODAL
  ]), V = (0, a.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: n.id,
sourceSessionId: M,
guildId: B,
channelId: R,
messageId: L,
roleId: U
  }), k = (0, p.Z)(n);
  return (0, i.jsx)(t.Gt, {
value: w,
children: (0, i.jsx)(a.Mt, {
  value: V,
  children: (0, i.jsx)(l.ModalRoot, {
    transitionState: y,
    className: A.root,
    hideShadow: !0,
    'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsxs)(E.Z, {
      user: n,
      displayProfile: G,
      profileType: g.y0.FULL_SIZE,
      children: [
        (0, i.jsx)(x.Z, {
          profileType: g.y0.FULL_SIZE,
          children: (0, i.jsx)(Z.Z, {
            user: n,
            guildId: B
          })
        }),
        (0, i.jsxs)('header', {
          children: [
            (0, i.jsx)(c.Z, {
              user: n,
              displayProfile: G,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == G ? void 0 : G.profileEffectId) != null
            }),
            (0, i.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, i.jsx)(I.Z, {
                  user: n,
                  displayProfile: G,
                  guildId: B,
                  channelId: R,
                  profileType: g.y0.FULL_SIZE
                }),
                (0, i.jsxs)('div', {
                  className: j.buttons,
                  children: [
                    (0, i.jsx)(h.c, {
                      userId: n.id,
                      onClose: D,
                      className: j.messageTextButton
                    }),
                    (0, i.jsx)(h.v, {
                      userId: n.id,
                      onClose: D,
                      tooltipContainerClassName: j.messageIconButton
                    }),
                    (0, i.jsx)(v.Z, {
                      user: n,
                      guildId: B
                    }),
                    (0, i.jsx)(S.Z, {
                      user: n
                    })
                  ]
                }),
                (0, i.jsx)(_.Z, {
                  user: n,
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
              user: n,
              profileType: g.y0.FULL_SIZE,
              nickname: r.ZP.getName(B, R, n),
              pronouns: null == G ? void 0 : G.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, i.jsx)(f.Z, {
                userId: n.id
              }),
              tags: (0, i.jsx)(u.Z, {
                displayProfile: G,
                profileType: g.y0.FULL_SIZE,
                onClose: D
              })
            }),
            (0, i.jsx)(E.Z.Overlay, {
              className: A.overlay,
              children: (0, i.jsx)(T.Z, {
                user: n,
                currentUser: s,
                displayProfile: G,
                items: k,
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