n.d(e, {
    N: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    c = n(481060),
    o = n(259580),
    d = n(499033),
    u = n(626135),
    m = n(709054),
    x = n(219230),
    h = n(531441),
    g = n(236289),
    v = n(788080),
    j = n(467432),
    N = n(451284),
    f = n(613734),
    p = n(800530),
    S = n(981631),
    T = n(388032),
    I = n(849963);
let E = (t) => {
        let { status: e, onClick: n, opened: a, count: s } = t;
        return (0, i.jsxs)(c.Clickable, {
            className: I.header,
            onClick: n,
            children: [
                (0, i.jsx)('div', {
                    className: I.headerIconWrapper,
                    children: (0, i.jsx)(c.WarningIcon, {
                        size: 'md',
                        color: 'active' === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, i.jsxs)('div', {
                    className: I.title,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            color: 'text-normal',
                            children: 'active' === e ? T.intl.formatToPlainString(T.t.IeV2oa, { count: s.toString() }) : T.intl.formatToPlainString(T.t.fZAHBQ, { count: s.toString() })
                        }),
                        (0, i.jsx)(c.Heading, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === e ? T.intl.string(T.t.XJ2YVV) : T.intl.string(T.t.SzGV0t)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: I.caret,
                    children: (0, i.jsx)(o.Z, {
                        width: 18,
                        height: 18,
                        direction: a ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    _ = () =>
        (0, i.jsxs)('div', {
            className: I.emptyState,
            children: [
                (0, i.jsxs)('div', {
                    className: I.iconContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: I.iconBackground,
                            children: (0, i.jsx)(c.TrophyIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.icon
                            })
                        }),
                        (0, i.jsx)(d.Z, { className: I.stars })
                    ]
                }),
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-md/bold',
                    className: I.emptyStateText,
                    children: T.intl.string(T.t.reLFaW)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    className: I.emptyStateSubtext,
                    children: T.intl.string(T.t.ERdH1t)
                })
            ]
        }),
    b = () =>
        (0, i.jsx)('div', {
            className: I.emptyState,
            children: (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: I.emptyStateSubtext,
                children: T.intl.string(T.t.RV3AXV)
            })
        }),
    C = (t) => {
        let { timestamp: e } = t;
        return (0, i.jsx)(c.Text, {
            variant: 'text-xs/normal',
            className: I.timestamp,
            children: (0, v.XX)(e)
        });
    },
    k = () =>
        (0, i.jsx)(c.Text, {
            variant: 'text-xs/bold',
            className: I.newBadge,
            children: T.intl.string(T.t.QKMRCw)
        }),
    D = (t) => {
        let { classification: e } = t,
            { id: s, description: r } = e,
            o = m.default.extractTimestamp(s),
            d = (0, j.e)(e),
            u = (0, x.B)('violations_container'),
            g = a.useMemo(() => {
                var t, n, a;
                let s = {
                    description: r,
                    descriptionHook: (t) =>
                        (0, i.jsx)(c.Text, {
                            tag: 'span',
                            variant: 'heading-lg/bold',
                            children: t
                        })
                };
                if (!(u && (0, v.FB)(e))) return T.intl.format(T.t.QY4g5u, s);
                return (null == e ? void 0 : null === (t = e.guild_metadata) || void 0 === t ? void 0 : t.member_type) === h.wO.OWNER
                    ? T.intl.format(T.t.Lb0HVl, {
                          ...s,
                          guildName: null == e ? void 0 : null === (n = e.guild_metadata) || void 0 === n ? void 0 : n.name
                      })
                    : T.intl.format(T.t.rmpEPD, {
                          guildName: null == e ? void 0 : null === (a = e.guild_metadata) || void 0 === a ? void 0 : a.name,
                          classification_type: s.description,
                          classificationHook: s.descriptionHook
                      });
            }, [e, r, u]);
        return (0, i.jsx)(
            c.Clickable,
            {
                onClick: () => {
                    (0, c.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e('72181'), n.e('46097'), n.e('25183'), n.e('18831'), n.e('56827')]).then(n.bind(n, 41164));
                        return (e) =>
                            (0, i.jsx)(t, {
                                classificationId: s,
                                source: p.s.StandingTab,
                                ...e
                            });
                    });
                },
                className: l()(I.itemDetail, { [I.itemDetailNew]: d }),
                children: (0, i.jsxs)('div', {
                    className: I.descriptionContainer,
                    children: [
                        d ? (0, i.jsx)(k, {}) : (0, i.jsx)(C, { timestamp: o }),
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-lg/normal',
                            children: g
                        })
                    ]
                })
            },
            s
        );
    },
    A = (t) => {
        let { status: e, classifications: n } = t,
            [s, l] = a.useState(!1),
            [o, d] = a.useState(3),
            m = (0, N.P)(),
            x = (0, r.e7)([g.Z], () => g.Z.getIsDsaEligible()),
            h = a.useMemo(() => n.slice(0, o), [n, o]);
        a.useEffect(() => {
            s &&
                u.default.track(S.rMx.SAFETY_HUB_ACTION, {
                    action: p.n0.ViewViolationsDropdown,
                    account_standing: m.state,
                    classification_ids: h.map((t) => Number(t.id)),
                    source: p.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: x
                });
        }, [s, m.state, h, x]);
        let v = n.length - h.length > 3 ? 3 : n.length - h.length;
        return (0, i.jsxs)('div', {
            className: I.dropdown,
            children: [
                (0, i.jsx)(E, {
                    status: e,
                    onClick: () => l((t) => !t),
                    opened: s,
                    count: n.length
                }),
                s &&
                    (0, i.jsxs)('div', {
                        className: I.items,
                        children: [
                            (0, i.jsx)(c.TabBar.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            h.length > 0 && h.map((t) => (0, i.jsx)(D, { classification: t }, t.id)),
                            h.length < n.length &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(c.TabBar.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, i.jsx)('button', {
                                            className: I.paginationButton,
                                            onClick: () => d((t) => t + v),
                                            children: T.intl.format(T.t['9Ml56O'], { nextPageSize: v })
                                        })
                                    ]
                                }),
                            0 === h.length && 'active' === e && (0, i.jsx)(_, {}),
                            0 === h.length && 'expired' === e && (0, i.jsx)(b, {})
                        ]
                    })
            ]
        });
    },
    y = () => {
        let t = (0, f.y9)(),
            e = (0, f.KM)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(A, {
                          status: 'active',
                          classifications: t
                      }),
                      (0, i.jsx)(A, {
                          status: 'expired',
                          classifications: e
                      })
                  ]
              });
    };
