"use strict";
s.r(t), s("47120"), s("411104");
var n = s("735250"),
  a = s("470079"),
  l = s("442837"),
  u = s("780384"),
  r = s("481060"),
  _ = s("366939"),
  i = s("911969"),
  I = s("410030"),
  o = s("100527"),
  d = s("906732"),
  c = s("583046"),
  N = s("963249"),
  E = s("853872"),
  T = s("509545"),
  f = s("626135"),
  R = s("74538"),
  M = s("937615"),
  S = s("212895"),
  O = s("296848"),
  P = s("374649"),
  L = s("973159"),
  C = s("798769"),
  A = s("317269"),
  m = s("474936"),
  p = s("981631"),
  U = s("689938"),
  g = s("114952");
t.default = e => {
  var t, s, h, D;
  let {
    daysLeft: y,
    premiumType: G,
    premiumSubscription: b,
    analyticsSource: B,
    ...F
  } = e, x = (0, I.default)(), [Y, v] = a.useState(!1), {
    analyticsLocations: H
  } = (0, d.default)(o.default.PREMIUM_UNCANCEL_MODAL), W = (0, l.useStateFromStores)([E.default], () => (null == b ? void 0 : b.paymentSourceId) != null ? E.default.getPaymentSource(b.paymentSourceId) : null, [b]), k = b.items[0].planId, j = (0, R.castPremiumSubscriptionAsSkuId)(m.SubscriptionPlanInfo[k].skuId), {
    priceOptions: K
  } = (0, c.default)({
    activeSubscription: null,
    skuIDs: [j],
    paymentSourceId: null == b ? void 0 : b.paymentSourceId,
    isGift: !1
  }), [w] = (0, P.useSubscriptionInvoicePreview)({
    subscriptionId: b.id,
    items: [{
      planId: k,
      quantity: 1
    }],
    renewal: !0,
    paymentSourceId: null == b ? void 0 : b.paymentSourceId,
    currency: K.currency,
    analyticsLocations: (0, d.default)(o.default.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: o.default.PREMIUM_UNCANCEL_MODAL
  }), Z = (0, l.useStateFromStores)([T.default], () => (0, O.getOrFetchSubscriptionPlan)(k), [k]), z = (0, l.useStateFromStores)([T.default], () => T.default.isFetchingForSKU(j)), J = null == w ? void 0 : null === (D = w.invoiceItems) || void 0 === D ? void 0 : null === (h = D.find(e => e.subscriptionPlanId === k)) || void 0 === h ? void 0 : null === (s = h.discounts) || void 0 === s ? void 0 : null === (t = s.find(e => e.type === i.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, q = null != Z ? (0, R.getPrice)(Z.id, !1, !1, K) : null, V = null != q && null != J ? (0, M.formatPrice)(q.amount - (null != J ? J : 0), q.currency) : null, {
    intervalType: Q,
    intervalCount: X
  } = R.default.getInterval(k), $ = G === m.PremiumTypes.TIER_1, ee = null != q ? (0, M.formatPrice)(q.amount, q.currency) : null;
  return a.useEffect(() => {
    f.default.track(p.AnalyticEvents.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: B
    })
  }, [B]), (0, n.jsx)(r.ModalRoot, {
    ...F,
    className: g.modal,
    children: Y ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(C.default, {
        premiumType: G,
        onClose: F.onClose
      }), (0, n.jsx)(A.default, {
        planId: k,
        onClose: F.onClose,
        paymentSourceType: null == W ? void 0 : W.type
      })]
    }) : (0, n.jsx)(L.default, {
      premiumType: G,
      titleText: $ ? U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
        daysLeft: y
      }) : U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
        daysLeft: y
      }),
      subtitleText: $ ? U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
      footer: (0, n.jsxs)("div", {
        children: [null !== ee ? (0, n.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: function(e) {
            switch (Q) {
              case m.SubscriptionIntervalTypes.YEAR:
                return $ ? U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                  price: e
                }) : U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                  price: e
                });
              case m.SubscriptionIntervalTypes.MONTH:
                if (null != V) return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                  discountPrice: V,
                  defaultPrice: e
                });
                if ($) return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                  price: e
                });
                if (1 === X) return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                  price: e
                });
                else return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                  price: e,
                  intervalCount: X
                });
              default:
                throw Error("Unknown interval type ".concat(Q))
            }
          }(ee)
        }) : (0, n.jsx)(r.Spinner, {
          type: r.SpinnerTypes.SPINNING_CIRCLE
        }), (0, n.jsxs)("div", {
          className: g.footer,
          children: [(0, n.jsx)(r.Button, {
            disabled: z,
            onClick: () => {
              if (null != b) {
                let e = (0, S.planHasCurrency)(k, b.currency, null == W ? void 0 : W.id);
                null != W && W.id === b.paymentSourceId && e ? (_.resubscribe(b, H, p.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), v(!0)) : (F.onClose(), (0, N.default)({
                  initialPlanId: k,
                  analyticsLocations: H,
                  analyticsLocation: p.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                }))
              }
            },
            children: U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
          }), (0, n.jsx)(r.Button, {
            look: r.Button.Looks.LINK,
            color: (0, u.isThemeDark)(x) ? r.Button.Colors.WHITE : r.Button.Colors.PRIMARY,
            onClick: F.onClose,
            children: U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
          })]
        })]
      }),
      onClose: F.onClose
    })
  })
}