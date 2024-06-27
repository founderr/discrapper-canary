i.d(n, {
  Z: function() {
    return j
  }
}), i(47120);
var t = i(735250),
  o = i(470079),
  s = i(481060),
  l = i(727637),
  a = i(100527),
  r = i(906732),
  c = i(680295),
  d = i(5192),
  u = i(998502),
  I = i(785717),
  E = i(318661),
  _ = i(721987),
  f = i(204197),
  Z = i(78675),
  m = i(741308),
  S = i(588822),
  v = i(900927),
  x = i(678738),
  h = i(502762),
  N = i(530),
  g = i(228168),
  C = i(981631),
  p = i(689938),
  R = i(327570),
  T = i(143599),
  M = i(784204);
let A = u.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function j(e) {
  let {
    user: n,
    guildId: i,
    channelId: u,
    messageId: j,
    roleId: P,
    transitionState: U,
    onClose: L,
    sourceAnalyticsLocations: O = []
  } = e, {
    analyticsLocations: b
  } = (0, r.ZP)([...O, a.Z.SIMPLIFIED_PROFILE_MODAL]), y = i === C.ME ? void 0 : i, D = (0, E.ZP)(n.id, y), {
    theme: B
  } = (0, _.Z)({
    user: n,
    displayProfile: D
  }), {
    avatarSrc: F,
    eventHandlers: G,
    avatarDecorationSrc: k
  } = (0, f.Z)({
    user: n,
    guildId: null == D ? void 0 : D.guildId,
    size: s.AvatarSizes.SIZE_120
  }), w = o.createRef(), Y = (0, l.Z)(w);
  return (0, t.jsx)(r.Gt, {
    value: b,
    children: (0, t.jsx)(I.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: n.id,
      guildId: y,
      channelId: u,
      messageId: j,
      roleId: P,
      showGuildProfile: !0,
      children: (0, t.jsxs)(s.ModalRoot, {
        transitionState: U,
        className: R.root,
        hideShadow: !0,
        "aria-label": p.Z.Messages.USER_PROFILE_MODAL,
        children: [(0, t.jsxs)(h.Z, {
          user: n,
          displayProfile: D,
          profileType: g.y0.FULL_SIZE,
          ref: w,
          children: [(0, t.jsxs)("header", {
            children: [(0, t.jsx)(Z.Z, {
              user: n,
              displayProfile: D,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
            }), (0, t.jsx)("div", {
              className: R.headerInner,
              children: (0, t.jsx)("div", {
                ...G,
                children: (0, t.jsx)(A, {
                  src: F,
                  avatarDecoration: k,
                  size: s.AvatarSizes.SIZE_120,
                  className: R.avatar,
                  status: void 0,
                  statusBackdropColor: (0, s.getStatusBackdropColor)(B),
                  "aria-label": n.username,
                  isMobile: !1,
                  statusTooltip: !0,
                  statusTooltipDelay: g.vB
                })
              })
            })]
          }), (0, t.jsxs)("div", {
            className: R.body,
            children: [(0, t.jsx)(N.Z, {
              user: n,
              profileType: g.y0.FULL_SIZE,
              nickname: d.ZP.getName(y, u, n),
              pronouns: null == D ? void 0 : D.pronouns,
              nicknameVariant: "heading-xl/bold",
              tags: (0, t.jsx)(m.Z, {
                displayProfile: D,
                profileType: g.y0.FULL_SIZE,
                onClose: L
              })
            }), (0, t.jsx)(h.Z.Overlay, {
              className: R.overlay,
              children: (0, t.jsxs)("div", {
                className: M.container,
                children: [(0, t.jsx)(s.TabBar, {
                  className: M.tabBar,
                  type: "top",
                  selectedItem: g.oh.USER_INFO,
                  onItemSelect: C.dG4,
                  children: (0, t.jsx)(s.TabBar.Item, {
                    className: M.tabBarItem,
                    id: g.oh.USER_INFO,
                    "aria-label": p.Z.Messages.USER_PROFILE_ABOUT_ME,
                    children: (0, t.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      children: p.Z.Messages.USER_PROFILE_ABOUT_ME
                    })
                  }, g.oh.USER_INFO)
                }), (0, t.jsxs)(s.ScrollerThin, {
                  fade: !0,
                  className: T.scroller,
                  children: [(0, t.jsx)(S.Z, {
                    userId: n.id,
                    userBio: null == D ? void 0 : D.bio,
                    setLineClamp: !1
                  }), (0, t.jsx)(x.Z, {
                    title: p.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                    children: (0, t.jsx)(v.Z, {
                      userId: n.id,
                      guildId: y,
                      tooltipDelay: g.vB
                    })
                  })]
                })]
              })
            })]
          })]
        }), (null == D ? void 0 : D.profileEffectId) != null && (0, t.jsx)(c.Z, {
          profileEffectId: null == D ? void 0 : D.profileEffectId,
          isHovering: Y
        })]
      })
    })
  })
}