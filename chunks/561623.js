t.r(n), t(47120), t(411104);
var r = t(735250),
    a = t(470079),
    i = t(442837),
    o = t(780384),
    _ = t(481060),
    s = t(366939),
    l = t(911969),
    I = t(410030),
    u = t(100527),
    c = t(906732),
    d = t(583046),
    f = t(963249),
    N = t(853872),
    T = t(509545),
    E = t(626135),
    C = t(74538),
    R = t(937615),
    m = t(212895),
    O = t(296848),
    M = t(374649),
    A = t(973159),
    L = t(798769),
    p = t(317269),
    g = t(474936),
    b = t(981631),
    S = t(689938),
    h = t(103112);
n.default = (e) => {
    var n, t, P, U;
    let { daysLeft: Z, premiumType: F, premiumSubscription: B, analyticsSource: G, ...v } = e,
        y = (0, I.ZP)(),
        [x, D] = a.useState(!1),
        { analyticsLocations: H } = (0, c.ZP)(u.Z.PREMIUM_UNCANCEL_MODAL),
        W = (0, i.e7)([N.Z], () => ((null == B ? void 0 : B.paymentSourceId) != null ? N.Z.getPaymentSource(B.paymentSourceId) : null), [B]),
        k = B.items[0].planId,
        Y = (0, C.Wz)(g.GP[k].skuId),
        { priceOptions: j } = (0, d.Z)({
            activeSubscription: null,
            skuIDs: [Y],
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            isGift: !1
        }),
        [w] = (0, M.ED)({
            subscriptionId: B.id,
            items: [
                {
                    planId: k,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            currency: j.currency,
            analyticsLocations: (0, c.ZP)(u.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: u.Z.PREMIUM_UNCANCEL_MODAL
        }),
        K = (0, i.e7)([T.Z], () => (0, O.oE)(k), [k]),
        X = (0, i.e7)([T.Z], () => T.Z.isFetchingForSKU(Y)),
        z = null == w ? void 0 : null === (U = w.invoiceItems) || void 0 === U ? void 0 : null === (P = U.find((e) => e.subscriptionPlanId === k)) || void 0 === P ? void 0 : null === (t = P.discounts) || void 0 === t ? void 0 : null === (n = t.find((e) => e.type === l.eW.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
        V = null != K ? (0, C.aS)(K.id, !1, !1, j) : null,
        Q = null != V && null != z ? (0, R.T4)(V.amount - (null != z ? z : 0), V.currency) : null,
        { intervalType: q, intervalCount: J } = C.ZP.getInterval(k),
        $ = F === g.p9.TIER_1,
        ee = null != V ? (0, R.T4)(V.amount, V.currency) : null;
    return (
        a.useEffect(() => {
            E.default.track(b.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: G
            });
        }, [G]),
        (0, r.jsx)(_.ModalRoot, {
            ...v,
            className: h.modal,
            children: x
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(L.Z, {
                              premiumType: F,
                              onClose: v.onClose
                          }),
                          (0, r.jsx)(p.ZP, {
                              planId: k,
                              onClose: v.onClose,
                              paymentSourceType: null == W ? void 0 : W.type
                          })
                      ]
                  })
                : (0, r.jsx)(A.Z, {
                      premiumType: F,
                      titleText: $ ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({ daysLeft: Z }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({ daysLeft: Z }),
                      subtitleText: $ ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                      footer: (0, r.jsxs)('div', {
                          children: [
                              null !== ee
                                  ? (0, r.jsx)(_.Text, {
                                        variant: 'text-sm/normal',
                                        children: (function (e) {
                                            switch (q) {
                                                case g.rV.YEAR:
                                                    return $ ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({ price: e }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({ price: e });
                                                case g.rV.MONTH:
                                                    if (null != Q)
                                                        return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                                                            discountPrice: Q,
                                                            defaultPrice: e
                                                        });
                                                    if ($) return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({ price: e });
                                                    if (1 === J) return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({ price: e });
                                                    else
                                                        return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                                                            price: e,
                                                            intervalCount: J
                                                        });
                                                default:
                                                    throw Error('Unknown interval type '.concat(q));
                                            }
                                        })(ee)
                                    })
                                  : (0, r.jsx)(_.Spinner, { type: _.SpinnerTypes.SPINNING_CIRCLE }),
                              (0, r.jsxs)('div', {
                                  className: h.footer,
                                  children: [
                                      (0, r.jsx)(_.Button, {
                                          disabled: X,
                                          onClick: () => {
                                              if (null != B) {
                                                  let e = (0, m.tD)(k, B.currency, null == W ? void 0 : W.id);
                                                  null != W && W.id === B.paymentSourceId && e
                                                      ? (s.O5(B, H, b.Sbl.UNCANCEL_WINBACK_MODAL), D(!0))
                                                      : (v.onClose(),
                                                        (0, f.Z)({
                                                            initialPlanId: k,
                                                            analyticsLocations: H,
                                                            analyticsLocation: b.Sbl.UNCANCEL_WINBACK_MODAL
                                                        }));
                                              }
                                          },
                                          children: S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
                                      }),
                                      (0, r.jsx)(_.Button, {
                                          look: _.Button.Looks.LINK,
                                          color: (0, o.wj)(y) ? _.Button.Colors.WHITE : _.Button.Colors.PRIMARY,
                                          onClick: v.onClose,
                                          children: S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
                                      })
                                  ]
                              })
                          ]
                      }),
                      onClose: v.onClose
                  })
        })
    );
};
