"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120");
var i, s, a = n("735250"),
  l = n("470079"),
  r = n("905322"),
  o = n("512100"),
  c = n("660173"),
  d = n("200207"),
  u = n("269210"),
  h = n("752843"),
  f = n("442837"),
  m = n("793527"),
  x = n("373296"),
  v = n("481060"),
  p = n("100527"),
  g = n("906732"),
  j = n("87484"),
  C = n("171246"),
  S = n("889989"),
  T = n("696906"),
  N = n("551428"),
  b = n("768581"),
  R = n("937615"),
  I = n("73346"),
  y = n("591759"),
  M = n("981631"),
  B = n("474936"),
  E = n("689938"),
  O = n("836092");
let _ = {
  width: 20,
  height: 20,
  color: "white"
};

function L(e) {
  var t, n;
  let {
    app: i,
    subscriptionGroupListing: s,
    guildId: o,
    products: d
  } = e, u = null !== (n = null == s ? void 0 : null === (t = s.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published)) && void 0 !== n ? n : [], [h, f] = l.useState(() => u.length > 0 ? 0 : 1), p = l.useMemo(() => {
    let e = i.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = y.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [i]), {
    bot: g
  } = i, j = l.useMemo(() => {
    var e;
    if ((null == g ? void 0 : g.banner) == null) return;
    let t = (0, b.getUserBannerURL)({
      id: g.id,
      banner: g.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = y.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [g]), S = u.length > 0 && d.length > 0, T = 1 === h ? d.map(e => (0, a.jsx)(P, {
    sku: e,
    appId: i.id
  }, e.id)) : null != s ? u.map(e => (0, a.jsx)(A, {
    appId: i.id,
    groupListingId: s.id,
    guildId: o,
    listing: e,
    groupListingType: (0, C.isApplicationUserSubscription)(s.sku_flags) ? "user" : "guild"
  }, e.id)) : [];
  return (0, a.jsxs)("div", {
    className: O.wrapper,
    children: [(0, a.jsx)("div", {
      className: O.banner,
      children: (0, a.jsx)(r.Banner, {
        title: i.name,
        iconSrc: p,
        backgroundSrc: j
      })
    }), (0, a.jsx)(v.Text, {
      variant: "eyebrow",
      className: O.tabsText,
      children: E.default.Messages.STOREFRONT_PREMIUM_ITEMS
    }), (0, a.jsx)("div", {
      className: O.tabs,
      children: S ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.CategoryTab, {
          icon: (0, a.jsx)(m.BadgeIcon, {
            ..._
          }),
          title: E.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
          body: E.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
            appName: i.name
          }),
          disabled: 0 === u.length,
          selected: 0 === h,
          onClick: () => {
            f(0)
          }
        }), (0, a.jsx)(c.CategoryTab, {
          icon: (0, a.jsx)(x.TicketIcon, {
            ..._
          }),
          title: E.default.Messages.STOREFRONT_APP_PRODUCTS,
          body: E.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
            appName: i.name
          }),
          disabled: 0 === d.length,
          selected: 1 === h,
          onClick: () => {
            f(1)
          }
        })]
      }) : null
    }), (0, a.jsx)("div", {
      className: O.productList,
      style: {
        gridTemplateColumns: 1 === T.length ? "1fr" : void 0
      },
      children: T
    })]
  })
}(s = i || (i = {}))[s.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", s[s.PRODUCTS = 1] = "PRODUCTS";

function A(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: i,
    listing: s,
    groupListingType: r
  } = e, {
    openModal: c
  } = (0, T.default)({
    listing: s,
    guildId: i,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: M.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), d = l.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, S.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), f = l.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = y.default.toURLSafe((0, I.getAssetURL)(t, s.image_asset, 64))) && void 0 !== e ? e : void 0
  }, [t, s.image_asset]), m = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
  if (null === m) return null;
  let x = (0, a.jsx)(v.Button, {
    onClick: c,
    children: E.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, R.formatRate)((0, R.formatPrice)(m.price, m.currency), B.SubscriptionIntervalTypes.MONTH, 1)
    })
  });
  return (0, a.jsx)(u.SubscriptionCard, {
    title: s.name,
    description: s.description,
    imgSrc: f,
    subscriptionType: r,
    onPurchase: c,
    PurchaseButton: e => (0, a.jsx)(v.Button, {
      ...e,
      children: E.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, R.formatRate)((0, R.formatPrice)(m.price, m.currency), B.SubscriptionIntervalTypes.MONTH, 1)
      })
    }),
    benefitItems: null != d ? d.map(e => (0, a.jsx)(u.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != d ? () => {
      (0, v.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, a.jsxs)(v.ModalRoot, {
          transitionState: n,
          size: v.ModalSize.DYNAMIC,
          className: O.subDetailsModal,
          children: [(0, a.jsx)(o.CardDetails, {
            benefits: d.map(e => (0, a.jsx)(u.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: s.description,
            imgSrc: f,
            title: s.name,
            tag: (0, a.jsx)(h.SubscriptionTag, {
              type: r
            }),
            onClose: t
          }), (0, a.jsxs)(v.ModalFooter, {
            className: O.footer,
            children: [(0, a.jsx)(v.Button, {
              className: O.backButton,
              onClick: t,
              look: v.ButtonLooks.BLANK,
              children: (0, a.jsx)(v.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: E.default.Messages.BACK
              })
            }), x]
          })]
        })
      })
    } : void 0
  })
}

function P(e) {
  var t, n, i;
  let {
    sku: s,
    appId: l
  } = e, {
    analyticsLocations: r
  } = (0, g.default)(p.default.APP_STOREFRONT), c = (0, f.useStateFromStores)([N.default], () => N.default.getForSKU(s.id), [s]), u = s.name, m = null !== (n = null == c ? void 0 : null === (t = c.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, x = (null == c ? void 0 : c.headerBackground) != null && null !== (i = y.default.toURLSafe((0, I.getAssetURL)(l, c.headerBackground, 256))) && void 0 !== i ? i : void 0, C = s.type === M.SKUTypes.DURABLE ? E.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: S
  } = s;
  if (null == S) return null;
  let T = () => {
      (0, j.default)({
        applicationId: l,
        skuId: s.id,
        analyticsLocations: r
      })
    },
    b = (0, a.jsx)(v.Button, {
      onClick: T,
      children: E.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, R.formatPrice)(S.amount, S.currency)
      })
    });
  return (0, a.jsx)(d.ProductCard, {
    title: u,
    description: m,
    headerImage: x,
    availabilityLabel: C,
    onDetails: () => {
      (0, v.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, a.jsxs)(v.ModalRoot, {
          transitionState: n,
          size: v.ModalSize.DYNAMIC,
          className: O.subDetailsModal,
          children: [(0, a.jsx)(o.CardDetails, {
            title: u,
            description: m,
            imgSrc: x,
            tag: null != C ? (0, a.jsx)(h.Tag, {
              text: C
            }) : void 0,
            onClose: t
          }), (0, a.jsxs)(v.ModalFooter, {
            className: O.footer,
            children: [(0, a.jsx)(v.Button, {
              className: O.backButton,
              onClick: t,
              look: v.ButtonLooks.BLANK,
              children: (0, a.jsx)(v.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: E.default.Messages.BACK
              })
            }), b]
          })]
        })
      })
    },
    PurchaseButton: e => (0, a.jsx)(v.Button, {
      ...e,
      children: E.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, R.formatPrice)(S.amount, S.currency)
      })
    }),
    onPurchase: T
  })
}