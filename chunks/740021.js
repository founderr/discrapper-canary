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
  o = s("696826"),
  r = s("420660"),
  n = s("233440"),
  u = s("158776"),
  d = s("998502"),
  c = s("505737"),
  f = s("204197"),
  S = s("78675"),
  m = s("438163"),
  E = s("652853"),
  I = s("30556"),
  v = s("228168"),
  x = s("182294"),
  N = s("231338"),
  _ = s("262572");
let A = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function T(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: T,
    channelId: U,
    onClose: h
  } = e, {
    theme: p
  } = (0, E.useUserProfileThemeContext)(), j = (0, c.default)(t.id, T), {
    avatarSrc: g,
    eventHandlers: R,
    avatarDecorationSrc: P
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: x.AvatarSizes.SIZE_120
  }), [C, M] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, n.shouldDisableUserPresenceInChannel)(t, U) ? [N.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [N.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: v.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsxs)("div", {
      className: _.inner,
      children: [(0, l.jsxs)("div", {
        ...R,
        children: [(0, l.jsx)(A, {
          src: g,
          avatarDecoration: P,
          size: x.AvatarSizes.SIZE_120,
          className: _.avatar,
          status: C,
          statusBackdropColor: (0, o.getStatusBackdropColor)(p),
          "aria-label": t.username,
          isMobile: M,
          statusTooltip: !0
        }), null != d && (0, l.jsx)(m.UserProfileCustomStatusBubble, {
          positionStyle: _.statusBubblePosition,
          statusActivity: d
        })]
      }), (0, l.jsx)("div", {
        className: _.buttons,
        children: j && (0, l.jsx)(I.default, {
          user: t,
          onClose: h
        })
      })]
    })]
  })
}