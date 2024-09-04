n.r(a), n(47120), n(653041);
var t = n(735250),
    r = n(470079),
    s = n(120356),
    i = n.n(s),
    o = n(512722),
    l = n.n(o),
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
let w = 'GameProfileModal',
    U = (e) => {
        let { game: a, onClose: n, trackClick: r } = e,
            s = (0, I.e7)([N.Z], () => {
                var e;
                return N.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
            });
        if (null == a) return null;
        let i = a.coverImageUrl;
        return (0, t.jsx)(m.Tooltip, {
            text: a.name,
            children: (e) => {
                var o;
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
                        src: i,
                        className: B.similarGames,
                        alt: y.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (o = null == s ? void 0 : s.name) && void 0 !== o ? o : null == a ? void 0 : a.name })
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
            className: i()(B.row, B.gapSm),
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
        let { applicationId: o, source: d, sourceUserId: _, transitionState: H, onClose: Y } = e,
            { clientThemesClassName: z } = (0, O.ZP)(),
            { width: V, height: X } = (0, C.b)(),
            [J, q] = r.useState(() => {
                var e;
                return null === (e = A.K.get(w)) || void 0 === e ? void 0 : e[o];
            }),
            $ = (0, I.e7)([S.default], () => S.default.locale),
            [ee, ea] = r.useState(null),
            [en, et] = r.useState(!0),
            [er, es] = r.useState(!1),
            ei = r.useRef(null),
            eo = r.useMemo(() => (0, f.fP)(), []);
        r.useEffect(() => {
            let e = ei.current;
            null != e && es(e.scrollHeight - e.clientHeight > 1);
        }, [ei, V, X]),
            r.useEffect(() => {
                (0, R.Jn)();
            }, []);
        let el = (0, I.Wu)([G.Z], () => {
                var e;
                return (null !== (e = G.Z.getSimilarGames(o)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            ec = (0, I.Wu)([P.Z], () =>
                el
                    .map((e) => P.Z.getGame(e))
                    .filter(j.W1)
                    .slice(0, 5)
            ),
            ed = r.useRef([]);
        r.useEffect(() => {
            ed.current = el;
        }, [el]),
            r.useEffect(() => {
                (async () => {
                    if (0 === el.length) {
                        ea(null);
                        try {
                            await (0, x.i)(o);
                        } catch (e) {
                            ea(e);
                        }
                    }
                })(),
                    T.Z.getDetectableGamesSupplemental([o, ...el]);
            }, [o, el]);
        let eu = (0, I.e7)([G.Z, P.Z], () => {
                let e = void 0 === G.Z.getSimilarGames(o),
                    a = el.some((e) => P.Z.isFetching(e));
                return e || a;
            }),
            { entries: e_ } = (0, Z.Z)(),
            eE = r.useMemo(() => {
                var e;
                return null !== (e = null == e_ ? void 0 : e_.filter((e) => (0, p.dX)(e) && e.extra.application_id === o)) && void 0 !== e ? e : [];
            }, [e_, o]),
            eI = eE.length > 7,
            [eA, em] = r.useState(!1);
        r.useEffect(() => {
            var e, a;
            return (
                (0, f.IS)({
                    source: d,
                    viewId: eo,
                    applicationId: o,
                    gameName: null !== (a = null !== (e = null == eN ? void 0 : eN.name) && void 0 !== e ? e : null == eT ? void 0 : eT.name) && void 0 !== a ? a : '',
                    authorId: _
                }),
                () => {
                    var e, a;
                    let n = Date.now(),
                        t = eE.map((e) => {
                            let a = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, $);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: a
                            });
                        });
                    (0, f.wz)({
                        viewId: eo,
                        applicationId: o,
                        gameName: null !== (a = null !== (e = null == eN ? void 0 : eN.name) && void 0 !== e ? e : null == eT ? void 0 : eT.name) && void 0 !== a ? a : '',
                        playedFriendIds: eE.map((e) => e.author_id),
                        playedFriendsData: t,
                        similarGames: W(ed.current)
                    });
                }
            );
        }, []);
        let eT = N.Z.getApplication(o),
            eN = (0, I.e7)([P.Z], () => P.Z.getGame(o)),
            eO = r.useMemo(() => (null == eN ? void 0 : eN.genres.map(M.P3).join(', ')), [eN]),
            eR = r.useMemo(() => {
                if (null == eN) return '';
                let { artwork: e, screenshots: a } = eN;
                if (e.length > 0) {
                    let a = Math.floor(Math.random() * (e.length - 1));
                    return e[a];
                }
                if (a.length > 0) {
                    let e = Math.floor(Math.random() * (a.length - 1));
                    return a[e];
                }
                return '';
            }, [eN]),
            ep = r.useMemo(() => {
                var e, a;
                let n = (null !== (e = null == eN ? void 0 : eN.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (a = null == eN ? void 0 : eN.screenshots) && void 0 !== a ? a : []).map((e) => ({ src: e })), ...n];
            }, [null == eN ? void 0 : eN.artwork, null == eN ? void 0 : eN.screenshots]),
            eg = (e, a) => {
                (0, f.UE)({
                    gameName: null != eS ? eS : '',
                    applicationId: o,
                    action: e,
                    similarGameId: a,
                    viewId: eo
                });
            },
            eP = (0, v.p)('GameProfileModal'),
            { shouldOpenGameProfile: eC } = (0, j.ZP)({
                location: 'GameProfileModal',
                applicationId: o,
                trackEntryPointImpression: !1
            });
        if ((l()(eC, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`"), null == eN)) return null;
        let eS = null !== (a = eN.name) && void 0 !== a ? a : null == eT ? void 0 : eT.name,
            eL = null == eT ? void 0 : eT.getIconURL(160, L.$k ? 'webp' : 'png'),
            eM = null !== (s = eN.coverImageUrl) && void 0 !== s ? s : eL,
            { summary: eh, websites: ef, publishers: ex, platforms: eG } = eN,
            ev = h.default.extractTimestamp(o),
            eZ = u()().diff(u()(ev), 'days') <= k.G,
            ej = eE.some((e) => (0, g.ig)(e) === E.o.GLOBAL);
        return (0, t.jsx)(m.ModalRoot, {
            transitionState: H,
            size: m.ModalSize.DYNAMIC,
            className: i()(z, B.gameProfileModal),
            children: (0, t.jsxs)(m.ScrollerNone, {
                className: B.scrollable,
                children: [
                    (0, t.jsx)('div', {
                        className: i()(B.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eR, '")') }
                    }),
                    (0, t.jsxs)('div', {
                        className: i()(B.content, B.column, B.headerInfo),
                        children: [
                            (0, t.jsx)('div', {
                                className: B.logoWrapper,
                                children:
                                    null != eM &&
                                    (0, t.jsx)('img', {
                                        className: B.logo,
                                        src: eM,
                                        alt: y.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eS })
                                    })
                            }),
                            (0, t.jsxs)('div', {
                                className: i()(B.row, B.gapSm, B.gameDetails),
                                children: [
                                    (0, t.jsxs)('div', {
                                        children: [
                                            (0, t.jsx)(m.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eS
                                            }),
                                            (0, t.jsxs)('div', {
                                                className: i()(B.row, B.gapSm),
                                                children: [
                                                    null != eL &&
                                                        (0, t.jsx)('img', {
                                                            src: eL,
                                                            height: 16,
                                                            alt: y.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eS })
                                                        }),
                                                    (0, t.jsx)(m.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eO
                                                    }),
                                                    eZ &&
                                                        (0, t.jsx)(m.Text, {
                                                            variant: 'eyebrow',
                                                            className: B.newBadge,
                                                            children: y.Z.Messages.NEW
                                                        }),
                                                    ej &&
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
                                            eP &&
                                            (0, t.jsx)(m.Tooltip, {
                                                text: J ? y.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : y.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, t.jsxs)(m.Button, {
                                                        ...e,
                                                        innerClassName: B.followButton,
                                                        color: J ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let a = null !== (e = A.K.get(w)) && void 0 !== e ? e : {};
                                                            (a[o] = !a[o]),
                                                                A.K.set(w, a),
                                                                eg(a[o] ? f.as.FollowGame : f.as.UnfollowGame),
                                                                a[o] &&
                                                                    (0, b.L)() &&
                                                                    (0, m.openModalLazy)(async () => {
                                                                        let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                                                                        return (a) =>
                                                                            (0, t.jsx)(e, {
                                                                                ...a,
                                                                                applicationId: o,
                                                                                background: eR,
                                                                                viewId: eo
                                                                            });
                                                                    }),
                                                                q(a[o]);
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
                            className: i()(B.content, B.mainContent),
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
                                            className: i()(B.section, { [B.fadedEntries]: eI && !eA }),
                                            children: [
                                                0 === eE.length &&
                                                    (0, t.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: B.emptyFriendsWhoPlay,
                                                        children: y.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, t.jsx)('div', {
                                                    className: i()(B.column, B.gapNone),
                                                    children:
                                                        null == eE
                                                            ? void 0
                                                            : eE.slice(0, eI && !eA ? 6 : void 0).map((e) =>
                                                                  (0, t.jsx)(
                                                                      D.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: eo,
                                                                          onClose: Y
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        eI &&
                                            !eA &&
                                            (0, t.jsxs)(m.Clickable, {
                                                className: B.expandEntriesButton,
                                                onClick: () => em(!0),
                                                children: [
                                                    (0, t.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: y.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, t.jsx)(m.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        ep.length > 0 &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(m.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: y.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, t.jsx)(m.Scroller, {
                                                        className: i()(B.row, B.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: ep.map((e, a) =>
                                                            (0, t.jsx)(
                                                                m.Clickable,
                                                                {
                                                                    className: B.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: B.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eg(f.as.ClickImage),
                                                                            (0, m.openModalLazy)(async () => {
                                                                                let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                                                                                return (n) => {
                                                                                    let { ...r } = n;
                                                                                    return (0, t.jsx)(e, {
                                                                                        className: B.mediaModal,
                                                                                        ...r,
                                                                                        items: ep,
                                                                                        startingIndex: a
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, t.jsx)('img', {
                                                                        src: e.src,
                                                                        className: B.gameArtwork,
                                                                        alt: y.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eS })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, t.jsx)(m.Spacer, { size: 8 })
                                                ]
                                            }),
                                        eu &&
                                            null == ee &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)('div', { className: B.loadingHeadingSimilarGames }),
                                                    (0, t.jsx)('div', {
                                                        className: B.row,
                                                        children: (0, c.range)(0, 5).map((e) => (0, t.jsx)('div', { className: B.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !eu &&
                                            ec.length > 0 &&
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
                                                        children: ec.map((e) =>
                                                            (0, t.jsx)(
                                                                U,
                                                                {
                                                                    game: e,
                                                                    onClose: Y,
                                                                    trackClick: eg
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
                                    className: i()(B.sidebar, B.column),
                                    children: [
                                        (0, t.jsx)(m.Heading, {
                                            variant: 'heading-md/bold',
                                            children: y.Z.Messages.ABOUT
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: B.sidebarSections,
                                            children: [
                                                null != eh &&
                                                    (0, t.jsxs)('div', {
                                                        className: i()(B.column, B.gapSm),
                                                        children: [
                                                            (0, t.jsx)(m.Text, {
                                                                ref: ei,
                                                                lineClamp: en ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eh
                                                            }),
                                                            (er || !en) &&
                                                                (0, t.jsx)(m.Clickable, {
                                                                    className: B.clickable,
                                                                    onClick: () => {
                                                                        eg(en ? f.as.ShowMore : f.as.ShowLess), et(!en);
                                                                    },
                                                                    children: (0, t.jsx)(m.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: en ? y.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : y.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, t.jsx)(K.Z, {
                                                    websites: ef,
                                                    trackClick: eg
                                                }),
                                                (ex.length > 0 || eG.length > 0) &&
                                                    (0, t.jsx)('div', {
                                                        className: i()(B.column),
                                                        children:
                                                            ex.length > 0 &&
                                                            (0, t.jsxs)('div', {
                                                                className: i()(B.column, B.gapSm),
                                                                children: [
                                                                    (0, t.jsx)(m.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: y.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, t.jsxs)('div', {
                                                                        className: i()(B.row, B.gapMd),
                                                                        children: [
                                                                            (0, t.jsx)(m.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: ex.join(', ')
                                                                            }),
                                                                            eG.length > 0 && (0, t.jsx)(Q, { platforms: eG })
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
