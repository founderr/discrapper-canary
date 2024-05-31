"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("974674"),
  r = n("481060"),
  o = n("420660"),
  u = n("233440"),
  d = n("199902"),
  c = n("158776"),
  f = n("998502"),
  h = n("204197"),
  m = n("78675"),
  p = n("652853"),
  E = n("228168"),
  C = n("981631"),
  g = n("187393");
let S = f.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  _ = r.AvatarSizes.SIZE_80;

function T(e) {
  let {
    user: t,
    displayProfile: n,
    channel: i,
    isHovering: f
  } = e, {
    theme: T
  } = (0, p.useUserProfileThemeContext)(), I = null == n ? void 0 : n.canUsePremiumProfileCustomization, {
    avatarSrc: A,
    eventHandlers: v,
    avatarDecorationSrc: N
  } = (0, h.default)({
    user: t,
    size: _,
    animateOnHover: !f
  }), x = l.useMemo(() => (0, u.shouldDisableUserPresenceInChannel)(t, i.id), [t, i.id]), {
    status: M,
    isMobileOnline: R
  } = (0, s.useStateFromStoresObject)([d.default, c.default], () => {
    let e = null != d.default.getAnyStreamForUser(t.id),
      n = c.default.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === C.ActivityTypes.PLAYING : n !== C.ActivityTypes.CUSTOM_STATUS
      });
    return {
      status: (0, o.default)(n) ? r.StatusTypes.STREAMING : c.default.getStatus(t.id),
      isMobileOnline: c.default.isMobileOnline(t.id)
    }
  });
  return (0, a.jsxs)("header", {
    className: g.header,
    children: [(0, a.jsx)(m.default, {
      user: t,
      displayProfile: n,
      profileType: E.UserProfileTypes.PANEL,
      animateOnHover: !f
    }), (0, a.jsx)("div", {
      ...v,
      children: (0, a.jsx)(S, {
        src: A,
        avatarDecoration: N,
        size: _,
        className: g.avatar,
        status: x ? r.StatusTypes.UNKNOWN : M,
        statusBackdropColor: I && !x ? (0, r.getStatusBackdropColor)(T) : void 0,
        "aria-label": t.username,
        isMobile: R,
        statusTooltip: !0,
        statusTooltipDelay: E.USER_PROFILE_TOOLTIP_DELAY
      })
    })]
  })
}