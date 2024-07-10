var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(338545), l = n(754700), c = n(442837), d = n(481060), u = n(810090), p = n(617136), x = n(272008), m = n(113434), g = n(569984), C = n(497505), f = n(918701), _ = n(988303), h = n(644646), E = n(78826), T = n(670638), S = n(330039), N = n(693900), A = n(524824), v = n(164495), j = n(759853), B = n(205511), b = n(569379), O = n(95985), R = n(658590), I = n(46140), y = n(689938), U = n(689065);
let M = o.forwardRef(function (e, t) {
    var n;
    let {
            className: r,
            isExpanded: M,
            isExpansionAnimationComplete: Z,
            expansionSpring: q,
            onCtxMenuOpen: P,
            onCtxMenuClose: k,
            onCtxMenuSelect: L,
            quest: Q,
            useReducedMotion: w
        } = e, W = o.useRef(null), H = (0, c.e7)([g.Z], () => g.Z.isEnrolling(Q.id), [Q]), D = (0, m.B6)(Q.config.expiresAt), V = o.useMemo(() => (0, f.nP)(Q.config.assets.questBarHero), [Q]), z = o.useCallback(() => {
            (0, x.AH)(Q.id, {
                questContent: C.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.ACCEPT_QUEST
            });
        }, [Q]), {primaryVariant: G} = _.u.useExperiment({ location: I.dr.QUESTS_BAR }, { autoTrackExposure: !1 }), F = (null === (n = Q.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = M && Z, {
            questSupportsConsole: Y,
            isProgressingOnConsole: K
        } = o.useMemo(() => ({
            questSupportsConsole: (0, f.$J)(Q),
            isProgressingOnConsole: (0, f.Bz)(Q)
        }), [Q]), J = (0, b.pe)(Q), $ = (0, m.Rf)(Q), ee = $.percentComplete > 0, et = !K && !l.T.CONSOLE.has($.taskType) && (J || I.RE.has($.taskType)), en = Y && !et, es = (0, f.ph)(Q), eo = (0, f.pG)({
            quest: Q,
            useV2Variants: G === _.P.V2 || (0, R.a)(Q),
            taskDetails: $
        });
    return (0, s.jsx)('div', {
        'aria-hidden': !X,
        className: a()(r, U.contentExpanded, {
            [U.contentInteractable]: X,
            [U.contentExpandedAccepted]: F
        }),
        children: F ? (0, s.jsxs)('div', {
            className: U.questAcceptedContent,
            ref: t,
            children: [
                (0, s.jsxs)('div', {
                    className: U.questAcceptedHeader,
                    children: [
                        (0, s.jsx)(d.Text, {
                            variant: 'text-xxs/medium',
                            className: a()(U.flex, U.headerText),
                            children: y.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: D })
                        }),
                        (0, s.jsx)(T.r, {
                            onOpen: P,
                            onClose: k,
                            onSelect: L,
                            questContent: C.jn.QUEST_BAR_V2,
                            quest: Q,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: e => (0, s.jsx)(d.Clickable, {
                                ...e,
                                className: U.submenuWrapper,
                                'aria-label': y.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(U.submenuIcon, U.interactiveNormal)
                                })
                            })
                        })
                    ]
                }),
                (0, s.jsx)('div', { className: U.divider }),
                (0, s.jsx)(j.Z, {
                    progressBarRef: W,
                    quest: Q,
                    isExpanded: M
                }),
                (0, s.jsx)(O.Z, {
                    quest: Q,
                    progressBarRef: W,
                    isExpanded: !0,
                    shouldShowConsoleTaskDetails: en
                }),
                (0, A.r)(Q) && (0, s.jsx)(S.Z, { style: { marginTop: 8 } }),
                (0, s.jsx)(N.n, { children: en && (0, s.jsx)(B.Z, { quest: Q }) }),
                (0, s.jsx)(N.n, {
                    children: (0, s.jsx)(v.y, {
                        quest: Q,
                        useReducedMotion: w,
                        isExpanded: M,
                        hasMadeProgress: ee
                    })
                })
            ]
        }) : (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: U.questPromoContent,
                    ref: t,
                    children: [
                        (0, s.jsxs)('div', {
                            className: U.details,
                            children: [
                                (0, s.jsx)(h.Z, {
                                    className: U.rewardTile,
                                    learnMoreStyle: 'text',
                                    quest: Q,
                                    questContent: C.jn.QUEST_BAR_V2
                                }),
                                (0, s.jsx)(d.Heading, {
                                    className: U.title,
                                    variant: 'heading-md/medium',
                                    children: y.Z.Messages.QUESTS_TITLE.format({ questName: Q.config.messages.questName })
                                }),
                                (0, s.jsx)(d.Text, {
                                    className: U.description,
                                    variant: 'text-xs/normal',
                                    children: eo
                                })
                            ]
                        }),
                        (0, s.jsx)(d.Button, {
                            className: U.cta,
                            color: d.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: X ? z : void 0,
                            size: d.Button.Sizes.SMALL,
                            submitting: H,
                            children: y.Z.Messages.QUESTS_ACCEPT_QUEST
                        })
                    ]
                }),
                (0, s.jsxs)(i.animated.div, {
                    className: U.heroAssetWrapper,
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
                            className: U.heroAssetDarken,
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
                            className: U.heroAssetTint,
                            style: {
                                backgroundColor: Q.config.colors.primary,
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
                                autoPlay: !w,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                className: U.heroAsset,
                                controls: !1,
                                children: (0, s.jsx)('source', {
                                    src: es,
                                    type: (0, f.mN)(es)
                                })
                            })
                        }) : (0, s.jsx)(E.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroStatic',
                            children: e => (0, s.jsx)('img', {
                                ref: e,
                                alt: '',
                                className: U.heroAsset,
                                src: es
                            })
                        }),
                        (0, s.jsx)(i.animated.div, {
                            className: U.legibilityGradient,
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
t.Z = M;
