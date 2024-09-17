t.d(n, {
    U: function () {
        return h;
    }
});
var l = t(735250),
    i = t(470079),
    u = t(512722),
    o = t.n(u),
    a = t(481060),
    r = t(479446),
    s = t(646476),
    d = t(104494),
    c = t(639119),
    _ = t(981632),
    f = t(798769),
    E = t(689011),
    m = t(669079),
    T = t(987209),
    p = t(598),
    g = t(409813),
    A = t(981631),
    P = t(474936),
    S = t(231338),
    M = t(920667);
function h(e) {
    var n;
    let { renderHeader: t, referralTrialOfferId: u, handleClose: h } = e,
        { selectedSkuId: v, step: I, selectedPlan: y, purchaseState: N, purchaseType: R, selectedSku: C } = (0, p.usePaymentContext)(),
        { isGift: k, selectedGiftStyle: Z, giftRecipient: L } = (0, T.wD)(),
        O = k && (0, m.pO)(L) && I === g.h8.CONFIRM && null != Z && (null == C ? void 0 : C.productLine) !== A.POd.COLLECTIBLES,
        b = null != t && null != I,
        w = I !== g.h8.SKU_SELECT && null != v,
        x = (0, c.N)(u),
        D = !k && null != x && null != v && P.nG[x.trial_id].skus.includes(v),
        U = (0, d.Ng)(),
        G = null == U ? void 0 : null === (n = U.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => P.GP[e].skuId === v),
        Y = !k && null != U && null != v && G,
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
                        giftStyle: Z,
                        className: M.seasonalGiftBoxHeaderIcon
                    }),
                    (0, l.jsx)(a.ModalCloseButton, {
                        onClick: h,
                        className: M.closeButton
                    })
                ]
            });
        else if (b) e = t(null != y ? y : null, h, I);
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
                    showTrialBadge: D,
                    showDiscountBadge: Y,
                    isGift: k,
                    giftRecipient: L,
                    useWinterTheme: H
                }));
        return e;
    }, [Z, h, N, t, y, v, I, D, Y, O, w, b, R, k, L, H]);
}
