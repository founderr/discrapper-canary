s.d(i, {
  Z: function() {
    return j
  }
}), s(47120);
var n = s(735250),
  l = s(470079),
  t = s(481060),
  o = s(727637),
  r = s(100527),
  a = s(906732),
  d = s(680295),
  c = s(5192),
  u = s(998502),
  I = s(785717),
  E = s(318661),
  Z = s(721987),
  f = s(204197),
  _ = s(78675),
  S = s(741308),
  v = s(588822),
  m = s(900927),
  x = s(678738),
  h = s(502762),
  N = s(530),
  g = s(228168),
  T = s(981631),
  R = s(689938),
  C = s(327570),
  A = s(143599),
  M = s(784204);
let p = u.ZP.getEnableHardwareAcceleration() ? t.AnimatedAvatar : t.Avatar;

function j(e) {
  let {
    user: i,
    guildId: s,
    channelId: u,
    messageId: j,
    roleId: U,
    transitionState: L,
    onClose: O,
    sourceAnalyticsLocations: P = []
  } = e, {
    analyticsLocations: y
  } = (0, a.ZP)([...P, r.Z.SIMPLIFIED_PROFILE_MODAL]), D = s === T.ME ? void 0 : s, F = (0, E.ZP)(i.id, D), {
    theme: b
  } = (0, Z.Z)({
    user: i,
    displayProfile: F
  }), {
    avatarSrc: B,
    eventHandlers: G,
    avatarDecorationSrc: k
  } = (0, f.Z)({
    user: i,
    guildId: null == F ? void 0 : F.guildId,
    size: t.AvatarSizes.SIZE_120
  }), w = l.createRef(), Y = (0, o.Z)(w);
  return (0, n.jsx)(a.Gt, {
    value: y,
    children: (0, n.jsx)(I.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: i.id,
      guildId: D,
      channelId: u,
      messageId: j,
      roleId: U,
      showGuildProfile: !0,
      children: (0, n.jsxs)(t.ModalRoot, {
        transitionState: L,
        className: C.root,
        hideShadow: !0,
        "aria-label": R.Z.Messages.USER_PROFILE_MODAL,
        children: [(0, n.jsxs)(h.Z, {
          user: i,
          displayProfile: F,
          profileType: g.y0.FULL_SIZE,
          ref: w,
          children: [(0, n.jsxs)("header", {
            children: [(0, n.jsx)(_.Z, {
              user: i,
              displayProfile: F,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == F ? void 0 : F.profileEffectId) != null
            }), (0, n.jsx)("div", {
              className: C.headerInner,
              children: (0, n.jsx)("div", {
                ...G,
                children: (0, n.jsx)(p, {
                  src: B,
                  avatarDecoration: k,
                  size: t.AvatarSizes.SIZE_120,
                  className: C.avatar,
                  status: void 0,
                  statusBackdropColor: (0, t.getStatusBackdropColor)(b),
                  "aria-label": i.username,
                  isMobile: !1,
                  statusTooltip: !0,
                  statusTooltipDelay: g.vB
                })
              })
            })]
          }), (0, n.jsxs)("div", {
            className: C.body,
            children: [(0, n.jsx)(N.Z, {
              user: i,
              profileType: g.y0.FULL_SIZE,
              nickname: c.ZP.getName(D, u, i),
              pronouns: null == F ? void 0 : F.pronouns,
              nicknameVariant: "heading-xl/bold",
              tags: (0, n.jsx)(S.Z, {
                displayProfile: F,
                profileType: g.y0.FULL_SIZE,
                onClose: O
              })
            }), (0, n.jsx)(h.Z.Overlay, {
              className: C.overlay,
              children: (0, n.jsxs)("div", {
                className: M.container,
                children: [(0, n.jsx)(t.TabBar, {
                  className: M.tabBar,
                  type: "top",
                  selectedItem: g.oh.USER_INFO,
                  onItemSelect: T.dG4,
                  children: (0, n.jsx)(t.TabBar.Item, {
                    className: M.tabBarItem,
                    id: g.oh.USER_INFO,
                    "aria-label": R.Z.Messages.USER_PROFILE_ABOUT_ME,
                    children: (0, n.jsx)(t.Text, {
                      variant: "text-sm/normal",
                      children: R.Z.Messages.USER_PROFILE_ABOUT_ME
                    })
                  }, g.oh.USER_INFO)
                }), (0, n.jsxs)(t.ScrollerThin, {
                  fade: !0,
                  className: A.scroller,
                  children: [(0, n.jsx)(v.Z, {
                    userId: i.id,
                    userBio: null == F ? void 0 : F.bio,
                    setLineClamp: !1
                  }), (0, n.jsx)(x.Z, {
                    title: R.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                    children: (0, n.jsx)(m.Z, {
                      userId: i.id,
                      guildId: D,
                      tooltipDelay: g.vB
                    })
                  })]
                })]
              })
            })]
          })]
        }), (null == F ? void 0 : F.profileEffectId) != null && (0, n.jsx)(d.Z, {
          profileEffectId: null == F ? void 0 : F.profileEffectId,
          isHovering: Y
        })]
      })
    })
  })
}