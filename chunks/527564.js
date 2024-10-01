a.d(n, {
    M: function () {
        return C;
    }
}),
    a(789020);
var i = a(735250),
    t = a(470079),
    r = a(120356),
    l = a.n(r),
    s = a(442837),
    o = a(481060),
    c = a(765717),
    d = a(283836),
    u = a(507608),
    _ = a(147496),
    m = a(519896),
    p = a(171246),
    g = a(55563),
    I = a(147890),
    h = a(272242),
    x = a(981631),
    v = a(689938),
    f = a(778452);
function C(e) {
    let { appId: n } = e,
        { subscriptions: a, otps: t } = (0, d.q)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a.length > 0 &&
                (0, i.jsxs)('div', {
                    className: f.productSection,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                        }),
                        (0, i.jsx)('div', {
                            className: l()(f.productList, f.subList),
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: n,
                                        listing: e,
                                        subscriptionType: (0, p.KW)(e.skuFlags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, I.goToApplicationStoreSku)({
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
            t.length > 0 &&
                (0, i.jsxs)('div', {
                    className: f.productSection,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.Z.Messages.STOREFRONT_APP_PRODUCTS
                        }),
                        (0, i.jsx)('div', {
                            className: l()(f.productList, f.itemList),
                            children: t.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: n,
                                        onDetails: () => {
                                            (0, I.goToApplicationStoreSku)({
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
                params: { applicationId: n, skuId: a }
            }
        } = e,
        r = (0, s.e7)([g.Z], () => g.Z.get(a), [a]),
        l = (0, s.e7)([g.Z], () => (null != a ? g.Z.getParentSKU(a) : void 0), [a]),
        c = t.useId();
    return (
        t.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
                case x.epS.CONSUMABLE:
                case x.epS.DURABLE:
                    return (function (e, n, a) {
                        (0, o.openModal)(
                            (e) => {
                                let { onClose: t, transitionState: r } = e;
                                return (0, i.jsx)(_.ItemDetailsModal, {
                                    appId: n,
                                    skuId: a,
                                    onClose: t,
                                    transitionState: r
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !P() &&
                                        (0, I.goToApplicationSection)({
                                            applicationId: n,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, n, a);
                case x.epS.SUBSCRIPTION:
                    if ((null == l ? void 0 : l.flags) == null) return;
                    return (function (e, n, a, t) {
                        (0, o.openModal)(
                            (e) => {
                                let { onClose: r, transitionState: l } = e;
                                return (0, i.jsx)(m.SubscriptionDetailsModal, {
                                    appId: n,
                                    subscriptionType: (0, p.KW)(t) ? 'user' : 'guild',
                                    skuId: a,
                                    guildId: null,
                                    onClose: r,
                                    transitionState: l
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !P() &&
                                        (0, I.goToApplicationSection)({
                                            applicationId: n,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, n, a, l.flags);
            }
        }, [n, c, null == l ? void 0 : l.flags, null == r ? void 0 : r.type, a]),
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
