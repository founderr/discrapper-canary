t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(703533),
    o = t(442837),
    d = t(570140),
    c = t(100527),
    u = t(906732),
    h = t(597688),
    m = t(987209),
    x = t(563132),
    f = t(409813),
    v = t(791785),
    p = t(961830),
    g = t(742956),
    C = t(346790),
    j = t(49308),
    I = t(117652),
    T = t(126982),
    E = t(981631),
    N = t(302800),
    S = t(215023),
    Z = t(231338),
    y = t(484495);
function P(e) {
    var n;
    let { onClose: t, onComplete: r, onStepChange: P, transitionState: A, loadId: _, skuId: k, isGift: O = !1, giftRecipient: b, giftMessage: M, giftingOrigin: w, analyticsLocations: L, returnRef: R } = e,
        { analyticsLocations: D } = (0, u.ZP)([...L, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = l.useRef(new s.qA()),
        [F, G] = l.useState(null),
        [U, H] = l.useState(!1),
        W = l.useMemo(() => (0, N.UY)(k), [k]),
        z = (0, o.Wu)([h.Z], () => h.Z.recommendedGiftSkuIds, []),
        V = null != k ? [k] : z,
        Y = null !== (n = V[0]) && void 0 !== n ? n : null,
        K = null != k && S.Rm.has(k),
        q = l.useCallback(() => {
            H(!0), null == r || r();
        }, [r]),
        J = l.useCallback(
            (e) => {
                H(!1),
                    t(e),
                    d.Z.dispatch({
                        type: 'SKU_PURCHASE_MODAL_CLOSE',
                        error: null
                    });
            },
            [t]
        ),
        Q = l.useMemo(
            () => [
                p.WA,
                I.Dd,
                C.n,
                ...p.yp,
                p.wo,
                {
                    key: f.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(j.x, {
                            ...e,
                            confettiCanvas: F,
                            analyticsLocations: D,
                            hideConfetti: null != W
                        }),
                    options: {
                        bodyClassName: y.modalOverrideBody,
                        sliderBodyClassName: y.modalOverrideSliderBody
                    }
                }
            ],
            [D, F, W]
        );
    return (0, i.jsxs)(u.Gt, {
        value: D,
        children: [
            (0, i.jsx)(s.O_, {
                ref: G,
                className: y.confettiCanvas,
                environment: B.current
            }),
            null != W &&
                (0, i.jsx)('img', {
                    src: W.imageSrc,
                    className: a()(y.customConfetti, { [y.hidden]: !U }),
                    style: W.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(x.PaymentContextProvider, {
                loadId: _,
                stepConfigs: Q,
                applicationId: E.XAJ,
                skuIDs: V,
                isGift: O,
                activeSubscription: null,
                purchaseType: Z.GZ.ONE_TIME,
                children: (0, i.jsx)(m.KB, {
                    isGift: O,
                    giftRecipient: b,
                    giftMessage: M,
                    giftingOrigin: w,
                    children: (0, i.jsx)(v.PaymentModal, {
                        onClose: J,
                        onComplete: q,
                        applicationId: E.XAJ,
                        skuId: Y,
                        initialPlanId: null,
                        analyticsLocations: D,
                        transitionState: A,
                        renderHeader: (e, n, t) =>
                            O
                                ? (0, i.jsx)(g.Z, {
                                      step: t,
                                      onClose: () => n(!1),
                                      giftingOrigin: w
                                  })
                                : (0, i.jsx)(T.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: R,
                        onStepChange: P,
                        skipConfirm: K,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
