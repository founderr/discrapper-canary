"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120");
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("974674"),
  n = s("696826"),
  r = s("420660"),
  o = s("233440"),
  u = s("158776"),
  d = s("998502"),
  c = s("505737"),
  f = s("204197"),
  S = s("78675"),
  m = s("438163"),
  E = s("652853"),
  I = s("705556"),
  _ = s("30556"),
  v = s("228168"),
  T = s("182294"),
  A = s("231338"),
  g = s("566483");
let U = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function x(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: x,
    channelId: N,
    transitionState: C,
    onClose: p
  } = e, {
    theme: h
  } = (0, E.useUserProfileThemeContext)(), R = (0, c.default)(t.id, x), {
    avatarSrc: P,
    eventHandlers: M,
    avatarDecorationSrc: j
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: T.AvatarSizes.SIZE_120
  }), [L, y] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, N) ? [A.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [A.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: v.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsx)("div", {
      className: g.inner,
      children: (0, l.jsxs)("div", {
        ...M,
        children: [(0, l.jsx)(U, {
          src: P,
          avatarDecoration: j,
          size: T.AvatarSizes.SIZE_120,
          className: g.avatar,
          status: L,
          statusBackdropColor: (0, n.getStatusBackdropColor)(h),
          "aria-label": t.username,
          isMobile: y,
          statusTooltip: !0,
          statusTooltipDelay: v.USER_PROFILE_TOOLTIP_DELAY
        }), (0, l.jsxs)("div", {
          className: g.buttons,
          children: [R && (0, l.jsx)(_.default, {
            user: t,
            onClose: p
          }), !R && (0, l.jsx)(I.default, {
            user: t,
            guildId: x,
            onClose: p
          })]
        }), (0, l.jsx)(m.UserProfileCustomStatusBubble, {
          statusActivity: d,
          profileType: v.UserProfileTypes.FULL_SIZE,
          transitionState: C
        })]
      })
    })]
  })
}