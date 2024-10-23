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
    C = n(569984),
    g = n(497505),
    _ = n(918701),
    f = n(988303),
    h = n(302245),
    E = n(665430),
    S = n(585500),
    T = n(475595),
    v = n(644646),
    N = n(78826),
    j = n(670638),
    A = n(341907),
    b = n(693900),
    R = n(164495),
    B = n(759853),
    I = n(205511),
    y = n(694802),
    M = n(95985),
    O = n(50476),
    k = n(658590),
    w = n(46140),
    L = n(743294),
    U = n(689938),
    q = n(160443);
function Z(e) {
    let { quest: t, isHighlightedReward: n } = e;
    return (0, o.jsx)(v.Z, {
        className: a()(q.rewardTile, { [q.hiddenRewardTile]: n }),
        learnMoreStyle: 'text',
        quest: t,
        questContent: g.jn.QUEST_BAR_V2,
        location: w.dr.QUESTS_BAR
    });
}
function P(e) {
    let { quest: t, taskDetails: n, expansionSpring: r, isInteractable: a, useReducedMotion: i, containerRef: p, isExpanded: m, onAcceptQuest: x } = e,
        E = (0, c.e7)([C.Z], () => C.Z.isEnrolling(t.id), [t]),
        v = s.useMemo(() => (0, T.fh)(t, T.Bd.QUEST_BAR_HERO), [t]),
        j = (0, h.vI)(t, w.dr.QUESTS_BAR, !0),
        A = s.useRef(null),
        { primaryVariant: b } = f.u.useExperiment({ location: w.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        R = (0, S.D)({
            quest: t,
            location: w.dr.QUESTS_BAR,
            questContent: g.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: b === f.P.V2 || (0, k.a)(t)
        });
    s.useEffect(() => {
        null != A.current && (i && m ? (A.current.pause(), (A.current.currentTime = 0)) : !i && m && A.current.play());
    }, [i, m]);
    let B = (0, _.cr)(t) ? U.Z.Messages.QUESTS_START_QUEST : U.Z.Messages.QUESTS_ACCEPT_QUEST;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('div', {
                children: (0, o.jsxs)('div', {
                    className: q.questPromoContent,
                    ref: p,
                    children: [
                        (0, o.jsxs)('div', {
                            className: q.details,
                            children: [
                                (0, o.jsx)(Z, {
                                    quest: t,
                                    isHighlightedReward: j
                                }),
                                (0, o.jsx)(d.Heading, {
                                    className: q.title,
                                    variant: 'heading-md/medium',
                                    children: U.Z.Messages.QUESTS_TITLE.format({ questName: t.config.messages.questName })
                                }),
                                (0, o.jsx)(d.Text, {
                                    className: q.description,
                                    variant: 'text-xs/normal',
                                    children: R
                                })
                            ]
                        }),
                        (0, o.jsx)(d.Button, {
                            className: q.cta,
                            color: d.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: a ? x : void 0,
                            size: d.Button.Sizes.SMALL,
                            submitting: E,
                            children: B
                        })
                    ]
                })
            }),
            (0, o.jsxs)(l.animated.div, {
                className: q.heroAssetWrapper,
                style: {
                    backdropFilter: r.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: r.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                    borderRadius: j ? '12px 12px 0 0' : '8px 8px 0 0'
                },
                children: [
                    (0, o.jsx)(l.animated.div, {
                        className: q.heroAssetDarken,
                        style: {
                            opacity: r.to([0, 1], [1, 0])
                        }
                    }),
                    (0, o.jsx)(l.animated.div, {
                        className: q.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: r.to([0, 1], [1, 0])
                        }
                    }),
                    v.isAnimated
                        ? (0, o.jsx)(N.Fl, {
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
                                          className: q.heroAsset,
                                          controls: !1,
                                          children: (0, o.jsx)('source', {
                                              src: v.url,
                                              type: null !== (t = v.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, o.jsx)(N.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, o.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: q.heroAsset,
                                      src: v.url
                                  })
                          }),
                    (0, o.jsx)(l.animated.div, {
                        className: q.legibilityGradient,
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
    let { quest: n, taskDetails: r, expansionSpring: c, overlayRef: u, isExpanded: p, useReducedMotion: m, containerRef: C, onCtxMenuOpen: f, onCtxMenuClose: h, onCtxMenuSelect: S } = e,
        T = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        v = r.percentComplete > 0,
        N = (0, x.z)(n),
        [A, k, Z] = (0, x.me)(n, r),
        P = (0, E.pF)({ location: w.dr.QUESTS_BAR }),
        Q = s.useRef(null),
        D = (0, x.B6)(n.config.expiresAt),
        W = (0, x._s)({ quest: n }),
        H = (0, _.cr)(n);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(l.animated.div, {
                className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, o.jsxs)('div', {
                className: q.questAcceptedContent,
                ref: C,
                children: [
                    (0, o.jsxs)('div', {
                        className: q.questAcceptedHeader,
                        children: [
                            (0, o.jsx)(d.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(q.flex, q.headerText),
                                children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: D })
                            }),
                            (0, o.jsx)(j.r, {
                                onOpen: f,
                                onClose: h,
                                onSelect: S,
                                questContent: g.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, o.jsx)(d.Clickable, {
                                        ...e,
                                        className: q.submenuWrapper,
                                        'aria-label': U.Z.Messages.ACTIONS,
                                        children: (0, o.jsx)(d.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(q.submenuIcon, q.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: q.divider }),
                    (0, o.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: Q,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, o.jsx)(M.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: Q,
                        isExpanded: !0,
                        taskDetails: r,
                        activeScreen: A
                    }),
                    (0, o.jsx)(b.n, {
                        children:
                            !T &&
                            !H &&
                            (0, i.EQ)(A)
                                .with(g.LI.SELECT, () =>
                                    (0, o.jsx)(O.Z, {
                                        onConsole: () => Z(w.cd.CONSOLE),
                                        onDesktop: () => Z(w.cd.DESKTOP)
                                    })
                                )
                                .with(g.LI.DESKTOP, () => (0, o.jsx)(y.Z, { quest: n }))
                                .with(g.LI.CONSOLE, () =>
                                    (0, o.jsx)(I.Z, {
                                        quest: n,
                                        taskDetails: r
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, o.jsx)(b.n, {
                        children: (0, o.jsx)(R.y, {
                            quest: n,
                            useReducedMotion: m,
                            isExpanded: p,
                            awaitingConsoleConnections: W,
                            hasMadeProgress: v,
                            isProgressing: N,
                            activeScreen: A,
                            showBackButton: A !== g.LI.SELECT && k.length > 1 && !v && !N && P,
                            onBack: () => Z(null),
                            taskDetails: r
                        })
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')') }
            })
        ]
    });
}
let D = s.forwardRef(function (e, t) {
    var n;
    let { children: r, className: i, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: x, onCtxMenuOpen: C, onCtxMenuClose: f, onCtxMenuSelect: h, overlayRef: E, quest: S, useReducedMotion: T, taskDetails: v } = e,
        N = (0, _.cr)(S),
        j = s.useCallback(() => {
            (0, m.AH)(S.id, {
                questContent: g.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.ACCEPT_QUEST
            }),
                N && (0, A.openVideoQuestModal)(S);
        }, [S, N]),
        b = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        R = d && u;
    return (0, o.jsxs)(l.animated.div, {
        'aria-hidden': !R,
        className: a()(i, q.contentExpanded, {
            [q.contentInteractable]: R,
            [q.contentExpandedAccepted]: b
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
                children: b
                    ? (0, o.jsx)(Q, {
                          quest: S,
                          taskDetails: v,
                          expansionSpring: x,
                          overlayRef: E,
                          isExpanded: d,
                          useReducedMotion: T,
                          onCtxMenuOpen: C,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: h,
                          containerRef: t
                      })
                    : (0, o.jsx)(P, {
                          quest: S,
                          taskDetails: v,
                          expansionSpring: x,
                          isInteractable: R,
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
