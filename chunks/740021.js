"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
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
  E = l("505737"),
  I = l("204197"),
  m = l("78675"),
  _ = l("438163"),
  v = l("652853"),
  p = l("900687"),
  T = l("228168"),
  g = l("182294"),
  A = l("602091"),
  x = l("231338"),
  C = l("566483");
let N = f.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function U(e) {
  let {
    user: t,
    displayProfile: l,
    activity: a,
    customStatusActivity: f,
    guildId: U,
    channelId: P,
    transitionState: h,
    viewProfileItem: R,
    onClose: M
  } = e, {
    theme: j
  } = (0, v.useUserProfileThemeContext)(), y = (0, E.default)(t.id, U), {
    avatarSrc: O,
    eventHandlers: L,
    avatarDecorationSrc: F
  } = (0, I.default)({
    user: t,
    guildId: null == l ? void 0 : l.guildId,
    size: g.AvatarSizes.SIZE_120
  }), {
    originalFriendingEnabled: D,
    improvedFriendingEnabled: b
  } = (0, S.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModalHeader"
  }), B = (0, i.useStateFromStores)([c.default], () => c.default.getRelationshipType(t.id)), G = (0, i.useStateFromStores)([u.default], () => u.default.getId() === t.id), [k, w] = (0, i.useStateFromStoresArray)([d.default], () => {
    let e = d.default.isMobileOnline(t.id);
    return (0, r.shouldDisableUserPresenceInChannel)(t, P) ? [x.StatusTypes.UNKNOWN, e] : (0, o.default)(a) ? [x.StatusTypes.STREAMING, e] : [d.default.getStatus(t.id), e]
  });
  return (0, s.jsxs)("header", {
    children: [(0, s.jsx)(m.default, {
      user: t,
      displayProfile: l,
      profileType: T.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null
    }), (0, s.jsxs)("div", {
      className: C.inner,
      children: [(0, s.jsx)("div", {
        ...L,
        children: (0, s.jsx)(N, {
          src: O,
          avatarDecoration: F,
          size: g.AvatarSizes.SIZE_120,
          className: C.avatar,
          status: k,
          statusBackdropColor: (0, n.getStatusBackdropColor)(j),
          "aria-label": t.username,
          isMobile: w,
          statusTooltip: !0,
          statusTooltipDelay: T.USER_PROFILE_TOOLTIP_DELAY
        })
      }), (0, s.jsx)(p.default, {
        user: t,
        isCurrentUser: G,
        guildId: U,
        canDM: y,
        relationshipType: B,
        originalFriendingEnabled: D,
        improvedFriendingEnabled: b,
        viewProfileItem: R,
        onClose: M
      }), (0, s.jsx)(_.UserProfileCustomStatusBubble, {
        statusActivity: f,
        profileType: T.UserProfileTypes.FULL_SIZE,
        hasEntered: h === A.ModalTransitionState.ENTERED
      })]
    })]
  })
}