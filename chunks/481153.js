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
    p = n(981632),
    g = n(594174),
    m = n(509545),
    f = n(55563),
    x = n(296848),
    _ = n(981631),
    E = n(474936),
    v = n(388032),
    I = n(295242),
    b = n(739017),
    N = n(113207);
t.Z = a.ZP.connectStores([f.Z, c.Z, m.Z, g.default], (e) => {
    let { giftCode: t } = e,
        n = f.Z.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, x.oE)(i) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: a, application: c, subscriptionPlan: g } = e,
        m = null == s ? v.intl.string(v.t.lTGZAg) : v.intl.formatToPlainString(v.t.TjWdPT, { username: s.username }),
        f = a.name;
    return (
        null != g &&
            (f = v.intl.formatToPlainString(g.interval === E.rV.MONTH ? v.t.CTpcCQ : v.t.rgPWGx, {
                skuName: a.name,
                intervalCount: g.intervalCount
            })),
        (0, i.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(p.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: I.seasonalIcon
                      })
                    : (0, i.jsx)(u.qE, {
                          src: null != s ? s.getAvatarURL(void 0, 100) : null,
                          size: o.AvatarSizes.DEPRECATED_SIZE_100,
                          className: N.marginBottom20
                      }),
                null != t
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [(0, i.jsx)(u.DK, { children: v.intl.string(v.t.mDFGFh) }), (0, i.jsx)(u.Dx, { children: t })]
                      })
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(u.DK, { children: m }),
                              (0, i.jsxs)(u.Dx, {
                                  className: l()(N.marginTop8, b.flexCenter),
                                  children: [
                                      a.productLine !== _.POd.COLLECTIBLES &&
                                          (0, i.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: I.applicationIcon,
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
