n.d(t, {
    F: function () {
        return v;
    },
    P: function () {
        return M;
    }
}),
    n(47120),
    n(789020);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(481060),
    l = n(241159),
    o = n(558381),
    c = n(812206),
    u = n(307643),
    d = n(171246),
    _ = n(592125),
    E = n(509545),
    I = n(238),
    m = n(55563),
    T = n(551428),
    h = n(626135),
    N = n(572004),
    f = n(601911),
    C = n(504211),
    p = n(381961),
    g = n(970321),
    S = n(680005),
    A = n(981631),
    R = n(272242),
    O = n(689938),
    x = n(738571);
let M = Z(function (e) {
        let { appId: t, message: o } = e,
            d = (0, g.R)(t),
            [E, m, T, N, p, S, M] = (0, a.Wu)(
                [c.Z, I.Z, _.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, f.y)(n, 45) : void 0,
                        s = null === (e = _.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), I.Z.getStoreLayout(t), I.Z.getFetchStatus(t), s, i];
                },
                [t, o.channel_id]
            );
        s.useEffect(() => {
            p === I.N.NONE && (0, l.k)(t), null == E && !m && !T && (0, u.UM)(t);
        }, [E, t, T, m, p]);
        let v = N.subscriptions.length,
            Z = N.otps.length,
            P = s.useMemo(
                () =>
                    v > 0 && Z > 0
                        ? O.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
                              subCount: v,
                              itemCount: Z
                          })
                        : v > 0
                          ? O.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: v })
                          : Z > 0
                            ? O.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: Z })
                            : O.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS,
                [Z, v]
            );
        if (!d || null == E) return null;
        let D = () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('44797')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        onlySubscribeServerSubForGuildId: S
                    });
            });
        };
        return (0, i.jsx)(L, {
            appName: E.name,
            title: O.Z.Messages.STOREFRONT_TITLE.format({ appName: E.name }),
            description: P,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, R.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, C.X)(t, C.B.STORE_EMBED);
            },
            iconSrc: M,
            onIconClick: () => {
                D(),
                    h.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(r.Button, {
                onClick: () => {
                    D(),
                        h.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: x.openStoreButton,
                children: O.Z.Messages.STOREFRONT_OPEN_STORE
            })
        });
    }),
    v = Z(function (e) {
        var t, l;
        let { skuId: u, message: I } = e,
            [N, p, M, v, Z, P, D, b] = (0, a.Wu)(
                [m.Z, T.Z, E.Z, _.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let s = null === (e = _.Z.getBasicChannel(I.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        a = m.Z.get(u),
                        r = null !== (n = null == a ? void 0 : null === (t = a.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == a ? void 0 : a.applicationId,
                        l = null !== (i = null != r ? c.Z.getApplication(r) : void 0) && void 0 !== i ? i : null == a ? void 0 : a.application,
                        o = null != l ? (0, f.y)(l, 45) : void 0,
                        d = E.Z.getForSKU(u);
                    return [a, l, T.Z.getForSKU(u), m.Z.isFetching(u), m.Z.didFetchingSkuFail(u), d.length > 0 ? d[0] : null, s, o];
                },
                [I.channel_id, u]
            ),
            j = (0, g.R)(null !== (l = null == p ? void 0 : p.id) && void 0 !== l ? l : '');
        s.useEffect(() => {
            null == N && !v && !Z && (0, o.km)(u);
        }, [Z, v, N, u]),
            s.useEffect(() => {
                if ((null == p ? void 0 : p.id) != null) (0, o.oJ)(null == p ? void 0 : p.id);
            }, [null == p ? void 0 : p.id]);
        let U = (0, a.e7)([m.Z], () => (null != u ? m.Z.getParentSKU(u) : void 0), [u]);
        if (!j || null == p || null == N) return null;
        let y = N.type === A.epS.SUBSCRIPTION,
            B = !!y && (0, d.KW)(N.flags),
            k = () => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('44797')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: p.id,
                            onlySubscribeServerSubForGuildId: D
                        });
                });
            },
            F = () => {
                (0, r.openModalLazy)(async () => {
                    let e = y ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = y ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let s = () => {
                            n.onClose(), k();
                        };
                        return null != e && null != U
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: p.id,
                                  skuId: N.id,
                                  groupListingId: U.id,
                                  subscriptionType: B ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: s
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: p.id,
                                    skuId: u,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: s
                                })
                              : null;
                    };
                });
            },
            G = y
                ? B
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(r.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              O.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
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
                              O.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
                          ]
                      })
                : null == M
                  ? void 0
                  : null === (t = M.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === G && (G = void 0);
        let w = () => {
            h.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: p.id,
                sku_id: N.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(L, {
            appName: p.name,
            title: N.name,
            description: G,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p.id, R.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, C.X)(p.id, C.B.SKU_EMBED, u);
            },
            iconSrc: b,
            onIconClick: () => {
                k(),
                    h.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: p.id,
                        sku_id: N.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: x.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(r.Button, {
                        color: r.ButtonColors.CUSTOM,
                        onClick: () => {
                            F(),
                                h.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: p.id,
                                    sku_id: N.id,
                                    area: 'view_details'
                                });
                        },
                        className: x.viewDetailsButton,
                        children: O.Z.Messages.STOREFRONT_DETAILS
                    }),
                    y
                        ? null != P
                            ? (0, i.jsx)(S.p, {
                                  appId: p.id,
                                  groupListingId: null == U ? void 0 : U.id,
                                  subscriptionType: B ? 'user' : 'guild',
                                  skuId: N.id,
                                  icon: (0, i.jsx)(r.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: w,
                                  subscriptionPlan: P
                              })
                            : (0, i.jsx)(r.Button, {
                                  onClick: F,
                                  children: O.Z.Messages.STOREFRONT_SUBSCRIBE
                              })
                        : (0, i.jsx)(S.Y, {
                              appId: p.id,
                              sku: N,
                              icon: (0, i.jsx)(r.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: w
                          })
                ]
            })
        });
    });
function L(e) {
    let { appName: t, title: n, description: s, link: a, iconSrc: l, onIconClick: o, onLinkCopy: c, children: u } = e;
    return (0, i.jsxs)('div', {
        className: x.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: x.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: x.headerTitle,
                        children: [
                            (0, i.jsx)(r.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(r.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    N.wS &&
                        (0, i.jsx)(r.Button, {
                            look: r.ButtonLooks.BLANK,
                            size: r.ButtonSizes.ICON,
                            'aria-label': O.Z.Messages.COPY_LINK,
                            onClick: () => {
                                (0, N.JG)(a), (0, r.showToast)((0, r.createToast)(O.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(r.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: x.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: x.contentTextWrapper,
                        children: [
                            null != l &&
                                (0, i.jsx)(r.Button, {
                                    look: r.ButtonLooks.BLANK,
                                    size: r.ButtonSizes.NONE,
                                    onClick: o,
                                    children: (0, i.jsx)('img', {
                                        src: l.href,
                                        alt: '',
                                        className: x.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: x.contentText,
                                style: null == s ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != s &&
                                        (0, i.jsx)(r.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: x.description,
                                            children: s
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
function Z(e) {
    return (t) => {
        let { enabled: n } = p.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
