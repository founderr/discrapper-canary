n(47120), n(627341);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(752877),
    l = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(70097),
    m = n(617136),
    x = n(272008),
    f = n(113434),
    g = n(569984),
    h = n(497505),
    C = n(918701),
    v = n(184299),
    j = n(988303),
    _ = n(665430),
    b = n(585500),
    E = n(475595),
    N = n(720293),
    B = n(644646),
    T = n(78826),
    S = n(64141),
    A = n(341907),
    y = n(693900),
    R = n(164495),
    w = n(759853),
    I = n(205511),
    k = n(694802),
    q = n(95985),
    P = n(50476),
    M = n(658590),
    O = n(46140),
    W = n(743294),
    L = n(388032),
    Q = n(748628);
function Z(e) {
    var t;
    let { quest: n, onClick: s, containerClassName: i, imgClassName: l, reducedMotion: c } = e,
        [m, x] = r.useState(!1),
        f = r.useRef(null),
        g = (0, N.z)(N.i.QUEST_BAR_PREVIEW_VIDEO, n),
        h = (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, n),
        C = (0, v.km)((e) => e.getVideoProgressState);
    r.useEffect(() => {
        null != f.current && (c && m && (f.current.currentTime = 0), f.current.play());
    }, [f, m, c]);
    let j = C(n.id),
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null && j === v.iw.COMPLETED,
        b = !_ && (!c || m);
    return (0, o.jsxs)(u.Clickable, {
        className: a()(Q.videoQuestPreviewCont, i),
        onClick: s,
        onMouseEnter: () => {
            c && !m && x(!0);
        },
        onMouseLeave: () => {
            c && m && x(!1);
        },
        children: [
            null != h &&
                (0, o.jsx)('img', {
                    alt: '',
                    src: h.url,
                    className: a()(Q.assetBodyVideoPreviewMedia, l)
                }),
            null != g
                ? (0, o.jsx)(p.Z, {
                      ref: f,
                      autoPlay: !0,
                      poster: null == h ? void 0 : h.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Q.assetBodyVideoPreviewMedia, Q.assetBodyVideoPreviewVideo, { [Q.assetBodyVideoPreviewVisible]: b }),
                      controls: !1,
                      children: (0, o.jsx)('source', {
                          src: g.url,
                          type: g.mimetype
                      })
                  })
                : null,
            (0, o.jsx)('div', {
                className: Q.previewPlayButtonCont,
                children: _
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
function D(e) {
    let { quest: t } = e;
    return (0, o.jsx)(B.Z, {
        className: a()(Q.rewardTile, Q.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: h.jn.QUEST_BAR_V2,
        location: O.dr.QUESTS_BAR
    });
}
function V(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: a, reducedMotion: l, containerRef: d, isExpanded: m, onAcceptQuest: x } = e,
        f = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
        v = r.useMemo(() => (0, E.fh)(t, E.eC.QUEST_BAR_HERO), [t]),
        _ = r.useRef(null),
        { primaryVariant: N } = j.u.useExperiment({ location: O.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        B = (0, b.D)({
            quest: t,
            location: O.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: N === j.P.V2 || (0, M.a)(t)
        });
    r.useEffect(() => {
        null != _.current && (l && m ? (_.current.pause(), (_.current.currentTime = 0)) : !l && m && _.current.play());
    }, [l, m]);
    let S = (0, C.q8)(t) ? L.intl.string(L.t.umdNio) : L.intl.string(L.t.l7E81t);
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
                                (0, o.jsx)(D, { quest: t }),
                                (0, o.jsx)(u.Heading, {
                                    className: Q.title,
                                    variant: 'heading-md/medium',
                                    children: L.intl.format(L.t.EQa7oq, { questName: t.config.messages.questName })
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
                            submitting: f,
                            children: S
                        })
                    ]
                })
            }),
            (0, o.jsxs)(i.animated.div, {
                className: Q.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    (0, o.jsx)(i.animated.div, {
                        className: Q.heroAssetDarken,
                        style: {
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    (0, o.jsx)(i.animated.div, {
                        className: Q.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    v.isAnimated
                        ? (0, o.jsx)(T.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (_.current = e.current),
                                      (0, o.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !l && m,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: Q.heroAsset,
                                          controls: !1,
                                          children: (0, o.jsx)('source', {
                                              src: v.url,
                                              type: null !== (t = v.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, o.jsx)(T.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, o.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: Q.heroAsset,
                                      src: v.url
                                  })
                          }),
                    (0, o.jsx)(i.animated.div, {
                        className: Q.legibilityGradient,
                        style: {
                            opacity: s.to({
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
function H(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: x, onCtxMenuOpen: g, onCtxMenuClose: v, onCtxMenuSelect: j } = e,
        b = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        E = s.percentComplete > 0,
        N = (0, f.z)(n),
        [B, T, M] = (0, f.me)(n, s),
        D = (0, _.pF)({ location: O.dr.QUESTS_BAR }),
        V = r.useRef(null),
        H = (0, f.B6)(n.config.expiresAt),
        U = (0, f._s)({ quest: n }),
        z = (0, C.q8)(n),
        F = r.useCallback(() => {
            (0, A.openVideoQuestModal)(n);
        }, [n]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.animated.div, {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(W.aY, ', ').concat(W.v6, ')'),
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
                                children: L.intl.format(L.t['pX+fmp'], { expirationDate: H })
                            }),
                            (0, o.jsx)(S.r, {
                                onOpen: g,
                                onClose: v,
                                onSelect: j,
                                questContent: h.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, o.jsx)(u.Clickable, {
                                        ...e,
                                        className: Q.submenuWrapper,
                                        'aria-label': L.intl.string(L.t.DEoVWV),
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
                    (0, o.jsx)(w.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: V,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, o.jsx)(q.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: V,
                        isExpanded: !0,
                        taskDetails: s,
                        activeScreen: B
                    }),
                    (0, o.jsx)(y.n, {
                        children:
                            !b &&
                            !(0, C.Gd)(n) &&
                            (0, l.EQ)(B)
                                .with(h.LI.SELECT, () =>
                                    (0, o.jsx)(P.Z, {
                                        onConsole: () => M(O.cd.CONSOLE),
                                        onDesktop: () => M(O.cd.DESKTOP)
                                    })
                                )
                                .with(h.LI.DESKTOP, () => (0, o.jsx)(k.Z, { quest: n }))
                                .with(h.LI.CONSOLE, () =>
                                    (0, o.jsx)(I.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, o.jsxs)(y.n, {
                        children: [
                            z &&
                                (0, o.jsx)(Z, {
                                    quest: n,
                                    onClick: F,
                                    containerClassName: Q.enrolledVideoPreview,
                                    imgClassName: Q.enrolledVideoPreviewImg,
                                    reducedMotion: m
                                }),
                            (0, o.jsx)(R.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: U,
                                hasMadeProgress: E,
                                isProgressing: N,
                                activeScreen: B,
                                showBackButton: B !== h.LI.SELECT && T.length > 1 && !E && !N && D,
                                onBack: () => M(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(W.aY, ', ').concat(W.v6, ')') }
            })
        ]
    });
}
let U = r.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: f, onCtxMenuClose: g, onCtxMenuSelect: v, overlayRef: j, quest: _, useReducedMotion: b, taskDetails: E } = e,
        N = (0, C.q8)(_),
        B = r.useCallback(() => {
            (0, x.AH)(_.id, {
                questContent: h.jn.QUEST_BAR_V2,
                questContentCTA: m.jZ.ACCEPT_QUEST
            }),
                N && (0, A.openVideoQuestModal)(_);
        }, [_, N]),
        T = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        S = d && u;
    return (0, o.jsxs)(i.animated.div, {
        'aria-hidden': !S,
        className: a()(l, Q.contentExpanded, {
            [Q.contentInteractable]: S,
            [Q.contentExpandedAccepted]: T
        }),
        style: {
            transform: (0, i.to)(
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
            s,
            (0, o.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: T
                    ? (0, o.jsx)(H, {
                          quest: _,
                          taskDetails: E,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: d,
                          reducedMotion: b,
                          onCtxMenuOpen: f,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, o.jsx)(V, {
                          quest: _,
                          taskDetails: E,
                          expansionSpring: p,
                          isInteractable: S,
                          reducedMotion: b,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: B
                      })
            })
        ]
    });
});
t.Z = U;
