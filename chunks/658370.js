var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    u = n(404615),
    g = n(743612),
    m = n(409100),
    f = n(474936),
    p = n(388032),
    _ = n(921664);
t.Z = (e) => {
    var t;
    let n;
    let { title: r, titleClassName: h = '', buttonClassName: E = '', subtitle: b = '', description: x = '', descriptionCta: C = '', isPremiumGetCta: v, onCtaClick: T, cardVariant: N } = e,
        I = (0, d.N)(),
        S = null == I ? void 0 : I.subscription_trial,
        R = (0, c.Ng)(),
        A = (0, l.Rt)({
            intervalType: null == S ? void 0 : S.interval,
            intervalCount: null == S ? void 0 : S.interval_count
        }),
        j = (0, o._)({
            defaultResponse: p.intl.string(p.t['8x0jKS']),
            onNonTier2Subscriber: p.intl.string(p.t.IJI7ys),
            onTier2TrialOffer: A,
            onTier0TrialOffer: A,
            onDiscountOffer: p.intl.formatToPlainString(p.t.bkQ4bG, { percent: null == R ? void 0 : R.discount.amount })
        }),
        P = (0, u._)(N);
    return (0, i.jsxs)('div', {
        className: a()(_.cardDescription, null == P ? void 0 : null === (t = P.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, i.jsx)(g.Z, {
                title: r,
                cardVariantStyleInfo: P,
                titleClassName: h,
                subtitle: b,
                description: x
            }),
            v &&
                (0, i.jsx)(m.Z, {
                    className: E,
                    subscriptionTier: f.Si.TIER_2,
                    buttonText: j,
                    color: s.Button.Colors.GREEN,
                    look: s.Button.Looks.FILLED
                }),
            0 !== C.length &&
                (null == (n = null == P ? void 0 : P.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != T &&
                (0, i.jsx)(s.Button, {
                    className: E,
                    onClick: T,
                    children: C
                })
        ]
    });
};
