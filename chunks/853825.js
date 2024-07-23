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
  p = s(544989),
  T = s(228168),
  g = s(981631),
  N = s(689938),
  C = s(392214),
  j = s(408277),
  A = s(455749);

function O(e) {
  let {
user: n,
guildId: s,
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
  ]), y = s === g.ME ? void 0 : s, D = (0, I.ZP)(n.id, y), B = l.createRef(), F = (0, t.Z)(B);
  return (0, i.jsx)(a.Gt, {
value: b,
children: (0, i.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: y,
  channelId: O,
  messageId: L,
  roleId: R,
  showGuildProfile: !0,
  children: (0, i.jsxs)(o.ModalRoot, {
    transitionState: U,
    className: C.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(v.Z, {
        user: n,
        displayProfile: D,
        profileType: T.y0.FULL_SIZE,
        ref: B,
        children: [
          (0, i.jsx)(p.Z, {
            profileType: T.y0.FULL_SIZE,
            children: (0, i.jsx)(h.Z, {
              user: n
            })
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(_.Z, {
                user: n,
                displayProfile: D,
                profileType: T.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, i.jsx)('div', {
                className: C.headerInner,
                children: (0, i.jsx)(m.Z, {
                  user: n,
                  displayProfile: D,
                  guildId: y,
                  channelId: O,
                  profileType: T.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, i.jsxs)('div', {
            className: C.body,
            children: [
              (0, i.jsx)(x.Z, {
                user: n,
                profileType: T.y0.FULL_SIZE,
                nickname: c.ZP.getName(y, O, n),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, i.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  onClose: M
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
                      selectedItem: T.oh.BOT_INFO,
                      onItemSelect: g.dG4,
                      children: (0, i.jsx)(o.TabBar.Item, {
                        className: A.tabBarItem,
                        id: T.oh.BOT_INFO,
                        'aria-label': N.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          children: N.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, T.oh.BOT_INFO)
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
                          title: N.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, i.jsx)(S.Z, {
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
      (null == D ? void 0 : D.profileEffectId) != null && (0, i.jsx)(d.Z, {
        profileEffectId: null == D ? void 0 : D.profileEffectId,
        isHovering: F
      })
    ]
  })
})
  });
}