i.d(n, {
  Z: function() {
return y;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  t = i(481060),
  o = i(727637),
  a = i(100527),
  r = i(906732),
  d = i(680295),
  c = i(5192),
  u = i(785717),
  I = i(318661),
  _ = i(78675),
  f = i(741308),
  m = i(588822),
  E = i(899007),
  x = i(900927),
  v = i(678738),
  Z = i(502762),
  h = i(530),
  S = i(679332),
  p = i(544989),
  g = i(228168),
  j = i(981631),
  N = i(689938),
  T = i(505451),
  C = i(247321),
  A = i(47460);

function y(e) {
  let {
user: n,
guildId: i,
channelId: y,
messageId: R,
roleId: O,
transitionState: L,
onClose: U,
sourceAnalyticsLocations: M = []
  } = e, {
analyticsLocations: b
  } = (0, r.ZP)([
...M,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), P = i === j.ME ? void 0 : i, D = (0, I.ZP)(n.id, P), F = l.createRef(), B = (0, o.Z)(F);
  return (0, s.jsx)(r.Gt, {
value: b,
children: (0, s.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: P,
  channelId: y,
  messageId: R,
  roleId: O,
  showGuildProfile: !0,
  children: (0, s.jsxs)(t.ModalRoot, {
    transitionState: L,
    className: T.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(Z.Z, {
        user: n,
        displayProfile: D,
        profileType: g.y0.FULL_SIZE,
        ref: F,
        children: [
          (0, s.jsx)(p.Z, {
            profileType: g.y0.FULL_SIZE,
            children: (0, s.jsx)(S.Z, {
              user: n
            })
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(_.Z, {
                user: n,
                displayProfile: D,
                profileType: g.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, s.jsx)('div', {
                className: T.headerInner,
                children: (0, s.jsx)(E.Z, {
                  user: n,
                  displayProfile: D,
                  guildId: P,
                  channelId: y,
                  profileType: g.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, s.jsxs)('div', {
            className: T.body,
            children: [
              (0, s.jsx)(h.Z, {
                user: n,
                profileType: g.y0.FULL_SIZE,
                nickname: c.ZP.getName(P, y, n),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, s.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: g.y0.FULL_SIZE,
                  onClose: U
                })
              }),
              (0, s.jsx)(Z.Z.Overlay, {
                className: T.overlay,
                children: (0, s.jsxs)('div', {
                  className: A.container,
                  children: [
                    (0, s.jsx)(t.TabBar, {
                      className: A.tabBar,
                      type: 'top',
                      selectedItem: g.oh.BOT_INFO,
                      onItemSelect: j.dG4,
                      children: (0, s.jsx)(t.TabBar.Item, {
                        className: A.tabBarItem,
                        id: g.oh.BOT_INFO,
                        'aria-label': N.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, s.jsx)(t.Text, {
                          variant: 'text-sm/normal',
                          children: N.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, g.oh.BOT_INFO)
                    }),
                    (0, s.jsxs)(t.ScrollerThin, {
                      fade: !0,
                      className: C.scroller,
                      children: [
                        (0, s.jsx)(m.Z, {
                          userId: n.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, s.jsx)(v.Z, {
                          heading: N.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, s.jsx)(x.Z, {
                            userId: n.id,
                            guildId: P,
                            tooltipDelay: g.vB
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