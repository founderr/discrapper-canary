n.d(t, {
    cS: function () {
        return S;
    },
    xV: function () {
        return N;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060);
n(442837), n(239091), n(434650);
var l = n(835473),
    u = n(970606);
n(963202), n(905362);
var c = n(603368),
    d = n(353093),
    f = n(169559),
    _ = n(114487),
    p = n(214715),
    h = n(550271),
    m = n(686546);
n(216742), n(246364), n(937111), n(703656), n(271383), n(594174);
var g = n(778045),
    E = n(355932);
n(981631);
var v = n(308083),
    I = n(388032),
    b = n(68118);
function S(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== v.U6).join(', '),
        s = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING),
        l = (0, c.pX)(n, s.hex()),
        u = i.useRef(null),
        [d, f] = i.useState(!1);
    if (
        (i.useEffect(() => {
            let e = u.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === a.length)
    )
        return null;
    let _ = null != l ? { color: l.css() } : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: b.clanInfoItem,
                children: '\xB7'
            }),
            (0, r.jsx)(o.Tooltip, {
                text: a,
                color: o.Tooltip.Colors.PRIMARY,
                shouldShow: d,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        style: _,
                        className: b.wildCardText,
                        ref: u,
                        children: a
                    })
            })
        ]
    });
}
function T(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: b.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: b.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    className: b.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function y(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: a } = e,
        o = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        l = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    p.Z,
                    {
                        className: s()(b.thinTrait, { [b.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(E.te, {
                    items: e,
                    renderItem: l,
                    onTooltipShow: a
                }),
            [l, a]
        );
    return (0, r.jsx)(E.ZP, {
        className: b.traitsContainer,
        items: t,
        renderItem: l,
        renderOverflow: u,
        maxLines: 2,
        itemGapPx: 4
    });
}
function A(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: b.headerBadge,
            children: [
                (0, r.jsx)(o.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: I.intl.string(I.t['J+MVEx'])
                })
            ]
        });
    if (i)
        return (0, r.jsxs)('div', {
            className: b.headerBadge,
            children: [
                (0, r.jsx)(o.CircleCheckIcon, {
                    size: 'xxs',
                    color: o.tokens.colors.STATUS_POSITIVE
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: I.intl.string(I.t.cEnaW1)
                })
            ]
        });
    if (n)
        return (0, r.jsxs)('div', {
            className: b.headerBadge,
            children: [
                (0, r.jsx)(o.LockIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: I.intl.string(I.t['76GQ2t'])
                })
            ]
        });
    return null;
}
function N(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: c, isMember: p = !1, traitsToHighlight: E, prioritizedGameIds: N, className: C, position: R, showBrandingFooter: O = !1, bannerUrl: D, onlyAnimateIconOnHover: L = !1, hasPendingJoinRequest: x = !1, atMaxMemberCapacity: w = !1, footer: M = null } = e,
        {
            tag: P,
            badge: k,
            branding: { primaryColor: U, secondaryColor: B },
            bannerHash: G,
            gameActivity: Z
        } = n,
        F = (0, l.Z)(n.games),
        V = (0, f.Z)('clan_discovery_card'),
        [j, H] = i.useState(!1),
        Y = i.useRef(null),
        [W, K] = i.useState(!1),
        z = i.useCallback(() => {
            H(!0);
        }, []),
        q = i.useCallback(() => {
            H(!1);
        }, []),
        Q = I.intl.formatToPlainString(I.t['0WHArK'], { count: n.memberCount }),
        X = null != D ? D : (0, d.pY)(n.id, G),
        J = null == a && null == X ? { background: 'linear-gradient(90deg, '.concat(U, ', ').concat(B, ')') } : void 0,
        $ =
            null != a
                ? a
                : null != X
                  ? (0, r.jsx)('img', {
                        alt: I.intl.string(I.t.nH6S2d),
                        src: X,
                        className: b.bannerImage
                    })
                  : null,
        ee = i.useMemo(() => (0, v.HR)(n.traits, E), [n.traits, E]);
    i.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && K(e.offsetWidth < e.scrollWidth);
    }, []);
    let et = i.useCallback(
        (e) => () => {
            (0, u.Gh)({
                position: R,
                guildId: n.id,
                feature: e
            });
        },
        [R, n.id]
    );
    return (0, r.jsxs)('div', {
        className: s()(b.card, { [b.cardStaticHeight]: !c }, C),
        onMouseEnter: z,
        onMouseLeave: q,
        children: [
            (0, r.jsxs)('div', {
                className: b.cardBrandingHeader,
                style: J,
                children: [
                    $,
                    (0, r.jsx)(A, {
                        hasPendingJoinRequest: x,
                        atMaxMemberCapacity: w,
                        isGuildMember: p
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: b.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: b.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(m.ZP, {
                                        mask: m.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: b.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: b.clanIconInner,
                                            children: (0, r.jsx)(_.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !L || j
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: b.clanTagChipletWrapper,
                                        children: (0, r.jsx)(o.Tooltip, {
                                            text: I.intl.string(I.t.UfpB2d),
                                            position: 'top',
                                            onTooltipShow: et('tag'),
                                            shouldShow: !p && V,
                                            children: (e) =>
                                                (0, r.jsxs)('div', {
                                                    ...e,
                                                    className: b.clanTagChiplet,
                                                    children: [
                                                        (0, r.jsx)(h.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: k.badgeKind,
                                                            primaryTintColor: k.primaryColor,
                                                            secondaryTintColor: k.secondaryColor
                                                        }),
                                                        (0, r.jsx)(o.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: P
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(o.Heading, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, r.jsx)(o.Tooltip, {
                                    text: n.name,
                                    color: o.Tooltip.Colors.PRIMARY,
                                    shouldShow: W,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            ref: Y,
                                            className: b.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: b.clanInfoRow,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xxs/normal',
                                        className: b.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': I.intl.string(I.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: b.clanInfoItem,
                                        children: null !== (t = (0, v.mv)(n.playstyle)) && void 0 !== t ? t : I.intl.string(I.t.JijC4O)
                                    }),
                                    (0, r.jsx)(S, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        description: n.description,
                        expanded: c
                    }),
                    (0, r.jsx)(y, {
                        traits: ee,
                        traitsToHighlight: E,
                        onInteraction: et('traits')
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: b.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: b.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: b.cardFooterMembers,
                            children: (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: Q
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: b.cardFooterGames,
                        children: (0, r.jsx)(g.Z, {
                            games: F,
                            prioritizedGameIds: N,
                            gameActivity: Z,
                            onInteraction: et('games')
                        })
                    })
                ]
            }),
            O &&
                (0, r.jsx)('div', {
                    className: b.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(U, ', ').concat(B, ')') }
                }),
            M
        ]
    });
}
