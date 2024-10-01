n.r(a), n(47120), n(653041);
var t = n(735250),
    o = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(758713),
    u = n(705512),
    m = n(442837),
    p = n(433517),
    _ = n(481060),
    g = n(224706),
    x = n(560361),
    f = n(812206),
    h = n(168551),
    I = n(485267),
    v = n(26033),
    E = n(561308),
    A = n(669764),
    T = n(962250),
    P = n(706454),
    M = n(768581),
    C = n(814225),
    j = n(709054),
    N = n(810568),
    S = n(998058),
    b = n(839392),
    O = n(96856),
    L = n(567409),
    w = n(774073),
    y = n(124030),
    k = n(383895),
    G = n(183391),
    R = n(715318),
    F = n(206583),
    Z = n(689938),
    H = n(51527);
let D = 'GameProfileModal',
    B = (e) => {
        let { game: a, onClose: n, trackClick: o } = e,
            i = (0, m.e7)([f.Z], () => {
                var e;
                return f.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
            });
        if (null == a) return null;
        let r = a.coverImageUrl;
        return (0, t.jsx)(_.Tooltip, {
            text: a.name,
            children: (e) => {
                var l;
                return (0, t.jsx)(_.Clickable, {
                    ...e,
                    className: H.clickable,
                    onClick: async () => {
                        o(N.as.ClickSimilarGame, a.applicationId),
                            (0, _.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, t.jsx)(K, {
                                        applicationId: a.applicationId,
                                        source: N.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            n();
                    },
                    children: (0, t.jsx)('img', {
                        src: r,
                        className: H.similarGames,
                        alt: Z.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (l = null == i ? void 0 : i.name) && void 0 !== l ? l : null == a ? void 0 : a.name })
                    })
                });
            }
        });
    },
    W = () =>
        (0, t.jsxs)('div', {
            className: H.gameBadge,
            children: [
                (0, t.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    U = [d.z.DESKTOP, d.z.XBOX, d.z.PLAYSTATION, d.z.NINTENDO],
    z = (e) => {
        let { platforms: a } = e,
            n = [...new Set(a)];
        !n.includes(d.z.DESKTOP) && (n.includes(d.z.MACOS) || n.includes(d.z.LINUX)) && n.push(d.z.DESKTOP);
        let o = (n = n.filter((e) => U.includes(e))).map((e) => {
            switch (e) {
                case d.z.DESKTOP:
                    return (0, t.jsx)(_.ScreenIcon, { size: 'xs' }, e);
                case d.z.XBOX:
                    return (0, t.jsx)(_.XboxNeutralIcon, { size: 'xs' }, e);
                case d.z.PLAYSTATION:
                    return (0, t.jsx)(_.PlaystationNeutralIcon, { size: 'xs' }, e);
                case d.z.NINTENDO:
                    return (0, t.jsx)(_.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, t.jsxs)('div', {
            className: r()(H.row, H.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, t.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                o
            ]
        });
    },
    Y = (e) => e.filter(w.z6).slice(0, 5),
    K = (e) => {
        var a, i;
        let { applicationId: s, source: d, sourceUserId: U, transitionState: K, onClose: X } = e,
            { clientThemesClassName: J } = (0, h.ZP)(),
            { width: V, height: q } = (0, T.b)(),
            [$, Q] = o.useState(() => {
                var e;
                return null === (e = p.K.get(D)) || void 0 === e ? void 0 : e[s];
            }),
            ee = (0, m.e7)([P.default], () => P.default.locale),
            [ea, en] = o.useState(null),
            [et, eo] = o.useState(!0),
            [ei, er] = o.useState(!1),
            el = o.useRef(null),
            es = o.useMemo(() => (0, N.fP)(), []);
        o.useEffect(() => {
            let e = el.current;
            null != e && er(e.scrollHeight - e.clientHeight > 1);
        }, [el, V, q]),
            o.useEffect(() => {
                (0, I.Jn)();
            }, []);
        let ec = (0, m.Wu)([b.Z], () => {
                var e;
                return (null !== (e = b.Z.getSimilarGames(s)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            ed = (0, m.Wu)([A.Z], () =>
                ec
                    .map((e) => A.Z.getGame(e))
                    .filter(w.W1)
                    .slice(0, 5)
            ),
            eu = o.useRef([]);
        o.useEffect(() => {
            eu.current = ec;
        }, [ec]),
            o.useEffect(() => {
                (async () => {
                    if (0 === ec.length) {
                        en(null);
                        try {
                            await (0, S.i)(s);
                        } catch (e) {
                            en(e);
                        }
                    }
                })(),
                    g.Z.getDetectableGamesSupplemental([s, ...ec]);
            }, [s, ec]);
        let em = (0, m.e7)([b.Z, A.Z], () => {
                let e = void 0 === b.Z.getSimilarGames(s),
                    a = ec.some((e) => A.Z.isFetching(e));
                return e || a;
            }),
            { entries: ep } = (0, L.Z)(),
            e_ = o.useMemo(() => {
                var e;
                return null !== (e = null == ep ? void 0 : ep.filter((e) => (0, v.dX)(e) && e.extra.application_id === s)) && void 0 !== e ? e : [];
            }, [ep, s]),
            eg = e_.length > 7,
            [ex, ef] = o.useState(!1),
            [eh, eI] = o.useState(null);
        o.useEffect(() => {
            var e, a;
            (0, N.IS)({
                source: d,
                viewId: es,
                applicationId: s,
                gameName: null !== (a = null !== (e = null == eE ? void 0 : eE.name) && void 0 !== e ? e : null == ev ? void 0 : ev.name) && void 0 !== a ? a : '',
                authorId: U
            });
        }, []),
            (0, x.Z)(() => {
                var e, a, n;
                let t = Date.now(),
                    o = e_.map((e) => {
                        let a = (0, E.kr)(e) ? (0, E.T_)(e, t) : (0, E.GL)(e, ee);
                        return JSON.stringify({
                            item_id: e.id,
                            trait: e.traits,
                            time_played: a
                        });
                    });
                (0, N.wz)({
                    viewId: es,
                    applicationId: s,
                    gameName: null !== (n = null !== (a = null == eE ? void 0 : eE.name) && void 0 !== a ? a : null == ev ? void 0 : ev.name) && void 0 !== n ? n : '',
                    playedFriendIds: e_.map((e) => e.author_id),
                    playedFriendsData: o,
                    similarGames: Y(eu.current),
                    officialGuildId: null == eh ? void 0 : null === (e = eh.guild) || void 0 === e ? void 0 : e.id
                });
            });
        let ev = f.Z.getApplication(s),
            eE = (0, m.e7)([A.Z], () => A.Z.getGame(s)),
            eA = o.useMemo(() => (null == eE ? void 0 : eE.genres.map(C.P3).join(', ')), [eE]),
            eT = o.useMemo(() => {
                if (null == eE) return '';
                let { artwork: e, screenshots: a } = eE;
                if (e.length > 0) {
                    let a = Math.floor(Math.random() * (e.length - 1));
                    return e[a];
                }
                if (a.length > 0) {
                    let e = Math.floor(Math.random() * (a.length - 1));
                    return a[e];
                }
                return '';
            }, [eE]),
            eP = o.useMemo(() => {
                var e, a;
                let n = (null !== (e = null == eE ? void 0 : eE.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (a = null == eE ? void 0 : eE.screenshots) && void 0 !== a ? a : []).map((e) => ({ src: e })), ...n];
            }, [null == eE ? void 0 : eE.artwork, null == eE ? void 0 : eE.screenshots]),
            eM = (e, a) => {
                var n;
                (0, N.UE)({
                    gameName: null != eS ? eS : '',
                    applicationId: s,
                    action: e,
                    similarGameId: a,
                    viewId: es,
                    officialGuildId: null == eh ? void 0 : null === (n = eh.guild) || void 0 === n ? void 0 : n.id
                });
            },
            eC = (0, O.p)('GameProfileModal'),
            [ej, eN] = o.useState((null == eE ? void 0 : eE.summaryLocalized) != null);
        if (null == eE) return null;
        let eS = null !== (a = eE.name) && void 0 !== a ? a : null == ev ? void 0 : ev.name,
            eb = null == ev ? void 0 : ev.getIconURL(160, M.$k ? 'webp' : 'png'),
            eO = null !== (i = eE.coverImageUrl) && void 0 !== i ? i : eb,
            { summary: eL, summaryLocalized: ew, websites: ey, publishers: ek, platforms: eG } = eE,
            eR = j.default.extractTimestamp(s),
            eF = c()().diff(c()(eR), 'days') <= F.G,
            eZ = e_.some((e) => (0, E.ig)(e) === u.o.GLOBAL);
        return (0, t.jsx)(_.ModalRoot, {
            transitionState: K,
            size: _.ModalSize.DYNAMIC,
            className: r()(J, H.gameProfileModal),
            children: (0, t.jsxs)(_.ScrollerNone, {
                className: H.scrollable,
                children: [
                    (0, t.jsx)('div', {
                        className: r()(H.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eT, '")') }
                    }),
                    (0, t.jsxs)('div', {
                        className: r()(H.content, H.column, H.headerInfo),
                        children: [
                            (0, t.jsxs)('div', {
                                className: H.coverArtRow,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: H.logoWrapper,
                                        children:
                                            null != eO &&
                                            (0, t.jsx)('img', {
                                                className: H.logo,
                                                src: eO,
                                                alt: Z.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eS })
                                            })
                                    }),
                                    (0, t.jsx)(R.Z, {
                                        applicationId: s,
                                        viewId: es,
                                        className: H.overflowMenu
                                    })
                                ]
                            }),
                            (0, t.jsxs)('div', {
                                className: r()(H.row, H.gapSm, H.gameDetails),
                                children: [
                                    (0, t.jsxs)('div', {
                                        children: [
                                            (0, t.jsx)(_.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eS
                                            }),
                                            (0, t.jsxs)('div', {
                                                className: r()(H.row, H.gapSm),
                                                children: [
                                                    null != eb &&
                                                        (0, t.jsx)('img', {
                                                            src: eb,
                                                            height: 16,
                                                            alt: Z.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eS })
                                                        }),
                                                    (0, t.jsx)(_.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eA
                                                    }),
                                                    eF &&
                                                        (0, t.jsx)(_.Text, {
                                                            variant: 'eyebrow',
                                                            className: H.newBadge,
                                                            children: Z.Z.Messages.NEW
                                                        }),
                                                    eZ &&
                                                        (0, t.jsxs)(t.Fragment, {
                                                            children: [
                                                                (0, t.jsx)(_.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, t.jsx)(W, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)('div', {
                                        children:
                                            eC &&
                                            (0, t.jsx)(_.Tooltip, {
                                                text: $ ? Z.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : Z.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, t.jsxs)(_.Button, {
                                                        ...e,
                                                        innerClassName: H.followButton,
                                                        color: $ ? _.Button.Colors.PRIMARY : _.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let a = null !== (e = p.K.get(D)) && void 0 !== e ? e : {};
                                                            (a[s] = !a[s]),
                                                                p.K.set(D, a),
                                                                eM(a[s] ? N.as.FollowGame : N.as.UnfollowGame),
                                                                a[s] &&
                                                                    (0, y.L)() &&
                                                                    (0, _.openModalLazy)(async () => {
                                                                        let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                                                                        return (a) =>
                                                                            (0, t.jsx)(e, {
                                                                                ...a,
                                                                                applicationId: s,
                                                                                background: eT,
                                                                                viewId: es
                                                                            });
                                                                    }),
                                                                Q(a[s]);
                                                        },
                                                        children: [$ ? (0, t.jsx)(_.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(_.BellIcon, { color: 'white' }), $ ? Z.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : Z.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, t.jsx)(_.HeadingLevel, {
                        children: (0, t.jsxs)('div', {
                            className: r()(H.content, H.mainContent),
                            children: [
                                (0, t.jsxs)('div', {
                                    className: H.column,
                                    children: [
                                        (0, t.jsx)(_.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: Z.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: r()(H.section, { [H.fadedEntries]: eg && !ex }),
                                            children: [
                                                0 === e_.length &&
                                                    (0, t.jsx)(_.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: H.emptyFriendsWhoPlay,
                                                        children: Z.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, t.jsx)('div', {
                                                    className: r()(H.column, H.gapNone),
                                                    children:
                                                        null == e_
                                                            ? void 0
                                                            : e_.slice(0, eg && !ex ? 6 : void 0).map((e) => {
                                                                  var a;
                                                                  return (0, t.jsx)(
                                                                      k.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: es,
                                                                          onClose: X,
                                                                          officialGuildId: null == eh ? void 0 : null === (a = eh.guild) || void 0 === a ? void 0 : a.id
                                                                      },
                                                                      e.id
                                                                  );
                                                              })
                                                })
                                            ]
                                        }),
                                        eg &&
                                            !ex &&
                                            (0, t.jsxs)(_.Clickable, {
                                                className: H.expandEntriesButton,
                                                onClick: () => ef(!0),
                                                children: [
                                                    (0, t.jsx)(_.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: Z.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, t.jsx)(_.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eP.length > 0 &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(_.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: Z.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, t.jsx)(_.Scroller, {
                                                        className: r()(H.row, H.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eP.map((e, a) =>
                                                            (0, t.jsx)(
                                                                _.Clickable,
                                                                {
                                                                    className: H.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: H.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eM(N.as.ClickImage),
                                                                            (0, _.openModalLazy)(async () => {
                                                                                let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                                                                                return (n) => {
                                                                                    let { ...o } = n;
                                                                                    return (0, t.jsx)(e, {
                                                                                        className: H.mediaModal,
                                                                                        ...o,
                                                                                        items: eP,
                                                                                        startingIndex: a
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, t.jsx)('img', {
                                                                        src: e.src,
                                                                        className: H.gameArtwork,
                                                                        alt: Z.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eS })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, t.jsx)(_.Spacer, { size: 8 })
                                                ]
                                            }),
                                        em &&
                                            null == ea &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)('div', { className: H.loadingHeadingSimilarGames }),
                                                    (0, t.jsx)('div', {
                                                        className: H.row,
                                                        children: (0, l.range)(0, 5).map((e) => (0, t.jsx)('div', { className: H.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !em &&
                                            ed.length > 0 &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(_.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: Z.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, t.jsx)('div', {
                                                        className: H.row,
                                                        style: {},
                                                        children: ed.map((e) =>
                                                            (0, t.jsx)(
                                                                B,
                                                                {
                                                                    game: e,
                                                                    onClose: X,
                                                                    trackClick: eM
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
                                    className: r()(H.sidebar, H.column),
                                    children: [
                                        (0, t.jsx)(_.Heading, {
                                            variant: 'heading-md/bold',
                                            children: Z.Z.Messages.ABOUT
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: H.sidebarSections,
                                            children: [
                                                null != eL &&
                                                    (0, t.jsxs)('div', {
                                                        className: r()(H.column, H.gapSm),
                                                        children: [
                                                            null != ew &&
                                                                (0, t.jsxs)('div', {
                                                                    className: H.translatedInfo,
                                                                    children: [
                                                                        (0, t.jsx)(_.PencilSparkleIcon, {
                                                                            color: _.tokens.colors.HEADER_SECONDARY,
                                                                            size: 'xs'
                                                                        }),
                                                                        (0, t.jsx)(_.Text, {
                                                                            variant: 'text-xs/medium',
                                                                            color: 'header-secondary',
                                                                            children: ej ? Z.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => eN(!1) }) : Z.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => eN(!0) })
                                                                        })
                                                                    ]
                                                                }),
                                                            (0, t.jsx)(_.Text, {
                                                                ref: el,
                                                                lineClamp: et ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: ej ? ew : eL
                                                            }),
                                                            (ei || !et) &&
                                                                (0, t.jsx)(_.Clickable, {
                                                                    className: H.clickable,
                                                                    onClick: () => {
                                                                        eM(et ? N.as.ShowMore : N.as.ShowLess), eo(!et);
                                                                    },
                                                                    children: (0, t.jsx)(_.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: et ? Z.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : Z.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, t.jsx)(G.Z, {
                                                    websites: ey,
                                                    trackClick: eM,
                                                    onInviteResolved: eI
                                                }),
                                                (ek.length > 0 || eG.length > 0) &&
                                                    (0, t.jsx)('div', {
                                                        className: r()(H.column),
                                                        children:
                                                            ek.length > 0 &&
                                                            (0, t.jsxs)('div', {
                                                                className: r()(H.column, H.gapSm),
                                                                children: [
                                                                    (0, t.jsx)(_.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: Z.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, t.jsxs)('div', {
                                                                        className: r()(H.row, H.gapMd),
                                                                        children: [
                                                                            (0, t.jsx)(_.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: ek.join(', ')
                                                                            }),
                                                                            eG.length > 0 && (0, t.jsx)(z, { platforms: eG })
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
a.default = K;
