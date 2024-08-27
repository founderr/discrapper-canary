n.r(a), n(47120), n(653041);
var s = n(735250),
    r = n(470079),
    t = n(120356),
    o = n.n(t),
    i = n(512722),
    l = n.n(i),
    c = n(392711),
    _ = n(913527),
    E = n.n(_),
    d = n(758713),
    u = n(705512),
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
    S = n(962250),
    L = n(706454),
    M = n(768581),
    C = n(814225),
    h = n(709054),
    G = n(810568),
    f = n(998058),
    x = n(839392),
    v = n(96856),
    Z = n(567409),
    j = n(774073),
    b = n(124030),
    D = n(383895),
    K = n(183391),
    F = n(206583),
    U = n(689938),
    B = n(707443);
let y = 'GameProfileModal',
    H = (e) => {
        let { game: a, onClose: n, trackClick: r } = e,
            t = (0, I.e7)([N.Z], () => {
                var e;
                return N.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
            });
        if (null == a) return null;
        let o = a.coverImageUrl;
        return (0, s.jsx)(m.Tooltip, {
            text: a.name,
            children: (e) => {
                var i;
                return (0, s.jsx)(m.Clickable, {
                    ...e,
                    className: B.clickable,
                    onClick: async () => {
                        r(G.as.ClickSimilarGame, a.applicationId),
                            (0, m.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, s.jsx)(Y, {
                                        applicationId: a.applicationId,
                                        source: G.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            n();
                    },
                    children: (0, s.jsx)('img', {
                        src: o,
                        className: B.similarGames,
                        alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : null == a ? void 0 : a.name })
                    })
                });
            }
        });
    },
    k = () =>
        (0, s.jsxs)('div', {
            className: B.gameBadge,
            children: [
                (0, s.jsx)(m.FireIcon, { size: 'xxs' }),
                (0, s.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: U.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    w = [d.z.DESKTOP, d.z.XBOX, d.z.PLAYSTATION, d.z.NINTENDO],
    Q = (e) => {
        let { platforms: a } = e,
            n = [...new Set(a)];
        !n.includes(d.z.DESKTOP) && (n.includes(d.z.MACOS) || n.includes(d.z.LINUX)) && n.push(d.z.DESKTOP);
        let r = (n = n.filter((e) => w.includes(e))).map((e) => {
            switch (e) {
                case d.z.DESKTOP:
                    return (0, s.jsx)(m.ScreenIcon, { size: 'xs' }, e);
                case d.z.XBOX:
                    return (0, s.jsx)(m.XboxNeutralIcon, { size: 'xs' }, e);
                case d.z.PLAYSTATION:
                    return (0, s.jsx)(m.PlaystationNeutralIcon, { size: 'xs' }, e);
                case d.z.NINTENDO:
                    return (0, s.jsx)(m.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, s.jsxs)('div', {
            className: o()(B.row, B.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, s.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                r
            ]
        });
    },
    W = (e) => e.filter(j.z6).slice(0, 5),
    Y = (e) => {
        var a, t;
        let { applicationId: i, source: _, sourceUserId: d, transitionState: w, onClose: Y } = e,
            { clientThemesClassName: z } = (0, O.ZP)(),
            { width: V, height: X } = (0, S.b)(),
            [J, q] = r.useState(() => {
                var e;
                return null === (e = A.K.get(y)) || void 0 === e ? void 0 : e[i];
            }),
            $ = (0, I.e7)([L.default], () => L.default.locale),
            [ee, ea] = r.useState(!0),
            [en, es] = r.useState(!1),
            er = r.useRef(null),
            et = r.useMemo(() => (0, G.fP)(), []);
        r.useEffect(() => {
            let e = er.current;
            null != e && es(e.scrollHeight - e.clientHeight > 1);
        }, [er, V, X]),
            r.useEffect(() => {
                (0, R.Jn)();
            }, []);
        let eo = (0, I.Wu)([x.Z], () => {
                var e;
                return (null !== (e = x.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
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
                0 === eo.length && (0, f.i)(i), T.Z.getDetectableGamesSupplemental([i, ...eo]);
            }, [i, eo]);
        let ec = (0, I.e7)([x.Z, P.Z], () => {
                let e = void 0 === x.Z.getSimilarGames(i),
                    a = eo.some((e) => P.Z.isFetching(e));
                return e || a;
            }),
            { entries: e_ } = (0, Z.Z)(),
            eE = r.useMemo(() => {
                var e;
                return null !== (e = null == e_ ? void 0 : e_.filter((e) => (0, p.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [e_, i]),
            ed = eE.length > 7,
            [eu, eI] = r.useState(!1);
        r.useEffect(() => {
            var e, a;
            return (
                (0, G.IS)({
                    source: _,
                    viewId: et,
                    applicationId: i,
                    gameName: null !== (a = null !== (e = null == em ? void 0 : em.name) && void 0 !== e ? e : null == eA ? void 0 : eA.name) && void 0 !== a ? a : '',
                    authorId: d
                }),
                () => {
                    var e, a;
                    let n = Date.now(),
                        s = eE.map((e) => {
                            let a = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, $);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: a
                            });
                        });
                    (0, G.wz)({
                        viewId: et,
                        applicationId: i,
                        gameName: null !== (a = null !== (e = null == em ? void 0 : em.name) && void 0 !== e ? e : null == eA ? void 0 : eA.name) && void 0 !== a ? a : '',
                        playedFriendIds: eE.map((e) => e.author_id),
                        playedFriendsData: s,
                        similarGames: W(el.current)
                    });
                }
            );
        }, []);
        let eA = N.Z.getApplication(i),
            em = (0, I.e7)([P.Z], () => P.Z.getGame(i)),
            eT = r.useMemo(() => (null == em ? void 0 : em.genres.map(C.P3).join(', ')), [em]),
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
                (0, G.UE)({
                    gameName: null != eP ? eP : '',
                    applicationId: i,
                    action: e,
                    similarGameId: a,
                    viewId: et
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
            eS = null == eA ? void 0 : eA.getIconURL(160, M.$k ? 'webp' : 'png'),
            eL = null !== (t = em.coverImageUrl) && void 0 !== t ? t : eS,
            { summary: eM, websites: eC, publishers: eh, platforms: eG } = em,
            ef = h.default.extractTimestamp(i),
            ex = E()().diff(E()(ef), 'days') <= F.G,
            ev = eE.some((e) => (0, g.ig)(e) === u.o.GLOBAL);
        return (0, s.jsx)(m.ModalRoot, {
            transitionState: w,
            size: m.ModalSize.DYNAMIC,
            className: o()(z, B.gameProfileModal),
            children: (0, s.jsxs)(m.ScrollerNone, {
                className: B.scrollable,
                children: [
                    (0, s.jsx)('div', {
                        className: o()(B.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eN, '")') }
                    }),
                    (0, s.jsxs)('div', {
                        className: o()(B.content, B.column, B.headerInfo),
                        children: [
                            (0, s.jsx)('div', {
                                className: B.logoWrapper,
                                children:
                                    null != eL &&
                                    (0, s.jsx)('img', {
                                        className: B.logo,
                                        src: eL,
                                        alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eP })
                                    })
                            }),
                            (0, s.jsxs)('div', {
                                className: o()(B.row, B.gapSm, B.gameDetails),
                                children: [
                                    (0, s.jsxs)('div', {
                                        children: [
                                            (0, s.jsx)(m.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eP
                                            }),
                                            (0, s.jsxs)('div', {
                                                className: o()(B.row, B.gapSm),
                                                children: [
                                                    null != eS &&
                                                        (0, s.jsx)('img', {
                                                            src: eS,
                                                            height: 16,
                                                            alt: U.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eP })
                                                        }),
                                                    (0, s.jsx)(m.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eT
                                                    }),
                                                    ex &&
                                                        (0, s.jsx)(m.Text, {
                                                            variant: 'eyebrow',
                                                            className: B.newBadge,
                                                            children: U.Z.Messages.NEW
                                                        }),
                                                    ev &&
                                                        (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                (0, s.jsx)(m.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, s.jsx)(k, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)('div', {
                                        children:
                                            ep &&
                                            (0, s.jsx)(m.Tooltip, {
                                                text: J ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : U.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, s.jsxs)(m.Button, {
                                                        ...e,
                                                        innerClassName: B.followButton,
                                                        color: J ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let a = null !== (e = A.K.get(y)) && void 0 !== e ? e : {};
                                                            (a[i] = !a[i]),
                                                                A.K.set(y, a),
                                                                eR(a[i] ? G.as.FollowGame : G.as.UnfollowGame),
                                                                a[i] &&
                                                                    (0, b.L)() &&
                                                                    (0, m.openModalLazy)(async () => {
                                                                        let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                                                                        return (a) =>
                                                                            (0, s.jsx)(e, {
                                                                                ...a,
                                                                                applicationId: i,
                                                                                background: eN,
                                                                                viewId: et
                                                                            });
                                                                    }),
                                                                q(a[i]);
                                                        },
                                                        children: [J ? (0, s.jsx)(m.BellSlashIcon, { color: 'white' }) : (0, s.jsx)(m.BellIcon, { color: 'white' }), J ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : U.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)(m.HeadingLevel, {
                        children: (0, s.jsxs)('div', {
                            className: o()(B.content, B.mainContent),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: B.column,
                                    children: [
                                        (0, s.jsx)(m.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: U.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: o()(B.section, { [B.fadedEntries]: ed && !eu }),
                                            children: [
                                                0 === eE.length &&
                                                    (0, s.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: B.emptyFriendsWhoPlay,
                                                        children: U.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, s.jsx)('div', {
                                                    className: o()(B.column, B.gapNone),
                                                    children:
                                                        null == eE
                                                            ? void 0
                                                            : eE.slice(0, ed && !eu ? 6 : void 0).map((e) =>
                                                                  (0, s.jsx)(
                                                                      D.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: et,
                                                                          onClose: Y
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        ed &&
                                            !eu &&
                                            (0, s.jsxs)(m.Clickable, {
                                                className: B.expandEntriesButton,
                                                onClick: () => eI(!0),
                                                children: [
                                                    (0, s.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: U.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, s.jsx)(m.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eO.length > 0 &&
                                            (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)(m.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: U.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, s.jsx)(m.Scroller, {
                                                        className: o()(B.row, B.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eO.map((e, a) =>
                                                            (0, s.jsx)(
                                                                m.Clickable,
                                                                {
                                                                    className: B.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: B.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eR(G.as.ClickImage),
                                                                            (0, m.openModalLazy)(async () => {
                                                                                let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                                                                                return (n) => {
                                                                                    let { ...r } = n;
                                                                                    return (0, s.jsx)(e, {
                                                                                        className: B.mediaModal,
                                                                                        ...r,
                                                                                        items: eO,
                                                                                        startingIndex: a
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, s.jsx)('img', {
                                                                        src: e.src,
                                                                        className: B.gameArtwork,
                                                                        alt: U.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eP })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, s.jsx)(m.Spacer, { size: 8 })
                                                ]
                                            }),
                                        ec &&
                                            (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)('div', { className: B.loadingHeadingSimilarGames }),
                                                    (0, s.jsx)('div', {
                                                        className: B.row,
                                                        children: (0, c.range)(0, 5).map((e) => (0, s.jsx)('div', { className: B.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !ec &&
                                            ei.length > 0 &&
                                            (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)(m.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: U.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, s.jsx)('div', {
                                                        className: B.row,
                                                        style: {},
                                                        children: ei.map((e) =>
                                                            (0, s.jsx)(
                                                                H,
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
                                (0, s.jsxs)('div', {
                                    className: o()(B.sidebar, B.column),
                                    children: [
                                        (0, s.jsx)(m.Heading, {
                                            variant: 'heading-md/bold',
                                            children: U.Z.Messages.ABOUT
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: B.sidebarSections,
                                            children: [
                                                null != eM &&
                                                    (0, s.jsxs)('div', {
                                                        className: o()(B.column, B.gapSm),
                                                        children: [
                                                            (0, s.jsx)(m.Text, {
                                                                ref: er,
                                                                lineClamp: ee ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eM
                                                            }),
                                                            (en || !ee) &&
                                                                (0, s.jsx)(m.Clickable, {
                                                                    className: B.clickable,
                                                                    onClick: () => {
                                                                        eR(ee ? G.as.ShowMore : G.as.ShowLess), ea(!ee);
                                                                    },
                                                                    children: (0, s.jsx)(m.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: ee ? U.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : U.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, s.jsx)(K.Z, {
                                                    websites: eC,
                                                    trackClick: eR
                                                }),
                                                (eh.length > 0 || eG.length > 0) &&
                                                    (0, s.jsx)('div', {
                                                        className: o()(B.column),
                                                        children:
                                                            eh.length > 0 &&
                                                            (0, s.jsxs)('div', {
                                                                className: o()(B.column, B.gapSm),
                                                                children: [
                                                                    (0, s.jsx)(m.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: U.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, s.jsxs)('div', {
                                                                        className: o()(B.row, B.gapMd),
                                                                        children: [
                                                                            (0, s.jsx)(m.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: eh.join(', ')
                                                                            }),
                                                                            eG.length > 0 && (0, s.jsx)(Q, { platforms: eG })
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
