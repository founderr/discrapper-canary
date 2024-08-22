n.r(a), n(47120), n(653041);
var s = n(735250),
    t = n(470079),
    r = n(120356),
    o = n.n(r),
    i = n(512722),
    l = n.n(i),
    c = n(913527),
    _ = n.n(c),
    E = n(758713),
    u = n(705512),
    d = n(442837),
    I = n(433517),
    A = n(481060),
    m = n(224706),
    T = n(812206),
    N = n(168551),
    O = n(485267),
    R = n(26033),
    p = n(561308),
    P = n(669764),
    g = n(962250),
    L = n(706454),
    S = n(768581),
    M = n(814225),
    C = n(709054),
    h = n(810568),
    G = n(998058),
    f = n(839392),
    x = n(96856),
    v = n(567409),
    Z = n(774073),
    j = n(124030),
    b = n(383895),
    D = n(183391),
    K = n(206583),
    U = n(689938),
    B = n(707443);
let F = 'GameProfileModal',
    y = (e) => {
        let { game: a, onClose: n, trackClick: t } = e,
            r = (0, d.e7)([T.Z], () => {
                var e;
                return T.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
            });
        if (null == a) return null;
        let o = a.coverImageUrl;
        return (0, s.jsx)(A.Tooltip, {
            text: a.name,
            children: (e) => {
                var i;
                return (0, s.jsx)(A.Clickable, {
                    ...e,
                    className: B.clickable,
                    onClick: async () => {
                        t(h.as.ClickSimilarGame, a.applicationId),
                            (0, A.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, s.jsx)(W, {
                                        applicationId: a.applicationId,
                                        source: h.m1.SimilarGames,
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
                        alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == a ? void 0 : a.name })
                    })
                });
            }
        });
    },
    H = () =>
        (0, s.jsxs)('div', {
            className: B.gameBadge,
            children: [
                (0, s.jsx)(A.FireIcon, { size: 'xxs' }),
                (0, s.jsx)(A.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: U.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    k = [E.z.DESKTOP, E.z.XBOX, E.z.PLAYSTATION, E.z.NINTENDO],
    w = (e) => {
        let { platforms: a } = e,
            n = [...new Set(a)];
        !n.includes(E.z.DESKTOP) && (n.includes(E.z.MACOS) || n.includes(E.z.LINUX)) && n.push(E.z.DESKTOP);
        let t = (n = n.filter((e) => k.includes(e))).map((e) => {
            switch (e) {
                case E.z.DESKTOP:
                    return (0, s.jsx)(A.ScreenIcon, { size: 'xs' }, e);
                case E.z.XBOX:
                    return (0, s.jsx)(A.XboxNeutralIcon, { size: 'xs' }, e);
                case E.z.PLAYSTATION:
                    return (0, s.jsx)(A.PlaystationNeutralIcon, { size: 'xs' }, e);
                case E.z.NINTENDO:
                    return (0, s.jsx)(A.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, s.jsxs)('div', {
            className: o()(B.row, B.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, s.jsx)(A.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                t
            ]
        });
    },
    Q = (e) => e.filter(Z.z6).slice(0, 5),
    W = (e) => {
        var a, r;
        let { applicationId: i, source: c, sourceUserId: E, transitionState: k, onClose: W } = e,
            { clientThemesClassName: Y } = (0, N.ZP)(),
            { width: z, height: V } = (0, g.b)(),
            [X, J] = t.useState(() => {
                var e;
                return null === (e = I.K.get(F)) || void 0 === e ? void 0 : e[i];
            }),
            q = (0, d.e7)([L.default], () => L.default.locale),
            [$, ee] = t.useState(!0),
            [ea, en] = t.useState(!1),
            es = t.useRef(null),
            et = t.useMemo(() => (0, h.fP)(), []);
        t.useEffect(() => {
            let e = es.current;
            null != e && en(e.scrollHeight - e.clientHeight > 1);
        }, [es, z, V]),
            t.useEffect(() => {
                (0, O.Jn)();
            }, []);
        let er = (0, d.Wu)([f.Z], () => {
                var e;
                return (null !== (e = f.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            eo = (0, d.Wu)([P.Z], () =>
                er
                    .map((e) => P.Z.getGame(e))
                    .filter(Z.W1)
                    .slice(0, 5)
            ),
            ei = t.useRef([]);
        t.useEffect(() => {
            ei.current = er;
        }, [er]);
        let { entries: el } = (0, v.Z)(),
            ec = t.useMemo(() => {
                var e;
                return null !== (e = null == el ? void 0 : el.filter((e) => (0, R.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [el, i]),
            e_ = ec.length > 7,
            [eE, eu] = t.useState(!1);
        t.useEffect(() => {
            var e, a;
            return (
                (0, h.IS)({
                    source: c,
                    viewId: et,
                    applicationId: i,
                    gameName: null !== (a = null !== (e = null == eI ? void 0 : eI.name) && void 0 !== e ? e : null == ed ? void 0 : ed.name) && void 0 !== a ? a : '',
                    authorId: E
                }),
                () => {
                    var e, a;
                    let n = Date.now(),
                        s = ec.map((e) => {
                            let a = (0, p.kr)(e) ? (0, p.T_)(e, n) : (0, p.GL)(e, q);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: a
                            });
                        });
                    (0, h.wz)({
                        viewId: et,
                        applicationId: i,
                        gameName: null !== (a = null !== (e = null == eI ? void 0 : eI.name) && void 0 !== e ? e : null == ed ? void 0 : ed.name) && void 0 !== a ? a : '',
                        playedFriendIds: ec.map((e) => e.author_id),
                        playedFriendsData: s,
                        similarGames: Q(ei.current)
                    });
                }
            );
        }, []),
            t.useEffect(() => {
                0 === er.length && (0, G.i)(i);
            }, [i, er]),
            t.useEffect(() => {
                m.Z.getDetectableGamesSupplemental([i, ...er]);
            }, [i, er]);
        let ed = T.Z.getApplication(i),
            eI = (0, d.e7)([P.Z], () => P.Z.getGame(i)),
            eA = t.useMemo(() => (null == eI ? void 0 : eI.genres.map(M.P3).join(', ')), [eI]),
            em = t.useMemo(() => {
                if (null == eI) return '';
                let { artwork: e, screenshots: a } = eI;
                if (e.length > 0) {
                    let a = Math.floor(Math.random() * (e.length - 1));
                    return e[a];
                }
                if (a.length > 0) {
                    let e = Math.floor(Math.random() * (a.length - 1));
                    return a[e];
                }
                return '';
            }, [eI]),
            eT = t.useMemo(() => {
                var e, a;
                let n = (null !== (e = null == eI ? void 0 : eI.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (a = null == eI ? void 0 : eI.screenshots) && void 0 !== a ? a : []).map((e) => ({ src: e })), ...n];
            }, [null == eI ? void 0 : eI.artwork, null == eI ? void 0 : eI.screenshots]),
            eN = (e, a) => {
                (0, h.UE)({
                    gameName: null != ep ? ep : '',
                    applicationId: i,
                    action: e,
                    similarGameId: a,
                    viewId: et
                });
            },
            eO = (0, x.p)('GameProfileModal'),
            { shouldOpenGameProfile: eR } = (0, Z.ZP)({
                location: 'GameProfileModal',
                applicationId: i,
                trackEntryPointImpression: !1
            });
        if ((l()(eR, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`"), null == eI)) return null;
        let ep = null !== (a = eI.name) && void 0 !== a ? a : null == ed ? void 0 : ed.name,
            eP = null == ed ? void 0 : ed.getIconURL(160, S.$k ? 'webp' : 'png'),
            eg = null !== (r = eI.coverImageUrl) && void 0 !== r ? r : eP,
            { summary: eL, websites: eS, publishers: eM, platforms: eC } = eI,
            eh = C.default.extractTimestamp(i),
            eG = _()().diff(_()(eh), 'days') <= K.G,
            ef = ec.some((e) => (0, p.ig)(e) === u.o.GLOBAL);
        return (0, s.jsx)(A.ModalRoot, {
            transitionState: k,
            size: A.ModalSize.DYNAMIC,
            className: o()(Y, B.gameProfileModal),
            children: (0, s.jsxs)(A.ScrollerNone, {
                className: B.scrollable,
                children: [
                    (0, s.jsx)('div', {
                        className: o()(B.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(em, '")') }
                    }),
                    (0, s.jsxs)('div', {
                        className: o()(B.content, B.column, B.headerInfo),
                        children: [
                            (0, s.jsx)('div', {
                                className: B.logoWrapper,
                                children:
                                    null != eg &&
                                    (0, s.jsx)('img', {
                                        className: B.logo,
                                        src: eg,
                                        alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: ep })
                                    })
                            }),
                            (0, s.jsxs)('div', {
                                className: o()(B.row, B.gapSm, B.gameDetails),
                                children: [
                                    (0, s.jsxs)('div', {
                                        children: [
                                            (0, s.jsx)(A.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: ep
                                            }),
                                            (0, s.jsxs)('div', {
                                                className: o()(B.row, B.gapSm),
                                                children: [
                                                    null != eP &&
                                                        (0, s.jsx)('img', {
                                                            src: eP,
                                                            height: 16,
                                                            alt: U.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: ep })
                                                        }),
                                                    (0, s.jsx)(A.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eA
                                                    }),
                                                    eG &&
                                                        (0, s.jsx)(A.Text, {
                                                            variant: 'eyebrow',
                                                            className: B.newBadge,
                                                            children: U.Z.Messages.NEW
                                                        }),
                                                    ef &&
                                                        (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                (0, s.jsx)(A.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, s.jsx)(H, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)('div', {
                                        children:
                                            eO &&
                                            (0, s.jsx)(A.Tooltip, {
                                                text: X ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : U.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, s.jsxs)(A.Button, {
                                                        ...e,
                                                        innerClassName: B.followButton,
                                                        color: X ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let a = null !== (e = I.K.get(F)) && void 0 !== e ? e : {};
                                                            (a[i] = !a[i]),
                                                                I.K.set(F, a),
                                                                eN(a[i] ? h.as.FollowGame : h.as.UnfollowGame),
                                                                a[i] &&
                                                                    (0, j.L)() &&
                                                                    (0, A.openModalLazy)(async () => {
                                                                        let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                                                                        return (a) =>
                                                                            (0, s.jsx)(e, {
                                                                                ...a,
                                                                                applicationId: i,
                                                                                background: em,
                                                                                viewId: et
                                                                            });
                                                                    }),
                                                                J(a[i]);
                                                        },
                                                        children: [X ? (0, s.jsx)(A.BellSlashIcon, { color: 'white' }) : (0, s.jsx)(A.BellIcon, { color: 'white' }), X ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : U.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)(A.HeadingLevel, {
                        children: (0, s.jsxs)('div', {
                            className: o()(B.content, B.mainContent),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: B.column,
                                    children: [
                                        (0, s.jsx)(A.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: U.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: o()(B.section, { [B.fadedEntries]: e_ && !eE }),
                                            children: [
                                                0 === ec.length &&
                                                    (0, s.jsx)(A.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: B.emptyFriendsWhoPlay,
                                                        children: U.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, s.jsx)('div', {
                                                    className: o()(B.column, B.gapNone),
                                                    children:
                                                        null == ec
                                                            ? void 0
                                                            : ec.slice(0, e_ && !eE ? 6 : void 0).map((e) =>
                                                                  (0, s.jsx)(
                                                                      b.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: et,
                                                                          onClose: W
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        e_ &&
                                            !eE &&
                                            (0, s.jsxs)(A.Clickable, {
                                                className: B.expandEntriesButton,
                                                onClick: () => eu(!0),
                                                children: [
                                                    (0, s.jsx)(A.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: U.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, s.jsx)(A.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eT.length > 0 &&
                                            (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)(A.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: U.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, s.jsx)(A.Scroller, {
                                                        className: o()(B.row, B.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eT.map((e, a) =>
                                                            (0, s.jsx)(
                                                                A.Clickable,
                                                                {
                                                                    className: B.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: B.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eN(h.as.ClickImage),
                                                                            (0, A.openModalLazy)(async () => {
                                                                                let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                                                                                return (n) => {
                                                                                    let { ...t } = n;
                                                                                    return (0, s.jsx)(e, {
                                                                                        className: B.mediaModal,
                                                                                        ...t,
                                                                                        items: eT,
                                                                                        startingIndex: a
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, s.jsx)('img', {
                                                                        src: e.src,
                                                                        className: B.gameArtwork,
                                                                        alt: U.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: ep })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, s.jsx)(A.Spacer, { size: 8 })
                                                ]
                                            }),
                                        eo.length > 0 &&
                                            (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)(A.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: U.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, s.jsx)('div', {
                                                        className: B.row,
                                                        style: {},
                                                        children: eo.map((e) =>
                                                            (0, s.jsx)(
                                                                y,
                                                                {
                                                                    game: e,
                                                                    onClose: W,
                                                                    trackClick: eN
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
                                        (0, s.jsx)(A.Heading, {
                                            variant: 'heading-md/bold',
                                            children: U.Z.Messages.ABOUT
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: B.sidebarSections,
                                            children: [
                                                null != eL &&
                                                    (0, s.jsxs)('div', {
                                                        className: o()(B.column, B.gapSm),
                                                        children: [
                                                            (0, s.jsx)(A.Text, {
                                                                ref: es,
                                                                lineClamp: $ ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eL
                                                            }),
                                                            (ea || !$) &&
                                                                (0, s.jsx)(A.Clickable, {
                                                                    className: B.clickable,
                                                                    onClick: () => {
                                                                        eN($ ? h.as.ShowMore : h.as.ShowLess), ee(!$);
                                                                    },
                                                                    children: (0, s.jsx)(A.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: $ ? U.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : U.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, s.jsx)(D.Z, {
                                                    websites: eS,
                                                    trackClick: eN
                                                }),
                                                (eM.length > 0 || eC.length > 0) &&
                                                    (0, s.jsx)('div', {
                                                        className: o()(B.column),
                                                        children:
                                                            eM.length > 0 &&
                                                            (0, s.jsxs)('div', {
                                                                className: o()(B.column, B.gapSm),
                                                                children: [
                                                                    (0, s.jsx)(A.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: U.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, s.jsxs)('div', {
                                                                        className: o()(B.row, B.gapMd),
                                                                        children: [
                                                                            (0, s.jsx)(A.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: eM.join(', ')
                                                                            }),
                                                                            eC.length > 0 && (0, s.jsx)(w, { platforms: eC })
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
a.default = W;
