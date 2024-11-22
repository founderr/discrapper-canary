var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(100621),
    l = n(481060),
    c = n(617136),
    d = n(497505),
    u = n(918701),
    p = n(302245),
    m = n(685613),
    x = n(670638),
    f = n(341907),
    g = n(303385),
    h = n(46140),
    C = n(388032),
    v = n(404846);
t.Z = (e) => {
    let { quest: t, expansionSpring: s, onCtxMenuSelect: j, onCtxMenuOpen: _, onCtxMenuClose: E, useReducedMotion: b, isExpanded: N, isExpansionAnimationComplete: B } = e,
        S = r.useCallback(() => {
            (0, f.openDisclosureModal)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        T = r.useCallback(() => {
            (0, u.FE)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK
            });
        }, [t]),
        A = N && B,
        y = (0, p.vI)(t, h.dr.QUESTS_BAR, !0),
        R = (0, o.jsx)(l.Clickable, {
            onClick: T,
            className: a()(v.clickable, { [v.logo]: A }),
            children: (0, o.jsx)(m.ZP, {
                quest: t,
                withGameTile: !1
            })
        });
    return (0, o.jsxs)(i.animated.div, {
        className: a()(v.wrapper, {
            [v.interactable]: A,
            [v.rewardHighlightWrapper]: y
        }),
        style: {
            transform: (0, i.to)(
                [
                    s.to({
                        range: [0, 1],
                        output: [y ? 8 : 4, 0]
                    })
                ],
                (e) => 'translateY('.concat(e, 'px')
            )
        },
        children: [
            (0, o.jsx)(i.animated.div, {
                className: v.opaqueExpandedBackground,
                style: {
                    opacity: s.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: s.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 4, ')'))
                }
            }),
            y
                ? (0, o.jsx)(g.Z, {
                      quest: t,
                      expansionSpring: s,
                      isFullyExpanded: A,
                      partnerBranding: R,
                      useReducedMotion: b
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(i.animated.img, {
                              alt: '',
                              className: v.wreathIcon,
                              style: {
                                  opacity: s.to({
                                      range: [0, 1],
                                      output: [1, 0]
                                  })
                              },
                              src: n(858595)
                          }),
                          (0, o.jsx)(i.animated.div, {
                              style: {
                                  transform: (0, i.to)(
                                      [
                                          s.to({
                                              range: [0, 1],
                                              output: [0, -16]
                                          }),
                                          s.to({
                                              range: [0, 1],
                                              output: [0, 8]
                                          })
                                      ],
                                      (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                                  )
                              },
                              children: R
                          }),
                          (0, o.jsx)(i.animated.div, {
                              className: v.questAvailable,
                              style: {
                                  opacity: s.to({
                                      range: [0, 1],
                                      output: [0.7, 0]
                                  }),
                                  transform: (0, i.to)(
                                      [
                                          s.to({
                                              range: [0, 1],
                                              output: [0, -20]
                                          })
                                      ],
                                      (e) => 'translate('.concat(e, 'px')
                                  )
                              },
                              children: (0, o.jsx)(l.Text, {
                                  color: 'always-white',
                                  variant: 'text-xs/medium',
                                  className: v.questAvailableText,
                                  children: C.intl.string(C.t.g8zcER)
                              })
                          })
                      ]
                  }),
            (0, o.jsxs)(i.animated.div, {
                className: v.promotedBadgeWrapper,
                style: {
                    opacity: s.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, o.jsxs)(l.Clickable, {
                        className: v.promotedBadge,
                        onClick: S,
                        children: [
                            (0, o.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: C.intl.string(C.t.o6FLcH)
                            }),
                            (0, o.jsx)(l.CircleQuestionIcon, {
                                color: l.tokens.colors.WHITE,
                                className: v.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, o.jsx)(x.r, {
                        onOpen: _,
                        onClose: E,
                        onSelect: j,
                        questContent: d.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, o.jsx)(l.Clickable, {
                                ...e,
                                className: v.submenuWrapper,
                                'aria-label': C.intl.string(C.t.DEoVWV),
                                children: (0, o.jsx)(l.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(v.submenuIcon, v.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
