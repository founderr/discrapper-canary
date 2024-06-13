"use strict";
n.r(t), n.d(t, {
  AppStorefront: function() {
    return U
  },
  ProductCardContainer: function() {
    return E
  },
  SubscriptionCardContainer: function() {
    return y
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("905322"),
  s = n("200207"),
  a = n("269210"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("100527"),
  p = n("906732"),
  m = n("87484"),
  f = n("171246"),
  g = n("889989"),
  v = n("696906"),
  S = n("55563"),
  h = n("551428"),
  x = n("626135"),
  T = n("768581"),
  b = n("73346"),
  I = n("624138"),
  R = n("591759"),
  j = n("601911"),
  _ = n("110742"),
  P = n("147496"),
  L = n("680005"),
  A = n("519896"),
  N = n("981631"),
  O = n("689938"),
  k = n("399461");

function U(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: s,
    subscriptionListings: a,
    otpListings: m
  } = e, g = r.useMemo(() => (0, j.findAppIconSrc)(t, 100), [t]), {
    bot: v
  } = t, S = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, T.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), h = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, T.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), b = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), I = r.useMemo(() => [...a.map(e => e.id), ...m.map(e => e.id)], [a, m]), {
    analyticsLocations: _
  } = (0, p.default)(c.default.APP_STOREFRONT);
  return r.useEffect(() => {
    0 !== I.length && x.default.track(N.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: I,
      location_stack: _
    })
  }, [_, t.id, I]), (0, i.jsxs)("div", {
    className: k.wrapper,
    children: [(0, i.jsx)(l.Banner, {
      title: t.name,
      iconSrc: g,
      backgroundSrc: S,
      animatedBackgroundSrc: h,
      prefersReducedMotion: b
    }), a.length > 0 && null != n && (0, i.jsxs)("div", {
      className: k.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: O.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: k.productList,
        children: a.map(e => (0, i.jsx)(y, {
          appId: t.id,
          groupListingId: n.id,
          guildId: s,
          listing: e,
          groupListingType: (0, f.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), m.length > 0 && (0, i.jsxs)("div", {
      className: k.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: O.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: k.productList,
        children: m.map(e => (0, i.jsx)(E, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: k.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? O.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : O.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function y(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: l,
    listing: s,
    groupListingType: o,
    onDetails: d
  } = e, {
    openModal: c
  } = (0, v.default)({
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: N.AnalyticsLocations.APP_STOREFRONT,
    skuId: s.id
  }), p = r.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), m = r.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = R.default.toURLSafe((0, b.getAssetURL)(t, s.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, s.image_asset]), f = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
  return null === f ? null : (0, i.jsx)(a.SubscriptionCard, {
    title: s.name,
    description: s.description,
    imgSrc: m,
    subscriptionType: o,
    onPurchase: c,
    PurchaseButton: e => (0, i.jsx)(L.SubscriptionPurchaseButton, {
      ...e,
      appId: t,
      groupListingId: n,
      groupListingType: o,
      guildId: l,
      skuId: s.id,
      subPlan: f
    }),
    benefitItems: null != p ? p.map(e => (0, i.jsx)(a.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != d ? d : null != p ? () => {
      (0, u.openModal)(e => {
        let {
          onClose: r,
          transitionState: l
        } = e;
        return (0, i.jsx)(A.SubscriptionDetailsModal, {
          appId: t,
          groupListingId: n,
          groupListingType: o,
          onClose: r,
          skuId: s.id,
          transitionState: l
        })
      })
    } : void 0
  })
}

function E(e) {
  var t, n, r, l;
  let {
    skuId: a,
    appId: d,
    onDetails: f
  } = e, {
    analyticsLocations: g
  } = (0, p.default)(c.default.APP_STOREFRONT), v = (0, o.useStateFromStores)([h.default], () => h.default.getForSKU(a), [a]), x = (0, o.useStateFromStores)([S.default], () => S.default.get(a), [a]), T = (0, _.useHasActiveEntitlement)(a);
  if (null == x) return null;
  let j = null !== (n = x.name) && void 0 !== n ? n : "",
    A = null !== (r = null == v ? void 0 : null === (t = v.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
    k = (null == v ? void 0 : v.headerBackground) != null && null !== (l = R.default.toURLSafe((0, b.getAssetURL)(d, v.headerBackground, 256))) && void 0 !== l ? l : void 0,
    U = x.type === N.SKUTypes.DURABLE && T,
    y = x.type === N.SKUTypes.DURABLE ? U ? O.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : O.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: E
    } = x;
  return null == E ? null : (0, i.jsx)(s.ProductCard, {
    title: j,
    description: A,
    headerImage: k,
    availabilityLabel: y,
    onDetails: null != f ? f : (0, I.isNullOrEmpty)(A) ? void 0 : () => {
      (0, u.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsx)(P.ItemDetailsModal, {
          appId: d,
          skuId: a,
          onClose: t,
          transitionState: n
        })
      })
    },
    PurchaseButton: e => (0, i.jsx)(L.ItemPurchaseButton, {
      ...e,
      appId: d,
      sku: x
    }),
    onPurchase: () => {
      (0, m.default)({
        applicationId: d,
        skuId: x.id,
        analyticsLocations: g
      })
    }
  })
}