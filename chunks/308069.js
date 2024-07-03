var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), l = n(920906), i = n(481060), c = n(617136), d = n(497505), u = n(918701), p = n(685613), x = n(670638), m = n(341907), g = n(898170), C = n(689938), f = n(560594);
t.Z = e => {
    let {
            quest: t,
            expansionSpring: r,
            onCtxMenuSelect: _,
            onCtxMenuOpen: h,
            onCtxMenuClose: E,
            useReducedMotion: S,
            isExpanded: T,
            isExpansionAnimationComplete: N
        } = e, v = o.useCallback(() => {
            (0, m.az)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]), A = o.useCallback(() => {
            (0, u.FE)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK
            });
        }, [t]), j = T && N;
    return (0, s.jsxs)(l.animated.div, {
        className: a()(f.wrapper, { [f.interactable]: j }),
        style: {
            margin: r.to({
                range: [
                    0,
                    1
                ],
                output: [
                    0,
                    8
                ]
            }),
            borderBottomLeftRadius: r.to({
                range: [
                    0,
                    1
                ],
                output: [
                    0,
                    8
                ]
            }),
            borderBottomRightRadius: r.to({
                range: [
                    0,
                    1
                ],
                output: [
                    0,
                    8
                ]
            }),
            paddingLeft: r.to({
                range: [
                    0,
                    1
                ],
                output: [
                    12,
                    8
                ]
            }),
            paddingRight: r.to({
                range: [
                    0,
                    1
                ],
                output: [
                    12,
                    8
                ]
            }),
            paddingTop: r.to({
                range: [
                    0,
                    1
                ],
                output: [
                    8,
                    4
                ]
            }),
            paddingBottom: r.to({
                range: [
                    0,
                    1
                ],
                output: [
                    8,
                    4
                ]
            }),
            backdropFilter: r.to([
                0,
                1
            ], [
                0,
                1
            ]).to(e => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 5, ')'))
        },
        children: [
            (0, s.jsx)(l.animated.div, {
                className: f.backgroundWrapper,
                style: {
                    opacity: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0.5,
                            0
                        ]
                    }),
                    borderBottomLeftRadius: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0,
                            8
                        ]
                    }),
                    borderBottomRightRadius: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0,
                            8
                        ]
                    })
                },
                children: (0, s.jsx)(g.Z, {
                    className: f.background,
                    animationClassName: f.backgroundAnimation,
                    quest: t,
                    useReducedMotion: S
                })
            }),
            (0, s.jsx)(l.animated.img, {
                alt: '',
                className: f.wreathIcon,
                style: {
                    opacity: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            1,
                            0
                        ]
                    })
                },
                src: n(858595)
            }),
            (0, s.jsx)(l.animated.div, {
                style: {
                    opacity: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            1,
                            j ? 1 : 0.8
                        ]
                    }),
                    x: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0,
                            -24
                        ]
                    })
                },
                children: (0, s.jsx)(i.Clickable, {
                    onClick: A,
                    className: a()({ [f.logo]: j }),
                    children: (0, s.jsx)(p.Z, {
                        quest: t,
                        withGameTile: !1
                    })
                })
            }),
            (0, s.jsx)(l.animated.div, {
                className: f.questAvailable,
                style: {
                    opacity: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0.7,
                            0
                        ]
                    }),
                    x: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0,
                            -20
                        ]
                    })
                },
                children: (0, s.jsx)(i.Text, {
                    color: 'always-white',
                    variant: 'text-xs/medium',
                    className: f.questAvailableText,
                    children: C.Z.Messages.QUEST_AVAILABLE
                })
            }),
            (0, s.jsxs)(l.animated.div, {
                className: f.promotedBadgeWrapper,
                style: {
                    opacity: r.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0,
                            1
                        ]
                    })
                },
                children: [
                    (0, s.jsxs)(i.Clickable, {
                        className: f.promotedBadge,
                        onClick: v,
                        children: [
                            (0, s.jsx)(i.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: C.Z.Messages.QUESTS_PROMOTED
                            }),
                            (0, s.jsx)(i.CircleQuestionIcon, {
                                color: i.tokens.colors.WHITE,
                                className: f.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, s.jsx)(x.r, {
                        onOpen: h,
                        onClose: E,
                        onSelect: _,
                        questContent: d.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: e => (0, s.jsx)(i.Clickable, {
                            ...e,
                            className: f.submenuWrapper,
                            'aria-label': C.Z.Messages.ACTIONS,
                            children: (0, s.jsx)(i.MoreHorizontalIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(f.submenuIcon, f.white)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
