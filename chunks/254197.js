var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), l = n(920906), i = n(442837), c = n(481060), d = n(810090), u = n(617136), p = n(272008), x = n(113434), m = n(569984), g = n(497505), C = n(918701), f = n(988303), _ = n(644646), h = n(78826), E = n(670638), S = n(330039), T = n(693900), N = n(524824), v = n(164495), A = n(759853), j = n(205511), B = n(95985), b = n(658590), O = n(46140), R = n(689938), I = n(689065);
let y = o.forwardRef(function (e, t) {
    var n;
    let {
            className: r,
            isExpanded: y,
            isExpansionAnimationComplete: M,
            expansionSpring: U,
            onCtxMenuOpen: q,
            onCtxMenuClose: Z,
            onCtxMenuSelect: P,
            quest: k,
            useReducedMotion: L
        } = e, Q = o.useRef(null), w = (0, i.e7)([m.Z], () => m.Z.isEnrolling(k.id), [k]), W = (0, x.B6)(k.config.expiresAt), H = o.useMemo(() => (0, C.nP)(k.config.assets.questBarHero), [k]), D = o.useCallback(() => {
            (0, p.AH)(k.id, {
                questContent: g.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [k]), {primaryVariant: V} = f.u.useExperiment({ location: O.dr.QUESTS_BAR }, { autoTrackExposure: !1 }), z = (null === (n = k.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, G = (0, x.Rf)(k), F = G.percentComplete > 0, X = y && M, Y = o.useMemo(() => (0, C.$J)(k), [k]), K = (0, C.ph)(k), J = (0, C.pG)({
            quest: k,
            useV2Variants: V === f.P.V2 || (0, b.a)(k),
            taskDetails: G
        });
    return (0, s.jsx)('div', {
        'aria-hidden': !X,
        className: a()(r, I.contentExpanded, {
            [I.contentInteractable]: X,
            [I.contentExpandedAccepted]: z
        }),
        children: z ? (0, s.jsxs)('div', {
            className: I.questAcceptedContent,
            ref: t,
            children: [
                (0, s.jsxs)('div', {
                    className: I.questAcceptedHeader,
                    children: [
                        (0, s.jsx)(c.Text, {
                            variant: 'text-xxs/medium',
                            className: a()(I.flex, I.headerText),
                            children: R.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: W })
                        }),
                        (0, s.jsx)(E.r, {
                            onOpen: q,
                            onClose: Z,
                            onSelect: P,
                            questContent: g.jn.QUEST_BAR_V2,
                            quest: k,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: e => (0, s.jsx)(c.Clickable, {
                                ...e,
                                className: I.submenuWrapper,
                                'aria-label': R.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(c.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(I.submenuIcon, I.interactiveNormal)
                                })
                            })
                        })
                    ]
                }),
                (0, s.jsx)('div', { className: I.divider }),
                (0, s.jsx)(A.Z, {
                    progressBarRef: Q,
                    quest: k,
                    isExpanded: y
                }),
                (0, s.jsx)(B.Z, {
                    quest: k,
                    progressBarRef: Q,
                    isExpanded: !0
                }),
                (0, N.r)(k) && (0, s.jsx)(S.Z, { style: { marginTop: 8 } }),
                Y && (0, s.jsx)(j.Z, { quest: k }),
                (0, s.jsx)(T.n, {
                    children: (0, s.jsx)(v.y, {
                        quest: k,
                        useReducedMotion: L,
                        isExpanded: y,
                        hasMadeProgress: F
                    })
                })
            ]
        }) : (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: I.questPromoContent,
                    ref: t,
                    children: [
                        (0, s.jsxs)('div', {
                            className: I.details,
                            children: [
                                (0, s.jsx)(_.Z, {
                                    className: I.rewardTile,
                                    learnMoreStyle: 'text',
                                    quest: k,
                                    questContent: g.jn.QUEST_BAR_V2
                                }),
                                (0, s.jsx)(c.Heading, {
                                    className: I.title,
                                    variant: 'heading-md/medium',
                                    children: R.Z.Messages.QUESTS_TITLE.format({ questName: k.config.messages.questName })
                                }),
                                (0, s.jsx)(c.Text, {
                                    className: I.description,
                                    variant: 'text-xs/normal',
                                    children: J
                                })
                            ]
                        }),
                        (0, s.jsx)(c.Button, {
                            className: I.cta,
                            color: c.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: X ? D : void 0,
                            size: c.Button.Sizes.SMALL,
                            submitting: w,
                            children: R.Z.Messages.QUESTS_ACCEPT_QUEST
                        })
                    ]
                }),
                (0, s.jsxs)(l.animated.div, {
                    className: I.heroAssetWrapper,
                    style: {
                        backdropFilter: U.to([
                            0,
                            1
                        ], [
                            5,
                            0
                        ]).to(e => 'blur('.concat(e, 'px)')),
                        filter: U.to([
                            0,
                            1
                        ], [
                            0.8,
                            1
                        ]).to(e => 'brightness('.concat(e, ')'))
                    },
                    children: [
                        (0, s.jsx)(l.animated.div, {
                            className: I.heroAssetDarken,
                            style: {
                                opacity: U.to([
                                    0,
                                    1
                                ], [
                                    1,
                                    0
                                ])
                            }
                        }),
                        (0, s.jsx)(l.animated.div, {
                            className: I.heroAssetTint,
                            style: {
                                backgroundColor: k.config.colors.primary,
                                opacity: U.to([
                                    0,
                                    1
                                ], [
                                    1,
                                    0
                                ])
                            }
                        }),
                        H ? (0, s.jsx)(h.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroAnimated',
                            children: e => (0, s.jsx)(d.Z, {
                                ref: e,
                                autoPlay: !L,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                className: I.heroAsset,
                                controls: !1,
                                children: (0, s.jsx)('source', {
                                    src: K,
                                    type: (0, C.mN)(K)
                                })
                            })
                        }) : (0, s.jsx)(h.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroStatic',
                            children: e => (0, s.jsx)('img', {
                                ref: e,
                                alt: '',
                                className: I.heroAsset,
                                src: K
                            })
                        }),
                        (0, s.jsx)(l.animated.div, {
                            className: I.legibilityGradient,
                            style: {
                                opacity: U.to({
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
t.Z = y;
