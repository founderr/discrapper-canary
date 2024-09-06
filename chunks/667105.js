n.d(t, {
    Ks: function () {
        return v;
    },
    g2: function () {
        return O;
    },
    hf: function () {
        return A;
    },
    k3: function () {
        return R;
    },
    tP: function () {
        return N;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(180081),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(594190),
    c = n(594174),
    d = n(617136),
    _ = n(272008),
    E = n(113434),
    f = n(918701),
    h = n(796111),
    p = n(920916),
    I = n(669041),
    m = n(341907),
    T = n(46140),
    S = n(981631),
    g = n(689938);
function A(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: a } = e,
        o = (0, s.e7)([c.default], () => {
            var e;
            return null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        });
    return i.useCallback(() => {
        null != t &&
            ((0, d._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: d.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a
            }),
            o
                ? (0, f.zK)(t, T.S7.FRACTIONS_QUEST)
                    ? (0, m.openQuestsNitroRewardModal)(t, n)
                    : (0, f.Xv)(t.config)
                      ? (0, p.openCollectibleRewardModal)(t, n)
                      : (0, f.vQ)(t.config)
                        ? (0, m.openQuestInGameRewardModal)(t, n)
                        : (0, m.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: r
                          })
                : (0, I.openRewardModalUnverified)());
    }, [t, n, r, o, a]);
}
function N(e) {
    var t;
    let n = (0, s.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    if (null == n) return !1;
    let r = Date.now() - 25920000000;
    return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let O = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [s, l] = (0, o.useSpring)(() => ({})),
            u = i.useRef(!1),
            c = (0, a.animated)(o.RefreshIcon);
        return {
            render: () =>
                (0, r.jsx)(c, {
                    className: n,
                    style: t ? void 0 : s,
                    color: 'currentColor',
                    size: 'xs'
                }),
            startAnimation: () => {
                (u.current = !0),
                    l({
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
            stopAnimation: () => {
                u.current = !1;
            }
        };
    },
    R = (e, t) => {
        let { message: n, xboxURL: i } = (0, E.KX)();
        return (0, r.jsx)('span', {
            onClick: (n) => {
                var r;
                let a = n.target;
                if ((null == a ? void 0 : null === (r = a.tagName) || void 0 === r ? void 0 : r.toLowerCase()) !== 'a') return;
                let s = a.getAttribute('href') === i ? d.jZ.HOW_TO_HELP_ARTICLE_XBOX : d.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                (0, d._3)({
                    questId: e,
                    questContent: t,
                    questContentCTA: s
                });
            },
            children: n
        });
    };
function v(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: a, questContentPosition: s, questContentRowIndex: o, isInHouseQuest: u, inGiftInventory: c } = e,
        p = A({
            quest: t,
            location: a,
            questContentPosition: s,
            questContentRowIndex: o
        }),
        I = (0, E._s)({ quest: t });
    return i.useMemo(() => {
        switch (n) {
            case E.OH.UNACCEPTED:
                return {
                    text: g.Z.Messages.QUESTS_ACCEPT,
                    tooltipText: g.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
                    onClick: () =>
                        (0, _.AH)(t.id, {
                            questContent: a,
                            questContentCTA: d.jZ.ACCEPT_QUEST,
                            questContentPosition: s,
                            questContentRowIndex: o
                        })
                };
            case E.OH.ACCEPTED:
            case E.OH.IN_PROGRESS:
                if (I && c)
                    return {
                        text: g.Z.Messages.QUESTS_CONNECT_CONSOLE,
                        tooltipText: null,
                        onClick: () =>
                            (0, f.gI)(
                                {
                                    quest: t,
                                    showInline: (0, h.i)({ location: T.dr.QUESTS_CARD })
                                },
                                {
                                    content: a,
                                    ctaContent: d.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o
                                }
                            )
                    };
                return {
                    text: g.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: g.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
                    onClick: null
                };
            case E.OH.COMPLETED:
                return {
                    text: g.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: u ? g.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
                    onClick: p
                };
            case E.OH.CLAIMED:
                let e = {
                    tooltipText: null,
                    onClick: p
                };
                if ((0, f.zK)(t, T.S7.FRACTIONS_QUEST))
                    return {
                        text: g.Z.Messages.QUESTS_LEARN_MORE_V2,
                        tooltipText: g.Z.Messages.QUESTS_LEARN_MORE_V2,
                        onClick: () => {
                            l.Z.open(S.oAB.PREMIUM, null, {});
                        }
                    };
                if (u)
                    return {
                        ...e,
                        text: g.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                if (r)
                    return {
                        ...e,
                        text: g.Z.Messages.COLLECTIBLES_USE_NOW
                    };
                else if ((0, f.vQ)(t.config))
                    return {
                        ...e,
                        text: g.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                return {
                    ...e,
                    text: g.Z.Messages.QUESTS_SEE_CODE
                };
        }
    }, [t, r, u, a, p, n, s, o, I, c]);
}
