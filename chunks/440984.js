t.d(s, {
    D: function () {
        return g;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(780384),
    o = t(481060),
    l = t(410030),
    c = t(607070),
    d = t(530618),
    u = t(74538),
    _ = t(937615),
    E = t(230916),
    T = t(798769),
    I = t(474936),
    S = t(689938),
    N = t(960699),
    m = t(982404),
    C = t(299156);
function g(e) {
    let { premiumSubscription: s, premiumType: t, onClose: g, confettiCanvas: A, userWasChurned: h = !1, userDiscountOffer: O } = e,
        p = (0, l.ZP)(),
        R = (0, r.wj)(p) ? m : C,
        x = a.useRef(null),
        [f, M] = a.useState(!1),
        D = (0, E._)(s, I.Xh.PREMIUM_MONTH_TIER_2, O),
        P = (0, u.aS)(I.Xh.PREMIUM_MONTH_TIER_2),
        L = (0, _.T4)(P.amount, P.currency),
        b = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (a.useEffect(() => {
            null != x.current && null != D && M(!0);
        }, [x, f, D]),
        null == O || null == D)
    )
        return null;
    let Z = S.Z.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
            numMonths: O.discount.user_usage_limit,
            discountedPrice: D,
            regularPrice: L
        }),
        v = (0, n.jsx)('div', {
            className: N.whatYouLoseButtonContainer,
            children: (0, n.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: g,
                children: S.Z.Messages.PREMIUM_DISCOUNT_SWEET
            })
        });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(T.Z, {
                premiumType: t,
                className: N.cancellationHeader,
                onClose: g
            }),
            (0, n.jsx)('div', {
                ref: x,
                children: (0, n.jsx)(o.ModalContent, {
                    className: N.body,
                    children:
                        null != D
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsxs)('div', {
                                          className: N.discountAppliedBody,
                                          children: [
                                              (0, n.jsx)('img', {
                                                  alt: '',
                                                  src: R,
                                                  className: N.nitroIcon
                                              }),
                                              (0, n.jsx)(o.Heading, {
                                                  variant: 'heading-xl/bold',
                                                  children: h ? S.Z.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : S.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
                                              })
                                          ]
                                      }),
                                      (0, n.jsx)('div', {
                                          className: N.bodyString,
                                          children: Z
                                      }),
                                      v
                                  ]
                              })
                            : (0, n.jsx)(o.Spinner, {})
                })
            }),
            !b &&
                f &&
                (0, n.jsx)(d.Z, {
                    confettiTarget: x.current,
                    confettiCanvas: A,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
