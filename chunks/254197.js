n(47120), n(627341);
var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(278074),
    c = n(442837),
    d = n(481060),
    u = n(70097),
    p = n(617136),
    m = n(272008),
    x = n(113434),
    _ = n(569984),
    C = n(497505),
    g = n(918701),
    f = n(988303),
    E = n(302245),
    h = n(665430),
    S = n(585500),
    T = n(475595),
    N = n(644646),
    v = n(78826),
    j = n(670638),
    A = n(341907),
    R = n(693900),
    b = n(164495),
    B = n(759853),
    I = n(205511),
    M = n(694802),
    O = n(95985),
    y = n(50476),
    L = n(658590),
    w = n(46140),
    U = n(743294),
    k = n(689938),
    Z = n(160443);
function q(e) {
    let { quest: t, isHighlightedReward: n } = e;
    return (0, o.jsx)(N.Z, {
        className: a()(Z.rewardTile, { [Z.hiddenRewardTile]: n }),
        learnMoreStyle: 'text',
        quest: t,
        questContent: C.jn.QUEST_BAR_V2,
        location: w.dr.QUESTS_BAR
    });
}
function P(e) {
    let { quest: t, taskDetails: n, expansionSpring: r, isInteractable: a, useReducedMotion: i, containerRef: p, isExpanded: m, onAcceptQuest: x } = e,
        h = (0, c.e7)([_.Z], () => _.Z.isEnrolling(t.id), [t]),
        N = s.useMemo(() => (0, T.fh)(t, T.Bd.QUEST_BAR_HERO), [t]),
        j = (0, E.vI)(t, w.dr.QUESTS_BAR, !0),
        A = s.useRef(null),
        { primaryVariant: R } = f.u.useExperiment({ location: w.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        b = (0, S.D)({
            quest: t,
            location: w.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: R === f.P.V2 || (0, L.a)(t)
        });
    s.useEffect(() => {
        null != A.current && (i && m ? (A.current.pause(), (A.current.currentTime = 0)) : !i && m && A.current.play());
    }, [i, m]);
    let B = (0, g.cr)(t) ? k.Z.Messages.QUESTS_START_QUEST : k.Z.Messages.QUESTS_ACCEPT_QUEST;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('div', {
                children: (0, o.jsxs)('div', {
                    className: Z.questPromoContent,
                    ref: p,
                    children: [
                        (0, o.jsxs)('div', {
                            className: Z.details,
                            children: [
                                (0, o.jsx)(q, {
                                    quest: t,
                                    isHighlightedReward: j
                                }),
                                (0, o.jsx)(d.Heading, {
                                    className: Z.title,
                                    variant: 'heading-md/medium',
                                    children: k.Z.Messages.QUESTS_TITLE.format({ questName: t.config.messages.questName })
                                }),
                                (0, o.jsx)(d.Text, {
                                    className: Z.description,
                                    variant: 'text-xs/normal',
                                    children: b
                                })
                            ]
                        }),
                        (0, o.jsx)(d.Button, {
                            className: Z.cta,
                            color: d.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: a ? x : void 0,
                            size: d.Button.Sizes.SMALL,
                            submitting: h,
                            children: B
                        })
                    ]
                })
            }),
            (0, o.jsxs)(l.animated.div, {
                className: Z.heroAssetWrapper,
                style: {
                    backdropFilter: r.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: r.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                    borderRadius: j ? '12px 12px 0 0' : '8px 8px 0 0'
                },
                children: [
                    (0, o.jsx)(l.animated.div, {
                        className: Z.heroAssetDarken,
                        style: {
                            opacity: r.to([0, 1], [1, 0])
                        }
                    }),
                    (0, o.jsx)(l.animated.div, {
                        className: Z.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: r.to([0, 1], [1, 0])
                        }
                    }),
                    N.isAnimated
                        ? (0, o.jsx)(v.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (A.current = e.current),
                                      (0, o.jsx)(u.Z, {
                                          ref: e,
                                          autoPlay: !i && m,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: Z.heroAsset,
                                          controls: !1,
                                          children: (0, o.jsx)('source', {
                                              src: N.url,
                                              type: null !== (t = N.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, o.jsx)(v.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, o.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: Z.heroAsset,
                                      src: N.url
                                  })
                          }),
                    (0, o.jsx)(l.animated.div, {
                        className: Z.legibilityGradient,
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
function Q(e) {
    var t;
    let { quest: n, taskDetails: r, expansionSpring: c, overlayRef: u, isExpanded: p, useReducedMotion: m, containerRef: _, onCtxMenuOpen: f, onCtxMenuClose: E, onCtxMenuSelect: S } = e,
        T = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        N = r.percentComplete > 0,
        v = (0, x.z)(n),
        [A, L, q] = (0, x.me)(n, r),
        P = (0, h.pF)({ location: w.dr.QUESTS_BAR }),
        Q = s.useRef(null),
        D = (0, x.B6)(n.config.expiresAt),
        W = (0, x._s)({ quest: n }),
        H = (0, g.cr)(n);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(l.animated.div, {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(U.aY, ', ').concat(U.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, o.jsxs)('div', {
                className: Z.questAcceptedContent,
                ref: _,
                children: [
                    (0, o.jsxs)('div', {
                        className: Z.questAcceptedHeader,
                        children: [
                            (0, o.jsx)(d.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(Z.flex, Z.headerText),
                                children: k.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: D })
                            }),
                            (0, o.jsx)(j.r, {
                                onOpen: f,
                                onClose: E,
                                onSelect: S,
                                questContent: C.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, o.jsx)(d.Clickable, {
                                        ...e,
                                        className: Z.submenuWrapper,
                                        'aria-label': k.Z.Messages.ACTIONS,
                                        children: (0, o.jsx)(d.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(Z.submenuIcon, Z.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: Z.divider }),
                    (0, o.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: Q,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, o.jsx)(O.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: Q,
                        isExpanded: !0,
                        taskDetails: r,
                        activeScreen: A
                    }),
                    (0, o.jsx)(R.n, {
                        children:
                            !T &&
                            !H &&
                            (0, i.EQ)(A)
                                .with(C.LI.SELECT, () =>
                                    (0, o.jsx)(y.Z, {
                                        onConsole: () => q(w.cd.CONSOLE),
                                        onDesktop: () => q(w.cd.DESKTOP)
                                    })
                                )
                                .with(C.LI.DESKTOP, () => (0, o.jsx)(M.Z, { quest: n }))
                                .with(C.LI.CONSOLE, () =>
                                    (0, o.jsx)(I.Z, {
                                        quest: n,
                                        taskDetails: r
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, o.jsx)(R.n, {
                        children: (0, o.jsx)(b.y, {
                            quest: n,
                            useReducedMotion: m,
                            isExpanded: p,
                            awaitingConsoleConnections: W,
                            hasMadeProgress: N,
                            isProgressing: v,
                            activeScreen: A,
                            showBackButton: A !== C.LI.SELECT && L.length > 1 && !N && !v && P,
                            onBack: () => q(null),
                            taskDetails: r
                        })
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(U.aY, ', ').concat(U.v6, ')') }
            })
        ]
    });
}
let D = s.forwardRef(function (e, t) {
    var n;
    let { children: r, className: i, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: x, onCtxMenuOpen: _, onCtxMenuClose: f, onCtxMenuSelect: E, overlayRef: h, quest: S, useReducedMotion: T, taskDetails: N } = e,
        v = (0, g.cr)(S),
        j = s.useCallback(() => {
            (0, m.AH)(S.id, {
                questContent: C.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.ACCEPT_QUEST
            }),
                v && (0, A.openVideoQuestModal)(S);
        }, [S, v]),
        R = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        b = d && u;
    return (0, o.jsxs)(l.animated.div, {
        'aria-hidden': !b,
        className: a()(i, Z.contentExpanded, {
            [Z.contentInteractable]: b,
            [Z.contentExpandedAccepted]: R
        }),
        style: {
            transform: (0, l.to)(
                [
                    x.to({
                        range: [0, 1],
                        output: [0, -100]
                    }),
                    x.to({
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
                children: R
                    ? (0, o.jsx)(Q, {
                          quest: S,
                          taskDetails: N,
                          expansionSpring: x,
                          overlayRef: h,
                          isExpanded: d,
                          useReducedMotion: T,
                          onCtxMenuOpen: _,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: E,
                          containerRef: t
                      })
                    : (0, o.jsx)(P, {
                          quest: S,
                          taskDetails: N,
                          expansionSpring: x,
                          isInteractable: b,
                          useReducedMotion: T,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: j
                      })
            })
        ]
    });
});
t.Z = D;
