var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), l = n(442837), i = n(950104), c = n(780384), d = n(481060), u = n(810090), p = n(358085), x = n(617136), m = n(272008), g = n(113434), C = n(569984), f = n(497505), _ = n(918701), h = n(865364), E = n(566078), S = n(340100), T = n(611855), N = n(644646), v = n(78826), A = n(670638), j = n(667105), B = n(46140), b = n(689938), O = n(47067);
let R = o.forwardRef(function (e, t) {
    var n, r;
    let {
            className: h,
            isExpanded: R,
            isExpansionAnimationComplete: y,
            onCtxMenuOpen: M,
            onCtxMenuClose: U,
            onCtxMenuSelect: q,
            quest: Z,
            useReducedMotion: P
        } = e, k = (0, l.e7)([C.Z], () => C.Z.isEnrolling(Z.id), [Z]), L = (0, g.B6)(Z.config.expiresAt), Q = E.r.build(Z.config), w = (0, g.B6)(Q.rewardsExpireAt), W = o.useMemo(() => (0, _.nP)(Z.config.assets.questBarHero), [Z]), H = (0, j.tP)(Q.application.id), D = o.useCallback(() => {
            (0, m.AH)(Z.id, {
                questContent: f.jn.QUEST_BAR,
                questContentCTA: x.jZ.ACCEPT_QUEST
            });
        }, [Z]), V = (0, j.hf)({
            quest: Z,
            location: f.jn.QUEST_BAR
        }), z = o.useCallback(() => {
            (0, _.FE)(Z, {
                content: f.jn.QUEST_BAR,
                ctaContent: x.jZ.OPEN_GAME_LINK
            });
        }, [Z]), G = Q.features.has(B.S7.POST_ENROLLMENT_CTA), F = (0, g.Rf)(Z), X = (0, g.Jf)(Z), Y = null != X ? X.progress > 0 : F.progressSeconds > 0, K = (null === (n = Z.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, J = (null === (r = Z.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, $ = o.useMemo(() => (0, _.Xv)(Z.config), [Z.config]), ee = R && y, et = (0, _.ph)(Z), en = (0, _.pG)({
            quest: Z,
            taskDetails: F,
            thirdPartyTaskDetails: null != X ? X : void 0
        }), es = (0, p.isWeb)(), eo = o.useMemo(() => {
            let e = (0, c.Qg)(Z.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: c.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, i.r5)(e, 0.3),
                '--custom-cta-color-active': (0, i.r5)(e, 0.35)
            };
        }, [Z.config.colors.primary]);
    return (0, s.jsx)('div', {
        style: { backgroundColor: Z.config.colors.secondary },
        'aria-hidden': !ee,
        className: a()(h, O.contentExpanded, { [O.contentInteractable]: ee }),
        children: K ? (0, s.jsxs)('div', {
            className: O.questAcceptedContent,
            ref: t,
            children: [
                (0, s.jsxs)('div', {
                    className: O.utils,
                    children: [
                        (0, s.jsxs)('div', {
                            className: O.questAcceptedContentHeading,
                            children: [
                                (0, s.jsx)(N.Z, {
                                    className: O.questProgressRewardTile,
                                    learnMoreStyle: 'icon',
                                    quest: Z,
                                    questContent: f.jn.QUEST_BAR
                                }),
                                (0, s.jsxs)('div', {
                                    children: [
                                        (0, s.jsx)(d.Heading, {
                                            color: 'always-white',
                                            variant: 'heading-sm/semibold',
                                            children: (0, _.AV)({
                                                quest: Z,
                                                taskDetails: F,
                                                thirdPartyTaskDetails: null != X ? X : void 0
                                            })
                                        }),
                                        (0, s.jsx)(d.Text, {
                                            className: O.questAcceptedContentCopySubheading,
                                            color: 'always-white',
                                            variant: 'text-xxs/normal',
                                            children: J ? b.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: w }) : b.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: L })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(A.r, {
                            onOpen: M,
                            onClose: U,
                            onSelect: q,
                            questContent: f.jn.QUEST_BAR,
                            quest: Z,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: e => (0, s.jsx)(d.Clickable, {
                                ...e,
                                className: O.submenuWrapper,
                                'aria-label': b.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: O.submenuIcon
                                })
                            })
                        })
                    ]
                }),
                J ? (0, s.jsx)(d.Button, {
                    className: a()(O.cta, O.ctaClaimReward),
                    style: $ ? eo : void 0,
                    color: d.Button.Colors.CUSTOM,
                    fullWidth: !0,
                    onClick: V,
                    size: d.Button.Sizes.NONE,
                    children: b.Z.Messages.QUESTS_CLAIM_REWARD
                }) : (0, s.jsx)(d.Text, {
                    className: O.description,
                    color: 'always-white',
                    variant: 'text-xs/normal',
                    children: en
                }),
                (0, s.jsx)(S.Z, { quest: Z }),
                !es && !Y && !H && G && (0, s.jsx)(I, { onClick: ee ? z : void 0 })
            ]
        }) : (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: O.questPromoContent,
                    ref: t,
                    children: [
                        (0, s.jsxs)('div', {
                            className: O.utils,
                            children: [
                                (0, s.jsx)(T.Z, { color: 'always-white' }),
                                (0, s.jsx)(A.r, {
                                    onOpen: M,
                                    onClose: U,
                                    onSelect: q,
                                    questContent: f.jn.QUEST_BAR,
                                    quest: Z,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    children: e => (0, s.jsx)(d.Clickable, {
                                        ...e,
                                        className: O.submenuWrapper,
                                        'aria-label': b.Z.Messages.ACTIONS,
                                        children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: O.submenuIcon
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: O.details,
                            children: [
                                (0, s.jsx)(N.Z, {
                                    className: O.rewardTile,
                                    learnMoreStyle: 'text',
                                    quest: Z,
                                    questContent: f.jn.QUEST_BAR
                                }),
                                (0, s.jsx)(d.Heading, {
                                    className: O.title,
                                    color: 'always-white',
                                    variant: 'heading-md/medium',
                                    children: b.Z.Messages.QUESTS_TITLE.format({ questName: Z.config.messages.questName })
                                }),
                                (0, s.jsx)(d.Text, {
                                    className: O.description,
                                    color: 'always-white',
                                    variant: 'text-sm/normal',
                                    children: en
                                })
                            ]
                        }),
                        (0, s.jsx)(d.Button, {
                            className: O.cta,
                            style: '1232852290197655573' !== Z.id ? eo : void 0,
                            color: d.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: ee ? D : void 0,
                            size: d.Button.Sizes.NONE,
                            submitting: k,
                            children: b.Z.Messages.QUESTS_ACCEPT_QUEST
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: O.heroAssetWrapper,
                    style: { color: Z.config.colors.secondary },
                    children: W ? (0, s.jsx)(v.Fl, {
                        id: 'QuestBarContentExpanded_heroAnimated',
                        children: e => (0, s.jsx)(u.Z, {
                            ref: e,
                            autoPlay: !P,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: O.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)('source', {
                                src: et,
                                type: (0, _.mN)(et)
                            })
                        })
                    }) : (0, s.jsx)(v.Fl, {
                        id: 'QuestBarContentExpanded_heroStatic',
                        children: e => (0, s.jsx)('img', {
                            ref: e,
                            alt: '',
                            className: O.heroAsset,
                            src: et
                        })
                    })
                })
            ]
        })
    });
});
function I(e) {
    let {
        style: t,
        onClick: n
    } = e;
    return (0, h.O)({
        location: B.dr.QUESTS_BAR,
        autoTrackExposure: !0
    }) ? (0, s.jsx)(d.Button, {
        className: O.cta,
        style: t,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: n,
        size: d.Button.Sizes.NONE,
        children: b.Z.Messages.QUESTS_GET_THIS_GAME
    }) : null;
}
t.Z = R;
