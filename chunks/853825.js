n.d(i, {
  Z: function() {
return M;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  o = n(481060),
  t = n(727637),
  r = n(100527),
  a = n(906732),
  d = n(680295),
  c = n(5192),
  u = n(785717),
  I = n(318661),
  _ = n(78675),
  f = n(741308),
  E = n(588822),
  m = n(899007),
  S = n(900927),
  Z = n(678738),
  v = n(502762),
  x = n(530),
  h = n(679332),
  p = n(544989),
  T = n(228168),
  g = n(981631),
  N = n(689938),
  C = n(505451),
  j = n(247321),
  A = n(47460);

function M(e) {
  let {
user: i,
guildId: n,
channelId: M,
messageId: L,
roleId: R,
transitionState: U,
onClose: O,
sourceAnalyticsLocations: P = []
  } = e, {
analyticsLocations: b
  } = (0, a.ZP)([
...P,
r.Z.SIMPLIFIED_PROFILE_MODAL
  ]), y = n === g.ME ? void 0 : n, D = (0, I.ZP)(i.id, y), F = l.createRef(), B = (0, t.Z)(F);
  return (0, s.jsx)(a.Gt, {
value: b,
children: (0, s.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: y,
  channelId: M,
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
        user: i,
        displayProfile: D,
        profileType: T.y0.FULL_SIZE,
        ref: F,
        children: [
          (0, s.jsx)(p.Z, {
            profileType: T.y0.FULL_SIZE,
            children: (0, s.jsx)(h.Z, {
              user: i
            })
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(_.Z, {
                user: i,
                displayProfile: D,
                profileType: T.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, s.jsx)('div', {
                className: C.headerInner,
                children: (0, s.jsx)(m.Z, {
                  user: i,
                  displayProfile: D,
                  guildId: y,
                  channelId: M,
                  profileType: T.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, s.jsxs)('div', {
            className: C.body,
            children: [
              (0, s.jsx)(x.Z, {
                user: i,
                profileType: T.y0.FULL_SIZE,
                nickname: c.ZP.getName(y, M, i),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, s.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  onClose: O
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
                          userId: i.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, s.jsx)(Z.Z, {
                          title: N.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                          children: (0, s.jsx)(S.Z, {
                            userId: i.id,
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
        isHovering: B
      })
    ]
  })
})
  });
}