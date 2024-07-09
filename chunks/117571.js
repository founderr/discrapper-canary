a.r(r), a.d(r, {
    default: function () {
        return v;
    }
}), a(47120);
var n = a(735250), t = a(470079), o = a(120356), s = a.n(o), i = a(887024), d = a(442837), c = a(780384), l = a(481060), p = a(410030), u = a(607070), m = a(530618), g = a(302221), f = a(272008), b = a(569984), w = a(497505), h = a(566078), x = a(617889), _ = a(644646), T = a(78826), C = a(46140), y = a(675654), S = a(689938), j = a(754301);
function B(e) {
    let {
            quest: r,
            sharedQuestFields: a
        } = e, t = (0, c.wj)((0, p.ZP)()), o = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '.concat((0, g.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ').concat((0, g.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ').concat(t ? 'var(--black)' : 'var(--white)', '\n    ')
        }, i = (0, x.B)(r, !1), {
            hasError: d,
            isLoading: u
        } = (0, T.d7)();
    return (0, n.jsxs)('div', {
        style: o,
        className: j.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: j.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    u && !d && (0, n.jsx)(l.Spinner, {
                        className: j.rewardTileAssetStatusIcon,
                        type: l.SpinnerTypes.SPINNING_CIRCLE
                    }),
                    d && (0, n.jsx)(l.ImageWarningIcon, { className: j.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(_.Z, {
                        className: s()(j.rewardTileAsset, { [j.rewardTileAssetLoading]: u || d }),
                        quest: r,
                        questContent: i.trackingCtx.content
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: j.rewardSubheading,
                children: (0, n.jsx)(l.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    className: j.rewardSubheadingText,
                    children: r.config.messages.questName
                })
            }),
            (0, n.jsx)(l.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: j.rewardHeading,
                children: a.defaultReward.messages.name
            })
        ]
    });
}
function v(e) {
    var r;
    let a = (0, d.e7)([b.Z], () => b.Z.getQuest(e.questId)), o = t.useRef(new i.qA()), s = t.useRef(null), [c, p] = t.useState(null), g = (0, d.e7)([u.Z], () => u.Z.useReducedMotion), {
            onClose: x,
            transitionState: _,
            location: v
        } = e;
    if (t.useEffect(() => {
            if (null == a)
                return;
            let e = h.r.build(a.config), r = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : w.y$.CROSS_PLATFORM;
            (0, f.QB)(a.id, r, v);
        }, [
            a,
            v
        ]), null == a)
        return null;
    let A = h.r.build(a.config);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: p,
                className: j.confettiCanvas,
                environment: o.current
            }),
            (0, n.jsx)('div', {
                ref: s,
                children: (0, n.jsxs)(l.ModalRoot, {
                    transitionState: _,
                    size: l.ModalSize.LARGE,
                    children: [
                        (0, n.jsxs)('div', {
                            className: j.modalBody,
                            children: [
                                (0, n.jsx)(l.ModalCloseButton, {
                                    className: j.closeButton,
                                    onClick: () => x()
                                }),
                                (0, n.jsx)(T.p, {
                                    sentrySource: C.dr.REWARD_CODE_MODAL,
                                    children: (0, n.jsx)(B, {
                                        quest: a,
                                        sharedQuestFields: A
                                    })
                                }),
                                (0, n.jsxs)('div', {
                                    className: j.modalContent,
                                    children: [
                                        (0, n.jsx)(l.Heading, {
                                            variant: 'heading-xl/semibold',
                                            color: 'header-primary',
                                            className: j.heading,
                                            children: 'You just unlocked '.concat(null !== (r = A.defaultReward.messages.nameWithArticle) && void 0 !== r ? r : 'a new item in game', '!')
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-normal',
                                            className: j.bodyCopy,
                                            children: 'Check your inventory in game to use your new item.'
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(l.ModalFooter, {
                            children: (0, n.jsx)(l.Button, {
                                onClick: () => x(),
                                children: S.Z.Messages.OKAY
                            })
                        })
                    ]
                })
            }),
            !g && (0, n.jsx)(m.Z, {
                confettiTarget: s.current,
                confettiCanvas: c,
                sprites: y.CA,
                colors: y.Br
            })
        ]
    });
}
