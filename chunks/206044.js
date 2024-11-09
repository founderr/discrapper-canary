n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(100621),
    a = n(722770),
    u = n(442837),
    c = n(846519),
    d = n(481060),
    m = n(393238),
    x = n(607070),
    C = n(70097),
    h = n(210887),
    g = n(572004),
    p = n(617136),
    E = n(113434),
    j = n(497505),
    T = n(918701),
    f = n(475595),
    v = n(566078),
    S = n(685613),
    N = n(611855),
    q = n(644646),
    _ = n(670638),
    A = n(87894),
    R = n(46140),
    b = n(388032),
    I = n(128175);
let M = (0, o.animated)(d.ChevronSmallDownIcon),
    Z = (0, o.animated)(C.Z),
    L = (e) => {
        let { quest: t, location: n, questContentPosition: l, ...r } = e,
            [o, a] = s.useState(!1),
            u = s.useRef(new c.V7());
        s.useEffect(() => {
            let e = u.current;
            return function () {
                e.stop();
            };
        }, []);
        let m = () => {
            (0, p._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: p.jZ.COPY_QUEST_URL,
                questContentPosition: l
            }),
                (0, g.JG)((0, T.Rs)(t.id)),
                a(!0),
                u.current.start(1000, () => a(!1));
        };
        return (0, i.jsx)(d.Tooltip, {
            forceOpen: o,
            shouldShow: o,
            color: d.Tooltip.Colors.GREEN,
            text: b.intl.string(b.t.MSaeTU),
            children: () =>
                (0, i.jsx)(d.Button, {
                    ...r,
                    className: I.shareButton,
                    color: d.Button.Colors.PRIMARY,
                    size: d.Button.Sizes.SMALL,
                    onClick: m,
                    children: b.intl.string(b.t['5Z6rz8'])
                })
        });
    };
