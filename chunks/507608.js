"use strict";
n.r(t), n.d(t, {
  AppStorefront: function() {
    return C
  },
  ProductCardContainer: function() {
    return E
  },
  SubscriptionCardContainer: function() {
    return j
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  a = n("905322"),
  r = n("200207"),
  s = n("269210"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("100527"),
  p = n("906732"),
  f = n("87484"),
  S = n("171246"),
  g = n("889989"),
  v = n("696906"),
  m = n("55563"),
  h = n("551428"),
  I = n("626135"),
  b = n("768581"),
  A = n("73346"),
  T = n("624138"),
  P = n("591759"),
  _ = n("601911"),
  x = n("110742"),
  y = n("147496"),
  N = n("680005"),
  L = n("519896"),
  O = n("981631"),
  R = n("689938"),
  U = n("399461");

function C(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: r,
    subscriptionListings: s,
    otpListings: f
  } = e, g = l.useMemo(() => (0, _.findAppIconSrc)(t, 100), [t]), {
    bot: v
  } = t, m = l.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, b.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = P.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), h = l.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, b.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = P.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), A = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), T = l.useMemo(() => [...s.map(e => e.id), ...f.map(e => e.id)], [s, f]), {
    analyticsLocations: x
  } = (0, p.default)(c.default.APP_STOREFRONT);
  return l.useEffect(() => {
    0 !== T.length && I.default.track(O.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: T,
      location_stack: x
    })
  }, [x, t.id, T]), (0, i.jsxs)("div", {
    className: U.wrapper,
    children: [(0, i.jsx)(a.Banner, {
      title: t.name,
      iconSrc: g,
      backgroundSrc: m,
      animatedBackgroundSrc: h,
      prefersReducedMotion: A
    }), s.length > 0 && null != n && (0, i.jsxs)("div", {
      className: U.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: R.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: U.productList,
        children: s.map(e => (0, i.jsx)(j, {
          appId: t.id,
          groupListingId: n.id,
          guildId: r,
          listing: e,
          groupListingType: (0, S.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), f.length > 0 && (0, i.jsxs)("div", {
      className: U.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: R.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: U.productList,
        children: f.map(e => (0, i.jsx)(E, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: U.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? R.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : R.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function j(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: a,
    listing: r,
    groupListingType: o
  } = e, {
    openModal: d
  } = (0, v.default)({
    guildId: a,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: O.AnalyticsLocations.APP_STOREFRONT,
    skuId: r.id
  }), c = l.useMemo(() => {
    var e;
    return null === (e = r.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.getBenefitIcon)(t, e.icon)
    }))
  }, [t, r.store_listing_benefits]), p = l.useMemo(() => {
    var e;
    return null != r.image_asset && null !== (e = P.default.toURLSafe((0, A.getAssetURL)(t, r.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, r.image_asset]), f = r.subscription_plans.length > 0 ? r.subscription_plans[0] : null;
  return null === f ? null : (0, i.jsx)(s.SubscriptionCard, {
    title: r.name,
    description: r.description,
    imgSrc: p,
    subscriptionType: o,
    onPurchase: d,
    PurchaseButton: e => (0, i.jsx)(N.SubscriptionPurchaseButton, {
      ...e,
      appId: t,
      groupListingId: n,
      groupListingType: o,
      guildId: a,
      skuId: r.id,
      subPlan: f
    }),
    benefitItems: null != c ? c.map(e => (0, i.jsx)(s.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != c ? () => {
      (0, u.openModal)(e => {
        let {
          onClose: l,
          transitionState: s
        } = e;
        return (0, i.jsx)(L.SubscriptionDetailsModal, {
          appId: t,
          groupListingId: n,
          groupListingType: o,
          guildId: a,
          onClose: l,
          skuId: r.id,
          transitionState: s
        })
      })
    } : void 0
  })
}

function E(e) {
  var t, n, l, a;
  let {
    skuId: s,
    appId: d
  } = e, {
    analyticsLocations: S
  } = (0, p.default)(c.default.APP_STOREFRONT), g = (0, o.useStateFromStores)([h.default], () => h.default.getForSKU(s), [s]), v = (0, o.useStateFromStores)([m.default], () => m.default.get(s), [s]), I = (0, x.useHasActiveEntitlement)(s);
  if (null == v) return null;
  let b = null !== (n = v.name) && void 0 !== n ? n : "",
    _ = null !== (l = null == g ? void 0 : null === (t = g.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== l ? l : void 0,
    L = (null == g ? void 0 : g.headerBackground) != null && null !== (a = P.default.toURLSafe((0, A.getAssetURL)(d, g.headerBackground, 256))) && void 0 !== a ? a : void 0,
    U = v.type === O.SKUTypes.DURABLE && I,
    C = v.type === O.SKUTypes.DURABLE ? U ? R.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : R.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: j
    } = v;
  return null == j ? null : (0, i.jsx)(r.ProductCard, {
    title: b,
    description: _,
    headerImage: L,
    availabilityLabel: C,
    onDetails: (0, T.isNullOrEmpty)(_) ? void 0 : () => {
      (0, u.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsx)(y.ItemDetailsModal, {
          appId: d,
          skuId: s,
          onClose: t,
          transitionState: n
        })
      })
    },
    PurchaseButton: e => (0, i.jsx)(N.ItemPurchaseButton, {
      ...e,
      appId: d,
      sku: v
    }),
    onPurchase: () => {
      (0, f.default)({
        applicationId: d,
        skuId: v.id,
        analyticsLocations: S
      })
    }
  })
}