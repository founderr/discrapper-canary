t.d(n, {
    AF: function () {
        return C;
    },
    hd: function () {
        return y;
    },
    zz: function () {
        return L;
    }
}),
    t(47120);
var a = t(735250),
    i = t(470079),
    l = t(905322),
    s = t(200207),
    r = t(269210),
    o = t(442837),
    d = t(481060),
    c = t(607070),
    u = t(100527),
    p = t(906732),
    m = t(87484),
    v = t(171246),
    h = t(930155),
    x = t(889989),
    g = t(696906),
    f = t(55563),
    S = t(551428),
    I = t(626135),
    N = t(768581),
    T = t(73346),
    R = t(624138),
    j = t(591759),
    _ = t(601911),
    b = t(150414),
    O = t(110742),
    k = t(147496),
    E = t(680005),
    P = t(519896),
    M = t(981631),
    A = t(689938),
    Z = t(335567);
function C(e) {
    let { app: n, guildId: t, subscriptions: s, otps: r } = e,
        m = i.useMemo(() => (0, _.y)(n, 100), [n]),
        { bot: h } = n,
        x = i.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, N.aN)({
                id: h.id,
                banner: h.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != n && null !== (e = j.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
        }, [h]),
        g = i.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, N.aN)({
                id: h.id,
                banner: h.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != n && null !== (e = j.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
        }, [h]),
        f = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        S = i.useMemo(() => [...s.map((e) => e.skuId), ...r.map((e) => e.skuId)], [s, r]),
        { analyticsLocations: T } = (0, p.ZP)(u.Z.APP_STOREFRONT);
    return (
        i.useEffect(() => {
            0 !== S.length &&
                I.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: n.id,
                    sku_ids: S,
                    location_stack: T
                });
        }, [T, n.id, S]),
        (0, a.jsxs)('div', {
            className: Z.wrapper,
            children: [
                (0, a.jsx)(l.j, {
                    title: n.name,
                    iconSrc: m,
                    backgroundSrc: x,
                    animatedBackgroundSrc: g,
                    prefersReducedMotion: f
                }),
                s.length > 0 &&
                    (0, a.jsxs)('div', {
                        className: Z.productSection,
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: A.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                            }),
                            (0, a.jsx)('div', {
                                className: Z.productList,
                                children: s.map((e) =>
                                    (0, a.jsx)(
                                        L,
                                        {
                                            appId: n.id,
                                            guildId: t,
                                            listing: e,
                                            subscriptionType: (0, v.KW)(e.skuFlags) ? 'user' : 'guild'
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    }),
                r.length > 0 &&
                    (0, a.jsxs)('div', {
                        className: Z.productSection,
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: A.Z.Messages.STOREFRONT_APP_PRODUCTS
                            }),
                            (0, a.jsx)('div', {
                                className: Z.productList,
                                children: r.map((e) =>
                                    (0, a.jsx)(
                                        y,
                                        {
                                            skuId: e.skuId,
                                            appId: n.id
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    }),
                (0, a.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    className: Z.legalText,
                    children:
                        null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
                            ? A.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                                  tosUrl: n.termsOfServiceUrl,
                                  ppUrl: n.privacyPolicyUrl
                              })
                            : A.Z.Messages.STOREFRONT_NO_TOS_PP
                })
            ]
        })
    );
}
function L(e) {
    var n;
    let { appId: t, guildId: l, listing: s, subscriptionType: o, onDetails: c } = e,
        { data: u } = (0, h.H)(s.skuId),
        {
            openModal: p,
            canOpenModal: m,
            cannotOpenReason: v
        } = (0, g.Z)({
            guildId: l,
            showBenefitsFirst: !1,
            analyticsLocation: M.Sbl.APP_STOREFRONT,
            skuId: s.skuId
        }),
        f = i.useMemo(() => {
            var e;
            return null === (e = s.benefits) || void 0 === e
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, x.n)(t, e.icon)
                  }));
        }, [t, s.benefits]),
        S = i.useMemo(() => (null != s.thumbnail ? (0, b.q)(t, s.thumbnail, 256) : void 0), [t, s.thumbnail]),
        I = i.useCallback(
            (e) =>
                null == u || 0 === u.length
                    ? null
                    : (0, a.jsx)(E.p, {
                          ...e,
                          appId: t,
                          subscriptionType: o,
                          skuId: s.skuId,
                          subscriptionPlan: u[0],
                          canPurchase: m,
                          cannotPurchaseReason: v
                      }),
            [t, o, s.skuId, u, m, v]
        );
    return null == u
        ? null
        : (0, a.jsx)(r.U, {
              title: s.summary,
              description: null !== (n = s.description) && void 0 !== n ? n : void 0,
              imgSrc: S,
              subscriptionType: o,
              onPurchase: p,
              renderPurchaseButton: I,
              benefitItems:
                  null != f
                      ? f.map((e) =>
                            (0, a.jsx)(
                                r.G,
                                {
                                    name: e.title,
                                    icon: e.icon
                                },
                                e.id
                            )
                        )
                      : void 0,
              onDetails:
                  null != c
                      ? c
                      : null != f
                        ? () => {
                              (0, d.openModal)((e) => {
                                  let { onClose: n, transitionState: i } = e;
                                  return (0, a.jsx)(P.SubscriptionDetailsModal, {
                                      appId: t,
                                      subscriptionType: o,
                                      onClose: n,
                                      skuId: s.skuId,
                                      transitionState: i,
                                      guildId: l
                                  });
                              });
                          }
                        : void 0
          });
}
function y(e) {
    var n, t, i, l;
    let { skuId: r, appId: c, onDetails: v } = e,
        { analyticsLocations: h } = (0, p.ZP)(u.Z.APP_STOREFRONT),
        x = (0, o.e7)([S.Z], () => S.Z.getForSKU(r), [r]),
        g = (0, o.e7)([f.Z], () => f.Z.get(r), [r]),
        I = (0, O.M)(r);
    if (null == g) return null;
    let N = null !== (t = g.name) && void 0 !== t ? t : '',
        _ = null !== (i = null == x ? void 0 : null === (n = x.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== i ? i : void 0,
        b = (null == x ? void 0 : x.headerBackground) != null && null !== (l = j.Z.toURLSafe((0, T._W)(c, x.headerBackground, 256))) && void 0 !== l ? l : void 0,
        P = g.type === M.epS.DURABLE && I,
        Z = g.type === M.epS.DURABLE ? (P ? A.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : A.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: C } = g;
    return null == C
        ? null
        : (0, a.jsx)(s.I, {
              title: N,
              description: _,
              headerImage: b,
              availabilityLabel: Z,
              onDetails:
                  null != v
                      ? v
                      : (0, R.Ew)(_)
                        ? void 0
                        : () => {
                              (0, d.openModal)((e) => {
                                  let { onClose: n, transitionState: t } = e;
                                  return (0, a.jsx)(k.ItemDetailsModal, {
                                      appId: c,
                                      skuId: r,
                                      onClose: n,
                                      transitionState: t
                                  });
                              });
                          },
              PurchaseButton: (e) =>
                  (0, a.jsx)(E.Y, {
                      ...e,
                      appId: c,
                      sku: g
                  }),
              onPurchase: () => {
                  (0, m.Z)({
                      applicationId: c,
                      skuId: g.id,
                      analyticsLocations: h
                  });
              }
          });
}
