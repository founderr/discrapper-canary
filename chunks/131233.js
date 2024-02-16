"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var i, r, a = n("37983"),
  s = n("884691"),
  l = n("153967"),
  o = n("382133"),
  u = n("630394"),
  c = n("333693"),
  d = n("618991"),
  f = n("77078"),
  p = n("153335"),
  m = n("153160"),
  h = n("49111"),
  g = n("646718"),
  v = n("782340"),
  x = n("816896");
let b = {
  width: 20,
  height: 20,
  color: "white"
};

function E(e) {
  var t;
  let {
    app: n,
    subscriptionGroupListing: i,
    guildId: r,
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
  return (0, a.jsxs)("div", {
    className: x.wrapper,
    children: [(0, a.jsx)(l.Banner, {
      title: n.name,
      subtitle: null !== (t = n.description) && void 0 !== t ? t : void 0,
      iconSrc: h,
      backgroundSrc: g
    }), (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
      className: x.tabs,
      children: [(0, a.jsx)(o.default, {
        icon: (0, a.jsx)(c.BadgeIcon, {
          ...b
        }),
        title: v.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: v.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === m.length,
        selected: 0 === f,
        onClick: () => {
          p(0)
        }
      }), (0, a.jsx)(o.default, {
        icon: (0, a.jsx)(d.TicketIcon, {
          ...b
        }),
        title: v.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: v.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: n.name
        }),
        disabled: 0 === u.length,
        selected: 1 === f,
        onClick: () => {
          p(1)
        }
      })]
    }), (0, a.jsx)("div", {
      className: x.productList,
      children: 1 === f ? u.map(e => (0, a.jsx)(R, {
        sku: e
      }, e.id)) : m.map(e => (0, a.jsx)(S, {
        sku: e,
        appId: n.id,
        groupListingId: i.id,
        guildId: r
      }, e.id))
    })]
  })
}(r = i || (i = {}))[r.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", r[r.PRODUCTS = 1] = "PRODUCTS";

function S(e) {
  var t;
  let {
    sku: n,
    appId: i,
    groupListingId: r,
    guildId: s
  } = e, {
    openModal: l
  } = (0, p.default)({
    listing: n,
    guildId: s,
    groupListingId: r,
    showBenefitsFirst: !0,
    analyticsLocation: h.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), o = null === (t = n.image_asset) || void 0 === t ? void 0 : t.id, c = n.subscription_plans.length > 0 ? n.subscription_plans[0] : null;
  return null === c ? null : (0, a.jsx)(u.ProductCard, {
    title: n.name,
    imgSrc: null != o ? new URL("https://cdn.discordapp.com/app-assets/".concat(i, "/store/").concat(o)) : void 0,
    price: (0, m.formatRate)((0, m.formatPrice)(c.price, c.currency), g.SubscriptionIntervalTypes.MONTH, 1),
    priceLabel: v.default.Messages.STOREFRONT_SUBSCRIPTION,
    purchaseButton: (0, a.jsx)(f.Button, {
      onClick: l,
      children: v.default.Messages.STOREFRONT_SUBSCRIBE
    }),
    benefits: {
      title: v.default.Messages.STOREFRONT_SUBSCRIPTION_BENEFITS,
      items: n.sku_benefits.benefits.map((e, t) => {
        var n, i;
        return (0, a.jsx)(u.ProductCardBenefit, {
          name: e.name,
          description: e.description,
          icon: (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) != null ? new URL("https://cdn.discordapp.com/emojis/".concat(e.emoji.id)) : null === (i = e.emoji) || void 0 === i ? void 0 : i.name
        }, e.name + t)
      })
    }
  })
}

function R(e) {
  let {
    sku: t
  } = e, {
    price: n
  } = t;
  return null == n ? null : (0, a.jsx)(u.ProductCard, {
    title: t.name,
    price: (0, m.formatPrice)(n.amount, n.currency),
    priceLabel: v.default.Messages.STOREFRONT_ONE_TIME_PURCHASE,
    purchaseButton: (0, a.jsx)(f.Button, {
      children: v.default.Messages.STOREFRONT_PURCHASE
    })
  })
}