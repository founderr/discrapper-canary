n.d(t, {
    F: function () {
        return L;
    },
    P: function () {
        return P;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(241159),
    s = n(558381),
    c = n(812206),
    u = n(352057),
    d = n(307643),
    m = n(171246),
    h = n(263519),
    f = n(592125),
    p = n(509545),
    _ = n(238),
    g = n(55563),
    E = n(551428),
    C = n(626135),
    I = n(572004),
    x = n(601911),
    N = n(504211),
    v = n(381961),
    T = n(970321),
    S = n(680005),
    A = n(981631),
    b = n(272242),
    j = n(979007),
    R = n(388032),
    Z = n(94913);
let P = O(function (e) {
        let { appId: t, message: s } = e,
            m = (0, T.R)(t),
            [h, p, g, E, I, v, S] = (0, l.Wu)(
                [c.Z, _.Z, f.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, x.y)(n, 45) : void 0,
                        r = null === (e = f.Z.getBasicChannel(s.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), _.Z.getStoreLayout(t), _.Z.getFetchStatus(t), r, i];
                },
                [t, s.channel_id]
            );
        r.useEffect(() => {
            I === _.N.NONE && (0, o.k)(t), null == h && !p && !g && (0, d.UM)(t);
        }, [h, t, g, p, I]);
        let P = (0, u.h$)({ location: 'AppStorefrontMessageEmbed' }),
            L = E.subscriptions.length,
            O = E.otps.length,
            M = r.useMemo(
                () =>
                    L > 0 && O > 0
                        ? R.intl.formatToPlainString(R.t['jA648/'], {
                              subCount: L,
                              itemCount: O
                          })
                        : L > 0
                          ? R.intl.formatToPlainString(R.t.GSfibG, { count: L })
                          : O > 0
                            ? R.intl.formatToPlainString(R.t.j7Go5O, { count: O })
                            : R.intl.string(R.t.rMA98v),
                [O, L]
            );
        if (!m || null == h) return null;
        let k = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('7657')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: v
                    });
            });
        };
        return (0, i.jsx)(y, {
            appName: h.name,
            title: R.intl.formatToPlainString(R.t.XDRjs7, { appName: h.name }),
            description: M,
            link: ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(P ? A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(h.id, j.GlobalDiscoveryAppsSections.STORE) : A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(h.id, b.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, N.X)(t, N.B.STORE_EMBED);
            },
            iconSrc: S,
            onIconClick: () => {
                k(),
                    C.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(a.Button, {
                onClick: () => {
                    k(),
                        C.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: Z.openStoreButton,
                children: R.intl.string(R.t.kRvlKC)
            })
        });
    }),
    L = O(function (e) {
        var t, o;
        let { skuId: d, message: _ } = e,
            [I, v, P, L, O, M, k, D] = (0, l.Wu)(
                [g.Z, E.Z, p.Z, f.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let r = null === (e = f.Z.getBasicChannel(_.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        l = g.Z.get(d),
                        a = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
                        o = null !== (i = null != a ? c.Z.getApplication(a) : void 0) && void 0 !== i ? i : null == l ? void 0 : l.application,
                        s = null != o ? (0, x.y)(o, 45) : void 0,
                        u = p.Z.getForSKU(d);
                    return [l, o, E.Z.getForSKU(d), g.Z.isFetching(d), g.Z.didFetchingSkuFail(d), u.length > 0 ? u[0] : null, r, s];
                },
                [_.channel_id, d]
            ),
            B = (0, T.R)(null !== (o = null == v ? void 0 : v.id) && void 0 !== o ? o : '');
        r.useEffect(() => {
            null == I && !L && !O && (0, s.km)(d);
        }, [O, L, I, d]),
            r.useEffect(() => {
                if ((null == v ? void 0 : v.id) != null) (0, s.oJ)(null == v ? void 0 : v.id);
            }, [null == v ? void 0 : v.id]);
        let U = (0, l.e7)([g.Z], () => (null != d ? g.Z.getParentSKU(d) : void 0), [d]),
            { openModal: w, subscriptionPurchaseButtonState: F } = (0, h.Z)({
                skuId: d,
                initialSubscribeForGuild: k
            }),
            G = (0, u.h$)({ location: 'AppStorefrontSKUMessageEmbed' });
        if (!B || null == v || null == I) return null;
        let V = I.type === A.epS.SUBSCRIPTION,
            H = !!V && (0, m.KW)(I.flags),
            z = () => {
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('7657')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: v.id,
                            guildId: k
                        });
                });
            },
            W = () => {
                (0, a.openModalLazy)(async () => {
                    let e = V ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = V ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let r = () => {
                            n.onClose(), z();
                        };
                        return null != e && null != U
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: v.id,
                                  skuId: I.id,
                                  guildId: k,
                                  subscriptionType: H ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: r
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: v.id,
                                    skuId: d,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: r
                                })
                              : null;
                    };
                });
            },
            K = V
                ? H
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              R.intl.string(R.t.wnifjI)
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.ServerIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              R.intl.string(R.t.NRC3am)
                          ]
                      })
                : null == P
                  ? void 0
                  : null === (t = P.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === K && (K = void 0);
        let Y = () => {
            C.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: v.id,
                sku_id: I.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(y, {
            appName: v.name,
            title: I.name,
            description: K,
            link: ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(G ? A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v.id, j.GlobalDiscoveryAppsSections.STORE) : A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(v.id, b.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, N.X)(v.id, N.B.SKU_EMBED, d);
            },
            iconSrc: D,
            onIconClick: () => {
                z(),
                    C.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: v.id,
                        sku_id: I.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: Z.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(a.Button, {
                        color: a.ButtonColors.CUSTOM,
                        onClick: () => {
                            W(),
                                C.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: v.id,
                                    sku_id: I.id,
                                    area: 'view_details'
                                });
                        },
                        className: Z.viewDetailsButton,
                        children: R.intl.string(R.t.DXYfjI)
                    }),
                    V
                        ? null != M
                            ? (0, i.jsx)(S.pV, {
                                  onClick: w,
                                  appId: v.id,
                                  subscriptionType: H ? 'user' : 'guild',
                                  skuId: I.id,
                                  icon: (0, i.jsx)(a.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: Y,
                                  subscriptionPlan: M,
                                  state: F
                              })
                            : (0, i.jsx)(a.Button, {
                                  onClick: W,
                                  children: R.intl.string(R.t.uuzaAA)
                              })
                        : (0, i.jsx)(S.YG, {
                              appId: v.id,
                              sku: I,
                              icon: (0, i.jsx)(a.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: Y
                          })
                ]
            })
        });
    });
function y(e) {
    let { appName: t, title: n, description: r, link: l, iconSrc: o, onIconClick: s, onLinkCopy: c, children: u } = e;
    return (0, i.jsxs)('div', {
        className: Z.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: Z.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.headerTitle,
                        children: [
                            (0, i.jsx)(a.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(a.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    I.wS &&
                        (0, i.jsx)(a.Button, {
                            look: a.ButtonLooks.BLANK,
                            size: a.ButtonSizes.ICON,
                            'aria-label': R.intl.string(R.t.WqhZsr),
                            onClick: () => {
                                (0, I.JG)(l), (0, a.showToast)((0, a.createToast)(R.intl.string(R.t['L/PwZW']), a.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(a.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: Z.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, i.jsx)(a.Button, {
                                    look: a.ButtonLooks.BLANK,
                                    size: a.ButtonSizes.NONE,
                                    onClick: s,
                                    children: (0, i.jsx)('img', {
                                        src: o.href,
                                        alt: '',
                                        className: Z.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: Z.contentText,
                                style: null == r ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != r &&
                                        (0, i.jsx)(a.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: Z.description,
                                            children: r
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
function O(e) {
    return (t) => {
        let { enabled: n } = v.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
