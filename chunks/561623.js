n.r(_), n(47120), n(411104);
var o = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(780384),
    t = n(481060),
    I = n(366939),
    i = n(911969),
    l = n(410030),
    N = n(100527),
    u = n(906732),
    T = n(583046),
    c = n(963249),
    E = n(853872),
    C = n(509545),
    d = n(626135),
    M = n(74538),
    R = n(937615),
    O = n(212895),
    f = n(296848),
    L = n(374649),
    m = n(973159),
    A = n(798769),
    P = n(317269),
    S = n(474936),
    U = n(981631),
    p = n(689938),
    h = n(103112);
_.default = (e) => {
    var _, n, g, Z;
    let { daysLeft: b, premiumType: F, premiumSubscription: B, analyticsSource: G, ...H } = e,
        D = (0, l.ZP)(),
        [x, Y] = a.useState(!1),
        { analyticsLocations: W } = (0, u.ZP)(N.Z.PREMIUM_UNCANCEL_MODAL),
        y = (0, s.e7)([E.Z], () => ((null == B ? void 0 : B.paymentSourceId) != null ? E.Z.getPaymentSource(B.paymentSourceId) : null), [B]),
        v = B.items[0].planId,
        k = (0, M.Wz)(S.GP[v].skuId),
        { priceOptions: j } = (0, T.Z)({
            activeSubscription: null,
            skuIDs: [k],
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            isGift: !1
        }),
        [w] = (0, L.ED)({
            subscriptionId: B.id,
            items: [
                {
                    planId: v,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            currency: j.currency,
            analyticsLocations: (0, u.ZP)(N.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: N.Z.PREMIUM_UNCANCEL_MODAL
        }),
        K = (0, s.e7)([C.Z], () => (0, f.oE)(v), [v]),
        X = (0, s.e7)([C.Z], () => C.Z.isFetchingForSKU(k)),
        Q = null == w ? void 0 : null === (Z = w.invoiceItems) || void 0 === Z ? void 0 : null === (g = Z.find((e) => e.subscriptionPlanId === v)) || void 0 === g ? void 0 : null === (n = g.discounts) || void 0 === n ? void 0 : null === (_ = n.find((e) => e.type === i.eW.SUBSCRIPTION_PLAN)) || void 0 === _ ? void 0 : _.amount,
        z = null != K ? (0, M.aS)(K.id, !1, !1, j) : null,
        V = null != z && null != Q ? (0, R.T4)(z.amount - (null != Q ? Q : 0), z.currency) : null,
        { intervalType: J, intervalCount: q } = M.ZP.getInterval(v),
        $ = F === S.p9.TIER_1,
        ee = null != z ? (0, R.T4)(z.amount, z.currency) : null;
    return (
        a.useEffect(() => {
            d.default.track(U.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: G
            });
        }, [G]),
        (0, o.jsx)(t.ModalRoot, {
            ...H,
            className: h.modal,
            children: x
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(A.Z, {
                              premiumType: F,
                              onClose: H.onClose
                          }),
                          (0, o.jsx)(P.ZP, {
                              planId: v,
                              onClose: H.onClose,
                              paymentSourceType: null == y ? void 0 : y.type
                          })
                      ]
                  })
                : (0, o.jsx)(m.Z, {
                      premiumType: F,
                      titleText: $ ? p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({ daysLeft: b }) : p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({ daysLeft: b }),
                      subtitleText: $ ? p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                      footer: (0, o.jsxs)('div', {
                          children: [
                              null !== ee
                                  ? (0, o.jsx)(t.Text, {
                                        variant: 'text-sm/normal',
                                        children: (function (e) {
                                            switch (J) {
                                                case S.rV.YEAR:
                                                    return $ ? p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({ price: e }) : p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({ price: e });
                                                case S.rV.MONTH:
                                                    if (null != V)
                                                        return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                                                            discountPrice: V,
                                                            defaultPrice: e
                                                        });
                                                    if ($) return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({ price: e });
                                                    if (1 === q) return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({ price: e });
                                                    else
                                                        return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                                                            price: e,
                                                            intervalCount: q
                                                        });
                                                default:
                                                    throw Error('Unknown interval type '.concat(J));
                                            }
                                        })(ee)
                                    })
                                  : (0, o.jsx)(t.Spinner, { type: t.SpinnerTypes.SPINNING_CIRCLE }),
                              (0, o.jsxs)('div', {
                                  className: h.footer,
                                  children: [
                                      (0, o.jsx)(t.Button, {
                                          disabled: X,
                                          onClick: () => {
                                              if (null != B) {
                                                  let e = (0, O.tD)(v, B.currency, null == y ? void 0 : y.id);
                                                  null != y && y.id === B.paymentSourceId && e
                                                      ? (I.O5(B, W, U.Sbl.UNCANCEL_WINBACK_MODAL), Y(!0))
                                                      : (H.onClose(),
                                                        (0, c.Z)({
                                                            initialPlanId: v,
                                                            analyticsLocations: W,
                                                            analyticsLocation: U.Sbl.UNCANCEL_WINBACK_MODAL
                                                        }));
                                              }
                                          },
                                          children: p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
                                      }),
                                      (0, o.jsx)(t.Button, {
                                          look: t.Button.Looks.LINK,
                                          color: (0, r.wj)(D) ? t.Button.Colors.WHITE : t.Button.Colors.PRIMARY,
                                          onClick: H.onClose,
                                          children: p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
                                      })
                                  ]
                              })
                          ]
                      }),
                      onClose: H.onClose
                  })
        })
    );
};
