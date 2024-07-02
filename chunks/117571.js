n.r(t), n.d(t, {
    default: function () {
        return w;
    }
}), n(47120);
var s = n(735250), r = n(470079), a = n(120356), o = n.n(a), i = n(887024), l = n(442837), c = n(780384), d = n(481060), u = n(410030), p = n(607070), m = n(530618), g = n(302221), C = n(272008), x = n(569984), f = n(497505), _ = n(566078), T = n(617889), h = n(644646), b = n(78826), j = n(46140), S = n(675654), E = n(689938), N = n(754301);
function I(e) {
    let {
            quest: t,
            sharedQuestFields: n
        } = e, r = (0, c.wj)((0, u.ZP)()), a = {
            border: '1px solid '.concat(t.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '.concat((0, g.aD)(t.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ').concat((0, g.aD)(t.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ').concat(r ? 'var(--black)' : 'var(--white)', '\n    ')
        }, i = (0, T.B)(t, !1), {
            hasError: l,
            isLoading: p
        } = (0, b.d7)();
    return (0, s.jsxs)('div', {
        style: a,
        className: N.rewardTile,
        children: [
            (0, s.jsxs)('div', {
                className: N.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': t.config.colors.primary },
                children: [
                    p && !l && (0, s.jsx)(d.Spinner, {
                        className: N.rewardTileAssetStatusIcon,
                        type: d.SpinnerTypes.SPINNING_CIRCLE
                    }),
                    l && (0, s.jsx)(d.ImageWarningIcon, { className: N.rewardTileAssetStatusIcon }),
                    (0, s.jsx)(h.Z, {
                        className: o()(N.rewardTileAsset, { [N.rewardTileAssetLoading]: p || l }),
                        quest: t,
                        questContent: i.trackingCtx.content
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: N.rewardSubheading,
                children: (0, s.jsx)(d.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    className: N.rewardSubheadingText,
                    children: t.config.messages.questName
                })
            }),
            (0, s.jsx)(d.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: N.rewardHeading,
                children: n.defaultReward.messages.name
            })
        ]
    });
}
function w(e) {
    var t;
    let n = (0, l.e7)([x.Z], () => x.Z.getQuest(e.questId)), a = r.useRef(new i.qA()), o = r.useRef(null), [c, u] = r.useState(null), g = (0, l.e7)([p.Z], () => p.Z.useReducedMotion), {
            onClose: T,
            transitionState: h,
            location: w
        } = e;
    if (r.useEffect(() => {
            if (null == n)
                return;
            let e = _.r.build(n.config), t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : f.y$.CROSS_PLATFORM;
            (0, C.QB)(n.id, t, w);
        }, [
            n,
            w
        ]), null == n)
        return null;
    let v = _.r.build(n.config);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(i.O_, {
                ref: u,
                className: N.confettiCanvas,
                environment: a.current
            }),
            (0, s.jsx)('div', {
                ref: o,
                children: (0, s.jsxs)(d.ModalRoot, {
                    transitionState: h,
                    size: d.ModalSize.LARGE,
                    children: [
                        (0, s.jsxs)('div', {
                            className: N.modalBody,
                            children: [
                                (0, s.jsx)(d.ModalCloseButton, {
                                    className: N.closeButton,
                                    onClick: () => T()
                                }),
                                (0, s.jsx)(b.p, {
                                    sentrySource: j.dr.REWARD_CODE_MODAL,
                                    children: (0, s.jsx)(I, {
                                        quest: n,
                                        sharedQuestFields: v
                                    })
                                }),
                                (0, s.jsxs)('div', {
                                    className: N.modalContent,
                                    children: [
                                        (0, s.jsx)(d.Heading, {
                                            variant: 'heading-xl/semibold',
                                            color: 'header-primary',
                                            className: N.heading,
                                            children: 'You just unlocked '.concat(null !== (t = v.defaultReward.messages.nameWithArticle) && void 0 !== t ? t : 'a new item in game', '!')
                                        }),
                                        (0, s.jsx)(d.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-normal',
                                            className: N.bodyCopy,
                                            children: 'Check your inventory in game to use your new item.'
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(d.ModalFooter, {
                            children: (0, s.jsx)(d.Button, {
                                onClick: () => T(),
                                children: E.Z.Messages.OKAY
                            })
                        })
                    ]
                })
            }),
            !g && (0, s.jsx)(m.Z, {
                confettiTarget: o.current,
                confettiCanvas: c,
                sprites: S.CA,
                colors: S.Br
            })
        ]
    });
}
