e.d(i, {
    AF: function () {
        return L;
    },
    hd: function () {
        return F;
    },
    zz: function () {
        return C;
    }
}),
    e(47120);
var l = e(200651),
    t = e(192379),
    r = e(905322),
    s = e(200207),
    o = e(269210),
    a = e(442837),
    d = e(481060),
    u = e(607070),
    c = e(100527),
    m = e(906732),
    p = e(270144),
    v = e(171246),
    x = e(930155),
    h = e(929011),
    g = e(889989),
    I = e(696906),
    b = e(55563),
    j = e(551428),
    k = e(626135),
    f = e(768581),
    P = e(73346),
    S = e(624138),
    N = e(591759),
    y = e(601911),
    R = e(150414),
    T = e(110742),
    E = e(680005),
    M = e(955335),
    Z = e(981631),
    _ = e(388032),
    w = e(800879);
let A = new Intl.DateTimeFormat(_.intl.currentLocale, {
    month: 'short',
    day: 'numeric'
});
function L(n) {
    let { app: i, guildId: e, subscriptions: s, otps: o } = n,
        d = t.useMemo(() => (0, y.y)(i, 100), [i]),
        { bot: p } = i,
        v = t.useMemo(() => {
            var n;
            if ((null == p ? void 0 : p.banner) == null) return;
            let i = (0, f.aN)({
                id: p.id,
                banner: p.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != i && null !== (n = N.Z.toURLSafe(i)) && void 0 !== n ? n : void 0;
        }, [p]),
        x = t.useMemo(() => {
            var n;
            if ((null == p ? void 0 : p.banner) == null) return;
            let i = (0, f.aN)({
                id: p.id,
                banner: p.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != i && null !== (n = N.Z.toURLSafe(i)) && void 0 !== n ? n : void 0;
        }, [p]),
        h = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        g = t.useMemo(() => [...s.map((n) => n.skuId), ...o.map((n) => n.skuId)], [s, o]),
        { analyticsLocations: I } = (0, m.ZP)(c.Z.APP_STOREFRONT);
    return (
        t.useEffect(() => {
            0 !== g.length &&
                k.default.track(Z.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: i.id,
                    sku_ids: g,
                    location_stack: I
                });
        }, [I, i.id, g]),
        (0, l.jsxs)('div', {
            className: w.wrapper,
            children: [
                (0, l.jsx)(r.j, {
                    title: i.name,
                    iconSrc: d,
                    backgroundSrc: v,
                    animatedBackgroundSrc: x,
                    prefersReducedMotion: h
                }),
                (0, l.jsx)(U, {
                    appId: i.id,
                    subscriptions: s,
                    otps: o,
                    guildId: e
                })
            ]
        })
    );
}
function U(n) {
    let { appId: i, subscriptions: e, otps: t, guildId: r } = n;
    return (0, l.jsxs)('div', {
        className: w.productsContainer,
        children: [
            e.length > 0 &&
                (0, l.jsxs)('div', {
                    children: [
                        (0, l.jsx)(M.r, { subscriptions: e }),
                        (0, l.jsx)('div', {
                            className: w.productSection,
                            children: e.map((n) =>
                                (0, l.jsx)(
                                    C,
                                    {
                                        appId: i,
                                        guildId: r,
                                        listing: n,
                                        subscriptionType: (0, v.KW)(n.skuFlags) ? 'user' : 'guild'
                                    },
                                    n.id
                                )
                            )
                        })
                    ]
                }),
            t.length > 0 &&
                (0, l.jsxs)('div', {
                    children: [
                        (0, l.jsx)(d.Heading, {
                            variant: 'heading-lg/semibold',
                            children: _.intl.string(_.t.yUGTs7)
                        }),
                        (0, l.jsx)('div', {
                            className: w.productSection,
                            children: t.map((n) =>
                                (0, l.jsx)(
                                    F,
                                    {
                                        skuId: n.skuId,
                                        appId: i
                                    },
                                    n.id
                                )
                            )
                        })
                    ]
                })
        ]
    });
}
function C(n) {
    var i, r;
    let s,
        { appId: u, guildId: c, listing: m, subscriptionType: v, onDetails: h } = n,
        { data: j } = (0, x.H)(m.skuId),
        k = null == j ? void 0 : j[0],
        f = (0, a.e7)([b.Z], () => b.Z.getParentSKU(m.skuId), [m.skuId]),
        P = (0, p.Ev)(f, c),
        S = (0, p.cr)(f, c),
        N = null != S && (null == P ? void 0 : null === (i = P.subscriptionPlan) || void 0 === i ? void 0 : i.id) !== (null == S ? void 0 : S.subscriptionPlan.id),
        y = (null == S ? void 0 : S.subscriptionPlan.skuId) === m.skuId,
        T = (null == P ? void 0 : P.subscriptionPlan.skuId) === m.skuId,
        { openModal: M, cannotOpenReason: w } = (0, I.ZP)({
            skuId: m.skuId,
            subscribeForGuild: c,
            analyticsLocation: Z.Sbl.APP_STOREFRONT
        }),
        L = t.useMemo(() => {
            var n;
            return null === (n = m.benefits) || void 0 === n
                ? void 0
                : n.map((n) => ({
                      id: n.id,
                      title: n.name,
                      description: n.description,
                      icon: (0, g.n)(u, n.icon)
                  }));
        }, [u, m.benefits]),
        U = t.useMemo(() => (null != m.thumbnail ? (0, R.q)(u, m.thumbnail, 256) : void 0), [u, m.thumbnail]),
        C = t.useCallback(
            (n) =>
                (0, l.jsx)(E.p, {
                    ...n,
                    appId: u,
                    subscriptionType: v,
                    skuId: m.skuId,
                    subscriptionPlan: k,
                    cannotOpenReason: w
                }),
            [u, v, m.skuId, k, w]
        );
    if (N && (null == P ? void 0 : P.subscription.currentPeriodEnd) != null) {
        let n = A.format(null == P ? void 0 : P.subscription.currentPeriodEnd);
        T ? (s = _.intl.formatToPlainString(_.t.EV2lZ2, { date: n })) : y && (s = _.intl.formatToPlainString(_.t['2w6+ND'], { date: n }));
    }
    let F =
        null != s
            ? (0, l.jsx)(d.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: s
              })
            : void 0;
    return (0, l.jsx)(o.U, {
        title: m.summary,
        description: null !== (r = m.description) && void 0 !== r ? r : void 0,
        imgSrc: U,
        onPurchase: M,
        renderPurchaseButton: C,
        benefitItems:
            null != L
                ? L.map((n) =>
                      (0, l.jsx)(
                          o.G,
                          {
                              description: n.title,
                              icon: n.icon
                          },
                          n.id
                      )
                  )
                : void 0,
        onDetails:
            null != h
                ? h
                : null != L
                  ? () => {
                        (0, d.openModalLazy)(async () => {
                            let { SubscriptionDetailsModal: n } = await e.e('86282').then(e.bind(e, 519896));
                            return (i) =>
                                (0, l.jsx)(n, {
                                    appId: u,
                                    subscriptionType: v,
                                    skuId: m.skuId,
                                    guildId: c,
                                    ...i
                                });
                        });
                    }
                  : void 0,
        subtitle: F
    });
}
function F(n) {
    var i, t, r, o;
    let { skuId: u, appId: p, onDetails: v } = n,
        { analyticsLocations: x } = (0, m.ZP)(c.Z.APP_STOREFRONT),
        g = (0, a.e7)([j.Z], () => j.Z.getForSKU(u), [u]),
        I = (0, a.e7)([b.Z], () => b.Z.get(u), [u]),
        k = (0, T.M)(u);
    if (null == I) return null;
    let f = null !== (t = I.name) && void 0 !== t ? t : '',
        y = null !== (r = null == g ? void 0 : null === (i = g.description) || void 0 === i ? void 0 : i.trim()) && void 0 !== r ? r : void 0,
        R = (null == g ? void 0 : g.headerBackground) != null && null !== (o = N.Z.toURLSafe((0, P._W)(p, g.headerBackground, 256))) && void 0 !== o ? o : void 0,
        M = I.type === Z.epS.DURABLE && k,
        w = I.type === Z.epS.DURABLE ? (M ? _.intl.string(_.t.bm82mp) : _.intl.string(_.t['6gprwc'])) : void 0,
        { price: A } = I;
    return null == A
        ? null
        : (0, l.jsx)(s.I, {
              title: f,
              description: y,
              headerImage: R,
              availabilityLabel: w,
              onDetails:
                  null != v
                      ? v
                      : (0, S.Ew)(y)
                        ? void 0
                        : () => {
                              (0, d.openModalLazy)(async () => {
                                  let { ItemDetailsModal: n } = await e.e('69796').then(e.bind(e, 147496));
                                  return (i) =>
                                      (0, l.jsx)(n, {
                                          appId: p,
                                          skuId: u,
                                          ...i
                                      });
                              });
                          },
              PurchaseButton: (n) =>
                  (0, l.jsx)(E.Y, {
                      ...n,
                      appId: p,
                      sku: I
                  }),
              onPurchase: () => {
                  (0, h.r)({
                      appId: p,
                      skuId: I.id,
                      analyticsLocations: x
                  });
              }
          });
}
