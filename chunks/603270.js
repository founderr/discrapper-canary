n.d(t, {
    F: function () {
        return L;
    },
    P: function () {
        return O;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(241159),
    o = n(558381),
    c = n(812206),
    u = n(307643),
    d = n(171246),
    _ = n(696906),
    E = n(592125),
    I = n(509545),
    m = n(238),
    f = n(55563),
    T = n(551428),
    h = n(626135),
    N = n(572004),
    p = n(601911),
    C = n(504211),
    g = n(381961),
    S = n(970321),
    A = n(680005),
    x = n(981631),
    R = n(272242),
    v = n(689938),
    M = n(738571);
let O = b(function (e) {
        let { appId: t, message: o } = e,
            d = (0, S.R)(t),
            [_, I, f, T, N, g, A] = (0, s.Wu)(
                [c.Z, m.Z, E.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, p.y)(n, 45) : void 0,
                        a = null === (e = E.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), m.Z.getStoreLayout(t), m.Z.getFetchStatus(t), a, i];
                },
                [t, o.channel_id]
            );
        a.useEffect(() => {
            N === m.N.NONE && (0, l.k)(t), null == _ && !I && !f && (0, u.UM)(t);
        }, [_, t, f, I, N]);
        let O = T.subscriptions.length,
            L = T.otps.length,
            b = a.useMemo(
                () =>
                    O > 0 && L > 0
                        ? v.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
                              subCount: O,
                              itemCount: L
                          })
                        : O > 0
                          ? v.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: O })
                          : L > 0
                            ? v.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: L })
                            : v.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS,
                [L, O]
            );
        if (!d || null == _) return null;
        let P = () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: g
                    });
            });
        };
        return (0, i.jsx)(Z, {
            appName: _.name,
            title: v.Z.Messages.STOREFRONT_TITLE.format({ appName: _.name }),
            description: b,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, R.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, C.X)(t, C.B.STORE_EMBED);
            },
            iconSrc: A,
            onIconClick: () => {
                P(),
                    h.default.track(x.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(r.Button, {
                onClick: () => {
                    P(),
                        h.default.track(x.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: M.openStoreButton,
                children: v.Z.Messages.STOREFRONT_OPEN_STORE
            })
        });
    }),
    L = b(function (e) {
        var t, l;
        let { skuId: u, message: m } = e,
            [N, g, O, L, b, P, D, j] = (0, s.Wu)(
                [f.Z, T.Z, I.Z, E.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let a = null === (e = E.Z.getBasicChannel(m.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        s = f.Z.get(u),
                        r = null !== (n = null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == s ? void 0 : s.applicationId,
                        l = null !== (i = null != r ? c.Z.getApplication(r) : void 0) && void 0 !== i ? i : null == s ? void 0 : s.application,
                        o = null != l ? (0, p.y)(l, 45) : void 0,
                        d = I.Z.getForSKU(u);
                    return [s, l, T.Z.getForSKU(u), f.Z.isFetching(u), f.Z.didFetchingSkuFail(u), d.length > 0 ? d[0] : null, a, o];
                },
                [m.channel_id, u]
            ),
            U = (0, S.R)(null !== (l = null == g ? void 0 : g.id) && void 0 !== l ? l : '');
        a.useEffect(() => {
            null == N && !L && !b && (0, o.km)(u);
        }, [b, L, N, u]),
            a.useEffect(() => {
                if ((null == g ? void 0 : g.id) != null) (0, o.oJ)(null == g ? void 0 : g.id);
            }, [null == g ? void 0 : g.id]);
        let y = (0, s.e7)([f.Z], () => (null != u ? f.Z.getParentSKU(u) : void 0), [u]),
            { openModal: B, cannotOpenReason: k } = (0, _.ZP)({
                skuId: u,
                subscribeForGuild: D
            });
        if (!U || null == g || null == N) return null;
        let G = N.type === x.epS.SUBSCRIPTION,
            F = !!G && (0, d.KW)(N.flags),
            w = () => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: g.id,
                            guildId: D
                        });
                });
            },
            V = () => {
                (0, r.openModalLazy)(async () => {
                    let e = G ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = G ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let a = () => {
                            n.onClose(), w();
                        };
                        return null != e && null != y
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: g.id,
                                  skuId: N.id,
                                  guildId: D,
                                  subscriptionType: F ? 'user' : 'guild',
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
            H = G
                ? F
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(r.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              v.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
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
                              v.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
                          ]
                      })
                : null == O
                  ? void 0
                  : null === (t = O.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === H && (H = void 0);
        let Y = () => {
            h.default.track(x.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: g.id,
                sku_id: N.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(Z, {
            appName: g.name,
            title: N.name,
            description: H,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(g.id, R.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, C.X)(g.id, C.B.SKU_EMBED, u);
            },
            iconSrc: j,
            onIconClick: () => {
                w(),
                    h.default.track(x.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: g.id,
                        sku_id: N.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: M.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(r.Button, {
                        color: r.ButtonColors.CUSTOM,
                        onClick: () => {
                            V(),
                                h.default.track(x.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: g.id,
                                    sku_id: N.id,
                                    area: 'view_details'
                                });
                        },
                        className: M.viewDetailsButton,
                        children: v.Z.Messages.STOREFRONT_DETAILS
                    }),
                    G
                        ? null != P
                            ? (0, i.jsx)(A.p, {
                                  onClick: B,
                                  appId: g.id,
                                  subscriptionType: F ? 'user' : 'guild',
                                  skuId: N.id,
                                  icon: (0, i.jsx)(r.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: Y,
                                  subscriptionPlan: P,
                                  cannotOpenReason: k
                              })
                            : (0, i.jsx)(r.Button, {
                                  onClick: V,
                                  children: v.Z.Messages.STOREFRONT_SUBSCRIBE
                              })
                        : (0, i.jsx)(A.Y, {
                              appId: g.id,
                              sku: N,
                              icon: (0, i.jsx)(r.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: Y
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
                    N.wS &&
                        (0, i.jsx)(r.Button, {
                            look: r.ButtonLooks.BLANK,
                            size: r.ButtonSizes.ICON,
                            'aria-label': v.Z.Messages.COPY_LINK,
                            onClick: () => {
                                (0, N.JG)(s), (0, r.showToast)((0, r.createToast)(v.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), c();
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
function b(e) {
    return (t) => {
        let { enabled: n } = g.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
