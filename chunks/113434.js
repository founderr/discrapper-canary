n.d(t, {
    B4: function () {
        return e_;
    },
    B6: function () {
        return Y;
    },
    Bd: function () {
        return eu;
    },
    DU: function () {
        return et;
    },
    Fr: function () {
        return ee;
    },
    GI: function () {
        return ei;
    },
    GU: function () {
        return ef;
    },
    Gd: function () {
        return eg;
    },
    I: function () {
        return el;
    },
    J2: function () {
        return G;
    },
    Jf: function () {
        return Q;
    },
    KX: function () {
        return es;
    },
    OH: function () {
        return a;
    },
    Rf: function () {
        return q;
    },
    _Q: function () {
        return eo;
    },
    _s: function () {
        return ea;
    },
    bA: function () {
        return F;
    },
    e5: function () {
        return i;
    },
    eN: function () {
        return V;
    },
    eQ: function () {
        return eh;
    },
    iO: function () {
        return $;
    },
    kJ: function () {
        return en;
    },
    me: function () {
        return ec;
    },
    qI: function () {
        return ep;
    },
    qb: function () {
        return ed;
    },
    t5: function () {
        return J;
    },
    tP: function () {
        return H;
    },
    uA: function () {
        return X;
    },
    vf: function () {
        return em;
    },
    z: function () {
        return z;
    },
    z6: function () {
        return er;
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
    I = n(78839),
    b = n(70956),
    T = n(63063),
    S = n(930153),
    y = n(358085),
    A = n(617136),
    N = n(272008),
    C = n(569984),
    R = n(497505),
    O = n(918701),
    D = n(977156),
    L = n(665430),
    x = n(569743),
    w = n(585500),
    M = n(475595),
    P = n(566078),
    k = n(46140),
    U = n(981631),
    B = n(388032);
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, h.Wu)([C.Z], () => [...C.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, h.cj)([C.Z], () => ({
            isFetchingCurrentQuests: C.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: C.Z.lastFetchedCurrentQuests
        })),
        s = (0, D.cB)({ location: k.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !i && (n(!0), (0, N.xw)(), (0, x.Z)({ location: k.dr.USE_QUESTS }) && (0, N.w)(R.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, t, i, a]),
        {
            quests: r,
            isFetchingCurrentQuests: i
        }
    );
}
function Z(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
((s = r || (r = {}))[(s.DESC = 0)] = 'DESC'), (s[(s.ASC = 1)] = 'ASC');
function F(e) {
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
                        let l = !(0, O.zi)(e),
                            u = !(0, O.zi)(t),
                            c = (0, O.Mi)(e, R.jn.QUEST_BAR) || (0, O.Mi)(e, R.jn.QUEST_BAR_V2),
                            d = (0, O.Mi)(t, R.jn.QUEST_BAR) || (0, O.Mi)(t, R.jn.QUEST_BAR_V2),
                            f = (0, O.Mi)(e, R.jn.GIFT_INVENTORY_FOR_YOU),
                            _ = (0, O.Mi)(t, R.jn.GIFT_INVENTORY_FOR_YOU),
                            p = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
                            h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : f !== _ ? (f ? -1 : 1) : p !== h ? (p ? -1 : 1) : l && u ? Z(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : Z(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
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
                        let a = P.r.build(e.config).rewardsExpireAt;
                        return Z(a, P.r.build(t.config).rewardsExpireAt, 0);
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
function V() {
    let e = u.useRef(!1),
        t = (0, h.Wu)([C.Z], () => Array.from(C.Z.claimedQuests.values())),
        n = (0, h.e7)([C.Z], () => C.Z.isFetchingClaimedQuests);
    return (
        u.useEffect(() => {
            !n && !e.current && ((e.current = !0), (0, N.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function j() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, O.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, O.zi)(t)) null != t && (0, O.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new _.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, O.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
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
function H(e) {
    let t = j();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, h.e7)([E.default], () => E.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function W(e) {
    return (0, h.e7)([C.Z], () => C.Z.isProgressingOnDesktop(e.id));
}
function K(e) {
    return u.useMemo(() => (0, O.Bz)(e), [e]);
}
((o = i || (i = {})).ALL = 'all'), (o.CLAIMED = 'claimed');
function z(e) {
    let t = W(e),
        n = K(e),
        r = (function (e) {
            let t = (0, h.e7)([C.Z], () => C.Z.getOptimisticProgress(e.id, d.X.WATCH_VIDEO));
            return u.useMemo(() => (0, O.BM)(e), [e, t]);
        })(e);
    return t || n || r;
}
let q = (e) => {
    let t = u.useCallback(() => (0, O.il)(e), [e]),
        [n, r] = u.useState(t()),
        i = u.useCallback(() => r(t()), [t]),
        a = z(e);
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
function Q(e) {
    return u.useMemo(() => (0, O.b7)(e), [e]);
}
let X = (e) => {
    let { quest: t, questContent: n } = e,
        r = ea({ quest: t });
    return () => {
        r
            ? (0, O.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, O.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function J(e, t, n) {
    let { targetMinutes: r } = q(e),
        i = Q(e),
        a = X({
            quest: e,
            questContent: n
        });
    if ((0, O.$J)(e) && !(0, O.Nj)({ quest: e }))
        return B.intl.format(B.t['l4S+cX'], {
            minutes: r,
            onClick: a,
            gameTitle: P.r.build(e.config).application.name
        });
    if ((0, O.$J)(e))
        return B.intl.format(B.t.Ajlcd3, {
            minutes: r,
            onClick: a,
            gameTitle: P.r.build(e.config).application.name
        });
    if ((0, O.q8)(e)) {
        var s;
        let t = null === (s = e.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoTitle;
        return null == t ? B.intl.string(B.t['o+e9ys']) : B.intl.formatToPlainString(B.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    if ((0, O.pO)(e) && (0, O.KM)(e)) return B.intl.format(B.t['1NaRSk'], { minutes: r });
    let o = B.t['6zWtV1'];
    return (
        (0, O.Nj)({ quest: e }) && (o = B.t['wmOh/v']),
        B.intl.format(o, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function $() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-or-network' }),
        n = j();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, O.vR)(t, R.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, O.zE)(t.userStatus, R.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function ee(e) {
    let t = (0, h.e7)([C.Z], () => C.Z.quests),
        n = u.useMemo(() => (0, O.Jg)(t, e), [e, t]);
    return H(n) ? null : n;
}
function et(e) {
    var t;
    let n = (0, O.Xv)(e),
        { product: r, isFetching: i } = (0, g.T)(P.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function en(e) {
    return u.useMemo(
        () => ({
            handleComplete: () => (0, N.Wf)(e),
            handleProgress: (t) => (0, N.Wf)(e, t),
            handleResetStatusClick: () => (0, N.eT)(e),
            handleResetDismissibilityClick: () => (0, N.T0)(e),
            handleOverrideDeliveryClick: () => (0, N.EW)(e)
        }),
        [e]
    );
}
function er() {
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
                n = e.filter((e) => e.type === U.ABu.XBOX),
                r = e.filter((e) => e.type === U.ABu.PLAYSTATION),
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
let ei = (e) => {
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
                        (e = await (0, N.CS)(t, n)), s(e.errorHints);
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
    ea = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = er(),
            r = z(t),
            i = 0 === n.length;
        return (0, O.$J)(t) && i && !r;
    },
    es = () => {
        let { xboxAccounts: e, playstationAccounts: t } = er(),
            n = e.length > 0,
            r = t.length > 0,
            i = T.Z.getArticleURL(U.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = T.Z.getArticleURL(U.BhN.QUEST_HOW_TO_XBOX),
            s = B.intl.format(B.t.beN4DA, {
                psHelpdeskArticle: i,
                xboxHelpdeskArticle: a
            }),
            o = B.intl.format(B.t.HVS7np, { helpdeskArticle: r ? i : a });
        return {
            message: (n && !r) || (!n && r) ? o : s,
            xboxURL: a,
            playstationURL: i
        };
    };
function eo(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        o = q(e).percentComplete > 0;
    if (s) return 4;
    if (a) return 3;
    if (o) return 2;
    else if (i) return 1;
    else return 0;
}
function el(e) {
    let t = (0, h.e7)([E.default], () => E.default.locale),
        { percentComplete: n } = q(e),
        r = Q(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, S.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function eu(e) {
    var t, n;
    let r = q(e),
        i = (0, O.b7)(e),
        a = (0, w.D)({
            quest: e,
            taskDetails: r,
            location: k.dr.QUEST_HOME_DESKTOP,
            questContent: R.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = Y(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return B.intl.formatToPlainString(B.t.lOVr0N, { claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function ec(e, t) {
    let [n, r] = (function (e) {
            let t = (0, h.e7)([C.Z], () => C.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, N.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, O.yH)(e), [e]),
        a = i.includes(k.cd.DESKTOP),
        s = i.includes(k.cd.CONSOLE),
        o = W(e),
        l = K(e),
        f = (0, L.pF)({ location: k.dr.QUESTS_BAR }),
        _ = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => k.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => k.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ACTIVITY }, () => k.cd.DESKTOP)
                    .with({ taskType: d.X.WATCH_VIDEO }, () => k.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => k.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => k.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => k.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        p = o ? k.cd.DESKTOP : l ? k.cd.CONSOLE : null;
    return [
        u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: _,
                    currentProgressingPlatform: p,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: k.cd.CONSOLE }, () => R.LI.CONSOLE)
                    .with({ currentProgressingPlatform: k.cd.DESKTOP }, () => R.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: k.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: k.cd.DESKTOP
                        },
                        () => R.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: k.cd.CONSOLE
                        },
                        () => R.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: k.cd.DESKTOP
                        },
                        () => R.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (s && a && f ? R.LI.SELECT : s ? R.LI.CONSOLE : R.LI.DESKTOP)
                    )
                    .exhaustive(),
            [s, a, f, _, p, n]
        ),
        i,
        r
    ];
}
function ed(e) {
    var t, n;
    let r = Q(e),
        i = q(e),
        [a] = ec(e, i),
        s = H(e),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = d.T.DESKTOP.has(i.taskType),
        c = 0 === i.percentComplete,
        f = o && !l && !s && null == r && (u || (c && a === R.LI.DESKTOP)),
        _ = (0, y.isWeb)() && f && !(0, O.Gd)(e),
        p = (0, y.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && f,
        h = ef(e),
        m = [];
    for (let e of (p && m.push(B.intl.string(B.t.MFGxFB)), _ && m.push(B.intl.string(B.t.BV6xDg)), h)) m.push(e);
    return m;
}
function ef(e) {
    let t = (0, h.e7)([I.ZP], () => I.ZP.getPremiumSubscription()),
        n = (0, O.Bg)(e.config) && (null == t ? void 0 : t.isPurchasedExternally) === !0,
        r = [];
    return n && r.push(B.intl.string(B.t.nnfWPD)), r;
}
function e_(e) {
    var t;
    return null !== (t = (0, h.e7)([C.Z], () => C.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function ep(e) {
    let { mode: t, questContent: n, questId: r } = e,
        i = u.useRef(null);
    u.useEffect(() => {
        null != r &&
            i.current !== t &&
            ((0, A.Ic)({
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
                    (0, A.Ic)({
                        mode: null,
                        prevMode: i.current,
                        questContent: n,
                        questId: r
                    });
                };
        }, [r, n]);
}
function eh(e) {
    var t, n;
    let r = (0, h.e7)([E.default], () => E.default.locale),
        i = q(e),
        [a] = ec(e, i),
        s = (0, L.pF)({ location: k.dr.QUESTS_BAR });
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return B.intl.string(B.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, S.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return B.intl.formatToPlainString(B.t.lVZaXF, { percent: e });
    }
    return s && a === R.LI.SELECT ? B.intl.string(B.t.EMrUHR) : (0, O.$J)(e) ? B.intl.string(B.t.mOrpXF) : B.intl.string(B.t['7e5k7O']);
}
function em(e, t, n) {
    var r;
    let i = Y(u.useMemo(() => P.r.build(e.config).rewardsExpireAt, [e.config])),
        a = q(e),
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        o = z(e),
        l = (0, w.D)({
            quest: e,
            location: k.dr.QUESTS_BAR,
            questContent: R.jn.QUEST_BAR_V2,
            taskDetails: a,
            useV2Variants: !0
        });
    if (s) return B.intl.formatToPlainString(B.t.APddvL, { expirationDate: i });
    if (t) return n === R.LI.SELECT ? B.intl.string(B.t.sWUpNz) : l;
    if ((0, O.q8)(e)) return B.intl.string(B.t['o+e9ys']);
    if (a.percentComplete > 0)
        return o
            ? (0, O.AV)({
                  quest: e,
                  taskDetails: a
              })
            : B.intl.string(B.t.mOrpXF);
    return B.intl.string(B.t.S6UUc3);
}
function eg(e, t) {
    let n = (0, h.e7)([C.Z], () => C.Z.getQuest(e), [e]),
        r = (0, m.ZP)(),
        i = u.useMemo(() => (null == n ? void 0 : n.config.features.includes(k.S7.QUESTS_CDN)) === !0, [n]);
    return u.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, M.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: null != t ? t : (0, p.wj)(r) ? U.BRd.DARK : U.BRd.LIGHT,
                      newCdn: i
                  }),
        [r, t, e, null == n ? void 0 : n.config.cosponsorMetadata, i]
    );
}
