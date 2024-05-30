"use strict";
n.r(t), n.d(t, {
  ItemPurchaseButton: function() {
    return h
  },
  SubscriptionPurchaseButton: function() {
    return m
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
  p = n("689938");

function m(e) {
  let {
    appId: t,
    className: n,
    groupListingId: r,
    groupListingType: l,
    guildId: a,
    onClick: s,
    skuId: u,
    subPlan: m
  } = e, {
    openModal: h
  } = (0, o.default)({
    guildId: a,
    groupListingId: r,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT,
    skuId: u
  }), I = (0, c.useHasActiveEntitlement)(u);
  return "guild" !== l && ("user" !== l || I) ? (0, i.jsx)(T, {
    className: n,
    children: p.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: u,
    onClick: null != s ? s : h,
    className: n,
    children: p.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, d.formatRate)((0, d.formatPrice)(m.price, m.currency), S.SubscriptionIntervalTypes.MONTH, 1)
    })
  })
}

function h(e) {
  let {
    appId: t,
    className: n,
    onClick: r,
    sku: o
  } = e, {
    analyticsLocations: u
  } = (0, a.default)(l.default.APP_STOREFRONT), S = (0, c.useHasActiveEntitlement)(o.id), m = o.type === f.SKUTypes.DURABLE && S, {
    price: h
  } = o;
  return null == h ? null : m ? (0, i.jsx)(T, {
    className: n,
    children: p.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: o.id,
    onClick: null != r ? r : () => {
      (0, s.default)({
        applicationId: t,
        skuId: o.id,
        analyticsLocations: u
      })
    },
    className: n,
    children: p.default.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, d.formatPrice)(h.amount, h.currency)
    })
  })
}

function v(e) {
  let {
    appId: t,
    skuId: n,
    onClick: l,
    ...a
  } = e;
  return (0, i.jsx)(r.Button, {
    ...a,
    onClick: e => {
      u.default.track(f.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == l || l(e)
    }
  })
}

function T(e) {
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