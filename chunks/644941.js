t.r(n), t(47120), t(653041);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    o = t.n(s),
    i = t(392711),
    l = t(913527),
    c = t.n(l),
    d = t(758713),
    u = t(705512),
    _ = t(442837),
    E = t(433517),
    I = t(481060),
    A = t(224706),
    p = t(812206),
    m = t(168551),
    T = t(485267),
    O = t(26033),
    g = t(561308),
    R = t(669764),
    N = t(962250),
    P = t(706454),
    h = t(768581),
    f = t(814225),
    C = t(709054),
    L = t(810568),
    M = t(998058),
    S = t(839392),
    x = t(96856),
    v = t(567409),
    G = t(774073),
    Z = t(124030),
    j = t(383895),
    b = t(183391),
    D = t(715318),
    y = t(206583),
    U = t(689938),
    w = t(51527);
let F = 'GameProfileModal',
    K = (e) => {
        let { game: n, onClose: t, trackClick: r } = e,
            s = (0, _.e7)([p.Z], () => {
                var e;
                return p.Z.getApplication(null !== (e = null == n ? void 0 : n.applicationId) && void 0 !== e ? e : '');
            });
        if (null == n) return null;
        let o = n.coverImageUrl;
        return (0, a.jsx)(I.Tooltip, {
            text: n.name,
            children: (e) => {
                var i;
                return (0, a.jsx)(I.Clickable, {
                    ...e,
                    className: w.clickable,
                    onClick: async () => {
                        r(L.as.ClickSimilarGame, n.applicationId),
                            (0, I.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, a.jsx)(W, {
                                        applicationId: n.applicationId,
                                        source: L.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            t();
                    },
                    children: (0, a.jsx)('img', {
                        src: o,
                        className: w.similarGames,
                        alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : null == n ? void 0 : n.name })
                    })
                });
            }
        });
    },
    k = () =>
        (0, a.jsxs)('div', {
            className: w.gameBadge,
            children: [
                (0, a.jsx)(I.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(I.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: U.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    B = [d.z.DESKTOP, d.z.XBOX, d.z.PLAYSTATION, d.z.NINTENDO],
    H = (e) => {
        let { platforms: n } = e,
            t = [...new Set(n)];
        !t.includes(d.z.DESKTOP) && (t.includes(d.z.MACOS) || t.includes(d.z.LINUX)) && t.push(d.z.DESKTOP);
        let r = (t = t.filter((e) => B.includes(e))).map((e) => {
            switch (e) {
                case d.z.DESKTOP:
                    return (0, a.jsx)(I.ScreenIcon, { size: 'xs' }, e);
                case d.z.XBOX:
                    return (0, a.jsx)(I.XboxNeutralIcon, { size: 'xs' }, e);
                case d.z.PLAYSTATION:
                    return (0, a.jsx)(I.PlaystationNeutralIcon, { size: 'xs' }, e);
                case d.z.NINTENDO:
                    return (0, a.jsx)(I.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, a.jsxs)('div', {
            className: o()(w.row, w.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, a.jsx)(I.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                r
            ]
        });
    },
    Q = (e) => e.filter(G.z6).slice(0, 5),
    W = (e) => {
        var n, s;
        let { applicationId: l, source: d, sourceUserId: B, transitionState: W, onClose: Y } = e,
            { clientThemesClassName: z } = (0, m.ZP)(),
            { width: V, height: X } = (0, N.b)(),
            [J, q] = r.useState(() => {
                var e;
                return null === (e = E.K.get(F)) || void 0 === e ? void 0 : e[l];
            }),
            $ = (0, _.e7)([P.default], () => P.default.locale),
            [ee, en] = r.useState(null),
            [et, ea] = r.useState(!0),
            [er, es] = r.useState(!1),
            eo = r.useRef(null),
            ei = r.useMemo(() => (0, L.fP)(), []);
        r.useEffect(() => {
            let e = eo.current;
            null != e && es(e.scrollHeight - e.clientHeight > 1);
        }, [eo, V, X]),
            r.useEffect(() => {
                (0, T.Jn)();
            }, []);
        let el = (0, _.Wu)([S.Z], () => {
                var e;
                return (null !== (e = S.Z.getSimilarGames(l)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            ec = (0, _.Wu)([R.Z], () =>
                el
                    .map((e) => R.Z.getGame(e))
                    .filter(G.W1)
                    .slice(0, 5)
            ),
            ed = r.useRef([]);
        r.useEffect(() => {
            ed.current = el;
        }, [el]),
            r.useEffect(() => {
                (async () => {
                    if (0 === el.length) {
                        en(null);
                        try {
                            await (0, M.i)(l);
                        } catch (e) {
                            en(e);
                        }
                    }
                })(),
                    A.Z.getDetectableGamesSupplemental([l, ...el]);
            }, [l, el]);
        let eu = (0, _.e7)([S.Z, R.Z], () => {
                let e = void 0 === S.Z.getSimilarGames(l),
                    n = el.some((e) => R.Z.isFetching(e));
                return e || n;
            }),
            { entries: e_ } = (0, v.Z)(),
            eE = r.useMemo(() => {
                var e;
                return null !== (e = null == e_ ? void 0 : e_.filter((e) => (0, O.dX)(e) && e.extra.application_id === l)) && void 0 !== e ? e : [];
            }, [e_, l]),
            eI = eE.length > 7,
            [eA, ep] = r.useState(!1);
        r.useEffect(() => {
            var e, n;
            return (
                (0, L.IS)({
                    source: d,
                    viewId: ei,
                    applicationId: l,
                    gameName: null !== (n = null !== (e = null == eT ? void 0 : eT.name) && void 0 !== e ? e : null == em ? void 0 : em.name) && void 0 !== n ? n : '',
                    authorId: B
                }),
                () => {
                    var e, n;
                    let t = Date.now(),
                        a = eE.map((e) => {
                            let n = (0, g.kr)(e) ? (0, g.T_)(e, t) : (0, g.GL)(e, $);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: n
                            });
                        });
                    (0, L.wz)({
                        viewId: ei,
                        applicationId: l,
                        gameName: null !== (n = null !== (e = null == eT ? void 0 : eT.name) && void 0 !== e ? e : null == em ? void 0 : em.name) && void 0 !== n ? n : '',
                        playedFriendIds: eE.map((e) => e.author_id),
                        playedFriendsData: a,
                        similarGames: Q(ed.current)
                    });
                }
            );
        }, []);
        let em = p.Z.getApplication(l),
            eT = (0, _.e7)([R.Z], () => R.Z.getGame(l)),
            eO = r.useMemo(() => (null == eT ? void 0 : eT.genres.map(f.P3).join(', ')), [eT]),
            eg = r.useMemo(() => {
                if (null == eT) return '';
                let { artwork: e, screenshots: n } = eT;
                if (e.length > 0) {
                    let n = Math.floor(Math.random() * (e.length - 1));
                    return e[n];
                }
                if (n.length > 0) {
                    let e = Math.floor(Math.random() * (n.length - 1));
                    return n[e];
                }
                return '';
            }, [eT]),
            eR = r.useMemo(() => {
                var e, n;
                let t = (null !== (e = null == eT ? void 0 : eT.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (n = null == eT ? void 0 : eT.screenshots) && void 0 !== n ? n : []).map((e) => ({ src: e })), ...t];
            }, [null == eT ? void 0 : eT.artwork, null == eT ? void 0 : eT.screenshots]),
            eN = (e, n) => {
                (0, L.UE)({
                    gameName: null != eh ? eh : '',
                    applicationId: l,
                    action: e,
                    similarGameId: n,
                    viewId: ei
                });
            },
            eP = (0, x.p)('GameProfileModal');
        if (null == eT) return null;
        let eh = null !== (n = eT.name) && void 0 !== n ? n : null == em ? void 0 : em.name,
            ef = null == em ? void 0 : em.getIconURL(160, h.$k ? 'webp' : 'png'),
            eC = null !== (s = eT.coverImageUrl) && void 0 !== s ? s : ef,
            { summary: eL, websites: eM, publishers: eS, platforms: ex } = eT,
            ev = C.default.extractTimestamp(l),
            eG = c()().diff(c()(ev), 'days') <= y.G,
            eZ = eE.some((e) => (0, g.ig)(e) === u.o.GLOBAL);
        return (0, a.jsx)(I.ModalRoot, {
            transitionState: W,
            size: I.ModalSize.DYNAMIC,
            className: o()(z, w.gameProfileModal),
            children: (0, a.jsxs)(I.ScrollerNone, {
                className: w.scrollable,
                children: [
                    (0, a.jsx)('div', {
                        className: o()(w.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eg, '")') }
                    }),
                    (0, a.jsxs)('div', {
                        className: o()(w.content, w.column, w.headerInfo),
                        children: [
                            (0, a.jsxs)('div', {
                                className: w.coverArtRow,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: w.logoWrapper,
                                        children:
                                            null != eC &&
                                            (0, a.jsx)('img', {
                                                className: w.logo,
                                                src: eC,
                                                alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eh })
                                            })
                                    }),
                                    (0, a.jsx)(D.Z, {
                                        applicationId: l,
                                        className: w.overflowMenu
                                    })
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                className: o()(w.row, w.gapSm, w.gameDetails),
                                children: [
                                    (0, a.jsxs)('div', {
                                        children: [
                                            (0, a.jsx)(I.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eh
                                            }),
                                            (0, a.jsxs)('div', {
                                                className: o()(w.row, w.gapSm),
                                                children: [
                                                    null != ef &&
                                                        (0, a.jsx)('img', {
                                                            src: ef,
                                                            height: 16,
                                                            alt: U.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eh })
                                                        }),
                                                    (0, a.jsx)(I.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eO
                                                    }),
                                                    eG &&
                                                        (0, a.jsx)(I.Text, {
                                                            variant: 'eyebrow',
                                                            className: w.newBadge,
                                                            children: U.Z.Messages.NEW
                                                        }),
                                                    eZ &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(I.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, a.jsx)(k, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)('div', {
                                        children:
                                            eP &&
                                            (0, a.jsx)(I.Tooltip, {
                                                text: J ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : U.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, a.jsxs)(I.Button, {
                                                        ...e,
                                                        innerClassName: w.followButton,
                                                        color: J ? I.Button.Colors.PRIMARY : I.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let n = null !== (e = E.K.get(F)) && void 0 !== e ? e : {};
                                                            (n[l] = !n[l]),
                                                                E.K.set(F, n),
                                                                eN(n[l] ? L.as.FollowGame : L.as.UnfollowGame),
                                                                n[l] &&
                                                                    (0, Z.L)() &&
                                                                    (0, I.openModalLazy)(async () => {
                                                                        let { default: e } = await t.e('86564').then(t.bind(t, 641758));
                                                                        return (n) =>
                                                                            (0, a.jsx)(e, {
                                                                                ...n,
                                                                                applicationId: l,
                                                                                background: eg,
                                                                                viewId: ei
                                                                            });
                                                                    }),
                                                                q(n[l]);
                                                        },
                                                        children: [J ? (0, a.jsx)(I.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(I.BellIcon, { color: 'white' }), J ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : U.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(I.HeadingLevel, {
                        children: (0, a.jsxs)('div', {
                            className: o()(w.content, w.mainContent),
                            children: [
                                (0, a.jsxs)('div', {
                                    className: w.column,
                                    children: [
                                        (0, a.jsx)(I.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: U.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: o()(w.section, { [w.fadedEntries]: eI && !eA }),
                                            children: [
                                                0 === eE.length &&
                                                    (0, a.jsx)(I.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: w.emptyFriendsWhoPlay,
                                                        children: U.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, a.jsx)('div', {
                                                    className: o()(w.column, w.gapNone),
                                                    children:
                                                        null == eE
                                                            ? void 0
                                                            : eE.slice(0, eI && !eA ? 6 : void 0).map((e) =>
                                                                  (0, a.jsx)(
                                                                      j.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: ei,
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
                                            (0, a.jsxs)(I.Clickable, {
                                                className: w.expandEntriesButton,
                                                onClick: () => ep(!0),
                                                children: [
                                                    (0, a.jsx)(I.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: U.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, a.jsx)(I.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eR.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(I.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: U.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, a.jsx)(I.Scroller, {
                                                        className: o()(w.row, w.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eR.map((e, n) =>
                                                            (0, a.jsx)(
                                                                I.Clickable,
                                                                {
                                                                    className: w.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: w.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eN(L.as.ClickImage),
                                                                            (0, I.openModalLazy)(async () => {
                                                                                let { default: e } = await t.e('99857').then(t.bind(t, 895023));
                                                                                return (t) => {
                                                                                    let { ...r } = t;
                                                                                    return (0, a.jsx)(e, {
                                                                                        className: w.mediaModal,
                                                                                        ...r,
                                                                                        items: eR,
                                                                                        startingIndex: n
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, a.jsx)('img', {
                                                                        src: e.src,
                                                                        className: w.gameArtwork,
                                                                        alt: U.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eh })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, a.jsx)(I.Spacer, { size: 8 })
                                                ]
                                            }),
                                        eu &&
                                            null == ee &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)('div', { className: w.loadingHeadingSimilarGames }),
                                                    (0, a.jsx)('div', {
                                                        className: w.row,
                                                        children: (0, i.range)(0, 5).map((e) => (0, a.jsx)('div', { className: w.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !eu &&
                                            ec.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(I.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: U.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, a.jsx)('div', {
                                                        className: w.row,
                                                        style: {},
                                                        children: ec.map((e) =>
                                                            (0, a.jsx)(
                                                                K,
                                                                {
                                                                    game: e,
                                                                    onClose: Y,
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
                                (0, a.jsxs)('div', {
                                    className: o()(w.sidebar, w.column),
                                    children: [
                                        (0, a.jsx)(I.Heading, {
                                            variant: 'heading-md/bold',
                                            children: U.Z.Messages.ABOUT
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: w.sidebarSections,
                                            children: [
                                                null != eL &&
                                                    (0, a.jsxs)('div', {
                                                        className: o()(w.column, w.gapSm),
                                                        children: [
                                                            (0, a.jsx)(I.Text, {
                                                                ref: eo,
                                                                lineClamp: et ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eL
                                                            }),
                                                            (er || !et) &&
                                                                (0, a.jsx)(I.Clickable, {
                                                                    className: w.clickable,
                                                                    onClick: () => {
                                                                        eN(et ? L.as.ShowMore : L.as.ShowLess), ea(!et);
                                                                    },
                                                                    children: (0, a.jsx)(I.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: et ? U.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : U.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, a.jsx)(b.Z, {
                                                    websites: eM,
                                                    trackClick: eN
                                                }),
                                                (eS.length > 0 || ex.length > 0) &&
                                                    (0, a.jsx)('div', {
                                                        className: o()(w.column),
                                                        children:
                                                            eS.length > 0 &&
                                                            (0, a.jsxs)('div', {
                                                                className: o()(w.column, w.gapSm),
                                                                children: [
                                                                    (0, a.jsx)(I.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: U.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, a.jsxs)('div', {
                                                                        className: o()(w.row, w.gapMd),
                                                                        children: [
                                                                            (0, a.jsx)(I.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: eS.join(', ')
                                                                            }),
                                                                            ex.length > 0 && (0, a.jsx)(H, { platforms: ex })
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
n.default = W;
