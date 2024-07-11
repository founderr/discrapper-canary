var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(442837), l = n(950104), c = n(780384), d = n(481060), u = n(703656), p = n(810090), x = n(358085), m = n(617136), g = n(272008), C = n(113434), f = n(569984), _ = n(497505), h = n(918701), E = n(865364), T = n(566078), S = n(340100), N = n(611855), A = n(644646), v = n(78826), j = n(670638), B = n(667105), b = n(46140), O = n(981631), R = n(701488), I = n(689938), y = n(47067);
let U = o.forwardRef(function (e, t) {
    var n, r;
    let {
            className: E,
            isExpanded: U,
            isExpansionAnimationComplete: q,
            onCtxMenuOpen: Z,
            onCtxMenuClose: P,
            onCtxMenuSelect: k,
            quest: L,
            useReducedMotion: Q
        } = e, w = (0, i.e7)([f.Z], () => f.Z.isEnrolling(L.id), [L]), W = (0, C.B6)(L.config.expiresAt), H = T.r.build(L.config), D = (0, C.B6)(H.rewardsExpireAt), V = o.useMemo(() => (0, h.nP)(L.config.assets.questBarHero), [L]), z = (0, B.tP)(H.application.id), G = H.features.has(b.S7.START_QUEST_CTA) ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST, F = H.features.has(b.S7.START_QUEST_CTA) ? I.Z.Messages.QUESTS_START_QUEST : I.Z.Messages.QUESTS_ACCEPT_QUEST, X = o.useCallback(() => {
            (0, g.AH)(L.id, {
                questContent: _.jn.QUEST_BAR,
                questContentCTA: G
            }), H.features.has(b.S7.START_QUEST_CTA) && (0, u.uL)(O.Z5c.ACTIVITY_DETAILS(R.In), void 0);
        }, [
            L,
            G,
            H.features
        ]), Y = (0, B.hf)({
            quest: L,
            location: _.jn.QUEST_BAR
        }), K = o.useCallback(() => {
            (0, h.FE)(L, {
                content: _.jn.QUEST_BAR,
                ctaContent: m.jZ.OPEN_GAME_LINK
            });
        }, [L]), J = H.features.has(b.S7.POST_ENROLLMENT_CTA), $ = (0, C.Rf)(L), ee = (0, C.Jf)(L), et = null != ee ? ee.progress > 0 : $.progressSeconds > 0, en = (null === (n = L.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, es = (null === (r = L.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, eo = o.useMemo(() => (0, h.Xv)(L.config), [L.config]), er = U && q, ea = (0, h.ph)(L), ei = (0, h.pG)({
            quest: L,
            taskDetails: $,
            thirdPartyTaskDetails: null != ee ? ee : void 0
        }), el = (0, x.isWeb)(), ec = o.useMemo(() => {
            let e = (0, c.Qg)(L.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: c.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, l.r5)(e, 0.3),
                '--custom-cta-color-active': (0, l.r5)(e, 0.35)
            };
        }, [L.config.colors.primary]);
    return (0, s.jsx)('div', {
        style: { backgroundColor: L.config.colors.secondary },
        'aria-hidden': !er,
        className: a()(E, y.contentExpanded, { [y.contentInteractable]: er }),
        children: en ? (0, s.jsxs)('div', {
            className: y.questAcceptedContent,
            ref: t,
            children: [
                (0, s.jsxs)('div', {
                    className: y.utils,
                    children: [
                        (0, s.jsxs)('div', {
                            className: y.questAcceptedContentHeading,
                            children: [
                                (0, s.jsx)(A.Z, {
                                    className: y.questProgressRewardTile,
                                    learnMoreStyle: 'icon',
                                    quest: L,
                                    questContent: _.jn.QUEST_BAR
                                }),
                                (0, s.jsxs)('div', {
                                    children: [
                                        (0, s.jsx)(d.Heading, {
                                            color: 'always-white',
                                            variant: 'heading-sm/semibold',
                                            children: (0, h.AV)({
                                                quest: L,
                                                taskDetails: $,
                                                thirdPartyTaskDetails: null != ee ? ee : void 0
                                            })
                                        }),
                                        (0, s.jsx)(d.Text, {
                                            className: y.questAcceptedContentCopySubheading,
                                            color: 'always-white',
                                            variant: 'text-xxs/normal',
                                            children: es ? I.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: D }) : I.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: W })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(j.r, {
                            onOpen: Z,
                            onClose: P,
                            onSelect: k,
                            questContent: _.jn.QUEST_BAR,
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
                                    className: y.submenuIcon
                                })
                            })
                        })
                    ]
                }),
                es ? (0, s.jsx)(d.Button, {
                    className: a()(y.cta, y.ctaClaimReward),
                    style: eo ? ec : void 0,
                    color: d.Button.Colors.CUSTOM,
                    fullWidth: !0,
                    onClick: Y,
                    size: d.Button.Sizes.NONE,
                    children: I.Z.Messages.QUESTS_CLAIM_REWARD
                }) : (0, s.jsx)(d.Text, {
                    className: y.description,
                    color: 'always-white',
                    variant: 'text-xs/normal',
                    children: ei
                }),
                (0, s.jsx)(S.Z, { quest: L }),
                !el && !et && !z && J && (0, s.jsx)(M, { onClick: er ? K : void 0 })
            ]
        }) : (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: y.questPromoContent,
                    ref: t,
                    children: [
                        (0, s.jsxs)('div', {
                            className: y.utils,
                            children: [
                                (0, s.jsx)(N.Z, { color: 'always-white' }),
                                (0, s.jsx)(j.r, {
                                    onOpen: Z,
                                    onClose: P,
                                    onSelect: k,
                                    questContent: _.jn.QUEST_BAR,
                                    quest: L,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    children: e => (0, s.jsx)(d.Clickable, {
                                        ...e,
                                        className: y.submenuWrapper,
                                        'aria-label': I.Z.Messages.ACTIONS,
                                        children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: y.submenuIcon
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: y.details,
                            children: [
                                (0, s.jsx)(A.Z, {
                                    className: y.rewardTile,
                                    learnMoreStyle: 'text',
                                    quest: L,
                                    questContent: _.jn.QUEST_BAR
                                }),
                                (0, s.jsx)(d.Heading, {
                                    className: y.title,
                                    color: 'always-white',
                                    variant: 'heading-md/medium',
                                    children: I.Z.Messages.QUESTS_TITLE.format({ questName: L.config.messages.questName })
                                }),
                                (0, s.jsx)(d.Text, {
                                    className: y.description,
                                    color: 'always-white',
                                    variant: 'text-sm/normal',
                                    children: ei
                                })
                            ]
                        }),
                        (0, s.jsx)(d.Button, {
                            className: y.cta,
                            style: '1232852290197655573' !== L.id ? ec : void 0,
                            color: d.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: er ? X : void 0,
                            size: d.Button.Sizes.NONE,
                            submitting: w,
                            children: F
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: y.heroAssetWrapper,
                    style: { color: L.config.colors.secondary },
                    children: V ? (0, s.jsx)(v.Fl, {
                        id: 'QuestBarContentExpanded_heroAnimated',
                        children: e => (0, s.jsx)(p.Z, {
                            ref: e,
                            autoPlay: !Q,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: y.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)('source', {
                                src: ea,
                                type: (0, h.mN)(ea)
                            })
                        })
                    }) : (0, s.jsx)(v.Fl, {
                        id: 'QuestBarContentExpanded_heroStatic',
                        children: e => (0, s.jsx)('img', {
                            ref: e,
                            alt: '',
                            className: y.heroAsset,
                            src: ea
                        })
                    })
                })
            ]
        })
    });
});
function M(e) {
    let {
        style: t,
        onClick: n
    } = e;
    return (0, E.O)({
        location: b.dr.QUESTS_BAR,
        autoTrackExposure: !0
    }) ? (0, s.jsx)(d.Button, {
        className: y.cta,
        style: t,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: n,
        size: d.Button.Sizes.NONE,
        children: I.Z.Messages.QUESTS_GET_THIS_GAME
    }) : null;
}
t.Z = U;
