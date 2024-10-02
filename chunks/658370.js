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
    E = n(743612),
    u = n(409100),
    T = n(474936),
    I = n(689938),
    R = n(977341);
t.Z = (e) => {
    var t;
    let n;
    let { title: a, titleClassName: g = '', buttonClassName: N = '', subtitle: C = '', description: m = '', descriptionCta: f = '', isPremiumGetCta: A, onCtaClick: p, cardVariant: M } = e,
        S = (0, d.N)(),
        h = null == S ? void 0 : S.subscription_trial,
        b = (0, c.Ng)(),
        x = (0, l.Rt)({
            intervalType: null == h ? void 0 : h.interval,
            intervalCount: null == h ? void 0 : h.interval_count
        }),
        O = (0, o._)({
            defaultResponse: I.Z.Messages.PREMIUM_SETTINGS_GET,
            onNonTier2Subscriber: I.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE,
            onTier2TrialOffer: x,
            onTier0TrialOffer: x,
            onDiscountOffer: I.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == b ? void 0 : b.discount.amount })
        }),
        P = (0, _._)(M);
    return (0, s.jsxs)('div', {
        className: r()(R.cardDescription, null == P ? void 0 : null === (t = P.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, s.jsx)(E.Z, {
                title: a,
                cardVariantStyleInfo: P,
                titleClassName: g,
                subtitle: C,
                description: m
            }),
            A &&
                (0, s.jsx)(u.Z, {
                    className: N,
                    subscriptionTier: T.Si.TIER_2,
                    buttonText: O,
                    color: i.Button.Colors.GREEN,
                    look: i.Button.Looks.FILLED
                }),
            0 !== f.length &&
                (null == (n = null == P ? void 0 : P.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != p &&
                (0, s.jsx)(i.Button, {
                    className: N,
                    onClick: p,
                    children: f
                })
        ]
    });
};
