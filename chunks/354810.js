"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("974674"),
  r = n("481060"),
  o = n("420660"),
  u = n("100527"),
  d = n("906732"),
  c = n("233440"),
  f = n("199902"),
  h = n("158776"),
  m = n("998502"),
  p = n("785717"),
  E = n("204197"),
  g = n("78675"),
  C = n("438163"),
  S = n("652853"),
  _ = n("228168"),
  T = n("981631"),
  I = n("187393");
let A = m.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  v = r.AvatarSizes.SIZE_80;

function x(e) {
  let {
    user: t,
    displayProfile: n,
    channel: i,
    isHovering: m,
    onOpenProfile: x
  } = e, {
    theme: N
  } = (0, S.useUserProfileThemeContext)(), {
    analyticsLocations: M
  } = (0, d.default)(u.default.AVATAR), {
    trackUserProfileAction: y
  } = (0, p.useUserProfileAnalyticsContext)(), R = null == n ? void 0 : n.canUsePremiumProfileCustomization, {
    avatarSrc: L,
    eventHandlers: O,
    avatarDecorationSrc: j
  } = (0, E.default)({
    user: t,
    size: v,
    animateOnHover: !m
  }), P = l.useMemo(() => (0, c.shouldDisableUserPresenceInChannel)(t, i.id), [t, i.id]), {
    status: D,
    customStatusActivity: b,
    isMobileOnline: U
  } = (0, s.useStateFromStoresObject)([f.default, h.default], () => {
    let e = null != f.default.getAnyStreamForUser(t.id),
      n = h.default.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === T.ActivityTypes.PLAYING : n !== T.ActivityTypes.CUSTOM_STATUS
      });
    return {
      status: (0, o.default)(n) ? r.StatusTypes.STREAMING : h.default.getStatus(t.id),
      customStatusActivity: h.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === T.ActivityTypes.CUSTOM_STATUS
      }),
      isMobileOnline: h.default.isMobileOnline(t.id)
    }
  });
  return (0, a.jsxs)("header", {
    className: I.header,
    children: [(0, a.jsx)(g.default, {
      user: t,
      displayProfile: n,
      profileType: _.UserProfileTypes.PANEL,
      animateOnHover: !m
    }), (0, a.jsx)(r.Clickable, {
      ...O,
      className: I.clickable,
      onClick: () => {
        y({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: M
        }), null == x || x()
      },
      children: (0, a.jsx)(A, {
        src: L,
        avatarDecoration: j,
        size: v,
        imageClassName: I.overlay,
        status: P ? r.StatusTypes.UNKNOWN : D,
        statusBackdropColor: R && !P ? (0, r.getStatusBackdropColor)(N) : void 0,
        "aria-label": t.username,
        isMobile: U,
        statusTooltip: !0,
        statusTooltipDelay: _.USER_PROFILE_TOOLTIP_DELAY
      })
    }), (0, a.jsx)(C.UserProfileCustomStatusBubble, {
      statusActivity: b,
      profileType: _.UserProfileTypes.PANEL
    })]
  })
}