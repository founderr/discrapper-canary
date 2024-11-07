n.d(t, {
    F: function () {
        return R;
    },
    P: function () {
        return Z;
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
    u = n(307643),
    d = n(171246),
    m = n(696906),
    h = n(592125),
    f = n(509545),
    p = n(238),
    _ = n(55563),
    g = n(551428),
    E = n(626135),
    C = n(572004),
    I = n(601911),
    x = n(504211),
    N = n(381961),
    v = n(970321),
    T = n(680005),
    S = n(981631),
    A = n(272242),
    b = n(388032),
    j = n(556123);
let Z = P(function (e) {
        let { appId: t, message: s } = e,
            d = (0, v.R)(t),
            [m, f, _, g, C, N, T] = (0, l.Wu)(
                [c.Z, p.Z, h.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, I.y)(n, 45) : void 0,
                        r = null === (e = h.Z.getBasicChannel(s.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), p.Z.getStoreLayout(t), p.Z.getFetchStatus(t), r, i];
                },
                [t, s.channel_id]
            );
        r.useEffect(() => {
            C === p.N.NONE && (0, o.k)(t), null == m && !f && !_ && (0, u.UM)(t);
        }, [m, t, _, f, C]);
        let Z = g.subscriptions.length,
            R = g.otps.length,
            P = r.useMemo(
                () =>
                    Z > 0 && R > 0
                        ? b.intl.formatToPlainString(b.t['jA648/'], {
                              subCount: Z,
                              itemCount: R
                          })
                        : Z > 0
                          ? b.intl.formatToPlainString(b.t.GSfibG, { count: Z })
                          : R > 0
                            ? b.intl.formatToPlainString(b.t.j7Go5O, { count: R })
                            : b.intl.string(b.t.rMA98v),
                [R, Z]
            );
        if (!d || null == m) return null;
        let y = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('87499')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: N
                    });
            });
        };
        return (0, i.jsx)(L, {
            appName: m.name,
            title: b.intl.formatToPlainString(b.t.XDRjs7, { appName: m.name }),
            description: P,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, A.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(t, x.B.STORE_EMBED);
            },
            iconSrc: T,
            onIconClick: () => {
                y(),
                    E.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(a.Button, {
                onClick: () => {
                    y(),
                        E.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: j.openStoreButton,
                children: b.intl.string(b.t.kRvlKC)
            })
        });
    }),
    R = P(function (e) {
        var t, o;
        let { skuId: u, message: p } = e,
            [C, N, Z, R, P, y, O, M] = (0, l.Wu)(
                [_.Z, g.Z, f.Z, h.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let r = null === (e = h.Z.getBasicChannel(p.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        l = _.Z.get(u),
                        a = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
                        o = null !== (i = null != a ? c.Z.getApplication(a) : void 0) && void 0 !== i ? i : null == l ? void 0 : l.application,
                        s = null != o ? (0, I.y)(o, 45) : void 0,
                        d = f.Z.getForSKU(u);
                    return [l, o, g.Z.getForSKU(u), _.Z.isFetching(u), _.Z.didFetchingSkuFail(u), d.length > 0 ? d[0] : null, r, s];
                },
                [p.channel_id, u]
            ),
            k = (0, v.R)(null !== (o = null == N ? void 0 : N.id) && void 0 !== o ? o : '');
        r.useEffect(() => {
            null == C && !R && !P && (0, s.km)(u);
        }, [P, R, C, u]),
            r.useEffect(() => {
                if ((null == N ? void 0 : N.id) != null) (0, s.oJ)(null == N ? void 0 : N.id);
            }, [null == N ? void 0 : N.id]);
        let D = (0, l.e7)([_.Z], () => (null != u ? _.Z.getParentSKU(u) : void 0), [u]),
            { openModal: B, cannotOpenReason: U } = (0, m.ZP)({
                skuId: u,
                subscribeForGuild: O
            });
        if (!k || null == N || null == C) return null;
        let w = C.type === S.epS.SUBSCRIPTION,
            F = !!w && (0, d.KW)(C.flags),
            G = () => {
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('87499')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: N.id,
                            guildId: O
                        });
                });
            },
            V = () => {
                (0, a.openModalLazy)(async () => {
                    let e = w ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = w ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let r = () => {
                            n.onClose(), G();
                        };
                        return null != e && null != D
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: N.id,
                                  skuId: C.id,
                                  guildId: O,
                                  subscriptionType: F ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: r
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: N.id,
                                    skuId: u,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: r
                                })
                              : null;
                    };
                });
            },
            H = w
                ? F
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              b.intl.string(b.t.wnifjI)
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
                              b.intl.string(b.t.NRC3am)
                          ]
                      })
                : null == Z
                  ? void 0
                  : null === (t = Z.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === H && (H = void 0);
        let z = () => {
            E.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: N.id,
                sku_id: C.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(L, {
            appName: N.name,
            title: C.name,
            description: H,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(N.id, A.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(N.id, x.B.SKU_EMBED, u);
            },
            iconSrc: M,
            onIconClick: () => {
                G(),
                    E.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: N.id,
                        sku_id: C.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: j.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(a.Button, {
                        color: a.ButtonColors.CUSTOM,
                        onClick: () => {
                            V(),
                                E.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: N.id,
                                    sku_id: C.id,
                                    area: 'view_details'
                                });
                        },
                        className: j.viewDetailsButton,
                        children: b.intl.string(b.t.DXYfjI)
                    }),
                    w
                        ? null != y
                            ? (0, i.jsx)(T.p, {
                                  onClick: B,
                                  appId: N.id,
                                  subscriptionType: F ? 'user' : 'guild',
                                  skuId: C.id,
                                  icon: (0, i.jsx)(a.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: z,
                                  subscriptionPlan: y,
                                  cannotOpenReason: U
                              })
                            : (0, i.jsx)(a.Button, {
                                  onClick: V,
                                  children: b.intl.string(b.t.uuzaAA)
                              })
                        : (0, i.jsx)(T.Y, {
                              appId: N.id,
                              sku: C,
                              icon: (0, i.jsx)(a.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: z
                          })
                ]
            })
        });
    });
function L(e) {
    let { appName: t, title: n, description: r, link: l, iconSrc: o, onIconClick: s, onLinkCopy: c, children: u } = e;
    return (0, i.jsxs)('div', {
        className: j.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.headerTitle,
                        children: [
                            (0, i.jsx)(a.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(a.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    C.wS &&
                        (0, i.jsx)(a.Button, {
                            look: a.ButtonLooks.BLANK,
                            size: a.ButtonSizes.ICON,
                            'aria-label': b.intl.string(b.t.WqhZsr),
                            onClick: () => {
                                (0, C.JG)(l), (0, a.showToast)((0, a.createToast)(b.intl.string(b.t['L/PwZW']), a.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(a.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: j.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, i.jsx)(a.Button, {
                                    look: a.ButtonLooks.BLANK,
                                    size: a.ButtonSizes.NONE,
                                    onClick: s,
                                    children: (0, i.jsx)('img', {
                                        src: o.href,
                                        alt: '',
                                        className: j.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: j.contentText,
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
                                            className: j.description,
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
function P(e) {
    return (t) => {
        let { enabled: n } = N.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
