i.d(e, {
    AF: function () {
        return Z;
    },
    hd: function () {
        return F;
    },
    zz: function () {
        return L;
    }
}),
    i(47120);
var l = i(735250),
    t = i(470079),
    s = i(905322),
    r = i(200207),
    a = i(269210),
    o = i(442837),
    d = i(481060),
    u = i(607070),
    c = i(100527),
    m = i(906732),
    v = i(87484),
    p = i(171246),
    h = i(930155),
    x = i(889989),
    I = i(696906),
    g = i(55563),
    S = i(551428),
    R = i(626135),
    f = i(768581),
    P = i(73346),
    j = i(624138),
    N = i(591759),
    T = i(601911),
    b = i(150414),
    k = i(110742),
    O = i(147496),
    _ = i(680005),
    y = i(955335),
    E = i(519896),
    M = i(981631),
    U = i(689938),
    A = i(335567);
function Z(n) {
    let { app: e, guildId: i, subscriptions: r, otps: a } = n,
        v = t.useMemo(() => (0, T.y)(e, 100), [e]),
        { bot: h } = e,
        x = t.useMemo(() => {
            var n;
            if ((null == h ? void 0 : h.banner) == null) return;
            let e = (0, f.aN)({
                id: h.id,
                banner: h.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != e && null !== (n = N.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [h]),
        I = t.useMemo(() => {
            var n;
            if ((null == h ? void 0 : h.banner) == null) return;
            let e = (0, f.aN)({
                id: h.id,
                banner: h.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != e && null !== (n = N.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [h]),
        g = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        S = t.useMemo(() => [...r.map((n) => n.skuId), ...a.map((n) => n.skuId)], [r, a]),
        { analyticsLocations: P } = (0, m.ZP)(c.Z.APP_STOREFRONT);
    return (
        t.useEffect(() => {
            0 !== S.length &&
                R.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: S,
                    location_stack: P
                });
        }, [P, e.id, S]),
        (0, l.jsxs)('div', {
            className: A.wrapper,
            children: [
                (0, l.jsx)(s.j, {
                    title: e.name,
                    iconSrc: v,
                    backgroundSrc: x,
                    animatedBackgroundSrc: I,
                    prefersReducedMotion: g
                }),
                r.length > 0 &&
                    (0, l.jsxs)('div', {
                        className: A.productSection,
                        children: [
                            (0, l.jsx)(y.r, { subscriptions: r }),
                            (0, l.jsx)('div', {
                                className: A.productList,
                                children: r.map((n) =>
                                    (0, l.jsx)(
                                        L,
                                        {
                                            appId: e.id,
                                            guildId: i,
                                            listing: n,
                                            subscriptionType: (0, p.KW)(n.skuFlags) ? 'user' : 'guild'
                                        },
                                        n.id
                                    )
                                )
                            })
                        ]
                    }),
                a.length > 0 &&
                    (0, l.jsxs)('div', {
                        className: A.productSection,
                        children: [
                            (0, l.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: U.Z.Messages.STOREFRONT_APP_PRODUCTS
                            }),
                            (0, l.jsx)('div', {
                                className: A.productList,
                                children: a.map((n) =>
                                    (0, l.jsx)(
                                        F,
                                        {
                                            skuId: n.skuId,
                                            appId: e.id
                                        },
                                        n.id
                                    )
                                )
                            })
                        ]
                    }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    className: A.legalText,
                    children:
                        null != e.termsOfServiceUrl && null != e.privacyPolicyUrl
                            ? U.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                                  tosUrl: e.termsOfServiceUrl,
                                  ppUrl: e.privacyPolicyUrl
                              })
                            : U.Z.Messages.STOREFRONT_NO_TOS_PP
                })
            ]
        })
    );
}
function L(n) {
    var e;
    let { appId: i, guildId: s, listing: r, subscriptionType: o, onDetails: u } = n,
        { data: c } = (0, h.H)(r.skuId),
        {
            openModal: m,
            canOpenModal: v,
            cannotOpenReason: p
        } = (0, I.Z)({
            guildId: s,
            showBenefitsFirst: !1,
            analyticsLocation: M.Sbl.APP_STOREFRONT,
            skuId: r.skuId
        }),
        g = t.useMemo(() => {
            var n;
            return null === (n = r.benefits) || void 0 === n
                ? void 0
                : n.map((n) => ({
                      id: n.id,
                      title: n.name,
                      description: n.description,
                      icon: (0, x.n)(i, n.icon)
                  }));
        }, [i, r.benefits]),
        S = t.useMemo(() => (null != r.thumbnail ? (0, b.q)(i, r.thumbnail, 256) : void 0), [i, r.thumbnail]),
        R = t.useCallback(
            (n) =>
                null == c || 0 === c.length
                    ? null
                    : (0, l.jsx)(_.p, {
                          ...n,
                          appId: i,
                          subscriptionType: o,
                          skuId: r.skuId,
                          subscriptionPlan: c[0],
                          canPurchase: v,
                          cannotPurchaseReason: p
                      }),
            [i, o, r.skuId, c, v, p]
        );
    return null == c
        ? null
        : (0, l.jsx)(a.U, {
              title: r.summary,
              description: null !== (e = r.description) && void 0 !== e ? e : void 0,
              imgSrc: S,
              onPurchase: m,
              renderPurchaseButton: R,
              benefitItems:
                  null != g
                      ? g.map((n) =>
                            (0, l.jsx)(
                                a.G,
                                {
                                    name: n.title,
                                    icon: n.icon
                                },
                                n.id
                            )
                        )
                      : void 0,
              onDetails:
                  null != u
                      ? u
                      : null != g
                        ? () => {
                              (0, d.openModal)((n) => {
                                  let { onClose: e, transitionState: t } = n;
                                  return (0, l.jsx)(E.SubscriptionDetailsModal, {
                                      appId: i,
                                      subscriptionType: o,
                                      onClose: e,
                                      skuId: r.skuId,
                                      transitionState: t,
                                      guildId: s
                                  });
                              });
                          }
                        : void 0
          });
}
function F(n) {
    var e, i, t, s;
    let { skuId: a, appId: u, onDetails: p } = n,
        { analyticsLocations: h } = (0, m.ZP)(c.Z.APP_STOREFRONT),
        x = (0, o.e7)([S.Z], () => S.Z.getForSKU(a), [a]),
        I = (0, o.e7)([g.Z], () => g.Z.get(a), [a]),
        R = (0, k.M)(a);
    if (null == I) return null;
    let f = null !== (i = I.name) && void 0 !== i ? i : '',
        T = null !== (t = null == x ? void 0 : null === (e = x.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== t ? t : void 0,
        b = (null == x ? void 0 : x.headerBackground) != null && null !== (s = N.Z.toURLSafe((0, P._W)(u, x.headerBackground, 256))) && void 0 !== s ? s : void 0,
        y = I.type === M.epS.DURABLE && R,
        E = I.type === M.epS.DURABLE ? (y ? U.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : U.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: A } = I;
    return null == A
        ? null
        : (0, l.jsx)(r.I, {
              title: f,
              description: T,
              headerImage: b,
              availabilityLabel: E,
              onDetails:
                  null != p
                      ? p
                      : (0, j.Ew)(T)
                        ? void 0
                        : () => {
                              (0, d.openModal)((n) => {
                                  let { onClose: e, transitionState: i } = n;
                                  return (0, l.jsx)(O.ItemDetailsModal, {
                                      appId: u,
                                      skuId: a,
                                      onClose: e,
                                      transitionState: i
                                  });
                              });
                          },
              PurchaseButton: (n) =>
                  (0, l.jsx)(_.Y, {
                      ...n,
                      appId: u,
                      sku: I
                  }),
              onPurchase: () => {
                  (0, v.Z)({
                      applicationId: u,
                      skuId: I.id,
                      analyticsLocations: h
                  });
              }
          });
}
