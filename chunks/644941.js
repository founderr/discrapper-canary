t.r(n), t(47120), t(653041);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    o = t.n(s),
    l = t(392711),
    i = t(913527),
    c = t.n(i),
    d = t(758713),
    u = t(705512),
    _ = t(442837),
    E = t(433517),
    I = t(481060),
    A = t(224706),
    p = t(560361),
    m = t(812206),
    T = t(168551),
    O = t(485267),
    R = t(26033),
    g = t(561308),
    N = t(669764),
    P = t(962250),
    h = t(706454),
    f = t(768581),
    C = t(814225),
    L = t(709054),
    M = t(810568),
    S = t(998058),
    v = t(839392),
    x = t(96856),
    G = t(567409),
    Z = t(774073),
    b = t(124030),
    j = t(383895),
    D = t(183391),
    y = t(715318),
    U = t(206583),
    w = t(689938),
    F = t(51527);
let k = 'GameProfileModal',
    K = (e) => {
        let { game: n, onClose: t, trackClick: r } = e,
            s = (0, _.e7)([m.Z], () => {
                var e;
                return m.Z.getApplication(null !== (e = null == n ? void 0 : n.applicationId) && void 0 !== e ? e : '');
            });
        if (null == n) return null;
        let o = n.coverImageUrl;
        return (0, a.jsx)(I.Tooltip, {
            text: n.name,
            children: (e) => {
                var l;
                return (0, a.jsx)(I.Clickable, {
                    ...e,
                    className: F.clickable,
                    onClick: async () => {
                        r(M.as.ClickSimilarGame, n.applicationId),
                            (0, I.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, a.jsx)(Y, {
                                        applicationId: n.applicationId,
                                        source: M.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            t();
                    },
                    children: (0, a.jsx)('img', {
                        src: o,
                        className: F.similarGames,
                        alt: w.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (l = null == s ? void 0 : s.name) && void 0 !== l ? l : null == n ? void 0 : n.name })
                    })
                });
            }
        });
    },
    B = () =>
        (0, a.jsxs)('div', {
            className: F.gameBadge,
            children: [
                (0, a.jsx)(I.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(I.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: w.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    H = [d.z.DESKTOP, d.z.XBOX, d.z.PLAYSTATION, d.z.NINTENDO],
    Q = (e) => {
        let { platforms: n } = e,
            t = [...new Set(n)];
        !t.includes(d.z.DESKTOP) && (t.includes(d.z.MACOS) || t.includes(d.z.LINUX)) && t.push(d.z.DESKTOP);
        let r = (t = t.filter((e) => H.includes(e))).map((e) => {
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
            className: o()(F.row, F.gapSm),
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
    W = (e) => e.filter(Z.z6).slice(0, 5),
    Y = (e) => {
        var n, s;
        let { applicationId: i, source: d, sourceUserId: H, transitionState: Y, onClose: z } = e,
            { clientThemesClassName: V } = (0, T.ZP)(),
            { width: X, height: J } = (0, P.b)(),
            [q, $] = r.useState(() => {
                var e;
                return null === (e = E.K.get(k)) || void 0 === e ? void 0 : e[i];
            }),
            ee = (0, _.e7)([h.default], () => h.default.locale),
            [en, et] = r.useState(null),
            [ea, er] = r.useState(!0),
            [es, eo] = r.useState(!1),
            el = r.useRef(null),
            ei = r.useMemo(() => (0, M.fP)(), []);
        r.useEffect(() => {
            let e = el.current;
            null != e && eo(e.scrollHeight - e.clientHeight > 1);
        }, [el, X, J]),
            r.useEffect(() => {
                (0, O.Jn)();
            }, []);
        let ec = (0, _.Wu)([v.Z], () => {
                var e;
                return (null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            ed = (0, _.Wu)([N.Z], () =>
                ec
                    .map((e) => N.Z.getGame(e))
                    .filter(Z.W1)
                    .slice(0, 5)
            ),
            eu = r.useRef([]);
        r.useEffect(() => {
            eu.current = ec;
        }, [ec]),
            r.useEffect(() => {
                (async () => {
                    if (0 === ec.length) {
                        et(null);
                        try {
                            await (0, S.i)(i);
                        } catch (e) {
                            et(e);
                        }
                    }
                })(),
                    A.Z.getDetectableGamesSupplemental([i, ...ec]);
            }, [i, ec]);
        let e_ = (0, _.e7)([v.Z, N.Z], () => {
                let e = void 0 === v.Z.getSimilarGames(i),
                    n = ec.some((e) => N.Z.isFetching(e));
                return e || n;
            }),
            { entries: eE } = (0, G.Z)(),
            eI = r.useMemo(() => {
                var e;
                return null !== (e = null == eE ? void 0 : eE.filter((e) => (0, R.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [eE, i]),
            eA = eI.length > 7,
            [ep, em] = r.useState(!1),
            [eT, eO] = r.useState(null);
        r.useEffect(() => {
            var e, n;
            (0, M.IS)({
                source: d,
                viewId: ei,
                applicationId: i,
                gameName: null !== (n = null !== (e = null == eg ? void 0 : eg.name) && void 0 !== e ? e : null == eR ? void 0 : eR.name) && void 0 !== n ? n : '',
                authorId: H
            });
        }, []),
            (0, p.Z)(() => {
                var e, n, t;
                let a = Date.now(),
                    r = eI.map((e) => {
                        let n = (0, g.kr)(e) ? (0, g.T_)(e, a) : (0, g.GL)(e, ee);
                        return JSON.stringify({
                            item_id: e.id,
                            trait: e.traits,
                            time_played: n
                        });
                    });
                (0, M.wz)({
                    viewId: ei,
                    applicationId: i,
                    gameName: null !== (t = null !== (n = null == eg ? void 0 : eg.name) && void 0 !== n ? n : null == eR ? void 0 : eR.name) && void 0 !== t ? t : '',
                    playedFriendIds: eI.map((e) => e.author_id),
                    playedFriendsData: r,
                    similarGames: W(eu.current),
                    officialGuildId: null == eT ? void 0 : null === (e = eT.guild) || void 0 === e ? void 0 : e.id
                });
            });
        let eR = m.Z.getApplication(i),
            eg = (0, _.e7)([N.Z], () => N.Z.getGame(i)),
            eN = r.useMemo(() => (null == eg ? void 0 : eg.genres.map(C.P3).join(', ')), [eg]),
            eP = r.useMemo(() => {
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
            eh = r.useMemo(() => {
                var e, n;
                let t = (null !== (e = null == eg ? void 0 : eg.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (n = null == eg ? void 0 : eg.screenshots) && void 0 !== n ? n : []).map((e) => ({ src: e })), ...t];
            }, [null == eg ? void 0 : eg.artwork, null == eg ? void 0 : eg.screenshots]),
            ef = (e, n) => {
                var t;
                (0, M.UE)({
                    gameName: null != eL ? eL : '',
                    applicationId: i,
                    action: e,
                    similarGameId: n,
                    viewId: ei,
                    officialGuildId: null == eT ? void 0 : null === (t = eT.guild) || void 0 === t ? void 0 : t.id
                });
            },
            eC = (0, x.p)('GameProfileModal');
        if (null == eg) return null;
        let eL = null !== (n = eg.name) && void 0 !== n ? n : null == eR ? void 0 : eR.name,
            eM = null == eR ? void 0 : eR.getIconURL(160, f.$k ? 'webp' : 'png'),
            eS = null !== (s = eg.coverImageUrl) && void 0 !== s ? s : eM,
            { summary: ev, websites: ex, publishers: eG, platforms: eZ } = eg,
            eb = L.default.extractTimestamp(i),
            ej = c()().diff(c()(eb), 'days') <= U.G,
            eD = eI.some((e) => (0, g.ig)(e) === u.o.GLOBAL);
        return (0, a.jsx)(I.ModalRoot, {
            transitionState: Y,
            size: I.ModalSize.DYNAMIC,
            className: o()(V, F.gameProfileModal),
            children: (0, a.jsxs)(I.ScrollerNone, {
                className: F.scrollable,
                children: [
                    (0, a.jsx)('div', {
                        className: o()(F.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eP, '")') }
                    }),
                    (0, a.jsxs)('div', {
                        className: o()(F.content, F.column, F.headerInfo),
                        children: [
                            (0, a.jsxs)('div', {
                                className: F.coverArtRow,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: F.logoWrapper,
                                        children:
                                            null != eS &&
                                            (0, a.jsx)('img', {
                                                className: F.logo,
                                                src: eS,
                                                alt: w.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eL })
                                            })
                                    }),
                                    (0, a.jsx)(y.Z, {
                                        applicationId: i,
                                        className: F.overflowMenu
                                    })
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                className: o()(F.row, F.gapSm, F.gameDetails),
                                children: [
                                    (0, a.jsxs)('div', {
                                        children: [
                                            (0, a.jsx)(I.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eL
                                            }),
                                            (0, a.jsxs)('div', {
                                                className: o()(F.row, F.gapSm),
                                                children: [
                                                    null != eM &&
                                                        (0, a.jsx)('img', {
                                                            src: eM,
                                                            height: 16,
                                                            alt: w.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eL })
                                                        }),
                                                    (0, a.jsx)(I.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eN
                                                    }),
                                                    ej &&
                                                        (0, a.jsx)(I.Text, {
                                                            variant: 'eyebrow',
                                                            className: F.newBadge,
                                                            children: w.Z.Messages.NEW
                                                        }),
                                                    eD &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(I.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, a.jsx)(B, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)('div', {
                                        children:
                                            eC &&
                                            (0, a.jsx)(I.Tooltip, {
                                                text: q ? w.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : w.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, a.jsxs)(I.Button, {
                                                        ...e,
                                                        innerClassName: F.followButton,
                                                        color: q ? I.Button.Colors.PRIMARY : I.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let n = null !== (e = E.K.get(k)) && void 0 !== e ? e : {};
                                                            (n[i] = !n[i]),
                                                                E.K.set(k, n),
                                                                ef(n[i] ? M.as.FollowGame : M.as.UnfollowGame),
                                                                n[i] &&
                                                                    (0, b.L)() &&
                                                                    (0, I.openModalLazy)(async () => {
                                                                        let { default: e } = await t.e('86564').then(t.bind(t, 641758));
                                                                        return (n) =>
                                                                            (0, a.jsx)(e, {
                                                                                ...n,
                                                                                applicationId: i,
                                                                                background: eP,
                                                                                viewId: ei
                                                                            });
                                                                    }),
                                                                $(n[i]);
                                                        },
                                                        children: [q ? (0, a.jsx)(I.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(I.BellIcon, { color: 'white' }), q ? w.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : w.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(I.HeadingLevel, {
                        children: (0, a.jsxs)('div', {
                            className: o()(F.content, F.mainContent),
                            children: [
                                (0, a.jsxs)('div', {
                                    className: F.column,
                                    children: [
                                        (0, a.jsx)(I.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: w.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: o()(F.section, { [F.fadedEntries]: eA && !ep }),
                                            children: [
                                                0 === eI.length &&
                                                    (0, a.jsx)(I.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: F.emptyFriendsWhoPlay,
                                                        children: w.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, a.jsx)('div', {
                                                    className: o()(F.column, F.gapNone),
                                                    children:
                                                        null == eI
                                                            ? void 0
                                                            : eI.slice(0, eA && !ep ? 6 : void 0).map((e) => {
                                                                  var n;
                                                                  return (0, a.jsx)(
                                                                      j.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: ei,
                                                                          onClose: z,
                                                                          officialGuildId: null == eT ? void 0 : null === (n = eT.guild) || void 0 === n ? void 0 : n.id
                                                                      },
                                                                      e.id
                                                                  );
                                                              })
                                                })
                                            ]
                                        }),
                                        eA &&
                                            !ep &&
                                            (0, a.jsxs)(I.Clickable, {
                                                className: F.expandEntriesButton,
                                                onClick: () => em(!0),
                                                children: [
                                                    (0, a.jsx)(I.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: w.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, a.jsx)(I.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eh.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(I.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: w.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, a.jsx)(I.Scroller, {
                                                        className: o()(F.row, F.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eh.map((e, n) =>
                                                            (0, a.jsx)(
                                                                I.Clickable,
                                                                {
                                                                    className: F.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: F.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        ef(M.as.ClickImage),
                                                                            (0, I.openModalLazy)(async () => {
                                                                                let { default: e } = await t.e('99857').then(t.bind(t, 895023));
                                                                                return (t) => {
                                                                                    let { ...r } = t;
                                                                                    return (0, a.jsx)(e, {
                                                                                        className: F.mediaModal,
                                                                                        ...r,
                                                                                        items: eh,
                                                                                        startingIndex: n
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, a.jsx)('img', {
                                                                        src: e.src,
                                                                        className: F.gameArtwork,
                                                                        alt: w.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eL })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, a.jsx)(I.Spacer, { size: 8 })
                                                ]
                                            }),
                                        e_ &&
                                            null == en &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)('div', { className: F.loadingHeadingSimilarGames }),
                                                    (0, a.jsx)('div', {
                                                        className: F.row,
                                                        children: (0, l.range)(0, 5).map((e) => (0, a.jsx)('div', { className: F.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !e_ &&
                                            ed.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(I.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: w.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, a.jsx)('div', {
                                                        className: F.row,
                                                        style: {},
                                                        children: ed.map((e) =>
                                                            (0, a.jsx)(
                                                                K,
                                                                {
                                                                    game: e,
                                                                    onClose: z,
                                                                    trackClick: ef
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
                                    className: o()(F.sidebar, F.column),
                                    children: [
                                        (0, a.jsx)(I.Heading, {
                                            variant: 'heading-md/bold',
                                            children: w.Z.Messages.ABOUT
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: F.sidebarSections,
                                            children: [
                                                null != ev &&
                                                    (0, a.jsxs)('div', {
                                                        className: o()(F.column, F.gapSm),
                                                        children: [
                                                            (0, a.jsx)(I.Text, {
                                                                ref: el,
                                                                lineClamp: ea ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: ev
                                                            }),
                                                            (es || !ea) &&
                                                                (0, a.jsx)(I.Clickable, {
                                                                    className: F.clickable,
                                                                    onClick: () => {
                                                                        ef(ea ? M.as.ShowMore : M.as.ShowLess), er(!ea);
                                                                    },
                                                                    children: (0, a.jsx)(I.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: ea ? w.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : w.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, a.jsx)(D.Z, {
                                                    websites: ex,
                                                    trackClick: ef,
                                                    onInviteResolved: eO
                                                }),
                                                (eG.length > 0 || eZ.length > 0) &&
                                                    (0, a.jsx)('div', {
                                                        className: o()(F.column),
                                                        children:
                                                            eG.length > 0 &&
                                                            (0, a.jsxs)('div', {
                                                                className: o()(F.column, F.gapSm),
                                                                children: [
                                                                    (0, a.jsx)(I.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: w.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, a.jsxs)('div', {
                                                                        className: o()(F.row, F.gapMd),
                                                                        children: [
                                                                            (0, a.jsx)(I.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: eG.join(', ')
                                                                            }),
                                                                            eZ.length > 0 && (0, a.jsx)(Q, { platforms: eZ })
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
n.default = Y;
