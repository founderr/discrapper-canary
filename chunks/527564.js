t.d(n, {
    M: function () {
        return E;
    }
}),
    t(789020);
var i = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(442837),
    s = t(481060),
    c = t(765717),
    d = t(283836),
    u = t(507608),
    _ = t(147496),
    p = t(519896),
    m = t(171246),
    I = t(55563),
    f = t(147890),
    h = t(272242),
    g = t(981631),
    C = t(689938),
    v = t(778452);
function E(e) {
    let { appId: n } = e,
        { subscriptions: t, otps: a } = (0, d.q)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.length > 0 &&
                (0, i.jsxs)('div', {
                    className: v.productSection,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            children: C.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                        }),
                        (0, i.jsx)('div', {
                            className: o()(v.productList, v.subList),
                            children: t.map((e) =>
                                (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: n,
                                        listing: e,
                                        subscriptionType: (0, m.KW)(e.skuFlags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, f.goToApplicationStoreSku)({
                                                applicationId: n,
                                                skuId: e.skuId
                                            });
                                        }
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            a.length > 0 &&
                (0, i.jsxs)('div', {
                    className: v.productSection,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            children: C.Z.Messages.STOREFRONT_APP_PRODUCTS
                        }),
                        (0, i.jsx)('div', {
                            className: o()(v.productList, v.itemList),
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: n,
                                        onDetails: () => {
                                            (0, f.goToApplicationStoreSku)({
                                                applicationId: n,
                                                skuId: e.skuId
                                            });
                                        }
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, i.jsx)(c.Z, {
                path: g.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, i.jsx)(b, { ...e })
            })
        ]
    });
}
function b(e) {
    let {
            match: {
                params: { applicationId: n, skuId: t }
            }
        } = e,
        r = (0, l.e7)([I.Z], () => I.Z.get(t), [t]),
        o = (0, l.e7)([I.Z], () => (null != t ? I.Z.getParentSKU(t) : void 0), [t]),
        c = a.useId();
    return (
        a.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
                case g.epS.CONSUMABLE:
                case g.epS.DURABLE:
                    return (function (e, n, t) {
                        (0, s.openModal)(
                            (e) => {
                                let { onClose: a, transitionState: r } = e;
                                return (0, i.jsx)(_.ItemDetailsModal, {
                                    appId: n,
                                    skuId: t,
                                    onClose: a,
                                    transitionState: r
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !x() &&
                                        (0, f.goToApplicationSection)({
                                            applicationId: n,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, n, t);
                case g.epS.SUBSCRIPTION:
                    if ((null == o ? void 0 : o.id) == null || (null == o ? void 0 : o.flags) == null) return;
                    return (function (e, n, t, a, r) {
                        (0, s.openModal)(
                            (e) => {
                                let { onClose: o, transitionState: l } = e;
                                return (0, i.jsx)(p.SubscriptionDetailsModal, {
                                    appId: n,
                                    groupListingId: t,
                                    subscriptionType: (0, m.KW)(r) ? 'user' : 'guild',
                                    skuId: a,
                                    onClose: o,
                                    transitionState: l
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !x() &&
                                        (0, f.goToApplicationSection)({
                                            applicationId: n,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, n, o.id, t, o.flags);
            }
        }, [n, c, null == o ? void 0 : o.id, null == o ? void 0 : o.flags, null == r ? void 0 : r.type, t]),
        a.useLayoutEffect(
            () => () => {
                (0, s.closeModal)(c);
            },
            [c]
        ),
        null
    );
}
function x() {
    return window.location.pathname.startsWith('/login');
}
