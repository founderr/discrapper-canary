n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(722770),
    d = n(442837),
    u = n(481060),
    m = n(355467),
    h = n(100527),
    g = n(906732),
    p = n(878596),
    x = n(313201),
    S = n(565138),
    T = n(404203),
    C = n(330181),
    _ = n(374649),
    E = n(908951),
    f = n(255078),
    I = n(853872),
    N = n(171246),
    A = n(41959),
    b = n(650919),
    v = n(981631),
    j = n(388032),
    O = n(116714);
let R = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: r } = e;
        return (0, i.jsxs)('div', {
            className: O.infoCard,
            children: [
                (0, i.jsxs)('div', {
                    className: O.infoCardLabelContainer,
                    children: [
                        (0, i.jsx)(u.Heading, {
                            variant: 'heading-deprecated-12/semibold',
                            className: O.infoCardLabel,
                            children: t
                        }),
                        s &&
                            (0, i.jsx)(u.Tooltip, {
                                text: r,
                                children: (e) =>
                                    (0, i.jsx)(u.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: O.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, i.jsx)(u.Heading, {
                    variant: 'heading-xl/semibold',
                    className: O.infoCardValue,
                    children: n
                })
            ]
        });
    },
    P = (e) => {
        let { subscription: t, disabled: n } = e,
            { analyticsLocations: s } = (0, g.ZP)(),
            [r] = (0, _.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: s,
                analyticsLocation: h.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([I.Z], () => I.Z.hasFetchedPaymentSources)
            ? null == r
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.FormTitle, { children: j.intl.string(j.t.azZaZW) }),
                          (0, i.jsx)(E.Z, {
                              subscription: t,
                              currentInvoicePreview: r,
                              dropdownClassName: O.paymentSourceDropdown,
                              disabled: n
                          })
                      ]
                  })
            : (0, i.jsx)(u.Spinner, {});
    },
    D = (e) => {
        let { isCancelled: t, onCancelSubscriptionClick: n, isResubscribing: s, onResubscribeClick: r } = e;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.FormTitle, { children: j.intl.string(j.t.gZVAur) }),
                (0, i.jsx)('div', {
                    className: O.__invalid_rowButtons,
                    children: t
                        ? (0, i.jsx)(u.Button, {
                              onClick: r,
                              submitting: s,
                              children: j.intl.string(j.t['Ms+Eoa'])
                          })
                        : (0, i.jsx)(p.Z, {
                              label: j.intl.string(j.t.Tb6MV1),
                              onClick: n
                          })
                })
            ]
        });
    };
