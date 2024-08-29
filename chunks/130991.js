t.d(s, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(269210),
    r = t(442837),
    o = t(481060),
    l = t(355467),
    c = t(100527),
    d = t(906732),
    _ = t(601911),
    E = t(812206),
    u = t(565138),
    I = t(374649),
    T = t(908951),
    S = t(255078),
    N = t(430824),
    C = t(509545),
    m = t(580130),
    A = t(55563),
    O = t(937615),
    g = t(488915),
    h = t(171246),
    p = t(889989),
    R = t(981631),
    x = t(689938),
    M = t(280819);
function f(e) {
    var s, t, a, i, l;
    let { subscription: S } = e,
        {
            app: p,
            appIcon: f,
            plan: v,
            listing: j,
            price: B,
            isGuildSubscription: U,
            subscriptionForGuild: G,
            sku: F
        } = (0, r.cj)(
            [m.Z, C.Z, g.Z, E.Z, N.Z, A.Z],
            () => {
                let e = m.Z.getForSubscription(S.id),
                    s = null != e && e.size > 0 ? Array.from(e)[0] : null,
                    t = null == s ? void 0 : s.applicationId,
                    n = S.planId,
                    a = C.Z.get(n),
                    i = null != t ? E.Z.getApplication(t) : null,
                    r = null != i ? (0, _.y)(i, 100) : null,
                    o = g.Z.getSubscriptionListingForPlan(n),
                    l = null != a ? (0, O.og)((0, O.T4)(a.price, a.currency), a.interval, a.intervalCount) : null,
                    c = null != o && (0, h.KK)(o.sku_flags),
                    d = c && null != s ? N.Z.getGuild(s.guildId) : void 0,
                    u = null != o ? A.Z.get(o.id) : null;
                return {
                    app: i,
                    appIcon: r,
                    plan: a,
                    listing: o,
                    price: l,
                    isGuildSubscription: c,
                    subscriptionForGuild: d,
                    sku: null != u ? u : void 0
                };
            },
            [S]
        ),
        y = null !== (t = null !== (s = null == j ? void 0 : j.soft_deleted) && void 0 !== s ? s : null == F ? void 0 : F.deleted) && void 0 !== t && t,
        V = null != F && (0, h.OL)(F),
        Y = (0, h.Jf)(S, F),
        w = S.status === R.O0b.PAST_DUE,
        { analyticsLocations: H } = (0, d.ZP)(),
        [k] = (0, I.ED)({
            subscriptionId: S.id,
            renewal: !0,
            analyticsLocations: H,
            analyticsLocation: c.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        W = P(S.currentPeriodEnd);
    return (0, n.jsxs)('div', {
        className: M.wrapper,
        children: [
            (0, n.jsxs)('div', {
                className: M.header,
                children: [
                    (0, n.jsxs)('div', {
                        className: M.headerContent,
                        children: [
                            null != f &&
                                (0, n.jsx)(o.Image, {
                                    src: f.href,
                                    imageClassName: M.appIcon,
                                    width: 40,
                                    height: 40
                                }),
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(o.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: null !== (a = null == p ? void 0 : p.name) && void 0 !== a ? a : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'header-secondary',
                                        children: null !== (i = null == v ? void 0 : v.name) && void 0 !== i ? i : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PLAN_NAME_UNAVAILABLE
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: M.headerButtons,
                        children:
                            null != p &&
                            null != j &&
                            null != F &&
                            (0, n.jsx)(b, {
                                subscription: S,
                                app: p,
                                listing: j,
                                sku: F,
                                isCancelled: Y
                            })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: M.content,
                children: [
                    Y &&
                        (0, n.jsx)(L, {
                            type: 'warning',
                            title: V ? x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_APP_CANCELLED.format({ subscriptionPeriodEnd: W }) : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_USER_CANCELLED.format({ subscriptionPeriodEnd: W })
                        }),
                    w &&
                        (0, n.jsx)(L, {
                            type: 'danger',
                            title: x.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING
                        }),
                    (0, n.jsxs)('div', {
                        className: M.details,
                        children: [
                            (0, n.jsx)(D, {
                                title: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_TYPE,
                                content: U
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsxs)('span', {
                                                  className: M.subscriptionTypeRow,
                                                  children: [(0, n.jsx)(o.ServerIcon, { size: 'xs' }), x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SERVER_SUBSCRIPTION]
                                              }),
                                              null != G &&
                                                  (0, n.jsxs)('span', {
                                                      className: M.guildSubscriptionContentRow,
                                                      children: [
                                                          (0, n.jsx)(o.Text, {
                                                              variant: 'text-sm/normal',
                                                              color: 'text-muted',
                                                              children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_USED_IN.format({ guildName: G.name })
                                                          }),
                                                          (0, n.jsx)(u.Z, {
                                                              guild: G,
                                                              size: u.Z.Sizes.MINI
                                                          })
                                                      ]
                                                  })
                                          ]
                                      })
                                    : (0, n.jsxs)('span', {
                                          className: M.subscriptionTypeRow,
                                          children: [(0, n.jsx)(o.UserIcon, { size: 'xs' }), x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION]
                                      })
                            }),
                            null != B &&
                                (0, n.jsx)(D, {
                                    title: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PRICE,
                                    content: B
                                }),
                            (0, n.jsx)(D, {
                                title: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_START_DATE,
                                content: P(null !== (l = S.createdAt) && void 0 !== l ? l : S.currentPeriodStart)
                            }),
                            (0, n.jsx)(D, {
                                title: Y ? x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_END_DATE : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RENEWAL_DATE,
                                content: W
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: M.payment,
                        children: [
                            (0, n.jsx)(o.FormTitle, { children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL }),
                            null != k &&
                                (0, n.jsx)(T.Z, {
                                    subscription: S,
                                    currentInvoicePreview: k,
                                    disabled: y || Y
                                })
                        ]
                    }),
                    null != p &&
                        (null == j ? void 0 : j.store_listing_benefits) != null &&
                        (0, n.jsx)(Z, {
                            appId: p.id,
                            listingBenefits: j.store_listing_benefits
                        })
                ]
            })
        ]
    });
}
function D(e) {
    let { title: s, content: t } = e;
    return (0, n.jsxs)('div', {
        className: M.row,
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: s
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: M.rowContent,
                children: t
            })
        ]
    });
}
function P(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function L(e) {
    let { type: s, title: t } = e;
    return (0, n.jsx)(o.HelpMessage, {
        messageType: 'warning' === s ? o.HelpMessageTypes.WARNING : o.HelpMessageTypes.ERROR,
        children: (0, n.jsx)(o.Text, {
            variant: 'text-sm/normal',
            children: t
        })
    });
}
function b(e) {
    let { app: s, listing: i, sku: r, subscription: c, isCancelled: _, guild: E } = e,
        u = (0, h.OL)(r),
        { analyticsLocations: I } = (0, d.ZP)(),
        [T, N] = a.useState(!1),
        C = async () => {
            try {
                N(!0);
                let { subscription: e } = await (0, l.pl)(c, I);
                if (null == e) return;
                (0, o.openModalLazy)(async () => {
                    let { default: s } = await t.e('18879').then(t.bind(t, 535278));
                    return (t) =>
                        (0, n.jsx)(s, {
                            ...t,
                            listing: i,
                            subscription: S.Z.createFromServer(e)
                        });
                });
            } finally {
                N(!1);
            }
        };
    return u
        ? null
        : _
          ? (0, n.jsx)(o.Button, {
                color: o.Button.Colors.PRIMARY,
                size: o.Button.Sizes.SMALL,
                onClick: C,
                submitting: T,
                children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RESUME_PLAN
            })
          : (0, n.jsx)(o.Button, {
                color: o.Button.Colors.CUSTOM,
                size: o.Button.Sizes.SMALL,
                className: M.secondaryBtn,
                onClick: () => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await t.e('6284').then(t.bind(t, 257514));
                        return (t) =>
                            (0, n.jsx)(e, {
                                ...t,
                                application: s,
                                listing: i,
                                subscription: c,
                                guild: E
                            });
                    });
                },
                children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCEL_PLAN
            });
}
function Z(e) {
    let { appId: s, listingBenefits: t } = e,
        [r, l] = a.useReducer((e) => !e, !1),
        c = a.useMemo(
            () =>
                t.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, p.n)(s, e.icon)
                })),
            [s, t]
        ),
        d = r ? o.ChevronSmallUpIcon : o.ChevronSmallDownIcon;
    return (0, n.jsxs)('div', {
        className: M.benefits,
        children: [
            (0, n.jsxs)('div', {
                className: M.benefitsHeader,
                children: [
                    r &&
                        (0, n.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_BENEFITS
                        }),
                    (0, n.jsxs)(o.Clickable, {
                        className: M.benefitsBtn,
                        onClick: l,
                        children: [
                            (0, n.jsx)(o.Text, {
                                variant: 'heading-sm/semibold',
                                tag: 'div',
                                color: 'currentColor',
                                children: r ? x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_HIDE_BENEFITS : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SHOW_BENEFITS
                            }),
                            (0, n.jsx)(d, {
                                size: 'sm',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            }),
            r
                ? c.map((e) =>
                      (0, n.jsx)(
                          i.G,
                          {
                              name: e.title,
                              icon: e.icon,
                              description: e.description
                          },
                          e.id
                      )
                  )
                : null
        ]
    });
}
