"use strict";
n.r(t), n.d(t, {
  ItemPurchaseButton: function() {
    return T
  },
  SubscriptionPurchaseButton: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var l = n("481060"),
  r = n("100527"),
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

function h(e) {
  let {
    appId: t,
    className: n,
    groupListingId: l,
    groupListingType: r,
    guildId: a,
    onClick: s,
    skuId: u,
    subPlan: h,
    icon: T
  } = e, {
    openModal: I
  } = (0, o.default)({
    guildId: a,
    groupListingId: l,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT,
    skuId: u
  }), g = (0, c.useHasActiveEntitlement)(u);
  return "guild" !== r && ("user" !== r || g) ? (0, i.jsx)(_, {
    className: n,
    children: p.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: u,
    onClick: null != s ? s : I,
    className: n,
    children: (0, i.jsxs)("div", {
      className: m.btnContent,
      children: [T, p.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, d.formatRate)((0, d.formatPrice)(h.price, h.currency), S.SubscriptionIntervalTypes.MONTH, 1)
      })]
    })
  })
}

function T(e) {
  let {
    appId: t,
    className: n,
    onClick: l,
    sku: o,
    icon: u
  } = e, {
    analyticsLocations: S
  } = (0, a.default)(r.default.APP_STOREFRONT), h = (0, c.useHasActiveEntitlement)(o.id), T = o.type === f.SKUTypes.DURABLE && h, {
    price: I
  } = o;
  return null == I ? null : T ? (0, i.jsx)(_, {
    className: n,
    children: p.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: o.id,
    onClick: null != l ? l : () => {
      (0, s.default)({
        applicationId: t,
        skuId: o.id,
        analyticsLocations: S
      })
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: m.btnContent,
      children: [u, p.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, d.formatPrice)(I.amount, I.currency)
      })]
    })
  })
}

function v(e) {
  let {
    appId: t,
    skuId: n,
    onClick: r,
    ...a
  } = e;
  return (0, i.jsx)(l.Button, {
    ...a,
    onClick: e => {
      u.default.track(f.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == r || r(e)
    }
  })
}

function _(e) {
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