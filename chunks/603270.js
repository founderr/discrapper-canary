n.d(t, {
    F: function () {
        return P;
    },
    P: function () {
        return D;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(481060),
    u = n(241159),
    c = n(558381),
    d = n(812206),
    _ = n(307643),
    E = n(171246),
    f = n(696906),
    h = n(592125),
    p = n(509545),
    m = n(238),
    I = n(55563),
    T = n(551428),
    g = n(626135),
    S = n(572004),
    A = n(601911),
    v = n(504211),
    N = n(381961),
    O = n(970321),
    R = n(680005),
    C = n(981631),
    y = n(272242),
    L = n(689938),
    b = n(738571);
let D = x(M);
function M(e) {
    let { appId: t, message: r } = e,
        i = (0, O.R)(t),
        [c, E, f, p, I, T, S] = (0, s.Wu)(
            [d.Z, m.Z, h.Z],
            () => {
                var e;
                let n = d.Z.getApplication(t),
                    i = null != n ? (0, A.y)(n, 45) : void 0,
                    a = null === (e = h.Z.getBasicChannel(r.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                return [n, d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t), m.Z.getStoreLayout(t), m.Z.getFetchStatus(t), a, i];
            },
            [t, r.channel_id]
        );
    o.useEffect(() => {
        I === m.N.NONE && (0, u.k)(t), null == c && !E && !f && (0, _.UM)(t);
    }, [c, t, f, E, I]);
    let N = p.subscriptions.length,
        R = p.otps.length,
        D = o.useMemo(
            () =>
                N > 0 && R > 0
                    ? L.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
                          subCount: N,
                          itemCount: R
                      })
                    : N > 0
                      ? L.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: N })
                      : R > 0
                        ? L.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: R })
                        : L.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS,
            [R, N]
        );
    if (!i || null == c) return null;
    let M = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('44797')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, a.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: T
                    });
            });
        },
        P = () => {
            M(),
                g.default.track(C.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                });
        },
        U = () => {
            M(),
                g.default.track(C.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'open_store_button'
                });
        },
        x = () => {
            (0, v.X)(t, v.B.STORE_EMBED);
        };
    return (0, a.jsx)(w, {
        appName: c.name,
        title: L.Z.Messages.STOREFRONT_TITLE.format({ appName: c.name }),
        description: D,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(C.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, y.ApplicationDirectoryProfileSections.STORE)),
        onLinkCopy: x,
        iconSrc: S,
        onIconClick: P,
        children: (0, a.jsx)(l.Button, {
            onClick: U,
            className: b.openStoreButton,
            children: L.Z.Messages.STOREFRONT_OPEN_STORE
        })
    });
}
let P = x(U);
function U(e) {
    var t, r;
    let { skuId: i, message: u } = e,
        [_, m, S, N, D, M, P, U] = (0, s.Wu)(
            [I.Z, T.Z, p.Z, h.Z, d.Z],
            () => {
                var e, t, n, r;
                let a = null === (e = h.Z.getBasicChannel(u.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                    o = I.Z.get(i),
                    s = null !== (n = null == o ? void 0 : null === (t = o.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == o ? void 0 : o.applicationId,
                    l = null !== (r = null != s ? d.Z.getApplication(s) : void 0) && void 0 !== r ? r : null == o ? void 0 : o.application,
                    c = null != l ? (0, A.y)(l, 45) : void 0,
                    _ = p.Z.getForSKU(i);
                return [o, l, T.Z.getForSKU(i), I.Z.isFetching(i), I.Z.didFetchingSkuFail(i), _.length > 0 ? _[0] : null, a, c];
            },
            [u.channel_id, i]
        ),
        x = (0, O.R)(null !== (r = null == m ? void 0 : m.id) && void 0 !== r ? r : '');
    o.useEffect(() => {
        null == _ && !N && !D && (0, c.km)(i);
    }, [D, N, _, i]),
        o.useEffect(() => {
            if ((null == m ? void 0 : m.id) != null) (0, c.oJ)(null == m ? void 0 : m.id);
        }, [null == m ? void 0 : m.id]);
    let G = (0, s.e7)([I.Z], () => (null != i ? I.Z.getParentSKU(i) : void 0), [i]),
        {
            openModal: k,
            canOpenModal: B,
            cannotOpenReason: F
        } = (0, f.Z)({
            skuId: i,
            guildId: P,
            showBenefitsFirst: !1
        });
    if (!x || null == m || null == _) return null;
    let Z = _.type === C.epS.SUBSCRIPTION,
        V = !!Z && (0, E.KW)(_.flags),
        H = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('44797')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, a.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: m.id,
                        guildId: P
                    });
            });
        },
        Y = () => {
            (0, l.openModalLazy)(async () => {
                let e = Z ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = Z ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let r = () => {
                        n.onClose(), H();
                    };
                    return null != e && null != G
                        ? (0, a.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: m.id,
                              skuId: _.id,
                              guildId: P,
                              subscriptionType: V ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: r
                          })
                        : null != t
                          ? (0, a.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: m.id,
                                skuId: i,
                                onClose: n.onClose,
                                onHeaderTitleClick: r
                            })
                          : null;
                };
            });
        },
        j = 12,
        W = Z
            ? V
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(l.UserIcon, {
                              size: 'custom',
                              width: j,
                              height: j
                          }),
                          ' ',
                          L.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(l.ServerIcon, {
                              size: 'custom',
                              width: j,
                              height: j
                          }),
                          ' ',
                          L.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
                      ]
                  })
            : null == S
              ? void 0
              : null === (t = S.description) || void 0 === t
                ? void 0
                : t.trim();
    '' === W && (W = void 0);
    let K = () => {
            H(),
                g.default.track(C.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: m.id,
                    sku_id: _.id,
                    area: 'app_icon'
                });
        },
        z = () => {
            Y(),
                g.default.track(C.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: m.id,
                    sku_id: _.id,
                    area: 'view_details'
                });
        },
        q = () => {
            g.default.track(C.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: m.id,
                sku_id: _.id,
                area: 'purchase_button'
            });
        },
        Q = () => {
            (0, v.X)(m.id, v.B.SKU_EMBED, i);
        };
    return (0, a.jsx)(w, {
        appName: m.name,
        title: _.name,
        description: W,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(C.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m.id, y.ApplicationDirectoryProfileSections.STORE)),
        onLinkCopy: Q,
        iconSrc: U,
        onIconClick: K,
        children: (0, a.jsxs)('div', {
            className: b.skuPurchaseButtons,
            children: [
                (0, a.jsx)(l.Button, {
                    color: l.ButtonColors.CUSTOM,
                    onClick: z,
                    className: b.viewDetailsButton,
                    children: L.Z.Messages.STOREFRONT_DETAILS
                }),
                Z
                    ? null != M
                        ? (0, a.jsx)(R.p, {
                              onClick: k,
                              appId: m.id,
                              subscriptionType: V ? 'user' : 'guild',
                              skuId: _.id,
                              icon: (0, a.jsx)(l.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: q,
                              subscriptionPlan: M,
                              canPurchase: B,
                              cannotPurchaseReason: F
                          })
                        : (0, a.jsx)(l.Button, {
                              onClick: Y,
                              children: L.Z.Messages.STOREFRONT_SUBSCRIBE
                          })
                    : (0, a.jsx)(R.Y, {
                          appId: m.id,
                          sku: _,
                          icon: (0, a.jsx)(l.ShopIcon, {
                              size: 'xs',
                              color: 'currentcolor'
                          }),
                          onHasClicked: q
                      })
            ]
        })
    });
}
function w(e) {
    let { appName: t, title: n, description: r, link: i, iconSrc: o, onIconClick: s, onLinkCopy: u, children: c } = e;
    return (0, a.jsxs)('div', {
        className: b.wrapper,
        children: [
            (0, a.jsxs)('div', {
                className: b.header,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.headerTitle,
                        children: [
                            (0, a.jsx)(l.ShopIcon, { size: 'xxs' }),
                            (0, a.jsx)(l.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    S.wS &&
                        (0, a.jsx)(l.Button, {
                            look: l.ButtonLooks.BLANK,
                            size: l.ButtonSizes.ICON,
                            'aria-label': L.Z.Messages.COPY_LINK,
                            onClick: () => {
                                (0, S.JG)(i), (0, l.showToast)((0, l.createToast)(L.Z.Messages.COPIED_LINK, l.ToastType.SUCCESS)), u();
                            },
                            children: (0, a.jsx)(l.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, a.jsxs)('div', {
                className: b.content,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, a.jsx)(l.Button, {
                                    look: l.ButtonLooks.BLANK,
                                    size: l.ButtonSizes.NONE,
                                    onClick: s,
                                    children: (0, a.jsx)('img', {
                                        src: o.href,
                                        alt: '',
                                        className: b.appIcon
                                    })
                                }),
                            (0, a.jsxs)('div', {
                                className: b.contentText,
                                style: null == r ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != r &&
                                        (0, a.jsx)(l.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: b.description,
                                            children: r
                                        })
                                ]
                            })
                        ]
                    }),
                    c
                ]
            })
        ]
    });
}
function x(e) {
    return (t) => {
        let { enabled: n } = N.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, a.jsx)(e, { ...t }) : null;
    };
}