t.Z = (e) => {
    let { subscription: t } = e,
        { storeListing: r, groupListing: a, guild: d, expanded: h, handleToggleExpanded: p, subscriptionInfo: _, application: E } = (0, b.Z)(t),
        I = (0, x.Dt)(),
        [y, B] = s.useState(!1),
        { analyticsLocations: L } = (0, g.ZP)();
    if (null == a || null == r || null == _) return null;
    let Z = () => {
            o()(null != E, 'Application cannot be null'),
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                    return (n) =>
                        (0, i.jsx)(e, {
                            application: E,
                            storeListing: r,
                            subscription: t,
                            guild: d,
                            ...n
                        });
                });
        },
        F = async () => {
            try {
                B(!0);
                let { subscription: e } = await m.pl(t, L);
                null != e &&
                    (0, u.openModalLazy)(async () => {
                        let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                        return (n) =>
                            (0, i.jsx)(t, {
                                storeListing: r,
                                subscription: f.Z.createFromServer(e),
                                ...n
                            });
                    });
            } finally {
                B(!1);
            }
        },
        { isCancelled: M, isDeleted: k, isPastDue: w, subscriptionPlanPrice: U, subscribedSinceDate: V, currentPeriodEndDate: G, currentPeriodEndLabel: Y } = _,
        H = (0, N.KW)(r.skuFlags),
        z = (0, N.KK)(r.skuFlags),
        W = null == E || ((!z || null == d) && !H),
        K = () =>
            M || k
                ? (0, i.jsx)(u.TextBadge, { text: j.intl.string(j.t.xSMZub) })
                : w
                  ? (0, i.jsx)(u.Tooltip, {
                        text: j.intl.string(j.t.fvOqBg),
                        children: (e) =>
                            (0, i.jsx)('div', {
                                ...e,
                                children: (0, i.jsx)(u.TextBadge, {
                                    className: O.paymentDueBadge,
                                    text: j.intl.string(j.t['DQ+YIC']),
                                    color: c.Z.YELLOW_300
                                })
                            })
                    })
                  : null,
        q = null;
    if (z) {
        var Q;
        q = (0, i.jsxs)(u.Text, {
            variant: 'text-sm/normal',
            className: O.tierName,
            children: [
                j.intl.format(j.t['5YBAcX'], { guildName: null !== (Q = null == d ? void 0 : d.name) && void 0 !== Q ? Q : j.intl.string(j.t.FsYvDw) }),
                null != d &&
                    (0, i.jsx)(S.Z, {
                        guild: d,
                        size: S.Z.Sizes.MINI,
                        className: O.guildIcon
                    })
            ]
        });
    } else
        H &&
            (q = (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                className: O.tierName,
                children: j.intl.string(j.t['6anEVl'])
            }));
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)(T.Z, {
                onClick: p,
                className: O.headerContainer,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != E &&
                                (0, i.jsx)(A.Z, {
                                    size: A.H.SMALL,
                                    className: O.applicationIcon,
                                    application: E,
                                    asset: r.thumbnail
                                }),
                            (0, i.jsxs)('div', {
                                className: O.headerTextContainer,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/medium',
                                        className: O.applicationName,
                                        children: null != E ? E.name : j.intl.string(j.t['7kqy7e'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: O.headerSubtitleContainer,
                                        children: [q, K()]
                                    })
                                ]
                            }),
                            (0, i.jsx)(u.Clickable, {
                                onClick: n(p),
                                'aria-label': j.intl.string(j.t.hBUzy8),
                                'aria-controls': I,
                                'aria-expanded': h,
                                focusProps: { ringTarget: t },
                                children: (0, i.jsx)(u.ChevronSmallDownIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: l()(O.arrowIcon, { [O.arrowIconExpanded]: h })
                                })
                            })
                        ]
                    });
                }
            }),
            h
                ? (0, i.jsxs)('div', {
                      id: I,
                      children: [
                          (0, i.jsx)('div', { className: O.divider }),
                          k
                              ? (0, i.jsx)(u.HelpMessage, {
                                    messageType: u.HelpMessageTypes.WARNING,
                                    className: O.deletedHelpMessage,
                                    children: j.intl.string(j.t.cNtzcX)
                                })
                              : null,
                          (0, i.jsx)(C.Z, {
                              groupListingId: a.id,
                              subscription: t,
                              className: O.changePlanNotice
                          }),
                          (0, i.jsxs)('div', {
                              className: O.subscriptionInfoCards,
                              children: [
                                  (0, i.jsx)(R, {
                                      label: Y,
                                      value: j.intl.formatToPlainString(j.t['0UHiHR'], { timestamp: G.getTime() })
                                  }),
                                  (0, i.jsx)(R, {
                                      label: j.intl.string(j.t.qgcLBw),
                                      value: U
                                  }),
                                  (0, i.jsx)(R, {
                                      label: j.intl.string(j.t.oFwls7),
                                      value: j.intl.formatToPlainString(j.t['aO8U8/'], { timestamp: V.getTime() })
                                  })
                              ]
                          }),
                          (0, i.jsx)(u.Spacer, { size: 16 }),
                          t.status === v.O0b.ACTIVE &&
                              (0, i.jsx)(P, {
                                  subscription: t,
                                  disabled: k
                              }),
                          !W &&
                              (0, i.jsx)(D, {
                                  isCancelled: M,
                                  onCancelSubscriptionClick: Z,
                                  isResubscribing: y,
                                  onResubscribeClick: F
                              })
                      ]
                  })
                : null
        ]
    });
};
