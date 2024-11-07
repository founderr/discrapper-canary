t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    l = t(703533),
    s = t(442837),
    d = t(100527),
    c = t(906732),
    u = t(597688),
    f = t(987209),
    p = t(563132),
    m = t(409813),
    g = t(791785),
    _ = t(961830),
    b = t(742956),
    h = t(346790),
    x = t(49308),
    C = t(117652),
    v = t(126982),
    S = t(981631),
    I = t(302800),
    j = t(215023),
    T = t(231338),
    y = t(499749);
function E(e) {
    var n;
    let { onClose: t, onComplete: r, onStepChange: E, transitionState: N, loadId: k, skuId: P, isGift: B = !1, giftRecipient: A, giftMessage: Z, giftingOrigin: w, analyticsLocations: O, returnRef: M } = e,
        { analyticsLocations: R } = (0, c.ZP)([...O, d.Z.COLLECTIBLES_PAYMENT_MODAL]),
        G = a.useRef(new l.qA()),
        [L, D] = a.useState(null),
        [H, F] = a.useState(!1),
        W = a.useMemo(() => (0, I.UY)(P), [P]),
        z = (0, s.Wu)([u.Z], () => u.Z.recommendedGiftSkuIds, []),
        U = null != P ? [P] : z,
        V = null !== (n = U[0]) && void 0 !== n ? n : null,
        Y = null != P && j.Rm.has(P),
        q = a.useCallback(() => {
            F(!0), null == r || r();
        }, [r]),
        J = a.useCallback(
            (e) => {
                F(!1), t(e);
            },
            [t]
        ),
        K = a.useMemo(
            () => [
                _.WA,
                C.Dd,
                h.n,
                ..._.yp,
                _.wo,
                {
                    key: m.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(x.x, {
                            ...e,
                            confettiCanvas: L,
                            analyticsLocations: R,
                            hideConfetti: null != W
                        }),
                    options: {
                        bodyClassName: y.modalOverrideBody,
                        sliderBodyClassName: y.modalOverrideSliderBody
                    }
                }
            ],
            [R, L, W]
        );
    return (0, i.jsxs)(c.Gt, {
        value: R,
        children: [
            (0, i.jsx)(l.O_, {
                ref: D,
                className: y.confettiCanvas,
                environment: G.current
            }),
            null != W &&
                (0, i.jsx)('img', {
                    src: W.imageSrc,
                    className: o()(y.customConfetti, { [y.hidden]: !H }),
                    style: W.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(p.PaymentContextProvider, {
                loadId: k,
                stepConfigs: K,
                applicationId: S.XAJ,
                skuIDs: U,
                isGift: B,
                activeSubscription: null,
                purchaseType: T.GZ.ONE_TIME,
                children: (0, i.jsx)(f.KB, {
                    isGift: B,
                    giftRecipient: A,
                    giftMessage: Z,
                    giftingOrigin: w,
                    children: (0, i.jsx)(g.PaymentModal, {
                        onClose: J,
                        onComplete: q,
                        applicationId: S.XAJ,
                        skuId: V,
                        initialPlanId: null,
                        analyticsLocations: R,
                        transitionState: N,
                        renderHeader: (e, n, t) =>
                            B
                                ? (0, i.jsx)(b.Z, {
                                      step: t,
                                      onClose: () => n(!1),
                                      giftingOrigin: w
                                  })
                                : (0, i.jsx)(v.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: M,
                        onStepChange: E,
                        skipConfirm: Y,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
