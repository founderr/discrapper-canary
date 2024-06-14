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
  I = l("505737"),
  E = l("204197"),
  m = l("78675"),
  v = l("438163"),
  _ = l("652853"),
  p = l("900687"),
  x = l("228168"),
  T = l("182294"),
  g = l("602091"),
  N = l("231338"),
  A = l("566483");
let C = f.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

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
  } = (0, _.useUserProfileThemeContext)(), y = (0, I.default)(t.id, U), {
    avatarSrc: O,
    eventHandlers: L,
    avatarDecorationSrc: F
  } = (0, E.default)({
    user: t,
    guildId: null == l ? void 0 : l.guildId,
    size: T.AvatarSizes.SIZE_120
  }), {
    originalFriendingEnabled: D,
    improvedFriendingEnabled: b
  } = (0, S.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModalHeader"
  }), B = (0, i.useStateFromStores)([c.default], () => c.default.getRelationshipType(t.id)), G = (0, i.useStateFromStores)([u.default], () => u.default.getId() === t.id), [k, w] = (0, i.useStateFromStoresArray)([d.default], () => {
    let e = d.default.isMobileOnline(t.id);
    return (0, r.shouldDisableUserPresenceInChannel)(t, P) ? [N.StatusTypes.UNKNOWN, e] : (0, o.default)(a) ? [N.StatusTypes.STREAMING, e] : [d.default.getStatus(t.id), e]
  });
  return (0, s.jsxs)("header", {
    children: [(0, s.jsx)(m.default, {
      user: t,
      displayProfile: l,
      profileType: x.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null
    }), (0, s.jsxs)("div", {
      className: A.inner,
      children: [(0, s.jsx)("div", {
        ...L,
        children: (0, s.jsx)(C, {
          src: O,
          avatarDecoration: F,
          size: T.AvatarSizes.SIZE_120,
          className: A.avatar,
          status: k,
          statusBackdropColor: (0, n.getStatusBackdropColor)(j),
          "aria-label": t.username,
          isMobile: w,
          statusTooltip: !0,
          statusTooltipDelay: x.USER_PROFILE_TOOLTIP_DELAY
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
      }), (0, s.jsx)(v.UserProfileCustomStatusBubble, {
        statusActivity: f,
        profileType: x.UserProfileTypes.FULL_SIZE,
        hasEntered: h === g.ModalTransitionState.ENTERED
      })]
    })]
  })
}