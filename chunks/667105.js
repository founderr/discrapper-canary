n.d(t, {
    DH: function () {
        return L;
    },
    Ks: function () {
        return C;
    },
    Ws: function () {
        return y;
    },
    g2: function () {
        return O;
    },
    hf: function () {
        return N;
    },
    k3: function () {
        return v;
    },
    qN: function () {
        return D;
    },
    tP: function () {
        return R;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(442837),
    o = n(481060),
    l = n(594190),
    u = n(594174),
    c = n(617136),
    d = n(272008),
    _ = n(113434),
    E = n(569984),
    f = n(497505),
    h = n(918701),
    p = n(977156),
    I = n(920916),
    m = n(669041),
    T = n(341907),
    S = n(604162),
    g = n(46140),
    A = n(689938);
function N(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: a } = e,
        o = (0, s.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        });
    return i.useCallback(() => {
        null != t &&
            ((0, c._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: c.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a
            }),
            o
                ? (0, h.zK)(t, g.S7.FRACTIONS_QUEST)
                    ? (0, T.openQuestsNitroRewardModal)(t, n)
                    : (0, h.Xv)(t.config)
                      ? (0, I.openCollectibleRewardModal)(t, n)
                      : (0, h.vQ)(t.config)
                        ? (0, T.openQuestInGameRewardModal)(t, n)
                        : (0, T.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: r
                          })
                : (0, m.openRewardModalUnverified)());
    }, [t, n, r, o, a]);
}
function R(e) {
    var t;
    let n = (0, s.Wu)([l.ZP], () => l.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
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
    v = (e, t) => {
        let { message: n, xboxURL: i } = (0, _.KX)();
        return (0, r.jsx)('span', {
            onClick: (n) => {
                var r;
                let a = n.target;
                if ((null == a ? void 0 : null === (r = a.tagName) || void 0 === r ? void 0 : r.toLowerCase()) !== 'a') return;
                let s = a.getAttribute('href') === i ? c.jZ.HOW_TO_HELP_ARTICLE_XBOX : c.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                (0, c._3)({
                    questId: e,
                    questContent: t,
                    questContentCTA: s
                });
            },
            children: n
        });
    };
function C(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: a, questContentPosition: s, questContentRowIndex: o, isInHouseQuest: l, inGiftInventory: u, isVideoQuest: E } = e,
        f = N({
            quest: t,
            location: a,
            questContentPosition: s,
            questContentRowIndex: o
        }),
        p = (0, _._s)({ quest: t }),
        I = (0, _.Rf)(t);
    return i.useMemo(() => {
        switch (n) {
            case _.OH.UNACCEPTED:
                return {
                    text: A.Z.Messages.QUESTS_ACCEPT,
                    tooltipText: A.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
                    onClick: () => {
                        (0, d.AH)(t.id, {
                            questContent: a,
                            questContentCTA: c.jZ.ACCEPT_QUEST,
                            questContentPosition: s,
                            questContentRowIndex: o
                        }),
                            E && (0, T.openVideoQuestModal)(t);
                    }
                };
            case _.OH.ACCEPTED:
            case _.OH.IN_PROGRESS:
                if (p && u)
                    return {
                        text: A.Z.Messages.QUESTS_CONNECT_CONSOLE,
                        tooltipText: null,
                        onClick: () =>
                            (0, h.gI)(
                                { quest: t },
                                {
                                    content: a,
                                    ctaContent: c.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o
                                }
                            )
                    };
                if (E)
                    return {
                        text: (0, S.F)(I),
                        tooltipText: A.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
                        onClick: () => (0, T.openVideoQuestModal)(t)
                    };
                return {
                    text: A.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: A.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
                    onClick: null
                };
            case _.OH.COMPLETED:
                return {
                    text: A.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: l ? A.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
                    onClick: f
                };
            case _.OH.CLAIMED:
                let e = {
                    tooltipText: null,
                    onClick: f
                };
                if (l)
                    return {
                        ...e,
                        text: A.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                if (r)
                    return {
                        ...e,
                        text: A.Z.Messages.COLLECTIBLES_USE_NOW
                    };
                else if ((0, h.vQ)(t.config))
                    return {
                        ...e,
                        text: A.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                return {
                    ...e,
                    text: A.Z.Messages.QUESTS_SEE_CODE
                };
        }
    }, [t, r, E, l, a, f, n, s, o, p, u, I]);
}
function L() {
    return (0, s.e7)([E.Z], () => {
        var e, t;
        return null !== (t = null !== (e = E.Z.questDeliveryOverride) && void 0 !== e ? e : (0, h.PM)(E.Z.quests, E.Z.questToDeliverForPlacement, f.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : (0, h._)(E.Z.quests, f.jn.QUEST_BAR);
    });
}
function D(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, p.Zy)({ location: n }),
        a = (0, _.tP)(r);
    if (null == r) return !1;
    let s = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = null != r.userStatus && (0, h.zE)(r.userStatus, f.jn.QUEST_BAR);
    return i && !o && !s && !a;
}
function y(e) {
    let { location: t } = e,
        n = D({
            location: t,
            quest: L()
        });
    return 0 !== (0, s.e7)([E.Z], () => E.Z.lastFetchedCurrentQuests) && !n;
}
