n.d(e, {
    N: function () {
        return H;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    s = n.n(l),
    r = n(442837),
    o = n(481060),
    c = n(259580),
    u = n(499033),
    d = n(626135),
    _ = n(709054),
    E = n(219230),
    S = n(531441),
    f = n(236289),
    g = n(788080),
    m = n(467432),
    p = n(451284),
    T = n(613734),
    h = n(800530),
    A = n(981631),
    x = n(388032),
    I = n(15999);
let v = (t) => {
        let { status: e, onClick: n, opened: a, count: l } = t;
        return (0, i.jsxs)(o.Clickable, {
            className: I.header,
            onClick: n,
            children: [
                (0, i.jsx)('div', {
                    className: I.headerIconWrapper,
                    children: (0, i.jsx)(o.WarningIcon, {
                        size: 'md',
                        color: 'active' === e ? o.tokens.colors.INTERACTIVE_ACTIVE : o.tokens.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, i.jsxs)('div', {
                    className: I.title,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-md/semibold',
                            color: 'text-normal',
                            children: 'active' === e ? x.intl.formatToPlainString(x.t.IeV2oa, { count: l.toString() }) : x.intl.formatToPlainString(x.t.fZAHBQ, { count: l.toString() })
                        }),
                        (0, i.jsx)(o.Heading, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === e ? x.intl.string(x.t.XJ2YVV) : x.intl.string(x.t.SzGV0t)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: I.caret,
                    children: (0, i.jsx)(c.Z, {
                        width: 18,
                        height: 18,
                        direction: a ? c.Z.Directions.UP : c.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    N = () =>
        (0, i.jsxs)('div', {
            className: I.emptyState,
            children: [
                (0, i.jsxs)('div', {
                    className: I.iconContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: I.iconBackground,
                            children: (0, i.jsx)(o.TrophyIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.icon
                            })
                        }),
                        (0, i.jsx)(u.Z, { className: I.stars })
                    ]
                }),
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-md/bold',
                    className: I.emptyStateText,
                    children: x.intl.string(x.t.reLFaW)
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    className: I.emptyStateSubtext,
                    children: x.intl.string(x.t.ERdH1t)
                })
            ]
        }),
    C = () =>
        (0, i.jsx)('div', {
            className: I.emptyState,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                className: I.emptyStateSubtext,
                children: x.intl.string(x.t.RV3AXV)
            })
        }),
    U = (t) => {
        let { timestamp: e } = t;
        return (0, i.jsx)(o.Text, {
            variant: 'text-xs/normal',
            className: I.timestamp,
            children: (0, g.XX)(e)
        });
    },
    b = () =>
        (0, i.jsx)(o.Text, {
            variant: 'text-xs/bold',
            className: I.newBadge,
            children: x.intl.string(x.t.QKMRCw)
        }),
    F = (t) => {
        let { classification: e } = t,
            { id: l, description: r } = e,
            c = _.default.extractTimestamp(l),
            u = (0, m.e)(e),
            d = (0, E.B)('violations_container'),
            f = a.useMemo(() => {
                var t, n, a;
                let l = {
                    description: r,
                    descriptionHook: (t) =>
                        (0, i.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'heading-lg/bold',
                            children: t
                        })
                };
                if (!(d && (0, g.FB)(e))) return x.intl.format(x.t.QY4g5u, l);
                return (null == e ? void 0 : null === (t = e.guild_metadata) || void 0 === t ? void 0 : t.member_type) === S.wO.OWNER
                    ? x.intl.format(x.t.Lb0HVl, {
                          ...l,
                          guildName: null == e ? void 0 : null === (n = e.guild_metadata) || void 0 === n ? void 0 : n.name
                      })
                    : x.intl.format(x.t.rmpEPD, {
                          guildName: null == e ? void 0 : null === (a = e.guild_metadata) || void 0 === a ? void 0 : a.name,
                          classification_type: l.description,
                          classificationHook: l.descriptionHook
                      });
            }, [e, r, d]);
        return (0, i.jsx)(
            o.Clickable,
            {
                onClick: () => {
                    (0, o.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e('72181'), n.e('25183'), n.e('46097'), n.e('18831'), n.e('75589')]).then(n.bind(n, 41164));
                        return (e) =>
                            (0, i.jsx)(t, {
                                classificationId: l,
                                source: h.s.StandingTab,
                                ...e
                            });
                    });
                },
                className: s()(I.itemDetail, { [I.itemDetailNew]: u }),
                children: (0, i.jsxs)('div', {
                    className: I.descriptionContainer,
                    children: [
                        u ? (0, i.jsx)(b, {}) : (0, i.jsx)(U, { timestamp: c }),
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/normal',
                            children: f
                        })
                    ]
                })
            },
            l
        );
    },
    j = (t) => {
        let { status: e, classifications: n } = t,
            [l, s] = a.useState(!1),
            [c, u] = a.useState(3),
            _ = (0, p.P)(),
            E = (0, r.e7)([f.Z], () => f.Z.getIsDsaEligible()),
            S = a.useMemo(() => n.slice(0, c), [n, c]);
        a.useEffect(() => {
            l &&
                d.default.track(A.rMx.SAFETY_HUB_ACTION, {
                    action: h.n0.ViewViolationsDropdown,
                    account_standing: _.state,
                    classification_ids: S.map((t) => Number(t.id)),
                    source: h.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: E
                });
        }, [l, _.state, S, E]);
        let g = n.length - S.length > 3 ? 3 : n.length - S.length;
        return (0, i.jsxs)('div', {
            className: I.dropdown,
            children: [
                (0, i.jsx)(v, {
                    status: e,
                    onClick: () => s((t) => !t),
                    opened: l,
                    count: n.length
                }),
                l &&
                    (0, i.jsxs)('div', {
                        className: I.items,
                        children: [
                            (0, i.jsx)(o.TabBar.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            S.length > 0 && S.map((t) => (0, i.jsx)(F, { classification: t }, t.id)),
                            S.length < n.length &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(o.TabBar.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, i.jsx)('button', {
                                            className: I.paginationButton,
                                            onClick: () => u((t) => t + g),
                                            children: x.intl.format(x.t['9Ml56O'], { nextPageSize: g })
                                        })
                                    ]
                                }),
                            0 === S.length && 'active' === e && (0, i.jsx)(N, {}),
                            0 === S.length && 'expired' === e && (0, i.jsx)(C, {})
                        ]
                    })
            ]
        });
    },
    H = () => {
        let t = (0, T.y9)(),
            e = (0, T.KM)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(j, {
                          status: 'active',
                          classifications: t
                      }),
                      (0, i.jsx)(j, {
                          status: 'expired',
                          classifications: e
                      })
                  ]
              });
    };
