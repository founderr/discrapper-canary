"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var i, r, l = n("37983"),
  a = n("884691"),
  s = n("153967"),
  o = n("382133"),
  u = n("630394"),
  c = n("333693"),
  d = n("618991"),
  f = n("77078"),
  h = n("153335"),
  p = n("153160"),
  v = n("49111"),
  m = n("782340"),
  g = n("843963");
let x = {
  width: 20,
  height: 20,
  color: "white"
};

function C(e) {
  var t;
  let {
    app: n,
    subscriptionGroupListing: i,
    guildId: r
  } = e, [u, f] = a.useState(0), {
    subscription_listings: h = []
  } = i, p = a.useMemo(() => {
    let e = n.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) return new URL(t)
    }
  }, [n]), v = a.useMemo(() => {
    let e = n.getCoverImageURL(800);
    return null != e ? new URL(e) : void 0
  }, [n]);
  return (0, l.jsxs)("div", {
    className: g.wrapper,
    children: [(0, l.jsx)(s.Banner, {
      title: n.name,
      subtitle: null !== (t = n.description) && void 0 !== t ? t : void 0,
      iconSrc: p,
      backgroundSrc: v
    }), (0, l.jsx)("br", {}), (0, l.jsxs)("div", {
      className: g.tabs,
      children: [(0, l.jsx)(o.default, {
        icon: (0, l.jsx)(c.BadgeIcon, {
          ...x
        }),
        title: m.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: m.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: n.name
        }),
        disabled: !1,
        selected: 0 === u,
        onClick: () => {
          f(0)
        }
      }), (0, l.jsx)(o.default, {
        icon: (0, l.jsx)(d.TicketIcon, {
          ...x
        }),
        title: m.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: m.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: n.name
        }),
        disabled: !0,
        selected: 1 === u,
        onClick: () => {
          f(1)
        }
      })]
    }), (0, l.jsx)("div", {
      className: g.productList,
      children: 1 === u ? null : h.map(e => (0, l.jsx)(b, {
        sku: e,
        appId: n.id,
        groupListingId: i.id,
        guildId: r
      }, e.id))
    })]
  })
}

function b(e) {
  var t;
  let {
    sku: n,
    appId: i,
    groupListingId: r,
    guildId: a
  } = e, {
    openModal: s
  } = (0, h.default)({
    listing: n,
    guildId: a,
    groupListingId: r,
    showBenefitsFirst: !0,
    analyticsLocation: v.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), o = null === (t = n.image_asset) || void 0 === t ? void 0 : t.id, c = n.subscription_plans.length > 0 ? n.subscription_plans[0] : null;
  return null === c ? null : (0, l.jsx)(u.ProductCard, {
    title: n.name,
    imgSrc: null != o ? new URL("https://cdn.discordapp.com/app-assets/".concat(i, "/store/").concat(o)) : void 0,
    price: "".concat((0, p.formatPrice)(c.price, c.currency), " / mo"),
    priceLabel: m.default.Messages.STOREFRONT_SUBSCRIPTION,
    purchaseButton: (0, l.jsx)(f.Button, {
      onClick: s,
      children: m.default.Messages.STOREFRONT_SUBSCRIBE
    }),
    benefits: {
      title: m.default.Messages.STOREFRONT_SUBSCRIPTION_BENEFITS,
      items: n.sku_benefits.benefits.map((e, t) => {
        var n, i;
        return (0, l.jsx)(u.ProductCardBenefit, {
          name: e.name,
          description: e.description,
          icon: (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) != null ? new URL("https://cdn.discordapp.com/emojis/".concat(e.emoji.id)) : null === (i = e.emoji) || void 0 === i ? void 0 : i.name
        }, e.name + t)
      })
    }
  })
}(r = i || (i = {}))[r.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", r[r.PRODUCTS = 1] = "PRODUCTS"