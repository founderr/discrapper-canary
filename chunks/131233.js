"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
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
  x = n("49111"),
  b = n("646718"),
  E = n("782340"),
  S = n("816896");
let R = {
  width: 20,
  height: 20,
  color: "white"
};

function I(e) {
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
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) return new URL(t)
    }
  }, [n]), g = s.useMemo(() => {
    let e = n.getCoverImageURL(800);
    return null != e ? new URL(e) : void 0
  }, [n]);
  return (0, r.jsxs)("div", {
    className: S.wrapper,
    children: [(0, r.jsx)(l.Banner, {
      title: n.name,
      subtitle: null !== (t = n.description) && void 0 !== t ? t : void 0,
      iconSrc: h,
      backgroundSrc: g
    }), (0, r.jsx)("br", {}), (0, r.jsxs)("div", {
      className: S.tabs,
      children: [(0, r.jsx)(o.default, {
        icon: (0, r.jsx)(c.BadgeIcon, {
          ...R
        }),
        title: E.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: E.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === m.length,
        selected: 0 === f,
        onClick: () => {
          p(0)
        }
      }), (0, r.jsx)(o.default, {
        icon: (0, r.jsx)(d.TicketIcon, {
          ...R
        }),
        title: E.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: E.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === u.length,
        selected: 1 === f,
        onClick: () => {
          p(1)
        }
      })]
    }), (0, r.jsx)("div", {
      className: S.productList,
      children: 1 === f ? u.map(e => (0, r.jsx)(j, {
        sku: e,
        appId: n.id
      }, e.id)) : m.map(e => (0, r.jsx)(N, {
        sku: e,
        appId: n.id,
        groupListingId: i.id,
        guildId: a
      }, e.id))
    })]
  })
}(a = i || (i = {}))[a.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", a[a.PRODUCTS = 1] = "PRODUCTS";

function N(e) {
  var t;
  let {
    sku: n,
    appId: i,
    groupListingId: a,
    guildId: s
  } = e, {
    openModal: l
  } = (0, h.default)({
    listing: n,
    guildId: s,
    groupListingId: a,
    showBenefitsFirst: !0,
    analyticsLocation: x.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), o = null === (t = n.image_asset) || void 0 === t ? void 0 : t.id, c = n.subscription_plans.length > 0 ? n.subscription_plans[0] : null;
  return null === c ? null : (0, r.jsx)(u.ProductCard, {
    title: n.name,
    imgSrc: null != o ? new URL("https://cdn.discordapp.com/app-assets/".concat(i, "/store/").concat(o)) : void 0,
    price: (0, v.formatRate)((0, v.formatPrice)(c.price, c.currency), b.SubscriptionIntervalTypes.MONTH, 1),
    priceLabel: E.default.Messages.STOREFRONT_SUBSCRIPTION,
    purchaseButton: (0, r.jsx)(f.Button, {
      onClick: l,
      children: E.default.Messages.STOREFRONT_SUBSCRIBE
    }),
    benefits: {
      title: E.default.Messages.STOREFRONT_SUBSCRIPTION_BENEFITS,
      items: n.sku_benefits.benefits.map((e, t) => {
        var n, i;
        return (0, r.jsx)(u.ProductCardBenefit, {
          name: e.name,
          description: e.description,
          icon: (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) != null ? new URL("https://cdn.discordapp.com/emojis/".concat(e.emoji.id)) : null === (i = e.emoji) || void 0 === i ? void 0 : i.name
        }, e.name + t)
      })
    }
  })
}

function j(e) {
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
    priceLabel: E.default.Messages.STOREFRONT_ONE_TIME_PURCHASE,
    purchaseButton: (0, r.jsx)(f.Button, {
      onClick: () => {
        (0, g.default)({
          applicationId: n,
          skuId: t.id,
          analyticsLocations: i
        })
      },
      children: E.default.Messages.STOREFRONT_PURCHASE
    })
  })
}