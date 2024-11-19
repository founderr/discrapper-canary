n.d(t, {
    cS: function () {
        return I;
    },
    xV: function () {
        return A;
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
    u = n(686546);
n(216742), n(246364), n(937111), n(703656), n(271383), n(594174);
var c = n(970606),
    d = n(963202);
n(905362);
var f = n(603368),
    _ = n(353093),
    p = n(449480),
    h = n(114487),
    m = n(214715),
    g = n(550271),
    E = n(308083);
n(981631);
var v = n(388032),
    b = n(285115);
function I(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== E.U6).join(', '),
        s = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING),
        l = (0, f.pX)(n, s.hex()),
        u = i.useRef(null),
        [c, d] = i.useState(!1);
    if (
        (i.useEffect(() => {
            let e = u.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && d(e.offsetWidth < e.scrollWidth);
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
                shouldShow: c,
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
function S(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: a } = e,
        l = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    m.Z,
                    {
                        className: s()(b.thinTrait, { [b.selectedTrait]: l.has(e) }),
                        text: e,
                        selected: l.has(e)
                    },
                    e
                ),
            [l]
        ),
        c = i.useCallback(
            (e) =>
                (0, r.jsx)(o.HorizontalOverflowListTooltip, {
                    items: e,
                    renderItem: u,
                    onTooltipShow: a
                }),
            [u, a]
        );
    return (0, r.jsx)(o.HorizontalOverflowList, {
        className: b.traitsContainer,
        items: t,
        renderItem: u,
        renderOverflow: c,
        maxLines: 2,
        itemGapPx: 4
    });
}
function y(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: b.headerBadge,
            children: [
                (0, r.jsx)(o.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: v.intl.string(v.t['J+MVEx'])
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
                    children: v.intl.string(v.t.cEnaW1)
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
                    children: v.intl.string(v.t['76GQ2t'])
                })
            ]
        });
    return null;
}
function A(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: f, isMember: m = !1, traitsToHighlight: A, prioritizedGameIds: N, className: C, position: R, showBrandingFooter: O = !1, bannerUrl: D, onlyAnimateIconOnHover: L = !1, hasPendingJoinRequest: x = !1, atMaxMemberCapacity: w = !1, footer: M = null } = e,
        {
            tag: P,
            badge: k,
            branding: { primaryColor: U, secondaryColor: B },
            bannerHash: G,
            gameActivity: Z
        } = n,
        F = (0, l.Z)(n.games),
        V = (0, d.iN)('clan_discovery_card'),
        [j, H] = i.useState(!1),
        Y = i.useRef(null),
        [W, K] = i.useState(!1),
        z = i.useCallback(() => {
            H(!0);
        }, []),
        q = i.useCallback(() => {
            H(!1);
        }, []),
        Q = v.intl.formatToPlainString(v.t['0WHArK'], { count: n.memberCount }),
        X = null != D ? D : (0, _.pY)(n.id, G),
        J = null == a && null == X ? { background: 'linear-gradient(90deg, '.concat(U, ', ').concat(B, ')') } : void 0,
        $ =
            null != a
                ? a
                : null != X
                  ? (0, r.jsx)('img', {
                        alt: v.intl.string(v.t.nH6S2d),
                        src: X,
                        className: b.bannerImage
                    })
                  : null,
        ee = i.useMemo(() => (0, E.HR)(n.traits, A), [n.traits, A]);
    i.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && K(e.offsetWidth < e.scrollWidth);
    }, []);
    let et = i.useCallback(
        (e) => () => {
            (0, c.Gh)({
                position: R,
                guildId: n.id,
                feature: e
            });
        },
        [R, n.id]
    );
    return (0, r.jsxs)('div', {
        className: s()(b.card, { [b.cardStaticHeight]: !f }, C),
        onMouseEnter: z,
        onMouseLeave: q,
        children: [
            (0, r.jsxs)('div', {
                className: b.cardBrandingHeader,
                style: J,
                children: [
                    $,
                    (0, r.jsx)(y, {
                        hasPendingJoinRequest: x,
                        atMaxMemberCapacity: w,
                        isGuildMember: m
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
                                    (0, r.jsx)(u.ZP, {
                                        mask: u.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: b.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: b.clanIconInner,
                                            children: (0, r.jsx)(h.b, {
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
                                            text: v.intl.string(v.t.UfpB2d),
                                            position: 'top',
                                            onTooltipShow: et('tag'),
                                            shouldShow: !m && V,
                                            children: (e) =>
                                                (0, r.jsxs)('div', {
                                                    ...e,
                                                    className: b.clanTagChiplet,
                                                    children: [
                                                        (0, r.jsx)(g.A, {
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
                                            'aria-label': v.intl.string(v.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: b.clanInfoItem,
                                        children: null !== (t = (0, E.mv)(n.playstyle)) && void 0 !== t ? t : v.intl.string(v.t.JijC4O)
                                    }),
                                    (0, r.jsx)(I, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        description: n.description,
                        expanded: f
                    }),
                    (0, r.jsx)(S, {
                        traits: ee,
                        traitsToHighlight: A,
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
                        children: (0, r.jsx)(p.Z, {
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
