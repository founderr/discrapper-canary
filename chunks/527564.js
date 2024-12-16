n.d(t, {
    M: function () {
        return C;
    }
}),
    n(789020);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(442837),
    s = n(481060),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    p = n(147496),
    m = n(955335),
    _ = n(519896),
    f = n(171246),
    h = n(55563),
    g = n(147890),
    I = n(272242),
    x = n(981631),
    v = n(388032),
    b = n(701672);
function C(e) {
    let { appId: t } = e,
        { subscriptions: n, otps: a } = (0, d.q)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.length > 0 &&
                (0, i.jsxs)('div', {
                    className: b.productSection,
                    children: [
                        (0, i.jsx)(m.r, { subscriptions: n }),
                        (0, i.jsx)('div', {
                            className: o()(b.productList, b.subList),
                            children: n.map((e) =>
                                (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: t,
                                        listing: e,
                                        subscriptionType: (0, f.KW)(e.skuFlags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
                                                applicationId: t,
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
                    className: b.productSection,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.intl.string(v.t.yUGTs7)
                        }),
                        (0, i.jsx)('div', {
                            className: o()(b.productList, b.itemList),
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t,
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
                                                applicationId: t,
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
                render: (e) => (0, i.jsx)(S, { ...e })
            })
        ]
    });
}
function S(e) {
    let {
            match: {
                params: { applicationId: t, skuId: n }
            }
        } = e,
        r = (0, l.e7)([h.Z], () => h.Z.get(n), [n]),
        o = (0, l.e7)([h.Z], () => (null != n ? h.Z.getParentSKU(n) : void 0), [n]),
        c = a.useId();
    return (
        a.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
                case x.epS.CONSUMABLE:
                case x.epS.DURABLE:
                    return (function (e, t, n) {
                        (0, s.openModal)(
                            (e) => {
                                let { onClose: a, transitionState: r } = e;
                                return (0, i.jsx)(p.ItemDetailsModal, {
                                    appId: t,
                                    skuId: n,
                                    onClose: a,
                                    transitionState: r
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !N() &&
                                        (0, g.goToApplicationSection)({
                                            applicationId: t,
                                            section: I.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, t, n);
                case x.epS.SUBSCRIPTION:
                    if ((null == o ? void 0 : o.flags) == null) return;
                    return (function (e, t, n, a) {
                        (0, s.openModal)(
                            (e) => {
                                let { onClose: r, transitionState: o } = e;
                                return (0, i.jsx)(_.SubscriptionDetailsModal, {
                                    appId: t,
                                    subscriptionType: (0, f.KW)(a) ? 'user' : 'guild',
                                    skuId: n,
                                    guildId: null,
                                    onClose: r,
                                    transitionState: o
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !N() &&
                                        (0, g.goToApplicationSection)({
                                            applicationId: t,
                                            section: I.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, t, n, o.flags);
            }
        }, [t, c, null == o ? void 0 : o.flags, null == r ? void 0 : r.type, n]),
        a.useLayoutEffect(
            () => () => {
                (0, s.closeModal)(c);
            },
            [c]
        ),
        null
    );
}
function N() {
    return window.location.pathname.startsWith('/login');
}
