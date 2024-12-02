n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(789020);
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(442837),
    s = n(481060),
    o = n(794295),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    h = n(955335),
    m = n(171246),
    p = n(55563),
    g = n(133743),
    f = n(979007),
    _ = n(981631),
    E = n(388032),
    I = n(272680);
function C(e) {
    let { application: t } = e;
    return (0, i.jsxs)('div', {
        className: I.storeContainer,
        children: [(0, i.jsx)(v, { application: t }), (0, i.jsx)(S, { application: t })]
    });
}
function v(e) {
    let { application: t } = e,
        { subscriptions: n, otps: r } = (0, d.q)(t.id);
    return (0, i.jsxs)('div', {
        className: I.storeContainer,
        children: [
            n.length > 0 &&
                (0, i.jsxs)('div', {
                    className: I.productSection,
                    children: [
                        (0, i.jsx)(h.r, {
                            subscriptions: n,
                            color: 'header-primary'
                        }),
                        (0, i.jsx)('div', {
                            className: I.products,
                            children: n.map((e) => {
                                let n = (0, m.KW)(e.skuFlags) ? 'user' : 'guild';
                                return (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () => (0, g.Gp)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                );
                            })
                        })
                    ]
                }),
            r.length > 0 &&
                (0, i.jsxs)('div', {
                    className: I.productSection,
                    children: [
                        (0, i.jsx)(l.X6, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: E.intl.string(E.t.yUGTs7)
                        }),
                        (0, i.jsx)('div', {
                            className: I.products,
                            children: r.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () => (0, g.Gp)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, i.jsx)(c.Z, {
                path: _.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, i.jsx)(N, { ...e })
            })
        ]
    });
}
function N(e) {
    let {
            match: {
                params: { applicationId: t, skuId: l }
            }
        } = e,
        o = (0, a.e7)([p.Z], () => p.Z.get(l), [l]),
        c = (0, a.e7)([p.Z], () => (null != l ? p.Z.getParentSKU(l) : void 0), [l]),
        d = r.useId(),
        u = r.useCallback(() => (0, g.Gp)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.Wc.STORE)), [t]);
    return (
        r.useLayoutEffect(() => {
            var e, r, a, d, u;
            switch (null == o ? void 0 : o.type) {
                case _.epS.CONSUMABLE:
                case _.epS.DURABLE:
                    (e = t),
                        (r = l),
                        (0, s.openModalLazy)(
                            async () => {
                                let { ItemDetailsModal: t } = await Promise.resolve().then(n.bind(n, 147496));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        appId: e,
                                        skuId: r,
                                        ...n
                                    });
                            },
                            { onCloseCallback: () => (0, g.Gp)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(e, f.Wc.STORE)) }
                        );
                    break;
                case _.epS.SUBSCRIPTION:
                    if ((null == c ? void 0 : c.flags) == null) return;
                    (a = t),
                        (d = l),
                        (u = (0, m.KW)(c.flags) ? 'user' : 'guild'),
                        (0, s.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: e } = await Promise.resolve().then(n.bind(n, 519896));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        appId: a,
                                        subscriptionType: u,
                                        skuId: d,
                                        guildId: void 0,
                                        ...t
                                    });
                            },
                            { onCloseCallback: () => (0, g.Gp)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(a, f.Wc.STORE)) }
                        );
            }
        }, [t, d, u, null == c ? void 0 : c.flags, null == o ? void 0 : o.flags, null == o ? void 0 : o.type, l]),
        r.useLayoutEffect(
            () => () => {
                (0, s.closeModal)(d);
            },
            [d]
        ),
        null
    );
}
function S(e) {
    let { application: t } = e,
        n = t.terms_of_service_url,
        r = t.privacy_policy_url;
    if (null == n && null == r) return null;
    let a = (e, t) =>
        (0, i.jsx)(o.Z, {
            href: t,
            children: e
        });
    return (0, i.jsx)('div', {
        className: I.legalContainer,
        children: (0, i.jsx)(l.xv, {
            color: 'header-primary',
            variant: 'text-sm/normal',
            children:
                null != n && null != r
                    ? E.intl.format(E.t.zjYypa, {
                          termsHook: (e) => a(e, n),
                          privacyHook: (e) => a(e, r)
                      })
                    : null != n
                      ? E.intl.format(E.t.YA1hw8, { termsHook: (e) => a(e, n) })
                      : null != r
                        ? E.intl.format(E.t['0LMe/P'], { privacyHook: (e) => a(e, r) })
                        : null
        })
    });
}
