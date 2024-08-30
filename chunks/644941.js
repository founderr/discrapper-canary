n.r(a), n(47120), n(653041);
var t = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(512722),
    l = n.n(i),
    c = n(392711),
    d = n(913527),
    u = n.n(d),
    _ = n(758713),
    E = n(705512),
    I = n(442837),
    A = n(433517),
    m = n(481060),
    T = n(224706),
    N = n(812206),
    O = n(168551),
    R = n(485267),
    p = n(26033),
    g = n(561308),
    P = n(669764),
    C = n(962250),
    S = n(706454),
    L = n(768581),
    M = n(814225),
    h = n(709054),
    f = n(810568),
    x = n(998058),
    G = n(839392),
    v = n(96856),
    Z = n(567409),
    j = n(774073),
    b = n(124030),
    D = n(383895),
    K = n(183391),
    k = n(206583),
    y = n(689938),
    B = n(707443);
let U = 'GameProfileModal',
    w = (e) => {
        let { game: a, onClose: n, trackClick: r } = e,
            s = (0, I.e7)([N.Z], () => {
                var e;
                return N.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
            });
        if (null == a) return null;
        let o = a.coverImageUrl;
        return (0, t.jsx)(m.Tooltip, {
            text: a.name,
            children: (e) => {
                var i;
                return (0, t.jsx)(m.Clickable, {
                    ...e,
                    className: B.clickable,
                    onClick: async () => {
                        r(f.as.ClickSimilarGame, a.applicationId),
                            (0, m.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, t.jsx)(Y, {
                                        applicationId: a.applicationId,
                                        source: f.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            n();
                    },
                    children: (0, t.jsx)('img', {
                        src: o,
                        className: B.similarGames,
                        alt: y.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : null == a ? void 0 : a.name })
                    })
                });
            }
        });
    },
    F = () =>
        (0, t.jsxs)('div', {
            className: B.gameBadge,
            children: [
                (0, t.jsx)(m.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: y.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    H = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
    Q = (e) => {
        let { platforms: a } = e,
            n = [...new Set(a)];
        !n.includes(_.z.DESKTOP) && (n.includes(_.z.MACOS) || n.includes(_.z.LINUX)) && n.push(_.z.DESKTOP);
        let r = (n = n.filter((e) => H.includes(e))).map((e) => {
            switch (e) {
                case _.z.DESKTOP:
                    return (0, t.jsx)(m.ScreenIcon, { size: 'xs' }, e);
                case _.z.XBOX:
                    return (0, t.jsx)(m.XboxNeutralIcon, { size: 'xs' }, e);
                case _.z.PLAYSTATION:
                    return (0, t.jsx)(m.PlaystationNeutralIcon, { size: 'xs' }, e);
                case _.z.NINTENDO:
                    return (0, t.jsx)(m.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, t.jsxs)('div', {
            className: o()(B.row, B.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, t.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                r
            ]
        });
    },
    W = (e) => e.filter(j.z6).slice(0, 5),
    Y = (e) => {
        var a, s;
        let { applicationId: i, source: d, sourceUserId: _, transitionState: H, onClose: Y } = e,
            { clientThemesClassName: z } = (0, O.ZP)(),
            { width: V, height: X } = (0, C.b)(),
            [J, q] = r.useState(() => {
                var e;
                return null === (e = A.K.get(U)) || void 0 === e ? void 0 : e[i];
            }),
            $ = (0, I.e7)([S.default], () => S.default.locale),
            [ee, ea] = r.useState(!0),
            [en, et] = r.useState(!1),
            er = r.useRef(null),
            es = r.useMemo(() => (0, f.fP)(), []);
        r.useEffect(() => {
            let e = er.current;
            null != e && et(e.scrollHeight - e.clientHeight > 1);
        }, [er, V, X]),
            r.useEffect(() => {
                (0, R.Jn)();
            }, []);
        let eo = (0, I.Wu)([G.Z], () => {
                var e;
                return (null !== (e = G.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            ei = (0, I.Wu)([P.Z], () =>
                eo
                    .map((e) => P.Z.getGame(e))
                    .filter(j.W1)
                    .slice(0, 5)
            ),
            el = r.useRef([]);
        r.useEffect(() => {
            el.current = eo;
        }, [eo]),
            r.useEffect(() => {
                0 === eo.length && (0, x.i)(i), T.Z.getDetectableGamesSupplemental([i, ...eo]);
            }, [i, eo]);
        let ec = (0, I.e7)([G.Z, P.Z], () => {
                let e = void 0 === G.Z.getSimilarGames(i),
                    a = eo.some((e) => P.Z.isFetching(e));
                return e || a;
            }),
            { entries: ed } = (0, Z.Z)(),
            eu = r.useMemo(() => {
                var e;
                return null !== (e = null == ed ? void 0 : ed.filter((e) => (0, p.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [ed, i]),
            e_ = eu.length > 7,
            [eE, eI] = r.useState(!1);
        r.useEffect(() => {
            var e, a;
            return (
                (0, f.IS)({
                    source: d,
                    viewId: es,
                    applicationId: i,
                    gameName: null !== (a = null !== (e = null == em ? void 0 : em.name) && void 0 !== e ? e : null == eA ? void 0 : eA.name) && void 0 !== a ? a : '',
                    authorId: _
                }),
                () => {
                    var e, a;
                    let n = Date.now(),
                        t = eu.map((e) => {
                            let a = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, $);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: a
                            });
                        });
                    (0, f.wz)({
                        viewId: es,
                        applicationId: i,
                        gameName: null !== (a = null !== (e = null == em ? void 0 : em.name) && void 0 !== e ? e : null == eA ? void 0 : eA.name) && void 0 !== a ? a : '',
                        playedFriendIds: eu.map((e) => e.author_id),
                        playedFriendsData: t,
                        similarGames: W(el.current)
                    });
                }
            );
        }, []);
        let eA = N.Z.getApplication(i),
            em = (0, I.e7)([P.Z], () => P.Z.getGame(i)),
            eT = r.useMemo(() => (null == em ? void 0 : em.genres.map(M.P3).join(', ')), [em]),
            eN = r.useMemo(() => {
                if (null == em) return '';
                let { artwork: e, screenshots: a } = em;
                if (e.length > 0) {
                    let a = Math.floor(Math.random() * (e.length - 1));
                    return e[a];
                }
                if (a.length > 0) {
                    let e = Math.floor(Math.random() * (a.length - 1));
                    return a[e];
                }
                return '';
            }, [em]),
            eO = r.useMemo(() => {
                var e, a;
                let n = (null !== (e = null == em ? void 0 : em.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (a = null == em ? void 0 : em.screenshots) && void 0 !== a ? a : []).map((e) => ({ src: e })), ...n];
            }, [null == em ? void 0 : em.artwork, null == em ? void 0 : em.screenshots]),
            eR = (e, a) => {
                (0, f.UE)({
                    gameName: null != eP ? eP : '',
                    applicationId: i,
                    action: e,
                    similarGameId: a,
                    viewId: es
                });
            },
            ep = (0, v.p)('GameProfileModal'),
            { shouldOpenGameProfile: eg } = (0, j.ZP)({
                location: 'GameProfileModal',
                applicationId: i,
                trackEntryPointImpression: !1
            });
        if ((l()(eg, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`"), null == em)) return null;
        let eP = null !== (a = em.name) && void 0 !== a ? a : null == eA ? void 0 : eA.name,
            eC = null == eA ? void 0 : eA.getIconURL(160, L.$k ? 'webp' : 'png'),
            eS = null !== (s = em.coverImageUrl) && void 0 !== s ? s : eC,
            { summary: eL, websites: eM, publishers: eh, platforms: ef } = em,
            ex = h.default.extractTimestamp(i),
            eG = u()().diff(u()(ex), 'days') <= k.G,
            ev = eu.some((e) => (0, g.ig)(e) === E.o.GLOBAL);
        return (0, t.jsx)(m.ModalRoot, {
            transitionState: H,
            size: m.ModalSize.DYNAMIC,
            className: o()(z, B.gameProfileModal),
            children: (0, t.jsxs)(m.ScrollerNone, {
                className: B.scrollable,
                children: [
                    (0, t.jsx)('div', {
                        className: o()(B.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eN, '")') }
                    }),
                    (0, t.jsxs)('div', {
                        className: o()(B.content, B.column, B.headerInfo),
                        children: [
                            (0, t.jsx)('div', {
                                className: B.logoWrapper,
                                children:
                                    null != eS &&
                                    (0, t.jsx)('img', {
                                        className: B.logo,
                                        src: eS,
                                        alt: y.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eP })
                                    })
                            }),
                            (0, t.jsxs)('div', {
                                className: o()(B.row, B.gapSm, B.gameDetails),
                                children: [
                                    (0, t.jsxs)('div', {
                                        children: [
                                            (0, t.jsx)(m.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eP
                                            }),
                                            (0, t.jsxs)('div', {
                                                className: o()(B.row, B.gapSm),
                                                children: [
                                                    null != eC &&
                                                        (0, t.jsx)('img', {
                                                            src: eC,
                                                            height: 16,
                                                            alt: y.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eP })
                                                        }),
                                                    (0, t.jsx)(m.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eT
                                                    }),
                                                    eG &&
                                                        (0, t.jsx)(m.Text, {
                                                            variant: 'eyebrow',
                                                            className: B.newBadge,
                                                            children: y.Z.Messages.NEW
                                                        }),
                                                    ev &&
                                                        (0, t.jsxs)(t.Fragment, {
                                                            children: [
                                                                (0, t.jsx)(m.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, t.jsx)(F, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)('div', {
                                        children:
                                            ep &&
                                            (0, t.jsx)(m.Tooltip, {
                                                text: J ? y.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : y.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, t.jsxs)(m.Button, {
                                                        ...e,
                                                        innerClassName: B.followButton,
                                                        color: J ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let a = null !== (e = A.K.get(U)) && void 0 !== e ? e : {};
                                                            (a[i] = !a[i]),
                                                                A.K.set(U, a),
                                                                eR(a[i] ? f.as.FollowGame : f.as.UnfollowGame),
                                                                a[i] &&
                                                                    (0, b.L)() &&
                                                                    (0, m.openModalLazy)(async () => {
                                                                        let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                                                                        return (a) =>
                                                                            (0, t.jsx)(e, {
                                                                                ...a,
                                                                                applicationId: i,
                                                                                background: eN,
                                                                                viewId: es
                                                                            });
                                                                    }),
                                                                q(a[i]);
                                                        },
                                                        children: [J ? (0, t.jsx)(m.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(m.BellIcon, { color: 'white' }), J ? y.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : y.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, t.jsx)(m.HeadingLevel, {
                        children: (0, t.jsxs)('div', {
                            className: o()(B.content, B.mainContent),
                            children: [
                                (0, t.jsxs)('div', {
                                    className: B.column,
                                    children: [
                                        (0, t.jsx)(m.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: y.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: o()(B.section, { [B.fadedEntries]: e_ && !eE }),
                                            children: [
                                                0 === eu.length &&
                                                    (0, t.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: B.emptyFriendsWhoPlay,
                                                        children: y.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, t.jsx)('div', {
                                                    className: o()(B.column, B.gapNone),
                                                    children:
                                                        null == eu
                                                            ? void 0
                                                            : eu.slice(0, e_ && !eE ? 6 : void 0).map((e) =>
                                                                  (0, t.jsx)(
                                                                      D.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: es,
                                                                          onClose: Y
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        e_ &&
                                            !eE &&
                                            (0, t.jsxs)(m.Clickable, {
                                                className: B.expandEntriesButton,
                                                onClick: () => eI(!0),
                                                children: [
                                                    (0, t.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: y.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, t.jsx)(m.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eO.length > 0 &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(m.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: y.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, t.jsx)(m.Scroller, {
                                                        className: o()(B.row, B.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eO.map((e, a) =>
                                                            (0, t.jsx)(
                                                                m.Clickable,
                                                                {
                                                                    className: B.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: B.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eR(f.as.ClickImage),
                                                                            (0, m.openModalLazy)(async () => {
                                                                                let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                                                                                return (n) => {
                                                                                    let { ...r } = n;
                                                                                    return (0, t.jsx)(e, {
                                                                                        className: B.mediaModal,
                                                                                        ...r,
                                                                                        items: eO,
                                                                                        startingIndex: a
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, t.jsx)('img', {
                                                                        src: e.src,
                                                                        className: B.gameArtwork,
                                                                        alt: y.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eP })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, t.jsx)(m.Spacer, { size: 8 })
                                                ]
                                            }),
                                        ec &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)('div', { className: B.loadingHeadingSimilarGames }),
                                                    (0, t.jsx)('div', {
                                                        className: B.row,
                                                        children: (0, c.range)(0, 5).map((e) => (0, t.jsx)('div', { className: B.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !ec &&
                                            ei.length > 0 &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(m.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: y.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, t.jsx)('div', {
                                                        className: B.row,
                                                        style: {},
                                                        children: ei.map((e) =>
                                                            (0, t.jsx)(
                                                                w,
                                                                {
                                                                    game: e,
                                                                    onClose: Y,
                                                                    trackClick: eR
                                                                },
                                                                null == e ? void 0 : e.applicationId
                                                            )
                                                        )
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, t.jsxs)('div', {
                                    className: o()(B.sidebar, B.column),
                                    children: [
                                        (0, t.jsx)(m.Heading, {
                                            variant: 'heading-md/bold',
                                            children: y.Z.Messages.ABOUT
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: B.sidebarSections,
                                            children: [
                                                null != eL &&
                                                    (0, t.jsxs)('div', {
                                                        className: o()(B.column, B.gapSm),
                                                        children: [
                                                            (0, t.jsx)(m.Text, {
                                                                ref: er,
                                                                lineClamp: ee ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eL
                                                            }),
                                                            (en || !ee) &&
                                                                (0, t.jsx)(m.Clickable, {
                                                                    className: B.clickable,
                                                                    onClick: () => {
                                                                        eR(ee ? f.as.ShowMore : f.as.ShowLess), ea(!ee);
                                                                    },
                                                                    children: (0, t.jsx)(m.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: ee ? y.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : y.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, t.jsx)(K.Z, {
                                                    websites: eM,
                                                    trackClick: eR
                                                }),
                                                (eh.length > 0 || ef.length > 0) &&
                                                    (0, t.jsx)('div', {
                                                        className: o()(B.column),
                                                        children:
                                                            eh.length > 0 &&
                                                            (0, t.jsxs)('div', {
                                                                className: o()(B.column, B.gapSm),
                                                                children: [
                                                                    (0, t.jsx)(m.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: y.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, t.jsxs)('div', {
                                                                        className: o()(B.row, B.gapMd),
                                                                        children: [
                                                                            (0, t.jsx)(m.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: eh.join(', ')
                                                                            }),
                                                                            ef.length > 0 && (0, t.jsx)(Q, { platforms: ef })
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
a.default = Y;
