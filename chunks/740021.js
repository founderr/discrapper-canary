"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120");
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("974674"),
  n = s("696826"),
  r = s("420660"),
  o = s("233440"),
  u = s("314897"),
  d = s("158776"),
  c = s("699516"),
  f = s("998502"),
  S = s("785717"),
  E = s("505737"),
  m = s("204197"),
  I = s("78675"),
  _ = s("438163"),
  v = s("652853"),
  g = s("900687"),
  T = s("228168"),
  A = s("182294"),
  x = s("602091"),
  U = s("231338"),
  p = s("566483");
let N = f.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function C(e) {
  let {
    user: t,
    displayProfile: s,
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
    guildId: null == s ? void 0 : s.guildId,
    size: A.AvatarSizes.SIZE_120
  }), {
    trackUserProfileAction: D
  } = (0, S.useUserProfileAnalyticsContext)(), b = (0, a.useStateFromStores)([c.default], () => c.default.getRelationshipType(t.id)), B = (0, a.useStateFromStores)([u.default], () => u.default.getId() === t.id), [G, k] = (0, a.useStateFromStoresArray)([d.default], () => {
    let e = d.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, h) ? [U.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [U.StatusTypes.STREAMING, e] : [d.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(I.default, {
      user: t,
      displayProfile: s,
      profileType: T.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsx)("div", {
      className: p.inner,
      children: (0, l.jsxs)("div", {
        ...O,
        children: [(0, l.jsx)(N, {
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
        }), (0, l.jsx)(g.default, {
          user: t,
          isCurrentUser: B,
          guildId: C,
          canDM: y,
          relationshipType: b,
          originalFriendingEnabled: R,
          trackUserProfileAction: D,
          onClose: M
        }), (0, l.jsx)(_.UserProfileCustomStatusBubble, {
          statusActivity: f,
          profileType: T.UserProfileTypes.FULL_SIZE,
          hasEntered: P === x.ModalTransitionState.ENTERED
        })]
      })
    })]
  })
}