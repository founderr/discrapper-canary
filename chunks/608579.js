t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(703533),
    o = t(442837),
    d = t(100527),
    c = t(906732),
    u = t(597688),
    h = t(987209),
    m = t(563132),
    f = t(409813),
    x = t(791785),
    v = t(961830),
    p = t(742956),
    g = t(346790),
    C = t(49308),
    j = t(117652),
    I = t(126982),
    T = t(981631),
    E = t(302800),
    N = t(215023),
    S = t(231338),
    Z = t(556709);
function y(e) {
    var n;
    let { onClose: t, onComplete: r, onStepChange: y, transitionState: A, loadId: P, skuId: _, isGift: O = !1, giftRecipient: b, giftMessage: k, giftingOrigin: M, analyticsLocations: w, returnRef: R } = e,
        { analyticsLocations: D } = (0, c.ZP)([...w, d.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = l.useRef(new s.qA()),
        [L, F] = l.useState(null),
        [G, U] = l.useState(!1),
        H = l.useMemo(() => (0, E.UY)(_), [_]),
        W = (0, o.Wu)([u.Z], () => u.Z.recommendedGiftSkuIds, []),
        z = null != _ ? [_] : W,
        V = null !== (n = z[0]) && void 0 !== n ? n : null,
        Y = null != _ && N.Rm.has(_),
        K = l.useCallback(() => {
            U(!0), null == r || r();
        }, [r]),
        q = l.useCallback(
            (e) => {
                U(!1), t(e);
            },
            [t]
        ),
        J = l.useMemo(
            () => [
                v.WA,
                j.Dd,
                g.n,
                ...v.yp,
                v.wo,
                {
                    key: f.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(C.x, {
                            ...e,
                            confettiCanvas: L,
                            analyticsLocations: D,
                            hideConfetti: null != H
                        }),
                    options: {
                        bodyClassName: Z.modalOverrideBody,
                        sliderBodyClassName: Z.modalOverrideSliderBody
                    }
                }
            ],
            [D, L, H]
        );
    return (0, i.jsxs)(c.Gt, {
        value: D,
        children: [
            (0, i.jsx)(s.O_, {
                ref: F,
                className: Z.confettiCanvas,
                environment: B.current
            }),
            null != H &&
                (0, i.jsx)('img', {
                    src: H.imageSrc,
                    className: a()(Z.customConfetti, { [Z.hidden]: !G }),
                    style: H.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(m.PaymentContextProvider, {
                loadId: P,
                stepConfigs: J,
                applicationId: T.XAJ,
                skuIDs: z,
                isGift: O,
                activeSubscription: null,
                purchaseType: S.GZ.ONE_TIME,
                children: (0, i.jsx)(h.KB, {
                    isGift: O,
                    giftRecipient: b,
                    giftMessage: k,
                    giftingOrigin: M,
                    children: (0, i.jsx)(x.PaymentModal, {
                        onClose: q,
                        onComplete: K,
                        applicationId: T.XAJ,
                        skuId: V,
                        initialPlanId: null,
                        analyticsLocations: D,
                        transitionState: A,
                        renderHeader: (e, n, t) =>
                            O
                                ? (0, i.jsx)(p.Z, {
                                      step: t,
                                      onClose: () => n(!1),
                                      giftingOrigin: M
                                  })
                                : (0, i.jsx)(I.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: R,
                        onStepChange: y,
                        skipConfirm: Y,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
