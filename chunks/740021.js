"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
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
  v = s("30556"),
  E = s("228168"),
  x = s("182294"),
  _ = s("231338"),
  A = s("100651");
let U = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function T(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: T,
    channelId: N,
    onClose: C
  } = e, {
    theme: g
  } = (0, I.useUserProfileThemeContext)(), h = (0, c.default)(t.id, T), {
    avatarSrc: p,
    eventHandlers: R,
    avatarDecorationSrc: j
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: x.AvatarSizes.SIZE_120
  }), [P, M] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, N) ? [_.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [_.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: E.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsx)("div", {
      className: A.inner,
      children: (0, l.jsxs)("div", {
        ...R,
        children: [(0, l.jsx)(U, {
          src: p,
          avatarDecoration: j,
          size: x.AvatarSizes.SIZE_120,
          className: A.avatar,
          status: P,
          statusBackdropColor: (0, n.getStatusBackdropColor)(g),
          "aria-label": t.username,
          isMobile: M,
          statusTooltip: !0
        }), (0, l.jsx)("div", {
          className: A.buttons,
          children: h && (0, l.jsx)(v.default, {
            user: t,
            onClose: C
          })
        }), null != d && (0, l.jsx)(m.UserProfileCustomStatusBubble, {
          statusActivity: d,
          profileType: E.UserProfileTypes.FULL_SIZE
        })]
      })
    })]
  })
}