n.d(t, {
    DH: function () {
        return D;
    },
    Ks: function () {
        return O;
    },
    g2: function () {
        return C;
    },
    hf: function () {
        return A;
    },
    k3: function () {
        return R;
    },
    qN: function () {
        return L;
    },
    tP: function () {
        return N;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(594190),
    c = n(594174),
    d = n(617136),
    f = n(272008),
    _ = n(113434),
    p = n(569984),
    h = n(497505),
    m = n(918701),
    g = n(977156),
    E = n(920916),
    v = n(669041),
    b = n(341907),
    I = n(604162),
    T = n(46140),
    S = n(981631),
    y = n(388032);
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
                ? (0, m.zK)(t, T.S7.FRACTIONS_QUEST)
                    ? (0, b.openQuestsNitroRewardModal)(t, n)
                    : (0, m.Xv)(t.config)
                      ? (0, E.openCollectibleRewardModal)(t, n)
                      : (0, m.vQ)(t.config)
                        ? (0, b.openQuestInGameRewardModal)(t, n)
                        : (0, b.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: r
                          })
                : (0, v.openRewardModalUnverified)());
    }, [t, n, r, o, a]);
}
function N(e) {
    var t;
    let n = (0, s.Wu)([u.ZP], () => u.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    if (null == n) return !1;
    let r = Date.now() - 25920000000;
    return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let C = (e) => {
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
    R = (e, t) => {
        let { message: n, xboxURL: i } = (0, _.KX)();
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
function O(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: a, questContentPosition: s, questContentRowIndex: o, inGiftInventory: u, isVideoQuest: c } = e,
        p = A({
            quest: t,
            location: a,
            questContentPosition: s,
            questContentRowIndex: o
        }),
        h = (0, _._s)({ quest: t }),
        g = (0, _.Rf)(t),
        E = i.useCallback(() => {
            l.Z.open(S.oAB.PREMIUM, null, {});
        }, []);
    return i.useMemo(() => {
        switch (n) {
            case _.OH.UNACCEPTED:
                let e = c ? y.intl.string(y.t.umdNio) : y.intl.string(y.t.kUQLMD),
                    i = c ? d.jZ.START_QUEST : d.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: y.intl.string(y.t['+MW4lJ']),
                    onClick: () => {
                        (0, f.AH)(t.id, {
                            questContent: a,
                            questContentCTA: i,
                            questContentPosition: s,
                            questContentRowIndex: o
                        }),
                            c && (0, b.openVideoQuestModal)(t);
                    }
                };
            case _.OH.ACCEPTED:
            case _.OH.IN_PROGRESS:
                if (h && u)
                    return {
                        text: y.intl.string(y.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, m.gI)(
                                { quest: t },
                                {
                                    content: a,
                                    ctaContent: d.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o
                                }
                            )
                    };
                if (c)
                    return {
                        text: (0, I.F9)(g),
                        tooltipText: y.intl.string(y.t.hsbwjo),
                        onClick: () => (0, b.openVideoQuestModal)(t)
                    };
                return {
                    text: y.intl.string(y.t.cfY4PD),
                    tooltipText: y.intl.string(y.t.hsbwjo),
                    onClick: null
                };
            case _.OH.COMPLETED:
                return {
                    text: y.intl.string(y.t.cfY4PD),
                    tooltipText: null,
                    onClick: p
                };
            case _.OH.CLAIMED:
                let l = {
                    tooltipText: null,
                    onClick: p
                };
                if (r)
                    return {
                        ...l,
                        text: y.intl.string(y.t.MAS7uL)
                    };
                if ((0, m.vQ)(t.config))
                    return {
                        ...l,
                        text: y.intl.string(y.t.vTgCW1)
                    };
                else if ((0, m.Bg)(t.config))
                    return {
                        tooltipText: null,
                        onClick: E,
                        text: y.intl.string(y.t['eQX+go'])
                    };
                return {
                    ...l,
                    text: y.intl.string(y.t.bAGFz8)
                };
        }
    }, [t, r, E, c, a, p, n, s, o, h, u, g]);
}
function D() {
    let e = (0, g.ym)({ location: T.dr.QUESTS_BAR });
    return (0, s.e7)([p.Z], () => {
        var t, n;
        return null !== (n = null !== (t = p.Z.questDeliveryOverride) && void 0 !== t ? t : (0, m.PM)(p.Z.quests, p.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== n ? n : e ? null : (0, m._)(p.Z.quests, h.jn.QUEST_BAR);
    });
}
function L(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, g.Zy)({ location: n }),
        a = (0, _.tP)(r);
    if (null == r) return !1;
    let s = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = null != r.userStatus && (0, m.zE)(r.userStatus, h.jn.QUEST_BAR);
    return i && !o && !s && !a;
}
