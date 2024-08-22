n.d(t, {
    cS: function () {
        return U;
    },
    xV: function () {
        return k;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(143927),
    l = n(481060),
    u = n(442837),
    c = n(239091),
    d = n(835473),
    _ = n(970606),
    E = n(963202),
    f = n(905362),
    h = n(603368),
    p = n(353093),
    I = n(169559),
    m = n(114487),
    T = n(214715),
    g = n(550271),
    S = n(686546),
    A = n(246364),
    N = n(937111),
    O = n(703656),
    v = n(271383),
    R = n(594174),
    C = n(778045),
    y = n(207796),
    D = n(355932),
    L = n(981631),
    b = n(308083),
    M = n(689938),
    P = n(621453);
function U(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== b.U6).join(', '),
        s = (0, l.useToken)(l.tokens.colors.BACKGROUND_FLOATING),
        o = (0, h.pX)(n, s.hex()),
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
    let _ = null != o ? { color: o.css() } : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: P.clanInfoItem,
                children: '\xB7'
            }),
            (0, r.jsx)(l.Tooltip, {
                text: a,
                color: l.Tooltip.Colors.PRIMARY,
                shouldShow: c,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        style: _,
                        className: P.wildCardText,
                        ref: u,
                        children: a
                    })
            })
        ]
    });
}
function w(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: P.cardContentDescriptionSection,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: P.cardContentDescriptionSection,
                children: (0, r.jsx)(l.Text, {
                    className: P.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function x(e) {
    let { traits: t, traitsToHighlight: n } = e,
        a = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        o = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    T.Z,
                    {
                        className: s()(P.thinTrait, { [P.selectedTrait]: a.has(e) }),
                        text: e,
                        selected: a.has(e)
                    },
                    e
                ),
            [a]
        );
    return (0, r.jsx)(D.ZP, {
        className: P.traitsContainer,
        items: t,
        renderItem: o,
        maxLines: 2,
        itemGapPx: 4
    });
}
function G(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: P.headerBadge,
            children: [
                (0, r.jsx)(l.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: M.Z.Messages.CLAN_CARD_BADGE_APPLIED
                })
            ]
        });
    if (i)
        return (0, r.jsxs)('div', {
            className: P.headerBadge,
            children: [
                (0, r.jsx)(l.CircleCheckIcon, {
                    size: 'xxs',
                    color: l.tokens.colors.STATUS_POSITIVE
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: M.Z.Messages.JOINED_GUILD
                })
            ]
        });
    if (n)
        return (0, r.jsxs)('div', {
            className: P.headerBadge,
            children: [
                (0, r.jsx)(l.LockIcon, { size: 'xxs' }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: M.Z.Messages.FULL
                })
            ]
        });
    return null;
}
function k(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: u, isMember: c = !1, traitsToHighlight: f, prioritizedGameIds: h, className: T, position: A, showBrandingFooter: N = !1, showFavoriteButton: O = !1, bannerUrl: v, onlyAnimateIconOnHover: R = !1, hasPendingJoinRequest: D = !1, atMaxMemberCapacity: L = !1 } = e,
        {
            tag: k,
            badge: B,
            branding: { primaryColor: F, secondaryColor: V },
            bannerHash: H,
            gameActivity: Z
        } = n,
        Y = (0, d.Z)(n.games),
        j = (0, I.Z)('clan_discovery_card'),
        [W, K] = i.useState(!1),
        z = i.useRef(null),
        [q, Q] = i.useState(!1),
        X = (0, y.GN)((e) => e.savedGuildIds.includes(n.id), o.Z),
        $ = (0, E.iN)('guild_card'),
        J = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (0, _.j$)({
                        position: A,
                        guildId: n.id,
                        isFavorited: !X
                    }),
                    (0, y.qQ)(n.id, !X);
            },
            [n.id, X, A]
        ),
        ee = i.useCallback(() => {
            K(!0);
        }, []),
        et = i.useCallback(() => {
            K(!1);
        }, []),
        en = M.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: n.memberCount }),
        er = null != v ? v : (0, p.pY)(n.id, H),
        ei = null == a && null == er ? { background: 'linear-gradient(90deg, '.concat(F, ', ').concat(V, ')') } : void 0,
        ea =
            null != a
                ? a
                : null != er
                  ? (0, r.jsx)('img', {
                        alt: M.Z.Messages.CLAN_LOOK_BANNER,
                        src: er,
                        className: P.bannerImage
                    })
                  : null,
        es = i.useMemo(() => (0, b.HR)(n.traits, f), [n.traits, f]);
    i.useEffect(() => {
        let e = z.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && Q(e.offsetWidth < e.scrollWidth);
    }, []);
    let eo = i.useCallback(
            (e) => () => {
                (0, _.Gh)({
                    position: A,
                    guildId: n.id,
                    feature: e
                });
            },
            [A, n.id]
        ),
        el = $ && (O || W || X);
    return (0, r.jsxs)('div', {
        className: s()(P.card, T, { [P.cardStaticHeight]: !u }),
        onMouseEnter: ee,
        onMouseLeave: et,
        children: [
            (0, r.jsxs)('div', {
                className: P.cardBrandingHeader,
                style: ei,
                children: [
                    ea,
                    (0, r.jsx)(G, {
                        hasPendingJoinRequest: D,
                        atMaxMemberCapacity: L,
                        isGuildMember: c
                    }),
                    $ &&
                        (0, r.jsx)(l.Clickable, {
                            className: s()(P.favoriteButton, el && P.shownFavoriteButton),
                            onClick: J,
                            focusProps: { enabled: el },
                            children: X
                                ? (0, r.jsx)(l.HeartIcon, {
                                      color: l.tokens.colors.INFO_DANGER_FOREGROUND,
                                      size: 'custom',
                                      width: 18,
                                      height: 18
                                  })
                                : (0, r.jsx)(l.HeartOutlineIcon, {
                                      color: l.tokens.colors.HEADER_PRIMARY,
                                      size: 'custom',
                                      width: 18,
                                      height: 18
                                  })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: P.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(S.ZP, {
                                        mask: S.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: P.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: P.clanIconInner,
                                            children: (0, r.jsx)(m.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !R || W
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: P.clanTagChipletWrapper,
                                        children: (0, r.jsx)(l.Tooltip, {
                                            text: M.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                            position: 'top',
                                            onTooltipShow: eo('tag'),
                                            shouldShow: !c && j,
                                            children: (e) =>
                                                (0, r.jsxs)('div', {
                                                    ...e,
                                                    className: P.clanTagChiplet,
                                                    children: [
                                                        (0, r.jsx)(g.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: B.badgeKind,
                                                            primaryTintColor: B.primaryColor,
                                                            secondaryTintColor: B.secondaryColor
                                                        }),
                                                        (0, r.jsx)(l.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: k
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.Heading, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, r.jsx)(l.Tooltip, {
                                    text: n.name,
                                    color: l.Tooltip.Colors.PRIMARY,
                                    shouldShow: q,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            ref: z,
                                            className: P.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: P.clanInfoRow,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xxs/normal',
                                        className: P.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': M.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: P.clanInfoItem,
                                        children: null !== (t = (0, b.mv)(n.playstyle)) && void 0 !== t ? t : M.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                                    }),
                                    (0, r.jsx)(U, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(w, {
                        description: n.description,
                        expanded: u
                    }),
                    (0, r.jsx)(x, {
                        traits: es,
                        traitsToHighlight: f
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: P.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: P.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: P.cardFooterMembers,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: en
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: P.cardFooterGames,
                        children: (0, r.jsx)(C.Z, {
                            games: Y,
                            prioritizedGameIds: h,
                            gameActivity: Z
                        })
                    })
                ]
            }),
            N &&
                (0, r.jsx)('div', {
                    className: P.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(F, ', ').concat(V, ')') }
                })
        ]
    });
}
t.ZP = function (e) {
    let { style: t, prioritizedGameIds: a, ...s } = e,
        { clan: o, affinity: d, index: E, position: h, source: p } = s,
        I = (0, u.e7)([R.default], () => R.default.getCurrentUser()),
        m = (0, u.e7)([v.ZP], () => v.ZP.isMember(o.id, null == I ? void 0 : I.id), [o, I]),
        T = (0, u.e7)([N.Z], () => {
            var e;
            return (null === (e = N.Z.getRequest(o.id)) || void 0 === e ? void 0 : e.applicationStatus) === A.wB.SUBMITTED;
        }),
        g = o.memberCount >= b.Du,
        S = i.useCallback(() => {
            let e = null != N.Z.getRequest(o.id);
            if (
                ((0, _.EK)({
                    guildId: o.id,
                    isMember: m,
                    hasJoinRequest: e,
                    affinity: d,
                    index: E,
                    position: h
                }),
                m)
            ) {
                (0, O.XU)(o.id);
                return;
            }
            if (e) {
                (0, O.uL)(L.Z5c.GUILD_MEMBER_VERIFICATION(o.id));
                return;
            }
            (0, f.qF)(
                o.id,
                o,
                {
                    source: p,
                    location: L.Sbl.CLAN_DISCOVERY_CARD
                },
                a,
                h
            );
        }, [o, m, d, E, p, a, h]),
        C = i.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('5577').then(n.bind(n, 955120));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            guildId: o.id
                        });
                });
            },
            [o.id]
        );
    return (0, r.jsx)(l.Clickable, {
        onClick: S,
        className: P.clickableCard,
        style: t,
        onContextMenu: C,
        children: (0, r.jsx)(k, {
            ...s,
            isMember: m,
            prioritizedGameIds: a,
            showBrandingFooter: !0,
            hasPendingJoinRequest: T,
            atMaxMemberCapacity: g
        })
    });
};
