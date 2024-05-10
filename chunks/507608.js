"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
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
  f = n("906732"),
  p = n("87484"),
  m = n("171246"),
  S = n("889989"),
  h = n("696906"),
  g = n("55563"),
  v = n("551428"),
  x = n("626135"),
  T = n("768581"),
  C = n("73346"),
  I = n("624138"),
  E = n("591759"),
  _ = n("110742"),
  L = n("147496"),
  j = n("680005"),
  N = n("519896"),
  R = n("981631"),
  y = n("689938"),
  A = n("399461");

function b(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: s,
    storeLayout: a
  } = e, {
    subscriptions: p,
    otps: S
  } = a, h = r.useMemo(() => {
    var e, t;
    let i = new Set(p.map(e => e.id));
    return null !== (t = null == n ? void 0 : null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.filter(e => i.has(e.id))) && void 0 !== t ? t : []
  }, [null == n ? void 0 : n.subscription_listings, p]), g = r.useMemo(() => {
    let e = t.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) {
        var n;
        return null !== (n = E.default.toURLSafe(t)) && void 0 !== n ? n : void 0
      }
    }
  }, [t]), {
    bot: v
  } = t, C = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, T.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = E.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), I = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, T.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = E.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), _ = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), L = r.useMemo(() => [...h.map(e => e.id), ...S.map(e => e.id)], [h, S]), {
    analyticsLocations: j
  } = (0, f.default)(c.default.APP_STOREFRONT);
  return r.useEffect(() => {
    0 !== L.length && x.default.track(R.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: L,
      location_stack: j
    })
  }, [j, t.id, L]), (0, i.jsxs)("div", {
    className: A.wrapper,
    children: [(0, i.jsx)(l.Banner, {
      title: t.name,
      iconSrc: g,
      backgroundSrc: C,
      animatedBackgroundSrc: I,
      prefersReducedMotion: _
    }), h.length > 0 && null != n && (0, i.jsxs)("div", {
      className: A.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: y.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: A.productList,
        children: h.map(e => (0, i.jsx)(O, {
          appId: t.id,
          groupListingId: n.id,
          guildId: s,
          listing: e,
          groupListingType: (0, m.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), S.length > 0 && (0, i.jsxs)("div", {
      className: A.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: y.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: A.productList,
        children: S.map(e => (0, i.jsx)(M, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: A.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? y.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : y.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function O(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: l,
    listing: s,
    groupListingType: o
  } = e, {
    openModal: d
  } = (0, h.default)({
    listing: s,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: R.AnalyticsLocations.APP_STOREFRONT
  }), c = r.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, S.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), f = r.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = E.default.toURLSafe((0, C.getAssetURL)(t, s.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, s.image_asset]), p = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
  return null === p ? null : (0, i.jsx)(a.SubscriptionCard, {
    title: s.name,
    description: s.description,
    imgSrc: f,
    subscriptionType: o,
    onPurchase: d,
    PurchaseButton: e => (0, i.jsx)(j.SubscriptionPurchaseButton, {
      ...e,
      appId: t,
      listing: s,
      groupListingId: n,
      groupListingType: o,
      guildId: l,
      subPlan: p
    }),
    benefitItems: null != c ? c.map(e => (0, i.jsx)(a.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != c ? () => {
      (0, u.openModal)(e => {
        let {
          onClose: r,
          transitionState: l
        } = e;
        return (0, i.jsx)(N.SubscriptionDetailsModal, {
          appId: t,
          groupListingId: n,
          groupListingType: o,
          listing: s,
          onClose: r,
          transitionState: l
        })
      })
    } : void 0
  })
}

function M(e) {
  var t, n, r, l;
  let {
    skuId: a,
    appId: d
  } = e, {
    analyticsLocations: m
  } = (0, f.default)(c.default.APP_STOREFRONT), S = (0, o.useStateFromStores)([v.default], () => v.default.getForSKU(a), [a]), h = (0, o.useStateFromStores)([g.default], () => g.default.get(a), [a]), x = (0, _.useHasActiveEntitlement)(a);
  if (null == h) return null;
  let T = null !== (n = h.name) && void 0 !== n ? n : "",
    N = null !== (r = null == S ? void 0 : null === (t = S.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
    A = (null == S ? void 0 : S.headerBackground) != null && null !== (l = E.default.toURLSafe((0, C.getAssetURL)(d, S.headerBackground, 256))) && void 0 !== l ? l : void 0,
    b = h.type === R.SKUTypes.DURABLE && x,
    O = h.type === R.SKUTypes.DURABLE ? b ? y.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : y.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: M
    } = h;
  return null == M ? null : (0, i.jsx)(s.ProductCard, {
    title: T,
    description: N,
    headerImage: A,
    availabilityLabel: O,
    onDetails: (0, I.isNullOrEmpty)(N) ? void 0 : () => {
      (0, u.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsx)(L.ItemDetailsModal, {
          appId: d,
          skuId: a,
          onClose: t,
          transitionState: n
        })
      })
    },
    PurchaseButton: e => (0, i.jsx)(j.ItemPurchaseButton, {
      ...e,
      appId: d,
      sku: h
    }),
    onPurchase: () => {
      (0, p.default)({
        applicationId: d,
        skuId: h.id,
        analyticsLocations: m
      })
    }
  })
}