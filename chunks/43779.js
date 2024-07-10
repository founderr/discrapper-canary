n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(113434), l = n(497505), o = n(918701), c = n(566078), d = n(472144), u = n(644646), _ = n(69439), h = n(689938), E = n(855892);
function I(e) {
    var t, n;
    let {
            quest: I,
            questContent: m
        } = e, g = c.r.build(I.config).defaultReward.messages.name, p = (0, r.Rf)(I), T = p.percentComplete > 0, S = (0, o.pG)({
            quest: I,
            useV2Variants: !0,
            taskDetails: p
        }), C = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, f = (0, r.B6)(null === (n = I.userStatus) || void 0 === n ? void 0 : n.claimedAt), N = s.useCallback(() => (0, i.jsx)(a.Text, {
            variant: 'text-md/semibold',
            color: 'text-brand',
            tag: 'span',
            className: E.header,
            children: g
        }), [g]), A = s.useMemo(() => C ? N() : h.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({ rewardHook: N }), [
            C,
            N
        ]), Z = s.useMemo(() => C ? (0, i.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            className: E.description,
            children: h.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({ claimDate: f })
        }) : null != S ? (0, i.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            className: E.description,
            children: S
        }) : null, [
            C,
            S,
            f
        ]);
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsxs)('div', {
                className: E.rewardDescriptionContainer,
                children: [
                    T && !C ? (0, i.jsx)('div', {
                        className: E.progressWrapper,
                        children: (0, i.jsx)(d.Z, {
                            quest: I,
                            size: 76,
                            percentComplete: p.percentComplete,
                            children: (0, i.jsx)('div', {
                                className: E.circularRewardTileWrapper,
                                children: (0, i.jsx)(u.Z, {
                                    quest: I,
                                    questContent: m,
                                    className: E.circularQuestRewardTileAsset
                                })
                            })
                        })
                    }) : (0, i.jsx)(u.Z, {
                        quest: I,
                        questContent: l.jn.QUEST_HOME_DESKTOP,
                        className: E.questRewardTileAsset
                    }),
                    (0, i.jsxs)('div', {
                        className: E.textContainer,
                        children: [
                            (0, i.jsx)('span', {
                                className: E.headerSpan,
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    className: E.header,
                                    children: A
                                })
                            }),
                            Z
                        ]
                    })
                ]
            }),
            (0, i.jsx)(_.Z, { quest: I })
        ]
    });
}
