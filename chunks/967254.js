n.d(t, {
    N: function () {
        return R;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(259580),
    _ = n(499033),
    u = n(626135),
    d = n(709054),
    E = n(219230),
    T = n(531441),
    S = n(236289),
    A = n(788080),
    I = n(467432),
    N = n(451284),
    g = n(613734),
    f = n(800530),
    C = n(981631),
    m = n(689938),
    p = n(388690);
let U = (e) => {
        let { status: t, onClick: n, opened: i, count: s } = e;
        return (0, a.jsxs)(o.Clickable, {
            className: p.header,
            onClick: n,
            children: [
                (0, a.jsx)('div', {
                    className: p.headerIconWrapper,
                    children: (0, a.jsx)(o.WarningIcon, {
                        size: 'md',
                        color: 'active' === t ? o.tokens.colors.INTERACTIVE_ACTIVE : o.tokens.colors.INTERACTIVE_MUTED
                    })
                }),
                (0, a.jsxs)('div', {
                    className: p.title,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: 'heading-md/semibold',
                            color: 'text-normal',
                            children: 'active' === t ? m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE_V2.format({ count: s.toString() }) : m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED_V2.format({ count: s.toString() })
                        }),
                        (0, a.jsx)(o.Heading, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: 'active' === t ? m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE_V2 : m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED_V2
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: p.caret,
                    children: (0, a.jsx)(c.Z, {
                        width: 18,
                        height: 18,
                        direction: i ? c.Z.Directions.UP : c.Z.Directions.DOWN
                    })
                })
            ]
        });
    },
    h = () =>
        (0, a.jsxs)('div', {
            className: p.emptyState,
            children: [
                (0, a.jsxs)('div', {
                    className: p.iconContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: p.iconBackground,
                            children: (0, a.jsx)(o.TrophyIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: p.icon
                            })
                        }),
                        (0, a.jsx)(_.Z, { className: p.stars })
                    ]
                }),
                (0, a.jsx)(o.Heading, {
                    variant: 'heading-md/bold',
                    className: p.emptyStateText,
                    children: m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
                }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    className: p.emptyStateSubtext,
                    children: m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
                })
            ]
        }),
    O = () =>
        (0, a.jsx)('div', {
            className: p.emptyState,
            children: (0, a.jsx)(o.Text, {
                variant: 'text-xs/normal',
                className: p.emptyStateSubtext,
                children: m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
            })
        }),
    x = (e) => {
        let { timestamp: t } = e;
        return (0, a.jsx)(o.Text, {
            variant: 'text-xs/normal',
            className: p.timestamp,
            children: (0, A.XX)(t)
        });
    },
    v = () =>
        (0, a.jsx)(o.Text, {
            variant: 'text-xs/bold',
            className: p.newBadge,
            children: m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
        }),
    D = (e) => {
        let { classification: t } = e,
            { id: s, description: r } = t,
            c = d.default.extractTimestamp(s),
            _ = (0, I.e)(t),
            u = (0, E.B)('violations_container'),
            S = i.useMemo(() => {
                var e, n, i;
                let s = {
                    description: r,
                    descriptionHook: (e) =>
                        (0, a.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'heading-lg/bold',
                            children: e
                        })
                };
                if (!(u && (0, A.FB)(t))) return m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format(s);
                return (null == t ? void 0 : null === (e = t.guild_metadata) || void 0 === e ? void 0 : e.member_type) === T.wO.OWNER
                    ? m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
                          ...s,
                          guildName: null == t ? void 0 : null === (n = t.guild_metadata) || void 0 === n ? void 0 : n.name
                      })
                    : m.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
                          guildName: null == t ? void 0 : null === (i = t.guild_metadata) || void 0 === i ? void 0 : i.name,
                          classification_type: s.description,
                          classificationHook: s.descriptionHook
                      });
            }, [t, r, u]);
        return (0, a.jsx)(
            o.Clickable,
            {
                onClick: () => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('22878'), n.e('25183'), n.e('46097'), n.e('18831'), n.e('92999')]).then(n.bind(n, 41164));
                        return (t) =>
                            (0, a.jsx)(e, {
                                classificationId: s,
                                source: f.s.StandingTab,
                                ...t
                            });
                    });
                },
                className: l()(p.itemDetail, { [p.itemDetailNew]: _ }),
                children: (0, a.jsxs)('div', {
                    className: p.descriptionContainer,
                    children: [
                        _ ? (0, a.jsx)(v, {}) : (0, a.jsx)(x, { timestamp: c }),
                        (0, a.jsx)(o.Heading, {
                            variant: 'heading-lg/normal',
                            children: S
                        })
                    ]
                })
            },
            s
        );
    },
    F = (e) => {
        let { status: t, classifications: n } = e,
            [s, l] = i.useState(!1),
            [c, _] = i.useState(3),
            d = (0, N.P)(),
            E = (0, r.e7)([S.Z], () => S.Z.getIsDsaEligible()),
            T = i.useMemo(() => n.slice(0, c), [n, c]);
        i.useEffect(() => {
            s &&
                u.default.track(C.rMx.SAFETY_HUB_ACTION, {
                    action: f.n0.ViewViolationsDropdown,
                    account_standing: d.state,
                    classification_ids: T.map((e) => Number(e.id)),
                    source: f.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: E
                });
        }, [s, d.state, T, E]);
        let A = n.length - T.length > 3 ? 3 : n.length - T.length;
        return (0, a.jsxs)('div', {
            className: p.dropdown,
            children: [
                (0, a.jsx)(U, {
                    status: t,
                    onClick: () => l((e) => !e),
                    opened: s,
                    count: n.length
                }),
                s &&
                    (0, a.jsxs)('div', {
                        className: p.items,
                        children: [
                            (0, a.jsx)(o.TabBar.Separator, {
                                style: {
                                    height: '1px',
                                    width: '100%'
                                }
                            }),
                            T.length > 0 && T.map((e) => (0, a.jsx)(D, { classification: e }, e.id)),
                            T.length < n.length &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(o.TabBar.Separator, {
                                            style: {
                                                height: '1px',
                                                width: '100%'
                                            }
                                        }),
                                        (0, a.jsx)('button', {
                                            className: p.paginationButton,
                                            onClick: () => _((e) => e + A),
                                            children: m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({ nextPageSize: A })
                                        })
                                    ]
                                }),
                            0 === T.length && 'active' === t && (0, a.jsx)(h, {}),
                            0 === T.length && 'expired' === t && (0, a.jsx)(O, {})
                        ]
                    })
            ]
        });
    },
    R = () => {
        let e = (0, g.y9)(),
            t = (0, g.KM)();
        return 0 === e.length && 0 === t.length
            ? null
            : (0, a.jsxs)('div', {
                  children: [
                      (0, a.jsx)(F, {
                          status: 'active',
                          classifications: e
                      }),
                      (0, a.jsx)(F, {
                          status: 'expired',
                          classifications: t
                      })
                  ]
              });
    };
