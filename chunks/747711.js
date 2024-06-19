n(47120);
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(680295),
  a = n(158776),
  r = n(735336),
  o = n(184325),
  c = n(131640),
  u = n(228168),
  d = n(651448);
t.Z = e => {
  let {
    user: t,
    displayProfile: n,
    channel: h,
    animateAssets: m,
    forceShowPremiumBadge: p
  } = e, E = t.isNonUserBot(), [g, f] = (0, i.Wu)([a.Z], () => [E ? null : a.Z.getStatus(t.id), a.Z.isMobileOnline(t.id)]), C = null == n ? void 0 : n.profileEffectId;
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(r.Z, {
      user: t,
      displayProfile: n,
      profileType: u.y0.PANEL,
      showPremiumBadgeUpsell: !0,
      isHovering: p,
      animateOnHover: !m
    }), (0, l.jsx)(c.tZ, {
      user: t,
      displayProfile: n,
      status: g,
      isMobile: f,
      channelId: h.id,
      disableUserProfileLink: !0,
      hasBanner: (null == n ? void 0 : n.banner) != null,
      profileType: u.y0.PANEL,
      animateOnHover: !m
    }), (0, l.jsx)("div", {
      className: d.badgelistGroup,
      children: (0, l.jsx)(o.Z, {
        className: d.badgeList,
        user: t,
        size: o.V.SIZE_22
      })
    }), null != C && (0, l.jsx)(s.Z, {
      profileEffectId: C,
      maxLoops: 0,
      resetOnHover: !0,
      isHovering: p,
      urlQueryString: "dm-view",
      noBorderRadius: !0
    })]
  })
}