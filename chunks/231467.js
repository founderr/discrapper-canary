n.d(t, {
    cS: function () {
        return x;
    },
    xV: function () {
        return F;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(442837),
    u = n(239091),
    c = n(434650),
    d = n(835473),
    _ = n(970606),
    E = n(963202),
    f = n(905362),
    h = n(603368),
    p = n(353093),
    I = n(169559),
    m = n(114487),
    T = n(214715),
    S = n(550271),
    g = n(686546),
    A = n(216742),
    N = n(246364),
    R = n(937111),
    O = n(703656),
    v = n(271383),
    C = n(594174),
    L = n(229893),
    D = n(229765),
    y = n(778045),
    b = n(355932),
    M = n(981631),
    P = n(308083),
    U = n(689938),
    w = n(68118);
function x(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== P.U6).join(', '),
        s = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING),
        l = (0, h.pX)(n, s.hex()),
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
                className: w.clanInfoItem,
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
                        className: w.wildCardText,
                        ref: u,
                        children: a
                    })
            })
        ]
    });
}
function G(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: w.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: w.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    className: w.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function k(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: a } = e,
        o = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        l = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    T.Z,
                    {
                        className: s()(w.thinTrait, { [w.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(b.te, {
                    items: e,
                    renderItem: l,
                    onTooltipShow: a
                }),
            [l, a]
        );
    return (0, r.jsx)(b.ZP, {
        className: w.traitsContainer,
        items: t,
        renderItem: l,
        renderOverflow: u,
        maxLines: 2,
        itemGapPx: 4
    });
}
function B(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: w.headerBadge,
            children: [
                (0, r.jsx)(o.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: U.Z.Messages.CLAN_CARD_BADGE_APPLIED
                })
            ]
        });
    if (i)
        return (0, r.jsxs)('div', {
            className: w.headerBadge,
            children: [
                (0, r.jsx)(o.CircleCheckIcon, {
                    size: 'xxs',
                    color: o.tokens.colors.STATUS_POSITIVE
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: U.Z.Messages.JOINED_GUILD
                })
            ]
        });
    if (n)
        return (0, r.jsxs)('div', {
            className: w.headerBadge,
            children: [
                (0, r.jsx)(o.LockIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: U.Z.Messages.FULL
                })
            ]
        });
    return null;
}
function F(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: u, isMember: c = !1, traitsToHighlight: f, prioritizedGameIds: h, className: T, position: A, showBrandingFooter: N = !1, showFavoriteButton: R = !1, bannerUrl: O, onlyAnimateIconOnHover: v = !1, hasPendingJoinRequest: C = !1, atMaxMemberCapacity: b = !1, footer: M = null } = e,
        {
            tag: F,
            badge: V,
            branding: { primaryColor: H, secondaryColor: Z },
            bannerHash: Y,
            gameActivity: j
        } = n,
        W = (0, d.Z)(n.games),
        K = (0, I.Z)('clan_discovery_card'),
        [z, q] = i.useState(!1),
        Q = i.useRef(null),
        [X, $] = i.useState(!1),
        [J, ee] = i.useState(!1),
        et = (0, l.e7)([L.Z], () => L.Z.isSavedGuildId(n.id)),
        en = (0, E.iN)('guild_card'),
        er = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    ee(!0),
                    (0, _.j$)({
                        position: A,
                        guildId: n.id,
                        isFavorited: !et
                    }),
                    et ? (0, D.SI)(n.id) : (0, D.EV)(n.id);
            },
            [n.id, et, A]
        ),
        ei = i.useCallback(() => {
            q(!0);
        }, []),
        ea = i.useCallback(() => {
            q(!1);
        }, []),
        es = U.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: n.memberCount }),
        eo = null != O ? O : (0, p.pY)(n.id, Y),
        el = null == a && null == eo ? { background: 'linear-gradient(90deg, '.concat(H, ', ').concat(Z, ')') } : void 0,
        eu =
            null != a
                ? a
                : null != eo
                  ? (0, r.jsx)('img', {
                        alt: U.Z.Messages.CLAN_LOOK_BANNER,
                        src: eo,
                        className: w.bannerImage
                    })
                  : null,
        ec = i.useMemo(() => (0, P.HR)(n.traits, f), [n.traits, f]);
    i.useEffect(() => {
        let e = Q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && $(e.offsetWidth < e.scrollWidth);
    }, []);
    let ed = i.useCallback(
            (e) => () => {
                (0, _.Gh)({
                    position: A,
                    guildId: n.id,
                    feature: e
                });
            },
            [A, n.id]
        ),
        e_ = en && (R || z || et);
    return (0, r.jsxs)('div', {
        className: s()(w.card, { [w.cardStaticHeight]: !u }, T),
        onMouseEnter: ei,
        onMouseLeave: ea,
        children: [
            (0, r.jsxs)('div', {
                className: w.cardBrandingHeader,
                style: el,
                children: [
                    eu,
                    (0, r.jsx)(B, {
                        hasPendingJoinRequest: C,
                        atMaxMemberCapacity: b,
                        isGuildMember: c
                    }),
                    en &&
                        (0, r.jsx)(o.Clickable, {
                            className: s()(w.favoriteButton, e_ && w.shownFavoriteButton, {
                                [w.animateButtonIn]: J && et,
                                [w.animateButtonOut]: J && !et
                            }),
                            onClick: er,
                            focusProps: { enabled: e_ },
                            children: et
                                ? (0, r.jsx)(o.HeartIcon, {
                                      color: o.tokens.colors.INFO_DANGER_FOREGROUND,
                                      size: 'custom',
                                      width: 18,
                                      height: 18
                                  })
                                : (0, r.jsx)(o.HeartOutlineIcon, {
                                      color: o.tokens.colors.HEADER_PRIMARY,
                                      size: 'custom',
                                      width: 18,
                                      height: 18
                                  })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: w.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: w.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: w.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(g.ZP, {
                                        mask: g.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: w.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: w.clanIconInner,
                                            children: (0, r.jsx)(m.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !v || z
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: w.clanTagChipletWrapper,
                                        children: (0, r.jsx)(o.Tooltip, {
                                            text: U.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                            position: 'top',
                                            onTooltipShow: ed('tag'),
                                            shouldShow: !c && K,
                                            children: (e) =>
                                                (0, r.jsxs)('div', {
                                                    ...e,
                                                    className: w.clanTagChiplet,
                                                    children: [
                                                        (0, r.jsx)(S.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: V.badgeKind,
                                                            primaryTintColor: V.primaryColor,
                                                            secondaryTintColor: V.secondaryColor
                                                        }),
                                                        (0, r.jsx)(o.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: F
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
                                    shouldShow: X,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            ref: Q,
                                            className: w.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: w.clanInfoRow,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xxs/normal',
                                        className: w.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': U.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: w.clanInfoItem,
                                        children: null !== (t = (0, P.mv)(n.playstyle)) && void 0 !== t ? t : U.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                                    }),
                                    (0, r.jsx)(x, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(G, {
                        description: n.description,
                        expanded: u
                    }),
                    (0, r.jsx)(k, {
                        traits: ec,
                        traitsToHighlight: f,
                        onInteraction: ed('traits')
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: w.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: w.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: w.cardFooterMembers,
                            children: (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: es
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: w.cardFooterGames,
                        children: (0, r.jsx)(y.Z, {
                            games: W,
                            prioritizedGameIds: h,
                            gameActivity: j,
                            onInteraction: ed('games')
                        })
                    })
                ]
            }),
            N &&
                (0, r.jsx)('div', {
                    className: w.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(H, ', ').concat(Z, ')') }
                }),
            M
        ]
    });
}
t.ZP = function (e) {
    let { style: t, prioritizedGameIds: a, onVisibilityChange: d = () => {}, ...h } = e,
        { clan: p, affinity: I, index: m, position: T, source: S } = h,
        g = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        L = (0, l.e7)([v.ZP], () => v.ZP.isMember(p.id, null == g ? void 0 : g.id), [p, g]),
        D = (0, l.e7)([R.Z], () => {
            var e;
            return (null === (e = R.Z.getRequest(p.id)) || void 0 === e ? void 0 : e.applicationStatus) === N.wB.SUBMITTED;
        }),
        y = (0, E.iN)('ClanGuildProfile'),
        b = (0, A.I7)().enabled,
        x = p.memberCount >= P.Du,
        G = i.useRef(-1),
        k = i.useCallback((e) => d(e, G), [d]),
        B = (0, c.O)(k, 1);
    i.useEffect(
        () => () => {
            null == d || d(!1, G);
        },
        [d]
    );
    let V = i.useCallback(() => {
            let e = null != R.Z.getRequest(p.id);
            if (
                ((0, _.EK)({
                    guildId: p.id,
                    isMember: L,
                    hasJoinRequest: e,
                    affinity: I,
                    index: m,
                    position: T
                }),
                L)
            ) {
                (0, O.XU)(p.id);
                return;
            }
            if (e) {
                (0, O.uL)(M.Z5c.GUILD_MEMBER_VERIFICATION(p.id));
                return;
            }
            y &&
                (0, f.qF)(
                    p.id,
                    p,
                    {
                        source: S,
                        location: M.Sbl.CLAN_DISCOVERY_CARD
                    },
                    a,
                    T
                );
        }, [p, L, I, m, T, y, S, a]),
        H = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('5577').then(n.bind(n, 955120));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            guildId: p.id
                        });
                });
            },
            [p.id]
        );
    return (0, r.jsx)('div', {
        ref: B,
        children: (0, r.jsx)(o.Clickable, {
            onClick: V,
            className: s()(w.clickableCard, b && w.applyToJoinContainer),
            style: t,
            onContextMenu: H,
            children: (0, r.jsx)(F, {
                ...h,
                isMember: L,
                className: b ? w.applyToJoinContainer : void 0,
                prioritizedGameIds: a,
                hasPendingJoinRequest: D,
                atMaxMemberCapacity: x,
                showBrandingFooter: !b,
                footer: b
                    ? (0, r.jsx)('div', {
                          className: w.applyToJoinButton,
                          children: (0, r.jsx)(o.Button, {
                              color: o.Button.Colors.PRIMARY,
                              size: o.Button.Sizes.SMALL,
                              fullWidth: !0,
                              children: L ? U.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA : U.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                          })
                      })
                    : null
            })
        })
    });
};
