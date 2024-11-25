n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(722770),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(37234),
    m = n(254854),
    h = n(230711),
    g = n(100527),
    p = n(906732),
    x = n(377171),
    S = n(878596),
    T = n(313201),
    C = n(674180),
    _ = n(565138),
    E = n(374649),
    f = n(908951),
    I = n(703656),
    N = n(853872),
    A = n(245950),
    b = n(404203),
    v = n(330181),
    j = n(954821),
    O = n(980864),
    R = n(981631),
    P = n(176505),
    D = n(526761),
    y = n(388032),
    B = n(675616);
let L = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: r } = e;
        return (0, i.jsxs)('div', {
            className: B.infoCard,
            children: [
                (0, i.jsxs)('div', {
                    className: B.infoCardLabelContainer,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-deprecated-12/semibold',
                            className: B.infoCardLabel,
                            children: t
                        }),
                        s &&
                            (0, i.jsx)(c.Tooltip, {
                                clickableOnMobile: !0,
                                text: r,
                                children: (e) =>
                                    (0, i.jsx)(c.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: B.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-xl/semibold',
                    className: B.infoCardValue,
                    children: n
                })
            ]
        });
    },
    Z = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, p.ZP)(),
            [s] = (0, E.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: g.Z.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            }),
            r = (0, o.e7)([N.Z], () => N.Z.hasFetchedPaymentSources);
        return null != s && r
            ? (0, i.jsx)(f.Z, {
                  subscription: t,
                  currentInvoicePreview: s,
                  dropdownClassName: B.paymentSourceDropdown
              })
            : (0, i.jsx)(c.Spinner, {});
    },
    F = (e) => {
        let { isTrial: t, isCancelled: n, isResubscribing: s, shouldHideRoleSubscriptionEntryPoints: r, onCancelSubscriptionClick: l, onResubscribeClick: a, onChangePlanClick: o } = e;
        return n && (t || r)
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(c.FormTitle, { children: y.intl.string(y.t['4neDMz']) }),
                      (0, i.jsx)('div', {
                          className: B.__invalid_rowButtons,
                          children: n
                              ? (0, i.jsx)(c.Button, {
                                    onClick: a,
                                    submitting: s,
                                    children: y.intl.string(y.t.y3mAEx)
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        !t &&
                                            !r &&
                                            (0, i.jsx)(S.Z, {
                                                label: y.intl.string(y.t.FRbWR0),
                                                onClick: o
                                            }),
                                        (0, i.jsx)(S.Z, {
                                            label: y.intl.string(y.t.Dx0lFx),
                                            onClick: l
                                        })
                                    ]
                                })
                      })
                  ]
              });
    };
