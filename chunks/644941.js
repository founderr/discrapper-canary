a.r(n), a(47120), a(653041);
var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(913527),
    s = a.n(l),
    c = a(758713),
    d = a(705512),
    u = a(442837),
    m = a(433517),
    p = a(481060),
    _ = a(560361),
    g = a(812206),
    f = a(168551),
    x = a(485267),
    I = a(26033),
    h = a(561308),
    v = a(669764),
    E = a(962250),
    A = a(706454),
    T = a(768581),
    M = a(814225),
    C = a(709054),
    j = a(810568),
    P = a(998058),
    N = a(839392),
    b = a(96856),
    S = a(567409),
    L = a(774073),
    w = a(124030),
    O = a(715318),
    y = a(38516),
    k = a(252547),
    G = a(484527),
    R = a(296768),
    Z = a(206583),
    F = a(689938),
    H = a(51527);
let D = 'GameProfileModal',
    B = () =>
        (0, t.jsxs)('div', {
            className: H.gameBadge,
            children: [
                (0, t.jsx)(p.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    U = [c.z.DESKTOP, c.z.XBOX, c.z.PLAYSTATION, c.z.NINTENDO],
    W = (e) => {
        let { platforms: n } = e,
            a = [...new Set(n)];
        !a.includes(c.z.DESKTOP) && (a.includes(c.z.MACOS) || a.includes(c.z.LINUX)) && a.push(c.z.DESKTOP);
        let i = (a = a.filter((e) => U.includes(e))).map((e) => {
            switch (e) {
                case c.z.DESKTOP:
                    return (0, t.jsx)(p.ScreenIcon, { size: 'xs' }, e);
                case c.z.XBOX:
                    return (0, t.jsx)(p.XboxNeutralIcon, { size: 'xs' }, e);
                case c.z.PLAYSTATION:
                    return (0, t.jsx)(p.PlaystationNeutralIcon, { size: 'xs' }, e);
                case c.z.NINTENDO:
                    return (0, t.jsx)(p.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, t.jsxs)('div', {
            className: r()(H.row, H.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, t.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                i
            ]
        });
    },
    z = (e) => e.filter(L.z6).slice(0, 5);
n.default = (e) => {
    var n, o, l;
    let { applicationId: c, source: L, sourceUserId: U, transitionState: Y, onClose: K } = e,
        { clientThemesClassName: X } = (0, f.ZP)(),
        { width: J, height: V } = (0, E.b)(),
        [q, $] = i.useState(() => {
            var e;
            return null === (e = m.K.get(D)) || void 0 === e ? void 0 : e[c];
        }),
        Q = (0, u.e7)([A.default], () => A.default.locale),
        [ee, en] = i.useState(!0),
        [ea, et] = i.useState(!1),
        ei = i.useRef(null),
        eo = i.useMemo(() => (0, j.fP)(), []);
    i.useEffect(() => {
        let e = ei.current;
        null != e && et(e.scrollHeight - e.clientHeight > 1);
    }, [ei, J, V]),
        i.useEffect(() => {
            (0, x.Jn)();
        }, []);
    let er = (0, u.Wu)([N.Z], () => {
            var e;
            return (null !== (e = N.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [el, es] = i.useState(null),
        ec = i.useRef([]);
    i.useEffect(() => {
        ec.current = er;
    }, [er]),
        i.useEffect(() => {
            (async () => {
                if (0 === er.length) {
                    es(null);
                    try {
                        await (0, P.i)(c);
                    } catch (e) {
                        es(e);
                    }
                }
            })();
        }, [c, er]);
    let { entries: ed } = (0, S.Z)(),
        eu = i.useMemo(() => {
            var e;
            return null !== (e = null == ed ? void 0 : ed.filter((e) => (0, I.dX)(e) && e.extra.application_id === c)) && void 0 !== e ? e : [];
        }, [ed, c]),
        [em, ep] = i.useState(null);
    i.useEffect(() => {
        var e, n;
        (0, j.IS)({
            source: L,
            viewId: eo,
            applicationId: c,
            gameName: null !== (n = null !== (e = null == eg ? void 0 : eg.name) && void 0 !== e ? e : null == e_ ? void 0 : e_.name) && void 0 !== n ? n : '',
            authorId: U
        });
    }, []),
        (0, _.Z)(() => {
            var e, n, a;
            let t = Date.now(),
                i = eu.map((e) => {
                    let n = (0, h.kr)(e) ? (0, h.T_)(e, t) : (0, h.GL)(e, Q);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: n
                    });
                });
            (0, j.wz)({
                viewId: eo,
                applicationId: c,
                gameName: null !== (a = null !== (n = null == eg ? void 0 : eg.name) && void 0 !== n ? n : null == e_ ? void 0 : e_.name) && void 0 !== a ? a : '',
                playedFriendIds: eu.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: z(ec.current),
                officialGuildId: null == em ? void 0 : null === (e = em.guild) || void 0 === e ? void 0 : e.id
            });
        });
    let e_ = g.Z.getApplication(c),
        eg = (0, u.e7)([v.Z], () => v.Z.getGame(c)),
        ef = i.useMemo(() => (null == eg ? void 0 : eg.genres.map(M.P3).join(', ')), [eg]),
        ex = i.useMemo(() => {
            if (null == eg) return '';
            let { artwork: e, screenshots: n } = eg;
            if (e.length > 0) {
                let n = Math.floor(Math.random() * (e.length - 1));
                return e[n];
            }
            if (n.length > 0) {
                let e = Math.floor(Math.random() * (n.length - 1));
                return n[e];
            }
            return '';
        }, [eg]),
        eI = i.useMemo(() => {
            var e, n;
            let a = (null !== (e = null == eg ? void 0 : eg.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
            return [...(null !== (n = null == eg ? void 0 : eg.screenshots) && void 0 !== n ? n : []).map((e) => ({ src: e })), ...a];
        }, [null == eg ? void 0 : eg.artwork, null == eg ? void 0 : eg.screenshots]),
        eh = (e, n) => {
            var a;
            (0, j.UE)({
                gameName: null != eT ? eT : '',
                applicationId: c,
                action: e,
                similarGameId: n,
                viewId: eo,
                officialGuildId: null == em ? void 0 : null === (a = em.guild) || void 0 === a ? void 0 : a.id
            });
        },
        ev = (0, b.p)('GameProfileModal'),
        [eE, eA] = i.useState((null == eg ? void 0 : eg.summaryLocalized) != null);
    if (null == eg) return null;
    let eT = null !== (o = eg.name) && void 0 !== o ? o : null == e_ ? void 0 : e_.name,
        eM = null == e_ ? void 0 : e_.getIconURL(160, T.$k ? 'webp' : 'png'),
        eC = null !== (l = eg.coverImageUrl) && void 0 !== l ? l : eM,
        { summary: ej, summaryLocalized: eP, websites: eN, publishers: eb, platforms: eS } = eg,
        eL = C.default.extractTimestamp(c),
        ew = s()().diff(s()(eL), 'days') <= Z.G,
        eO = eu.some((e) => (0, h.ig)(e) === d.o.GLOBAL);
    return (0, t.jsx)(p.ModalRoot, {
        transitionState: Y,
        size: p.ModalSize.DYNAMIC,
        className: r()(X, H.gameProfileModal),
        children: (0, t.jsxs)(p.ScrollerNone, {
            className: H.scrollable,
            children: [
                (0, t.jsx)('div', {
                    className: r()(H.gameArtHero),
                    style: { backgroundImage: 'url("'.concat(ex, '")') }
                }),
                (0, t.jsxs)('div', {
                    className: r()(H.content, H.column, H.gapLg, H.headerInfo),
                    children: [
                        (0, t.jsxs)('div', {
                            className: H.coverArtRow,
                            children: [
                                (0, t.jsx)('div', {
                                    className: H.logoWrapper,
                                    children:
                                        null != eC &&
                                        (0, t.jsx)('img', {
                                            className: H.logo,
                                            src: eC,
                                            alt: F.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eT })
                                        })
                                }),
                                (0, t.jsx)(O.Z, {
                                    applicationId: c,
                                    viewId: eo,
                                    className: H.overflowMenu
                                })
                            ]
                        }),
                        (0, t.jsxs)('div', {
                            className: r()(H.row, H.gapSm, H.gameDetails),
                            children: [
                                (0, t.jsxs)('div', {
                                    children: [
                                        (0, t.jsx)(p.Heading, {
                                            variant: 'heading-xl/bold',
                                            children: eT
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: r()(H.row, H.gapSm),
                                            children: [
                                                null != eM &&
                                                    (0, t.jsx)('img', {
                                                        src: eM,
                                                        height: 16,
                                                        alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eT })
                                                    }),
                                                (0, t.jsx)(p.Text, {
                                                    variant: 'text-sm/semibold',
                                                    color: 'text-muted',
                                                    children: ef
                                                }),
                                                ew &&
                                                    (0, t.jsx)(p.Text, {
                                                        variant: 'eyebrow',
                                                        className: H.newBadge,
                                                        children: F.Z.Messages.NEW
                                                    }),
                                                eO &&
                                                    (0, t.jsxs)(t.Fragment, {
                                                        children: [
                                                            (0, t.jsx)(p.Text, {
                                                                variant: 'text-sm/medium',
                                                                children: ' \xB7 '
                                                            }),
                                                            (0, t.jsx)(B, {})
                                                        ]
                                                    })
                                            ]
                                        })
                                    ]
                                }),
                                (0, t.jsx)('div', {
                                    children:
                                        ev &&
                                        (0, t.jsx)(p.Tooltip, {
                                            text: q ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                            children: (e) =>
                                                (0, t.jsxs)(p.Button, {
                                                    ...e,
                                                    innerClassName: H.followButton,
                                                    color: q ? p.Button.Colors.PRIMARY : p.Button.Colors.BRAND,
                                                    onClick: () => {
                                                        var e;
                                                        let n = null !== (e = m.K.get(D)) && void 0 !== e ? e : {};
                                                        (n[c] = !n[c]),
                                                            m.K.set(D, n),
                                                            eh(n[c] ? j.as.FollowGame : j.as.UnfollowGame),
                                                            n[c] &&
                                                                (0, w.L)() &&
                                                                (0, p.openModalLazy)(async () => {
                                                                    let { default: e } = await a.e('86564').then(a.bind(a, 641758));
                                                                    return (n) =>
                                                                        (0, t.jsx)(e, {
                                                                            ...n,
                                                                            applicationId: c,
                                                                            background: ex,
                                                                            viewId: eo
                                                                        });
                                                                }),
                                                            $(n[c]);
                                                    },
                                                    children: [q ? (0, t.jsx)(p.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(p.BellIcon, { color: 'white' }), q ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : F.Z.Messages.FOLLOW]
                                                })
                                        })
                                })
                            ]
                        })
                    ]
                }),
                (0, t.jsx)(p.HeadingLevel, {
                    children: (0, t.jsxs)('div', {
                        className: r()(H.content, H.mainContent),
                        children: [
                            (0, t.jsxs)('div', {
                                className: H.sections,
                                children: [
                                    (0, t.jsx)(k.Z, {
                                        entries: eu,
                                        viewId: eo,
                                        officialGuildId: null == em ? void 0 : null === (n = em.guild) || void 0 === n ? void 0 : n.id,
                                        onClose: K
                                    }),
                                    eI.length > 0 &&
                                        (0, t.jsxs)('div', {
                                            children: [
                                                (0, t.jsx)(p.Heading, {
                                                    className: H.sectionHeader,
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: F.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                }),
                                                (0, t.jsx)(p.Scroller, {
                                                    className: r()(H.row, H.gapLg, H.imageScroller),
                                                    orientation: 'horizontal',
                                                    children: eI.map((e, n) =>
                                                        (0, t.jsx)(
                                                            p.Clickable,
                                                            {
                                                                className: H.clickable,
                                                                focusProps: {
                                                                    offset: 4,
                                                                    ringClassName: H.gameArtworkFocusRing
                                                                },
                                                                onClick: () => {
                                                                    eh(j.as.ClickImage),
                                                                        (0, p.openModalLazy)(async () => {
                                                                            let { default: e } = await a.e('99857').then(a.bind(a, 895023));
                                                                            return (a) => {
                                                                                let { ...i } = a;
                                                                                return (0, t.jsx)(e, {
                                                                                    className: H.mediaModal,
                                                                                    ...i,
                                                                                    items: eI,
                                                                                    startingIndex: n
                                                                                });
                                                                            };
                                                                        });
                                                                },
                                                                children: (0, t.jsx)('img', {
                                                                    src: e.src,
                                                                    className: H.gameArtwork,
                                                                    alt: F.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eT })
                                                                })
                                                            },
                                                            e.src
                                                        )
                                                    )
                                                }),
                                                (0, t.jsx)(p.Spacer, { size: 8 })
                                            ]
                                        }),
                                    (0, t.jsx)(R.Z, {
                                        applicationId: c,
                                        onClose: K,
                                        trackAction: eh,
                                        similarGames: er,
                                        similarGamesError: el
                                    })
                                ]
                            }),
                            (0, t.jsxs)('div', {
                                className: r()(H.sidebar, H.column, H.gapLg),
                                children: [
                                    (0, t.jsx)(p.Heading, {
                                        variant: 'heading-md/bold',
                                        children: F.Z.Messages.ABOUT
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: H.sections,
                                        children: [
                                            null != ej &&
                                                (0, t.jsxs)('div', {
                                                    className: r()(H.column, H.gapSm),
                                                    children: [
                                                        null != eP &&
                                                            (0, t.jsxs)('div', {
                                                                className: H.translatedInfo,
                                                                children: [
                                                                    (0, t.jsx)(p.PencilSparkleIcon, {
                                                                        color: p.tokens.colors.HEADER_SECONDARY,
                                                                        size: 'xs'
                                                                    }),
                                                                    (0, t.jsx)(p.Text, {
                                                                        variant: 'text-xs/medium',
                                                                        color: 'header-secondary',
                                                                        children: eE ? F.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => eA(!1) }) : F.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => eA(!0) })
                                                                    })
                                                                ]
                                                            }),
                                                        (0, t.jsx)(p.Text, {
                                                            ref: ei,
                                                            lineClamp: ee ? 8 : void 0,
                                                            variant: 'text-sm/normal',
                                                            children: eE ? eP : ej
                                                        }),
                                                        (ea || !ee) &&
                                                            (0, t.jsx)(p.Clickable, {
                                                                className: H.clickable,
                                                                onClick: () => {
                                                                    eh(ee ? j.as.ShowMore : j.as.ShowLess), en(!ee);
                                                                },
                                                                children: (0, t.jsx)(p.Text, {
                                                                    variant: 'text-sm/semibold',
                                                                    children: ee ? F.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : F.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                })
                                                            })
                                                    ]
                                                }),
                                            (0, t.jsx)(G.Z, {
                                                websites: eN,
                                                trackClick: eh,
                                                onInviteResolved: ep
                                            }),
                                            (0, t.jsx)(y.Z, {
                                                websites: eN,
                                                trackClick: eh
                                            }),
                                            (eb.length > 0 || eS.length > 0) &&
                                                (0, t.jsx)('div', {
                                                    className: r()(H.column, H.gapLg),
                                                    children:
                                                        eb.length > 0 &&
                                                        (0, t.jsxs)('div', {
                                                            className: r()(H.column, H.gapSm),
                                                            children: [
                                                                (0, t.jsx)(p.Heading, {
                                                                    variant: 'text-xs/semibold',
                                                                    color: 'header-secondary',
                                                                    children: F.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                }),
                                                                (0, t.jsxs)('div', {
                                                                    className: r()(H.row, H.gapMd),
                                                                    children: [
                                                                        (0, t.jsx)(p.Text, {
                                                                            variant: 'text-sm/normal',
                                                                            children: eb.join(', ')
                                                                        }),
                                                                        eS.length > 0 && (0, t.jsx)(W, { platforms: eS })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
