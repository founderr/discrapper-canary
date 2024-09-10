var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    _ = n(176782),
    u = n(743612),
    E = n(409100),
    T = n(474936),
    I = n(689938),
    R = n(977341);
t.Z = (e) => {
    var t;
    let n;
    let { title: a, titleClassName: g = '', buttonClassName: N = '', subtitle: C = '', description: m = '', descriptionCta: p = '', isPremiumGetCta: A, onCtaClick: f, cardVariant: h } = e,
        M = (0, d.N)(),
        S = null == M ? void 0 : M.subscription_trial,
        x = (0, c.Ng)(),
        b = (0, l.Rt)({
            intervalType: null == S ? void 0 : S.interval,
            intervalCount: null == S ? void 0 : S.interval_count
        }),
        O = (0, o._)({
            defaultResponse: I.Z.Messages.PREMIUM_SETTINGS_GET,
            onNonTier2Subscriber: I.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE,
            onTier2TrialOffer: b,
            onTier0TrialOffer: b,
            onDiscountOffer: I.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == x ? void 0 : x.discount.amount })
        }),
        P = (0, _._)(h);
    return (0, s.jsxs)('div', {
        className: r()(R.cardDescription, null == P ? void 0 : null === (t = P.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, s.jsx)(u.Z, {
                title: a,
                cardVariantStyleInfo: P,
                titleClassName: g,
                subtitle: C,
                description: m
            }),
            A &&
                (0, s.jsx)(E.Z, {
                    className: N,
                    subscriptionTier: T.Si.TIER_2,
                    buttonText: O,
                    color: i.Button.Colors.GREEN,
                    look: i.Button.Looks.FILLED
                }),
            0 !== p.length &&
                (null == (n = null == P ? void 0 : P.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != f &&
                (0, s.jsx)(i.Button, {
                    className: N,
                    onClick: f,
                    children: p
                })
        ]
    });
};
