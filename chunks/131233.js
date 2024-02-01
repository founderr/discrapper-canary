"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var i, r, l = n("37983"),
  a = n("884691"),
  s = n("382133"),
  o = n("630394"),
  u = n("333693"),
  c = n("618991"),
  d = n("77078"),
  f = n("153335"),
  h = n("153160"),
  p = n("49111"),
  v = n("782340"),
  m = n("843963");
let g = {
  width: 20,
  height: 20,
  color: "white"
};

function x(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: i
  } = e, [r, o] = a.useState(0), {
    subscription_listings: d = []
  } = n;
  return (0, l.jsxs)("div", {
    className: m.wrapper,
    children: [(0, l.jsxs)("div", {
      className: m.tabs,
      children: [(0, l.jsx)(s.default, {
        icon: (0, l.jsx)(u.BadgeIcon, {
          ...g
        }),
        title: v.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: v.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: t.name
        }),
        disabled: !1,
        selected: 0 === r,
        onClick: () => {
          o(0)
        }
      }), (0, l.jsx)(s.default, {
        icon: (0, l.jsx)(c.TicketIcon, {
          ...g
        }),
        title: v.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: v.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: t.name
        }),
        disabled: !0,
        selected: 1 === r,
        onClick: () => {
          o(1)
        }
      })]
    }), (0, l.jsx)("div", {
      className: m.productList,
      children: 1 === r ? null : d.map(e => (0, l.jsx)(C, {
        sku: e,
        appId: t.id,
        groupListingId: n.id,
        guildId: i
      }, e.id))
    })]
  })
}

function C(e) {
  var t;
  let {
    sku: n,
    appId: i,
    groupListingId: r,
    guildId: a
  } = e, {
    openModal: s
  } = (0, f.default)({
    listing: n,
    guildId: a,
    groupListingId: r,
    showBenefitsFirst: !0,
    analyticsLocation: p.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), u = null === (t = n.image_asset) || void 0 === t ? void 0 : t.id, c = n.subscription_plans.length > 0 ? n.subscription_plans[0] : null;
  return null === c ? null : (0, l.jsx)(o.ProductCard, {
    title: n.name,
    imgSrc: null != u ? new URL("https://cdn.discordapp.com/app-assets/".concat(i, "/store/").concat(u)) : void 0,
    price: "".concat((0, h.formatPrice)(c.price, c.currency), " / mo"),
    priceLabel: v.default.Messages.STOREFRONT_SUBSCRIPTION,
    purchaseButton: (0, l.jsx)(d.Button, {
      onClick: s,
      children: v.default.Messages.STOREFRONT_SUBSCRIBE
    }),
    benefits: {
      title: v.default.Messages.STOREFRONT_SUBSCRIPTION_BENEFITS,
      items: n.sku_benefits.benefits.map((e, t) => {
        var n, i;
        return (0, l.jsx)(o.ProductCardBenefit, {
          name: e.name,
          description: e.description,
          icon: (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) != null ? new URL("https://cdn.discordapp.com/emojis/".concat(e.emoji.id)) : null === (i = e.emoji) || void 0 === i ? void 0 : i.name
        }, e.name + t)
      })
    }
  })
}(r = i || (i = {}))[r.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", r[r.PRODUCTS = 1] = "PRODUCTS"