n.d(a, {
    M: function () {
        return E;
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
    p = n(955335),
    m = n(519896),
    g = n(171246),
    I = n(55563),
    h = n(147890),
    f = n(272242),
    x = n(981631),
    C = n(689938),
    v = n(778452);
function E(e) {
    let { appId: a } = e,
        { subscriptions: n, otps: t } = (0, d.q)(a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.length > 0 &&
                (0, i.jsxs)('div', {
                    className: v.productSection,
                    children: [
                        (0, i.jsx)(p.r, { subscriptions: n }),
                        (0, i.jsx)('div', {
                            className: l()(v.productList, v.subList),
                            children: n.map((e) =>
                                (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: a,
                                        listing: e,
                                        subscriptionType: (0, g.KW)(e.skuFlags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, h.goToApplicationStoreSku)({
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
                    className: v.productSection,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            children: C.Z.Messages.STOREFRONT_APP_PRODUCTS
                        }),
                        (0, i.jsx)('div', {
                            className: l()(v.productList, v.itemList),
                            children: t.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: a,
                                        onDetails: () => {
                                            (0, h.goToApplicationStoreSku)({
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
                render: (e) => (0, i.jsx)(P, { ...e })
            })
        ]
    });
}
function P(e) {
    let {
            match: {
                params: { applicationId: a, skuId: n }
            }
        } = e,
        r = (0, s.e7)([I.Z], () => I.Z.get(n), [n]),
        l = (0, s.e7)([I.Z], () => (null != n ? I.Z.getParentSKU(n) : void 0), [n]),
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
                                    !b() &&
                                        (0, h.goToApplicationSection)({
                                            applicationId: a,
                                            section: f.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, a, n);
                case x.epS.SUBSCRIPTION:
                    if ((null == l ? void 0 : l.flags) == null) return;
                    return (function (e, a, n, t) {
                        (0, o.openModal)(
                            (e) => {
                                let { onClose: r, transitionState: l } = e;
                                return (0, i.jsx)(m.SubscriptionDetailsModal, {
                                    appId: a,
                                    subscriptionType: (0, g.KW)(t) ? 'user' : 'guild',
                                    skuId: n,
                                    guildId: null,
                                    onClose: r,
                                    transitionState: l
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !b() &&
                                        (0, h.goToApplicationSection)({
                                            applicationId: a,
                                            section: f.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, a, n, l.flags);
            }
        }, [a, c, null == l ? void 0 : l.flags, null == r ? void 0 : r.type, n]),
        t.useLayoutEffect(
            () => () => {
                (0, o.closeModal)(c);
            },
            [c]
        ),
        null
    );
}
function b() {
    return window.location.pathname.startsWith('/login');
}
