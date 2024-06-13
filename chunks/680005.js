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
    onHasClicked: u,
    skuId: h,
    subPlan: T,
    icon: I
  } = e, {
    openModal: g
  } = (0, o.default)({
    guildId: a,
    groupListingId: l,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT,
    skuId: h
  }), x = (0, c.useHasActiveEntitlement)(h);
  return "guild" !== r && ("user" !== r || x) ? (0, i.jsx)(_, {
    className: n,
    children: p.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: h,
    onClick: e => {
      (null != s ? s : g)(e), null == u || u()
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: m.btnContent,
      children: [I, p.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, d.formatRate)((0, d.formatPrice)(T.price, T.currency), S.SubscriptionIntervalTypes.MONTH, 1)
      })]
    })
  })
}

function T(e) {
  let {
    appId: t,
    className: n,
    onClick: l,
    onHasClicked: o,
    sku: u,
    icon: S
  } = e, {
    analyticsLocations: h
  } = (0, a.default)(r.default.APP_STOREFRONT), T = () => {
    (0, s.default)({
      applicationId: t,
      skuId: u.id,
      analyticsLocations: h
    })
  }, I = (0, c.useHasActiveEntitlement)(u.id), g = u.type === f.SKUTypes.DURABLE && I, {
    price: x
  } = u;
  return null == x ? null : g ? (0, i.jsx)(_, {
    className: n,
    children: p.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: u.id,
    onClick: e => {
      (null != l ? l : T)(e), null == o || o()
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: m.btnContent,
      children: [S, p.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, d.formatPrice)(x.amount, x.currency)
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