t.r(n), t.d(n, {
  SubscriptionDetailsModal: function() {
    return p
  }
});
var i = t(735250),
  l = t(470079),
  r = t(269210),
  s = t(752843),
  o = t(481060),
  a = t(789703),
  c = t(889989),
  d = t(73346),
  u = t(591759),
  m = t(886253),
  S = t(680005),
  _ = t(938337);

function p(e) {
  let {
    appId: n,
    groupListingId: t,
    groupListingType: p,
    guildId: f,
    onClose: h,
    skuId: I,
    transitionState: x,
    onHeaderTitleClick: T
  } = e, v = (0, a.I)(I), E = l.useMemo(() => {
    var e;
    return (null == v ? void 0 : v.image_asset) != null && null !== (e = u.Z.toURLSafe((0, d._W)(n, v.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [n, null == v ? void 0 : v.image_asset]), N = l.useMemo(() => {
    let e = null == v ? void 0 : v.store_listing_benefits;
    if (null != e && 0 !== e.length) return e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, c.n)(n, e.icon)
    }))
  }, [n, null == v ? void 0 : v.store_listing_benefits]);
  if (null == v) return null;
  let g = v.subscription_plans.length > 0 ? v.subscription_plans[0] : null;
  return null == g ? null : (0, i.jsx)(m.A, {
    appId: n,
    skuId: I,
    transitionState: x,
    onHeaderTitleClick: null != T ? T : h,
    onClose: h,
    footer: (0, i.jsx)(S.p, {
      appId: n,
      groupListingId: t,
      groupListingType: p,
      guildId: f,
      skuId: I,
      subPlan: g
    }),
    children: (0, i.jsx)(_.i, {
      appId: n,
      skuId: I,
      benefits: null != N ? N.map(e => (0, i.jsx)(r.G, {
        name: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : void 0,
      description: v.description,
      imgSrc: E,
      title: v.name,
      tag: (0, i.jsx)(s.Z, {
        type: p
      }),
      FallbackIcon: o.BadgeIcon
    })
  })
}