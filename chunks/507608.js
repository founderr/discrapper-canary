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
  h = n("889989"),
  S = n("696906"),
  g = n("55563"),
  v = n("551428"),
  T = n("626135"),
  x = n("768581"),
  _ = n("73346"),
  I = n("624138"),
  C = n("591759"),
  E = n("110742"),
  L = n("147496"),
  j = n("680005"),
  N = n("519896"),
  R = n("981631"),
  b = n("689938"),
  y = n("399461");

function A(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: s,
    storeLayout: a
  } = e, {
    subscriptions: p,
    otps: h
  } = a, S = l.useMemo(() => {
    var e, t;
    let i = new Set(p.map(e => e.id));
    return null !== (t = null == n ? void 0 : null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.filter(e => i.has(e.id))) && void 0 !== t ? t : []
  }, [null == n ? void 0 : n.subscription_listings, p]), g = l.useMemo(() => {
    let e = t.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) {
        var n;
        return null !== (n = C.default.toURLSafe(t)) && void 0 !== n ? n : void 0
      }
    }
  }, [t]), {
    bot: v
  } = t, _ = l.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = C.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), I = l.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = C.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), E = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), L = l.useMemo(() => [...S.map(e => e.id), ...h.map(e => e.id)], [S, h]), {
    analyticsLocations: j
  } = (0, f.default)(c.default.APP_STOREFRONT);
  return l.useEffect(() => {
    0 !== L.length && T.default.track(R.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: L,
      location_stack: j
    })
  }, [j, t.id, L]), (0, i.jsxs)("div", {
    className: y.wrapper,
    children: [(0, i.jsx)(r.Banner, {
      title: t.name,
      iconSrc: g,
      backgroundSrc: _,
      animatedBackgroundSrc: I,
      prefersReducedMotion: E
    }), S.length > 0 && null != n && (0, i.jsxs)("div", {
      className: y.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: y.productList,
        children: S.map(e => (0, i.jsx)(O, {
          appId: t.id,
          groupListingId: n.id,
          guildId: s,
          listing: e,
          groupListingType: (0, m.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), h.length > 0 && (0, i.jsxs)("div", {
      className: y.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: y.productList,
        children: h.map(e => (0, i.jsx)(M, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: y.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? b.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : b.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function O(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: r,
    listing: s,
    groupListingType: o
  } = e, {
    openModal: d
  } = (0, S.default)({
    guildId: r,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: R.AnalyticsLocations.APP_STOREFRONT,
    skuId: s.id
  }), c = l.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, h.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), f = l.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = C.default.toURLSafe((0, _.getAssetURL)(t, s.image_asset, 256))) && void 0 !== e ? e : void 0
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
  } = (0, f.default)(c.default.APP_STOREFRONT), h = (0, o.useStateFromStores)([v.default], () => v.default.getForSKU(a), [a]), S = (0, o.useStateFromStores)([g.default], () => g.default.get(a), [a]), T = (0, E.useHasActiveEntitlement)(a);
  if (null == S) return null;
  let x = null !== (n = S.name) && void 0 !== n ? n : "",
    N = null !== (l = null == h ? void 0 : null === (t = h.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== l ? l : void 0,
    y = (null == h ? void 0 : h.headerBackground) != null && null !== (r = C.default.toURLSafe((0, _.getAssetURL)(d, h.headerBackground, 256))) && void 0 !== r ? r : void 0,
    A = S.type === R.SKUTypes.DURABLE && T,
    O = S.type === R.SKUTypes.DURABLE ? A ? b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: M
    } = S;
  return null == M ? null : (0, i.jsx)(s.ProductCard, {
    title: x,
    description: N,
    headerImage: y,
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
      sku: S
    }),
    onPurchase: () => {
      (0, p.default)({
        applicationId: d,
        skuId: S.id,
        analyticsLocations: m
      })
    }
  })
}