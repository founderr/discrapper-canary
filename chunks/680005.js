"use strict";
n.r(t), n.d(t, {
  ItemPurchaseButton: function() {
    return S
  },
  SubscriptionPurchaseButton: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var l = n("481060"),
  r = n("100527"),
  s = n("906732"),
  a = n("87484"),
  o = n("696906"),
  u = n("626135"),
  d = n("937615"),
  c = n("110742"),
  f = n("981631"),
  p = n("474936"),
  m = n("689938");

function h(e) {
  let {
    appId: t,
    className: n,
    groupListingId: l,
    groupListingType: r,
    guildId: s,
    onClick: a,
    skuId: u,
    subPlan: h
  } = e, {
    openModal: S
  } = (0, o.default)({
    guildId: s,
    groupListingId: l,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT,
    skuId: u
  }), T = (0, c.useHasActiveEntitlement)(u);
  return "guild" !== r && ("user" !== r || T) ? (0, i.jsx)(v, {
    className: n,
    children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(g, {
    appId: t,
    skuId: u,
    onClick: null != a ? a : S,
    className: n,
    children: m.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, d.formatRate)((0, d.formatPrice)(h.price, h.currency), p.SubscriptionIntervalTypes.MONTH, 1)
    })
  })
}

function S(e) {
  let {
    appId: t,
    className: n,
    onClick: l,
    sku: o
  } = e, {
    analyticsLocations: u
  } = (0, s.default)(r.default.APP_STOREFRONT), p = (0, c.useHasActiveEntitlement)(o.id), h = o.type === f.SKUTypes.DURABLE && p, {
    price: S
  } = o;
  return null == S ? null : h ? (0, i.jsx)(v, {
    className: n,
    children: m.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(g, {
    appId: t,
    skuId: o.id,
    onClick: null != l ? l : () => {
      (0, a.default)({
        applicationId: t,
        skuId: o.id,
        analyticsLocations: u
      })
    },
    className: n,
    children: m.default.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, d.formatPrice)(S.amount, S.currency)
    })
  })
}

function g(e) {
  let {
    appId: t,
    skuId: n,
    onClick: r,
    ...s
  } = e;
  return (0, i.jsx)(l.Button, {
    ...s,
    onClick: e => {
      u.default.track(f.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == r || r(e)
    }
  })
}

function v(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(l.Button, {
    disabled: !0,
    className: t,
    look: l.Button.Looks.OUTLINED,
    color: l.Button.Colors.PRIMARY,
    size: l.Button.Sizes.SMALL,
    children: n
  })
}