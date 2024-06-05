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
  f = s("509545"),
  T = s("626135"),
  R = s("74538"),
  S = s("937615"),
  M = s("212895"),
  P = s("296848"),
  L = s("374649"),
  O = s("973159"),
  C = s("798769"),
  A = s("317269"),
  p = s("474936"),
  m = s("981631"),
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
  } = e, Y = (0, I.default)(), [v, x] = a.useState(!1), {
    analyticsLocations: k
  } = (0, d.default)(o.default.PREMIUM_UNCANCEL_MODAL), H = (0, l.useStateFromStores)([E.default], () => (null == b ? void 0 : b.paymentSourceId) != null ? E.default.getPaymentSource(b.paymentSourceId) : null, [b]), W = b.items[0].planId, j = (0, R.castPremiumSubscriptionAsSkuId)(p.SubscriptionPlanInfo[W].skuId), {
    priceOptions: K
  } = (0, c.default)({
    activeSubscription: null,
    skuIDs: [j],
    paymentSourceId: null == b ? void 0 : b.paymentSourceId,
    isGift: !1
  }), [w] = (0, L.useSubscriptionInvoicePreview)({
    subscriptionId: b.id,
    items: [{
      planId: W,
      quantity: 1
    }],
    renewal: !0,
    paymentSourceId: null == b ? void 0 : b.paymentSourceId,
    currency: K.currency,
    analyticsLocations: (0, d.default)(o.default.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: o.default.PREMIUM_UNCANCEL_MODAL
  }), Z = (0, l.useStateFromStores)([f.default], () => (0, P.getOrFetchSubscriptionPlan)(W), [W]), z = (0, l.useStateFromStores)([f.default], () => f.default.isFetchingForSKU(j)), J = null == w ? void 0 : null === (D = w.invoiceItems) || void 0 === D ? void 0 : null === (h = D.find(e => e.subscriptionPlanId === W)) || void 0 === h ? void 0 : null === (s = h.discounts) || void 0 === s ? void 0 : null === (t = s.find(e => e.type === i.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, q = null != Z ? (0, R.getPrice)(Z.id, !1, !1, K) : null, V = null != q && null != J ? (0, S.formatPrice)(q.amount - (null != J ? J : 0), q.currency) : null, {
    intervalType: Q,
    intervalCount: X
  } = R.default.getInterval(W), $ = G === p.PremiumTypes.TIER_1, ee = null != q ? (0, S.formatPrice)(q.amount, q.currency) : null;
  return a.useEffect(() => {
    T.default.track(m.AnalyticEvents.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: B
    })
  }, [B]), (0, n.jsx)(r.ModalRoot, {
    ...F,
    className: g.modal,
    children: v ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(C.default, {
        premiumType: G,
        onClose: F.onClose
      }), (0, n.jsx)(A.default, {
        planId: W,
        onClose: F.onClose,
        paymentSourceType: null == H ? void 0 : H.type
      })]
    }) : (0, n.jsx)(O.default, {
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
              case p.SubscriptionIntervalTypes.YEAR:
                return $ ? U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                  price: e
                }) : U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                  price: e
                });
              case p.SubscriptionIntervalTypes.MONTH:
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
                let e = (0, M.planHasCurrency)(W, b.currency, null == H ? void 0 : H.id);
                null != H && H.id === b.paymentSourceId && e ? (_.resubscribe(b, k, m.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), x(!0)) : (F.onClose(), (0, N.default)({
                  initialPlanId: W,
                  analyticsLocations: k,
                  analyticsLocation: m.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                }))
              }
            },
            children: U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
          }), (0, n.jsx)(r.Button, {
            look: r.Button.Looks.LINK,
            color: (0, u.isThemeDark)(Y) ? r.Button.Colors.WHITE : r.Button.Colors.PRIMARY,
            onClick: F.onClose,
            children: U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
          })]
        })]
      }),
      onClose: F.onClose
    })
  })
}