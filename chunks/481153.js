var s = n(735250),
    r = n(470079),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    l = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    _ = n(479446),
    h = n(981632),
    E = n(594174),
    p = n(509545),
    g = n(55563),
    m = n(296848),
    f = n(981631),
    I = n(474936),
    N = n(689938),
    T = n(295242),
    x = n(739017),
    A = n(113207);
t.Z = o.ZP.connectStores([g.Z, c.Z, p.Z, E.default], (e) => {
    let { giftCode: t } = e,
        n = g.Z.get(t.skuId),
        { subscriptionPlanId: s } = t;
    return {
        sku: n,
        subscriptionPlan: null != s ? (0, m.oE)(s) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: E.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: i, sku: o, application: c, subscriptionPlan: E } = e,
        p = null == i ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({ username: i.username }),
        g = o.name;
    return (
        null != E &&
            (g = (E.interval === I.rV.MONTH ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
                skuName: o.name,
                intervalCount: E.intervalCount
            })),
        (0, s.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, s.jsx)(h.Z, {
                          defaultAnimationState: _.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: T.seasonalIcon
                      })
                    : (0, s.jsx)(u.qE, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: l.AvatarSizes.DEPRECATED_SIZE_100,
                          className: A.marginBottom20
                      }),
                null != t
                    ? (0, s.jsxs)(r.Fragment, {
                          children: [(0, s.jsx)(u.DK, { children: N.Z.Messages.INVITE_MODAL_ERROR_TITLE }), (0, s.jsx)(u.Dx, { children: t })]
                      })
                    : (0, s.jsxs)(r.Fragment, {
                          children: [
                              (0, s.jsx)(u.DK, { children: p }),
                              (0, s.jsxs)(u.Dx, {
                                  className: a()(A.marginTop8, x.flexCenter),
                                  children: [
                                      o.productLine !== f.POd.COLLECTIBLES &&
                                          (0, s.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: T.applicationIcon,
                                              game: c,
                                              skuId: o.id
                                          }),
                                      g
                                  ]
                              })
                          ]
                      })
            ]
        })
    );
});
