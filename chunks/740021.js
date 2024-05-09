"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
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
  I = s("652853"),
  E = s("705556"),
  v = s("30556"),
  _ = s("228168"),
  T = s("182294"),
  x = s("231338"),
  U = s("100651");
let A = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function g(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: g,
    channelId: N,
    onClose: C
  } = e, {
    theme: h
  } = (0, I.useUserProfileThemeContext)(), R = (0, c.default)(t.id, g), {
    avatarSrc: p,
    eventHandlers: P,
    avatarDecorationSrc: M
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: T.AvatarSizes.SIZE_120
  }), [j, y] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, N) ? [x.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [x.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: _.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsx)("div", {
      className: U.inner,
      children: (0, l.jsxs)("div", {
        ...P,
        children: [(0, l.jsx)(A, {
          src: p,
          avatarDecoration: M,
          size: T.AvatarSizes.SIZE_120,
          className: U.avatar,
          status: j,
          statusBackdropColor: (0, n.getStatusBackdropColor)(h),
          "aria-label": t.username,
          isMobile: y,
          statusTooltip: !0,
          statusTooltipDelay: _.USER_PROFILE_TOOLTIP_DELAY
        }), (0, l.jsxs)("div", {
          className: U.buttons,
          children: [R && (0, l.jsx)(v.default, {
            user: t,
            onClose: C
          }), !R && (0, l.jsx)(E.default, {
            user: t,
            guildId: g,
            onClose: C
          })]
        }), (0, l.jsx)(m.UserProfileCustomStatusBubble, {
          statusActivity: d,
          profileType: _.UserProfileTypes.FULL_SIZE
        })]
      })
    })]
  })
}