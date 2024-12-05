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
    p = n(474936),
    f = n(388032),
    _ = n(506829);
t.Z = (e) => {
    var t;
    let n;
    let { title: r, titleClassName: h = '', buttonClassName: E = '', subtitle: b = '', description: x = '', descriptionCta: C = '', isPremiumGetCta: v, onCtaClick: T, cardVariant: N } = e,
        S = (0, d.N)(),
        I = null == S ? void 0 : S.subscription_trial,
        R = (0, c.Ng)(),
        A = (0, l.Rt)({
            intervalType: null == I ? void 0 : I.interval,
            intervalCount: null == I ? void 0 : I.interval_count
        }),
        j = (0, o._)({
            defaultResponse: f.intl.string(f.t['8x0jKS']),
            onNonTier2Subscriber: f.intl.string(f.t.IJI7ys),
            onTier2TrialOffer: A,
            onTier0TrialOffer: A,
            onDiscountOffer: f.intl.formatToPlainString(f.t.bkQ4bG, { percent: null == R ? void 0 : R.discount.amount })
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
                    subscriptionTier: p.Si.TIER_2,
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
