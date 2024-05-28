"use strict";
n.r(t), n("47120"), n("411104");
var l = n("735250"),
  u = n("470079"),
  a = n("442837"),
  s = n("780384"),
  o = n("481060"),
  r = n("366939"),
  i = n("911969"),
  _ = n("410030"),
  c = n("100527"),
  d = n("906732"),
  I = n("583046"),
  S = n("963249"),
  E = n("853872"),
  T = n("509545"),
  f = n("626135"),
  O = n("74538"),
  N = n("937615"),
  M = n("212895"),
  m = n("296848"),
  p = n("374649"),
  U = n("973159"),
  P = n("798769"),
  R = n("317269"),
  C = n("474936"),
  L = n("981631"),
  y = n("689938"),
  A = n("114952");
t.default = e => {
  var t, n, v, B;
  let {
    daysLeft: D,
    premiumType: g,
    premiumSubscription: Y,
    analyticsSource: H,
    ...b
  } = e, h = (0, _.default)(), [F, W] = u.useState(!1), {
    analyticsLocations: k
  } = (0, d.default)(c.default.PREMIUM_UNCANCEL_MODAL), x = (0, a.useStateFromStores)([E.default], () => (null == Y ? void 0 : Y.paymentSourceId) != null ? E.default.getPaymentSource(Y.paymentSourceId) : null, [Y]), G = Y.items[0].planId, j = (0, O.castPremiumSubscriptionAsSkuId)(C.SubscriptionPlanInfo[G].skuId), {
    priceOptions: w
  } = (0, I.default)({
    activeSubscription: null,
    skuIDs: [j],
    paymentSourceId: null == Y ? void 0 : Y.paymentSourceId,
    isGift: !1
  }), [K] = (0, p.useSubscriptionInvoicePreview)({
    subscriptionId: Y.id,
    items: [{
      planId: G,
      quantity: 1
    }],
    renewal: !0,
    paymentSourceId: null == Y ? void 0 : Y.paymentSourceId,
    currency: w.currency,
    analyticsLocations: (0, d.default)(c.default.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: c.default.PREMIUM_UNCANCEL_MODAL
  }), q = (0, a.useStateFromStores)([T.default], () => (0, m.getOrFetchSubscriptionPlan)(G), [G]), z = (0, a.useStateFromStores)([T.default], () => T.default.isFetchingForSKU(j)), J = null == K ? void 0 : null === (B = K.invoiceItems) || void 0 === B ? void 0 : null === (v = B.find(e => e.subscriptionPlanId === G)) || void 0 === v ? void 0 : null === (n = v.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === i.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, Q = null != q ? (0, O.getPrice)(q.id, !1, !1, w) : null, V = null != Q && null != J ? (0, N.formatPrice)(Q.amount - (null != J ? J : 0), Q.currency) : null, {
    intervalType: X,
    intervalCount: Z
  } = O.default.getInterval(G), $ = g === C.PremiumTypes.TIER_1, ee = null != Q ? (0, N.formatPrice)(Q.amount, Q.currency) : null;
  return u.useEffect(() => {
    f.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: H
    })
  }, [H]), (0, l.jsx)(o.ModalRoot, {
    ...b,
    className: A.modal,
    children: F ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(P.default, {
        premiumType: g,
        onClose: b.onClose
      }), (0, l.jsx)(R.default, {
        planId: G,
        onClose: b.onClose,
        paymentSourceType: null == x ? void 0 : x.type
      })]
    }) : (0, l.jsx)(U.default, {
      premiumType: g,
      titleText: $ ? y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
        daysLeft: D
      }) : y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
        daysLeft: D
      }),
      subtitleText: $ ? y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
      footer: (0, l.jsxs)("div", {
        children: [null !== ee ? (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: function(e) {
            switch (X) {
              case C.SubscriptionIntervalTypes.YEAR:
                return $ ? y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                  price: e
                }) : y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                  price: e
                });
              case C.SubscriptionIntervalTypes.MONTH:
                if (null != V) return y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                  discountPrice: V,
                  defaultPrice: e
                });
                if ($) return y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                  price: e
                });
                if (1 === Z) return y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                  price: e
                });
                else return y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                  price: e,
                  intervalCount: Z
                });
              default:
                throw Error("Unknown interval type ".concat(X))
            }
          }(ee)
        }) : (0, l.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE
        }), (0, l.jsxs)("div", {
          className: A.footer,
          children: [(0, l.jsx)(o.Button, {
            disabled: z,
            onClick: () => {
              if (null != Y) {
                let e = (0, M.planHasCurrency)(G, Y.currency, null == x ? void 0 : x.id);
                null != x && x.id === Y.paymentSourceId && e ? (r.resubscribe(Y, k, L.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), W(!0)) : (b.onClose(), (0, S.default)({
                  initialPlanId: G,
                  analyticsLocations: k,
                  analyticsLocation: L.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                }))
              }
            },
            children: y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
          }), (0, l.jsx)(o.Button, {
            look: o.Button.Looks.LINK,
            color: (0, s.isThemeDark)(h) ? o.Button.Colors.WHITE : o.Button.Colors.PRIMARY,
            onClick: b.onClose,
            children: y.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
          })]
        })]
      }),
      onClose: b.onClose
    })
  })
}