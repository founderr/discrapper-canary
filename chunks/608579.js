n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(887024),
    o = n(100527),
    c = n(906732),
    u = n(987209),
    d = n(598),
    _ = n(409813),
    E = n(791785),
    I = n(961830),
    m = n(742956),
    T = n(346790),
    f = n(49308),
    h = n(117652),
    N = n(126982),
    p = n(981631),
    C = n(302800),
    g = n(231338),
    S = n(556709);
function A(e) {
    let { onClose: t, onComplete: n, onStepChange: s, transitionState: A, loadId: x, skuId: R, isGift: O = !1, giftRecipient: v, giftMessage: M, analyticsLocations: L, returnRef: Z } = e,
        { analyticsLocations: P } = (0, c.ZP)([...L, o.Z.COLLECTIBLES_PAYMENT_MODAL]),
        b = a.useRef(new l.qA()),
        [D, j] = a.useState(null),
        [U, y] = a.useState(!1),
        B = a.useMemo(() => (0, C.UY)(R), [R]),
        k = a.useCallback(() => {
            y(!0), null == n || n();
        }, [n]),
        G = a.useCallback(
            (e) => {
                y(!1), t(e);
            },
            [t]
        ),
        F = a.useMemo(
            () => [
                I.WA,
                h.Dd,
                T.n,
                ...I.yp,
                I.wo,
                {
                    key: _.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(f.x, {
                            ...e,
                            confettiCanvas: D,
                            analyticsLocations: P,
                            hideConfetti: null != B
                        }),
                    options: {
                        bodyClassName: S.modalOverrideBody,
                        sliderBodyClassName: S.modalOverrideSliderBody
                    }
                }
            ],
            [P, D, B]
        );
    return (0, i.jsxs)(c.Gt, {
        value: P,
        children: [
            (0, i.jsx)(l.O_, {
                ref: j,
                className: S.confettiCanvas,
                environment: b.current
            }),
            null != B &&
                (0, i.jsx)('img', {
                    src: B.imageSrc,
                    className: r()(S.customConfetti, { [S.hidden]: !U }),
                    style: B.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(d.PaymentContextProvider, {
                loadId: x,
                stepConfigs: F,
                applicationId: p.XAJ,
                skuIDs: [R],
                isGift: O,
                activeSubscription: null,
                purchaseType: g.GZ.ONE_TIME,
                children: (0, i.jsx)(u.KB, {
                    isGift: O,
                    giftRecipient: v,
                    giftMessage: M,
                    children: (0, i.jsx)(E.PaymentModal, {
                        onClose: G,
                        onComplete: k,
                        applicationId: p.XAJ,
                        skuId: R,
                        initialPlanId: null,
                        analyticsLocations: P,
                        transitionState: A,
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
                        returnRef: Z,
                        onStepChange: s,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
