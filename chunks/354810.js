"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  p = n("438163"),
  E = n("652853"),
  C = n("228168"),
  g = n("981631"),
  S = n("187393");
let _ = f.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  T = r.AvatarSizes.SIZE_80;

function I(e) {
  let {
    user: t,
    displayProfile: n,
    channel: i,
    isHovering: f
  } = e, {
    theme: I
  } = (0, E.useUserProfileThemeContext)(), A = null == n ? void 0 : n.canUsePremiumProfileCustomization, {
    avatarSrc: v,
    eventHandlers: N,
    avatarDecorationSrc: x
  } = (0, h.default)({
    user: t,
    size: T,
    animateOnHover: !f
  }), M = l.useMemo(() => (0, u.shouldDisableUserPresenceInChannel)(t, i.id), [t, i.id]), {
    status: R,
    customStatusActivity: y,
    isMobileOnline: L
  } = (0, s.useStateFromStoresObject)([d.default, c.default], () => {
    let e = null != d.default.getAnyStreamForUser(t.id),
      n = c.default.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === g.ActivityTypes.PLAYING : n !== g.ActivityTypes.CUSTOM_STATUS
      });
    return {
      status: (0, o.default)(n) ? r.StatusTypes.STREAMING : c.default.getStatus(t.id),
      customStatusActivity: c.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === g.ActivityTypes.CUSTOM_STATUS
      }),
      isMobileOnline: c.default.isMobileOnline(t.id)
    }
  });
  return (0, a.jsxs)("header", {
    className: S.header,
    children: [(0, a.jsx)(m.default, {
      user: t,
      displayProfile: n,
      profileType: C.UserProfileTypes.PANEL,
      animateOnHover: !f
    }), (0, a.jsx)("div", {
      ...N,
      children: (0, a.jsx)(_, {
        src: v,
        avatarDecoration: x,
        size: T,
        className: S.avatar,
        status: M ? r.StatusTypes.UNKNOWN : R,
        statusBackdropColor: A && !M ? (0, r.getStatusBackdropColor)(I) : void 0,
        "aria-label": t.username,
        isMobile: L,
        statusTooltip: !0,
        statusTooltipDelay: C.USER_PROFILE_TOOLTIP_DELAY
      })
    }), (0, a.jsx)(p.UserProfileCustomStatusBubble, {
      statusActivity: y,
      profileType: C.UserProfileTypes.PANEL
    })]
  })
}