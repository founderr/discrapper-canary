n.d(t, {
    U: function () {
        return h;
    }
});
var l = n(735250),
    i = n(470079),
    u = n(512722),
    o = n.n(u),
    a = n(481060),
    r = n(479446),
    s = n(646476),
    d = n(104494),
    c = n(639119),
    _ = n(981632),
    f = n(798769),
    E = n(689011),
    m = n(669079),
    T = n(987209),
    p = n(598),
    g = n(409813),
    A = n(981631),
    P = n(474936),
    S = n(231338),
    M = n(920667);
function h(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: u, handleClose: h } = e,
        { selectedSkuId: v, step: I, selectedPlan: y, purchaseState: N, purchaseType: R, selectedSku: C } = (0, p.usePaymentContext)(),
        { isGift: L, selectedGiftStyle: k, giftRecipient: Z } = (0, T.wD)(),
        O = L && (0, m.pO)(Z) && I === g.h8.CONFIRM && null != k && (null == C ? void 0 : C.productLine) !== A.POd.COLLECTIBLES,
        b = null != n && null != I,
        w = I !== g.h8.SKU_SELECT && null != v,
        D = (0, c.N)(u),
        x = !L && null != D && null != v && P.nG[D.trial_id].skus.includes(v),
        U = (0, d.Ng)(),
        G = null == U ? void 0 : null === (t = U.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => P.GP[e].skuId === v),
        Y = !L && null != U && null != v && G,
        { enabled: W } = s.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        F = (0, s.rK)(),
        H = W && F;
    return i.useMemo(() => {
        if (null == I) return;
        let e = null;
        if (O)
            e = (0, l.jsxs)('div', {
                className: M.container,
                children: [
                    (0, l.jsx)(_.Z, {
                        defaultAnimationState: r.SR.LOOP,
                        giftStyle: k,
                        className: M.seasonalGiftBoxHeaderIcon
                    }),
                    (0, l.jsx)(a.ModalCloseButton, {
                        onClick: h,
                        className: M.closeButton
                    })
                ]
            });
        else if (b) e = n(null != y ? y : null, h, I);
        else if (R === S.GZ.ONE_TIME)
            e = (0, l.jsx)(E.t, {
                step: I,
                onClose: h
            });
        else if (w)
            o()(v in P.y7, 'invalid sku id: '.concat(v)),
                (e = (0, l.jsx)(f.Z, {
                    currentStep: null != I ? I : void 0,
                    purchaseState: N,
                    premiumType: P.y7[v],
                    onClose: h,
                    showTrialBadge: x,
                    showDiscountBadge: Y,
                    isGift: L,
                    giftRecipient: Z,
                    useWinterTheme: H
                }));
        return e;
    }, [k, h, N, n, y, v, I, x, Y, O, w, b, R, L, Z, H]);
}
