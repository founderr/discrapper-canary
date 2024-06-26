i.d(n, {
  Z: function() {
    return M
  }
}), i(47120);
var t = i(735250),
  s = i(470079),
  o = i(481060),
  l = i(727637),
  a = i(100527),
  r = i(906732),
  d = i(680295),
  c = i(5192),
  u = i(998502),
  I = i(785717),
  f = i(318661),
  E = i(721987),
  _ = i(204197),
  Z = i(78675),
  S = i(741308),
  m = i(588822),
  v = i(900927),
  x = i(678738),
  h = i(502762),
  g = i(530),
  N = i(228168),
  p = i(981631),
  T = i(689938),
  C = i(327570),
  R = i(143599),
  A = i(784204);
let j = u.ZP.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function M(e) {
  let {
    user: n,
    guildId: i,
    channelId: u,
    messageId: M,
    roleId: U,
    transitionState: P,
    onClose: L,
    sourceAnalyticsLocations: O = []
  } = e, {
    analyticsLocations: y
  } = (0, r.ZP)([...O, a.Z.SIMPLIFIED_PROFILE_MODAL]), b = i === p.ME ? void 0 : i, D = (0, f.ZP)(n.id, b), {
    theme: F
  } = (0, E.Z)({
    user: n,
    displayProfile: D
  }), {
    avatarSrc: B,
    eventHandlers: G,
    avatarDecorationSrc: w
  } = (0, _.Z)({
    user: n,
    guildId: null == D ? void 0 : D.guildId,
    size: o.AvatarSizes.SIZE_120
  }), k = s.createRef(), Y = (0, l.Z)(k);
  return (0, t.jsx)(r.Gt, {
    value: y,
    children: (0, t.jsx)(I.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: n.id,
      guildId: b,
      channelId: u,
      messageId: M,
      roleId: U,
      showGuildProfile: !0,
      children: (0, t.jsxs)(o.ModalRoot, {
        transitionState: P,
        className: C.root,
        hideShadow: !0,
        "aria-label": T.Z.Messages.USER_PROFILE_MODAL,
        children: [(0, t.jsxs)(h.Z, {
          user: n,
          displayProfile: D,
          profileType: N.y0.FULL_SIZE,
          ref: k,
          children: [(0, t.jsxs)("header", {
            children: [(0, t.jsx)(Z.Z, {
              user: n,
              displayProfile: D,
              profileType: N.y0.FULL_SIZE,
              hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
            }), (0, t.jsx)("div", {
              className: C.headerInner,
              children: (0, t.jsx)("div", {
                ...G,
                children: (0, t.jsx)(j, {
                  src: B,
                  avatarDecoration: w,
                  size: o.AvatarSizes.SIZE_120,
                  className: C.avatar,
                  status: void 0,
                  statusBackdropColor: (0, o.getStatusBackdropColor)(F),
                  "aria-label": n.username,
                  isMobile: !1,
                  statusTooltip: !0,
                  statusTooltipDelay: N.vB
                })
              })
            })]
          }), (0, t.jsxs)("div", {
            className: C.body,
            children: [(0, t.jsx)(g.Z, {
              user: n,
              profileType: N.y0.FULL_SIZE,
              nickname: c.ZP.getName(b, u, n),
              pronouns: null == D ? void 0 : D.pronouns,
              nicknameVariant: "heading-xl/bold",
              tags: (0, t.jsx)(S.Z, {
                displayProfile: D,
                profileType: N.y0.FULL_SIZE,
                onClose: L
              })
            }), (0, t.jsx)(h.Z.Overlay, {
              className: C.overlay,
              children: (0, t.jsxs)("div", {
                className: A.container,
                children: [(0, t.jsx)(o.TabBar, {
                  className: A.tabBar,
                  type: "top",
                  selectedItem: N.oh.USER_INFO,
                  onItemSelect: p.dG4,
                  children: (0, t.jsx)(o.TabBar.Item, {
                    className: A.tabBarItem,
                    id: N.oh.USER_INFO,
                    "aria-label": T.Z.Messages.USER_PROFILE_ABOUT_ME,
                    children: (0, t.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      children: T.Z.Messages.USER_PROFILE_ABOUT_ME
                    })
                  }, N.oh.USER_INFO)
                }), (0, t.jsxs)(o.ScrollerThin, {
                  fade: !0,
                  className: R.scroller,
                  children: [(0, t.jsx)(m.Z, {
                    userId: n.id,
                    userBio: null == D ? void 0 : D.bio,
                    setLineClamp: !1
                  }), (0, t.jsx)(x.Z, {
                    title: T.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                    children: (0, t.jsx)(v.Z, {
                      userId: n.id,
                      guildId: b,
                      tooltipDelay: N.vB
                    })
                  })]
                })]
              })
            })]
          })]
        }), (null == D ? void 0 : D.profileEffectId) != null && (0, t.jsx)(d.Z, {
          profileEffectId: null == D ? void 0 : D.profileEffectId,
          isHovering: Y
        })]
      })
    })
  })
}