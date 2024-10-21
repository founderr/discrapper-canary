n.d(t, {
    U: function () {
        return A;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(481060),
    o = n(479446),
    u = n(646476),
    c = n(104494),
    d = n(639119),
    _ = n(981632),
    f = n(798769),
    C = n(689011),
    L = n(669079),
    m = n(987209),
    T = n(598),
    E = n(409813),
    S = n(981631),
    p = n(474936),
    N = n(231338),
    h = n(920667);
function A(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: a, handleClose: A } = e,
        { selectedSkuId: g, step: R, selectedPlan: I, purchaseState: M, purchaseType: v, selectedSku: x } = (0, T.usePaymentContext)(),
        { isGift: P, selectedGiftStyle: O, giftRecipient: Z } = (0, m.wD)(),
        y = P && (0, L.pO)(Z) && R === E.h8.CONFIRM && null != O && (null == x ? void 0 : x.productLine) !== S.POd.COLLECTIBLES,
        b = null != n && null != R,
        F = R !== E.h8.SKU_SELECT && null != g,
        D = (0, d.N)(a),
        k = !P && null != D && null != g && p.nG[D.trial_id].skus.includes(g),
        w = (0, c.Ng)(),
        j = null == w ? void 0 : null === (t = w.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => p.GP[e].skuId === g),
        H = !P && null != w && null != g && j,
        { enabled: U } = u.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        B = (0, u.rK)(),
        G = U && B;
    return l.useMemo(() => {
        if (null == R) return;
        let e = null;
        if (y)
            e = (0, i.jsxs)('div', {
                className: h.container,
                children: [
                    (0, i.jsx)(_.Z, {
                        defaultAnimationState: o.SR.LOOP,
                        giftStyle: O,
                        className: h.seasonalGiftBoxHeaderIcon
                    }),
                    (0, i.jsx)(s.ModalCloseButton, {
                        onClick: A,
                        className: h.closeButton
                    })
                ]
            });
        else if (b) e = n(null != I ? I : null, A, R);
        else if (v === N.GZ.ONE_TIME)
            e = (0, i.jsx)(C.t, {
                step: R,
                onClose: A
            });
        else if (F)
            r()(g in p.y7, 'invalid sku id: '.concat(g)),
                (e = (0, i.jsx)(f.Z, {
                    currentStep: null != R ? R : void 0,
                    purchaseState: M,
                    premiumType: p.y7[g],
                    onClose: A,
                    showTrialBadge: k,
                    showDiscountBadge: H,
                    isGift: P,
                    giftRecipient: Z,
                    useWinterTheme: G
                }));
        return e;
    }, [O, A, M, n, I, g, R, k, H, y, F, b, v, P, Z, G]);
}
