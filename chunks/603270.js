n.d(t, {
    F: function () {
        return M;
    },
    P: function () {
        return L;
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
    f = n(592125),
    h = n(509545),
    p = n(238),
    m = n(55563),
    I = n(551428),
    T = n(626135),
    g = n(572004),
    S = n(601911),
    A = n(504211),
    v = n(381961),
    N = n(970321),
    O = n(680005),
    R = n(981631),
    C = n(272242),
    y = n(689938),
    b = n(738571);
let L = w(D);
function D(e) {
    let { appId: t, message: r } = e,
        i = (0, N.R)(t),
        [c, E, h, m, I, g, v] = (0, s.Wu)(
            [d.Z, p.Z, f.Z],
            () => {
                var e;
                let n = d.Z.getApplication(t),
                    i = null != n ? (0, S.y)(n, 45) : void 0,
                    a = null === (e = f.Z.getBasicChannel(r.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                return [n, d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t), p.Z.getStoreLayout(t), p.Z.getFetchStatus(t), a, i];
            },
            [t, r.channel_id]
        );
    o.useEffect(() => {
        I === p.N.NONE && (0, u.k)(t), null == c && !E && !h && (0, _.UM)(t);
    }, [c, t, h, E, I]);
    let O = m.subscriptions.length,
        L = m.otps.length,
        D = o.useMemo(
            () =>
                O > 0 && L > 0
                    ? y.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
                          subCount: O,
                          itemCount: L
                      })
                    : O > 0
                      ? y.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: O })
                      : L > 0
                        ? y.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: L })
                        : y.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS,
            [L, O]
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
                        onlySubscribeServerSubForGuildId: g
                    });
            });
        },
        P = () => {
            M(),
                T.default.track(R.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                });
        },
        w = () => {
            M(),
                T.default.track(R.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'open_store_button'
                });
        },
        x = () => {
            (0, A.X)(t, A.B.STORE_EMBED);
        };
    return (0, a.jsx)(U, {
        appName: c.name,
        title: y.Z.Messages.STOREFRONT_TITLE.format({ appName: c.name }),
        description: D,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, C.ApplicationDirectoryProfileSections.STORE)),
        onLinkCopy: x,
        iconSrc: v,
        onIconClick: P,
        children: (0, a.jsx)(l.Button, {
            onClick: w,
            className: b.openStoreButton,
            children: y.Z.Messages.STOREFRONT_OPEN_STORE
        })
    });
}
let M = w(P);
function P(e) {
    var t, r;
    let { skuId: i, message: u } = e,
        [_, p, g, v, L, D, M, P] = (0, s.Wu)(
            [m.Z, I.Z, h.Z, f.Z, d.Z],
            () => {
                var e, t, n, r;
                let a = null === (e = f.Z.getBasicChannel(u.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                    o = m.Z.get(i),
                    s = null !== (n = null == o ? void 0 : null === (t = o.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == o ? void 0 : o.applicationId,
                    l = null !== (r = null != s ? d.Z.getApplication(s) : void 0) && void 0 !== r ? r : null == o ? void 0 : o.application,
                    c = null != l ? (0, S.y)(l, 45) : void 0,
                    _ = h.Z.getForSKU(i);
                return [o, l, I.Z.getForSKU(i), m.Z.isFetching(i), m.Z.didFetchingSkuFail(i), _.length > 0 ? _[0] : null, a, c];
            },
            [u.channel_id, i]
        ),
        w = (0, N.R)(null !== (r = null == p ? void 0 : p.id) && void 0 !== r ? r : '');
    o.useEffect(() => {
        null == _ && !v && !L && (0, c.km)(i);
    }, [L, v, _, i]),
        o.useEffect(() => {
            if ((null == p ? void 0 : p.id) != null) (0, c.oJ)(null == p ? void 0 : p.id);
        }, [null == p ? void 0 : p.id]);
    let x = (0, s.e7)([m.Z], () => (null != i ? m.Z.getParentSKU(i) : void 0), [i]);
    if (!w || null == p || null == _) return null;
    let G = _.type === R.epS.SUBSCRIPTION,
        k = !!G && (0, E.KW)(_.flags),
        B = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('44797')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, a.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: p.id,
                        onlySubscribeServerSubForGuildId: M
                    });
            });
        },
        F = () => {
            (0, l.openModalLazy)(async () => {
                let e = G ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = G ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let r = () => {
                        n.onClose(), B();
                    };
                    return null != e && null != x
                        ? (0, a.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: p.id,
                              skuId: _.id,
                              groupListingId: x.id,
                              subscriptionType: k ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: r
                          })
                        : null != t
                          ? (0, a.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: p.id,
                                skuId: i,
                                onClose: n.onClose,
                                onHeaderTitleClick: r
                            })
                          : null;
                };
            });
        },
        Z = 12,
        V = G
            ? k
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(l.UserIcon, {
                              size: 'custom',
                              width: Z,
                              height: Z
                          }),
                          ' ',
                          y.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(l.ServerIcon, {
                              size: 'custom',
                              width: Z,
                              height: Z
                          }),
                          ' ',
                          y.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
                      ]
                  })
            : null == g
              ? void 0
              : null === (t = g.description) || void 0 === t
                ? void 0
                : t.trim();
    '' === V && (V = void 0);
    let H = () => {
            B(),
                T.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: p.id,
                    sku_id: _.id,
                    area: 'app_icon'
                });
        },
        Y = () => {
            F(),
                T.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: p.id,
                    sku_id: _.id,
                    area: 'view_details'
                });
        },
        j = () => {
            T.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: p.id,
                sku_id: _.id,
                area: 'purchase_button'
            });
        },
        W = () => {
            (0, A.X)(p.id, A.B.SKU_EMBED, i);
        };
    return (0, a.jsx)(U, {
        appName: p.name,
        title: _.name,
        description: V,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p.id, C.ApplicationDirectoryProfileSections.STORE)),
        onLinkCopy: W,
        iconSrc: P,
        onIconClick: H,
        children: (0, a.jsxs)('div', {
            className: b.skuPurchaseButtons,
            children: [
                (0, a.jsx)(l.Button, {
                    color: l.ButtonColors.CUSTOM,
                    onClick: Y,
                    className: b.viewDetailsButton,
                    children: y.Z.Messages.STOREFRONT_DETAILS
                }),
                G
                    ? null != D
                        ? (0, a.jsx)(O.p, {
                              appId: p.id,
                              groupListingId: null == x ? void 0 : x.id,
                              subscriptionType: k ? 'user' : 'guild',
                              skuId: _.id,
                              icon: (0, a.jsx)(l.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: j,
                              subscriptionPlan: D
                          })
                        : (0, a.jsx)(l.Button, {
                              onClick: F,
                              children: y.Z.Messages.STOREFRONT_SUBSCRIBE
                          })
                    : (0, a.jsx)(O.Y, {
                          appId: p.id,
                          sku: _,
                          icon: (0, a.jsx)(l.ShopIcon, {
                              size: 'xs',
                              color: 'currentcolor'
                          }),
                          onHasClicked: j
                      })
            ]
        })
    });
}
function U(e) {
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
                    g.wS &&
                        (0, a.jsx)(l.Button, {
                            look: l.ButtonLooks.BLANK,
                            size: l.ButtonSizes.ICON,
                            'aria-label': y.Z.Messages.COPY_LINK,
                            onClick: () => {
                                (0, g.JG)(i), (0, l.showToast)((0, l.createToast)(y.Z.Messages.COPIED_LINK, l.ToastType.SUCCESS)), u();
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
function w(e) {
    return (t) => {
        let { enabled: n } = v.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, a.jsx)(e, { ...t }) : null;
    };
}
