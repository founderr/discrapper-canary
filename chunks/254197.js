var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(338545), l = n(754700), c = n(442837), d = n(481060), u = n(810090), p = n(617136), x = n(272008), m = n(113434), g = n(569984), C = n(497505), f = n(918701), _ = n(988303), h = n(644646), E = n(78826), T = n(670638), S = n(330039), N = n(693900), A = n(524824), v = n(164495), j = n(759853), B = n(205511), b = n(95985), O = n(658590), R = n(46140), I = n(689938), y = n(689065);
let U = o.forwardRef(function (e, t) {
    var n;
    let {
            className: r,
            isExpanded: U,
            isExpansionAnimationComplete: M,
            expansionSpring: q,
            onCtxMenuOpen: Z,
            onCtxMenuClose: P,
            onCtxMenuSelect: k,
            quest: L,
            useReducedMotion: Q,
            taskDetails: w
        } = e, W = o.useRef(null), H = (0, c.e7)([g.Z], () => g.Z.isEnrolling(L.id), [L]), D = (0, m.B6)(L.config.expiresAt), V = o.useMemo(() => (0, f.nP)(L.config.assets.questBarHero), [L]), z = o.useCallback(() => {
            (0, x.AH)(L.id, {
                questContent: C.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.ACCEPT_QUEST
            });
        }, [L]), {primaryVariant: G} = _.u.useExperiment({ location: R.dr.QUESTS_BAR }, { autoTrackExposure: !1 }), F = (null === (n = L.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = U && M, {
            questSupportsConsole: Y,
            isProgressingOnConsole: K
        } = o.useMemo(() => ({
            questSupportsConsole: (0, f.$J)(L),
            isProgressingOnConsole: (0, f.Bz)(L)
        }), [L]), J = (0, m.pe)(L), $ = w.percentComplete > 0, ee = !K && !l.T.CONSOLE.has(w.taskType) && (J || l.T.DESKTOP.has(w.taskType)), et = (0, f.ph)(L), en = (0, f.pG)({
            quest: L,
            useV2Variants: G === _.P.V2 || (0, O.a)(L),
            taskDetails: w
        });
    return (0, s.jsx)('div', {
        'aria-hidden': !X,
        className: a()(r, y.contentExpanded, {
            [y.contentInteractable]: X,
            [y.contentExpandedAccepted]: F
        }),
        children: F ? (0, s.jsxs)('div', {
            className: y.questAcceptedContent,
            ref: t,
            children: [
                (0, s.jsxs)('div', {
                    className: y.questAcceptedHeader,
                    children: [
                        (0, s.jsx)(d.Text, {
                            variant: 'text-xxs/medium',
                            className: a()(y.flex, y.headerText),
                            children: I.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: D })
                        }),
                        (0, s.jsx)(T.r, {
                            onOpen: Z,
                            onClose: P,
                            onSelect: k,
                            questContent: C.jn.QUEST_BAR_V2,
                            quest: L,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: e => (0, s.jsx)(d.Clickable, {
                                ...e,
                                className: y.submenuWrapper,
                                'aria-label': I.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(y.submenuIcon, y.interactiveNormal)
                                })
                            })
                        })
                    ]
                }),
                (0, s.jsx)('div', { className: y.divider }),
                (0, s.jsx)(j.Z, {
                    progressBarRef: W,
                    quest: L,
                    isExpanded: U
                }),
                (0, s.jsx)(b.Z, {
                    quest: L,
                    progressBarRef: W,
                    isExpanded: !0,
                    taskDetails: w
                }),
                (0, A.r)(L) && (0, s.jsx)(S.Z, { style: { marginTop: 8 } }),
                (0, s.jsx)(N.n, {
                    children: Y && !ee && (0, s.jsx)(B.Z, {
                        quest: L,
                        taskDetails: w
                    })
                }),
                (0, s.jsx)(N.n, {
                    children: (0, s.jsx)(v.y, {
                        quest: L,
                        useReducedMotion: Q,
                        isExpanded: U,
                        hasMadeProgress: $
                    })
                })
            ]
        }) : (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: y.questPromoContent,
                    ref: t,
                    children: [
                        (0, s.jsxs)('div', {
                            className: y.details,
                            children: [
                                (0, s.jsx)(h.Z, {
                                    className: y.rewardTile,
                                    learnMoreStyle: 'text',
                                    quest: L,
                                    questContent: C.jn.QUEST_BAR_V2
                                }),
                                (0, s.jsx)(d.Heading, {
                                    className: y.title,
                                    variant: 'heading-md/medium',
                                    children: I.Z.Messages.QUESTS_TITLE.format({ questName: L.config.messages.questName })
                                }),
                                (0, s.jsx)(d.Text, {
                                    className: y.description,
                                    variant: 'text-xs/normal',
                                    children: en
                                })
                            ]
                        }),
                        (0, s.jsx)(d.Button, {
                            className: y.cta,
                            color: d.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: X ? z : void 0,
                            size: d.Button.Sizes.SMALL,
                            submitting: H,
                            children: I.Z.Messages.QUESTS_ACCEPT_QUEST
                        })
                    ]
                }),
                (0, s.jsxs)(i.animated.div, {
                    className: y.heroAssetWrapper,
                    style: {
                        backdropFilter: q.to([
                            0,
                            1
                        ], [
                            5,
                            0
                        ]).to(e => 'blur('.concat(e, 'px)')),
                        filter: q.to([
                            0,
                            1
                        ], [
                            0.8,
                            1
                        ]).to(e => 'brightness('.concat(e, ')'))
                    },
                    children: [
                        (0, s.jsx)(i.animated.div, {
                            className: y.heroAssetDarken,
                            style: {
                                opacity: q.to([
                                    0,
                                    1
                                ], [
                                    1,
                                    0
                                ])
                            }
                        }),
                        (0, s.jsx)(i.animated.div, {
                            className: y.heroAssetTint,
                            style: {
                                backgroundColor: L.config.colors.primary,
                                opacity: q.to([
                                    0,
                                    1
                                ], [
                                    1,
                                    0
                                ])
                            }
                        }),
                        V ? (0, s.jsx)(E.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroAnimated',
                            children: e => (0, s.jsx)(u.Z, {
                                ref: e,
                                autoPlay: !Q,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                className: y.heroAsset,
                                controls: !1,
                                children: (0, s.jsx)('source', {
                                    src: et,
                                    type: (0, f.mN)(et)
                                })
                            })
                        }) : (0, s.jsx)(E.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroStatic',
                            children: e => (0, s.jsx)('img', {
                                ref: e,
                                alt: '',
                                className: y.heroAsset,
                                src: et
                            })
                        }),
                        (0, s.jsx)(i.animated.div, {
                            className: y.legibilityGradient,
                            style: {
                                opacity: q.to({
                                    range: [
                                        0,
                                        1
                                    ],
                                    output: [
                                        0,
                                        1
                                    ]
                                })
                            }
                        })
                    ]
                })
            ]
        })
    });
});
t.Z = U;
