i.d(e, {
    AF: function () {
        return U;
    },
    hd: function () {
        return L;
    },
    zz: function () {
        return A;
    }
}),
    i(47120);
var l = i(735250),
    t = i(470079),
    r = i(905322),
    s = i(200207),
    a = i(269210),
    d = i(442837),
    o = i(481060),
    u = i(607070),
    c = i(100527),
    p = i(906732),
    v = i(87484),
    m = i(171246),
    g = i(930155),
    h = i(889989),
    x = i(696906),
    I = i(55563),
    S = i(551428),
    j = i(626135),
    b = i(768581),
    f = i(73346),
    k = i(624138),
    R = i(591759),
    N = i(601911),
    T = i(150414),
    P = i(110742),
    O = i(147496),
    _ = i(680005),
    M = i(519896),
    Z = i(981631),
    y = i(689938),
    E = i(335567);
function U(n) {
    let { app: e, onlySubscribeServerSubForGuildId: i, subscriptions: s, otps: a } = n,
        v = t.useMemo(() => (0, N.y)(e, 100), [e]),
        { bot: g } = e,
        h = t.useMemo(() => {
            var n;
            if ((null == g ? void 0 : g.banner) == null) return;
            let e = (0, b.aN)({
                id: g.id,
                banner: g.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != e && null !== (n = R.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [g]),
        x = t.useMemo(() => {
            var n;
            if ((null == g ? void 0 : g.banner) == null) return;
            let e = (0, b.aN)({
                id: g.id,
                banner: g.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != e && null !== (n = R.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [g]),
        I = (0, d.e7)([u.Z], () => u.Z.useReducedMotion),
        S = t.useMemo(() => [...s.map((n) => n.skuId), ...a.map((n) => n.skuId)], [s, a]),
        { analyticsLocations: f } = (0, p.ZP)(c.Z.APP_STOREFRONT);
    return (
        t.useEffect(() => {
            0 !== S.length &&
                j.default.track(Z.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: S,
                    location_stack: f
                });
        }, [f, e.id, S]),
        (0, l.jsxs)('div', {
            className: E.wrapper,
            children: [
                (0, l.jsx)(r.j, {
                    title: e.name,
                    iconSrc: v,
                    backgroundSrc: h,
                    animatedBackgroundSrc: x,
                    prefersReducedMotion: I
                }),
                s.length > 0 &&
                    (0, l.jsxs)('div', {
                        className: E.productSection,
                        children: [
                            (0, l.jsx)(o.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: y.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                            }),
                            (0, l.jsx)('div', {
                                className: E.productList,
                                children: s.map((n) =>
                                    (0, l.jsx)(
                                        A,
                                        {
                                            appId: e.id,
                                            onlySubscribeServerSubForGuildId: i,
                                            listing: n,
                                            subscriptionType: (0, m.KW)(n.skuFlags) ? 'user' : 'guild'
                                        },
                                        n.id
                                    )
                                )
                            })
                        ]
                    }),
                a.length > 0 &&
                    (0, l.jsxs)('div', {
                        className: E.productSection,
                        children: [
                            (0, l.jsx)(o.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: y.Z.Messages.STOREFRONT_APP_PRODUCTS
                            }),
                            (0, l.jsx)('div', {
                                className: E.productList,
                                children: a.map((n) =>
                                    (0, l.jsx)(
                                        L,
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
                (0, l.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: E.legalText,
                    children:
                        null != e.termsOfServiceUrl && null != e.privacyPolicyUrl
                            ? y.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                                  tosUrl: e.termsOfServiceUrl,
                                  ppUrl: e.privacyPolicyUrl
                              })
                            : y.Z.Messages.STOREFRONT_NO_TOS_PP
                })
            ]
        })
    );
}
function A(n) {
    var e;
    let { appId: i, onlySubscribeServerSubForGuildId: r, listing: s, subscriptionType: u, onDetails: c } = n,
        { data: p } = (0, g.H)(s.skuId),
        v = (0, d.e7)([I.Z], () => I.Z.getParentSKU(s.skuId), [s.skuId]),
        { openModal: m } = (0, x.Z)({
            guildId: r,
            groupListingId: null == v ? void 0 : v.id,
            showBenefitsFirst: !1,
            analyticsLocation: Z.Sbl.APP_STOREFRONT,
            skuId: s.skuId
        }),
        S = t.useMemo(() => {
            var n;
            return null === (n = s.benefits) || void 0 === n
                ? void 0
                : n.map((n) => ({
                      id: n.id,
                      title: n.name,
                      description: n.description,
                      icon: (0, h.n)(i, n.icon)
                  }));
        }, [i, s.benefits]),
        j = t.useMemo(() => (null != s.thumbnail ? (0, T.q)(i, s.thumbnail, 256) : void 0), [i, s.thumbnail]),
        b = t.useCallback(
            (n) =>
                null == p || 0 === p.length
                    ? null
                    : (0, l.jsx)(_.p, {
                          ...n,
                          appId: i,
                          groupListingId: null == v ? void 0 : v.id,
                          subscriptionType: u,
                          guildId: r,
                          skuId: s.skuId,
                          subscriptionPlan: p[0]
                      }),
            [i, null == v ? void 0 : v.id, u, r, s.skuId, p]
        );
    return null == p
        ? null
        : (0, l.jsx)(a.U, {
              title: s.summary,
              description: null !== (e = s.description) && void 0 !== e ? e : void 0,
              imgSrc: j,
              subscriptionType: u,
              onPurchase: m,
              renderPurchaseButton: b,
              benefitItems:
                  null != S
                      ? S.map((n) =>
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
                  null != c
                      ? c
                      : null != S
                        ? () => {
                              (0, o.openModal)((n) => {
                                  let { onClose: e, transitionState: t } = n;
                                  return (0, l.jsx)(M.SubscriptionDetailsModal, {
                                      appId: i,
                                      groupListingId: null == v ? void 0 : v.id,
                                      subscriptionType: u,
                                      onClose: e,
                                      skuId: s.skuId,
                                      transitionState: t
                                  });
                              });
                          }
                        : void 0
          });
}
function L(n) {
    var e, i, t, r;
    let { skuId: a, appId: u, onDetails: m } = n,
        { analyticsLocations: g } = (0, p.ZP)(c.Z.APP_STOREFRONT),
        h = (0, d.e7)([S.Z], () => S.Z.getForSKU(a), [a]),
        x = (0, d.e7)([I.Z], () => I.Z.get(a), [a]),
        j = (0, P.M)(a);
    if (null == x) return null;
    let b = null !== (i = x.name) && void 0 !== i ? i : '',
        N = null !== (t = null == h ? void 0 : null === (e = h.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== t ? t : void 0,
        T = (null == h ? void 0 : h.headerBackground) != null && null !== (r = R.Z.toURLSafe((0, f._W)(u, h.headerBackground, 256))) && void 0 !== r ? r : void 0,
        M = x.type === Z.epS.DURABLE && j,
        E = x.type === Z.epS.DURABLE ? (M ? y.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : y.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: U } = x;
    return null == U
        ? null
        : (0, l.jsx)(s.I, {
              title: b,
              description: N,
              headerImage: T,
              availabilityLabel: E,
              onDetails:
                  null != m
                      ? m
                      : (0, k.Ew)(N)
                        ? void 0
                        : () => {
                              (0, o.openModal)((n) => {
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
                      sku: x
                  }),
              onPurchase: () => {
                  (0, v.Z)({
                      applicationId: u,
                      skuId: x.id,
                      analyticsLocations: g
                  });
              }
          });
}
