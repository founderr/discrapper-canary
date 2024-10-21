n(47120);
var s = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    r = n(100621),
    o = n(722770),
    u = n(442837),
    d = n(846519),
    c = n(481060),
    E = n(393238),
    m = n(607070),
    C = n(70097),
    x = n(210887),
    _ = n(572004),
    T = n(617136),
    S = n(113434),
    h = n(497505),
    g = n(918701),
    p = n(475595),
    j = n(566078),
    N = n(685613),
    f = n(611855),
    v = n(644646),
    A = n(670638),
    M = n(87894),
    R = n(46140),
    I = n(689938),
    q = n(128175);
let Z = (0, r.animated)(c.ChevronSmallDownIcon),
    U = (0, r.animated)(C.Z),
    L = (e) => {
        let { quest: t, location: n, questContentPosition: i, ...l } = e,
            [r, o] = a.useState(!1),
            u = a.useRef(new d.V7());
        a.useEffect(() => {
            let e = u.current;
            return function () {
                e.stop();
            };
        }, []);
        let E = () => {
            (0, T._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: T.jZ.COPY_QUEST_URL,
                questContentPosition: i
            }),
                (0, _.JG)((0, g.Rs)(t.id)),
                o(!0),
                u.current.start(1000, () => o(!1));
        };
        return (0, s.jsx)(c.Tooltip, {
            forceOpen: r,
            shouldShow: r,
            color: c.Tooltip.Colors.GREEN,
            text: I.Z.Messages.COPY_SUCCESS_1,
            children: () =>
                (0, s.jsx)(c.Button, {
                    ...l,
                    className: q.shareButton,
                    color: c.Button.Colors.PRIMARY,
                    size: c.Button.Sizes.SMALL,
                    onClick: E,
                    children: I.Z.Messages.QUESTS_SHARE_QUEST
                })
        });
    };
