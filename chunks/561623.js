s.r(_), s(47120), s(411104);
var n = s(735250),
  I = s(470079),
  t = s(442837),
  l = s(780384),
  a = s(481060),
  i = s(366939),
  r = s(911969),
  N = s(410030),
  o = s(100527),
  E = s(906732),
  u = s(583046),
  T = s(963249),
  R = s(853872),
  c = s(509545),
  M = s(626135),
  O = s(74538),
  d = s(937615),
  L = s(212895),
  C = s(296848),
  A = s(374649),
  P = s(973159),
  S = s(798769),
  U = s(317269),
  Z = s(474936),
  m = s(981631),
  f = s(689938),
  g = s(978415);
_.default = e => {
  var _, s, G, p;
  let {
    daysLeft: h,
    premiumType: D,
    premiumSubscription: B,
    analyticsSource: H,
    ...W
  } = e, x = (0, N.ZP)(), [F, Y] = I.useState(!1), {
    analyticsLocations: v
  } = (0, E.ZP)(o.Z.PREMIUM_UNCANCEL_MODAL), y = (0, t.e7)([R.Z], () => (null == B ? void 0 : B.paymentSourceId) != null ? R.Z.getPaymentSource(B.paymentSourceId) : null, [B]), b = B.items[0].planId, k = (0, O.Wz)(Z.GP[b].skuId), {
    priceOptions: j
  } = (0, u.Z)({
    activeSubscription: null,
    skuIDs: [k],
    paymentSourceId: null == B ? void 0 : B.paymentSourceId,
    isGift: !1
  }), [K] = (0, A.ED)({
    subscriptionId: B.id,
    items: [{
      planId: b,
      quantity: 1
    }],
    renewal: !0,
    paymentSourceId: null == B ? void 0 : B.paymentSourceId,
    currency: j.currency,
    analyticsLocations: (0, E.ZP)(o.Z.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: o.Z.PREMIUM_UNCANCEL_MODAL
  }), X = (0, t.e7)([c.Z], () => (0, C.oE)(b), [b]), w = (0, t.e7)([c.Z], () => c.Z.isFetchingForSKU(k)), Q = null == K ? void 0 : null === (p = K.invoiceItems) || void 0 === p ? void 0 : null === (G = p.find(e => e.subscriptionPlanId === b)) || void 0 === G ? void 0 : null === (s = G.discounts) || void 0 === s ? void 0 : null === (_ = s.find(e => e.type === r.eW.SUBSCRIPTION_PLAN)) || void 0 === _ ? void 0 : _.amount, z = null != X ? (0, O.aS)(X.id, !1, !1, j) : null, V = null != z && null != Q ? (0, d.T4)(z.amount - (null != Q ? Q : 0), z.currency) : null, {
    intervalType: J,
    intervalCount: q
  } = O.ZP.getInterval(b), $ = D === Z.p9.TIER_1, ee = null != z ? (0, d.T4)(z.amount, z.currency) : null;
  return I.useEffect(() => {
    M.default.track(m.rMx.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: H
    })
  }, [H]), (0, n.jsx)(a.ModalRoot, {
    ...W,
    className: g.modal,
    children: F ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(S.Z, {
        premiumType: D,
        onClose: W.onClose
      }), (0, n.jsx)(U.ZP, {
        planId: b,
        onClose: W.onClose,
        paymentSourceType: null == y ? void 0 : y.type
      })]
    }) : (0, n.jsx)(P.Z, {
      premiumType: D,
      titleText: $ ? f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
        daysLeft: h
      }) : f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
        daysLeft: h
      }),
      subtitleText: $ ? f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
      footer: (0, n.jsxs)("div", {
        children: [null !== ee ? (0, n.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: function(e) {
            switch (J) {
              case Z.rV.YEAR:
                return $ ? f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                  price: e
                }) : f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                  price: e
                });
              case Z.rV.MONTH:
                if (null != V) return f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                  discountPrice: V,
                  defaultPrice: e
                });
                if ($) return f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                  price: e
                });
                if (1 === q) return f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                  price: e
                });
                else return f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                  price: e,
                  intervalCount: q
                });
              default:
                throw Error("Unknown interval type ".concat(J))
            }
          }(ee)
        }) : (0, n.jsx)(a.Spinner, {
          type: a.SpinnerTypes.SPINNING_CIRCLE
        }), (0, n.jsxs)("div", {
          className: g.footer,
          children: [(0, n.jsx)(a.Button, {
            disabled: w,
            onClick: () => {
              if (null != B) {
                let e = (0, L.tD)(b, B.currency, null == y ? void 0 : y.id);
                null != y && y.id === B.paymentSourceId && e ? (i.O5(B, v, m.Sbl.UNCANCEL_WINBACK_MODAL), Y(!0)) : (W.onClose(), (0, T.Z)({
                  initialPlanId: b,
                  analyticsLocations: v,
                  analyticsLocation: m.Sbl.UNCANCEL_WINBACK_MODAL
                }))
              }
            },
            children: f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
          }), (0, n.jsx)(a.Button, {
            look: a.Button.Looks.LINK,
            color: (0, l.wj)(x) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
            onClick: W.onClose,
            children: f.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
          })]
        })]
      }),
      onClose: W.onClose
    })
  })
}