"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("47120");
var s = l("735250");
l("470079");
var a = l("442837"),
  i = l("974674"),
  n = l("696826"),
  r = l("420660"),
  o = l("233440"),
  u = l("314897"),
  d = l("158776"),
  c = l("699516"),
  f = l("998502"),
  S = l("785717"),
  E = l("505737"),
  m = l("204197"),
  I = l("78675"),
  _ = l("438163"),
  v = l("652853"),
  g = l("900687"),
  T = l("228168"),
  A = l("182294"),
  x = l("602091"),
  U = l("231338"),
  p = l("566483");
let N = f.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function C(e) {
  let {
    user: t,
    displayProfile: l,
    activity: i,
    customStatusActivity: f,
    guildId: C,
    channelId: h,
    originalFriendingEnabled: R,
    transitionState: P,
    onClose: M
  } = e, {
    theme: j
  } = (0, v.useUserProfileThemeContext)(), y = (0, E.default)(t.id, C), {
    avatarSrc: L,
    eventHandlers: O,
    avatarDecorationSrc: F
  } = (0, m.default)({
    user: t,
    guildId: null == l ? void 0 : l.guildId,
    size: A.AvatarSizes.SIZE_120
  }), {
    trackUserProfileAction: D
  } = (0, S.useUserProfileAnalyticsContext)(), b = (0, a.useStateFromStores)([c.default], () => c.default.getRelationshipType(t.id)), B = (0, a.useStateFromStores)([u.default], () => u.default.getId() === t.id), [G, k] = (0, a.useStateFromStoresArray)([d.default], () => {
    let e = d.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, h) ? [U.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [U.StatusTypes.STREAMING, e] : [d.default.getStatus(t.id), e]
  });
  return (0, s.jsxs)("header", {
    children: [(0, s.jsx)(I.default, {
      user: t,
      displayProfile: l,
      profileType: T.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null
    }), (0, s.jsx)("div", {
      className: p.inner,
      children: (0, s.jsxs)("div", {
        ...O,
        children: [(0, s.jsx)(N, {
          src: L,
          avatarDecoration: F,
          size: A.AvatarSizes.SIZE_120,
          className: p.avatar,
          status: G,
          statusBackdropColor: (0, n.getStatusBackdropColor)(j),
          "aria-label": t.username,
          isMobile: k,
          statusTooltip: !0,
          statusTooltipDelay: T.USER_PROFILE_TOOLTIP_DELAY
        }), (0, s.jsx)(g.default, {
          user: t,
          isCurrentUser: B,
          guildId: C,
          canDM: y,
          relationshipType: b,
          originalFriendingEnabled: R,
          trackUserProfileAction: D,
          onClose: M
        }), (0, s.jsx)(_.UserProfileCustomStatusBubble, {
          statusActivity: f,
          profileType: T.UserProfileTypes.FULL_SIZE,
          hasEntered: P === x.ModalTransitionState.ENTERED
        })]
      })
    })]
  })
}