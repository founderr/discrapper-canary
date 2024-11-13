t.d(n, {
    Z: function () {
        return A;
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
    f = t(563132),
    x = t(409813),
    v = t(791785),
    p = t(961830),
    g = t(742956),
    C = t(346790),
    j = t(49308),
    I = t(117652),
    E = t(126982),
    T = t(981631),
    N = t(302800),
    S = t(215023),
    Z = t(231338),
    y = t(556709);
function A(e) {
    var n;
    let { onClose: t, onComplete: r, onStepChange: A, transitionState: P, loadId: _, skuId: O, isGift: b = !1, giftRecipient: k, giftMessage: M, giftingOrigin: w, analyticsLocations: R, returnRef: D } = e,
        { analyticsLocations: L } = (0, u.ZP)([...R, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = l.useRef(new s.qA()),
        [F, G] = l.useState(null),
        [U, H] = l.useState(!1),
        W = l.useMemo(() => (0, N.UY)(O), [O]),
        z = (0, o.Wu)([h.Z], () => h.Z.recommendedGiftSkuIds, []),
        V = null != O ? [O] : z,
        Y = null !== (n = V[0]) && void 0 !== n ? n : null,
        K = null != O && S.Rm.has(O),
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
                    key: x.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(j.x, {
                            ...e,
                            confettiCanvas: F,
                            analyticsLocations: L,
                            hideConfetti: null != W
                        }),
                    options: {
                        bodyClassName: y.modalOverrideBody,
                        sliderBodyClassName: y.modalOverrideSliderBody
                    }
                }
            ],
            [L, F, W]
        );
    return (0, i.jsxs)(u.Gt, {
        value: L,
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
            (0, i.jsx)(f.PaymentContextProvider, {
                loadId: _,
                stepConfigs: Q,
                applicationId: T.XAJ,
                skuIDs: V,
                isGift: b,
                activeSubscription: null,
                purchaseType: Z.GZ.ONE_TIME,
                children: (0, i.jsx)(m.KB, {
                    isGift: b,
                    giftRecipient: k,
                    giftMessage: M,
                    giftingOrigin: w,
                    children: (0, i.jsx)(v.PaymentModal, {
                        onClose: J,
                        onComplete: q,
                        applicationId: T.XAJ,
                        skuId: Y,
                        initialPlanId: null,
                        analyticsLocations: L,
                        transitionState: P,
                        renderHeader: (e, n, t) =>
                            b
                                ? (0, i.jsx)(g.Z, {
                                      step: t,
                                      onClose: () => n(!1),
                                      giftingOrigin: w
                                  })
                                : (0, i.jsx)(E.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: D,
                        onStepChange: A,
                        skipConfirm: K,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
