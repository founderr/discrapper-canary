n.d(t, {
    U: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    o = n(481060),
    s = n(479446),
    u = n(646476),
    c = n(104494),
    d = n(639119),
    f = n(981632),
    C = n(798769),
    _ = n(689011),
    m = n(669079),
    L = n(987209),
    S = n(563132),
    p = n(409813),
    T = n(981631),
    E = n(474936),
    h = n(231338),
    N = n(467474);
function g(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: a, handleClose: g } = e,
        { selectedSkuId: A, step: v, selectedPlan: R, purchaseState: x, purchaseType: I, selectedSku: P } = (0, S.usePaymentContext)(),
        { isGift: M, selectedGiftStyle: y, giftRecipient: b } = (0, L.wD)(),
        O = M && (0, m.pO)(b) && v === p.h8.CONFIRM && null != y && (null == P ? void 0 : P.productLine) !== T.POd.COLLECTIBLES,
        Z = null != n && null != v,
        D = [p.h8.SKU_SELECT, p.h8.SELECT_FREE_SKU],
        k = null != v && !D.includes(v) && null != A,
        F = (0, d.N)(a),
        w = !M && null != F && null != A && E.nG[F.trial_id].skus.includes(A),
        j = (0, c.Ng)(),
        H = null == j ? void 0 : null === (t = j.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => E.GP[e].skuId === A),
        U = !M && null != j && null != A && H,
        { enabled: B } = u.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        W = (0, u.rK)(),
        V = B && W;
    return l.useMemo(() => {
        if (null == v) return;
        let e = null;
        if (O)
            e = (0, i.jsxs)('div', {
                className: N.container,
                children: [
                    (0, i.jsx)(f.Z, {
                        defaultAnimationState: s.SR.LOOP,
                        giftStyle: y,
                        className: N.seasonalGiftBoxHeaderIcon
                    }),
                    (0, i.jsx)(o.ModalCloseButton, {
                        onClick: g,
                        className: N.closeButton
                    })
                ]
            });
        else if (Z) e = n(null != R ? R : null, g, v);
        else if (I === h.GZ.ONE_TIME)
            e = (0, i.jsx)(_.t, {
                step: v,
                onClose: g
            });
        else if (k)
            r()(A in E.y7, 'invalid sku id: '.concat(A)),
                (e = (0, i.jsx)(C.Z, {
                    currentStep: null != v ? v : void 0,
                    purchaseState: x,
                    premiumType: E.y7[A],
                    onClose: g,
                    showTrialBadge: w,
                    showDiscountBadge: U,
                    isGift: M,
                    giftRecipient: b,
                    useWinterTheme: V
                }));
        return e;
    }, [y, g, x, n, R, A, v, w, U, O, k, Z, I, M, b, V]);
}