t.Z = (e) => {
    var t, n;
    let { isFocused: i, isQuestExpired: d, quest: C, location: _, size: g, expansionSpring: b, isAnimating: D, isExpanded: O, isInConcurrentQuestExperiment: Q, contentPosition: B, toggleExpanded: y } = e,
        { ref: P, height: w } = (0, E.Z)(),
        { ref: H, width: k, scrollWidth: W } = (0, E.Z)(),
        G = (0, u.e7)([x.Z], () => x.Z.getState().theme),
        z = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        V = a.useMemo(() => (0, p.fh)(C, p.Bd.HERO), [C]),
        F = a.useRef(null),
        Y = (0, M.uq)(_),
        X = _ === h.jn.QUESTS_EMBED,
        K = (0, S.t5)(C, R.dr.QUESTS_CARD, _),
        J = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        $ = (0, S.B6)(C.config.expiresAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        ee = (0, S.B6)(j.r.build(C.config).rewardsExpireAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        et = (e) => {
            e.stopPropagation(),
                e.currentTarget.blur(),
                y(),
                (0, T._3)({
                    questId: C.id,
                    questContent: _,
                    questContentCTA: O ? T.jZ.COLLAPSE : T.jZ.EXPAND,
                    questContentPosition: B
                });
        };
    return (
        a.useEffect(() => {
            V.isAnimated && null != F.current && (i ? F.current.play() : !i && (F.current.pause(), (F.current.currentTime = 0)));
        }, [i, V]),
        (0, s.jsxs)('div', {
            className: l()(q.outerContainer, {
                [q.outerContainerGiftInventory]: Y,
                [q.outerContainerEmbed]: X,
                [q.outerContainerXs]: 'xs' === g
            }),
            'aria-label': I.Z.Messages.EXPAND,
            style: { height: Y ? w : void 0 },
            children: [
                (0, s.jsx)(U, {
                    style: {
                        opacity: b.to({
                            range: [0, 1],
                            output: [0.25, 1]
                        })
                    },
                    autoPlay: !1,
                    loop: !1,
                    muted: !0,
                    playsInline: !0,
                    className: q.questSplash,
                    controls: !1,
                    poster: V.url,
                    ref: F,
                    children:
                        !z &&
                        V.isAnimated &&
                        (0, s.jsx)('source', {
                            src: V.url,
                            type: null !== (n = V.mimetype) && void 0 !== n ? n : void 0
                        })
                }),
                (0, s.jsxs)('div', {
                    className: q.header,
                    'aria-expanded': O,
                    children: [
                        (0, s.jsxs)(r.animated.div, {
                            className: l()(q.headerContent, { [q.headerContentEmbed]: X }),
                            style: {
                                y: Y
                                    ? b.to({
                                          range: [0, 1],
                                          output: [M.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                Y &&
                                    (0, s.jsx)(r.animated.div, {
                                        className: q.headerCollapsedContent,
                                        style: {
                                            opacity: b.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: D || !O ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !D && O,
                                        children: (0, s.jsxs)(c.ClickableContainer, {
                                            'aria-label': I.Z.Messages.EXPAND,
                                            onClick: et,
                                            className: q.headerCollapsedClickableContainer,
                                            children: [
                                                (0, s.jsx)('div', {
                                                    className: q.headerCollapsedContentRewardWrapper,
                                                    children: (0, s.jsx)(v.Z, {
                                                        quest: C,
                                                        questContent: _,
                                                        className: q.headerCollapsedRewardTile,
                                                        location: R.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, s.jsxs)('div', {
                                                    className: q.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, s.jsxs)('div', {
                                                            className: q.headerCollapsedContentCopyLogos,
                                                            children: [
                                                                (0, s.jsx)(N.Z, {
                                                                    className: q.partnerBranding,
                                                                    gameTileSize: N.f.MEDIUM,
                                                                    quest: C,
                                                                    theme: G
                                                                }),
                                                                (0, s.jsx)(f.Z, { color: 'always-white' })
                                                            ]
                                                        }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: K
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, s.jsxs)(r.animated.div, {
                                    ref: (e) => {
                                        P.current = e;
                                    },
                                    className: l()(q.headerExpandedContent, {
                                        [q.outerContainerGiftInventory]: Y,
                                        [q.outerContainerEmbed]: X
                                    }),
                                    style: {
                                        opacity: b.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: D || O ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !D && !O,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: q.headerExpandedWrapper,
                                            children: [
                                                (0, s.jsxs)('div', {
                                                    className: q.iconLogotypeContainer,
                                                    children: [
                                                        (0, s.jsx)(N.Z, {
                                                            className: q.partnerBranding,
                                                            gameTileSize: N.f.MEDIUM,
                                                            quest: C,
                                                            theme: G
                                                        }),
                                                        X ? null : (0, s.jsx)(f.Z, { color: 'always-white' })
                                                    ]
                                                }),
                                                (0, s.jsxs)('div', {
                                                    className: q.questInfo,
                                                    children: [
                                                        (0, s.jsx)(c.Tooltip, {
                                                            text: C.config.messages.questName,
                                                            shouldShow: null != k && null != W && k < W,
                                                            children: (e) =>
                                                                (0, s.jsx)(c.Heading, {
                                                                    ref: H,
                                                                    variant: 'lg' === g ? 'heading-xxl/bold' : 'sm' === g ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                    className: q.heading,
                                                                    ...e,
                                                                    children: I.Z.Messages.QUEST.format({ questName: C.config.messages.questName })
                                                                })
                                                        }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/normal',
                                                            children: J ? I.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: ee }) : d ? I.Z.Messages.QUESTS_EXPIRED_ON.format({ expirationDate: $ }) : I.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: $ })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !d &&
                                            Y &&
                                            (0, s.jsx)(L, {
                                                quest: C,
                                                location: _,
                                                questContentPosition: B
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)(r.animated.div, {
                            className: q.iconsContainer,
                            style: {
                                top: Y
                                    ? b.to({
                                          range: [0, 1],
                                          output: [M.DJ / 2 - M.Z$ / 2, M.jc]
                                      })
                                    : M.jc
                            },
                            children: [
                                (0, s.jsx)(A.r, {
                                    questContent: _,
                                    quest: C,
                                    questContentPosition: B,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: Y,
                                    showShareLink: !d && X,
                                    children: (e) =>
                                        (0, s.jsx)(r.animated.div, {
                                            style: {
                                                opacity: b,
                                                visibility: D || O ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !D && !O,
                                            children: (0, s.jsx)(c.Clickable, {
                                                ...e,
                                                className: q.iconWrapper,
                                                'aria-label': I.Z.Messages.ACTIONS,
                                                children: (0, s.jsx)(c.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: o.Z.WHITE
                                                })
                                            })
                                        })
                                }),
                                Q &&
                                    !(0, M.W_)(_) &&
                                    (0, s.jsx)(c.Clickable, {
                                        onClick: et,
                                        className: q.iconWrapper,
                                        'aria-label': O ? I.Z.Messages.COLLAPSE : I.Z.Messages.EXPAND,
                                        children: (0, s.jsx)(Z, {
                                            style: {
                                                rotate: b.to({
                                                    range: [0, 1],
                                                    output: [0, 180]
                                                })
                                            },
                                            color: o.Z.WHITE
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
