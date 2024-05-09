"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("905322"),
  s = n("512100"),
  a = n("200207"),
  o = n("269210"),
  d = n("752843"),
  u = n("368072"),
  c = n("790472"),
  f = n("442837"),
  p = n("481060"),
  h = n("607070"),
  m = n("100527"),
  S = n("906732"),
  v = n("87484"),
  g = n("171246"),
  x = n("889989"),
  T = n("696906"),
  C = n("55563"),
  E = n("551428"),
  I = n("626135"),
  j = n("768581"),
  _ = n("73346"),
  N = n("624138"),
  L = n("591759"),
  R = n("110742"),
  y = n("680005"),
  A = n("981631"),
  b = n("689938"),
  O = n("399461");

function P(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: s,
    storeLayout: a
  } = e, {
    subscriptions: o,
    otps: d
  } = a, u = r.useMemo(() => {
    var e, t;
    let i = new Set(o.map(e => e.id));
    return null !== (t = null == n ? void 0 : null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.filter(e => i.has(e.id))) && void 0 !== t ? t : []
  }, [null == n ? void 0 : n.subscription_listings, o]), c = r.useMemo(() => {
    let e = t.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) {
        var n;
        return null !== (n = L.default.toURLSafe(t)) && void 0 !== n ? n : void 0
      }
    }
  }, [t]), {
    bot: v
  } = t, x = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, j.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = L.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), T = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, j.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = L.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), C = (0, f.useStateFromStores)([h.default], () => h.default.useReducedMotion), E = r.useMemo(() => [...u.map(e => e.id), ...d.map(e => e.id)], [u, d]), {
    analyticsLocations: _
  } = (0, S.default)(m.default.APP_STOREFRONT);
  return r.useEffect(() => {
    0 !== E.length && I.default.track(A.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: E,
      location_stack: _
    })
  }, [_, t.id, E]), (0, i.jsxs)("div", {
    className: O.wrapper,
    children: [(0, i.jsx)(l.Banner, {
      title: t.name,
      iconSrc: c,
      backgroundSrc: x,
      animatedBackgroundSrc: T,
      prefersReducedMotion: C
    }), u.length > 0 && null != n && (0, i.jsxs)("div", {
      className: O.productSection,
      children: [(0, i.jsx)(p.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: O.productList,
        children: u.map(e => (0, i.jsx)(M, {
          appId: t.id,
          groupListingId: n.id,
          guildId: s,
          listing: e,
          groupListingType: (0, g.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), d.length > 0 && (0, i.jsxs)("div", {
      className: O.productSection,
      children: [(0, i.jsx)(p.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: O.productList,
        children: d.map(e => (0, i.jsx)(B, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(p.Text, {
      variant: "text-md/normal",
      className: O.legalText,
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
    groupListingId: n,
    guildId: l,
    listing: s,
    groupListingType: a
  } = e, {
    openModal: c
  } = (0, T.default)({
    listing: s,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: A.AnalyticsLocations.APP_STOREFRONT
  }), f = r.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, x.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), h = r.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = L.default.toURLSafe((0, _.getAssetURL)(t, s.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, s.image_asset]), m = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
  if (null === m) return null;
  let S = e => (0, i.jsx)(y.SubscriptionPurchaseButton, {
    ...e,
    appId: t,
    listing: s,
    groupListingId: n,
    groupListingType: a,
    guildId: l,
    subPlan: m
  });
  return (0, i.jsx)(o.SubscriptionCard, {
    title: s.name,
    description: s.description,
    imgSrc: h,
    subscriptionType: a,
    onPurchase: c,
    PurchaseButton: S,
    benefitItems: null != f ? f.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != f ? () => {
      (0, p.openModal)(e => {
        let {
          onClose: n,
          transitionState: r
        } = e;
        return (0, i.jsxs)(p.ModalRoot, {
          transitionState: r,
          size: p.ModalSize.DYNAMIC,
          className: O.subDetailsModal,
          children: [(0, i.jsx)(U, {
            appId: t,
            skuId: s.id,
            benefits: f.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: s.description,
            imgSrc: h,
            title: s.name,
            tag: (0, i.jsx)(d.SubscriptionTag, {
              type: a
            }),
            onClose: n,
            FallbackIcon: u.BadgeIcon
          }), (0, i.jsxs)(p.ModalFooter, {
            className: O.footer,
            children: [(0, i.jsx)(p.Button, {
              className: O.backButton,
              onClick: n,
              look: p.ButtonLooks.BLANK,
              children: (0, i.jsx)(p.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: b.default.Messages.BACK
              })
            }), (0, i.jsx)(S, {})]
          })]
        })
      })
    } : void 0
  })
}

function B(e) {
  var t, n, r, l;
  let {
    skuId: s,
    appId: o
  } = e, {
    analyticsLocations: u
  } = (0, S.default)(m.default.APP_STOREFRONT), h = (0, f.useStateFromStores)([E.default], () => E.default.getForSKU(s), [s]), g = (0, f.useStateFromStores)([C.default], () => C.default.get(s), [s]), x = (0, R.useHasActiveEntitlement)(s);
  if (null == g) return null;
  let T = null !== (n = g.name) && void 0 !== n ? n : "",
    I = null !== (r = null == h ? void 0 : null === (t = h.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
    j = (null == h ? void 0 : h.headerBackground) != null && null !== (l = L.default.toURLSafe((0, _.getAssetURL)(o, h.headerBackground, 256))) && void 0 !== l ? l : void 0,
    P = g.type === A.SKUTypes.DURABLE && x,
    M = g.type === A.SKUTypes.DURABLE ? P ? b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: B
    } = g;
  if (null == B) return null;
  let k = e => (0, i.jsx)(y.ItemPurchaseButton, {
    ...e,
    appId: o,
    sku: g
  });
  return (0, i.jsx)(a.ProductCard, {
    title: T,
    description: I,
    headerImage: j,
    availabilityLabel: M,
    onDetails: (0, N.isNullOrEmpty)(I) ? void 0 : () => {
      (0, p.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(p.ModalRoot, {
          transitionState: n,
          size: p.ModalSize.DYNAMIC,
          className: O.subDetailsModal,
          children: [(0, i.jsx)(U, {
            appId: o,
            skuId: g.id,
            title: T,
            description: I,
            imgSrc: j,
            tag: null != M ? (0, i.jsx)(d.Tag, {
              text: M
            }) : void 0,
            onClose: t,
            FallbackIcon: c.TicketIcon
          }), (0, i.jsxs)(p.ModalFooter, {
            className: O.footer,
            children: [(0, i.jsx)(p.Button, {
              className: O.backButton,
              onClick: t,
              look: p.ButtonLooks.BLANK,
              children: (0, i.jsx)(p.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: b.default.Messages.BACK
              })
            }), (0, i.jsx)(k, {})]
          })]
        })
      })
    },
    PurchaseButton: k,
    onPurchase: () => {
      (0, v.default)({
        applicationId: o,
        skuId: g.id,
        analyticsLocations: u
      })
    }
  })
}

function U(e) {
  let {
    appId: t,
    skuId: n,
    ...l
  } = e, {
    analyticsLocations: a
  } = (0, S.default)();
  return r.useEffect(() => {
    I.default.track(A.AnalyticEvents.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: t,
      sku_id: n,
      location_stack: a
    })
  }, [a, t, n]), (0, i.jsx)(s.CardDetails, {
    ...l
  })
}