t.Z = (e) => {
    let { subscription: t } = e,
        { listing: n, groupListing: r, guild: o, expanded: g, handleToggleExpanded: S, subscriptionInfo: E } = (0, A.Z)(t),
        [f, N] = s.useState(!1),
        M = (0, T.Dt)(),
        { analyticsLocations: k } = (0, p.ZP)(),
        { shouldHideGuildPurchaseEntryPoints: w } = (0, C.uP)(null == o ? void 0 : o.id),
        U = (null == t ? void 0 : t.paymentGateway) === R.gg$.APPLE_PARTNER;
    if (null == r || null == n || null == E) return null;
    let V = () => {
            null != o && ((0, I.uL)(R.Z5c.CHANNEL(o.id, P.oC.ROLE_SUBSCRIPTIONS)), (0, u.xf)(), m.Z.show(R.kVF.BACK_TO_PREVIOUS_SCREEN, void 0, y.intl.string(y.t.DvbaMz), () => h.Z.open(R.oAB.SUBSCRIPTIONS, D.cP)));
        },
        G = () => {
            null != o &&
                (0, j.h)({
                    guildId: o.id,
                    groupListing: r,
                    listing: n,
                    subscription: t
                });
        },
        Y = async () => {
            try {
                N(!0), await d.pl(t, k), (0, O.h)();
            } finally {
                N(!1);
            }
        },
        { isCancelled: H, isPastDue: z, subscriptionPrice: W, memberSince: K, nextRenewalDate: q, nextRenewalLabel: Q, isTrial: X } = E,
        J = n.soft_deleted || null == o || U,
        $ = () => {
            if (H) return (0, i.jsx)(c.TextBadge, { text: y.intl.string(y.t['7uFZGh']) });
            if (X)
                return (0, i.jsx)(c.TextBadge, {
                    text: y.intl.string(y.t['6antoq']),
                    color: a.Z.BRAND_500
                });
            if (z)
                return (0, i.jsx)(c.Tooltip, {
                    text: y.intl.string(y.t.eSuJEx),
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            children: (0, i.jsx)(c.TextBadge, {
                                className: B.paymentDueBadge,
                                text: y.intl.string(y.t.NrRwIi),
                                color: a.Z.YELLOW_300
                            })
                        })
                });
            else return null;
        },
        ee = () =>
            U
                ? (0, i.jsx)(c.Tooltip, {
                      text: y.intl.string(y.t.nv1IqK),
                      children: (e) =>
                          (0, i.jsx)('div', {
                              ...e,
                              children: (0, i.jsx)(c.TextBadge, {
                                  text: y.intl.string(y.t.sBl3X1),
                                  color: x.Z.INTERACTIVE_MUTED
                              })
                          })
                  })
                : null;
    return (0, i.jsxs)('div', {
        className: B.container,
        children: [
            (0, i.jsx)(b.Z, {
                onClick: S,
                className: B.headerContainer,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: s } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != o &&
                                (0, i.jsx)(_.Z, {
                                    guild: o,
                                    active: !0,
                                    size: _.Z.Sizes.MEDIUM
                                }),
                            (0, i.jsxs)('div', {
                                className: B.headerTextContainer,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/medium',
                                        className: B.guildName,
                                        children: null != o ? o.name : y.intl.string(y.t['He+cmZ'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: B.headerSubtitleContainer,
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                className: B.tierName,
                                                children: n.name
                                            }),
                                            $(),
                                            ee()
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.Clickable, {
                                onClick: s(S),
                                'aria-label': y.intl.string(y.t.e5eQOz),
                                'aria-controls': M,
                                'aria-expanded': g,
                                focusProps: { ringTarget: t },
                                children: (0, i.jsx)(c.ChevronSmallDownIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: l()(B.arrowIcon, { [B.arrowIconExpanded]: g })
                                })
                            })
                        ]
                    });
                }
            }),
            g
                ? (0, i.jsxs)('div', {
                      id: M,
                      children: [
                          (0, i.jsx)('div', { className: B.divider }),
                          (0, i.jsx)(v.Z, {
                              groupListingId: r.id,
                              subscription: t,
                              className: B.changePlanNotice
                          }),
                          (0, i.jsxs)('div', {
                              className: B.subscriptionInfoCards,
                              children: [
                                  (0, i.jsx)(L, {
                                      label: Q,
                                      value: q
                                  }),
                                  (0, i.jsx)(L, {
                                      label: y.intl.string(y.t.dltUMD),
                                      value: W,
                                      showInfoIcon: X,
                                      infoIconTooltipText: X ? y.intl.string(y.t['/q6fpa']) : void 0
                                  }),
                                  (0, i.jsx)(L, {
                                      label: y.intl.string(y.t.AOcwWF),
                                      value: K
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Spacer, { size: 16 }),
                          !H &&
                              !U &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [(0, i.jsx)(c.FormTitle, { children: y.intl.string(y.t.wmMFvL) }), (0, i.jsx)(Z, { subscription: t })]
                              }),
                          !J &&
                              (0, i.jsx)(F, {
                                  isTrial: X,
                                  isCancelled: H,
                                  isResubscribing: f,
                                  shouldHideRoleSubscriptionEntryPoints: w,
                                  onCancelSubscriptionClick: G,
                                  onChangePlanClick: V,
                                  onResubscribeClick: Y
                              })
                      ]
                  })
                : null
        ]
    });
};
