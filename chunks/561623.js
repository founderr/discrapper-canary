"use strict";
s.r(t), s("47120"), s("411104");
var a = s("735250"),
  _ = s("470079"),
  n = s("442837"),
  l = s("780384"),
  u = s("481060"),
  I = s("366939"),
  r = s("911969"),
  i = s("410030"),
  o = s("100527"),
  N = s("906732"),
  d = s("583046"),
  E = s("963249"),
  c = s("853872"),
  T = s("509545"),
  f = s("626135"),
  R = s("74538"),
  M = s("937615"),
  S = s("212895"),
  O = s("296848"),
  P = s("374649"),
  L = s("973159"),
  A = s("798769"),
  C = s("317269"),
  m = s("474936"),
  U = s("981631"),
  p = s("689938"),
  g = s("114952");
t.default = e => {
  var t, s, D, G;
  let {
    daysLeft: y,
    premiumType: b,
    premiumSubscription: F,
    analyticsSource: Y,
    ...h
  } = e, B = (0, i.default)(), [H, W] = _.useState(!1), {
    analyticsLocations: v
  } = (0, N.default)(o.default.PREMIUM_UNCANCEL_MODAL), x = (0, n.useStateFromStores)([c.default], () => (null == F ? void 0 : F.paymentSourceId) != null ? c.default.getPaymentSource(F.paymentSourceId) : null, [F]), k = F.items[0].planId, j = (0, R.castPremiumSubscriptionAsSkuId)(m.SubscriptionPlanInfo[k].skuId), {
    priceOptions: K
  } = (0, d.default)({
    activeSubscription: null,
    skuIDs: [j],
    paymentSourceId: null == F ? void 0 : F.paymentSourceId,
    isGift: !1
  }), [w] = (0, P.useSubscriptionInvoicePreview)({
    subscriptionId: F.id,
    items: [{
      planId: k,
      quantity: 1
    }],
    renewal: !0,
    paymentSourceId: null == F ? void 0 : F.paymentSourceId,
    currency: K.currency,
    analyticsLocations: (0, N.default)(o.default.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: o.default.PREMIUM_UNCANCEL_MODAL
  }), Z = (0, n.useStateFromStores)([T.default], () => (0, O.getOrFetchSubscriptionPlan)(k), [k]), z = (0, n.useStateFromStores)([T.default], () => T.default.isFetchingForSKU(j)), J = null == w ? void 0 : null === (G = w.invoiceItems) || void 0 === G ? void 0 : null === (D = G.find(e => e.subscriptionPlanId === k)) || void 0 === D ? void 0 : null === (s = D.discounts) || void 0 === s ? void 0 : null === (t = s.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, q = null != Z ? (0, R.getPrice)(Z.id, !1, !1, K) : null, V = null != q && null != J ? (0, M.formatPrice)(q.amount - (null != J ? J : 0), q.currency) : null, {
    intervalType: Q,
    intervalCount: X
  } = R.default.getInterval(k), $ = b === m.PremiumTypes.TIER_1, ee = null != q ? (0, M.formatPrice)(q.amount, q.currency) : null;
  return _.useEffect(() => {
    f.default.track(U.AnalyticEvents.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: Y
    })
  }, [Y]), (0, a.jsx)(u.ModalRoot, {
    ...h,
    className: g.modal,
    children: H ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(A.default, {
        premiumType: b,
        onClose: h.onClose
      }), (0, a.jsx)(C.default, {
        planId: k,
        onClose: h.onClose,
        paymentSourceType: null == x ? void 0 : x.type
      })]
    }) : (0, a.jsx)(L.default, {
      premiumType: b,
      titleText: $ ? p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
        daysLeft: y
      }) : p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
        daysLeft: y
      }),
      subtitleText: $ ? p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
      footer: (0, a.jsxs)("div", {
        children: [null !== ee ? (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: function(e) {
            switch (Q) {
              case m.SubscriptionIntervalTypes.YEAR:
                return $ ? p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                  price: e
                }) : p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                  price: e
                });
              case m.SubscriptionIntervalTypes.MONTH:
                if (null != V) return p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                  discountPrice: V,
                  defaultPrice: e
                });
                if ($) return p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                  price: e
                });
                if (1 === X) return p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                  price: e
                });
                else return p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                  price: e,
                  intervalCount: X
                });
              default:
                throw Error("Unknown interval type ".concat(Q))
            }
          }(ee)
        }) : (0, a.jsx)(u.Spinner, {
          type: u.SpinnerTypes.SPINNING_CIRCLE
        }), (0, a.jsxs)("div", {
          className: g.footer,
          children: [(0, a.jsx)(u.Button, {
            disabled: z,
            onClick: () => {
              if (null != F) {
                let e = (0, S.planHasCurrency)(k, F.currency, null == x ? void 0 : x.id);
                null != x && x.id === F.paymentSourceId && e ? (I.resubscribe(F, v, U.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), W(!0)) : (h.onClose(), (0, E.default)({
                  initialPlanId: k,
                  analyticsLocations: v,
                  analyticsLocation: U.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                }))
              }
            },
            children: p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
          }), (0, a.jsx)(u.Button, {
            look: u.Button.Looks.LINK,
            color: (0, l.isThemeDark)(B) ? u.Button.Colors.WHITE : u.Button.Colors.PRIMARY,
            onClick: h.onClose,
            children: p.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
          })]
        })]
      }),
      onClose: h.onClose
    })
  })
}