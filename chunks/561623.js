n.r(e), n(47120), n(411104);
var r = n(200651),
    o = n(192379),
    i = n(442837),
    a = n(780384),
    l = n(481060),
    s = n(366939),
    u = n(911969),
    c = n(410030),
    d = n(100527),
    f = n(906732),
    m = n(583046),
    C = n(963249),
    _ = n(853872),
    p = n(509545),
    h = n(626135),
    I = n(74538),
    T = n(937615),
    N = n(212895),
    b = n(296848),
    g = n(374649),
    E = n(807163),
    x = n(798769),
    M = n(317269),
    y = n(474936),
    P = n(981631),
    v = n(388032),
    S = n(103112);
e.default = (t) => {
    var e, n, R, U;
    let { daysLeft: k, premiumType: A, premiumSubscription: L, analyticsSource: Z, ...j } = t,
        F = (0, c.ZP)(),
        [O, w] = o.useState(!1),
        { analyticsLocations: B } = (0, f.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
        Y = (0, i.e7)([_.Z], () => ((null == L ? void 0 : L.paymentSourceId) != null ? _.Z.getPaymentSource(L.paymentSourceId) : null), [L]),
        X = L.items[0].planId,
        H = (0, I.Wz)(y.GP[X].skuId),
        { priceOptions: D } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [H],
            paymentSourceId: null == L ? void 0 : L.paymentSourceId,
            isGift: !1
        }),
        [G] = (0, g.ED)({
            subscriptionId: L.id,
            items: [
                {
                    planId: X,
                    quantity: 1
                }
            ],
            renewal: !0,
            paymentSourceId: null == L ? void 0 : L.paymentSourceId,
            currency: D.currency,
            analyticsLocations: (0, f.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
        }),
        W = (0, i.e7)([p.Z], () => (0, b.oE)(X), [X]),
        K = (0, i.e7)([p.Z], () => p.Z.isFetchingForSKU(H)),
        Q = null == G ? void 0 : null === (U = G.invoiceItems) || void 0 === U ? void 0 : null === (R = U.find((t) => t.subscriptionPlanId === X)) || void 0 === R ? void 0 : null === (n = R.discounts) || void 0 === n ? void 0 : null === (e = n.find((t) => t.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === e ? void 0 : e.amount,
        V = null != W ? (0, I.aS)(W.id, !1, !1, D) : null,
        z = null != V && null != Q ? (0, T.T4)(V.amount - (null != Q ? Q : 0), V.currency) : null,
        { intervalType: q, intervalCount: J } = I.ZP.getInterval(X),
        $ = A === y.p9.TIER_1,
        tt = null != V ? (0, T.T4)(V.amount, V.currency) : null;
    return (
        o.useEffect(() => {
            h.default.track(P.rMx.OPEN_MODAL, {
                type: 'Premium Uncancel Winback',
                source: Z
            });
        }, [Z]),
        (0, r.jsx)(l.ModalRoot, {
            ...j,
            className: S.modal,
            children: O
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(x.Z, {
                              premiumType: A,
                              onClose: j.onClose
                          }),
                          (0, r.jsx)(M.ZP, {
                              planId: X,
                              onClose: j.onClose,
                              paymentSourceType: null == Y ? void 0 : Y.type
                          })
                      ]
                  })
                : (0, r.jsx)(E.Z, {
                      premiumType: A,
                      titleText: $ ? v.intl.formatToPlainString(v.t.Sngnzs, { daysLeft: k }) : v.intl.formatToPlainString(v.t.tdvIlZ, { daysLeft: k }),
                      subtitleText: $ ? v.intl.format(v.t['6Su2XV'], {}) : v.intl.format(v.t['lE+P8f'], {}),
                      footer: (0, r.jsxs)('div', {
                          children: [
                              null !== tt
                                  ? (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        children: (function (t) {
                                            switch (q) {
                                                case y.rV.YEAR:
                                                    return $ ? v.intl.format(v.t.O7JRzc, { price: t }) : v.intl.format(v.t['0y5kAA'], { price: t });
                                                case y.rV.MONTH:
                                                    if (null != z)
                                                        return v.intl.format(v.t['1/ucvr'], {
                                                            discountPrice: z,
                                                            defaultPrice: t
                                                        });
                                                    if ($) return v.intl.format(v.t.rbwRlZ, { price: t });
                                                    if (1 === J) return v.intl.format(v.t.C9oRCw, { price: t });
                                                    else
                                                        return v.intl.format(v.t.TmmTgo, {
                                                            price: t,
                                                            intervalCount: J
                                                        });
                                                default:
                                                    throw Error('Unknown interval type '.concat(q));
                                            }
                                        })(tt)
                                    })
                                  : (0, r.jsx)(l.Spinner, { type: l.SpinnerTypes.SPINNING_CIRCLE }),
                              (0, r.jsxs)('div', {
                                  className: S.footer,
                                  children: [
                                      (0, r.jsx)(l.Button, {
                                          disabled: K,
                                          onClick: () => {
                                              if (null != L) {
                                                  let t = (0, N.tD)(X, L.currency, null == Y ? void 0 : Y.id);
                                                  null != Y && Y.id === L.paymentSourceId && t
                                                      ? (s.O5(L, B, P.Sbl.UNCANCEL_WINBACK_MODAL), w(!0))
                                                      : (j.onClose(),
                                                        (0, C.Z)({
                                                            initialPlanId: X,
                                                            analyticsLocations: B,
                                                            analyticsLocation: P.Sbl.UNCANCEL_WINBACK_MODAL
                                                        }));
                                              }
                                          },
                                          children: v.intl.string(v.t['2+luBg'])
                                      }),
                                      (0, r.jsx)(l.Button, {
                                          look: l.Button.Looks.LINK,
                                          color: (0, a.wj)(F) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
                                          onClick: j.onClose,
                                          children: v.intl.string(v.t.XDpS4O)
                                      })
                                  ]
                              })
                          ]
                      }),
                      onClose: j.onClose
                  })
        })
    );
};
