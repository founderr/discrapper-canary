s.d(n, {
  Z: function() {
return O;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(481060),
  t = s(727637),
  r = s(100527),
  a = s(906732),
  d = s(680295),
  c = s(5192),
  u = s(785717),
  I = s(318661),
  _ = s(78675),
  f = s(741308),
  E = s(588822),
  m = s(899007),
  S = s(900927),
  Z = s(678738),
  v = s(502762),
  x = s(530),
  h = s(679332),
  T = s(544989),
  p = s(228168),
  g = s(981631),
  N = s(689938),
  C = s(505451),
  j = s(247321),
  A = s(47460);

function O(e) {
  let {
user: n,
guildId: s,
channelId: O,
messageId: R,
roleId: L,
sessionId: U,
transitionState: M,
onClose: P,
sourceAnalyticsLocations: b = []
  } = e, y = s === g.ME ? void 0 : s, D = (0, I.ZP)(n.id, y), {
analyticsLocations: F
  } = (0, a.ZP)([
...b,
r.Z.SIMPLIFIED_PROFILE_MODAL
  ]), B = (0, u.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: n.id,
sourceSessionId: U,
guildId: y,
channelId: O,
messageId: R,
roleId: L
  }), G = l.createRef(), w = (0, t.Z)(G);
  return (0, i.jsx)(a.Gt, {
value: F,
children: (0, i.jsx)(u.Mt, {
  value: B,
  children: (0, i.jsxs)(o.ModalRoot, {
    transitionState: M,
    className: C.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(v.Z, {
        user: n,
        displayProfile: D,
        profileType: p.y0.FULL_SIZE,
        ref: G,
        children: [
          (0, i.jsx)(T.Z, {
            profileType: p.y0.FULL_SIZE,
            children: (0, i.jsx)(h.Z, {
              user: n
            })
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(_.Z, {
                user: n,
                displayProfile: D,
                profileType: p.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, i.jsx)('div', {
                className: C.headerInner,
                children: (0, i.jsx)(m.Z, {
                  user: n,
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
              (0, i.jsx)(x.Z, {
                user: n,
                profileType: p.y0.FULL_SIZE,
                nickname: c.ZP.getName(y, O, n),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, i.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: p.y0.FULL_SIZE,
                  onClose: P
                })
              }),
              (0, i.jsx)(v.Z.Overlay, {
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
                        (0, i.jsx)(E.Z, {
                          userId: n.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, i.jsx)(Z.Z, {
                          heading: N.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, i.jsx)(S.Z, {
                            userId: n.id,
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