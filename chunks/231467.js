n.d(t, {
    cS: function () {
        return G;
    },
    xV: function () {
        return Z;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(442837),
    c = n(239091),
    d = n(434650),
    _ = n(835473),
    E = n(970606),
    f = n(963202),
    h = n(905362),
    p = n(603368),
    m = n(353093),
    I = n(169559),
    T = n(114487),
    g = n(214715),
    S = n(550271),
    A = n(686546),
    v = n(246364),
    N = n(937111),
    O = n(703656),
    R = n(271383),
    C = n(594174),
    y = n(229893),
    L = n(229765),
    b = n(778045),
    D = n(355932),
    M = n(981631),
    P = n(308083),
    U = n(689938),
    w = n(68118);
let x = 18;
function G(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        r = t.filter((e) => e !== P.U6).join(', '),
        o = (0, l.useToken)(l.tokens.colors.BACKGROUND_FLOATING),
        s = (0, p.pX)(n, o.hex()),
        u = a.useRef(null),
        [c, d] = a.useState(!1);
    if (
        (a.useEffect(() => {
            let e = u.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && d(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === r.length)
    )
        return null;
    let _ = null != s ? { color: s.css() } : void 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: w.clanInfoItem,
                children: '\xB7'
            }),
            (0, i.jsx)(l.Tooltip, {
                text: r,
                color: l.Tooltip.Colors.PRIMARY,
                shouldShow: c,
                children: (e) =>
                    (0, i.jsx)('span', {
                        ...e,
                        style: _,
                        className: w.wildCardText,
                        ref: u,
                        children: r
                    })
            })
        ]
    });
}
function k(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, i.jsx)('div', {
                className: w.cardContentDescriptionSection,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, i.jsx)('div', {
                className: w.cardContentDescriptionSection,
                children: (0, i.jsx)(l.Text, {
                    className: w.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function B(e) {
    let { traits: t, traitsToHighlight: n } = e,
        r = a.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        o = a.useCallback(
            (e) =>
                (0, i.jsx)(
                    g.Z,
                    {
                        className: s()(w.thinTrait, { [w.selectedTrait]: r.has(e) }),
                        text: e,
                        selected: r.has(e)
                    },
                    e
                ),
            [r]
        );
    return (0, i.jsx)(D.ZP, {
        className: w.traitsContainer,
        items: t,
        renderItem: o,
        maxLines: 2,
        itemGapPx: 4
    });
}
function F(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: r } = e;
    if (t)
        return (0, i.jsxs)('div', {
            className: w.headerBadge,
            children: [
                (0, i.jsx)(l.HourglassIcon, { size: 'xxs' }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: U.Z.Messages.CLAN_CARD_BADGE_APPLIED
                })
            ]
        });
    if (r)
        return (0, i.jsxs)('div', {
            className: w.headerBadge,
            children: [
                (0, i.jsx)(l.CircleCheckIcon, {
                    size: 'xxs',
                    color: l.tokens.colors.STATUS_POSITIVE
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: U.Z.Messages.JOINED_GUILD
                })
            ]
        });
    if (n)
        return (0, i.jsxs)('div', {
            className: w.headerBadge,
            children: [
                (0, i.jsx)(l.LockIcon, { size: 'xxs' }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: U.Z.Messages.FULL
                })
            ]
        });
    return null;
}
function Z(e) {
    var t;
    let { clan: n, bannerComponent: r, expanded: o, isMember: c = !1, traitsToHighlight: d, prioritizedGameIds: h, className: p, position: g, showBrandingFooter: v = !1, showFavoriteButton: N = !1, bannerUrl: O, onlyAnimateIconOnHover: R = !1, hasPendingJoinRequest: C = !1, atMaxMemberCapacity: D = !1 } = e,
        {
            tag: M,
            badge: Z,
            branding: { primaryColor: V, secondaryColor: H },
            bannerHash: Y,
            gameActivity: j
        } = n,
        W = (0, _.Z)(n.games),
        K = (0, I.Z)('clan_discovery_card'),
        [z, q] = a.useState(!1),
        Q = a.useRef(null),
        [X, $] = a.useState(!1),
        [J, ee] = a.useState(!1),
        et = (0, u.e7)([y.Z], () => y.Z.isSavedGuildId(n.id)),
        en = (0, f.iN)('guild_card'),
        er = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    ee(!0),
                    (0, E.j$)({
                        position: g,
                        guildId: n.id,
                        isFavorited: !et
                    }),
                    et ? (0, L.SI)(n.id) : (0, L.EV)(n.id);
            },
            [n.id, et, g]
        ),
        ei = a.useCallback(() => {
            q(!0);
        }, []),
        ea = a.useCallback(() => {
            q(!1);
        }, []),
        eo = U.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: n.memberCount }),
        es = null != O ? O : (0, m.pY)(n.id, Y),
        el = null == r && null == es ? { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(H, ')') } : void 0,
        eu =
            null != r
                ? r
                : null != es
                  ? (0, i.jsx)('img', {
                        alt: U.Z.Messages.CLAN_LOOK_BANNER,
                        src: es,
                        className: w.bannerImage
                    })
                  : null,
        ec = a.useMemo(() => (0, P.HR)(n.traits, d), [n.traits, d]);
    a.useEffect(() => {
        let e = Q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && $(e.offsetWidth < e.scrollWidth);
    }, []);
    let ed = a.useCallback(
            (e) => () => {
                (0, E.Gh)({
                    position: g,
                    guildId: n.id,
                    feature: e
                });
            },
            [g, n.id]
        ),
        e_ = en && (N || z || et);
    return (0, i.jsxs)('div', {
        className: s()(w.card, p, { [w.cardStaticHeight]: !o }),
        onMouseEnter: ei,
        onMouseLeave: ea,
        children: [
            (0, i.jsxs)('div', {
                className: w.cardBrandingHeader,
                style: el,
                children: [
                    eu,
                    (0, i.jsx)(F, {
                        hasPendingJoinRequest: C,
                        atMaxMemberCapacity: D,
                        isGuildMember: c
                    }),
                    en &&
                        (0, i.jsx)(l.Clickable, {
                            className: s()(w.favoriteButton, e_ && w.shownFavoriteButton, {
                                [w.animateButtonIn]: J && et,
                                [w.animateButtonOut]: J && !et
                            }),
                            onClick: er,
                            focusProps: { enabled: e_ },
                            children: et
                                ? (0, i.jsx)(l.HeartIcon, {
                                      color: l.tokens.colors.INFO_DANGER_FOREGROUND,
                                      size: 'custom',
                                      width: x,
                                      height: x
                                  })
                                : (0, i.jsx)(l.HeartOutlineIcon, {
                                      color: l.tokens.colors.HEADER_PRIMARY,
                                      size: 'custom',
                                      width: x,
                                      height: x
                                  })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: w.cardContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: w.cardContentTitleSection,
                        children: [
                            (0, i.jsxs)('div', {
                                className: w.cardNameAndTagWrapper,
                                children: [
                                    (0, i.jsx)(A.ZP, {
                                        mask: A.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: w.clanIconMask,
                                        children: (0, i.jsx)('div', {
                                            className: w.clanIconInner,
                                            children: (0, i.jsx)(T.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !R || z
                                            })
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: w.clanTagChipletWrapper,
                                        children: (0, i.jsx)(l.Tooltip, {
                                            text: U.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                            position: 'top',
                                            onTooltipShow: ed('tag'),
                                            shouldShow: !c && K,
                                            children: (e) =>
                                                (0, i.jsxs)('div', {
                                                    ...e,
                                                    className: w.clanTagChiplet,
                                                    children: [
                                                        (0, i.jsx)(S.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: Z.badgeKind,
                                                            primaryTintColor: Z.primaryColor,
                                                            secondaryTintColor: Z.secondaryColor
                                                        }),
                                                        (0, i.jsx)(l.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: M
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, i.jsx)(l.Tooltip, {
                                    text: n.name,
                                    color: l.Tooltip.Colors.PRIMARY,
                                    shouldShow: X,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ...e,
                                            ref: Q,
                                            className: w.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: w.clanInfoRow,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xxs/normal',
                                        className: w.clanInfoItem,
                                        children: (0, i.jsx)('span', {
                                            role: 'img',
                                            'aria-label': U.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: w.clanInfoItem,
                                        children: null !== (t = (0, P.mv)(n.playstyle)) && void 0 !== t ? t : U.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                                    }),
                                    (0, i.jsx)(G, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(k, {
                        description: n.description,
                        expanded: o
                    }),
                    (0, i.jsx)(B, {
                        traits: ec,
                        traitsToHighlight: d
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: w.cardFooter,
                children: [
                    (0, i.jsx)('div', {
                        className: w.cardFooterInfo,
                        children: (0, i.jsx)('div', {
                            className: w.cardFooterMembers,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: eo
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: w.cardFooterGames,
                        children: (0, i.jsx)(b.Z, {
                            games: W,
                            prioritizedGameIds: h,
                            gameActivity: j
                        })
                    })
                ]
            }),
            v &&
                (0, i.jsx)('div', {
                    className: w.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(H, ')') }
                })
        ]
    });
}
function V(e) {
    let { style: t, prioritizedGameIds: r, onVisibilityChange: o = () => {}, ...s } = e,
        { clan: _, affinity: p, index: m, position: I, source: T } = s,
        g = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
        S = (0, u.e7)([R.ZP], () => R.ZP.isMember(_.id, null == g ? void 0 : g.id), [_, g]),
        A = (0, u.e7)([N.Z], () => {
            var e;
            return (null === (e = N.Z.getRequest(_.id)) || void 0 === e ? void 0 : e.applicationStatus) === v.wB.SUBMITTED;
        }),
        y = (0, f.iN)('ClanGuildProfile'),
        L = _.memberCount >= P.Du,
        b = a.useRef(-1),
        D = a.useCallback((e) => o(e, b), [o]),
        U = (0, d.O)(D, 1);
    a.useEffect(
        () => () => {
            null == o || o(!1, b);
        },
        [o]
    );
    let x = a.useCallback(() => {
            let e = null != N.Z.getRequest(_.id);
            if (
                ((0, E.EK)({
                    guildId: _.id,
                    isMember: S,
                    hasJoinRequest: e,
                    affinity: p,
                    index: m,
                    position: I
                }),
                S)
            ) {
                (0, O.XU)(_.id);
                return;
            }
            if (e) {
                (0, O.uL)(M.Z5c.GUILD_MEMBER_VERIFICATION(_.id));
                return;
            }
            y &&
                (0, h.qF)(
                    _.id,
                    _,
                    {
                        source: T,
                        location: M.Sbl.CLAN_DISCOVERY_CARD
                    },
                    r,
                    I
                );
        }, [_, S, p, m, I, y, T, r]),
        G = a.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('5577').then(n.bind(n, 955120));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: _.id
                        });
                });
            },
            [_.id]
        );
    return (0, i.jsx)('div', {
        ref: U,
        children: (0, i.jsx)(l.Clickable, {
            onClick: x,
            className: w.clickableCard,
            style: t,
            onContextMenu: G,
            children: (0, i.jsx)(Z, {
                ...s,
                isMember: S,
                prioritizedGameIds: r,
                showBrandingFooter: !0,
                hasPendingJoinRequest: A,
                atMaxMemberCapacity: L
            })
        })
    });
}
t.ZP = V;
