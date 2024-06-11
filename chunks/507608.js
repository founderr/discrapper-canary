"use strict";
i.r(t), i.d(t, {
  default: function() {
    return P
  }
}), i("47120");
var n = i("735250"),
  l = i("470079"),
  s = i("905322"),
  a = i("200207"),
  r = i("269210"),
  o = i("442837"),
  d = i("481060"),
  u = i("607070"),
  c = i("100527"),
  p = i("906732"),
  f = i("87484"),
  m = i("171246"),
  g = i("889989"),
  v = i("696906"),
  h = i("55563"),
  C = i("551428"),
  S = i("626135"),
  x = i("768581"),
  T = i("73346"),
  L = i("624138"),
  R = i("591759"),
  j = i("601911"),
  _ = i("110742"),
  I = i("147496"),
  E = i("680005"),
  N = i("519896"),
  O = i("981631"),
  b = i("689938"),
  A = i("399461");

function P(e) {
  let {
    app: t,
    subscriptionGroupListing: i,
    guildId: a,
    storeLayout: r
  } = e, {
    subscriptions: f,
    otps: g
  } = r, v = l.useMemo(() => {
    var e, t;
    let n = new Set(f.map(e => e.id));
    return null !== (t = null == i ? void 0 : null === (e = i.subscription_listings) || void 0 === e ? void 0 : e.filter(e => n.has(e.id))) && void 0 !== t ? t : []
  }, [null == i ? void 0 : i.subscription_listings, f]), h = l.useMemo(() => (0, j.findAppIconSrc)(t, 100), [t]), {
    bot: C
  } = t, T = l.useMemo(() => {
    var e;
    if ((null == C ? void 0 : C.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: C.id,
      banner: C.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [C]), L = l.useMemo(() => {
    var e;
    if ((null == C ? void 0 : C.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: C.id,
      banner: C.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [C]), _ = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), I = l.useMemo(() => [...v.map(e => e.id), ...g.map(e => e.id)], [v, g]), {
    analyticsLocations: E
  } = (0, p.default)(c.default.APP_STOREFRONT);
  return l.useEffect(() => {
    0 !== I.length && S.default.track(O.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: I,
      location_stack: E
    })
  }, [E, t.id, I]), (0, n.jsxs)("div", {
    className: A.wrapper,
    children: [(0, n.jsx)(s.Banner, {
      title: t.name,
      iconSrc: h,
      backgroundSrc: T,
      animatedBackgroundSrc: L,
      prefersReducedMotion: _
    }), v.length > 0 && null != i && (0, n.jsxs)("div", {
      className: A.productSection,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, n.jsx)("div", {
        className: A.productList,
        children: v.map(e => (0, n.jsx)(M, {
          appId: t.id,
          groupListingId: i.id,
          guildId: a,
          listing: e,
          groupListingType: (0, m.isApplicationUserSubscription)(i.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), g.length > 0 && (0, n.jsxs)("div", {
      className: A.productSection,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, n.jsx)("div", {
        className: A.productList,
        children: g.map(e => (0, n.jsx)(y, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, n.jsx)(d.Text, {
      variant: "text-md/normal",
      className: A.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? b.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : b.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function M(e) {
  let {
    appId: t,
    groupListingId: i,
    guildId: s,
    listing: a,
    groupListingType: o
  } = e, {
    openModal: u
  } = (0, v.default)({
    guildId: s,
    groupListingId: i,
    showBenefitsFirst: !1,
    analyticsLocation: O.AnalyticsLocations.APP_STOREFRONT,
    skuId: a.id
  }), c = l.useMemo(() => {
    var e;
    return null === (e = a.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.getBenefitIcon)(t, e.icon)
    }))
  }, [t, a.store_listing_benefits]), p = l.useMemo(() => {
    var e;
    return null != a.image_asset && null !== (e = R.default.toURLSafe((0, T.getAssetURL)(t, a.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, a.image_asset]), f = a.subscription_plans.length > 0 ? a.subscription_plans[0] : null;
  return null === f ? null : (0, n.jsx)(r.SubscriptionCard, {
    title: a.name,
    description: a.description,
    imgSrc: p,
    subscriptionType: o,
    onPurchase: u,
    PurchaseButton: e => (0, n.jsx)(E.SubscriptionPurchaseButton, {
      ...e,
      appId: t,
      groupListingId: i,
      groupListingType: o,
      guildId: s,
      skuId: a.id,
      subPlan: f
    }),
    benefitItems: null != c ? c.map(e => (0, n.jsx)(r.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != c ? () => {
      (0, d.openModal)(e => {
        let {
          onClose: l,
          transitionState: r
        } = e;
        return (0, n.jsx)(N.SubscriptionDetailsModal, {
          appId: t,
          groupListingId: i,
          groupListingType: o,
          guildId: s,
          onClose: l,
          skuId: a.id,
          transitionState: r
        })
      })
    } : void 0
  })
}

function y(e) {
  var t, i, l, s;
  let {
    skuId: r,
    appId: u
  } = e, {
    analyticsLocations: m
  } = (0, p.default)(c.default.APP_STOREFRONT), g = (0, o.useStateFromStores)([C.default], () => C.default.getForSKU(r), [r]), v = (0, o.useStateFromStores)([h.default], () => h.default.get(r), [r]), S = (0, _.useHasActiveEntitlement)(r);
  if (null == v) return null;
  let x = null !== (i = v.name) && void 0 !== i ? i : "",
    j = null !== (l = null == g ? void 0 : null === (t = g.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== l ? l : void 0,
    N = (null == g ? void 0 : g.headerBackground) != null && null !== (s = R.default.toURLSafe((0, T.getAssetURL)(u, g.headerBackground, 256))) && void 0 !== s ? s : void 0,
    A = v.type === O.SKUTypes.DURABLE && S,
    P = v.type === O.SKUTypes.DURABLE ? A ? b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: M
    } = v;
  return null == M ? null : (0, n.jsx)(a.ProductCard, {
    title: x,
    description: j,
    headerImage: N,
    availabilityLabel: P,
    onDetails: (0, L.isNullOrEmpty)(j) ? void 0 : () => {
      (0, d.openModal)(e => {
        let {
          onClose: t,
          transitionState: i
        } = e;
        return (0, n.jsx)(I.ItemDetailsModal, {
          appId: u,
          skuId: r,
          onClose: t,
          transitionState: i
        })
      })
    },
    PurchaseButton: e => (0, n.jsx)(E.ItemPurchaseButton, {
      ...e,
      appId: u,
      sku: v
    }),
    onPurchase: () => {
      (0, f.default)({
        applicationId: u,
        skuId: v.id,
        analyticsLocations: m
      })
    }
  })
}