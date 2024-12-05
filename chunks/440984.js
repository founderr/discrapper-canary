n.d(t, {
    D: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(607070),
    d = n(530618),
    u = n(74538),
    m = n(937615),
    g = n(230916),
    h = n(798769),
    p = n(474936),
    x = n(388032),
    T = n(783899),
    S = n(982404),
    _ = n(299156);
function E(e) {
    let { premiumSubscription: t, premiumType: n, onClose: E, confettiCanvas: C, userWasChurned: f = !1, userDiscountOffer: I } = e,
        N = (0, o.ZP)(),
        A = (0, l.wj)(N) ? S : _,
        b = s.useRef(null),
        [v, j] = s.useState(!1),
        O = (0, g._)(t, p.Xh.PREMIUM_MONTH_TIER_2, I),
        R = (0, u.aS)(p.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        P = (0, m.T4)(R.amount, R.currency),
        D = (0, r.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (s.useEffect(() => {
            null != b.current && null != O && j(!0);
        }, [b, v, O]),
        null == I || null == O)
    )
        return null;
    let y = x.intl.format(x.t.gPzMHR, {
            numMonths: I.discount.user_usage_limit,
            discountedPrice: O,
            regularPrice: P
        }),
        B = (0, i.jsx)('div', {
            className: T.whatYouLoseButtonContainer,
            children: (0, i.jsx)(a.Button, {
                color: a.Button.Colors.BRAND,
                onClick: E,
                children: x.intl.string(x.t['/r8g/v'])
            })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Z, {
                premiumType: n,
                className: T.cancellationHeader,
                onClose: E
            }),
            (0, i.jsx)('div', {
                ref: b,
                children: (0, i.jsx)(a.ModalContent, {
                    className: T.body,
                    children:
                        null != O
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: T.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)('img', {
                                                  alt: '',
                                                  src: A,
                                                  className: T.nitroIcon
                                              }),
                                              (0, i.jsx)(a.Heading, {
                                                  variant: 'heading-xl/bold',
                                                  children: f ? x.intl.string(x.t.gOOPaG) : x.intl.string(x.t.PZSyRk)
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)('div', {
                                          className: T.bodyString,
                                          children: y
                                      }),
                                      B
                                  ]
                              })
                            : (0, i.jsx)(a.Spinner, {})
                })
            }),
            !D &&
                v &&
                (0, i.jsx)(d.Z, {
                    confettiTarget: b.current,
                    confettiCanvas: C,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
