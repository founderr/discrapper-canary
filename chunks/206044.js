var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
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
    A = n(475595),
    v = n(566078),
    N = n(685613),
    O = n(611855),
    R = n(644646),
    C = n(670638),
    y = n(87894),
    L = n(46140),
    b = n(689938),
    D = n(128175);
let M = 1000,
    P = (0, l.animated)(_.ChevronSmallDownIcon),
    U = (0, l.animated)(h.Z),
    w = (e) => {
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
            (0, S.zK)(t, L.S7.FRACTIONS_QUEST))
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
                u.current.start(M, () => l(!1));
        };
        return (0, i.jsx)(_.Tooltip, {
            forceOpen: s,
            shouldShow: s,
            color: _.Tooltip.Colors.GREEN,
            text: b.Z.Messages.COPY_SUCCESS_1,
            children: () =>
                (0, i.jsx)(_.Button, {
                    ...o,
                    className: D.shareButton,
                    color: _.Button.Colors.PRIMARY,
                    size: _.Button.Sizes.SMALL,
                    onClick: c,
                    children: b.Z.Messages.QUESTS_SHARE_QUEST
                })
        });
    },
    x = (e) => {
        var t, n;
        let { isFocused: r, isQuestExpired: o, quest: d, location: h, size: m, expansionSpring: S, isAnimating: M, isExpanded: x, isInConcurrentQuestExperiment: G, contentPosition: k, toggleExpanded: B } = e,
            { ref: F, height: Z } = (0, E.Z)(),
            { ref: V, width: H, scrollWidth: Y } = (0, E.Z)(),
            j = (0, c.e7)([p.Z], () => p.Z.getState().theme),
            W = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
            K = a.useMemo(() => (0, A.fh)(d, A.Bd.HERO), [d]),
            z = a.useRef(null),
            q = (0, y.uq)(h),
            Q = h === g.jn.QUESTS_EMBED,
            X = (0, T.t5)(d, L.dr.QUESTS_CARD, h),
            $ = (null === (t = d.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            J = (0, T.B6)(d.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            ee = (0, T.B6)(v.r.build(d.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    B(),
                    (0, I._3)({
                        questId: d.id,
                        questContent: h,
                        questContentCTA: x ? I.jZ.COLLAPSE : I.jZ.EXPAND,
                        questContentPosition: k
                    });
            },
            en = () => null != H && null != Y && H < Y;
        return (
            a.useEffect(() => {
                K.isAnimated && null != z.current && (r ? z.current.play() : !r && (z.current.pause(), (z.current.currentTime = 0)));
            }, [r, K]),
            (0, i.jsxs)('div', {
                className: s()(D.outerContainer, {
                    [D.outerContainerGiftInventory]: q,
                    [D.outerContainerEmbed]: Q,
                    [D.outerContainerXs]: 'xs' === m
                }),
                'aria-label': b.Z.Messages.EXPAND,
                style: { height: q ? Z : void 0 },
                children: [
                    (0, i.jsx)(U, {
                        style: {
                            opacity: S.to({
                                range: [0, 1],
                                output: [0.25, 1]
                            })
                        },
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        className: D.questSplash,
                        controls: !1,
                        poster: K.url,
                        ref: z,
                        children:
                            !W &&
                            K.isAnimated &&
                            (0, i.jsx)('source', {
                                src: K.url,
                                type: null !== (n = K.mimetype) && void 0 !== n ? n : void 0
                            })
                    }),
                    (0, i.jsxs)('div', {
                        className: D.header,
                        'aria-expanded': x,
                        children: [
                            (0, i.jsxs)(l.animated.div, {
                                className: s()(D.headerContent, { [D.headerContentEmbed]: Q }),
                                style: {
                                    y: q
                                        ? S.to({
                                              range: [0, 1],
                                              output: [y.DJ, 0]
                                          })
                                        : void 0
                                },
                                children: [
                                    q &&
                                        (0, i.jsx)(l.animated.div, {
                                            className: D.headerCollapsedContent,
                                            style: {
                                                opacity: S.to({
                                                    range: [0, 1],
                                                    output: [1, 0]
                                                }),
                                                visibility: M || !x ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !M && x,
                                            children: (0, i.jsxs)(_.ClickableContainer, {
                                                'aria-label': b.Z.Messages.EXPAND,
                                                onClick: et,
                                                className: D.headerCollapsedClickableContainer,
                                                children: [
                                                    (0, i.jsx)('div', {
                                                        className: D.headerCollapsedContentRewardWrapper,
                                                        children: (0, i.jsx)(R.Z, {
                                                            quest: d,
                                                            questContent: h,
                                                            className: D.headerCollapsedRewardTile,
                                                            location: L.dr.QUESTS_CARD
                                                        })
                                                    }),
                                                    (0, i.jsxs)('div', {
                                                        className: D.headerCollapsedContentCopyWrapper,
                                                        children: [
                                                            (0, i.jsxs)('div', {
                                                                className: D.headerCollapsedContentCopyLogos,
                                                                children: [
                                                                    (0, i.jsx)(N.Z, {
                                                                        className: D.partnerBranding,
                                                                        gameTileSize: N.f.MEDIUM,
                                                                        quest: d,
                                                                        theme: j
                                                                    }),
                                                                    (0, i.jsx)(O.Z, { color: 'always-white' })
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
                                            F.current = e;
                                        },
                                        className: s()(D.headerExpandedContent, {
                                            [D.outerContainerGiftInventory]: q,
                                            [D.outerContainerEmbed]: Q
                                        }),
                                        style: {
                                            opacity: S.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            }),
                                            visibility: M || x ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !M && !x,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: D.headerExpandedWrapper,
                                                children: [
                                                    (0, i.jsxs)('div', {
                                                        className: D.iconLogotypeContainer,
                                                        children: [
                                                            (0, i.jsx)(N.Z, {
                                                                className: D.partnerBranding,
                                                                gameTileSize: N.f.MEDIUM,
                                                                quest: d,
                                                                theme: j
                                                            }),
                                                            Q ? null : (0, i.jsx)(O.Z, { color: 'always-white' })
                                                        ]
                                                    }),
                                                    (0, i.jsxs)('div', {
                                                        className: D.questInfo,
                                                        children: [
                                                            (0, i.jsx)(_.Tooltip, {
                                                                text: d.config.messages.questName,
                                                                shouldShow: en(),
                                                                children: (e) =>
                                                                    (0, i.jsx)(_.Heading, {
                                                                        ref: V,
                                                                        variant: 'lg' === m ? 'heading-xxl/bold' : 'sm' === m ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                        className: D.heading,
                                                                        ...e,
                                                                        children: b.Z.Messages.QUEST.format({ questName: d.config.messages.questName })
                                                                    })
                                                            }),
                                                            (0, i.jsx)(_.Text, {
                                                                variant: 'text-xs/normal',
                                                                children: $ ? b.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: ee }) : o ? b.Z.Messages.QUESTS_EXPIRED_ON.format({ expirationDate: J }) : b.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: J })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            !o &&
                                                q &&
                                                (0, i.jsx)(w, {
                                                    quest: d,
                                                    location: h,
                                                    questContentPosition: k
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsxs)(l.animated.div, {
                                className: D.iconsContainer,
                                style: {
                                    top: q
                                        ? S.to({
                                              range: [0, 1],
                                              output: [y.DJ / 2 - y.Z$ / 2, y.jc]
                                          })
                                        : y.jc
                                },
                                children: [
                                    (0, i.jsx)(C.r, {
                                        questContent: h,
                                        quest: d,
                                        questContentPosition: k,
                                        shouldShowDisclosure: !0,
                                        hideLearnMore: q,
                                        showShareLink: !o && Q,
                                        children: (e) =>
                                            (0, i.jsx)(l.animated.div, {
                                                style: {
                                                    opacity: S,
                                                    visibility: M || x ? 'inherit' : 'hidden'
                                                },
                                                'aria-hidden': !M && !x,
                                                children: (0, i.jsx)(_.Clickable, {
                                                    ...e,
                                                    className: D.iconWrapper,
                                                    'aria-label': b.Z.Messages.ACTIONS,
                                                    children: (0, i.jsx)(_.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: u.Z.WHITE
                                                    })
                                                })
                                            })
                                    }),
                                    G &&
                                        !(0, y.W_)(h) &&
                                        (0, i.jsx)(_.Clickable, {
                                            onClick: et,
                                            className: D.iconWrapper,
                                            'aria-label': x ? b.Z.Messages.COLLAPSE : b.Z.Messages.EXPAND,
                                            children: (0, i.jsx)(P, {
                                                style: {
                                                    rotate: S.to({
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
t.Z = x;
