n.d(s, {
  Z: function() {
return O;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  o = n(481060),
  t = n(727637),
  r = n(100527),
  a = n(906732),
  d = n(680295),
  c = n(5192),
  u = n(785717),
  _ = n(318661),
  I = n(78675),
  E = n(741308),
  f = n(588822),
  m = n(899007),
  S = n(900927),
  Z = n(678738),
  x = n(502762),
  v = n(530),
  h = n(679332),
  T = n(544989),
  p = n(228168),
  g = n(981631),
  N = n(689938),
  C = n(505451),
  j = n(247321),
  A = n(47460);

function O(e) {
  let {
user: s,
guildId: n,
channelId: O,
messageId: R,
roleId: L,
sessionId: U,
transitionState: M,
onClose: P,
sourceAnalyticsLocations: b = []
  } = e, y = n === g.ME ? void 0 : n, D = (0, _.ZP)(s.id, y), {
analyticsLocations: B
  } = (0, a.ZP)([
...b,
r.Z.SIMPLIFIED_PROFILE_MODAL
  ]), F = (0, u.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: U,
guildId: y,
channelId: O,
messageId: R,
roleId: L
  }), G = l.createRef(), w = (0, t.Z)(G);
  return (0, i.jsx)(a.Gt, {
value: B,
children: (0, i.jsx)(u.Mt, {
  value: F,
  children: (0, i.jsxs)(o.ModalRoot, {
    transitionState: M,
    className: C.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(x.Z, {
        user: s,
        displayProfile: D,
        profileType: p.y0.FULL_SIZE,
        ref: G,
        children: [
          (0, i.jsx)(T.Z, {
            profileType: p.y0.FULL_SIZE,
            children: (0, i.jsx)(h.Z, {
              user: s
            })
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(I.Z, {
                user: s,
                displayProfile: D,
                profileType: p.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, i.jsx)('div', {
                className: C.headerInner,
                children: (0, i.jsx)(m.Z, {
                  user: s,
                  displayProfile: D,
                  guildId: y,
                  channelId: O,
                  profileType: p.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, i.jsxs)('div', {
            className: C.body,
            children: [
              (0, i.jsx)(v.Z, {
                user: s,
                profileType: p.y0.FULL_SIZE,
                nickname: c.ZP.getName(y, O, s),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, i.jsx)(E.Z, {
                  displayProfile: D,
                  profileType: p.y0.FULL_SIZE,
                  onClose: P
                })
              }),
              (0, i.jsx)(x.Z.Overlay, {
                className: C.overlay,
                children: (0, i.jsxs)('div', {
                  className: A.container,
                  children: [
                    (0, i.jsx)(o.TabBar, {
                      className: A.tabBar,
                      type: 'top',
                      selectedItem: p.oh.BOT_INFO,
                      onItemSelect: g.dG4,
                      children: (0, i.jsx)(o.TabBar.Item, {
                        className: A.tabBarItem,
                        id: p.oh.BOT_INFO,
                        'aria-label': N.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          children: N.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, p.oh.BOT_INFO)
                    }),
                    (0, i.jsxs)(o.ScrollerThin, {
                      fade: !0,
                      className: j.scroller,
                      children: [
                        (0, i.jsx)(f.Z, {
                          userId: s.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, i.jsx)(Z.Z, {
                          heading: N.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, i.jsx)(S.Z, {
                            userId: s.id,
                            guildId: y,
                            tooltipDelay: p.vB
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      (null == D ? void 0 : D.profileEffectId) != null && (0, i.jsx)(d.Z, {
        profileEffectId: null == D ? void 0 : D.profileEffectId,
        isHovering: w
      })
    ]
  })
})
  });
}