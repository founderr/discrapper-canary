n(47120), n(627341);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(526629),
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
    T = n(644646),
    N = n(78826),
    v = n(670638),
    j = n(693900),
    A = n(164495),
    R = n(759853),
    b = n(205511),
    B = n(694802),
    I = n(95985),
    M = n(50476),
    O = n(658590),
    y = n(46140),
    L = n(743294),
    w = n(689938),
    k = n(160443);
function U(e) {
    let { quest: t, isHighlightedReward: n } = e;
    return (0, s.jsx)(T.Z, {
        className: a()(k.rewardTile, { [k.hiddenRewardTile]: n }),
        learnMoreStyle: 'text',
        quest: t,
        questContent: C.jn.QUEST_BAR_V2,
        location: y.dr.QUESTS_BAR
    });
}
function Z(e) {
    let { quest: t, taskDetails: n, expansionSpring: r, isInteractable: a, useReducedMotion: i, containerRef: p, isExpanded: m, onAcceptQuest: x } = e,
        h = (0, c.e7)([_.Z], () => _.Z.isEnrolling(t.id), [t]),
        T = (0, g.ph)(t),
        v = o.useMemo(() => (0, g.nP)(T), [T]),
        j = (0, E.vI)(t, y.dr.QUESTS_BAR, !0),
        A = o.useRef(null),
        { primaryVariant: R } = f.u.useExperiment({ location: y.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        b = (0, S.D)({
            quest: t,
            location: y.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: R === f.P.V2 || (0, O.a)(t)
        });
    return (
        o.useEffect(() => {
            null != A.current && (i && m ? (A.current.pause(), (A.current.currentTime = 0)) : !i && m && A.current.play());
        }, [i, m]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', {
                    children: (0, s.jsxs)('div', {
                        className: k.questPromoContent,
                        ref: p,
                        children: [
                            (0, s.jsxs)('div', {
                                className: k.details,
                                children: [
                                    (0, s.jsx)(U, {
                                        quest: t,
                                        isHighlightedReward: j
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        className: k.title,
                                        variant: 'heading-md/medium',
                                        children: w.Z.Messages.QUESTS_TITLE.format({ questName: t.config.messages.questName })
                                    }),
                                    (0, s.jsx)(d.Text, {
                                        className: k.description,
                                        variant: 'text-xs/normal',
                                        children: b
                                    })
                                ]
                            }),
                            (0, s.jsx)(d.Button, {
                                className: k.cta,
                                color: d.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: a ? x : void 0,
                                size: d.Button.Sizes.SMALL,
                                submitting: h,
                                children: w.Z.Messages.QUESTS_ACCEPT_QUEST
                            })
                        ]
                    })
                }),
                (0, s.jsxs)(l.animated.div, {
                    className: k.heroAssetWrapper,
                    style: {
                        backdropFilter: r.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                        filter: r.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                        borderRadius: j ? '12px 12px 0 0' : '8px 8px 0 0'
                    },
                    children: [
                        (0, s.jsx)(l.animated.div, {
                            className: k.heroAssetDarken,
                            style: {
                                opacity: r.to([0, 1], [1, 0])
                            }
                        }),
                        (0, s.jsx)(l.animated.div, {
                            className: k.heroAssetTint,
                            style: {
                                backgroundColor: t.config.colors.primary,
                                opacity: r.to([0, 1], [1, 0])
                            }
                        }),
                        v
                            ? (0, s.jsx)(N.Fl, {
                                  id: 'QuestBarV2ContentExpanded_heroAnimated',
                                  children: (e) => (
                                      null != e.current && (A.current = e.current),
                                      (0, s.jsx)(u.Z, {
                                          ref: e,
                                          autoPlay: !i && m,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: k.heroAsset,
                                          controls: !1,
                                          children: (0, s.jsx)('source', {
                                              src: T,
                                              type: (0, g.mN)(T)
                                          })
                                      })
                                  )
                              })
                            : (0, s.jsx)(N.Fl, {
                                  id: 'QuestBarV2ContentExpanded_heroStatic',
                                  children: (e) =>
                                      (0, s.jsx)('img', {
                                          ref: e,
                                          alt: '',
                                          className: k.heroAsset,
                                          src: T
                                      })
                              }),
                        (0, s.jsx)(l.animated.div, {
                            className: k.legibilityGradient,
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
        })
    );
}
function q(e) {
    var t;
    let { quest: n, taskDetails: r, expansionSpring: c, overlayRef: u, isExpanded: p, useReducedMotion: m, containerRef: _, onCtxMenuOpen: g, onCtxMenuClose: f, onCtxMenuSelect: E } = e,
        S = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        T = r.percentComplete > 0,
        N = (0, x.z)(n),
        [O, U, Z] = (0, x.me)(n, r),
        q = (0, h.pF)({ location: y.dr.QUESTS_BAR }),
        P = o.useRef(null),
        Q = (0, x.B6)(n.config.expiresAt),
        D = (0, x._s)({ quest: n });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.animated.div, {
                className: a()(k.postEnrollmentBackground, k.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, s.jsxs)('div', {
                className: k.questAcceptedContent,
                ref: _,
                children: [
                    (0, s.jsxs)('div', {
                        className: k.questAcceptedHeader,
                        children: [
                            (0, s.jsx)(d.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(k.flex, k.headerText),
                                children: w.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: Q })
                            }),
                            (0, s.jsx)(v.r, {
                                onOpen: g,
                                onClose: f,
                                onSelect: E,
                                questContent: C.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, s.jsx)(d.Clickable, {
                                        ...e,
                                        className: k.submenuWrapper,
                                        'aria-label': w.Z.Messages.ACTIONS,
                                        children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(k.submenuIcon, k.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, s.jsx)('div', { className: k.divider }),
                    (0, s.jsx)(R.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, s.jsx)(I.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        taskDetails: r,
                        activeScreen: O
                    }),
                    (0, s.jsx)(j.n, {
                        children:
                            !S &&
                            (0, i.EQ)(O)
                                .with(C.LI.SELECT, () =>
                                    (0, s.jsx)(M.Z, {
                                        onConsole: () => Z(y.cd.CONSOLE),
                                        onDesktop: () => Z(y.cd.DESKTOP)
                                    })
                                )
                                .with(C.LI.DESKTOP, () => (0, s.jsx)(B.Z, { quest: n }))
                                .with(C.LI.CONSOLE, () =>
                                    (0, s.jsx)(b.Z, {
                                        quest: n,
                                        taskDetails: r
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, s.jsx)(j.n, {
                        children: (0, s.jsx)(A.y, {
                            quest: n,
                            useReducedMotion: m,
                            isExpanded: p,
                            awaitingConsoleConnections: D,
                            hasMadeProgress: T,
                            isProgressing: N,
                            activeScreen: O,
                            showBackButton: O !== C.LI.SELECT && U.length > 1 && !T && !N && q,
                            onBack: () => Z(null)
                        })
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: a()(k.postEnrollmentBackground, k.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')') }
            })
        ]
    });
}
let P = o.forwardRef(function (e, t) {
    var n;
    let { children: r, className: i, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: x, onCtxMenuOpen: _, onCtxMenuClose: g, onCtxMenuSelect: f, overlayRef: E, quest: h, useReducedMotion: S, taskDetails: T } = e,
        N = o.useCallback(() => {
            (0, m.AH)(h.id, {
                questContent: C.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.ACCEPT_QUEST
            });
        }, [h]),
        v = (null === (n = h.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        j = d && u;
    return (0, s.jsxs)(l.animated.div, {
        'aria-hidden': !j,
        className: a()(i, k.contentExpanded, {
            [k.contentInteractable]: j,
            [k.contentExpandedAccepted]: v
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
            (0, s.jsx)(l.animated.div, {
                style: { opacity: 1 },
                children: v
                    ? (0, s.jsx)(q, {
                          quest: h,
                          taskDetails: T,
                          expansionSpring: x,
                          overlayRef: E,
                          isExpanded: d,
                          useReducedMotion: S,
                          onCtxMenuOpen: _,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: f,
                          containerRef: t
                      })
                    : (0, s.jsx)(Z, {
                          quest: h,
                          taskDetails: T,
                          expansionSpring: x,
                          isInteractable: j,
                          useReducedMotion: S,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: N
                      })
            })
        ]
    });
});
t.Z = P;
