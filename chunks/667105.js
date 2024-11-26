n.d(t, {
    DH: function () {
        return L;
    },
    Ks: function () {
        return D;
    },
    g2: function () {
        return R;
    },
    hf: function () {
        return N;
    },
    k3: function () {
        return O;
    },
    qN: function () {
        return x;
    },
    tP: function () {
        return C;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(752877),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(594190),
    c = n(594174),
    d = n(78839),
    f = n(617136),
    _ = n(272008),
    p = n(113434),
    h = n(569984),
    m = n(497505),
    g = n(918701),
    E = n(977156),
    v = n(920916),
    I = n(669041),
    T = n(341907),
    b = n(604162),
    S = n(46140),
    y = n(981631),
    A = n(388032);
function N(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: a } = e,
        o = (0, s.e7)([c.default], () => {
            var e;
            return null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        });
    return i.useCallback(() => {
        null != t &&
            ((0, f._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: f.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a
            }),
            o
                ? (0, g.Bg)(t.config)
                    ? (0, T.openQuestsNitroRewardModal)(t, n)
                    : (0, g.Xv)(t.config)
                      ? (0, v.openCollectibleRewardModal)(t, n)
                      : (0, g.vQ)(t.config)
                        ? (0, T.openQuestInGameRewardModal)(t, n)
                        : (0, T.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: r
                          })
                : (0, I.openRewardModalUnverified)());
    }, [t, n, r, o, a]);
}
function C(e) {
    var t;
    let n = (0, s.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    if (null == n) return !1;
    let r = Date.now() - 25920000000;
    return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let R = (e) => {
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
    O = (e, t) => {
        let { message: n, xboxURL: i } = (0, p.KX)();
        return (0, r.jsx)('span', {
            onClick: (n) => {
                var r;
                let a = n.target;
                if ((null == a ? void 0 : null === (r = a.tagName) || void 0 === r ? void 0 : r.toLowerCase()) !== 'a') return;
                let s = a.getAttribute('href') === i ? f.jZ.HOW_TO_HELP_ARTICLE_XBOX : f.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                (0, f._3)({
                    questId: e,
                    questContent: t,
                    questContentCTA: s
                });
            },
            children: n
        });
    };
function D(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: a, questContentPosition: s, questContentRowIndex: o, inGiftInventory: u, isVideoQuest: c } = e,
        d = N({
            quest: t,
            location: a,
            questContentPosition: s,
            questContentRowIndex: o
        }),
        h = (0, p._s)({ quest: t }),
        m = (0, p.Rf)(t),
        E = (0, p.GU)(t),
        v = E.length > 0 ? E[0] : null,
        I = i.useCallback(() => {
            l.Z.open(y.oAB.PREMIUM, null, {});
        }, []);
    return i.useMemo(() => {
        if (null != v)
            return {
                text: A.intl.string(A.t.k4z4en),
                tooltipText: v,
                onClick: null
            };
        switch (n) {
            case p.OH.UNACCEPTED:
                let e = c ? A.intl.string(A.t.umdNio) : A.intl.string(A.t.kUQLMD),
                    i = c ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: A.intl.string(A.t['+MW4lJ']),
                    onClick: () => {
                        (0, _.AH)(t.id, {
                            questContent: a,
                            questContentCTA: i,
                            questContentPosition: s,
                            questContentRowIndex: o
                        }),
                            c && (0, T.openVideoQuestModal)(t);
                    }
                };
            case p.OH.ACCEPTED:
            case p.OH.IN_PROGRESS:
                if (h && u)
                    return {
                        text: A.intl.string(A.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, g.gI)(
                                { quest: t },
                                {
                                    content: a,
                                    ctaContent: f.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o
                                }
                            )
                    };
                if (c)
                    return {
                        text: (0, b.F9)(m),
                        tooltipText: A.intl.string(A.t.hsbwjo),
                        onClick: () => (0, T.openVideoQuestModal)(t)
                    };
                return {
                    text: A.intl.string(A.t.cfY4PD),
                    tooltipText: A.intl.string(A.t.hsbwjo),
                    onClick: null
                };
            case p.OH.COMPLETED:
                return {
                    text: A.intl.string(A.t.cfY4PD),
                    tooltipText: null,
                    onClick: d
                };
            case p.OH.CLAIMED:
                let l = {
                    tooltipText: null,
                    onClick: d
                };
                if (r)
                    return {
                        ...l,
                        text: A.intl.string(A.t.MAS7uL)
                    };
                if ((0, g.vQ)(t.config))
                    return {
                        ...l,
                        text: A.intl.string(A.t.vTgCW1)
                    };
                else if ((0, g.Bg)(t.config))
                    return {
                        tooltipText: null,
                        onClick: I,
                        text: A.intl.string(A.t['eQX+go'])
                    };
                return {
                    ...l,
                    text: A.intl.string(A.t.bAGFz8)
                };
        }
    }, [t, r, I, c, a, d, n, s, o, h, u, m, v]);
}
function L() {
    let e = (0, E.ym)({ location: S.dr.QUESTS_BAR });
    return (0, s.e7)([h.Z], () => {
        var t, n;
        return null !== (n = null !== (t = h.Z.questDeliveryOverride) && void 0 !== t ? t : (0, g.PM)(h.Z.quests, h.Z.questToDeliverForPlacement, m.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== n ? n : e ? null : (0, g._)(h.Z.quests, m.jn.QUEST_BAR);
    });
}
function x(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, E.Zy)({ location: n }),
        a = (0, p.tP)(r),
        { premiumSubscription: o, hasFetchedSubscriptions: l } = (0, s.cj)([d.ZP], () => ({
            premiumSubscription: d.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: d.ZP.hasFetchedSubscriptions()
        }));
    if (null == r || ((0, g.Bg)(r.config) && (!l || (null == o ? void 0 : o.isPurchasedExternally)))) return !1;
    let u = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        c = null != r.userStatus && (0, g.zE)(r.userStatus, m.jn.QUEST_BAR);
    return i && !c && !u && !a;
}
