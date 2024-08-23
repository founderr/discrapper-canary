n.d(t, {
    cS: function () {
        return w;
    },
    xV: function () {
        return B;
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
    d = n(434650),
    _ = n(835473),
    E = n(970606),
    f = n(963202),
    h = n(905362),
    p = n(603368),
    I = n(353093),
    m = n(169559),
    T = n(114487),
    g = n(214715),
    S = n(550271),
    A = n(686546),
    N = n(246364),
    O = n(937111),
    v = n(703656),
    R = n(271383),
    C = n(594174),
    y = n(778045),
    D = n(207796),
    L = n(355932),
    b = n(981631),
    M = n(308083),
    P = n(689938),
    U = n(621453);
function w(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== M.U6).join(', '),
        s = (0, l.useToken)(l.tokens.colors.BACKGROUND_FLOATING),
        o = (0, p.pX)(n, s.hex()),
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
                className: U.clanInfoItem,
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
                        className: U.wildCardText,
                        ref: u,
                        children: a
                    })
            })
        ]
    });
}
function x(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: U.cardContentDescriptionSection,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: U.cardContentDescriptionSection,
                children: (0, r.jsx)(l.Text, {
                    className: U.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function G(e) {
    let { traits: t, traitsToHighlight: n } = e,
        a = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        o = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    g.Z,
                    {
                        className: s()(U.thinTrait, { [U.selectedTrait]: a.has(e) }),
                        text: e,
                        selected: a.has(e)
                    },
                    e
                ),
            [a]
        );
    return (0, r.jsx)(L.ZP, {
        className: U.traitsContainer,
        items: t,
        renderItem: o,
        maxLines: 2,
        itemGapPx: 4
    });
}
function k(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: U.headerBadge,
            children: [
                (0, r.jsx)(l.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: P.Z.Messages.CLAN_CARD_BADGE_APPLIED
                })
            ]
        });
    if (i)
        return (0, r.jsxs)('div', {
            className: U.headerBadge,
            children: [
                (0, r.jsx)(l.CircleCheckIcon, {
                    size: 'xxs',
                    color: l.tokens.colors.STATUS_POSITIVE
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: P.Z.Messages.JOINED_GUILD
                })
            ]
        });
    if (n)
        return (0, r.jsxs)('div', {
            className: U.headerBadge,
            children: [
                (0, r.jsx)(l.LockIcon, { size: 'xxs' }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: P.Z.Messages.FULL
                })
            ]
        });
    return null;
}
function B(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: u, isMember: c = !1, traitsToHighlight: d, prioritizedGameIds: h, className: p, position: g, showBrandingFooter: N = !1, showFavoriteButton: O = !1, bannerUrl: v, onlyAnimateIconOnHover: R = !1, hasPendingJoinRequest: C = !1, atMaxMemberCapacity: L = !1 } = e,
        {
            tag: b,
            badge: B,
            branding: { primaryColor: F, secondaryColor: V },
            bannerHash: H,
            gameActivity: Z
        } = n,
        Y = (0, _.Z)(n.games),
        j = (0, m.Z)('clan_discovery_card'),
        [W, K] = i.useState(!1),
        z = i.useRef(null),
        [q, Q] = i.useState(!1),
        X = (0, D.GN)((e) => e.savedGuildIds.includes(n.id), o.Z),
        $ = (0, f.iN)('guild_card'),
        J = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (0, E.j$)({
                        position: g,
                        guildId: n.id,
                        isFavorited: !X
                    }),
                    (0, D.qQ)(n.id, !X);
            },
            [n.id, X, g]
        ),
        ee = i.useCallback(() => {
            K(!0);
        }, []),
        et = i.useCallback(() => {
            K(!1);
        }, []),
        en = P.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: n.memberCount }),
        er = null != v ? v : (0, I.pY)(n.id, H),
        ei = null == a && null == er ? { background: 'linear-gradient(90deg, '.concat(F, ', ').concat(V, ')') } : void 0,
        ea =
            null != a
                ? a
                : null != er
                  ? (0, r.jsx)('img', {
                        alt: P.Z.Messages.CLAN_LOOK_BANNER,
                        src: er,
                        className: U.bannerImage
                    })
                  : null,
        es = i.useMemo(() => (0, M.HR)(n.traits, d), [n.traits, d]);
    i.useEffect(() => {
        let e = z.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && Q(e.offsetWidth < e.scrollWidth);
    }, []);
    let eo = i.useCallback(
            (e) => () => {
                (0, E.Gh)({
                    position: g,
                    guildId: n.id,
                    feature: e
                });
            },
            [g, n.id]
        ),
        el = $ && (O || W || X);
    return (0, r.jsxs)('div', {
        className: s()(U.card, p, { [U.cardStaticHeight]: !u }),
        onMouseEnter: ee,
        onMouseLeave: et,
        children: [
            (0, r.jsxs)('div', {
                className: U.cardBrandingHeader,
                style: ei,
                children: [
                    ea,
                    (0, r.jsx)(k, {
                        hasPendingJoinRequest: C,
                        atMaxMemberCapacity: L,
                        isGuildMember: c
                    }),
                    $ &&
                        (0, r.jsx)(l.Clickable, {
                            className: s()(U.favoriteButton, el && U.shownFavoriteButton),
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
                className: U.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: U.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: U.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(A.ZP, {
                                        mask: A.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: U.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: U.clanIconInner,
                                            children: (0, r.jsx)(T.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !R || W
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: U.clanTagChipletWrapper,
                                        children: (0, r.jsx)(l.Tooltip, {
                                            text: P.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                            position: 'top',
                                            onTooltipShow: eo('tag'),
                                            shouldShow: !c && j,
                                            children: (e) =>
                                                (0, r.jsxs)('div', {
                                                    ...e,
                                                    className: U.clanTagChiplet,
                                                    children: [
                                                        (0, r.jsx)(S.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: B.badgeKind,
                                                            primaryTintColor: B.primaryColor,
                                                            secondaryTintColor: B.secondaryColor
                                                        }),
                                                        (0, r.jsx)(l.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: b
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
                                            className: U.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: U.clanInfoRow,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xxs/normal',
                                        className: U.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': P.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: U.clanInfoItem,
                                        children: null !== (t = (0, M.mv)(n.playstyle)) && void 0 !== t ? t : P.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                                    }),
                                    (0, r.jsx)(w, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(x, {
                        description: n.description,
                        expanded: u
                    }),
                    (0, r.jsx)(G, {
                        traits: es,
                        traitsToHighlight: d
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: U.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: U.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: U.cardFooterMembers,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: en
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: U.cardFooterGames,
                        children: (0, r.jsx)(y.Z, {
                            games: Y,
                            prioritizedGameIds: h,
                            gameActivity: Z
                        })
                    })
                ]
            }),
            N &&
                (0, r.jsx)('div', {
                    className: U.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(F, ', ').concat(V, ')') }
                })
        ]
    });
}
t.ZP = function (e) {
    let { style: t, prioritizedGameIds: a, onVisibilityChange: s = () => {}, ...o } = e,
        { clan: _, affinity: f, index: p, position: I, source: m } = o,
        T = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
        g = (0, u.e7)([R.ZP], () => R.ZP.isMember(_.id, null == T ? void 0 : T.id), [_, T]),
        S = (0, u.e7)([O.Z], () => {
            var e;
            return (null === (e = O.Z.getRequest(_.id)) || void 0 === e ? void 0 : e.applicationStatus) === N.wB.SUBMITTED;
        }),
        A = _.memberCount >= M.Du,
        y = i.useRef(-1),
        D = i.useCallback((e) => s(e, y), [s]),
        L = (0, d.O)(D, 1);
    i.useEffect(
        () => () => {
            null == s || s(!1, y);
        },
        [s]
    );
    let P = i.useCallback(() => {
            let e = null != O.Z.getRequest(_.id);
            if (
                ((0, E.EK)({
                    guildId: _.id,
                    isMember: g,
                    hasJoinRequest: e,
                    affinity: f,
                    index: p,
                    position: I
                }),
                g)
            ) {
                (0, v.XU)(_.id);
                return;
            }
            if (e) {
                (0, v.uL)(b.Z5c.GUILD_MEMBER_VERIFICATION(_.id));
                return;
            }
            (0, h.qF)(
                _.id,
                _,
                {
                    source: m,
                    location: b.Sbl.CLAN_DISCOVERY_CARD
                },
                a,
                I
            );
        }, [_, g, f, p, m, a, I]),
        w = i.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('5577').then(n.bind(n, 955120));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            guildId: _.id
                        });
                });
            },
            [_.id]
        );
    return (0, r.jsx)('div', {
        ref: L,
        children: (0, r.jsx)(l.Clickable, {
            onClick: P,
            className: U.clickableCard,
            style: t,
            onContextMenu: w,
            children: (0, r.jsx)(B, {
                ...o,
                isMember: g,
                prioritizedGameIds: a,
                showBrandingFooter: !0,
                hasPendingJoinRequest: S,
                atMaxMemberCapacity: A
            })
        })
    });
};
