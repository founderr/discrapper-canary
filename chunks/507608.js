"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var i, r, s = n("735250"),
  a = n("470079"),
  l = n("905322"),
  o = n("512100"),
  c = n("660173"),
  d = n("200207"),
  u = n("269210"),
  f = n("752843"),
  h = n("442837"),
  m = n("793527"),
  p = n("373296"),
  S = n("481060"),
  x = n("607070"),
  g = n("100527"),
  v = n("906732"),
  T = n("87484"),
  C = n("171246"),
  j = n("889989"),
  N = n("696906"),
  I = n("551428"),
  R = n("768581"),
  E = n("937615"),
  L = n("73346"),
  b = n("624138"),
  _ = n("591759"),
  y = n("981631"),
  O = n("474936"),
  M = n("689938"),
  A = n("836092");
let B = {
  width: 20,
  height: 20,
  color: "white"
};

function P(e) {
  var t, n;
  let {
    app: i,
    subscriptionGroupListing: r,
    guildId: o,
    products: d
  } = e, u = null !== (n = null == r ? void 0 : null === (t = r.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published)) && void 0 !== n ? n : [], [f, g] = a.useState(() => u.length > 0 ? 0 : 1), v = a.useMemo(() => {
    let e = i.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = _.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [i]), {
    bot: T
  } = i, j = a.useMemo(() => {
    var e;
    if ((null == T ? void 0 : T.banner) == null) return;
    let t = (0, R.getUserBannerURL)({
      id: T.id,
      banner: T.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = _.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [T]), N = a.useMemo(() => {
    var e;
    if ((null == T ? void 0 : T.banner) == null) return;
    let t = (0, R.getUserBannerURL)({
      id: T.id,
      banner: T.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = _.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [T]), I = (0, h.useStateFromStores)([x.default], () => x.default.useReducedMotion), E = u.length > 0 && d.length > 0, L = 1 === f ? d.map(e => (0, s.jsx)(F, {
    sku: e,
    appId: i.id
  }, e.id)) : null != r ? u.map(e => (0, s.jsx)(U, {
    appId: i.id,
    groupListingId: r.id,
    guildId: o,
    listing: e,
    groupListingType: (0, C.isApplicationUserSubscription)(r.sku_flags) ? "user" : "guild"
  }, e.id)) : [];
  return (0, s.jsxs)("div", {
    className: A.wrapper,
    children: [(0, s.jsx)("div", {
      className: A.banner,
      children: (0, s.jsx)(l.Banner, {
        title: i.name,
        iconSrc: v,
        backgroundSrc: j,
        animatedBackgroundSrc: N,
        prefersReducedMotion: I
      })
    }), (0, s.jsx)(S.Text, {
      variant: "eyebrow",
      className: A.tabsText,
      children: M.default.Messages.STOREFRONT_PREMIUM_ITEMS
    }), (0, s.jsx)("div", {
      className: A.tabs,
      children: E ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.CategoryTab, {
          icon: (0, s.jsx)(m.BadgeIcon, {
            ...B
          }),
          title: M.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
          body: M.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
            appName: i.name
          }),
          disabled: 0 === u.length,
          selected: 0 === f,
          onClick: () => {
            g(0)
          }
        }), (0, s.jsx)(c.CategoryTab, {
          icon: (0, s.jsx)(p.TicketIcon, {
            ...B
          }),
          title: M.default.Messages.STOREFRONT_APP_PRODUCTS,
          body: M.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
            appName: i.name
          }),
          disabled: 0 === d.length,
          selected: 1 === f,
          onClick: () => {
            g(1)
          }
        })]
      }) : null
    }), (0, s.jsx)("div", {
      className: A.productList,
      style: {
        gridTemplateColumns: 1 === L.length ? "1fr" : void 0
      },
      children: L
    })]
  })
}(r = i || (i = {}))[r.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", r[r.PRODUCTS = 1] = "PRODUCTS";

function U(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: i,
    listing: r,
    groupListingType: l
  } = e, {
    openModal: c
  } = (0, N.default)({
    listing: r,
    guildId: i,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: y.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), d = a.useMemo(() => {
    var e;
    return null === (e = r.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, j.getBenefitIcon)(t, e.icon)
    }))
  }, [t, r.store_listing_benefits]), h = a.useMemo(() => {
    var e;
    return null != r.image_asset && null !== (e = _.default.toURLSafe((0, L.getAssetURL)(t, r.image_asset, 64))) && void 0 !== e ? e : void 0
  }, [t, r.image_asset]), m = r.subscription_plans.length > 0 ? r.subscription_plans[0] : null;
  if (null === m) return null;
  let p = (0, s.jsx)(S.Button, {
    onClick: c,
    children: M.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, E.formatRate)((0, E.formatPrice)(m.price, m.currency), O.SubscriptionIntervalTypes.MONTH, 1)
    })
  });
  return (0, s.jsx)(u.SubscriptionCard, {
    title: r.name,
    description: r.description,
    imgSrc: h,
    subscriptionType: l,
    onPurchase: c,
    PurchaseButton: e => (0, s.jsx)(S.Button, {
      ...e,
      children: M.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, E.formatRate)((0, E.formatPrice)(m.price, m.currency), O.SubscriptionIntervalTypes.MONTH, 1)
      })
    }),
    benefitItems: null != d ? d.map(e => (0, s.jsx)(u.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != d ? () => {
      (0, S.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, s.jsxs)(S.ModalRoot, {
          transitionState: n,
          size: S.ModalSize.DYNAMIC,
          className: A.subDetailsModal,
          children: [(0, s.jsx)(o.CardDetails, {
            benefits: d.map(e => (0, s.jsx)(u.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: r.description,
            imgSrc: h,
            title: r.name,
            tag: (0, s.jsx)(f.SubscriptionTag, {
              type: l
            }),
            onClose: t
          }), (0, s.jsxs)(S.ModalFooter, {
            className: A.footer,
            children: [(0, s.jsx)(S.Button, {
              className: A.backButton,
              onClick: t,
              look: S.ButtonLooks.BLANK,
              children: (0, s.jsx)(S.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: M.default.Messages.BACK
              })
            }), p]
          })]
        })
      })
    } : void 0
  })
}

