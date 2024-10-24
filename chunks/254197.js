n(47120), n(627341);
var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(70097),
    m = n(617136),
    x = n(272008),
    C = n(113434),
    _ = n(569984),
    g = n(497505),
    f = n(918701),
    h = n(184299),
    E = n(988303),
    S = n(302245),
    T = n(665430),
    v = n(585500),
    N = n(475595),
    j = n(720293),
    A = n(644646),
    b = n(78826),
    B = n(670638),
    R = n(341907),
    y = n(693900),
    I = n(164495),
    M = n(759853),
    O = n(205511),
    w = n(694802),
    k = n(95985),
    P = n(50476),
    L = n(658590),
    U = n(46140),
    q = n(743294),
    Z = n(689938),
    Q = n(160443);
function D(e) {
    var t;
    let { quest: n, onClick: r, containerClassName: l, imgClassName: i, reducedMotion: c } = e,
        [m, x] = s.useState(!1),
        C = s.useRef(null),
        _ = (0, j.z)(j.i.QUEST_BAR_PREVIEW_VIDEO, n),
        g = (0, j.z)(j.i.VIDEO_PLAYER_THUMBNAIL, n),
        f = (0, h.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != C.current && (c && m && (C.current.currentTime = 0), C.current.play());
    }, [C, m, c]);
    let E = f(n.id),
        S = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null && E === h.iw.COMPLETED,
        T = !S && (!c || m);
    return (0, o.jsxs)(u.Clickable, {
        className: a()(Q.videoQuestPreviewCont, l),
        onClick: r,
        onMouseEnter: () => {
            c && !m && x(!0);
        },
        onMouseLeave: () => {
            c && m && x(!1);
        },
        children: [
            null != g &&
                (0, o.jsx)('img', {
                    alt: '',
                    src: g.url,
                    className: a()(Q.assetBodyVideoPreviewMedia, i)
                }),
            null != _
                ? (0, o.jsx)(p.Z, {
                      ref: C,
                      autoPlay: !0,
                      poster: null == g ? void 0 : g.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Q.assetBodyVideoPreviewMedia, Q.assetBodyVideoPreviewVideo, { [Q.assetBodyVideoPreviewVisible]: T }),
                      controls: !1,
                      children: (0, o.jsx)('source', {
                          src: _.url,
                          type: _.mimetype
                      })
                  })
                : null,
            (0, o.jsx)('div', {
                className: Q.previewPlayButtonCont,
                children: S
                    ? (0, o.jsx)(u.RetryIcon, {
                          color: d.Z.colors.WHITE,
                          className: Q.previewPlayButton
                      })
                    : (0, o.jsx)(u.PlayIcon, {
                          color: d.Z.colors.WHITE,
                          className: Q.previewPlayButton
                      })
            })
        ]
    });
}
function W(e) {
    let { quest: t, isHighlightedReward: n } = e;
    return (0, o.jsx)(A.Z, {
        className: a()(Q.rewardTile, { [Q.hiddenRewardTile]: n }),
        learnMoreStyle: 'text',
        quest: t,
        questContent: g.jn.QUEST_BAR_V2,
        location: U.dr.QUESTS_BAR
    });
}
function H(e) {
    let { quest: t, taskDetails: n, expansionSpring: r, isInteractable: a, reducedMotion: i, containerRef: d, isExpanded: m, onAcceptQuest: x } = e,
        C = (0, c.e7)([_.Z], () => _.Z.isEnrolling(t.id), [t]),
        h = s.useMemo(() => (0, N.fh)(t, N.Bd.QUEST_BAR_HERO), [t]),
        T = (0, S.vI)(t, U.dr.QUESTS_BAR, !0),
        j = s.useRef(null),
        { primaryVariant: A } = E.u.useExperiment({ location: U.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        B = (0, v.D)({
            quest: t,
            location: U.dr.QUESTS_BAR,
            questContent: g.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: A === E.P.V2 || (0, L.a)(t)
        });
    s.useEffect(() => {
        null != j.current && (i && m ? (j.current.pause(), (j.current.currentTime = 0)) : !i && m && j.current.play());
    }, [i, m]);
    let R = (0, f.cr)(t) ? Z.Z.Messages.QUESTS_START_VIDEO_QUEST : Z.Z.Messages.QUESTS_ACCEPT_QUEST;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('div', {
                children: (0, o.jsxs)('div', {
                    className: Q.questPromoContent,
                    ref: d,
                    children: [
                        (0, o.jsxs)('div', {
                            className: Q.details,
                            children: [
                                (0, o.jsx)(W, {
                                    quest: t,
                                    isHighlightedReward: T
                                }),
                                (0, o.jsx)(u.Heading, {
                                    className: Q.title,
                                    variant: 'heading-md/medium',
                                    children: Z.Z.Messages.QUESTS_TITLE.format({ questName: t.config.messages.questName })
                                }),
                                (0, o.jsx)(u.Text, {
                                    className: Q.description,
                                    variant: 'text-xs/normal',
                                    children: B
                                })
                            ]
                        }),
                        (0, o.jsx)(u.Button, {
                            className: Q.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: a ? x : void 0,
                            size: u.Button.Sizes.SMALL,
                            submitting: C,
                            children: R
                        })
                    ]
                })
            }),
            (0, o.jsxs)(l.animated.div, {
                className: Q.heroAssetWrapper,
                style: {
                    backdropFilter: r.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: r.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                    borderRadius: T ? '12px 12px 0 0' : '8px 8px 0 0'
                },
                children: [
                    (0, o.jsx)(l.animated.div, {
                        className: Q.heroAssetDarken,
                        style: {
                            opacity: r.to([0, 1], [1, 0])
                        }
                    }),
                    (0, o.jsx)(l.animated.div, {
                        className: Q.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: r.to([0, 1], [1, 0])
                        }
                    }),
                    h.isAnimated
                        ? (0, o.jsx)(b.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (j.current = e.current),
                                      (0, o.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !i && m,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: Q.heroAsset,
                                          controls: !1,
                                          children: (0, o.jsx)('source', {
                                              src: h.url,
                                              type: null !== (t = h.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, o.jsx)(b.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, o.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: Q.heroAsset,
                                      src: h.url
                                  })
                          }),
                    (0, o.jsx)(l.animated.div, {
                        className: Q.legibilityGradient,
                        style: {
                            opacity: r.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        }
                    })
                ]
            })
        ]
    });
}
function V(e) {
    var t;
    let { quest: n, taskDetails: r, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: x, onCtxMenuOpen: _, onCtxMenuClose: h, onCtxMenuSelect: E } = e,
        S = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        v = r.percentComplete > 0,
        N = (0, C.z)(n),
        [j, A, b] = (0, C.me)(n, r),
        L = (0, T.pF)({ location: U.dr.QUESTS_BAR }),
        W = s.useRef(null),
        H = (0, C.B6)(n.config.expiresAt),
        V = (0, C._s)({ quest: n }),
        z = (0, f.cr)(n),
        G = s.useCallback(() => {
            (0, R.openVideoQuestModal)(n);
        }, [n]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(l.animated.div, {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(q.aY, ', ').concat(q.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, o.jsxs)('div', {
                className: Q.questAcceptedContent,
                ref: x,
                children: [
                    (0, o.jsxs)('div', {
                        className: Q.questAcceptedHeader,
                        children: [
                            (0, o.jsx)(u.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(Q.flex, Q.headerText),
                                children: Z.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: H })
                            }),
                            (0, o.jsx)(B.r, {
                                onOpen: _,
                                onClose: h,
                                onSelect: E,
                                questContent: g.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, o.jsx)(u.Clickable, {
                                        ...e,
                                        className: Q.submenuWrapper,
                                        'aria-label': Z.Z.Messages.ACTIONS,
                                        children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(Q.submenuIcon, Q.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: Q.divider }),
                    (0, o.jsx)(M.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: W,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, o.jsx)(k.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: W,
                        isExpanded: !0,
                        taskDetails: r,
                        activeScreen: j
                    }),
                    (0, o.jsx)(y.n, {
                        children:
                            !S &&
                            !z &&
                            (0, i.EQ)(j)
                                .with(g.LI.SELECT, () =>
                                    (0, o.jsx)(P.Z, {
                                        onConsole: () => b(U.cd.CONSOLE),
                                        onDesktop: () => b(U.cd.DESKTOP)
                                    })
                                )
                                .with(g.LI.DESKTOP, () => (0, o.jsx)(w.Z, { quest: n }))
                                .with(g.LI.CONSOLE, () =>
                                    (0, o.jsx)(O.Z, {
                                        quest: n,
                                        taskDetails: r
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, o.jsxs)(y.n, {
                        children: [
                            z &&
                                (0, o.jsx)(D, {
                                    quest: n,
                                    onClick: G,
                                    containerClassName: Q.enrolledVideoPreview,
                                    imgClassName: Q.enrolledVideoPreviewImg,
                                    reducedMotion: m
                                }),
                            (0, o.jsx)(I.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: V,
                                hasMadeProgress: v,
                                isProgressing: N,
                                activeScreen: j,
                                showBackButton: j !== g.LI.SELECT && A.length > 1 && !v && !N && L,
                                onBack: () => b(null),
                                taskDetails: r
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(q.aY, ', ').concat(q.v6, ')') }
            })
        ]
    });
}
let z = s.forwardRef(function (e, t) {
    var n;
    let { children: r, className: i, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: C, onCtxMenuClose: _, onCtxMenuSelect: h, overlayRef: E, quest: S, useReducedMotion: T, taskDetails: v } = e,
        N = (0, f.cr)(S),
        j = s.useCallback(() => {
            (0, x.AH)(S.id, {
                questContent: g.jn.QUEST_BAR_V2,
                questContentCTA: m.jZ.ACCEPT_QUEST
            }),
                N && (0, R.openVideoQuestModal)(S);
        }, [S, N]),
        A = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        b = d && u;
    return (0, o.jsxs)(l.animated.div, {
        'aria-hidden': !b,
        className: a()(i, Q.contentExpanded, {
            [Q.contentInteractable]: b,
            [Q.contentExpandedAccepted]: A
        }),
        style: {
            transform: (0, l.to)(
                [
                    p.to({
                        range: [0, 1],
                        output: [0, -100]
                    }),
                    p.to({
                        range: [0, 1],
                        output: [0, c]
                    })
                ],
                (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
            )
        },
        children: [
            r,
            (0, o.jsx)(l.animated.div, {
                style: { opacity: 1 },
                children: A
                    ? (0, o.jsx)(V, {
                          quest: S,
                          taskDetails: v,
                          expansionSpring: p,
                          overlayRef: E,
                          isExpanded: d,
                          reducedMotion: T,
                          onCtxMenuOpen: C,
                          onCtxMenuClose: _,
                          onCtxMenuSelect: h,
                          containerRef: t
                      })
                    : (0, o.jsx)(H, {
                          quest: S,
                          taskDetails: v,
                          expansionSpring: p,
                          isInteractable: b,
                          reducedMotion: T,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: j
                      })
            })
        ]
    });
});
t.Z = z;
