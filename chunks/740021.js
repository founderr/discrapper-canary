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
  E = s("438163"),
  m = s("652853"),
  I = s("705556"),
  _ = s("30556"),
  v = s("228168"),
  T = s("182294"),
  A = s("602091"),
  g = s("231338"),
  U = s("566483");
let x = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function N(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: N,
    channelId: C,
    transitionState: p,
    onClose: h
  } = e, {
    theme: R
  } = (0, m.useUserProfileThemeContext)(), P = (0, c.default)(t.id, N), {
    avatarSrc: M,
    eventHandlers: j,
    avatarDecorationSrc: L
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: T.AvatarSizes.SIZE_120
  }), [y, O] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, o.shouldDisableUserPresenceInChannel)(t, C) ? [g.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [g.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: v.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsx)("div", {
      className: U.inner,
      children: (0, l.jsxs)("div", {
        ...j,
        children: [(0, l.jsx)(x, {
          src: M,
          avatarDecoration: L,
          size: T.AvatarSizes.SIZE_120,
          className: U.avatar,
          status: y,
          statusBackdropColor: (0, n.getStatusBackdropColor)(R),
          "aria-label": t.username,
          isMobile: O,
          statusTooltip: !0,
          statusTooltipDelay: v.USER_PROFILE_TOOLTIP_DELAY
        }), (0, l.jsxs)("div", {
          className: U.buttons,
          children: [P && (0, l.jsx)(_.default, {
            user: t,
            onClose: h
          }), !P && (0, l.jsx)(I.default, {
            user: t,
            guildId: N,
            onClose: h
          })]
        }), (0, l.jsx)(E.UserProfileCustomStatusBubble, {
          statusActivity: d,
          profileType: v.UserProfileTypes.FULL_SIZE,
          hasEntered: p === A.ModalTransitionState.ENTERED
        })]
      })
    })]
  })
}