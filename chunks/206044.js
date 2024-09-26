var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(526629),
    u = n(722770),
    c = n(442837),
    d = n(846519),
    _ = n(481060),
    E = n(393238),
    f = n(607070),
    h = n(70097),
    p = n(210887),
    m = n(572004),
    I = n(617136),
    T = n(113434),
    g = n(497505),
    S = n(918701),
    A = n(566078),
    v = n(685613),
    N = n(611855),
    O = n(644646),
    R = n(670638),
    C = n(87894),
    y = n(46140),
    L = n(689938),
    b = n(128175);
let D = 1000,
    M = (0, l.animated)(_.ChevronSmallDownIcon),
    P = (0, l.animated)(h.Z),
    U = (e) => {
        let { quest: t, location: n, questContentPosition: r, ...o } = e,
            [s, l] = a.useState(!1),
            u = a.useRef(new d.V7());
        if (
            (a.useEffect(() => {
                let e = u.current;
                return function () {
                    e.stop();
                };
            }, []),
            (0, S.zK)(t, y.S7.FRACTIONS_QUEST))
        )
            return null;
        let c = () => {
            (0, I._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: I.jZ.COPY_QUEST_URL,
                questContentPosition: r
            }),
                (0, m.JG)((0, S.Rs)(t.id)),
                l(!0),
                u.current.start(D, () => l(!1));
        };
        return (0, i.jsx)(_.Tooltip, {
            forceOpen: s,
            shouldShow: s,
            color: _.Tooltip.Colors.GREEN,
            text: L.Z.Messages.COPY_SUCCESS_1,
            children: () =>
                (0, i.jsx)(_.Button, {
                    ...o,
                    className: b.shareButton,
                    color: _.Button.Colors.PRIMARY,
                    size: _.Button.Sizes.SMALL,
                    onClick: c,
                    children: L.Z.Messages.QUESTS_SHARE_QUEST
                })
        });
    },
    w = (e) => {
        var t;
        let { isFocused: n, isQuestExpired: r, quest: o, location: d, size: h, expansionSpring: m, isAnimating: D, isExpanded: w, isInConcurrentQuestExperiment: x, contentPosition: G, toggleExpanded: k } = e,
            { ref: B, height: F } = (0, E.Z)(),
            { ref: Z, width: V, scrollWidth: H } = (0, E.Z)(),
            Y = (0, c.e7)([p.Z], () => p.Z.getState().theme),
            j = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
            W = (0, S.j8)(o),
            K = a.useMemo(() => (0, S.nP)(W), [W]),
            z = a.useRef(null),
            q = (0, C.uq)(d),
            Q = d === g.jn.QUESTS_EMBED,
            X = (0, T.t5)(o, y.dr.QUESTS_CARD, d),
            $ = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            J = (0, T.B6)(o.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            ee = (0, T.B6)(A.r.build(o.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    k(),
                    (0, I._3)({
                        questId: o.id,
                        questContent: d,
                        questContentCTA: w ? I.jZ.COLLAPSE : I.jZ.EXPAND,
                        questContentPosition: G
                    });
            },
            en = () => null != V && null != H && V < H;
        return (
            a.useEffect(() => {
                K && null != z.current && (n ? z.current.play() : !n && (z.current.pause(), (z.current.currentTime = 0)));
            }, [n, K]),
            (0, i.jsxs)('div', {
                className: s()(b.outerContainer, {
                    [b.outerContainerGiftInventory]: q,
                    [b.outerContainerEmbed]: Q,
                    [b.outerContainerXs]: 'xs' === h
                }),
                'aria-label': L.Z.Messages.EXPAND,
                style: { height: q ? F : void 0 },
                children: [
                    (0, i.jsx)(P, {
                        style: {
                            opacity: m.to({
                                range: [0, 1],
                                output: [0.25, 1]
                            })
                        },
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        className: b.questSplash,
                        controls: !1,
                        poster: W,
                        ref: z,
                        children:
                            !j &&
                            K &&
                            (0, i.jsx)('source', {
                                src: W,
                                type: (0, S.mN)(W)
                            })
                    }),
                    (0, i.jsxs)('div', {
                        className: b.header,
                        'aria-expanded': w,
                        children: [
                            (0, i.jsxs)(l.animated.div, {
                                className: s()(b.headerContent, { [b.headerContentEmbed]: Q }),
                                style: {
                                    y: q
                                        ? m.to({
                                              range: [0, 1],
                                              output: [C.DJ, 0]
                                          })
                                        : void 0
                                },
                                children: [
                                    q &&
                                        (0, i.jsx)(l.animated.div, {
                                            className: b.headerCollapsedContent,
                                            style: {
                                                opacity: m.to({
                                                    range: [0, 1],
                                                    output: [1, 0]
                                                }),
                                                visibility: D || !w ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !D && w,
                                            children: (0, i.jsxs)(_.ClickableContainer, {
                                                'aria-label': L.Z.Messages.EXPAND,
                                                onClick: et,
                                                className: b.headerCollapsedClickableContainer,
                                                children: [
                                                    (0, i.jsx)('div', {
                                                        className: b.headerCollapsedContentRewardWrapper,
                                                        children: (0, i.jsx)(O.Z, {
                                                            quest: o,
                                                            questContent: d,
                                                            className: b.headerCollapsedRewardTile,
                                                            location: y.dr.QUESTS_CARD
                                                        })
                                                    }),
                                                    (0, i.jsxs)('div', {
                                                        className: b.headerCollapsedContentCopyWrapper,
                                                        children: [
                                                            (0, i.jsxs)('div', {
                                                                className: b.headerCollapsedContentCopyLogos,
                                                                children: [
                                                                    (0, i.jsx)(v.Z, {
                                                                        className: b.partnerBranding,
                                                                        gameTileSize: v.f.MEDIUM,
                                                                        quest: o,
                                                                        theme: Y
                                                                    }),
                                                                    (0, i.jsx)(N.Z, { color: 'always-white' })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(_.Text, {
                                                                variant: 'text-xs/medium',
                                                                children: X
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                    (0, i.jsxs)(l.animated.div, {
                                        ref: (e) => {
                                            B.current = e;
                                        },
                                        className: s()(b.headerExpandedContent, {
                                            [b.outerContainerGiftInventory]: q,
                                            [b.outerContainerEmbed]: Q
                                        }),
                                        style: {
                                            opacity: m.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            }),
                                            visibility: D || w ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !D && !w,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: b.headerExpandedWrapper,
                                                children: [
                                                    (0, i.jsxs)('div', {
                                                        className: b.iconLogotypeContainer,
                                                        children: [
                                                            (0, i.jsx)(v.Z, {
                                                                className: b.partnerBranding,
                                                                gameTileSize: v.f.MEDIUM,
                                                                quest: o,
                                                                theme: Y
                                                            }),
                                                            Q ? null : (0, i.jsx)(N.Z, { color: 'always-white' })
                                                        ]
                                                    }),
                                                    (0, i.jsxs)('div', {
                                                        className: b.questInfo,
                                                        children: [
                                                            (0, i.jsx)(_.Tooltip, {
                                                                text: o.config.messages.questName,
                                                                shouldShow: en(),
                                                                children: (e) =>
                                                                    (0, i.jsx)(_.Heading, {
                                                                        ref: Z,
                                                                        variant: 'lg' === h ? 'heading-xxl/bold' : 'sm' === h ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                        className: b.heading,
                                                                        ...e,
                                                                        children: L.Z.Messages.QUEST.format({ questName: o.config.messages.questName })
                                                                    })
                                                            }),
                                                            (0, i.jsx)(_.Text, {
                                                                variant: 'text-xs/normal',
                                                                children: $ ? L.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: ee }) : r ? L.Z.Messages.QUESTS_EXPIRED_ON.format({ expirationDate: J }) : L.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: J })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            !r &&
                                                q &&
                                                (0, i.jsx)(U, {
                                                    quest: o,
                                                    location: d,
                                                    questContentPosition: G
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsxs)(l.animated.div, {
                                className: b.iconsContainer,
                                style: {
                                    top: q
                                        ? m.to({
                                              range: [0, 1],
                                              output: [C.DJ / 2 - C.Z$ / 2, C.jc]
                                          })
                                        : C.jc
                                },
                                children: [
                                    (0, i.jsx)(R.r, {
                                        questContent: d,
                                        quest: o,
                                        questContentPosition: G,
                                        shouldShowDisclosure: !0,
                                        hideLearnMore: q,
                                        showShareLink: !r && Q,
                                        children: (e) =>
                                            (0, i.jsx)(l.animated.div, {
                                                style: {
                                                    opacity: m,
                                                    visibility: D || w ? 'inherit' : 'hidden'
                                                },
                                                'aria-hidden': !D && !w,
                                                children: (0, i.jsx)(_.Clickable, {
                                                    ...e,
                                                    className: b.iconWrapper,
                                                    'aria-label': L.Z.Messages.ACTIONS,
                                                    children: (0, i.jsx)(_.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: u.Z.WHITE
                                                    })
                                                })
                                            })
                                    }),
                                    x &&
                                        !(0, C.W_)(d) &&
                                        (0, i.jsx)(_.Clickable, {
                                            onClick: et,
                                            className: b.iconWrapper,
                                            'aria-label': w ? L.Z.Messages.COLLAPSE : L.Z.Messages.EXPAND,
                                            children: (0, i.jsx)(M, {
                                                style: {
                                                    rotate: m.to({
                                                        range: [0, 1],
                                                        output: [0, 180]
                                                    })
                                                },
                                                color: u.Z.WHITE
                                            })
                                        })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    };
t.Z = w;
