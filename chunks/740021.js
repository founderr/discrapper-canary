"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("47120");
var s = l("735250");
l("470079");
var i = l("442837"),
  a = l("974674"),
  n = l("696826"),
  o = l("420660"),
  r = l("233440"),
  u = l("314897"),
  d = l("158776"),
  c = l("699516"),
  f = l("998502"),
  S = l("877485"),
  E = l("785717"),
  I = l("505737"),
  m = l("204197"),
  _ = l("78675"),
  v = l("438163"),
  p = l("652853"),
  T = l("900687"),
  g = l("228168"),
  x = l("182294"),
  A = l("602091"),
  C = l("231338"),
  N = l("566483");
let U = f.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function R(e) {
  let {
    user: t,
    displayProfile: l,
    activity: a,
    customStatusActivity: f,
    guildId: R,
    channelId: h,
    transitionState: P,
    viewProfileItem: M,
    onClose: j
  } = e, {
    theme: y
  } = (0, p.useUserProfileThemeContext)(), F = (0, I.default)(t.id, R), {
    avatarSrc: O,
    eventHandlers: L,
    avatarDecorationSrc: D
  } = (0, m.default)({
    user: t,
    guildId: null == l ? void 0 : l.guildId,
    size: x.AvatarSizes.SIZE_120
  }), {
    originalFriendingEnabled: b,
    improvedFriendingEnabled: B
  } = (0, S.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModalHeader"
  }), {
    trackUserProfileAction: G
  } = (0, E.useUserProfileAnalyticsContext)(), k = (0, i.useStateFromStores)([c.default], () => c.default.getRelationshipType(t.id)), w = (0, i.useStateFromStores)([u.default], () => u.default.getId() === t.id), [Y, H] = (0, i.useStateFromStoresArray)([d.default], () => {
    let e = d.default.isMobileOnline(t.id);
    return (0, r.shouldDisableUserPresenceInChannel)(t, h) ? [C.StatusTypes.UNKNOWN, e] : (0, o.default)(a) ? [C.StatusTypes.STREAMING, e] : [d.default.getStatus(t.id), e]
  });
  return (0, s.jsxs)("header", {
    children: [(0, s.jsx)(_.default, {
      user: t,
      displayProfile: l,
      profileType: g.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null
    }), (0, s.jsx)("div", {
      className: N.inner,
      children: (0, s.jsxs)("div", {
        ...L,
        children: [(0, s.jsx)(U, {
          src: O,
          avatarDecoration: D,
          size: x.AvatarSizes.SIZE_120,
          className: N.avatar,
          status: Y,
          statusBackdropColor: (0, n.getStatusBackdropColor)(y),
          "aria-label": t.username,
          isMobile: H,
          statusTooltip: !0,
          statusTooltipDelay: g.USER_PROFILE_TOOLTIP_DELAY
        }), (0, s.jsx)(T.default, {
          user: t,
          isCurrentUser: w,
          guildId: R,
          canDM: F,
          relationshipType: k,
          originalFriendingEnabled: b,
          improvedFriendingEnabled: B,
          viewProfileItem: M,
          trackUserProfileAction: G,
          onClose: j
        }), (0, s.jsx)(v.UserProfileCustomStatusBubble, {
          statusActivity: f,
          profileType: g.UserProfileTypes.FULL_SIZE,
          hasEntered: P === A.ModalTransitionState.ENTERED
        })]
      })
    })]
  })
}