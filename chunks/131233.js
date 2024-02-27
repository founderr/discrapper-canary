"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var i, r, a = n("37983"),
  s = n("884691"),
  l = n("153967"),
  o = n("382133"),
  c = n("630394"),
  d = n("681959"),
  u = n("122968"),
  f = n("91601"),
  h = n("475954"),
  m = n("446674"),
  v = n("333693"),
  g = n("618991"),
  p = n("77078"),
  x = n("812204"),
  b = n("685665"),
  j = n("509167"),
  S = n("377527"),
  N = n("375010"),
  E = n("698041"),
  R = n("153160"),
  I = n("271560"),
  T = n("253981"),
  y = n("49111"),
  C = n("646718"),
  M = n("782340"),
  O = n("816896");
let w = {
  width: 20,
  height: 20,
  color: "white"
};

function _(e) {
  var t;
  let {
    app: n,
    subscriptionGroupListing: i,
    guildId: r,
    products: c
  } = e, [d, u] = s.useState(0), {
    subscription_listings: f = []
  } = i, h = s.useMemo(() => {
    let e = n.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = T.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [n]), m = s.useMemo(() => {
    var e;
    let t = n.getCoverImageURL(800);
    return null != t && null !== (e = T.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [n]);
  return (0, a.jsxs)("div", {
    className: O.wrapper,
    children: [(0, a.jsx)(l.Banner, {
      title: n.name,
      subtitle: null !== (t = n.description) && void 0 !== t ? t : void 0,
      iconSrc: h,
      backgroundSrc: m
    }), (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
      className: O.tabs,
      children: [(0, a.jsx)(o.default, {
        icon: (0, a.jsx)(v.BadgeIcon, {
          ...w
        }),
        title: M.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: M.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === f.length,
        selected: 0 === d,
        onClick: () => {
          u(0)
        }
      }), (0, a.jsx)(o.default, {
        icon: (0, a.jsx)(g.TicketIcon, {
          ...w
        }),
        title: M.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: M.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === c.length,
        selected: 1 === d,
        onClick: () => {
          u(1)
        }
      })]
    }), (0, a.jsx)("div", {
      className: O.productList,
      children: 1 === d ? c.map(e => (0, a.jsx)(A, {
        sku: e,
        appId: n.id
      }, e.id)) : f.map(e => (0, a.jsx)(B, {
        appId: n.id,
        groupListingId: i.id,
        guildId: r,
        listing: e
      }, e.id))
    })]
  })
}(r = i || (i = {}))[r.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", r[r.PRODUCTS = 1] = "PRODUCTS";

function B(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: i,
    listing: r
  } = e, {
    openModal: l
  } = (0, N.default)({
    listing: r,
    guildId: i,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: y.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), o = s.useMemo(() => {
    var e, n;
    return null !== (n = null === (e = r.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, S.getBenefitIcon)(t, e.icon)
    }))) && void 0 !== n ? n : []
  }, [t, r.store_listing_benefits]), c = s.useMemo(() => {
    var e;
    return null != r.image_asset && null !== (e = T.default.toURLSafe((0, I.getAssetURL)(t, r.image_asset))) && void 0 !== e ? e : void 0
  }, [t, r.image_asset]), d = r.subscription_plans.length > 0 ? r.subscription_plans[0] : null;
  if (null === d) return null;
  let m = (0, a.jsx)(p.Button, {
    onClick: l,
    children: M.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, R.formatRate)((0, R.formatPrice)(d.price, d.currency), C.SubscriptionIntervalTypes.MONTH, 1)
    })
  });
  return (0, a.jsx)(f.SubscriptionCard, {
    benefits: (0, a.jsx)(u.SubscriptionBenefits, {
      benefits: o,
      onDetails: () => {
        (0, p.openModal)(e => {
          let {
            onClose: t,
            transitionState: n
          } = e;
          return (0, a.jsxs)(p.ModalRoot, {
            transitionState: n,
            children: [(0, a.jsx)(h.SubscriptionDetails, {
              benefits: (0, a.jsx)(u.SubscriptionBenefits, {
                benefits: o,
                includeDescription: !0,
                maxBenefits: 1 / 0
              }),
              description: r.description,
              imgSrc: c,
              title: r.name
            }), (0, a.jsxs)(p.ModalFooter, {
              className: O.footer,
              children: [(0, a.jsx)("button", {
                className: O.backButton,
                onClick: t,
                children: (0, a.jsx)(p.Text, {
                  color: "header-primary",
                  tag: "p",
                  variant: "heading-md/semibold",
                  children: M.default.Messages.BACK
                })
              }), m]
            })]
          })
        })
      }
    }),
    description: r.description,
    imgSrc: c,
    purchaseButton: m,
    title: r.name
  })
}

function A(e) {
  var t, n, i;
  let {
    sku: r,
    appId: s
  } = e, {
    analyticsLocations: l
  } = (0, b.default)(x.default.APP_STOREFRONT), o = (0, m.useStateFromStores)([E.default], () => E.default.getForSKU(r.id), [r]), {
    price: u
  } = r;
  if (null == u) return null;
  let f = (0, a.jsx)(p.Button, {
    onClick: () => {
      (0, j.default)({
        applicationId: s,
        skuId: r.id,
        analyticsLocations: l
      })
    },
    children: M.default.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, R.formatPrice)(u.amount, u.currency)
    })
  });
  return (0, a.jsx)(c.ProductCard, {
    description: null !== (t = null == o ? void 0 : o.description) && void 0 !== t ? t : void 0,
    headerBackground: (null == o ? void 0 : o.headerBackground) != null && null !== (n = T.default.toURLSafe((0, I.getAssetURL)(s, o.headerBackground))) && void 0 !== n ? n : void 0,
    imgSrc: (null == o ? void 0 : o.thumbnail) != null && null !== (i = T.default.toURLSafe((0, I.getAssetURL)(s, o.thumbnail))) && void 0 !== i ? i : void 0,
    onDetails: () => {
      (0, p.openModal)(e => {
        var t, n, i;
        let {
          onClose: l,
          transitionState: c
        } = e;
        return (0, a.jsxs)(p.ModalRoot, {
          transitionState: c,
          children: [(0, a.jsx)(d.ProductDetails, {
            description: null !== (t = null == o ? void 0 : o.description) && void 0 !== t ? t : void 0,
            headerImage: (null == o ? void 0 : o.headerBackground) != null && null !== (n = T.default.toURLSafe((0, I.getAssetURL)(s, o.headerBackground))) && void 0 !== n ? n : void 0,
            imgSrc: (null == o ? void 0 : o.thumbnail) != null && null !== (i = T.default.toURLSafe((0, I.getAssetURL)(s, o.thumbnail))) && void 0 !== i ? i : void 0,
            title: r.name
          }), (0, a.jsxs)(p.ModalFooter, {
            className: O.footer,
            children: [(0, a.jsx)("button", {
              className: O.backButton,
              onClick: l,
              children: (0, a.jsx)(p.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: M.default.Messages.BACK
              })
            }), f]
          })]
        })
      })
    },
    purchaseButton: f,
    title: r.name
  })
}