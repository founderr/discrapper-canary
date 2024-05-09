"use strict";
n.r(t), n.d(t, {
  ItemPurchaseButton: function() {
    return S
  },
  SubscriptionPurchaseButton: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  l = n("100527"),
  s = n("906732"),
  a = n("87484"),
  o = n("696906"),
  d = n("626135"),
  u = n("937615"),
  c = n("110742"),
  f = n("981631"),
  p = n("474936"),
  h = n("689938");

function m(e) {
  let {
    appId: t,
    className: n,
    groupListingId: r,
    groupListingType: l,
    guildId: s,
    listing: a,
    onClick: d,
    subPlan: m
  } = e, {
    openModal: S
  } = (0, o.default)({
    listing: a,
    guildId: s,
    groupListingId: r,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT
  }), x = (0, c.useHasActiveEntitlement)(a.id);
  return "guild" !== l && ("user" !== l || x) ? (0, i.jsx)(g, {
    className: n,
    children: h.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: a.id,
    onClick: null != d ? d : S,
    className: n,
    children: h.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, u.formatRate)((0, u.formatPrice)(m.price, m.currency), p.SubscriptionIntervalTypes.MONTH, 1)
    })
  })
}

function S(e) {
  let {
    appId: t,
    className: n,
    onClick: r,
    sku: o
  } = e, {
    analyticsLocations: d
  } = (0, s.default)(l.default.APP_STOREFRONT), p = (0, c.useHasActiveEntitlement)(o.id), m = o.type === f.SKUTypes.DURABLE && p, {
    price: S
  } = o;
  return null == S ? null : m ? (0, i.jsx)(g, {
    className: n,
    children: h.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: o.id,
    onClick: null != r ? r : () => {
      (0, a.default)({
        applicationId: t,
        skuId: o.id,
        analyticsLocations: d
      })
    },
    className: n,
    children: h.default.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, u.formatPrice)(S.amount, S.currency)
    })
  })
}

function v(e) {
  let {
    appId: t,
    skuId: n,
    onClick: l,
    ...s
  } = e;
  return (0, i.jsx)(r.Button, {
    ...s,
    onClick: e => {
      d.default.track(f.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == l || l(e)
    }
  })
}

function g(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(r.Button, {
    disabled: !0,
    className: t,
    look: r.Button.Looks.OUTLINED,
    color: r.Button.Colors.PRIMARY,
    size: r.Button.Sizes.SMALL,
    children: n
  })
}