t.d(s, {
    Z: function () {
        return P;
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
    T = t(728345),
    S = t(565138),
    I = t(374649),
    N = t(908951),
    A = t(255078),
    C = t(430824),
    m = t(509545),
    g = t(580130),
    h = t(55563),
    O = t(551428),
    p = t(937615),
    R = t(171246),
    x = t(889989),
    f = t(547283),
    M = t(981631),
    D = t(689938),
    L = t(73282);
function P(e) {
    var s, t, r, c;
    let { subscription: E, navigateToSwitchPlan: A } = e,
        {
            appId: x,
            plan: f,
            storeListing: P,
            price: U,
            isGuildSubscription: G,
            subscriptionForGuild: F,
            sku: y
        } = (0, o.cj)(
            [g.Z, m.Z, O.Z, C.Z, h.Z],
            () => {
                let e = g.Z.getForSubscription(E.id),
                    s = null != e && e.size > 0 ? Array.from(e)[0] : null,
                    t = null == s ? void 0 : s.applicationId,
                    n = E.planId,
                    a = m.Z.get(n),
                    i = null != a ? O.Z.getForSKU(a.skuId) : null,
                    r = null != a ? (0, p.og)((0, p.T4)(a.price, a.currency), a.interval, a.intervalCount) : null,
                    o = null != i && (0, R.KK)(i.skuFlags),
                    l = o && null != s ? C.Z.getGuild(s.guildId) : void 0,
                    c = null != i ? h.Z.get(i.skuId) : null;
                return {
                    appId: t,
                    isGuildSubscription: o,
                    plan: a,
                    price: r,
                    sku: null != c ? c : void 0,
                    storeListing: i,
                    subscriptionForGuild: l
                };
            },
            [E.id, E.planId]
        ),
        { data: V } = (0, T.IX)(x),
        Y = a.useMemo(() => (null != V ? (0, u.y)(V, 100) : null), [V]),
        k = null !== (s = null == y ? void 0 : y.deleted) && void 0 !== s && s,
        w = null != y && (0, R.OL)(y),
        H = (0, R.Jf)(E, y),
        W = E.status === M.O0b.PAST_DUE,
        { analyticsLocations: K } = (0, _.ZP)(),
        [z] = (0, I.ED)({
            subscriptionId: E.id,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        Q = Z(E.currentPeriodEnd);
    return (0, n.jsxs)(i.l, {
        header: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: L.headerContent,
                    children: [
                        null != Y &&
                            (0, n.jsx)(l.Image, {
                                src: Y.href,
                                imageClassName: L.appIcon,
                                width: 40,
                                height: 40
                            }),
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: null !== (t = null == V ? void 0 : V.name) && void 0 !== t ? t : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: null !== (r = null == f ? void 0 : f.name) && void 0 !== r ? r : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PLAN_NAME_UNAVAILABLE
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: L.headerButtons,
                    children:
                        null != V &&
                        null != P &&
                        null != y &&
                        (0, n.jsx)(j, {
                            subscription: E,
                            app: V,
                            sku: y,
                            storeListing: P,
                            isCancelled: H,
                            navigateToSwitchPlan: A
                        })
                })
            ]
        }),
        children: [
            H &&
                (0, n.jsx)(v, {
                    type: 'warning',
                    title: w ? D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_APP_CANCELLED.format({ subscriptionPeriodEnd: Q }) : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_USER_CANCELLED.format({ subscriptionPeriodEnd: Q })
                }),
            W &&
                (0, n.jsx)(v, {
                    type: 'danger',
                    title: D.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING
                }),
            (0, n.jsxs)('div', {
                className: L.details,
                children: [
                    (0, n.jsx)(b, {
                        title: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_TYPE,
                        content: G
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsxs)('span', {
                                          className: L.subscriptionTypeRow,
                                          children: [(0, n.jsx)(l.ServerIcon, { size: 'xs' }), D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SERVER_SUBSCRIPTION]
                                      }),
                                      null != F &&
                                          (0, n.jsxs)('span', {
                                              className: L.guildSubscriptionContentRow,
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
                                  className: L.subscriptionTypeRow,
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
                        content: Z(null !== (c = E.createdAt) && void 0 !== c ? c : E.currentPeriodStart)
                    }),
                    (0, n.jsx)(b, {
                        title: H ? D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_END_DATE : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RENEWAL_DATE,
                        content: Q
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: L.payment,
                children: [
                    (0, n.jsx)(l.FormTitle, { children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL }),
                    null != z &&
                        (0, n.jsx)(N.Z, {
                            subscription: E,
                            currentInvoicePreview: z,
                            disabled: k || H
                        })
                ]
            }),
            null != V &&
                (null == P ? void 0 : P.benefits) != null &&
                (0, n.jsx)(B, {
                    appId: V.id,
                    listingBenefits: P.benefits
                })
        ]
    });
}
function b(e) {
    let { title: s, content: t } = e;
    return (0, n.jsxs)('div', {
        className: L.row,
        children: [
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: s
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: L.rowContent,
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
        className: L.noticeBanner,
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
        [C, m] = a.useState(!1),
        g = (0, E.q)(s.id),
        O = (0, o.e7)([h.Z], () => h.Z.getParentSKU(i.skuId), [i.skuId]),
        p = a.useMemo(() => (null == O ? [] : (0, f.$)(i.id, O, g)), [i.id, g, O]),
        x = 0 !== p.length,
        M = async () => {
            try {
                m(!0);
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
                m(!1);
            }
        };
    return (0, n.jsxs)('div', {
        className: L.managementBtns,
        children: [
            I
                ? null
                : u
                  ? (0, n.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        size: l.Button.Sizes.SMALL,
                        onClick: M,
                        submitting: C,
                        children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RESUME_PLAN
                    })
                  : (0, n.jsx)(l.Button, {
                        color: l.Button.Colors.CUSTOM,
                        size: l.Button.Sizes.SMALL,
                        className: L.secondaryBtn,
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
        className: L.benefits,
        children: [
            (0, n.jsxs)('div', {
                className: L.benefitsHeader,
                children: [
                    i &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_BENEFITS
                        }),
                    (0, n.jsxs)(l.Clickable, {
                        className: L.benefitsBtn,
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
