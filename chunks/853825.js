i.d(n, {
  Z: function() {
return O;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  o = i(481060),
  t = i(727637),
  r = i(100527),
  a = i(906732),
  d = i(680295),
  c = i(5192),
  u = i(785717),
  I = i(318661),
  _ = i(78675),
  f = i(741308),
  E = i(588822),
  m = i(899007),
  S = i(900927),
  Z = i(678738),
  v = i(502762),
  x = i(530),
  h = i(679332),
  p = i(544989),
  T = i(228168),
  g = i(981631),
  N = i(689938),
  C = i(505451),
  j = i(247321),
  A = i(47460);

function O(e) {
  let {
user: n,
guildId: i,
channelId: O,
messageId: L,
roleId: R,
transitionState: U,
onClose: M,
sourceAnalyticsLocations: P = []
  } = e, {
analyticsLocations: b
  } = (0, a.ZP)([
...P,
r.Z.SIMPLIFIED_PROFILE_MODAL
  ]), y = i === g.ME ? void 0 : i, D = (0, I.ZP)(n.id, y), B = l.createRef(), F = (0, t.Z)(B);
  return (0, s.jsx)(a.Gt, {
value: b,
children: (0, s.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: y,
  channelId: O,
  messageId: L,
  roleId: R,
  showGuildProfile: !0,
  children: (0, s.jsxs)(o.ModalRoot, {
    transitionState: U,
    className: C.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(v.Z, {
        user: n,
        displayProfile: D,
        profileType: T.y0.FULL_SIZE,
        ref: B,
        children: [
          (0, s.jsx)(p.Z, {
            profileType: T.y0.FULL_SIZE,
            children: (0, s.jsx)(h.Z, {
              user: n
            })
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(_.Z, {
                user: n,
                displayProfile: D,
                profileType: T.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, s.jsx)('div', {
                className: C.headerInner,
                children: (0, s.jsx)(m.Z, {
                  user: n,
                  displayProfile: D,
                  guildId: y,
                  channelId: O,
                  profileType: T.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, s.jsxs)('div', {
            className: C.body,
            children: [
              (0, s.jsx)(x.Z, {
                user: n,
                profileType: T.y0.FULL_SIZE,
                nickname: c.ZP.getName(y, O, n),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, s.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  onClose: M
                })
              }),
              (0, s.jsx)(v.Z.Overlay, {
                className: C.overlay,
                children: (0, s.jsxs)('div', {
                  className: A.container,
                  children: [
                    (0, s.jsx)(o.TabBar, {
                      className: A.tabBar,
                      type: 'top',
                      selectedItem: T.oh.BOT_INFO,
                      onItemSelect: g.dG4,
                      children: (0, s.jsx)(o.TabBar.Item, {
                        className: A.tabBarItem,
                        id: T.oh.BOT_INFO,
                        'aria-label': N.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, s.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          children: N.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, T.oh.BOT_INFO)
                    }),
                    (0, s.jsxs)(o.ScrollerThin, {
                      fade: !0,
                      className: j.scroller,
                      children: [
                        (0, s.jsx)(E.Z, {
                          userId: n.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, s.jsx)(Z.Z, {
                          title: N.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, s.jsx)(S.Z, {
                            userId: n.id,
                            guildId: y,
                            tooltipDelay: T.vB
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
      (null == D ? void 0 : D.profileEffectId) != null && (0, s.jsx)(d.Z, {
        profileEffectId: null == D ? void 0 : D.profileEffectId,
        isHovering: F
      })
    ]
  })
})
  });
}