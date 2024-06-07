"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("420660"),
  l = n("100527"),
  u = n("906732"),
  d = n("233440"),
  _ = n("199902"),
  c = n("158776"),
  E = n("74538"),
  I = n("998502"),
  T = n("785717"),
  f = n("204197"),
  S = n("652853"),
  h = n("228168"),
  A = n("981631"),
  m = n("474936"),
  N = n("579935");
let p = a.AvatarSizes.SIZE_80,
  O = I.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function C(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: I,
    channelId: C,
    animateOnHover: R,
    onOpenProfile: g
  } = e, {
    theme: L
  } = (0, S.useUserProfileThemeContext)(), {
    analyticsLocations: v
  } = (0, u.default)(l.default.AVATAR), {
    trackUserProfileAction: D
  } = (0, T.useUserProfileAnalyticsContext)(), M = E.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, m.PremiumTypes.TIER_2), y = r.useMemo(() => (0, d.shouldDisableUserPresenceInChannel)(t, C), [t, C]), {
    status: P,
    isMobileOnline: U
  } = (0, s.useStateFromStoresObject)([_.default, c.default], () => {
    let e = null != _.default.getAnyStreamForUser(t.id),
      n = c.default.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === A.ActivityTypes.PLAYING : n !== A.ActivityTypes.CUSTOM_STATUS
      });
    return {
      status: (0, o.default)(n) ? A.StatusTypes.STREAMING : c.default.getStatus(t.id),
      isMobileOnline: c.default.isMobileOnline(t.id)
    }
  }), {
    avatarDecorationSrc: b,
    avatarSrc: G,
    eventHandlers: w
  } = (0, f.default)({
    user: t,
    guildId: I,
    size: p,
    animateOnHover: R
  });
  return (0, i.jsx)(a.Clickable, {
    ...w,
    className: N.clickable,
    onClick: null == g ? void 0 : () => {
      D({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: v
      }), null == g || g()
    },
    children: (0, i.jsx)(O, {
      src: G,
      avatarDecoration: b,
      size: p,
      "aria-label": t.username,
      imageClassName: null != g ? N.overlay : void 0,
      status: y ? A.StatusTypes.UNKNOWN : P,
      statusBackdropColor: M && !y ? (0, a.getStatusBackdropColor)(L) : void 0,
      isMobile: U,
      statusTooltip: !0,
      statusTooltipDelay: h.USER_PROFILE_TOOLTIP_DELAY
    })
  })
}