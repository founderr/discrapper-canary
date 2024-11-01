n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(703533),
    o = n(442837),
    c = n(100527),
    u = n(906732),
    d = n(597688),
    _ = n(987209),
    E = n(598),
    I = n(409813),
    m = n(791785),
    f = n(961830),
    T = n(742956),
    h = n(346790),
    N = n(49308),
    p = n(117652),
    C = n(126982),
    g = n(981631),
    S = n(302800),
    A = n(215023),
    x = n(231338),
    R = n(556709);
function v(e) {
    var t;
    let { onClose: n, onComplete: s, onStepChange: v, transitionState: M, loadId: O, skuId: L, isGift: Z = !1, giftRecipient: b, giftMessage: P, giftingOrigin: D, analyticsLocations: j, returnRef: U } = e,
        { analyticsLocations: y } = (0, u.ZP)([...j, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = a.useRef(new l.qA()),
        [k, G] = a.useState(null),
        [F, w] = a.useState(!1),
        V = a.useMemo(() => (0, S.UY)(L), [L]),
        H = (0, o.Wu)([d.Z], () => d.Z.recommendedGiftSkuIds, []),
        Y = null != L ? [L] : H,
        W = null !== (t = Y[0]) && void 0 !== t ? t : null,
        K = null != L && A.Rm.has(L),
        z = a.useCallback(() => {
            w(!0), null == s || s();
        }, [s]),
        X = a.useCallback(
            (e) => {
                w(!1), n(e);
            },
            [n]
        ),
        Q = a.useMemo(
            () => [
                f.WA,
                p.Dd,
                h.n,
                ...f.yp,
                f.wo,
                {
                    key: I.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(N.x, {
                            ...e,
                            confettiCanvas: k,
                            analyticsLocations: y,
                            hideConfetti: null != V
                        }),
                    options: {
                        bodyClassName: R.modalOverrideBody,
                        sliderBodyClassName: R.modalOverrideSliderBody
                    }
                }
            ],
            [y, k, V]
        );
    return (0, i.jsxs)(u.Gt, {
        value: y,
        children: [
            (0, i.jsx)(l.O_, {
                ref: G,
                className: R.confettiCanvas,
                environment: B.current
            }),
            null != V &&
                (0, i.jsx)('img', {
                    src: V.imageSrc,
                    className: r()(R.customConfetti, { [R.hidden]: !F }),
                    style: V.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(E.PaymentContextProvider, {
                loadId: O,
                stepConfigs: Q,
                applicationId: g.XAJ,
                skuIDs: Y,
                isGift: Z,
                activeSubscription: null,
                purchaseType: x.GZ.ONE_TIME,
                children: (0, i.jsx)(_.KB, {
                    isGift: Z,
                    giftRecipient: b,
                    giftMessage: P,
                    giftingOrigin: D,
                    children: (0, i.jsx)(m.PaymentModal, {
                        onClose: X,
                        onComplete: z,
                        applicationId: g.XAJ,
                        skuId: W,
                        initialPlanId: null,
                        analyticsLocations: y,
                        transitionState: M,
                        renderHeader: (e, t, n) =>
                            Z
                                ? (0, i.jsx)(T.Z, {
                                      step: n,
                                      onClose: () => t(!1),
                                      giftingOrigin: D
                                  })
                                : (0, i.jsx)(C.Z, {
                                      step: n,
                                      onClose: () => t(!1)
                                  }),
                        returnRef: U,
                        onStepChange: v,
                        skipConfirm: K,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
