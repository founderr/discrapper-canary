"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var i, r, a = n("37983"),
  s = n("884691"),
  l = n("153967"),
  o = n("382133"),
  c = n("630394"),
  u = n("122968"),
  d = n("91601"),
  f = n("333693"),
  h = n("618991"),
  m = n("77078"),
  p = n("812204"),
  g = n("685665"),
  v = n("153335"),
  x = n("509167"),
  b = n("377527"),
  S = n("153160"),
  E = n("271560"),
  I = n("253981"),
  j = n("49111"),
  R = n("646718"),
  N = n("782340"),
  T = n("816896");
let y = {
  width: 20,
  height: 20,
  color: "white"
};

function C(e) {
  var t;
  let {
    app: n,
    subscriptionGroupListing: i,
    guildId: r,
    products: c
  } = e, [u, d] = s.useState(0), {
    subscription_listings: m = []
  } = i, p = s.useMemo(() => {
    let e = n.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = I.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [n]), g = s.useMemo(() => {
    var e;
    let t = n.getCoverImageURL(800);
    return null != t && null !== (e = I.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [n]);
  return (0, a.jsxs)("div", {
    className: T.wrapper,
    children: [(0, a.jsx)(l.Banner, {
      title: n.name,
      subtitle: null !== (t = n.description) && void 0 !== t ? t : void 0,
      iconSrc: p,
      backgroundSrc: g
    }), (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
      className: T.tabs,
      children: [(0, a.jsx)(o.default, {
        icon: (0, a.jsx)(f.BadgeIcon, {
          ...y
        }),
        title: N.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: N.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === m.length,
        selected: 0 === u,
        onClick: () => {
          d(0)
        }
      }), (0, a.jsx)(o.default, {
        icon: (0, a.jsx)(h.TicketIcon, {
          ...y
        }),
        title: N.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: N.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === c.length,
        selected: 1 === u,
        onClick: () => {
          d(1)
        }
      })]
    }), (0, a.jsx)("div", {
      className: T.productList,
      children: 1 === u ? c.map(e => (0, a.jsx)(w, {
        sku: e,
        appId: n.id
      }, e.id)) : m.map(e => (0, a.jsx)(O, {
        appId: n.id,
        groupListingId: i.id,
        guildId: r,
        listing: e
      }, e.id))
    })]
  })
}(r = i || (i = {}))[r.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", r[r.PRODUCTS = 1] = "PRODUCTS";

function O(e) {
  var t, n, i;
  let {
    appId: r,
    groupListingId: s,
    guildId: l,
    listing: o
  } = e, {
    openModal: c
  } = (0, v.default)({
    listing: o,
    guildId: l,
    groupListingId: s,
    showBenefitsFirst: !0,
    analyticsLocation: j.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), f = o.subscription_plans.length > 0 ? o.subscription_plans[0] : null;
  return null === f ? null : (0, a.jsx)(d.SubscriptionCard, {
    benefits: (0, a.jsx)(u.SubscriptionBenefits, {
      benefits: null !== (n = null === (t = o.store_listing_benefits) || void 0 === t ? void 0 : t.map(e => ({
        id: e.id,
        title: e.name,
        description: e.description,
        icon: (0, b.getBenefitIcon)(r, e.icon)
      }))) && void 0 !== n ? n : [],
      onDetails: () => {}
    }),
    description: o.description,
    imgSrc: null != o.image_asset && null !== (i = I.default.toURLSafe((0, E.getAssetURL)(r, o.image_asset))) && void 0 !== i ? i : void 0,
    purchaseButton: (0, a.jsx)(m.Button, {
      onClick: c,
      children: N.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, S.formatRate)((0, S.formatPrice)(f.price, f.currency), R.SubscriptionIntervalTypes.MONTH, 1)
      })
    }),
    title: o.name
  })
}

function w(e) {
  let {
    sku: t,
    appId: n
  } = e, {
    analyticsLocations: i
  } = (0, g.default)(p.default.APP_STOREFRONT), {
    price: r
  } = t;
  return null == r ? null : (0, a.jsx)(c.ProductCard, {
    purchaseButton: (0, a.jsx)(m.Button, {
      onClick: () => {
        (0, x.default)({
          applicationId: n,
          skuId: t.id,
          analyticsLocations: i
        })
      },
      children: N.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, S.formatPrice)(r.amount, r.currency)
      })
    }),
    title: t.name
  })
}