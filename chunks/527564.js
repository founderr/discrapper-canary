t.d(n, {
    M: function () {
        return b;
    }
});
var i = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    s = t(442837),
    l = t(481060),
    c = t(765717),
    d = t(283836),
    u = t(507608),
    _ = t(147496),
    p = t(519896),
    m = t(270144),
    I = t(171246),
    f = t(55563),
    g = t(147890),
    h = t(272242),
    C = t(981631),
    v = t(689938),
    E = t(696672);
function b(e) {
    let { appId: n, guildId: t } = e,
        { subscriptionGroupListing: a } = (0, m.F5)(n, t),
        { subs: r, otps: s } = (0, d.q)(n, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.length > 0 &&
                null != a &&
                (0, i.jsxs)('div', {
                    className: E.productSection,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                        }),
                        (0, i.jsx)('div', {
                            className: o()(E.productList, E.subList),
                            children: r.map((e) =>
                                (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: n,
                                        groupListingId: a.id,
                                        listing: e,
                                        groupListingType: (0, I.KW)(a.sku_flags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
                                                applicationId: n,
                                                skuId: e.id
                                            });
                                        }
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            s.length > 0 &&
                (0, i.jsxs)('div', {
                    className: E.productSection,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.Z.Messages.STOREFRONT_APP_PRODUCTS
                        }),
                        (0, i.jsx)('div', {
                            className: o()(E.productList, E.itemList),
                            children: s.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: n,
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
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
                path: C.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) =>
                    (0, i.jsx)(x, {
                        ...e,
                        subscriptionGroupListing: null != a ? a : void 0
                    })
            })
        ]
    });
}
function x(e) {
    let {
            match: {
                params: { applicationId: n, skuId: t }
            },
            subscriptionGroupListing: r
        } = e,
        o = (0, s.e7)([f.Z], () => f.Z.get(t), [t]),
        c = a.useId();
    return (
        a.useLayoutEffect(() => {
            if (null != o)
                switch (o.type) {
                    case C.epS.CONSUMABLE:
                    case C.epS.DURABLE:
                        return (function (e, n, t) {
                            (0, l.openModal)(
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
                                        !A() &&
                                            (0, g.goToApplicationSection)({
                                                applicationId: n,
                                                section: h.ApplicationDirectoryProfileSections.STORE
                                            });
                                    }
                                }
                            );
                        })(c, n, t);
                    case C.epS.SUBSCRIPTION: {
                        var e;
                        if (null == r) return;
                        let a = null === (e = r.subscription_listings) || void 0 === e ? void 0 : e.find((e) => e.id === t);
                        if (null == a) return;
                        return (function (e, n, t, a) {
                            (0, l.openModal)(
                                (e) => {
                                    let { onClose: r, transitionState: o } = e;
                                    return (0, i.jsx)(p.SubscriptionDetailsModal, {
                                        appId: n,
                                        groupListingId: t.id,
                                        groupListingType: (0, I.KW)(t.sku_flags) ? 'user' : 'guild',
                                        skuId: a.id,
                                        onClose: r,
                                        transitionState: o
                                    });
                                },
                                {
                                    modalKey: e,
                                    onCloseCallback() {
                                        !A() &&
                                            (0, g.goToApplicationSection)({
                                                applicationId: n,
                                                section: h.ApplicationDirectoryProfileSections.STORE
                                            });
                                    }
                                }
                            );
                        })(c, n, r, a);
                    }
                }
        }, [n, c, o, t, r]),
        a.useLayoutEffect(
            () => () => {
                (0, l.closeModal)(c);
            },
            [c]
        ),
        null
    );
}
function A() {
    return window.location.pathname.startsWith('/login');
}
