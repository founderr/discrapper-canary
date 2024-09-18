t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var s = t(735250),
    a = t(470079),
    l = t(120356),
    i = t.n(l),
    r = t(887024),
    o = t(100527),
    d = t(906732),
    c = t(987209),
    u = t(598),
    E = t(409813),
    C = t(791785),
    h = t(961830),
    x = t(742956),
    f = t(346790),
    T = t(49308),
    p = t(117652),
    I = t(126982),
    m = t(981631),
    S = t(302800),
    g = t(231338),
    _ = t(556709);
function N(e) {
    let { onClose: n, onComplete: t, onStepChange: l, transitionState: N, loadId: v, skuId: A, isGift: j = !1, giftRecipient: O, giftMessage: Z, analyticsLocations: M, returnRef: L } = e,
        { analyticsLocations: R } = (0, d.ZP)([...M, o.Z.COLLECTIBLES_PAYMENT_MODAL]),
        P = a.useRef(new r.qA()),
        [y, D] = a.useState(null),
        [k, F] = a.useState(!1),
        b = a.useMemo(() => (0, S.UY)(A), [A]),
        B = a.useCallback(() => {
            F(!0), null == t || t();
        }, [t]),
        G = a.useCallback(
            (e) => {
                F(!1), n(e);
            },
            [n]
        ),
        w = a.useMemo(
            () => [
                h.WA,
                p.Dd,
                f.n,
                ...h.yp,
                h.wo,
                {
                    key: E.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, s.jsx)(T.x, {
                            ...e,
                            confettiCanvas: y,
                            analyticsLocations: R,
                            hideConfetti: null != b
                        }),
                    options: {
                        bodyClassName: _.modalOverrideBody,
                        sliderBodyClassName: _.modalOverrideSliderBody
                    }
                }
            ],
            [R, y, b]
        );
    return (0, s.jsxs)(d.Gt, {
        value: R,
        children: [
            (0, s.jsx)(r.O_, {
                ref: D,
                className: _.confettiCanvas,
                environment: P.current
            }),
            null != b &&
                (0, s.jsx)('img', {
                    src: b.imageSrc,
                    className: i()(_.customConfetti, { [_.hidden]: !k }),
                    style: b.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, s.jsx)(u.PaymentContextProvider, {
                loadId: v,
                stepConfigs: w,
                applicationId: m.XAJ,
                skuIDs: [A],
                isGift: j,
                activeSubscription: null,
                purchaseType: g.GZ.ONE_TIME,
                children: (0, s.jsx)(c.KB, {
                    isGift: j,
                    giftRecipient: O,
                    giftMessage: Z,
                    children: (0, s.jsx)(C.PaymentModal, {
                        onClose: G,
                        onComplete: B,
                        applicationId: m.XAJ,
                        skuId: A,
                        initialPlanId: null,
                        analyticsLocations: R,
                        transitionState: N,
                        renderHeader: (e, n, t) =>
                            j
                                ? (0, s.jsx)(x.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  })
                                : (0, s.jsx)(I.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: L,
                        onStepChange: l,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
