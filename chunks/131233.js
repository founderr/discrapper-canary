"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var i, a, r = n("37983"),
  s = n("884691"),
  l = n("153967"),
  o = n("382133"),
  c = n("630394"),
  u = n("333693"),
  d = n("618991"),
  f = n("77078"),
  p = n("153335"),
  m = n("153160"),
  h = n("49111"),
  g = n("782340"),
  v = n("816896");
let x = {
  width: 20,
  height: 20,
  color: "white"
};

function b(e) {
  var t;
  let {
    app: n,
    subscriptionGroupListing: i,
    guildId: a
  } = e, [c, f] = s.useState(0), {
    subscription_listings: p = []
  } = i, m = s.useMemo(() => {
    let e = n.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) return new URL(t)
    }
  }, [n]), h = s.useMemo(() => {
    let e = n.getCoverImageURL(800);
    return null != e ? new URL(e) : void 0
  }, [n]);
  return (0, r.jsxs)("div", {
    className: v.wrapper,
    children: [(0, r.jsx)(l.Banner, {
      title: n.name,
      subtitle: null !== (t = n.description) && void 0 !== t ? t : void 0,
      iconSrc: m,
      backgroundSrc: h
    }), (0, r.jsx)("br", {}), (0, r.jsxs)("div", {
      className: v.tabs,
      children: [(0, r.jsx)(o.default, {
        icon: (0, r.jsx)(u.BadgeIcon, {
          ...x
        }),
        title: g.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: g.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: n.name
        }),
        disabled: !1,
        selected: 0 === c,
        onClick: () => {
          f(0)
        }
      }), (0, r.jsx)(o.default, {
        icon: (0, r.jsx)(d.TicketIcon, {
          ...x
        }),
        title: g.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: g.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: n.name
        }),
        disabled: !0,
        selected: 1 === c,
        onClick: () => {
          f(1)
        }
      })]
    }), (0, r.jsx)("div", {
      className: v.productList,
      children: 1 === c ? null : p.map(e => (0, r.jsx)(E, {
        sku: e,
        appId: n.id,
        groupListingId: i.id,
        guildId: a
      }, e.id))
    })]
  })
}

function E(e) {
  var t;
  let {
    sku: n,
    appId: i,
    groupListingId: a,
    guildId: s
  } = e, {
    openModal: l
  } = (0, p.default)({
    listing: n,
    guildId: s,
    groupListingId: a,
    showBenefitsFirst: !0,
    analyticsLocation: h.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), o = null === (t = n.image_asset) || void 0 === t ? void 0 : t.id, u = n.subscription_plans.length > 0 ? n.subscription_plans[0] : null;
  return null === u ? null : (0, r.jsx)(c.ProductCard, {
    title: n.name,
    imgSrc: null != o ? new URL("https://cdn.discordapp.com/app-assets/".concat(i, "/store/").concat(o)) : void 0,
    price: "".concat((0, m.formatPrice)(u.price, u.currency), " / mo"),
    priceLabel: g.default.Messages.STOREFRONT_SUBSCRIPTION,
    purchaseButton: (0, r.jsx)(f.Button, {
      onClick: l,
      children: g.default.Messages.STOREFRONT_SUBSCRIBE
    }),
    benefits: {
      title: g.default.Messages.STOREFRONT_SUBSCRIPTION_BENEFITS,
      items: n.sku_benefits.benefits.map((e, t) => {
        var n, i;
        return (0, r.jsx)(c.ProductCardBenefit, {
          name: e.name,
          description: e.description,
          icon: (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) != null ? new URL("https://cdn.discordapp.com/emojis/".concat(e.emoji.id)) : null === (i = e.emoji) || void 0 === i ? void 0 : i.name
        }, e.name + t)
      })
    }
  })
}(a = i || (i = {}))[a.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", a[a.PRODUCTS = 1] = "PRODUCTS"