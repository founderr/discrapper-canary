"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("974674"),
  o = s("696826"),
  r = s("37234"),
  u = s("420660"),
  d = s("233440"),
  c = s("158776"),
  f = s("135431"),
  S = s("998502"),
  E = s("204197"),
  I = s("249003"),
  m = s("735336"),
  T = s("747074"),
  p = s("18816"),
  N = s("301984"),
  A = s("30556"),
  x = s("228168"),
  _ = s("182294"),
  v = s("231338"),
  C = s("262572");
let h = S.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;

function U(e) {
  let {
    user: t,
    displayProfile: s,
    activity: n,
    friendToken: S,
    channelId: U,
    className: R,
    onClose: j
  } = e, {
    profileTheme: M
  } = l.useContext(T.UserProfileContext), {
    avatarSrc: P,
    eventHandlers: y,
    avatarDecorationSrc: O
  } = (0, E.default)({
    user: t,
    size: _.AvatarSizes.SIZE_120
  }), {
    relationshipType: g,
    canReceiveMessage: D,
    canReceiveFriendRequest: F
  } = (0, I.default)(t), L = (null == s ? void 0 : s.application) != null && (0, f.canInstallApplication)(s.application), [B, b] = (0, i.useStateFromStoresArray)([c.default], () => {
    let e = c.default.isMobileOnline(t.id);
    return (0, d.shouldDisableUserPresenceInChannel)(t, U) ? [v.StatusTypes.UNKNOWN, e] : (0, u.default)(n) ? [v.StatusTypes.STREAMING, e] : [c.default.getStatus(t.id), e]
  }), G = () => {
    j(), (0, r.popLayer)()
  };
  return (0, a.jsxs)("header", {
    className: R,
    children: [(0, a.jsx)(m.default, {
      user: t,
      displayProfile: s,
      profileType: x.UserProfileTypes.MODAL,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null,
      onClose: G
    }), (0, a.jsxs)("div", {
      className: C.inner,
      children: [(0, a.jsx)("div", {
        ...y,
        children: (0, a.jsx)(h, {
          src: P,
          avatarDecoration: O,
          size: _.AvatarSizes.SIZE_120,
          className: C.avatar,
          status: B,
          statusBackdropColor: (0, o.getStatusBackdropColor)(M),
          "aria-label": t.username,
          isMobile: b,
          statusTooltip: !0
        })
      }), D && (0, a.jsx)(A.default, {
        user: t,
        compact: L || F,
        onClose: G
      }), L && (0, a.jsx)(p.default, {
        application: s.application
      }), F && (0, a.jsx)(N.default, {
        user: t,
        relationshipType: g,
        friendToken: S,
        onClose: G
      })]
    })]
  })
}