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
  o = s("696826"),
  r = s("420660"),
  n = s("233440"),
  u = s("158776"),
  d = s("998502"),
  c = s("505737"),
  f = s("204197"),
  S = s("78675"),
  E = s("438163"),
  m = s("652853"),
  I = s("30556"),
  v = s("228168"),
  A = s("182294"),
  _ = s("231338"),
  T = s("262572");
let x = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function N(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: N,
    channelId: U,
    onClose: p
  } = e, {
    theme: h
  } = (0, m.useUserProfileThemeContext)(), C = (0, c.default)(t.id, N), {
    avatarSrc: P,
    eventHandlers: j,
    avatarDecorationSrc: y
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: A.AvatarSizes.SIZE_120
  }), [M, R] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, n.shouldDisableUserPresenceInChannel)(t, U) ? [_.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [_.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: v.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsxs)("div", {
      className: T.inner,
      children: [(0, l.jsxs)("div", {
        ...j,
        children: [(0, l.jsx)(x, {
          src: P,
          avatarDecoration: y,
          size: A.AvatarSizes.SIZE_120,
          className: T.avatar,
          status: M,
          statusBackdropColor: (0, o.getStatusBackdropColor)(h),
          "aria-label": t.username,
          isMobile: R,
          statusTooltip: !0
        }), null != d && (0, l.jsx)(E.UserProfileCustomStatusBubble, {
          positionStyle: T.statusBubblePosition,
          statusActivity: d
        })]
      }), (0, l.jsx)("div", {
        className: T.buttons,
        children: C && (0, l.jsx)(I.default, {
          user: t,
          onClose: p
        })
      })]
    })]
  })
}