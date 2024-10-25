n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(703533),
    o = n(100527),
    c = n(906732),
    u = n(987209),
    d = n(598),
    _ = n(409813),
    E = n(791785),
    I = n(961830),
    m = n(742956),
    f = n(346790),
    T = n(49308),
    h = n(117652),
    N = n(126982),
    p = n(981631),
    C = n(302800),
    g = n(215023),
    S = n(231338),
    A = n(556709);
function x(e) {
    let { onClose: t, onComplete: n, onStepChange: s, transitionState: x, loadId: R, skuId: v, isGift: O = !1, giftRecipient: M, giftMessage: L, analyticsLocations: Z, returnRef: b } = e,
        { analyticsLocations: P } = (0, c.ZP)([...Z, o.Z.COLLECTIBLES_PAYMENT_MODAL]),
        D = a.useRef(new l.qA()),
        [j, U] = a.useState(null),
        [y, B] = a.useState(!1),
        k = a.useMemo(() => (0, C.UY)(v), [v]),
        G = a.useCallback(() => {
            B(!0), null == n || n();
        }, [n]),
        F = a.useCallback(
            (e) => {
                B(!1), t(e);
            },
            [t]
        ),
        w = a.useMemo(
            () => [
                I.WA,
                h.Dd,
                f.n,
                ...I.yp,
                I.wo,
                {
                    key: _.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(T.x, {
                            ...e,
                            confettiCanvas: j,
                            analyticsLocations: P,
                            hideConfetti: null != k
                        }),
                    options: {
                        bodyClassName: A.modalOverrideBody,
                        sliderBodyClassName: A.modalOverrideSliderBody
                    }
                }
            ],
            [P, j, k]
        );
    return (0, i.jsxs)(c.Gt, {
        value: P,
        children: [
            (0, i.jsx)(l.O_, {
                ref: U,
                className: A.confettiCanvas,
                environment: D.current
            }),
            null != k &&
                (0, i.jsx)('img', {
                    src: k.imageSrc,
                    className: r()(A.customConfetti, { [A.hidden]: !y }),
                    style: k.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(d.PaymentContextProvider, {
                loadId: R,
                stepConfigs: w,
                applicationId: p.XAJ,
                skuIDs: [v],
                isGift: O,
                activeSubscription: null,
                purchaseType: S.GZ.ONE_TIME,
                children: (0, i.jsx)(u.KB, {
                    isGift: O,
                    giftRecipient: M,
                    giftMessage: L,
                    children: (0, i.jsx)(E.PaymentModal, {
                        onClose: F,
                        onComplete: G,
                        applicationId: p.XAJ,
                        skuId: v,
                        initialPlanId: null,
                        analyticsLocations: P,
                        transitionState: x,
                        renderHeader: (e, t, n) =>
                            O
                                ? (0, i.jsx)(m.Z, {
                                      step: n,
                                      onClose: () => t(!1)
                                  })
                                : (0, i.jsx)(N.Z, {
                                      step: n,
                                      onClose: () => t(!1)
                                  }),
                        returnRef: b,
                        onStepChange: s,
                        skipConfirm: g.Rm.has(v),
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
