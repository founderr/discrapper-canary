n.d(t, {
    DH: function () {
        return y;
    },
    Ks: function () {
        return L;
    },
    Ws: function () {
        return b;
    },
    g2: function () {
        return v;
    },
    hf: function () {
        return O;
    },
    k3: function () {
        return C;
    },
    qN: function () {
        return D;
    },
    tP: function () {
        return R;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(212433),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(594190),
    c = n(594174),
    d = n(617136),
    _ = n(272008),
    E = n(113434),
    f = n(569984),
    h = n(497505),
    p = n(918701),
    I = n(977156),
    m = n(920916),
    T = n(669041),
    S = n(341907),
    g = n(46140),
    A = n(981631),
    N = n(689938);
function O(e) {
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
                ? (0, p.zK)(t, g.S7.FRACTIONS_QUEST)
                    ? (0, S.openQuestsNitroRewardModal)(t, n)
                    : (0, p.Xv)(t.config)
                      ? (0, m.openCollectibleRewardModal)(t, n)
                      : (0, p.vQ)(t.config)
                        ? (0, S.openQuestInGameRewardModal)(t, n)
                        : (0, S.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: r
                          })
                : (0, T.openRewardModalUnverified)());
    }, [t, n, r, o, a]);
}
function R(e) {
    var t;
    let n = (0, s.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    if (null == n) return !1;
    let r = Date.now() - 25920000000;
    return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let v = (e) => {
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
            startAnimation: (e) => {
                (u.current = !0),
                    l({
                        from: { rotate: '0deg' },
                        to: { rotate: '360deg' },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100
                        },
                        loop: () => (null != e ? e : u.current),
                        immediate: t
                    });
            },
            stopAnimation: () => {
                u.current = !1;
            }
        };
    },
    C = (e, t) => {
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
function L(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: a, questContentPosition: s, questContentRowIndex: o, isInHouseQuest: u, inGiftInventory: c } = e,
        f = O({
            quest: t,
            location: a,
            questContentPosition: s,
            questContentRowIndex: o
        }),
        h = (0, E._s)({ quest: t });
    return i.useMemo(() => {
        switch (n) {
            case E.OH.UNACCEPTED:
                return {
                    text: N.Z.Messages.QUESTS_ACCEPT,
                    tooltipText: N.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
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
                if (h && c)
                    return {
                        text: N.Z.Messages.QUESTS_CONNECT_CONSOLE,
                        tooltipText: null,
                        onClick: () =>
                            (0, p.gI)(
                                { quest: t },
                                {
                                    content: a,
                                    ctaContent: d.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o
                                }
                            )
                    };
                return {
                    text: N.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: N.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
                    onClick: null
                };
            case E.OH.COMPLETED:
                return {
                    text: N.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: u ? N.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
                    onClick: f
                };
            case E.OH.CLAIMED:
                let e = {
                    tooltipText: null,
                    onClick: f
                };
                if ((0, p.zK)(t, g.S7.FRACTIONS_QUEST))
                    return {
                        text: N.Z.Messages.QUESTS_LEARN_MORE_V2,
                        tooltipText: N.Z.Messages.QUESTS_LEARN_MORE_V2,
                        onClick: () => {
                            l.Z.open(A.oAB.PREMIUM, null, {});
                        }
                    };
                if (u)
                    return {
                        ...e,
                        text: N.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                if (r)
                    return {
                        ...e,
                        text: N.Z.Messages.COLLECTIBLES_USE_NOW
                    };
                else if ((0, p.vQ)(t.config))
                    return {
                        ...e,
                        text: N.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                return {
                    ...e,
                    text: N.Z.Messages.QUESTS_SEE_CODE
                };
        }
    }, [t, r, u, a, f, n, s, o, h, c]);
}
function y() {
    return (0, s.e7)([f.Z], () => {
        var e, t;
        return null !== (t = null !== (e = f.Z.questDeliveryOverride) && void 0 !== e ? e : (0, p.PM)(f.Z.quests, f.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : (0, p._)(f.Z.quests, h.jn.QUEST_BAR);
    });
}
function D(e) {
    var t;
    let { location: n } = e,
        r = y(),
        i = (0, I.Zy)({ location: n }),
        a = (0, E.tP)(r);
    if (null == r) return !1;
    let s = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = null != r.userStatus && (0, p.zE)(r.userStatus, h.jn.QUEST_BAR);
    return i && !o && !s && !a;
}
function b(e) {
    let { location: t } = e,
        n = D({ location: t });
    return 0 !== (0, s.e7)([f.Z], () => f.Z.lastFetchedCurrentQuests) && !n;
}
