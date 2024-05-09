"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  v = s("30556"),
  _ = s("228168"),
  g = s("182294"),
  A = s("231338"),
  T = s("566483");
let x = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function N(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: N,
    channelId: U,
    onClose: C
  } = e, {
    theme: h
  } = (0, E.useUserProfileThemeContext)(), p = (0, c.default)(t.id, N), {
    avatarSrc: R,
    eventHandlers: M,
    avatarDecorationSrc: P
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: g.AvatarSizes.SIZE_120
  }), [j, L] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, U) ? [A.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [A.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: _.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsx)("div", {
      className: T.inner,
      children: (0, l.jsxs)("div", {
        ...M,
        children: [(0, l.jsx)(x, {
          src: R,
          avatarDecoration: P,
          size: g.AvatarSizes.SIZE_120,
          className: T.avatar,
          status: j,
          statusBackdropColor: (0, n.getStatusBackdropColor)(h),
          "aria-label": t.username,
          isMobile: L,
          statusTooltip: !0,
          statusTooltipDelay: _.USER_PROFILE_TOOLTIP_DELAY
        }), (0, l.jsxs)("div", {
          className: T.buttons,
          children: [p && (0, l.jsx)(v.default, {
            user: t,
            onClose: C
          }), !p && (0, l.jsx)(I.default, {
            user: t,
            guildId: N,
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