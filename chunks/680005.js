"use strict";
n.r(e), n.d(e, {
  ItemPurchaseButton: function() {
    return v
  },
  SubscriptionPurchaseButton: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("860911"),
  l = n("481060"),
  a = n("100527"),
  s = n("906732"),
  o = n("887706"),
  u = n("87484"),
  d = n("696906"),
  c = n("703656"),
  f = n("626135"),
  S = n("937615"),
  p = n("110742"),
  m = n("981631"),
  h = n("474936"),
  T = n("689938"),
  _ = n("806448");

function I(t) {
  let {
    appId: e,
    className: n,
    groupListingId: r,
    groupListingType: l,
    guildId: a,
    onClick: s,
    onHasClicked: o,
    skuId: u,
    subPlan: c,
    icon: f
  } = t, {
    openModal: I
  } = (0, d.default)({
    guildId: a,
    groupListingId: r,
    showBenefitsFirst: !1,
    analyticsLocation: m.AnalyticsLocations.APP_STOREFRONT,
    skuId: u
  }), v = (0, p.useHasActiveEntitlement)(u);
  return "guild" !== l && ("user" !== l || v) ? (0, i.jsx)(g, {
    className: n,
    children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(E, {
    appId: e,
    skuId: u,
    onClick: t => {
      (null != s ? s : I)(t), null == o || o()
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: _.btnContent,
      children: [f, T.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, S.formatRate)((0, S.formatPrice)(c.price, c.currency), h.SubscriptionIntervalTypes.MONTH, 1)
      })]
    })
  })
}

function v(t) {
  let {
    appId: e,
    className: n,
    onClick: r,
    onHasClicked: l,
    sku: o,
    icon: d
  } = t, {
    analyticsLocations: c
  } = (0, s.default)(a.default.APP_STOREFRONT), f = () => {
    (0, u.default)({
      applicationId: e,
      skuId: o.id,
      analyticsLocations: c
    })
  }, h = (0, p.useHasActiveEntitlement)(o.id), I = o.type === m.SKUTypes.DURABLE && h, {
    price: v
  } = o;
  return null == v ? null : I ? (0, i.jsx)(g, {
    className: n,
    children: T.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(E, {
    appId: e,
    skuId: o.id,
    onClick: t => {
      (null != r ? r : f)(t), null == l || l()
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: _.btnContent,
      children: [d, T.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, S.formatPrice)(v.amount, v.currency)
      })]
    })
  })
}

function E(t) {
  let {
    appId: e,
    skuId: n,
    onClick: a,
    ...s
  } = t, u = (0, o.default)();
  return (0, i.jsx)(l.Button, {
    ...s,
    onClick: t => {
      if (f.default.track(m.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
          application_id: e,
          sku_id: n
        }), !u) {
        t.preventDefault(), t.stopPropagation();
        let i = m.Routes.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n),
          l = (0, r.getLoginPath)(i, !1);
        (0, c.transitionTo)(l);
        return
      }
      null == a || a(t)
    }
  })
}

function g(t) {
  let {
    className: e,
    children: n
  } = t;
  return (0, i.jsx)(l.Button, {
    disabled: !0,
    className: e,
    look: l.Button.Looks.OUTLINED,
    color: l.Button.Colors.PRIMARY,
    size: l.Button.Sizes.SMALL,
    children: n
  })
}