function F(e) {
  var t, n, i;
  let {
    sku: r,
    appId: a
  } = e, {
    analyticsLocations: l
  } = (0, v.default)(g.default.APP_STOREFRONT), c = (0, h.useStateFromStores)([I.default], () => I.default.getForSKU(r.id), [r]), u = r.name, m = null !== (n = null == c ? void 0 : null === (t = c.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, p = (null == c ? void 0 : c.headerBackground) != null && null !== (i = _.default.toURLSafe((0, L.getAssetURL)(a, c.headerBackground, 256))) && void 0 !== i ? i : void 0, x = r.type === y.SKUTypes.DURABLE ? M.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: C
  } = r;
  if (null == C) return null;
  let j = () => {
      (0, T.default)({
        applicationId: a,
        skuId: r.id,
        analyticsLocations: l
      })
    },
    N = (0, s.jsx)(S.Button, {
      onClick: j,
      children: M.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, E.formatPrice)(C.amount, C.currency)
      })
    });
  return (0, s.jsx)(d.ProductCard, {
    title: u,
    description: m,
    headerImage: p,
    availabilityLabel: x,
    onDetails: (0, b.isNullOrEmpty)(m) ? void 0 : () => {
      (0, S.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, s.jsxs)(S.ModalRoot, {
          transitionState: n,
          size: S.ModalSize.DYNAMIC,
          className: A.subDetailsModal,
          children: [(0, s.jsx)(o.CardDetails, {
            title: u,
            description: m,
            imgSrc: p,
            tag: null != x ? (0, s.jsx)(f.Tag, {
              text: x
            }) : void 0,
            onClose: t
          }), (0, s.jsxs)(S.ModalFooter, {
            className: A.footer,
            children: [(0, s.jsx)(S.Button, {
              className: A.backButton,
              onClick: t,
              look: S.ButtonLooks.BLANK,
              children: (0, s.jsx)(S.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: M.default.Messages.BACK
              })
            }), N]
          })]
        })
      })
    },
    PurchaseButton: e => (0, s.jsx)(S.Button, {
      ...e,
      children: M.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, E.formatPrice)(C.amount, C.currency)
      })
    }),
    onPurchase: j
  })
}