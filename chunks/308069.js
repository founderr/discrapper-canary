var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(481060),
    c = n(617136),
    d = n(497505),
    u = n(918701),
    p = n(302245),
    m = n(685613),
    x = n(670638),
    C = n(341907),
    g = n(303385),
    _ = n(788284),
    f = n(46140),
    h = n(689938),
    E = n(404846);
t.Z = (e) => {
    let { quest: t, expansionSpring: r, onCtxMenuSelect: S, onCtxMenuOpen: T, onCtxMenuClose: v, useReducedMotion: N, isExpanded: j, isExpansionAnimationComplete: A } = e,
        b = s.useCallback(() => {
            (0, C.openDisclosureModal)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        R = s.useCallback(() => {
            (0, u.FE)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK
            });
        }, [t]),
        B = j && A,
        I = (0, p.vI)(t, f.dr.QUESTS_BAR, !0),
        y = (0, o.jsx)(i.Clickable, {
            onClick: R,
            className: a()({ [E.logo]: B }),
            children: (0, o.jsx)(m.Z, {
                quest: t,
                withGameTile: !1
            })
        });
    return (0, o.jsxs)(l.animated.div, {
        className: a()(E.wrapper, {
            [E.interactable]: B,
            [E.rewardHighlightWrapper]: I
        }),
        style: {
            transform: (0, l.to)(
                [
                    r.to({
                        range: [0, 1],
                        output: [I ? 8 : 4, 0]
                    })
                ],
                (e) => 'translateY('.concat(e, 'px')
            )
        },
        children: [
            (0, o.jsx)(l.animated.div, {
                className: E.opaqueExpandedBackground,
                style: {
                    opacity: r.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: r.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 5, ')'))
                }
            }),
            (0, o.jsx)(l.animated.div, {
                className: E.backgroundWrapper,
                style: {
                    opacity: r.to({
                        range: [0, 1],
                        output: [0.5, 0]
                    }),
                    borderBottomLeftRadius: r.to({
                        range: [0, 1],
                        output: [0, 8]
                    }),
                    borderBottomRightRadius: r.to({
                        range: [0, 1],
                        output: [0, 8]
                    })
                },
                children: (0, o.jsx)(_.Z, {
                    className: E.background,
                    animationClassName: E.backgroundAnimation,
                    quest: t,
                    useReducedMotion: N
                })
            }),
            I
                ? (0, o.jsx)(g.Z, {
                      quest: t,
                      expansionSpring: r,
                      isFullyExpanded: B,
                      partnerBranding: y,
                      useReducedMotion: N
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(l.animated.img, {
                              alt: '',
                              className: E.wreathIcon,
                              style: {
                                  opacity: r.to({
                                      range: [0, 1],
                                      output: [1, 0]
                                  })
                              },
                              src: n(858595)
                          }),
                          (0, o.jsx)(l.animated.div, {
                              style: {
                                  opacity: r.to({
                                      range: [0, 1],
                                      output: [1, B ? 1 : 0.8]
                                  }),
                                  transform: (0, l.to)(
                                      [
                                          r.to({
                                              range: [0, 1],
                                              output: [0, -16]
                                          }),
                                          r.to({
                                              range: [0, 1],
                                              output: [0, 8]
                                          })
                                      ],
                                      (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                                  )
                              },
                              children: y
                          }),
                          (0, o.jsx)(l.animated.div, {
                              className: E.questAvailable,
                              style: {
                                  opacity: r.to({
                                      range: [0, 1],
                                      output: [0.7, 0]
                                  }),
                                  transform: (0, l.to)(
                                      [
                                          r.to({
                                              range: [0, 1],
                                              output: [0, -20]
                                          })
                                      ],
                                      (e) => 'translate('.concat(e, 'px')
                                  )
                              },
                              children: (0, o.jsx)(i.Text, {
                                  color: 'always-white',
                                  variant: 'text-xs/medium',
                                  className: E.questAvailableText,
                                  children: h.Z.Messages.QUEST_AVAILABLE
                              })
                          })
                      ]
                  }),
            (0, o.jsxs)(l.animated.div, {
                className: E.promotedBadgeWrapper,
                style: {
                    opacity: r.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, o.jsxs)(i.Clickable, {
                        className: E.promotedBadge,
                        onClick: b,
                        children: [
                            (0, o.jsx)(i.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: h.Z.Messages.QUESTS_PROMOTED
                            }),
                            (0, o.jsx)(i.CircleQuestionIcon, {
                                color: i.tokens.colors.WHITE,
                                className: E.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, o.jsx)(x.r, {
                        onOpen: T,
                        onClose: v,
                        onSelect: S,
                        questContent: d.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, o.jsx)(i.Clickable, {
                                ...e,
                                className: E.submenuWrapper,
                                'aria-label': h.Z.Messages.ACTIONS,
                                children: (0, o.jsx)(i.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(E.submenuIcon, E.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
