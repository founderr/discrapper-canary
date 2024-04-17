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
  d = n("752843"),
  c = n("368072"),
  u = n("790472"),
  f = n("442837"),
  h = n("481060"),
  m = n("607070"),
  p = n("100527"),
  S = n("906732"),
  g = n("87484"),
  x = n("171246"),
  v = n("889989"),
  C = n("696906"),
  T = n("580130"),
  j = n("551428"),
  N = n("768581"),
  L = n("937615"),
  I = n("73346"),
  E = n("624138"),
  R = n("591759"),
  _ = n("981631"),
  b = n("474936"),
  y = n("689938"),
  A = n("836092");

function M(e) {
  var t, n;
  let {
    app: s,
    subscriptionGroupListing: a,
    guildId: o,
    products: d
  } = e, c = null !== (n = null == a ? void 0 : null === (t = a.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published)) && void 0 !== n ? n : [], u = r.useMemo(() => {
    let e = s.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = R.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [s]), {
    bot: p
  } = s, S = r.useMemo(() => {
    var e;
    if ((null == p ? void 0 : p.banner) == null) return;
    let t = (0, N.getUserBannerURL)({
      id: p.id,
      banner: p.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [p]), g = r.useMemo(() => {
    var e;
    if ((null == p ? void 0 : p.banner) == null) return;
    let t = (0, N.getUserBannerURL)({
      id: p.id,
      banner: p.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [p]), v = (0, f.useStateFromStores)([m.default], () => m.default.useReducedMotion);
  return (0, i.jsxs)("div", {
    className: A.wrapper,
    children: [(0, i.jsx)("div", {
      className: A.banner,
      children: (0, i.jsx)(l.Banner, {
        title: s.name,
        iconSrc: u,
        backgroundSrc: S,
        animatedBackgroundSrc: g,
        prefersReducedMotion: v
      })
    }), c.length > 0 && null != a && (0, i.jsxs)("div", {
      className: A.productSection,
      children: [(0, i.jsx)(h.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: y.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: A.productList,
        children: c.map(e => (0, i.jsx)(B, {
          appId: s.id,
          groupListingId: a.id,
          guildId: o,
          listing: e,
          groupListingType: (0, x.isApplicationUserSubscription)(a.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), d.length > 0 && (0, i.jsxs)("div", {
      className: A.productSection,
      children: [(0, i.jsx)(h.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: y.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: A.productList,
        children: d.map(e => (0, i.jsx)(O, {
          sku: e,
          appId: s.id
        }, e.id))
      })]
    })]
  })
}

function B(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: l,
    listing: a,
    groupListingType: u
  } = e, {
    openModal: m
  } = (0, C.default)({
    listing: a,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: _.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), p = r.useMemo(() => {
    var e;
    return null === (e = a.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, v.getBenefitIcon)(t, e.icon)
    }))
  }, [t, a.store_listing_benefits]), S = (0, f.useStateFromStores)([T.default], () => {
    let e = T.default.getForSku(a.id);
    if (null == e) return !1;
    let t = 0;
    for (let r of e) {
      var n, i;
      let e = null !== (i = null === (n = r.endsAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 1 / 0;
      e >= t && (t = e)
    }
    return t > new Date().getTime()
  }, [a.id]), g = r.useMemo(() => {
    var e;
    return null != a.image_asset && null !== (e = R.default.toURLSafe((0, I.getAssetURL)(t, a.image_asset, 64))) && void 0 !== e ? e : void 0
  }, [t, a.image_asset]), x = a.subscription_plans.length > 0 ? a.subscription_plans[0] : null;
  if (null === x) return null;
  let j = "guild" === u || "user" === u && !S,
    N = e => {
      var t;
      return j ? (0, i.jsx)(h.Button, {
        onClick: null !== (t = e.onClick) && void 0 !== t ? t : m,
        className: e.className,
        children: y.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
          rate: (0, L.formatRate)((0, L.formatPrice)(x.price, x.currency), b.SubscriptionIntervalTypes.MONTH, 1)
        })
      }) : (0, i.jsx)(h.Button, {
        disabled: !0,
        className: e.className,
        look: h.Button.Looks.OUTLINED,
        color: h.Button.Colors.PRIMARY,
        size: h.Button.Sizes.SMALL,
        children: y.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
      })
    };
  return (0, i.jsx)(o.SubscriptionCard, {
    title: a.name,
    description: a.description,
    imgSrc: g,
    subscriptionType: u,
    onPurchase: m,
    PurchaseButton: N,
    benefitItems: null != p ? p.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != p ? () => {
      (0, h.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(h.ModalRoot, {
          transitionState: n,
          size: h.ModalSize.DYNAMIC,
          className: A.subDetailsModal,
          children: [(0, i.jsx)(s.CardDetails, {
            benefits: p.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: a.description,
            imgSrc: g,
            title: a.name,
            tag: (0, i.jsx)(d.SubscriptionTag, {
              type: u
            }),
            onClose: t,
            FallbackIcon: c.BadgeIcon
          }), (0, i.jsxs)(h.ModalFooter, {
            className: A.footer,
            children: [(0, i.jsx)(h.Button, {
              className: A.backButton,
              onClick: t,
              look: h.ButtonLooks.BLANK,
              children: (0, i.jsx)(h.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: y.default.Messages.BACK
              })
            }), (0, i.jsx)(N, {})]
          })]
        })
      })
    } : void 0
  })
}

function O(e) {
  var t, n, r;
  let {
    sku: l,
    appId: o
  } = e, {
    analyticsLocations: c
  } = (0, S.default)(p.default.APP_STOREFRONT), m = (0, f.useStateFromStores)([j.default], () => j.default.getForSKU(l.id), [l]), x = l.name, v = null !== (n = null == m ? void 0 : null === (t = m.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, C = (null == m ? void 0 : m.headerBackground) != null && null !== (r = R.default.toURLSafe((0, I.getAssetURL)(o, m.headerBackground, 256))) && void 0 !== r ? r : void 0, T = l.type === _.SKUTypes.DURABLE ? y.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: N
  } = l;
  if (null == N) return null;
  let b = () => {
      (0, g.default)({
        applicationId: o,
        skuId: l.id,
        analyticsLocations: c
      })
    },
    M = (0, i.jsx)(h.Button, {
      onClick: b,
      children: y.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, L.formatPrice)(N.amount, N.currency)
      })
    });
  return (0, i.jsx)(a.ProductCard, {
    title: x,
    description: v,
    headerImage: C,
    availabilityLabel: T,
    onDetails: (0, E.isNullOrEmpty)(v) ? void 0 : () => {
      (0, h.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(h.ModalRoot, {
          transitionState: n,
          size: h.ModalSize.DYNAMIC,
          className: A.subDetailsModal,
          children: [(0, i.jsx)(s.CardDetails, {
            title: x,
            description: v,
            imgSrc: C,
            tag: null != T ? (0, i.jsx)(d.Tag, {
              text: T
            }) : void 0,
            onClose: t,
            FallbackIcon: u.TicketIcon
          }), (0, i.jsxs)(h.ModalFooter, {
            className: A.footer,
            children: [(0, i.jsx)(h.Button, {
              className: A.backButton,
              onClick: t,
              look: h.ButtonLooks.BLANK,
              children: (0, i.jsx)(h.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: y.default.Messages.BACK
              })
            }), M]
          })]
        })
      })
    },
    PurchaseButton: e => (0, i.jsx)(h.Button, {
      ...e,
      children: y.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, L.formatPrice)(N.amount, N.currency)
      })
    }),
    onPurchase: b
  })
}