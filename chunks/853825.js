i.d(s, {
  Z: function() {
return L;
  }
}), i(47120);
var n = i(735250),
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
  S = i(530),
  h = i(679332),
  p = i(544989),
  j = i(228168),
  T = i(981631),
  g = i(689938),
  N = i(392214),
  C = i(408277),
  A = i(455749);

function L(e) {
  let {
user: s,
guildId: i,
channelId: L,
messageId: O,
roleId: R,
transitionState: U,
onClose: M,
sourceAnalyticsLocations: y = []
  } = e, {
analyticsLocations: P
  } = (0, r.ZP)([
...y,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), b = i === T.ME ? void 0 : i, D = (0, I.ZP)(s.id, b), F = l.createRef(), B = (0, o.Z)(F);
  return (0, n.jsx)(r.Gt, {
value: P,
children: (0, n.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: b,
  channelId: L,
  messageId: O,
  roleId: R,
  showGuildProfile: !0,
  children: (0, n.jsxs)(t.ModalRoot, {
    transitionState: U,
    className: N.root,
    hideShadow: !0,
    'aria-label': g.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, n.jsxs)(Z.Z, {
        user: s,
        displayProfile: D,
        profileType: j.y0.FULL_SIZE,
        ref: F,
        children: [
          (0, n.jsx)(p.Z, {
            profileType: j.y0.FULL_SIZE,
            children: (0, n.jsx)(h.Z, {
              user: s
            })
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(_.Z, {
                user: s,
                displayProfile: D,
                profileType: j.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, n.jsx)('div', {
                className: N.headerInner,
                children: (0, n.jsx)(E.Z, {
                  user: s,
                  displayProfile: D,
                  guildId: b,
                  channelId: L,
                  profileType: j.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: N.body,
            children: [
              (0, n.jsx)(S.Z, {
                user: s,
                profileType: j.y0.FULL_SIZE,
                nickname: c.ZP.getName(b, L, s),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, n.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: j.y0.FULL_SIZE,
                  onClose: M
                })
              }),
              (0, n.jsx)(Z.Z.Overlay, {
                className: N.overlay,
                children: (0, n.jsxs)('div', {
                  className: A.container,
                  children: [
                    (0, n.jsx)(t.TabBar, {
                      className: A.tabBar,
                      type: 'top',
                      selectedItem: j.oh.BOT_INFO,
                      onItemSelect: T.dG4,
                      children: (0, n.jsx)(t.TabBar.Item, {
                        className: A.tabBarItem,
                        id: j.oh.BOT_INFO,
                        'aria-label': g.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, n.jsx)(t.Text, {
                          variant: 'text-sm/normal',
                          children: g.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, j.oh.BOT_INFO)
                    }),
                    (0, n.jsxs)(t.ScrollerThin, {
                      fade: !0,
                      className: C.scroller,
                      children: [
                        (0, n.jsx)(m.Z, {
                          userId: s.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, n.jsx)(v.Z, {
                          title: g.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, n.jsx)(x.Z, {
                            userId: s.id,
                            guildId: b,
                            tooltipDelay: j.vB
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
      (null == D ? void 0 : D.profileEffectId) != null && (0, n.jsx)(d.Z, {
        profileEffectId: null == D ? void 0 : D.profileEffectId,
        isHovering: B
      })
    ]
  })
})
  });
}