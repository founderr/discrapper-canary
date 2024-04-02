"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var i, l, r = n("735250"),
  s = n("470079"),
  a = n("905322"),
  o = n("512100"),
  c = n("660173"),
  d = n("200207"),
  u = n("269210"),
  f = n("752843"),
  m = n("442837"),
  h = n("793527"),
  x = n("373296"),
  v = n("481060"),
  p = n("607070"),
  g = n("100527"),
  j = n("906732"),
  C = n("87484"),
  S = n("171246"),
  T = n("889989"),
  N = n("696906"),
  b = n("551428"),
  R = n("768581"),
  y = n("937615"),
  M = n("73346"),
  I = n("624138"),
  L = n("591759"),
  B = n("981631"),
  E = n("474936"),
  O = n("689938"),
  _ = n("836092");
let A = {
  width: 20,
  height: 20,
  color: "white"
};

function P(e) {
  var t, n;
  let {
    app: i,
    subscriptionGroupListing: l,
    guildId: o,
    products: d
  } = e, u = null !== (n = null == l ? void 0 : null === (t = l.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published)) && void 0 !== n ? n : [], [f, g] = s.useState(() => u.length > 0 ? 0 : 1), j = s.useMemo(() => {
    let e = i.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = L.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [i]), {
    bot: C
  } = i, T = s.useMemo(() => {
    var e;
    if ((null == C ? void 0 : C.banner) == null) return;
    let t = (0, R.getUserBannerURL)({
      id: C.id,
      banner: C.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = L.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [C]), N = s.useMemo(() => {
    var e;
    if ((null == C ? void 0 : C.banner) == null) return;
    let t = (0, R.getUserBannerURL)({
      id: C.id,
      banner: C.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = L.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [C]), b = (0, m.useStateFromStores)([p.default], () => p.default.useReducedMotion), y = u.length > 0 && d.length > 0, M = 1 === f ? d.map(e => (0, r.jsx)(k, {
    sku: e,
    appId: i.id
  }, e.id)) : null != l ? u.map(e => (0, r.jsx)(w, {
    appId: i.id,
    groupListingId: l.id,
    guildId: o,
    listing: e,
    groupListingType: (0, S.isApplicationUserSubscription)(l.sku_flags) ? "user" : "guild"
  }, e.id)) : [];
  return (0, r.jsxs)("div", {
    className: _.wrapper,
    children: [(0, r.jsx)("div", {
      className: _.banner,
      children: (0, r.jsx)(a.Banner, {
        title: i.name,
        iconSrc: j,
        backgroundSrc: T,
        animatedBackgroundSrc: N,
        prefersReducedMotion: b
      })
    }), (0, r.jsx)(v.Text, {
      variant: "eyebrow",
      className: _.tabsText,
      children: O.default.Messages.STOREFRONT_PREMIUM_ITEMS
    }), (0, r.jsx)("div", {
      className: _.tabs,
      children: y ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.CategoryTab, {
          icon: (0, r.jsx)(h.BadgeIcon, {
            ...A
          }),
          title: O.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
          body: O.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
            appName: i.name
          }),
          disabled: 0 === u.length,
          selected: 0 === f,
          onClick: () => {
            g(0)
          }
        }), (0, r.jsx)(c.CategoryTab, {
          icon: (0, r.jsx)(x.TicketIcon, {
            ...A
          }),
          title: O.default.Messages.STOREFRONT_APP_PRODUCTS,
          body: O.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
            appName: i.name
          }),
          disabled: 0 === d.length,
          selected: 1 === f,
          onClick: () => {
            g(1)
          }
        })]
      }) : null
    }), (0, r.jsx)("div", {
      className: _.productList,
      style: {
        gridTemplateColumns: 1 === M.length ? "1fr" : void 0
      },
      children: M
    })]
  })
}(l = i || (i = {}))[l.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", l[l.PRODUCTS = 1] = "PRODUCTS";

function w(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: i,
    listing: l,
    groupListingType: a
  } = e, {
    openModal: c
  } = (0, N.default)({
    listing: l,
    guildId: i,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: B.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), d = s.useMemo(() => {
    var e;
    return null === (e = l.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, T.getBenefitIcon)(t, e.icon)
    }))
  }, [t, l.store_listing_benefits]), m = s.useMemo(() => {
    var e;
    return null != l.image_asset && null !== (e = L.default.toURLSafe((0, M.getAssetURL)(t, l.image_asset, 64))) && void 0 !== e ? e : void 0
  }, [t, l.image_asset]), h = l.subscription_plans.length > 0 ? l.subscription_plans[0] : null;
  if (null === h) return null;
  let x = (0, r.jsx)(v.Button, {
    onClick: c,
    children: O.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, y.formatRate)((0, y.formatPrice)(h.price, h.currency), E.SubscriptionIntervalTypes.MONTH, 1)
    })
  });
  return (0, r.jsx)(u.SubscriptionCard, {
    title: l.name,
    description: l.description,
    imgSrc: m,
    subscriptionType: a,
    onPurchase: c,
    PurchaseButton: e => (0, r.jsx)(v.Button, {
      ...e,
      children: O.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, y.formatRate)((0, y.formatPrice)(h.price, h.currency), E.SubscriptionIntervalTypes.MONTH, 1)
      })
    }),
    benefitItems: null != d ? d.map(e => (0, r.jsx)(u.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != d ? () => {
      (0, v.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, r.jsxs)(v.ModalRoot, {
          transitionState: n,
          size: v.ModalSize.DYNAMIC,
          className: _.subDetailsModal,
          children: [(0, r.jsx)(o.CardDetails, {
            benefits: d.map(e => (0, r.jsx)(u.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: l.description,
            imgSrc: m,
            title: l.name,
            tag: (0, r.jsx)(f.SubscriptionTag, {
              type: a
            }),
            onClose: t
          }), (0, r.jsxs)(v.ModalFooter, {
            className: _.footer,
            children: [(0, r.jsx)(v.Button, {
              className: _.backButton,
              onClick: t,
              look: v.ButtonLooks.BLANK,
              children: (0, r.jsx)(v.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: O.default.Messages.BACK
              })
            }), x]
          })]
        })
      })
    } : void 0
  })
}

