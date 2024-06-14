"use strict";
n.r(e), n.d(e, {
  ItemPurchaseButton: function() {
    return T
  },
  SubscriptionPurchaseButton: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  l = n("100527"),
  a = n("906732"),
  s = n("87484"),
  o = n("696906"),
  u = n("626135"),
  d = n("937615"),
  c = n("110742"),
  f = n("981631"),
  S = n("474936"),
  p = n("689938"),
  m = n("806448");

function h(t) {
  let {
    appId: e,
    className: n,
    groupListingId: r,
    groupListingType: l,
    guildId: a,
    onClick: s,
    onHasClicked: u,
    skuId: h,
    subPlan: T,
    icon: v
  } = t, {
    openModal: E
  } = (0, o.default)({
    guildId: a,
    groupListingId: r,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT,
    skuId: h
  }), g = (0, c.useHasActiveEntitlement)(h);
  return "guild" !== l && ("user" !== l || g) ? (0, i.jsx)(I, {
    className: n,
    children: p.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(_, {
    appId: e,
    skuId: h,
    onClick: t => {
      (null != s ? s : E)(t), null == u || u()
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: m.btnContent,
      children: [v, p.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, d.formatRate)((0, d.formatPrice)(T.price, T.currency), S.SubscriptionIntervalTypes.MONTH, 1)
      })]
    })
  })
}

function T(t) {
  let {
    appId: e,
    className: n,
    onClick: r,
    onHasClicked: o,
    sku: u,
    icon: S
  } = t, {
    analyticsLocations: h
  } = (0, a.default)(l.default.APP_STOREFRONT), T = () => {
    (0, s.default)({
      applicationId: e,
      skuId: u.id,
      analyticsLocations: h
    })
  }, v = (0, c.useHasActiveEntitlement)(u.id), E = u.type === f.SKUTypes.DURABLE && v, {
    price: g
  } = u;
  return null == g ? null : E ? (0, i.jsx)(I, {
    className: n,
    children: p.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(_, {
    appId: e,
    skuId: u.id,
    onClick: t => {
      (null != r ? r : T)(t), null == o || o()
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: m.btnContent,
      children: [S, p.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, d.formatPrice)(g.amount, g.currency)
      })]
    })
  })
}

function _(t) {
  let {
    appId: e,
    skuId: n,
    onClick: l,
    ...a
  } = t;
  return (0, i.jsx)(r.Button, {
    ...a,
    onClick: t => {
      u.default.track(f.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: e,
        sku_id: n
      }), null == l || l(t)
    }
  })
}

function I(t) {
  let {
    className: e,
    children: n
  } = t;
  return (0, i.jsx)(r.Button, {
    disabled: !0,
    className: e,
    look: r.Button.Looks.OUTLINED,
    color: r.Button.Colors.PRIMARY,
    size: r.Button.Sizes.SMALL,
    children: n
  })
}