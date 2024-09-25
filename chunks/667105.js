n.d(t, {
    Ks: function () {
        return R;
    },
    g2: function () {
        return N;
    },
    hf: function () {
        return A;
    },
    k3: function () {
        return O;
    },
    tP: function () {
        return v;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(526629),
    s = n(442837),
    l = n(481060),
    u = n(230711),
    c = n(594190),
    d = n(594174),
    _ = n(617136),
    E = n(272008),
    f = n(113434),
    h = n(918701),
    p = n(920916),
    m = n(669041),
    I = n(341907),
    T = n(46140),
    g = n(981631),
    S = n(689938);
function A(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: i } = e,
        o = (0, s.e7)([d.default], () => {
            var e;
            return null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        });
    return a.useCallback(() => {
        null != t &&
            ((0, _._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: _.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: i
            }),
            o
                ? (0, h.zK)(t, T.S7.FRACTIONS_QUEST)
                    ? (0, I.openQuestsNitroRewardModal)(t, n)
                    : (0, h.Xv)(t.config)
                      ? (0, p.openCollectibleRewardModal)(t, n)
                      : (0, h.vQ)(t.config)
                        ? (0, I.openQuestInGameRewardModal)(t, n)
                        : (0, I.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: r
                          })
                : (0, m.openRewardModalUnverified)());
    }, [t, n, r, o, i]);
}
function v(e) {
    var t;
    let n = (0, s.Wu)([c.ZP], () => c.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    if (null == n) return !1;
    let r = Date.now() - 25920000000;
    return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let N = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [r, s] = (0, l.useSpring)(() => ({})),
            u = a.useRef(!1),
            c = () => {
                (u.current = !0),
                    s({
                        from: { rotate: '0deg' },
                        to: { rotate: '360deg' },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100
                        },
                        loop: () => u.current,
                        immediate: t
                    });
            },
            d = (0, o.animated)(l.RefreshIcon);
        return {
            render: () =>
                (0, i.jsx)(d, {
                    className: n,
                    style: t ? void 0 : r,
                    color: 'currentColor',
                    size: 'xs'
                }),
            startAnimation: c,
            stopAnimation: () => {
                u.current = !1;
            }
        };
    },
    O = (e, t) => {
        let { message: n, xboxURL: r } = (0, f.KX)(),
            a = (n) => {
                var i;
                let a = n.target;
                if ((null == a ? void 0 : null === (i = a.tagName) || void 0 === i ? void 0 : i.toLowerCase()) !== 'a') return;
                let o = a.getAttribute('href') === r ? _.jZ.HOW_TO_HELP_ARTICLE_XBOX : _.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                (0, _._3)({
                    questId: e,
                    questContent: t,
                    questContentCTA: o
                });
            };
        return (0, i.jsx)('span', {
            onClick: a,
            children: n
        });
    };
function R(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: i, questContentPosition: o, questContentRowIndex: s, isInHouseQuest: l, inGiftInventory: c } = e,
        d = A({
            quest: t,
            location: i,
            questContentPosition: o,
            questContentRowIndex: s
        }),
        p = (0, f._s)({ quest: t });
    return a.useMemo(() => {
        switch (n) {
            case f.OH.UNACCEPTED:
                return {
                    text: S.Z.Messages.QUESTS_ACCEPT,
                    tooltipText: S.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
                    onClick: () =>
                        (0, E.AH)(t.id, {
                            questContent: i,
                            questContentCTA: _.jZ.ACCEPT_QUEST,
                            questContentPosition: o,
                            questContentRowIndex: s
                        })
                };
            case f.OH.ACCEPTED:
            case f.OH.IN_PROGRESS:
                if (p && c)
                    return {
                        text: S.Z.Messages.QUESTS_CONNECT_CONSOLE,
                        tooltipText: null,
                        onClick: () =>
                            (0, h.gI)(
                                { quest: t },
                                {
                                    content: i,
                                    ctaContent: _.jZ.CONNECT_CONSOLE,
                                    position: o,
                                    rowIndex: s
                                }
                            )
                    };
                return {
                    text: S.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: S.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
                    onClick: null
                };
            case f.OH.COMPLETED:
                return {
                    text: S.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: l ? S.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
                    onClick: d
                };
            case f.OH.CLAIMED:
                let e = {
                    tooltipText: null,
                    onClick: d
                };
                if ((0, h.zK)(t, T.S7.FRACTIONS_QUEST))
                    return {
                        text: S.Z.Messages.QUESTS_LEARN_MORE_V2,
                        tooltipText: S.Z.Messages.QUESTS_LEARN_MORE_V2,
                        onClick: () => {
                            u.Z.open(g.oAB.PREMIUM, null, {});
                        }
                    };
                if (l)
                    return {
                        ...e,
                        text: S.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                if (r)
                    return {
                        ...e,
                        text: S.Z.Messages.COLLECTIBLES_USE_NOW
                    };
                else if ((0, h.vQ)(t.config))
                    return {
                        ...e,
                        text: S.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                return {
                    ...e,
                    text: S.Z.Messages.QUESTS_SEE_CODE
                };
        }
    }, [t, r, l, i, d, n, o, s, p, c]);
}
