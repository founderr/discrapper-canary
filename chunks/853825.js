n.d(i, {
  Z: function() {
return R;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(481060),
  o = n(727637),
  a = n(100527),
  r = n(906732),
  d = n(680295),
  c = n(5192),
  u = n(785717),
  I = n(318661),
  _ = n(78675),
  f = n(741308),
  m = n(588822),
  E = n(899007),
  x = n(900927),
  v = n(678738),
  h = n(502762),
  S = n(530),
  Z = n(679332),
  p = n(544989),
  g = n(228168),
  j = n(981631),
  T = n(689938),
  N = n(505451),
  C = n(247321),
  A = n(47460);

function R(e) {
  let {
user: i,
guildId: n,
channelId: R,
messageId: L,
roleId: y,
transitionState: O,
onClose: U,
sourceAnalyticsLocations: P = []
  } = e, {
analyticsLocations: M
  } = (0, r.ZP)([
...P,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), b = n === j.ME ? void 0 : n, D = (0, I.ZP)(i.id, b), F = l.createRef(), B = (0, o.Z)(F);
  return (0, s.jsx)(r.Gt, {
value: M,
children: (0, s.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: i.id,
  guildId: b,
  channelId: R,
  messageId: L,
  roleId: y,
  showGuildProfile: !0,
  children: (0, s.jsxs)(t.ModalRoot, {
    transitionState: O,
    className: N.root,
    hideShadow: !0,
    'aria-label': T.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(h.Z, {
        user: i,
        displayProfile: D,
        profileType: g.y0.FULL_SIZE,
        ref: F,
        children: [
          (0, s.jsx)(p.Z, {
            profileType: g.y0.FULL_SIZE,
            children: (0, s.jsx)(Z.Z, {
              user: i
            })
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(_.Z, {
                user: i,
                displayProfile: D,
                profileType: g.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, s.jsx)('div', {
                className: N.headerInner,
                children: (0, s.jsx)(E.Z, {
                  user: i,
                  displayProfile: D,
                  guildId: b,
                  channelId: R,
                  profileType: g.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, s.jsxs)('div', {
            className: N.body,
            children: [
              (0, s.jsx)(S.Z, {
                user: i,
                profileType: g.y0.FULL_SIZE,
                nickname: c.ZP.getName(b, R, i),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, s.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: g.y0.FULL_SIZE,
                  onClose: U
                })
              }),
              (0, s.jsx)(h.Z.Overlay, {
                className: N.overlay,
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
                        'aria-label': T.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, s.jsx)(t.Text, {
                          variant: 'text-sm/normal',
                          children: T.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, g.oh.BOT_INFO)
                    }),
                    (0, s.jsxs)(t.ScrollerThin, {
                      fade: !0,
                      className: C.scroller,
                      children: [
                        (0, s.jsx)(m.Z, {
                          userId: i.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, s.jsx)(v.Z, {
                          heading: T.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, s.jsx)(x.Z, {
                            userId: i.id,
                            guildId: b,
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