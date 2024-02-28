"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("635471"),
  i = n("824563"),
  r = n("289918"),
  u = n("590006"),
  o = n("935409"),
  d = n("590456"),
  c = n("290850"),
  f = e => {
    let {
      user: t,
      displayProfile: n,
      channel: f,
      animateAssets: h,
      forceShowPremiumBadge: m
    } = e, p = t.isNonUserBot(), [E, g] = (0, a.useStateFromStoresArray)([i.default], () => [p ? null : i.default.getStatus(t.id), i.default.isMobileOnline(t.id)]), C = null == n ? void 0 : n.profileEffectId;
    return (0, l.jsxs)("div", {
      children: [(0, l.jsx)(r.default, {
        user: t,
        displayProfile: n,
        profileType: d.UserProfileTypes.PANEL,
        showPremiumBadgeUpsell: !0,
        isHovering: m,
        animateOnHover: !h
      }), (0, l.jsx)(o.UserPopoutAvatar, {
        user: t,
        displayProfile: n,
        status: E,
        isMobile: g,
        channelId: f.id,
        disableUserProfileLink: !0,
        hasBanner: (null == n ? void 0 : n.banner) != null,
        profileType: d.UserProfileTypes.PANEL,
        animateOnHover: !h
      }), (0, l.jsx)("div", {
        className: c.badgelistGroup,
        children: (0, l.jsx)(u.default, {
          className: c.badgeList,
          user: t,
          size: u.BadgeSizes.SIZE_22
        })
      }), null != C && (0, l.jsx)(s.default, {
        profileEffectId: C,
        maxLoops: 0,
        resetOnHover: !0,
        isHovering: m,
        urlQueryString: "dm-view",
        noBorderRadius: !0
      })]
    })
  }