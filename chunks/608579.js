t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var s = t(735250),
    a = t(470079),
    l = t(120356),
    r = t.n(l),
    i = t(887024),
    o = t(100527),
    d = t(906732),
    c = t(987209),
    u = t(598),
    E = t(409813),
    h = t(791785),
    C = t(961830),
    f = t(742956),
    x = t(346790),
    p = t(49308),
    m = t(117652),
    T = t(126982),
    I = t(981631),
    S = t(302800),
    v = t(231338),
    g = t(128300);
function _(e) {
    let { onClose: n, onComplete: t, onStepChange: l, transitionState: _, loadId: N, skuId: A, isGift: j = !1, giftRecipient: O, giftMessage: Z, analyticsLocations: M, returnRef: L } = e,
        { analyticsLocations: y } = (0, d.ZP)([...M, o.Z.COLLECTIBLES_PAYMENT_MODAL]),
        P = a.useRef(new i.qA()),
        [R, D] = a.useState(null),
        [F, k] = a.useState(!1),
        b = a.useMemo(() => (0, S.UY)(A), [A]),
        w = a.useCallback(() => {
            k(!0), null == t || t();
        }, [t]),
        B = a.useCallback(
            (e) => {
                k(!1), n(e);
            },
            [n]
        ),
        G = a.useMemo(
            () => [
                C.WA,
                m.Dd,
                x.n,
                ...C.yp,
                C.wo,
                {
                    key: E.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, s.jsx)(p.x, {
                            ...e,
                            confettiCanvas: R,
                            analyticsLocations: y,
                            hideConfetti: null != b
                        }),
                    options: {
                        bodyClassName: g.modalOverrideBody,
                        sliderBodyClassName: g.modalOverrideSliderBody
                    }
                }
            ],
            [y, R, b]
        );
    return (0, s.jsxs)(d.Gt, {
        value: y,
        children: [
            (0, s.jsx)(i.O_, {
                ref: D,
                className: g.confettiCanvas,
                environment: P.current
            }),
            null != b &&
                (0, s.jsx)('img', {
                    src: b.imageSrc,
                    className: r()(g.customConfetti, { [g.hidden]: !F }),
                    style: b.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, s.jsx)(u.PaymentContextProvider, {
                loadId: N,
                stepConfigs: G,
                applicationId: I.XAJ,
                skuIDs: [A],
                isGift: j,
                activeSubscription: null,
                purchaseType: v.GZ.ONE_TIME,
                children: (0, s.jsx)(c.KB, {
                    isGift: j,
                    giftRecipient: O,
                    giftMessage: Z,
                    children: (0, s.jsx)(h.PaymentModal, {
                        onClose: B,
                        onComplete: w,
                        applicationId: I.XAJ,
                        skuId: A,
                        initialPlanId: null,
                        analyticsLocations: y,
                        transitionState: _,
                        renderHeader: (e, n, t) =>
                            j
                                ? (0, s.jsx)(f.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  })
                                : (0, s.jsx)(T.Z, {
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
