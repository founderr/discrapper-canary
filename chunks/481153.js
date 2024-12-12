var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    g = n(981632),
    m = n(594174),
    p = n(509545),
    f = n(55563),
    _ = n(296848),
    x = n(981631),
    E = n(474936),
    I = n(388032),
    v = n(93008),
    N = n(652849),
    b = n(232186);
t.Z = a.ZP.connectStores([f.Z, c.Z, p.Z, m.default], (e) => {
    let { giftCode: t } = e,
        n = f.Z.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, _.oE)(i) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: a, application: c, subscriptionPlan: m } = e,
        p = null == s ? I.intl.string(I.t.lTGZAg) : I.intl.formatToPlainString(I.t.TjWdPT, { username: s.username }),
        f = a.name;
    return (
        null != m &&
            (f = I.intl.formatToPlainString(m.interval === E.rV.MONTH ? I.t.CTpcCQ : I.t.rgPWGx, {
                skuName: a.name,
                intervalCount: m.intervalCount
            })),
        (0, i.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(g.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: v.seasonalIcon
                      })
                    : (0, i.jsx)(u.qE, {
                          src: null != s ? s.getAvatarURL(void 0, 100) : null,
                          size: o.AvatarSizes.DEPRECATED_SIZE_100,
                          className: b.marginBottom20
                      }),
                null != t
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [(0, i.jsx)(u.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, i.jsx)(u.Dx, { children: t })]
                      })
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(u.DK, { children: p }),
                              (0, i.jsxs)(u.Dx, {
                                  className: l()(b.marginTop8, N.flexCenter),
                                  children: [
                                      a.productLine !== x.POd.COLLECTIBLES &&
                                          (0, i.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: v.applicationIcon,
                                              game: c,
                                              skuId: a.id
                                          }),
                                      f
                                  ]
                              })
                          ]
                      })
            ]
        })
    );
});
