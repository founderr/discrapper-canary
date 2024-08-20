n.r(a), n(47120), n(653041);
var t = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(512722),
    l = n.n(i),
    c = n(913527),
    u = n.n(c),
    _ = n(758713),
    E = n(705512),
    d = n(442837),
    I = n(433517),
    A = n(481060),
    T = n(224706),
    m = n(812206),
    O = n(168551),
    N = n(485267),
    R = n(26033),
    p = n(561308),
    P = n(669764),
    g = n(962250),
    C = n(706454),
    L = n(768581),
    M = n(814225),
    S = n(709054),
    h = n(810568),
    f = n(998058),
    x = n(839392),
    G = n(96856),
    v = n(567409),
    Z = n(774073),
    j = n(124030),
    b = n(383895),
    D = n(183391),
    K = n(206583),
    U = n(689938),
    y = n(707443);
let B = 'GameProfileModal',
    F = (e) => {
        let { game: a, onClose: n, trackClick: r } = e,
            s = (0, d.e7)([m.Z], () => {
                var e;
                return m.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
            });
        if (null == a) return null;
        let o = a.coverImageUrl;
        return (0, t.jsx)(A.Tooltip, {
            text: a.name,
            children: (e) => {
                var i;
                return (0, t.jsx)(A.Clickable, {
                    ...e,
                    className: y.clickable,
                    onClick: async () => {
                        r(h.as.ClickSimilarGame, a.applicationId),
                            (0, A.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, t.jsx)(W, {
                                        applicationId: a.applicationId,
                                        source: h.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            n();
                    },
                    children: (0, t.jsx)('img', {
                        src: o,
                        className: y.similarGames,
                        alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : null == a ? void 0 : a.name })
                    })
                });
            }
        });
    },
    w = () =>
        (0, t.jsxs)('div', {
            className: y.gameBadge,
            children: [
                (0, t.jsx)(A.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(A.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: U.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    H = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
    k = (e) => {
        let { platforms: a } = e,
            n = [...new Set(a)];
        !n.includes(_.z.DESKTOP) && (n.includes(_.z.MACOS) || n.includes(_.z.LINUX)) && n.push(_.z.DESKTOP);
        let r = (n = n.filter((e) => H.includes(e))).map((e) => {
            switch (e) {
                case _.z.DESKTOP:
                    return (0, t.jsx)(A.ScreenIcon, { size: 'xs' }, e);
                case _.z.XBOX:
                    return (0, t.jsx)(A.XboxNeutralIcon, { size: 'xs' }, e);
                case _.z.PLAYSTATION:
                    return (0, t.jsx)(A.PlaystationNeutralIcon, { size: 'xs' }, e);
                case _.z.NINTENDO:
                    return (0, t.jsx)(A.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, t.jsxs)('div', {
            className: o()(y.row, y.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, t.jsx)(A.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                r
            ]
        });
    },
    Q = (e) => e.filter(Z.z6).slice(0, 5),
    W = (e) => {
        var a, s;
        let { applicationId: i, source: c, sourceUserId: _, transitionState: H, onClose: W } = e,
            { clientThemesClassName: Y } = (0, O.ZP)(),
            { width: z, height: V } = (0, g.b)(),
            [X, J] = r.useState(() => {
                var e;
                return null === (e = I.K.get(B)) || void 0 === e ? void 0 : e[i];
            }),
            q = (0, d.e7)([C.default], () => C.default.locale),
            [$, ee] = r.useState(!0),
            [ea, en] = r.useState(!1),
            et = r.useRef(null),
            er = r.useMemo(() => (0, h.fP)(), []);
        r.useEffect(() => {
            let e = et.current;
            null != e && en(e.scrollHeight - e.clientHeight > 1);
        }, [et, z, V]),
            r.useEffect(() => {
                (0, N.Jn)();
            }, []);
        let es = (0, d.Wu)([x.Z], () => {
                var e;
                return (null !== (e = x.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            eo = (0, d.Wu)([P.Z], () =>
                es
                    .map((e) => P.Z.getGame(e))
                    .filter(Z.W1)
                    .slice(0, 5)
            ),
            ei = r.useRef([]);
        r.useEffect(() => {
            ei.current = es;
        }, [es]);
        let { entries: el } = (0, v.Z)(),
            ec = r.useMemo(() => {
                var e;
                return null !== (e = null == el ? void 0 : el.filter((e) => (0, R.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [el, i]),
            eu = ec.length > 7,
            [e_, eE] = r.useState(!1);
        r.useEffect(() => {
            var e, a;
            return (
                (0, h.IS)({
                    source: c,
                    viewId: er,
                    applicationId: i,
                    gameName: null !== (a = null !== (e = null == eI ? void 0 : eI.name) && void 0 !== e ? e : null == ed ? void 0 : ed.name) && void 0 !== a ? a : '',
                    authorId: _
                }),
                () => {
                    var e, a;
                    let n = Date.now(),
                        t = ec.map((e) => {
                            let a = (0, p.kr)(e) ? (0, p.T_)(e, n) : (0, p.GL)(e, q);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: a
                            });
                        });
                    (0, h.wz)({
                        viewId: er,
                        applicationId: i,
                        gameName: null !== (a = null !== (e = null == eI ? void 0 : eI.name) && void 0 !== e ? e : null == ed ? void 0 : ed.name) && void 0 !== a ? a : '',
                        playedFriendIds: ec.map((e) => e.author_id),
                        playedFriendsData: t,
                        similarGames: Q(ei.current)
                    });
                }
            );
        }, []),
            r.useEffect(() => {
                0 === es.length && (0, f.i)(i);
            }, [i, es]),
            r.useEffect(() => {
                T.Z.getDetectableGamesSupplemental([i, ...es]);
            }, [i, es]);
        let ed = m.Z.getApplication(i),
            eI = (0, d.e7)([P.Z], () => P.Z.getGame(i)),
            eA = r.useMemo(() => (null == eI ? void 0 : eI.genres.map(M.P3).join(', ')), [eI]),
            eT = r.useMemo(() => {
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
            em = r.useMemo(() => {
                var e, a;
                let n = (null !== (e = null == eI ? void 0 : eI.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (a = null == eI ? void 0 : eI.screenshots) && void 0 !== a ? a : []).map((e) => ({ src: e })), ...n];
            }, [null == eI ? void 0 : eI.artwork, null == eI ? void 0 : eI.screenshots]),
            eO = (e, a) => {
                (0, h.UE)({
                    gameName: null != ep ? ep : '',
                    applicationId: i,
                    action: e,
                    similarGameId: a,
                    viewId: er
                });
            },
            eN = (0, G.p)('GameProfileModal'),
            { shouldOpenGameProfile: eR } = (0, Z.ZP)({
                location: 'GameProfileModal',
                applicationId: i,
                trackEntryPointImpression: !1
            });
        if ((l()(eR, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`"), null == eI)) return null;
        let ep = null !== (a = eI.name) && void 0 !== a ? a : null == ed ? void 0 : ed.name,
            eP = null == ed ? void 0 : ed.getIconURL(160, L.$k ? 'webp' : 'png'),
            eg = null !== (s = eI.coverImageUrl) && void 0 !== s ? s : eP,
            { summary: eC, websites: eL, publishers: eM, platforms: eS } = eI,
            eh = S.default.extractTimestamp(i),
            ef = u()().diff(u()(eh), 'days') <= K.G,
            ex = ec.some((e) => (0, p.ig)(e) === E.o.GLOBAL);
        return (0, t.jsx)(A.ModalRoot, {
            transitionState: H,
            size: A.ModalSize.DYNAMIC,
            className: o()(Y, y.gameProfileModal),
            children: (0, t.jsxs)(A.ScrollerNone, {
                className: y.scrollable,
                children: [
                    (0, t.jsx)('div', {
                        className: o()(y.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eT, '")') }
                    }),
                    (0, t.jsxs)('div', {
                        className: o()(y.content, y.column, y.headerInfo),
                        children: [
                            (0, t.jsx)('div', {
                                className: y.logoWrapper,
                                children:
                                    null != eg &&
                                    (0, t.jsx)('img', {
                                        className: y.logo,
                                        src: eg,
                                        alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: ep })
                                    })
                            }),
                            (0, t.jsxs)('div', {
                                className: o()(y.row, y.gapSm, y.gameDetails),
                                children: [
                                    (0, t.jsxs)('div', {
                                        children: [
                                            (0, t.jsx)(A.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: ep
                                            }),
                                            (0, t.jsxs)('div', {
                                                className: o()(y.row, y.gapSm),
                                                children: [
                                                    null != eP &&
                                                        (0, t.jsx)('img', {
                                                            src: eP,
                                                            height: 16,
                                                            alt: U.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: ep })
                                                        }),
                                                    (0, t.jsx)(A.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eA
                                                    }),
                                                    ef &&
                                                        (0, t.jsx)(A.Text, {
                                                            variant: 'eyebrow',
                                                            className: y.newBadge,
                                                            children: U.Z.Messages.NEW
                                                        }),
                                                    ex &&
                                                        (0, t.jsxs)(t.Fragment, {
                                                            children: [
                                                                (0, t.jsx)(A.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, t.jsx)(w, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)('div', {
                                        children:
                                            eN &&
                                            (0, t.jsx)(A.Tooltip, {
                                                text: X ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : U.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, t.jsxs)(A.Button, {
                                                        ...e,
                                                        innerClassName: y.followButton,
                                                        color: X ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let a = null !== (e = I.K.get(B)) && void 0 !== e ? e : {};
                                                            (a[i] = !a[i]),
                                                                I.K.set(B, a),
                                                                eO(a[i] ? h.as.FollowGame : h.as.UnfollowGame),
                                                                a[i] &&
                                                                    (0, j.L)() &&
                                                                    (0, A.openModalLazy)(async () => {
                                                                        let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                                                                        return (a) =>
                                                                            (0, t.jsx)(e, {
                                                                                ...a,
                                                                                applicationId: i,
                                                                                background: eT,
                                                                                viewId: er
                                                                            });
                                                                    }),
                                                                J(a[i]);
                                                        },
                                                        children: [X ? (0, t.jsx)(A.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(A.BellIcon, { color: 'white' }), X ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : U.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, t.jsx)(A.HeadingLevel, {
                        children: (0, t.jsxs)('div', {
                            className: o()(y.content, y.mainContent),
                            children: [
                                (0, t.jsxs)('div', {
                                    className: y.column,
                                    children: [
                                        (0, t.jsx)(A.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: U.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: o()(y.section, { [y.fadedEntries]: eu && !e_ }),
                                            children: [
                                                0 === ec.length &&
                                                    (0, t.jsx)(A.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: y.emptyFriendsWhoPlay,
                                                        children: U.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, t.jsx)('div', {
                                                    className: o()(y.column, y.gapNone),
                                                    children:
                                                        null == ec
                                                            ? void 0
                                                            : ec.slice(0, eu && !e_ ? 6 : void 0).map((e) =>
                                                                  (0, t.jsx)(
                                                                      b.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: er,
                                                                          onClose: W
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        eu &&
                                            !e_ &&
                                            (0, t.jsxs)(A.Clickable, {
                                                className: y.expandEntriesButton,
                                                onClick: () => eE(!0),
                                                children: [
                                                    (0, t.jsx)(A.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: U.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, t.jsx)(A.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        em.length > 0 &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(A.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: U.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, t.jsx)(A.Scroller, {
                                                        className: o()(y.row, y.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: em.map((e, a) =>
                                                            (0, t.jsx)(
                                                                A.Clickable,
                                                                {
                                                                    className: y.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: y.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eO(h.as.ClickImage),
                                                                            (0, A.openModalLazy)(async () => {
                                                                                let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                                                                                return (n) => {
                                                                                    let { ...r } = n;
                                                                                    return (0, t.jsx)(e, {
                                                                                        className: y.mediaModal,
                                                                                        ...r,
                                                                                        items: em,
                                                                                        startingIndex: a
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, t.jsx)('img', {
                                                                        src: e.src,
                                                                        className: y.gameArtwork,
                                                                        alt: U.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: ep })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, t.jsx)(A.Spacer, { size: 8 })
                                                ]
                                            }),
                                        eo.length > 0 &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(A.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: U.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, t.jsx)('div', {
                                                        className: y.row,
                                                        style: {},
                                                        children: eo.map((e) =>
                                                            (0, t.jsx)(
                                                                F,
                                                                {
                                                                    game: e,
                                                                    onClose: W,
                                                                    trackClick: eO
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
                                    className: o()(y.sidebar, y.column),
                                    children: [
                                        (0, t.jsx)(A.Heading, {
                                            variant: 'heading-md/bold',
                                            children: U.Z.Messages.ABOUT
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: y.sidebarSections,
                                            children: [
                                                null != eC &&
                                                    (0, t.jsxs)('div', {
                                                        className: o()(y.column, y.gapSm),
                                                        children: [
                                                            (0, t.jsx)(A.Text, {
                                                                ref: et,
                                                                lineClamp: $ ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eC
                                                            }),
                                                            (ea || !$) &&
                                                                (0, t.jsx)(A.Clickable, {
                                                                    className: y.clickable,
                                                                    onClick: () => {
                                                                        eO($ ? h.as.ShowMore : h.as.ShowLess), ee(!$);
                                                                    },
                                                                    children: (0, t.jsx)(A.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: $ ? U.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : U.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, t.jsx)(D.Z, {
                                                    websites: eL,
                                                    trackClick: eO
                                                }),
                                                (eM.length > 0 || eS.length > 0) &&
                                                    (0, t.jsx)('div', {
                                                        className: o()(y.column),
                                                        children:
                                                            eM.length > 0 &&
                                                            (0, t.jsxs)('div', {
                                                                className: o()(y.column, y.gapSm),
                                                                children: [
                                                                    (0, t.jsx)(A.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: U.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, t.jsxs)('div', {
                                                                        className: o()(y.row, y.gapMd),
                                                                        children: [
                                                                            (0, t.jsx)(A.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: eM.join(', ')
                                                                            }),
                                                                            eS.length > 0 && (0, t.jsx)(k, { platforms: eS })
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
