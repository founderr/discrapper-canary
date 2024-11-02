var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    g = n(981632),
    m = n(594174),
    f = n(509545),
    p = n(55563),
    _ = n(296848),
    x = n(981631),
    E = n(474936),
    v = n(388032),
    I = n(295242),
    b = n(739017),
    N = n(113207);
t.Z = l.ZP.connectStores([p.Z, c.Z, f.Z, m.default], (e) => {
    let { giftCode: t } = e,
        n = p.Z.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, _.oE)(i) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: l, application: c, subscriptionPlan: m } = e,
        f = null == s ? v.intl.string(v.t.lTGZAg) : v.intl.formatToPlainString(v.t.TjWdPT, { username: s.username }),
        p = l.name;
    return (
        null != m &&
            (p = v.intl.formatToPlainString(m.interval === E.rV.MONTH ? v.t.CTpcCQ : v.t.rgPWGx, {
                skuName: l.name,
                intervalCount: m.intervalCount
            })),
        (0, i.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(g.Z, {
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
                              (0, i.jsx)(u.DK, { children: f }),
                              (0, i.jsxs)(u.Dx, {
                                  className: a()(N.marginTop8, b.flexCenter),
                                  children: [
                                      l.productLine !== x.POd.COLLECTIBLES &&
                                          (0, i.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: I.applicationIcon,
                                              game: c,
                                              skuId: l.id
                                          }),
                                      p
                                  ]
                              })
                          ]
                      })
            ]
        })
    );
});