t.Z = (e) => {
    var t, n;
    let { isFocused: l, isQuestExpired: c, quest: C, location: g, size: T, expansionSpring: y, isAnimating: B, isExpanded: P, isInConcurrentQuestExperiment: U, contentPosition: D, toggleExpanded: w } = e,
        { ref: O, height: Q } = (0, m.Z)(),
        { ref: k, width: H, scrollWidth: z } = (0, m.Z)(),
        G = (0, u.e7)([h.Z], () => h.Z.getState().theme),
        W = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
        F = s.useMemo(() => (0, f.fh)(C, f.eC.HERO), [C]),
        V = s.useRef(null),
        X = (0, A.uq)(g),
        Y = g === j.jn.QUESTS_EMBED,
        K = (0, E.t5)(C, R.dr.QUESTS_CARD, g),
        J = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        $ = (0, E.B6)(C.config.expiresAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        ee = (0, E.B6)(v.r.build(C.config).rewardsExpireAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        et = (e) => {
            e.stopPropagation(),
                e.currentTarget.blur(),
                w(),
                (0, p._3)({
                    questId: C.id,
                    questContent: g,
                    questContentCTA: P ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                    questContentPosition: D
                });
        };
    return (
        s.useEffect(() => {
            F.isAnimated && null != V.current && (l ? V.current.play() : !l && (V.current.pause(), (V.current.currentTime = 0)));
        }, [l, F]),
        (0, i.jsxs)('div', {
            className: r()(I.outerContainer, {
                [I.outerContainerGiftInventory]: X,
                [I.outerContainerEmbed]: Y,
                [I.outerContainerXs]: 'xs' === T
            }),
            'aria-label': b.intl.string(b.t.dcl9MT),
            style: { height: X ? Q : void 0 },
            children: [
                (0, i.jsx)(Z, {
                    style: {
                        opacity: y.to({
                            range: [0, 1],
                            output: [0.25, 1]
                        })
                    },
                    autoPlay: !1,
                    loop: !1,
                    muted: !0,
                    playsInline: !0,
                    className: I.questSplash,
                    controls: !1,
                    poster: F.url,
                    ref: V,
                    children:
                        !W &&
                        F.isAnimated &&
                        (0, i.jsx)('source', {
                            src: F.url,
                            type: null !== (n = F.mimetype) && void 0 !== n ? n : void 0
                        })
                }),
                (0, i.jsxs)('div', {
                    className: I.header,
                    'aria-expanded': P,
                    children: [
                        (0, i.jsxs)(o.animated.div, {
                            className: r()(I.headerContent, { [I.headerContentEmbed]: Y }),
                            style: {
                                y: X
                                    ? y.to({
                                          range: [0, 1],
                                          output: [A.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                X &&
                                    (0, i.jsx)(o.animated.div, {
                                        className: I.headerCollapsedContent,
                                        style: {
                                            opacity: y.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: B || !P ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !B && P,
                                        children: (0, i.jsxs)(d.ClickableContainer, {
                                            'aria-label': b.intl.string(b.t.dcl9MT),
                                            onClick: et,
                                            className: I.headerCollapsedClickableContainer,
                                            children: [
                                                (0, i.jsx)('div', {
                                                    className: I.headerCollapsedContentRewardWrapper,
                                                    children: (0, i.jsx)(q.Z, {
                                                        quest: C,
                                                        questContent: g,
                                                        className: I.headerCollapsedRewardTile,
                                                        location: R.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: I.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, i.jsxs)('div', {
                                                            className: I.headerCollapsedContentCopyLogos,
                                                            children: [
                                                                (0, i.jsx)(S.Z, {
                                                                    className: I.partnerBranding,
                                                                    gameTileSize: S.f.MEDIUM,
                                                                    quest: C,
                                                                    theme: G
                                                                }),
                                                                (0, i.jsx)(N.Z, { color: 'always-white' })
                                                            ]
                                                        }),
                                                        (0, i.jsx)(d.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: K
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, i.jsxs)(o.animated.div, {
                                    ref: (e) => {
                                        O.current = e;
                                    },
                                    className: r()(I.headerExpandedContent, {
                                        [I.outerContainerGiftInventory]: X,
                                        [I.outerContainerEmbed]: Y
                                    }),
                                    style: {
                                        opacity: y.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: B || P ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !B && !P,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: I.headerExpandedWrapper,
                                            children: [
                                                (0, i.jsxs)('div', {
                                                    className: I.iconLogotypeContainer,
                                                    children: [
                                                        (0, i.jsx)(S.Z, {
                                                            className: I.partnerBranding,
                                                            gameTileSize: S.f.MEDIUM,
                                                            quest: C,
                                                            theme: G
                                                        }),
                                                        Y ? null : (0, i.jsx)(N.Z, { color: 'always-white' })
                                                    ]
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: I.questInfo,
                                                    children: [
                                                        (0, i.jsx)(d.Tooltip, {
                                                            text: C.config.messages.questName,
                                                            shouldShow: null != H && null != z && H < z,
                                                            children: (e) =>
                                                                (0, i.jsx)(d.Heading, {
                                                                    ref: k,
                                                                    variant: 'lg' === T ? 'heading-xxl/bold' : 'sm' === T ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                    className: I.heading,
                                                                    ...e,
                                                                    children: b.intl.format(b.t.EAYZAg, { questName: C.config.messages.questName })
                                                                })
                                                        }),
                                                        (0, i.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            children: J ? b.intl.formatToPlainString(b.t.APddvL, { expirationDate: ee }) : c ? b.intl.formatToPlainString(b.t.v7xMw8, { expirationDate: $ }) : b.intl.formatToPlainString(b.t['pX+fmp'], { expirationDate: $ })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !c &&
                                            X &&
                                            (0, i.jsx)(L, {
                                                quest: C,
                                                location: g,
                                                questContentPosition: D
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)(o.animated.div, {
                            className: I.iconsContainer,
                            style: {
                                top: X
                                    ? y.to({
                                          range: [0, 1],
                                          output: [A.DJ / 2 - A.Z$ / 2, A.jc]
                                      })
                                    : A.jc
                            },
                            children: [
                                (0, i.jsx)(_.r, {
                                    questContent: g,
                                    quest: C,
                                    questContentPosition: D,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: X,
                                    showShareLink: !c && Y,
                                    children: (e) =>
                                        (0, i.jsx)(o.animated.div, {
                                            style: {
                                                opacity: y,
                                                visibility: B || P ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !B && !P,
                                            children: (0, i.jsx)(d.Clickable, {
                                                ...e,
                                                className: I.iconWrapper,
                                                'aria-label': b.intl.string(b.t.DEoVWV),
                                                children: (0, i.jsx)(d.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: a.Z.WHITE
                                                })
                                            })
                                        })
                                }),
                                U &&
                                    !(0, A.W_)(g) &&
                                    (0, i.jsx)(d.Clickable, {
                                        onClick: et,
                                        className: I.iconWrapper,
                                        'aria-label': P ? b.intl.string(b.t.iTcumZ) : b.intl.string(b.t.dcl9MT),
                                        children: (0, i.jsx)(M, {
                                            style: {
                                                rotate: y.to({
                                                    range: [0, 1],
                                                    output: [0, 180]
                                                })
                                            },
                                            color: a.Z.WHITE
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
