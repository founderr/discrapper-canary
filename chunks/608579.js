t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    l = t(703533),
    s = t(442837),
    d = t(570140),
    c = t(100527),
    u = t(906732),
    f = t(597688),
    p = t(987209),
    m = t(563132),
    _ = t(409813),
    g = t(791785),
    b = t(961830),
    h = t(742956),
    x = t(346790),
    C = t(49308),
    v = t(117652),
    I = t(126982),
    S = t(981631),
    T = t(302800),
    j = t(215023),
    y = t(231338),
    E = t(484495);
function N(e) {
    var n;
    let { onClose: t, onComplete: r, onStepChange: N, transitionState: k, loadId: P, skuId: B, isGift: A = !1, giftRecipient: Z, giftMessage: w, giftingOrigin: O, analyticsLocations: M, returnRef: R } = e,
        { analyticsLocations: G } = (0, u.ZP)([...M, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        L = a.useRef(new l.qA()),
        [D, H] = a.useState(null),
        [F, W] = a.useState(!1),
        U = a.useMemo(() => (0, T.UY)(B), [B]),
        z = (0, s.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []),
        V = null != B ? [B] : z,
        Y = null !== (n = V[0]) && void 0 !== n ? n : null,
        K = null != B && j.Rm.has(B),
        q = a.useCallback(() => {
            W(!0), null == r || r();
        }, [r]),
        J = a.useCallback(
            (e) => {
                W(!1),
                    t(e),
                    d.Z.dispatch({
                        type: 'SKU_PURCHASE_MODAL_CLOSE',
                        error: null
                    });
            },
            [t]
        ),
        Q = a.useMemo(
            () => [
                b.WA,
                v.Dd,
                x.n,
                ...b.yp,
                b.wo,
                {
                    key: _.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(C.x, {
                            ...e,
                            confettiCanvas: D,
                            analyticsLocations: G,
                            hideConfetti: null != U
                        }),
                    options: {
                        bodyClassName: E.modalOverrideBody,
                        sliderBodyClassName: E.modalOverrideSliderBody
                    }
                }
            ],
            [G, D, U]
        );
    return (0, i.jsxs)(u.Gt, {
        value: G,
        children: [
            (0, i.jsx)(l.O_, {
                ref: H,
                className: E.confettiCanvas,
                environment: L.current
            }),
            null != U &&
                (0, i.jsx)('img', {
                    src: U.imageSrc,
                    className: o()(E.customConfetti, { [E.hidden]: !F }),
                    style: U.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(m.PaymentContextProvider, {
                loadId: P,
                stepConfigs: Q,
                applicationId: S.XAJ,
                skuIDs: V,
                isGift: A,
                activeSubscription: null,
                purchaseType: y.GZ.ONE_TIME,
                children: (0, i.jsx)(p.KB, {
                    isGift: A,
                    giftRecipient: Z,
                    giftMessage: w,
                    giftingOrigin: O,
                    children: (0, i.jsx)(g.PaymentModal, {
                        onClose: J,
                        onComplete: q,
                        applicationId: S.XAJ,
                        skuId: Y,
                        initialPlanId: null,
                        analyticsLocations: G,
                        transitionState: k,
                        renderHeader: (e, n, t) =>
                            A
                                ? (0, i.jsx)(h.Z, {
                                      step: t,
                                      onClose: () => n(!1),
                                      giftingOrigin: O
                                  })
                                : (0, i.jsx)(I.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: R,
                        onStepChange: N,
                        skipConfirm: K,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
