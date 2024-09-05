n.d(t, {
    F: function () {
        return L;
    },
    P: function () {
        return v;
    }
}),
    n(47120),
    n(789020);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(241159),
    o = n(558381),
    c = n(812206),
    u = n(307643),
    d = n(171246),
    _ = n(359610),
    E = n(592125),
    I = n(509545),
    m = n(238),
    T = n(55563),
    h = n(551428),
    N = n(626135),
    f = n(572004),
    C = n(601911),
    p = n(504211),
    g = n(381961),
    S = n(970321),
    A = n(680005),
    R = n(981631),
    O = n(272242),
    x = n(689938),
    M = n(242271);
let v = P(function (e) {
        let { appId: t, message: o } = e,
            d = (0, S.R)(t),
            [I, T, h, f, g, A, v] = (0, s.Wu)(
                [c.Z, m.Z, E.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, C.y)(n, 45) : void 0,
                        a = null === (e = E.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), m.Z.getStoreLayout(t), m.Z.getFetchStatus(t), a, i];
                },
                [t, o.channel_id]
            );
        a.useEffect(() => {
            g === m.N.NONE && (0, l.k)(t), null == I && !T && !h && (0, u.UM)(t);
        }, [I, t, h, T, g]);
        let L = f.subscriptions.length,
            P = f.otps.length,
            b = a.useMemo(
                () =>
                    L > 0 && P > 0
                        ? x.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
                              subCount: L,
                              itemCount: P
                          })
                        : L > 0
                          ? x.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: L })
                          : P > 0
                            ? x.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: P })
                            : x.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS,
                [P, L]
            );
        if (!d || null == I) return null;
        let D = () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('89131'), n.e('21592')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        onlySubscribeServerSubForGuildId: A
                    });
            });
        };
        return (0, i.jsx)(Z, {
            appName: I.name,
            title: x.Z.Messages.STOREFRONT_TITLE.format({ appName: I.name }),
            description: b,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, O.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, p.X)(t, p.B.STORE_EMBED);
            },
            iconSrc: v,
            onIconClick: () => {
                D(),
                    N.default.track(R.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(_.Z, {
                size: r.ButtonSizes.MEDIUM,
                onClick: () => {
                    D(),
                        N.default.track(R.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: M.openStoreButton,
                children: x.Z.Messages.STOREFRONT_OPEN_STORE
            })
        });
    }),
    L = P(function (e) {
        var t, l;
        let { skuId: u, message: m } = e,
            [f, g, v, L, P, b, D, j] = (0, s.Wu)(
                [T.Z, h.Z, I.Z, E.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let a = null === (e = E.Z.getBasicChannel(m.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        s = T.Z.get(u),
                        r = null !== (n = null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == s ? void 0 : s.applicationId,
                        l = null !== (i = null != r ? c.Z.getApplication(r) : void 0) && void 0 !== i ? i : null == s ? void 0 : s.application,
                        o = null != l ? (0, C.y)(l, 45) : void 0,
                        d = I.Z.getForSKU(u);
                    return [s, l, h.Z.getForSKU(u), T.Z.isFetching(u), T.Z.didFetchingSkuFail(u), d.length > 0 ? d[0] : null, a, o];
                },
                [m.channel_id, u]
            ),
            U = (0, S.R)(null !== (l = null == g ? void 0 : g.id) && void 0 !== l ? l : '');
        a.useEffect(() => {
            null == f && !L && !P && (0, o.km)(u);
        }, [P, L, f, u]),
            a.useEffect(() => {
                if ((null == g ? void 0 : g.id) != null) (0, o.oJ)(null == g ? void 0 : g.id);
            }, [null == g ? void 0 : g.id]);
        let y = (0, s.e7)([T.Z], () => (null != u ? T.Z.getParentSKU(u) : void 0), [u]);
        if (!U || null == g || null == f) return null;
        let B = f.type === R.epS.SUBSCRIPTION,
            k = !!B && (0, d.KW)(f.flags),
            G = () => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('89131'), n.e('21592')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: g.id,
                            onlySubscribeServerSubForGuildId: D
                        });
                });
            },
            F = () => {
                (0, r.openModalLazy)(async () => {
                    let e = B ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = B ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let a = () => {
                            n.onClose(), G();
                        };
                        return null != e && null != y
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: g.id,
                                  skuId: f.id,
                                  groupListingId: y.id,
                                  subscriptionType: k ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: a
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: g.id,
                                    skuId: u,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: a
                                })
                              : null;
                    };
                });
            },
            w = B
                ? k
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(r.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              x.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(r.ServerIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              x.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
                          ]
                      })
                : null == v
                  ? void 0
                  : null === (t = v.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === w && (w = void 0);
        let V = () => {
            N.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: g.id,
                sku_id: f.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(Z, {
            appName: g.name,
            title: f.name,
            description: w,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(g.id, O.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, p.X)(g.id, p.B.SKU_EMBED, u);
            },
            iconSrc: j,
            onIconClick: () => {
                G(),
                    N.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: g.id,
                        sku_id: f.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: M.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(r.Button, {
                        color: r.ButtonColors.CUSTOM,
                        onClick: () => {
                            F(),
                                N.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: g.id,
                                    sku_id: f.id,
                                    area: 'view_details'
                                });
                        },
                        className: M.viewDetailsButton,
                        children: x.Z.Messages.STOREFRONT_DETAILS
                    }),
                    B
                        ? null != b
                            ? (0, i.jsx)(A.p, {
                                  appId: g.id,
                                  groupListingId: null == y ? void 0 : y.id,
                                  subscriptionType: k ? 'user' : 'guild',
                                  skuId: f.id,
                                  icon: (0, i.jsx)(r.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: V,
                                  subscriptionPlan: b
                              })
                            : (0, i.jsx)(_.Z, {
                                  size: r.ButtonSizes.MEDIUM,
                                  onClick: F,
                                  children: x.Z.Messages.STOREFRONT_SUBSCRIBE
                              })
                        : (0, i.jsx)(A.Y, {
                              appId: g.id,
                              sku: f,
                              icon: (0, i.jsx)(r.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: V
                          })
                ]
            })
        });
    });
function Z(e) {
    let { appName: t, title: n, description: a, link: s, iconSrc: l, onIconClick: o, onLinkCopy: c, children: u } = e;
    return (0, i.jsxs)('div', {
        className: M.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: M.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: M.headerTitle,
                        children: [
                            (0, i.jsx)(r.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(r.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    f.wS &&
                        (0, i.jsx)(r.Button, {
                            look: r.ButtonLooks.BLANK,
                            size: r.ButtonSizes.ICON,
                            'aria-label': x.Z.Messages.COPY_LINK,
                            onClick: () => {
                                (0, f.JG)(s), (0, r.showToast)((0, r.createToast)(x.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(r.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: M.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: M.contentTextWrapper,
                        children: [
                            null != l &&
                                (0, i.jsx)(r.Button, {
                                    look: r.ButtonLooks.BLANK,
                                    size: r.ButtonSizes.NONE,
                                    onClick: o,
                                    children: (0, i.jsx)('img', {
                                        src: l.href,
                                        alt: '',
                                        className: M.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: M.contentText,
                                style: null == a ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != a &&
                                        (0, i.jsx)(r.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: M.description,
                                            children: a
                                        })
                                ]
                            })
                        ]
                    }),
                    u
                ]
            })
        ]
    });
}
function P(e) {
    return (t) => {
        let { enabled: n } = g.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
