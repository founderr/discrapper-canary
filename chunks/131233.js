"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var i, a, r = n("37983"),
  s = n("884691"),
  l = n("153967"),
  o = n("382133"),
  u = n("630394"),
  c = n("333693"),
  d = n("618991"),
  f = n("77078"),
  p = n("812204"),
  m = n("685665"),
  h = n("153335"),
  g = n("509167"),
  v = n("153160"),
  x = n("253981"),
  b = n("49111"),
  E = n("646718"),
  S = n("782340"),
  R = n("816896");
let I = {
  width: 20,
  height: 20,
  color: "white"
};

function N(e) {
  var t;
  let {
    app: n,
    subscriptionGroupListing: i,
    guildId: a,
    products: u
  } = e, [f, p] = s.useState(0), {
    subscription_listings: m = []
  } = i, h = s.useMemo(() => {
    let e = n.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = x.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [n]), g = s.useMemo(() => {
    var e;
    let t = n.getCoverImageURL(800);
    return null != t && null !== (e = x.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [n]);
  return (0, r.jsxs)("div", {
    className: R.wrapper,
    children: [(0, r.jsx)(l.Banner, {
      title: n.name,
      subtitle: null !== (t = n.description) && void 0 !== t ? t : void 0,
      iconSrc: h,
      backgroundSrc: g
    }), (0, r.jsx)("br", {}), (0, r.jsxs)("div", {
      className: R.tabs,
      children: [(0, r.jsx)(o.default, {
        icon: (0, r.jsx)(c.BadgeIcon, {
          ...I
        }),
        title: S.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: S.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === m.length,
        selected: 0 === f,
        onClick: () => {
          p(0)
        }
      }), (0, r.jsx)(o.default, {
        icon: (0, r.jsx)(d.TicketIcon, {
          ...I
        }),
        title: S.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: S.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === u.length,
        selected: 1 === f,
        onClick: () => {
          p(1)
        }
      })]
    }), (0, r.jsx)("div", {
      className: R.productList,
      children: 1 === f ? u.map(e => (0, r.jsx)(T, {
        sku: e,
        appId: n.id
      }, e.id)) : m.map(e => (0, r.jsx)(j, {
        sku: e,
        appId: n.id,
        groupListingId: i.id,
        guildId: a
      }, e.id))
    })]
  })
}(a = i || (i = {}))[a.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", a[a.PRODUCTS = 1] = "PRODUCTS";

function j(e) {
  var t, n;
  let {
    sku: i,
    appId: a,
    groupListingId: s,
    guildId: l
  } = e, {
    openModal: o
  } = (0, h.default)({
    listing: i,
    guildId: l,
    groupListingId: s,
    showBenefitsFirst: !0,
    analyticsLocation: b.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), c = null === (t = i.image_asset) || void 0 === t ? void 0 : t.id, d = i.subscription_plans.length > 0 ? i.subscription_plans[0] : null;
  return null === d ? null : (0, r.jsx)(u.ProductCard, {
    title: i.name,
    imgSrc: null != c && null !== (n = x.default.toURLSafe("https://cdn.discordapp.com/app-assets/".concat(a, "/store/").concat(c))) && void 0 !== n ? n : void 0,
    price: (0, v.formatRate)((0, v.formatPrice)(d.price, d.currency), E.SubscriptionIntervalTypes.MONTH, 1),
    priceLabel: S.default.Messages.STOREFRONT_SUBSCRIPTION,
    purchaseButton: (0, r.jsx)(f.Button, {
      onClick: o,
      children: S.default.Messages.STOREFRONT_SUBSCRIBE
    }),
    benefits: {
      title: S.default.Messages.STOREFRONT_SUBSCRIPTION_BENEFITS,
      items: i.sku_benefits.benefits.map((e, t) => {
        var n, i, a;
        return (0, r.jsx)(u.ProductCardBenefit, {
          name: e.name,
          description: e.description,
          icon: (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) != null ? null !== (a = x.default.toURLSafe("https://cdn.discordapp.com/emojis/".concat(e.emoji.id))) && void 0 !== a ? a : void 0 : null === (i = e.emoji) || void 0 === i ? void 0 : i.name
        }, e.name + t)
      })
    }
  })
}

function T(e) {
  let {
    sku: t,
    appId: n
  } = e, {
    analyticsLocations: i
  } = (0, m.default)(p.default.APP_STOREFRONT), {
    price: a
  } = t;
  return null == a ? null : (0, r.jsx)(u.ProductCard, {
    title: t.name,
    price: (0, v.formatPrice)(a.amount, a.currency),
    priceLabel: S.default.Messages.STOREFRONT_ONE_TIME_PURCHASE,
    purchaseButton: (0, r.jsx)(f.Button, {
      onClick: () => {
        (0, g.default)({
          applicationId: n,
          skuId: t.id,
          analyticsLocations: i
        })
      },
      children: S.default.Messages.STOREFRONT_PURCHASE
    })
  })
}