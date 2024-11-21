n.d(t, {
    B4: function () {
        return ed;
    },
    B6: function () {
        return H;
    },
    Bd: function () {
        return el;
    },
    DU: function () {
        return ee;
    },
    Fr: function () {
        return $;
    },
    GI: function () {
        return er;
    },
    Gd: function () {
        return eh;
    },
    I: function () {
        return eo;
    },
    J2: function () {
        return G;
    },
    Jf: function () {
        return q;
    },
    KX: function () {
        return ea;
    },
    OH: function () {
        return a;
    },
    Rf: function () {
        return z;
    },
    _Q: function () {
        return es;
    },
    _s: function () {
        return ei;
    },
    bA: function () {
        return Z;
    },
    e5: function () {
        return i;
    },
    eN: function () {
        return F;
    },
    eQ: function () {
        return e_;
    },
    iO: function () {
        return J;
    },
    kJ: function () {
        return et;
    },
    me: function () {
        return eu;
    },
    qI: function () {
        return ef;
    },
    qb: function () {
        return ec;
    },
    t5: function () {
        return X;
    },
    tP: function () {
        return j;
    },
    uA: function () {
        return Q;
    },
    vf: function () {
        return ep;
    },
    z: function () {
        return K;
    },
    z6: function () {
        return en;
    }
}),
    n(47120),
    n(653041),
    n(627341);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(192379),
    c = n(278074),
    d = n(754700),
    f = n(959078),
    _ = n(846519),
    p = n(780384),
    h = n(442837),
    m = n(410030),
    g = n(583434),
    E = n(706454),
    v = n(553795),
    b = n(70956),
    I = n(63063),
    T = n(930153),
    S = n(358085),
    y = n(617136),
    A = n(272008),
    N = n(569984),
    C = n(497505),
    R = n(918701),
    O = n(977156),
    D = n(665430),
    L = n(569743),
    x = n(585500),
    w = n(475595),
    M = n(566078),
    P = n(46140),
    k = n(981631),
    U = n(388032);
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, h.Wu)([N.Z], () => [...N.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, h.cj)([N.Z], () => ({
            isFetchingCurrentQuests: N.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.Z.lastFetchedCurrentQuests
        })),
        s = (0, O.cB)({ location: P.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !i && (n(!0), (0, A.xw)(), (0, L.Z)({ location: P.dr.USE_QUESTS }) && (0, A.w)(C.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, t, i, a]),
        {
            quests: r,
            isFetchingCurrentQuests: i
        }
    );
}
function B(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
((s = r || (r = {}))[(s.DESC = 0)] = 'DESC'), (s[(s.ASC = 1)] = 'ASC');
function Z(e) {
    let { quests: t, isFetchingCurrentQuests: n } = G({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = (function (e) {
            let t = u.useRef([]);
            return u.useMemo(() => {
                if (0 === e.length) return [];
                if (t.current.length > 0 && t.current.length === e.length) return t.current;
                let n = e
                    .sort((e, t) => {
                        var n, r, i, a, s, o;
                        let l = !(0, R.zi)(e),
                            u = !(0, R.zi)(t),
                            c = (0, R.Mi)(e, C.jn.QUEST_BAR) || (0, R.Mi)(e, C.jn.QUEST_BAR_V2),
                            d = (0, R.Mi)(t, C.jn.QUEST_BAR) || (0, R.Mi)(t, C.jn.QUEST_BAR_V2),
                            f = (0, R.Mi)(e, C.jn.GIFT_INVENTORY_FOR_YOU),
                            _ = (0, R.Mi)(t, C.jn.GIFT_INVENTORY_FOR_YOU),
                            p = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
                            h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : f !== _ ? (f ? -1 : 1) : p !== h ? (p ? -1 : 1) : l && u ? B(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : B(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
                    })
                    .map((e) => e.id);
                return (t.current = n), n;
            }, [e]);
        })(t),
        a = (function (e) {
            let t = u.useMemo(
                    () =>
                        e.filter((e) => {
                            var t, n;
                            let r = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
                            return r && i;
                        }),
                    [e]
                ),
                n = u.useRef([]);
            return u.useMemo(() => {
                if (0 === t.length) return [];
                if (n.current.length > 0 && n.current.length === t.length) return n.current;
                let e = t
                    .sort((e, t) => {
                        var n, r;
                        let i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
                        if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null)) return i ? -1 : 1;
                        let a = M.r.build(e.config).rewardsExpireAt;
                        return B(a, M.r.build(t.config).rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (n.current = e), e;
            }, [t]);
        })(t),
        s = [],
        o = [];
    for (let t of (s = 'all' === e ? i : a)) {
        let e = r.get(t);
        null != e && o.push(e);
    }
    return {
        quests: o,
        isFetchingCurrentQuests: n
    };
}
function F() {
    let e = u.useRef(!1),
        t = (0, h.Wu)([N.Z], () => Array.from(N.Z.claimedQuests.values())),
        n = (0, h.e7)([N.Z], () => N.Z.isFetchingClaimedQuests);
    return (
        u.useEffect(() => {
            !n && !e.current && ((e.current = !0), (0, A.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function V() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, R.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, R.zi)(t)) null != t && (0, R.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new _.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, R.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
                            }),
                                n.push(e);
                        };
                    i();
                }
            return () => {
                for (let e of n) e.stop();
            };
        }, [e, t]),
        n
    );
}
function j(e) {
    let t = V();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, h.e7)([E.default], () => E.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function Y(e) {
    return (0, h.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function W(e) {
    return u.useMemo(() => (0, R.Bz)(e), [e]);
}
((o = i || (i = {})).ALL = 'all'), (o.CLAIMED = 'claimed');
function K(e) {
    let t = Y(e),
        n = W(e),
        r = (function (e) {
            let t = (0, h.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, d.X.WATCH_VIDEO));
            return u.useMemo(() => (0, R.BM)(e), [e, t]);
        })(e);
    return t || n || r;
}
let z = (e) => {
    let t = u.useCallback(() => (0, R.il)(e), [e]),
        [n, r] = u.useState(t()),
        i = u.useCallback(() => r(t()), [t]),
        a = K(e);
    return (
        u.useEffect(() => {
            var t, n, r;
            if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                i();
                return;
            }
            let s = window.setInterval(() => {
                i();
            }, 1 * b.Z.Millis.SECOND);
            return () => {
                clearInterval(s), i();
            };
        }, [e, a, i]),
        n
    );
};
function q(e) {
    return u.useMemo(() => (0, R.b7)(e), [e]);
}
let Q = (e) => {
    let { quest: t, questContent: n } = e,
        r = ei({ quest: t });
    return () => {
        r
            ? (0, R.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: y.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, R.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: y.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function X(e, t, n) {
    let { targetMinutes: r } = z(e),
        i = q(e),
        a = Q({
            quest: e,
            questContent: n
        });
    if ((0, R.$J)(e) && !(0, R.Nj)({ quest: e }))
        return U.intl.format(U.t['l4S+cX'], {
            minutes: r,
            onClick: a,
            gameTitle: M.r.build(e.config).application.name
        });
    if ((0, R.$J)(e))
        return U.intl.format(U.t.Ajlcd3, {
            minutes: r,
            onClick: a,
            gameTitle: M.r.build(e.config).application.name
        });
    if ((0, R.q8)(e)) {
        var s;
        let t = null === (s = e.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoTitle;
        return null == t ? U.intl.string(U.t['o+e9ys']) : U.intl.formatToPlainString(U.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    let o = U.t['6zWtV1'];
    return (
        (0, R.Nj)({ quest: e }) && (o = U.t['wmOh/v']),
        U.intl.format(o, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function J() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-or-network' }),
        n = V();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, R.vR)(t, C.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, R.zE)(t.userStatus, C.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function $(e) {
    let t = (0, h.e7)([N.Z], () => N.Z.quests),
        n = u.useMemo(() => (0, R.Jg)(t, e), [e, t]);
    return j(n) ? null : n;
}
function ee(e) {
    var t;
    let n = (0, R.Xv)(e),
        { product: r, isFetching: i } = (0, g.T)(M.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function et(e) {
    return u.useMemo(
        () => ({
            handleComplete: () => (0, A.Wf)(e),
            handleProgress: (t) => (0, A.Wf)(e, t),
            handleResetStatusClick: () => (0, A.eT)(e),
            handleResetDismissibilityClick: () => (0, A.T0)(e),
            handleOverrideDeliveryClick: () => (0, A.EW)(e)
        }),
        [e]
    );
}
function en() {
    let { fetching: e, accounts: t } = (0, h.cj)([v.Z], () => ({
            fetching: v.Z.isFetching(),
            accounts: v.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i
        } = u.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === k.ABu.XBOX),
                r = e.filter((e) => e.type === k.ABu.PLAYSTATION),
                i = n.concat(r);
            return {
                xboxAccounts: n,
                playstationAccounts: r,
                xboxAndPlaystationAccounts: i
            };
        }, [t]);
    return {
        fetching: e,
        xboxAccounts: n,
        playstationAccounts: r,
        xboxAndPlaystationAccounts: i
    };
}
let er = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [a, s] = u.useState([]),
            [o, l] = u.useState(!1),
            c = (0, h.e7)([v.Z], () => v.Z.getAccounts());
        return (
            u.useEffect(() => {
                s((e) => e.filter((e) => e.type !== f.K.EXPIRED_CREDENTIAL));
            }, [c]),
            {
                startConsoleQuest: u.useCallback(async () => {
                    if (o) return;
                    null == r || r(), l(!0);
                    let e = null;
                    try {
                        (e = await (0, A.CS)(t, n)), s(e.errorHints);
                    } finally {
                        var a;
                        l(!1), null == i || i(null !== (a = null == e ? void 0 : e.errorHints) && void 0 !== a ? a : []);
                    }
                }, [o, r, i, n, t]),
                startingConsoleQuest: o,
                errorHints: a
            }
        );
    },
    ei = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = en(),
            r = K(t),
            i = 0 === n.length;
        return (0, R.$J)(t) && i && !r;
    },
    ea = () => {
        let { xboxAccounts: e, playstationAccounts: t } = en(),
            n = e.length > 0,
            r = t.length > 0,
            i = I.Z.getArticleURL(k.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = I.Z.getArticleURL(k.BhN.QUEST_HOW_TO_XBOX),
            s = U.intl.format(U.t.beN4DA, {
                psHelpdeskArticle: i,
                xboxHelpdeskArticle: a
            }),
            o = U.intl.format(U.t.HVS7np, { helpdeskArticle: r ? i : a });
        return {
            message: (n && !r) || (!n && r) ? o : s,
            xboxURL: a,
            playstationURL: i
        };
    };
function es(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        o = z(e).percentComplete > 0;
    if (s) return 4;
    if (a) return 3;
    if (o) return 2;
    else if (i) return 1;
    else return 0;
}
function eo(e) {
    let t = (0, h.e7)([E.default], () => E.default.locale),
        { percentComplete: n } = z(e),
        r = q(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, T.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function el(e) {
    var t, n;
    let r = z(e),
        i = (0, R.b7)(e),
        a = (0, x.D)({
            quest: e,
            taskDetails: r,
            location: P.dr.QUEST_HOME_DESKTOP,
            questContent: C.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = H(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return U.intl.formatToPlainString(U.t.lOVr0N, { claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function eu(e, t) {
    let [n, r] = (function (e) {
            let t = (0, h.e7)([N.Z], () => N.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, A.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, R.yH)(e), [e]),
        a = i.includes(P.cd.DESKTOP),
        s = i.includes(P.cd.CONSOLE),
        o = Y(e),
        l = W(e),
        f = (0, D.pF)({ location: P.dr.QUESTS_BAR }),
        _ = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ACTIVITY }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.WATCH_VIDEO }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => P.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => P.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => P.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        p = o ? P.cd.DESKTOP : l ? P.cd.CONSOLE : null;
    return [
        u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: _,
                    currentProgressingPlatform: p,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: P.cd.CONSOLE }, () => C.LI.CONSOLE)
                    .with({ currentProgressingPlatform: P.cd.DESKTOP }, () => C.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: P.cd.CONSOLE
                        },
                        () => C.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: P.cd.DESKTOP
                        },
                        () => C.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: P.cd.CONSOLE
                        },
                        () => C.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: P.cd.DESKTOP
                        },
                        () => C.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (s && a && f ? C.LI.SELECT : s ? C.LI.CONSOLE : C.LI.DESKTOP)
                    )
                    .exhaustive(),
            [s, a, f, _, p, n]
        ),
        i,
        r
    ];
}
function ec(e) {
    var t, n;
    let r = q(e),
        i = z(e),
        [a] = eu(e, i),
        s = j(e),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = d.T.DESKTOP.has(i.taskType),
        c = 0 === i.percentComplete,
        f = o && !l && !s && null == r && (u || (c && a === C.LI.DESKTOP)),
        _ = (0, S.isWeb)() && f,
        p = (0, S.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && f,
        h = [];
    return p && h.push(U.intl.string(U.t.MFGxFB)), _ && h.push(U.intl.string(U.t.BV6xDg)), h;
}
function ed(e) {
    var t;
    return null !== (t = (0, h.e7)([N.Z], () => N.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function ef(e) {
    let { mode: t, questContent: n, questId: r } = e,
        i = u.useRef(null);
    u.useEffect(() => {
        null != r &&
            i.current !== t &&
            ((0, y.Ic)({
                mode: t,
                prevMode: i.current,
                questContent: n,
                questId: r
            }),
            (i.current = t));
    }, [r, n, t]),
        u.useEffect(() => {
            if (null != r)
                return () => {
                    (0, y.Ic)({
                        mode: null,
                        prevMode: i.current,
                        questContent: n,
                        questId: r
                    });
                };
        }, [r, n]);
}
function e_(e) {
    var t, n;
    let r = (0, h.e7)([E.default], () => E.default.locale),
        i = z(e),
        [a] = eu(e, i),
        s = (0, D.pF)({ location: P.dr.QUESTS_BAR });
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return U.intl.string(U.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, T.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return U.intl.formatToPlainString(U.t.lVZaXF, { percent: e });
    }
    return s && a === C.LI.SELECT ? U.intl.string(U.t.EMrUHR) : (0, R.$J)(e) ? U.intl.string(U.t.mOrpXF) : U.intl.string(U.t['7e5k7O']);
}
function ep(e, t, n) {
    var r;
    let i = H(u.useMemo(() => M.r.build(e.config).rewardsExpireAt, [e.config])),
        a = z(e),
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        o = K(e),
        l = (0, x.D)({
            quest: e,
            location: P.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: a,
            useV2Variants: !0
        });
    if (s) return U.intl.formatToPlainString(U.t.APddvL, { expirationDate: i });
    if (t) return n === C.LI.SELECT ? U.intl.string(U.t.sWUpNz) : l;
    if ((0, R.q8)(e)) return U.intl.string(U.t['o+e9ys']);
    if (a.percentComplete > 0)
        return o
            ? (0, R.AV)({
                  quest: e,
                  taskDetails: a
              })
            : U.intl.string(U.t.mOrpXF);
    return U.intl.string(U.t.S6UUc3);
}
function eh(e, t) {
    let n = (0, h.e7)([N.Z], () => N.Z.getQuest(e), [e]),
        r = (0, m.ZP)(),
        i = u.useMemo(() => (null == n ? void 0 : n.config.features.includes(P.S7.QUESTS_CDN)) === !0, [n]);
    return u.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, w.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, p.wj)(r) ? k.BRd.DARK : k.BRd.LIGHT,
                      newCdn: i
                  }),
        [r, t, e, null == n ? void 0 : n.config.cosponsorMetadata, i]
    );
}
