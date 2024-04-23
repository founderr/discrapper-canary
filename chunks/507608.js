"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("905322"),
  s = n("512100"),
  a = n("200207"),
  o = n("269210"),
  c = n("752843"),
  d = n("368072"),
  u = n("790472"),
  f = n("442837"),
  m = n("481060"),
  p = n("607070"),
  h = n("100527"),
  S = n("906732"),
  v = n("87484"),
  x = n("171246"),
  g = n("889989"),
  T = n("696906"),
  C = n("551428"),
  j = n("626135"),
  N = n("768581"),
  E = n("937615"),
  I = n("73346"),
  _ = n("624138"),
  L = n("591759"),
  R = n("110742"),
  y = n("981631"),
  A = n("474936"),
  b = n("689938"),
  O = n("836092");

function M(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: s,
    products: a
  } = e, o = r.useMemo(() => {
    var e, t;
    return null !== (t = null == n ? void 0 : null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.filter(e => e.published)) && void 0 !== t ? t : []
  }, [null == n ? void 0 : n.subscription_listings]), c = r.useMemo(() => {
    let e = t.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) {
        var n;
        return null !== (n = L.default.toURLSafe(t)) && void 0 !== n ? n : void 0
      }
    }
  }, [t]), {
    bot: d
  } = t, u = r.useMemo(() => {
    var e;
    if ((null == d ? void 0 : d.banner) == null) return;
    let t = (0, N.getUserBannerURL)({
      id: d.id,
      banner: d.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = L.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [d]), v = r.useMemo(() => {
    var e;
    if ((null == d ? void 0 : d.banner) == null) return;
    let t = (0, N.getUserBannerURL)({
      id: d.id,
      banner: d.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = L.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [d]), g = (0, f.useStateFromStores)([p.default], () => p.default.useReducedMotion), T = r.useMemo(() => [...o.map(e => e.id), ...a.map(e => e.id)], [o, a]), {
    analyticsLocations: C
  } = (0, S.default)(h.default.APP_STOREFRONT);
  return r.useEffect(() => {
    j.default.track(y.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: T,
      location_stack: C
    })
  }, [C, t.id, T]), (0, i.jsxs)("div", {
    className: O.wrapper,
    children: [(0, i.jsx)(l.Banner, {
      title: t.name,
      iconSrc: c,
      backgroundSrc: u,
      animatedBackgroundSrc: v,
      prefersReducedMotion: g
    }), o.length > 0 && null != n && (0, i.jsxs)("div", {
      className: O.productSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: O.productList,
        children: o.map(e => (0, i.jsx)(B, {
          appId: t.id,
          groupListingId: n.id,
          guildId: s,
          listing: e,
          groupListingType: (0, x.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), a.length > 0 && (0, i.jsxs)("div", {
      className: O.productSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: b.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: O.productList,
        children: a.map(e => (0, i.jsx)(P, {
          sku: e,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(m.Text, {
      variant: "text-md/normal",
      className: O.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? b.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : b.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function B(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: l,
    listing: s,
    groupListingType: a
  } = e, {
    openModal: u
  } = (0, T.default)({
    listing: s,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: y.AnalyticsLocations.APP_STOREFRONT
  }), f = r.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), p = (0, R.useHasActiveEntitlement)(s.id), h = r.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = L.default.toURLSafe((0, I.getAssetURL)(t, s.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, s.image_asset]), S = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
  if (null === S) return null;
  let v = "guild" === a || "user" === a && !p,
    x = e => {
      var n;
      return v ? (0, i.jsx)(F, {
        appId: t,
        skuId: s.id,
        onClick: null !== (n = e.onClick) && void 0 !== n ? n : u,
        className: e.className,
        children: b.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
          rate: (0, E.formatRate)((0, E.formatPrice)(S.price, S.currency), A.SubscriptionIntervalTypes.MONTH, 1)
        })
      }) : (0, i.jsx)(k, {
        className: e.className,
        children: b.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
      })
    };
  return (0, i.jsx)(o.SubscriptionCard, {
    title: s.name,
    description: s.description,
    imgSrc: h,
    subscriptionType: a,
    onPurchase: u,
    PurchaseButton: x,
    benefitItems: null != f ? f.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != f ? () => {
      (0, m.openModal)(e => {
        let {
          onClose: n,
          transitionState: r
        } = e;
        return (0, i.jsxs)(m.ModalRoot, {
          transitionState: r,
          size: m.ModalSize.DYNAMIC,
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
            tag: (0, i.jsx)(c.SubscriptionTag, {
              type: a
            }),
            onClose: n,
            FallbackIcon: d.BadgeIcon
          }), (0, i.jsxs)(m.ModalFooter, {
            className: O.footer,
            children: [(0, i.jsx)(m.Button, {
              className: O.backButton,
              onClick: n,
              look: m.ButtonLooks.BLANK,
              children: (0, i.jsx)(m.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: b.default.Messages.BACK
              })
            }), (0, i.jsx)(x, {})]
          })]
        })
      })
    } : void 0
  })
}

function P(e) {
  var t, n, r;
  let {
    sku: l,
    appId: s
  } = e, {
    analyticsLocations: o
  } = (0, S.default)(h.default.APP_STOREFRONT), d = (0, f.useStateFromStores)([C.default], () => C.default.getForSKU(l.id), [l]), p = l.name, x = null !== (n = null == d ? void 0 : null === (t = d.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, g = (null == d ? void 0 : d.headerBackground) != null && null !== (r = L.default.toURLSafe((0, I.getAssetURL)(s, d.headerBackground, 256))) && void 0 !== r ? r : void 0, T = (0, R.useHasActiveEntitlement)(l.id), j = l.type === y.SKUTypes.DURABLE && T, N = l.type === y.SKUTypes.DURABLE ? j ? b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : b.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: A
  } = l;
  if (null == A) return null;
  let M = () => {
      (0, v.default)({
        applicationId: s,
        skuId: l.id,
        analyticsLocations: o
      })
    },
    B = e => {
      var t;
      return j ? (0, i.jsx)(k, {
        className: e.className,
        children: b.default.Messages.COLLECTIBLES_ALREADY_OWNED
      }) : (0, i.jsx)(F, {
        appId: s,
        skuId: l.id,
        onClick: null !== (t = e.onClick) && void 0 !== t ? t : M,
        className: e.className,
        children: b.default.Messages.STOREFRONT_PURCHASE_FOR.format({
          price: (0, E.formatPrice)(A.amount, A.currency)
        })
      })
    };
  return (0, i.jsx)(a.ProductCard, {
    title: p,
    description: x,
    headerImage: g,
    availabilityLabel: N,
    onDetails: (0, _.isNullOrEmpty)(x) ? void 0 : () => {
      (0, m.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(m.ModalRoot, {
          transitionState: n,
          size: m.ModalSize.DYNAMIC,
          className: O.subDetailsModal,
          children: [(0, i.jsx)(U, {
            appId: s,
            skuId: l.id,
            title: p,
            description: x,
            imgSrc: g,
            tag: null != N ? (0, i.jsx)(c.Tag, {
              text: N
            }) : void 0,
            onClose: t,
            FallbackIcon: u.TicketIcon
          }), (0, i.jsxs)(m.ModalFooter, {
            className: O.footer,
            children: [(0, i.jsx)(m.Button, {
              className: O.backButton,
              onClick: t,
              look: m.ButtonLooks.BLANK,
              children: (0, i.jsx)(m.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: b.default.Messages.BACK
              })
            }), (0, i.jsx)(B, {})]
          })]
        })
      })
    },
    PurchaseButton: B,
    onPurchase: M
  })
}

function k(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(m.Button, {
    disabled: !0,
    className: t,
    look: m.Button.Looks.OUTLINED,
    color: m.Button.Colors.PRIMARY,
    size: m.Button.Sizes.SMALL,
    children: n
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
    j.default.track(y.AnalyticEvents.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: t,
      sku_id: n,
      location_stack: a
    })
  }, [a, t, n]), (0, i.jsx)(s.CardDetails, {
    ...l
  })
}

function F(e) {
  let {
    appId: t,
    skuId: n,
    onClick: r,
    ...l
  } = e;
  return (0, i.jsx)(m.Button, {
    ...l,
    onClick: e => {
      j.default.track(y.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == r || r(e)
    }
  })
}