function k(e) {
  var t, n, i;
  let {
    sku: l,
    appId: s
  } = e, {
    analyticsLocations: a
  } = (0, j.default)(g.default.APP_STOREFRONT), c = (0, m.useStateFromStores)([b.default], () => b.default.getForSKU(l.id), [l]), u = l.name, h = null !== (n = null == c ? void 0 : null === (t = c.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, x = (null == c ? void 0 : c.headerBackground) != null && null !== (i = L.default.toURLSafe((0, M.getAssetURL)(s, c.headerBackground, 256))) && void 0 !== i ? i : void 0, p = l.type === B.SKUTypes.DURABLE ? O.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: S
  } = l;
  if (null == S) return null;
  let T = () => {
      (0, C.default)({
        applicationId: s,
        skuId: l.id,
        analyticsLocations: a
      })
    },
    N = (0, r.jsx)(v.Button, {
      onClick: T,
      children: O.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, y.formatPrice)(S.amount, S.currency)
      })
    });
  return (0, r.jsx)(d.ProductCard, {
    title: u,
    description: h,
    headerImage: x,
    availabilityLabel: p,
    onDetails: (0, I.isNullOrEmpty)(h) ? void 0 : () => {
      (0, v.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, r.jsxs)(v.ModalRoot, {
          transitionState: n,
          size: v.ModalSize.DYNAMIC,
          className: _.subDetailsModal,
          children: [(0, r.jsx)(o.CardDetails, {
            title: u,
            description: h,
            imgSrc: x,
            tag: null != p ? (0, r.jsx)(f.Tag, {
              text: p
            }) : void 0,
            onClose: t
          }), (0, r.jsxs)(v.ModalFooter, {
            className: _.footer,
            children: [(0, r.jsx)(v.Button, {
              className: _.backButton,
              onClick: t,
              look: v.ButtonLooks.BLANK,
              children: (0, r.jsx)(v.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: O.default.Messages.BACK
              })
            }), N]
          })]
        })
      })
    },
    PurchaseButton: e => (0, r.jsx)(v.Button, {
      ...e,
      children: O.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, y.formatPrice)(S.amount, S.currency)
      })
    }),
    onPurchase: T
  })
}