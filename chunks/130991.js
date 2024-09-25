t.d(s, {
    Z: function () {
        return L;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(561537),
    r = t(269210),
    o = t(442837),
    l = t(481060),
    c = t(355467),
    d = t(100527),
    _ = t(906732),
    u = t(601911),
    E = t(283836),
    T = t(812206),
    S = t(565138),
    I = t(374649),
    N = t(908951),
    A = t(255078),
    m = t(430824),
    C = t(509545),
    g = t(580130),
    h = t(55563),
    O = t(551428),
    p = t(937615),
    R = t(171246),
    x = t(889989),
    f = t(547283),
    M = t(981631),
    D = t(689938),
    P = t(73282);
function L(e) {
    var s, t, a, r;
    let { subscription: c, navigateToSwitchPlan: E } = e,
        {
            app: A,
            appIcon: x,
            plan: f,
            storeListing: L,
            price: U,
            isGuildSubscription: G,
            subscriptionForGuild: F,
            sku: y
        } = (0, o.cj)(
            [g.Z, O.Z, C.Z, T.Z, m.Z, h.Z],
            () => {
                let e = g.Z.getForSubscription(c.id),
                    s = null != e && e.size > 0 ? Array.from(e)[0] : null,
                    t = null == s ? void 0 : s.applicationId,
                    n = c.planId,
                    a = C.Z.get(n),
                    i = null != t ? T.Z.getApplication(t) : null,
                    r = null != i ? (0, u.y)(i, 100) : null,
                    o = null != a ? O.Z.getForSKU(a.skuId) : null,
                    l = null != a ? (0, p.og)((0, p.T4)(a.price, a.currency), a.interval, a.intervalCount) : null,
                    d = null != o && (0, R.KK)(o.skuFlags),
                    _ = d && null != s ? m.Z.getGuild(s.guildId) : void 0,
                    E = null != o ? h.Z.get(o.skuId) : null;
                return {
                    app: i,
                    appIcon: r,
                    isGuildSubscription: d,
                    plan: a,
                    price: l,
                    sku: null != E ? E : void 0,
                    storeListing: o,
                    subscriptionForGuild: _
                };
            },
            [c]
        ),
        V = null !== (s = null == y ? void 0 : y.deleted) && void 0 !== s && s,
        Y = null != y && (0, R.OL)(y),
        w = (0, R.Jf)(c, y),
        k = c.status === M.O0b.PAST_DUE,
        { analyticsLocations: H } = (0, _.ZP)(),
        [W] = (0, I.ED)({
            subscriptionId: c.id,
            renewal: !0,
            analyticsLocations: H,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        K = Z(c.currentPeriodEnd);
    return (0, n.jsxs)(i.l, {
        header: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: P.headerContent,
                    children: [
                        null != x &&
                            (0, n.jsx)(l.Image, {
                                src: x.href,
                                imageClassName: P.appIcon,
                                width: 40,
                                height: 40
                            }),
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: null !== (t = null == A ? void 0 : A.name) && void 0 !== t ? t : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: null !== (a = null == f ? void 0 : f.name) && void 0 !== a ? a : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PLAN_NAME_UNAVAILABLE
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: P.headerButtons,
                    children:
                        null != A &&
                        null != L &&
                        null != y &&
                        (0, n.jsx)(j, {
                            subscription: c,
                            app: A,
                            sku: y,
                            storeListing: L,
                            isCancelled: w,
                            navigateToSwitchPlan: E
                        })
                })
            ]
        }),
        children: [
            w &&
                (0, n.jsx)(v, {
                    type: 'warning',
                    title: Y ? D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_APP_CANCELLED.format({ subscriptionPeriodEnd: K }) : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_USER_CANCELLED.format({ subscriptionPeriodEnd: K })
                }),
            k &&
                (0, n.jsx)(v, {
                    type: 'danger',
                    title: D.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING
                }),
            (0, n.jsxs)('div', {
                className: P.details,
                children: [
                    (0, n.jsx)(b, {
                        title: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_TYPE,
                        content: G
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsxs)('span', {
                                          className: P.subscriptionTypeRow,
                                          children: [(0, n.jsx)(l.ServerIcon, { size: 'xs' }), D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SERVER_SUBSCRIPTION]
                                      }),
                                      null != F &&
                                          (0, n.jsxs)('span', {
                                              className: P.guildSubscriptionContentRow,
                                              children: [
                                                  (0, n.jsx)(l.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_USED_IN.format({ guildName: F.name })
                                                  }),
                                                  (0, n.jsx)(S.Z, {
                                                      guild: F,
                                                      size: S.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, n.jsxs)('span', {
                                  className: P.subscriptionTypeRow,
                                  children: [(0, n.jsx)(l.UserIcon, { size: 'xs' }), D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION]
                              })
                    }),
                    null != U &&
                        (0, n.jsx)(b, {
                            title: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PRICE,
                            content: U
                        }),
                    (0, n.jsx)(b, {
                        title: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_START_DATE,
                        content: Z(null !== (r = c.createdAt) && void 0 !== r ? r : c.currentPeriodStart)
                    }),
                    (0, n.jsx)(b, {
                        title: w ? D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_END_DATE : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RENEWAL_DATE,
                        content: K
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: P.payment,
                children: [
                    (0, n.jsx)(l.FormTitle, { children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL }),
                    null != W &&
                        (0, n.jsx)(N.Z, {
                            subscription: c,
                            currentInvoicePreview: W,
                            disabled: V || w
                        })
                ]
            }),
            null != A &&
                (null == L ? void 0 : L.benefits) != null &&
                (0, n.jsx)(B, {
                    appId: A.id,
                    listingBenefits: L.benefits
                })
        ]
    });
}
function b(e) {
    let { title: s, content: t } = e;
    return (0, n.jsxs)('div', {
        className: P.row,
        children: [
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: s
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: P.rowContent,
                children: t
            })
        ]
    });
}
function Z(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function v(e) {
    let { type: s, title: t } = e;
    return (0, n.jsx)(l.HelpMessage, {
        messageType: 'warning' === s ? l.HelpMessageTypes.WARNING : l.HelpMessageTypes.ERROR,
        children: (0, n.jsx)(l.Text, {
            variant: 'text-sm/normal',
            children: t
        })
    });
}
function j(e) {
    let { app: s, storeListing: i, sku: r, subscription: d, isCancelled: u, guild: T, navigateToSwitchPlan: S } = e,
        I = (0, R.OL)(r),
        { analyticsLocations: N } = (0, _.ZP)(),
        [m, C] = a.useState(!1),
        g = (0, E.q)(s.id),
        O = (0, o.e7)([h.Z], () => h.Z.getParentSKU(i.skuId), [i.skuId]),
        p = a.useMemo(() => (null == O ? [] : (0, f.$)(i.id, O, g)), [i.id, g, O]),
        x = 0 !== p.length,
        M = async () => {
            try {
                C(!0);
                let { subscription: e } = await (0, c.pl)(d, N);
                if (null == e) return;
                (0, l.openModalLazy)(async () => {
                    let { default: s } = await t.e('18879').then(t.bind(t, 535278));
                    return (t) =>
                        (0, n.jsx)(s, {
                            ...t,
                            storeListing: i,
                            subscription: A.Z.createFromServer(e)
                        });
                });
            } finally {
                C(!1);
            }
        };
    return (0, n.jsxs)('div', {
        className: P.managementBtns,
        children: [
            I
                ? null
                : u
                  ? (0, n.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        size: l.Button.Sizes.SMALL,
                        onClick: M,
                        submitting: m,
                        children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RESUME_PLAN
                    })
                  : (0, n.jsx)(l.Button, {
                        color: l.Button.Colors.CUSTOM,
                        size: l.Button.Sizes.SMALL,
                        className: P.secondaryBtn,
                        onClick: () => {
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await t.e('6284').then(t.bind(t, 257514));
                                return (t) =>
                                    (0, n.jsx)(e, {
                                        ...t,
                                        application: s,
                                        storeListing: i,
                                        subscription: d,
                                        guild: T
                                    });
                            });
                        },
                        children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCEL_PLAN
                    }),
            x &&
                null != O &&
                (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.BRAND,
                    size: l.Button.Sizes.SMALL,
                    onClick: () => {
                        S({
                            alternativeSubscriptions: p,
                            app: s,
                            bundleSku: O,
                            currentSubscription: i
                        });
                    },
                    children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SWITCH_PLAN
                })
        ]
    });
}
function B(e) {
    let { appId: s, listingBenefits: t } = e,
        [i, o] = a.useReducer((e) => !e, !1),
        c = i ? l.ChevronSmallUpIcon : l.ChevronSmallDownIcon;
    return (0, n.jsxs)('div', {
        className: P.benefits,
        children: [
            (0, n.jsxs)('div', {
                className: P.benefitsHeader,
                children: [
                    i &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_BENEFITS
                        }),
                    (0, n.jsxs)(l.Clickable, {
                        className: P.benefitsBtn,
                        onClick: o,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'heading-sm/semibold',
                                tag: 'div',
                                color: 'currentColor',
                                children: i ? D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_HIDE_BENEFITS : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SHOW_BENEFITS
                            }),
                            (0, n.jsx)(c, {
                                size: 'sm',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            }),
            i
                ? t.map((e) => {
                      let { id: t, name: a, description: i, icon: o } = e;
                      return (0, n.jsx)(
                          r.G,
                          {
                              name: a,
                              icon: (0, x.n)(s, o),
                              description: i
                          },
                          t
                      );
                  })
                : null
        ]
    });
}
