"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  r = n("905322"),
  s = n("200207"),
  a = n("269210"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("100527"),
  f = n("906732"),
  p = n("87484"),
  m = n("171246"),
  g = n("889989"),
  v = n("696906"),
  h = n("55563"),
  S = n("551428"),
  C = n("626135"),
  x = n("768581"),
  T = n("73346"),
  L = n("624138"),
  R = n("591759"),
  j = n("601911"),
  _ = n("110742"),
  I = n("147496"),
  b = n("680005"),
  N = n("519896"),
  E = n("981631"),
  O = n("689938"),
  y = n("399461");

function A(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: s,
    storeLayout: a
  } = e, {
    subscriptions: p,
    otps: g
  } = a, v = l.useMemo(() => {
    var e, t;
    let i = new Set(p.map(e => e.id));
    return null !== (t = null == n ? void 0 : null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.filter(e => i.has(e.id))) && void 0 !== t ? t : []
  }, [null == n ? void 0 : n.subscription_listings, p]), h = l.useMemo(() => (0, j.findAppIconSrc)(t, 100), [t]), {
    bot: S
  } = t, T = l.useMemo(() => {
    var e;
    if ((null == S ? void 0 : S.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: S.id,
      banner: S.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [S]), L = l.useMemo(() => {
    var e;
    if ((null == S ? void 0 : S.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: S.id,
      banner: S.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [S]), _ = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), I = l.useMemo(() => [...v.map(e => e.id), ...g.map(e => e.id)], [v, g]), {
    analyticsLocations: b
  } = (0, f.default)(c.default.APP_STOREFRONT);
  return l.useEffect(() => {
    0 !== I.length && C.default.track(E.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: I,
      location_stack: b
    })
  }, [b, t.id, I]), (0, i.jsxs)("div", {
    className: y.wrapper,
    children: [(0, i.jsx)(r.Banner, {
      title: t.name,
      iconSrc: h,
      backgroundSrc: T,
      animatedBackgroundSrc: L,
      prefersReducedMotion: _
    }), v.length > 0 && null != n && (0, i.jsxs)("div", {
      className: y.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: O.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: y.productList,
        children: v.map(e => (0, i.jsx)(P, {
          appId: t.id,
          groupListingId: n.id,
          guildId: s,
          listing: e,
          groupListingType: (0, m.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), g.length > 0 && (0, i.jsxs)("div", {
      className: y.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: O.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: y.productList,
        children: g.map(e => (0, i.jsx)(M, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: y.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? O.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : O.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function P(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: r,
    listing: s,
    groupListingType: o
  } = e, {
    openModal: d
  } = (0, v.default)({
    guildId: r,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: E.AnalyticsLocations.APP_STOREFRONT,
    skuId: s.id
  }), c = l.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), f = l.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = R.default.toURLSafe((0, T.getAssetURL)(t, s.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, s.image_asset]), p = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
  return null === p ? null : (0, i.jsx)(a.SubscriptionCard, {
    title: s.name,
    description: s.description,
    imgSrc: f,
    subscriptionType: o,
    onPurchase: d,
    PurchaseButton: e => (0, i.jsx)(b.SubscriptionPurchaseButton, {
      ...e,
      appId: t,
      groupListingId: n,
      groupListingType: o,
      guildId: r,
      skuId: s.id,
      subPlan: p
    }),
    benefitItems: null != c ? c.map(e => (0, i.jsx)(a.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != c ? () => {
      (0, u.openModal)(e => {
        let {
          onClose: l,
          transitionState: r
        } = e;
        return (0, i.jsx)(N.SubscriptionDetailsModal, {
          appId: t,
          groupListingId: n,
          groupListingType: o,
          onClose: l,
          skuId: s.id,
          transitionState: r
        })
      })
    } : void 0
  })
}

function M(e) {
  var t, n, l, r;
  let {
    skuId: a,
    appId: d
  } = e, {
    analyticsLocations: m
  } = (0, f.default)(c.default.APP_STOREFRONT), g = (0, o.useStateFromStores)([S.default], () => S.default.getForSKU(a), [a]), v = (0, o.useStateFromStores)([h.default], () => h.default.get(a), [a]), C = (0, _.useHasActiveEntitlement)(a);
  if (null == v) return null;
  let x = null !== (n = v.name) && void 0 !== n ? n : "",
    j = null !== (l = null == g ? void 0 : null === (t = g.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== l ? l : void 0,
    N = (null == g ? void 0 : g.headerBackground) != null && null !== (r = R.default.toURLSafe((0, T.getAssetURL)(d, g.headerBackground, 256))) && void 0 !== r ? r : void 0,
    y = v.type === E.SKUTypes.DURABLE && C,
    A = v.type === E.SKUTypes.DURABLE ? y ? O.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : O.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: P
    } = v;
  return null == P ? null : (0, i.jsx)(s.ProductCard, {
    title: x,
    description: j,
    headerImage: N,
    availabilityLabel: A,
    onDetails: (0, L.isNullOrEmpty)(j) ? void 0 : () => {
      (0, u.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsx)(I.ItemDetailsModal, {
          appId: d,
          skuId: a,
          onClose: t,
          transitionState: n
        })
      })
    },
    PurchaseButton: e => (0, i.jsx)(b.ItemPurchaseButton, {
      ...e,
      appId: d,
      sku: v
    }),
    onPurchase: () => {
      (0, p.default)({
        applicationId: d,
        skuId: v.id,
        analyticsLocations: m
      })
    }
  })
}