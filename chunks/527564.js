n.d(a, {
    M: function () {
        return v;
    }
}),
    n(789020);
var i = n(735250),
    t = n(470079),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    _ = n(147496),
    p = n(519896),
    m = n(171246),
    g = n(55563),
    I = n(147890),
    h = n(272242),
    x = n(981631),
    f = n(689938),
    C = n(778452);
function v(e) {
    let { appId: a } = e,
        { subscriptions: n, otps: t } = (0, d.q)(a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.length > 0 &&
                (0, i.jsxs)('div', {
                    className: C.productSection,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            children: f.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                        }),
                        (0, i.jsx)('div', {
                            className: l()(C.productList, C.subList),
                            children: n.map((e) =>
                                (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: a,
                                        listing: e,
                                        subscriptionType: (0, m.KW)(e.skuFlags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, I.goToApplicationStoreSku)({
                                                applicationId: a,
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
            t.length > 0 &&
                (0, i.jsxs)('div', {
                    className: C.productSection,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            children: f.Z.Messages.STOREFRONT_APP_PRODUCTS
                        }),
                        (0, i.jsx)('div', {
                            className: l()(C.productList, C.itemList),
                            children: t.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: a,
                                        onDetails: () => {
                                            (0, I.goToApplicationStoreSku)({
                                                applicationId: a,
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
                path: x.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, i.jsx)(E, { ...e })
            })
        ]
    });
}
function E(e) {
    let {
            match: {
                params: { applicationId: a, skuId: n }
            }
        } = e,
        r = (0, s.e7)([g.Z], () => g.Z.get(n), [n]),
        l = (0, s.e7)([g.Z], () => (null != n ? g.Z.getParentSKU(n) : void 0), [n]),
        c = t.useId();
    return (
        t.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
                case x.epS.CONSUMABLE:
                case x.epS.DURABLE:
                    return (function (e, a, n) {
                        (0, o.openModal)(
                            (e) => {
                                let { onClose: t, transitionState: r } = e;
                                return (0, i.jsx)(_.ItemDetailsModal, {
                                    appId: a,
                                    skuId: n,
                                    onClose: t,
                                    transitionState: r
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !P() &&
                                        (0, I.goToApplicationSection)({
                                            applicationId: a,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, a, n);
                case x.epS.SUBSCRIPTION:
                    if ((null == l ? void 0 : l.id) == null || (null == l ? void 0 : l.flags) == null) return;
                    return (function (e, a, n, t, r) {
                        (0, o.openModal)(
                            (e) => {
                                let { onClose: l, transitionState: s } = e;
                                return (0, i.jsx)(p.SubscriptionDetailsModal, {
                                    appId: a,
                                    groupListingId: n,
                                    subscriptionType: (0, m.KW)(r) ? 'user' : 'guild',
                                    skuId: t,
                                    onClose: l,
                                    transitionState: s
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !P() &&
                                        (0, I.goToApplicationSection)({
                                            applicationId: a,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, a, l.id, n, l.flags);
            }
        }, [a, c, null == l ? void 0 : l.id, null == l ? void 0 : l.flags, null == r ? void 0 : r.type, n]),
        t.useLayoutEffect(
            () => () => {
                (0, o.closeModal)(c);
            },
            [c]
        ),
        null
    );
}
function P() {
    return window.location.pathname.startsWith('/login');
}
