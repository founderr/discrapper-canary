var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    o = n(74538),
    l = n(773104),
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
    let { title: a, titleClassName: m = '', buttonClassName: g = '', subtitle: N = '', description: C = '', descriptionCta: p = '', isPremiumGetCta: f, onCtaClick: A, cardVariant: S } = e,
        h = (0, d.N)(),
        M = null == h ? void 0 : h.subscription_trial,
        x = (0, c.Ng)(),
        b = (0, o.Rt)({
            intervalType: null == M ? void 0 : M.interval,
            intervalCount: null == M ? void 0 : M.interval_count
        }),
        O = (0, l._)({
            defaultResponse: I.Z.Messages.PREMIUM_SETTINGS_GET,
            onNonTier2Subscriber: I.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE,
            onTier2TrialOffer: b,
            onTier0TrialOffer: b,
            onDiscountOffer: I.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == x ? void 0 : x.discount.amount })
        }),
        v = (0, _._)(S);
    return (0, s.jsxs)('div', {
        className: r()(R.cardDescription, null == v ? void 0 : null === (t = v.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, s.jsx)(u.Z, {
                title: a,
                cardVariantStyleInfo: v,
                titleClassName: m,
                subtitle: N,
                description: C
            }),
            f &&
                (0, s.jsx)(E.Z, {
                    className: g,
                    subscriptionTier: T.Si.TIER_2,
                    buttonText: O,
                    color: i.Button.Colors.GREEN,
                    look: i.Button.Looks.FILLED
                }),
            0 !== p.length &&
                (null == (n = null == v ? void 0 : v.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != A &&
                (0, s.jsx)(i.Button, {
                    className: g,
                    onClick: A,
                    children: p
                })
        ]
    });
};
