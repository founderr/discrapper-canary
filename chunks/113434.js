n.d(t, {
    B4: function () {
        return eu;
    },
    B6: function () {
        return V;
    },
    Bd: function () {
        return es;
    },
    DU: function () {
        return J;
    },
    Fr: function () {
        return X;
    },
    GI: function () {
        return et;
    },
    Gd: function () {
        return e_;
    },
    I: function () {
        return ea;
    },
    J2: function () {
        return k;
    },
    Jf: function () {
        return K;
    },
    KX: function () {
        return er;
    },
    OH: function () {
        return a;
    },
    Rf: function () {
        return W;
    },
    _Q: function () {
        return ei;
    },
    _s: function () {
        return en;
    },
    bA: function () {
        return G;
    },
    e5: function () {
        return i;
    },
    eN: function () {
        return B;
    },
    eQ: function () {
        return ed;
    },
    iO: function () {
        return Q;
    },
    kJ: function () {
        return $;
    },
    me: function () {
        return eo;
    },
    qI: function () {
        return ec;
    },
    qb: function () {
        return el;
    },
    t5: function () {
        return q;
    },
    tP: function () {
        return F;
    },
    uA: function () {
        return z;
    },
    vf: function () {
        return ef;
    },
    z: function () {
        return Y;
    },
    z6: function () {
        return ee;
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
    p = n(442837),
    h = n(583434),
    m = n(706454),
    g = n(553795),
    E = n(70956),
    v = n(63063),
    I = n(930153),
    b = n(358085),
    T = n(617136),
    S = n(272008),
    y = n(569984),
    A = n(497505),
    N = n(918701),
    C = n(977156),
    R = n(665430),
    O = n(569743),
    D = n(585500),
    L = n(475595),
    x = n(566078),
    w = n(46140),
    M = n(981631),
    P = n(388032);
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, p.Wu)([y.Z], () => [...y.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, p.cj)([y.Z], () => ({
            isFetchingCurrentQuests: y.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: y.Z.lastFetchedCurrentQuests
        })),
        s = (0, C.cB)({ location: w.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && s && !t && !i && (n(!0), (0, S.xw)(), (0, O.Z)({ location: w.dr.USE_QUESTS }) && (0, S.w)(A.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, s, t, i, a]),
        {
            quests: r,
            isFetchingCurrentQuests: i
        }
    );
}
function U(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
((s = r || (r = {}))[(s.DESC = 0)] = 'DESC'), (s[(s.ASC = 1)] = 'ASC');
function G(e) {
    let { quests: t, isFetchingCurrentQuests: n } = k({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = (function (e) {
            let t = u.useRef([]);
            return u.useMemo(() => {
                if (0 === e.length) return [];
                if (t.current.length > 0 && t.current.length === e.length) return t.current;
                let n = e
                    .sort((e, t) => {
                        var n, r, i, a, s, o;
                        let l = !(0, N.zi)(e),
                            u = !(0, N.zi)(t),
                            c = (0, N.Mi)(e, A.jn.QUEST_BAR) || (0, N.Mi)(e, A.jn.QUEST_BAR_V2),
                            d = (0, N.Mi)(t, A.jn.QUEST_BAR) || (0, N.Mi)(t, A.jn.QUEST_BAR_V2),
                            f = (0, N.Mi)(e, A.jn.GIFT_INVENTORY_FOR_YOU),
                            _ = (0, N.Mi)(t, A.jn.GIFT_INVENTORY_FOR_YOU),
                            p = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
                            h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
                        return l !== u ? (l ? -1 : 1) : c !== d && l && u ? (c ? -1 : 1) : f !== _ ? (f ? -1 : 1) : p !== h ? (p ? -1 : 1) : l && u ? U(null === (s = e.config) || void 0 === s ? void 0 : s.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : U(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
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
                        let a = x.r.build(e.config).rewardsExpireAt;
                        return U(a, x.r.build(t.config).rewardsExpireAt, 0);
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
function B() {
    let e = u.useRef(!1),
        t = (0, p.Wu)([y.Z], () => Array.from(y.Z.claimedQuests.values())),
        n = (0, p.e7)([y.Z], () => y.Z.isFetchingClaimedQuests);
    return (
        u.useEffect(() => {
            !n && !e.current && ((e.current = !0), (0, S.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function Z() {
    let { quests: e, isFetchingCurrentQuests: t } = k({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, N.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, N.zi)(t)) null != t && (0, N.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new _.V7(),
                        i = () => {
                            let a = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(a, () => {
                                (0, N.zi)(t) ? r((e) => new Map(e).set(t.id, !0)) : i();
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
function F(e) {
    let t = Z();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, p.e7)([m.default], () => m.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function j(e) {
    return (0, p.e7)([y.Z], () => y.Z.isProgressingOnDesktop(e.id));
}
function H(e) {
    return u.useMemo(() => (0, N.Bz)(e), [e]);
}
((o = i || (i = {})).ALL = 'all'), (o.CLAIMED = 'claimed');
function Y(e) {
    let t = j(e),
        n = H(e),
        r = (function (e) {
            let t = (0, p.e7)([y.Z], () => y.Z.getOptimisticProgress(e.id, d.X.WATCH_VIDEO));
            return u.useMemo(() => (0, N.BM)(e), [e, t]);
        })(e);
    return t || n || r;
}
let W = (e) => {
    let t = u.useCallback(() => (0, N.il)(e), [e]),
        [n, r] = u.useState(t()),
        i = u.useCallback(() => r(t()), [t]),
        a = Y(e);
    return (
        u.useEffect(() => {
            var t, n, r;
            if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                i();
                return;
            }
            let s = window.setInterval(() => {
                i();
            }, 1 * E.Z.Millis.SECOND);
            return () => {
                clearInterval(s), i();
            };
        }, [e, a, i]),
        n
    );
};
function K(e) {
    return u.useMemo(() => (0, N.b7)(e), [e]);
}
let z = (e) => {
    let { quest: t, questContent: n } = e,
        r = en({ quest: t });
    return () => {
        r
            ? (0, N.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, N.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: T.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function q(e, t, n) {
    let { targetMinutes: r } = W(e),
        i = K(e),
        a = z({
            quest: e,
            questContent: n
        });
    if ((0, N.$J)(e) && !(0, N.Nj)({ quest: e }))
        return P.intl.format(P.t['l4S+cX'], {
            minutes: r,
            onClick: a,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, N.$J)(e))
        return P.intl.format(P.t.Ajlcd3, {
            minutes: r,
            onClick: a,
            gameTitle: x.r.build(e.config).application.name
        });
    if ((0, N.q8)(e)) {
        var s;
        let t = null === (s = e.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoTitle;
        return null == t ? P.intl.string(P.t['o+e9ys']) : P.intl.formatToPlainString(P.t['9m9MnZ'], { videoTitle: t });
    }
    if (null != i) return i.title;
    let o = P.t['6zWtV1'];
    return (
        (0, N.Nj)({ quest: e }) && (o = P.t['wmOh/v']),
        P.intl.format(o, {
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function Q() {
    let { quests: e, isFetchingCurrentQuests: t } = k({ fetchPolicy: 'cache-or-network' }),
        n = Z();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, N.vR)(t, A.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, N.zE)(t.userStatus, A.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function X(e) {
    let t = (0, p.e7)([y.Z], () => y.Z.quests),
        n = u.useMemo(() => (0, N.Jg)(t, e), [e, t]);
    return F(n) ? null : n;
}
function J(e) {
    var t;
    let n = (0, N.Xv)(e),
        { product: r, isFetching: i } = (0, h.T)(x.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function $(e) {
    return u.useMemo(
        () => ({
            handleComplete: () => (0, S.Wf)(e),
            handleProgress: (t) => (0, S.Wf)(e, t),
            handleResetStatusClick: () => (0, S.eT)(e),
            handleResetDismissibilityClick: () => (0, S.T0)(e),
            handleOverrideDeliveryClick: () => (0, S.EW)(e)
        }),
        [e]
    );
}
function ee() {
    let { fetching: e, accounts: t } = (0, p.cj)([g.Z], () => ({
            fetching: g.Z.isFetching(),
            accounts: g.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i
        } = u.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === M.ABu.XBOX),
                r = e.filter((e) => e.type === M.ABu.PLAYSTATION),
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
let et = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [a, s] = u.useState([]),
            [o, l] = u.useState(!1),
            c = (0, p.e7)([g.Z], () => g.Z.getAccounts());
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
                        (e = await (0, S.CS)(t, n)), s(e.errorHints);
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
    en = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ee(),
            r = Y(t),
            i = 0 === n.length;
        return (0, N.$J)(t) && i && !r;
    },
    er = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ee(),
            n = e.length > 0,
            r = t.length > 0,
            i = v.Z.getArticleURL(M.BhN.QUEST_HOW_TO_PLAYSTATION),
            a = v.Z.getArticleURL(M.BhN.QUEST_HOW_TO_XBOX),
            s = P.intl.format(P.t.beN4DA, {
                psHelpdeskArticle: i,
                xboxHelpdeskArticle: a
            }),
            o = P.intl.format(P.t.HVS7np, { helpdeskArticle: r ? i : a });
        return {
            message: (n && !r) || (!n && r) ? o : s,
            xboxURL: a,
            playstationURL: i
        };
    };
function ei(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        o = W(e).percentComplete > 0;
    if (s) return 4;
    if (a) return 3;
    if (o) return 2;
    else if (i) return 1;
    else return 0;
}
function ea(e) {
    let t = (0, p.e7)([m.default], () => m.default.locale),
        { percentComplete: n } = W(e),
        r = K(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        s = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, I.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: s
    };
}
function es(e) {
    var t, n;
    let r = W(e),
        i = (0, N.b7)(e),
        a = (0, D.D)({
            quest: e,
            taskDetails: r,
            location: w.dr.QUEST_HOME_DESKTOP,
            questContent: A.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = V(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (s) return P.intl.formatToPlainString(P.t.lOVr0N, { claimDate: o });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
((l = a || (a = {}))[(l.UNACCEPTED = 0)] = 'UNACCEPTED'), (l[(l.ACCEPTED = 1)] = 'ACCEPTED'), (l[(l.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (l[(l.COMPLETED = 3)] = 'COMPLETED'), (l[(l.CLAIMED = 4)] = 'CLAIMED');
function eo(e, t) {
    let [n, r] = (function (e) {
            let t = (0, p.e7)([y.Z], () => y.Z.selectedTaskPlatform(e));
            return [t, u.useCallback((t) => (0, S.OR)(e, t), [e])];
        })(e.id),
        i = u.useMemo(() => (0, N.yH)(e), [e]),
        a = i.includes(w.cd.DESKTOP),
        s = i.includes(w.cd.CONSOLE),
        o = j(e),
        l = H(e),
        f = (0, R.pF)({ location: w.dr.QUESTS_BAR }),
        _ = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => w.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => w.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ACTIVITY }, () => w.cd.DESKTOP)
                    .with({ taskType: d.X.WATCH_VIDEO }, () => w.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => w.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => w.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => w.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        h = o ? w.cd.DESKTOP : l ? w.cd.CONSOLE : null;
    return [
        u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: _,
                    currentProgressingPlatform: h,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: w.cd.CONSOLE }, () => A.LI.CONSOLE)
                    .with({ currentProgressingPlatform: w.cd.DESKTOP }, () => A.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: w.cd.CONSOLE
                        },
                        () => A.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: w.cd.DESKTOP
                        },
                        () => A.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: w.cd.CONSOLE
                        },
                        () => A.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: w.cd.DESKTOP
                        },
                        () => A.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (s && a && f ? A.LI.SELECT : s ? A.LI.CONSOLE : A.LI.DESKTOP)
                    )
                    .exhaustive(),
            [s, a, f, _, h, n]
        ),
        i,
        r
    ];
}
function el(e) {
    var t, n;
    let r = K(e),
        i = W(e),
        [a] = eo(e, i),
        s = F(e),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = d.T.DESKTOP.has(i.taskType),
        c = 0 === i.percentComplete,
        f = o && !l && !s && null == r && (u || (c && a === A.LI.DESKTOP)),
        _ = (0, b.isWeb)() && f,
        p = (0, b.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && f,
        h = [];
    return p && h.push(P.intl.string(P.t.MFGxFB)), _ && h.push(P.intl.string(P.t.BV6xDg)), h;
}
function eu(e) {
    var t;
    return null !== (t = (0, p.e7)([y.Z], () => y.Z.quests).get(e)) && void 0 !== t ? t : null;
}
function ec(e) {
    let { mode: t, questContent: n, questId: r } = e,
        i = u.useRef(null);
    u.useEffect(() => {
        null != r &&
            i.current !== t &&
            ((0, T.Ic)({
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
                    (0, T.Ic)({
                        mode: null,
                        prevMode: i.current,
                        questContent: n,
                        questId: r
                    });
                };
        }, [r, n]);
}
function ed(e) {
    var t, n;
    let r = (0, p.e7)([m.default], () => m.default.locale),
        i = W(e),
        [a] = eo(e, i),
        s = (0, R.pF)({ location: w.dr.QUESTS_BAR });
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return P.intl.string(P.t['ij5E//']);
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && i.percentComplete > 0) {
        let e = (0, I.T3)(r, i.percentComplete, { roundingMode: 'floor' });
        return P.intl.formatToPlainString(P.t.lVZaXF, { percent: e });
    }
    return s && a === A.LI.SELECT ? P.intl.string(P.t.EMrUHR) : (0, N.$J)(e) ? P.intl.string(P.t.mOrpXF) : P.intl.string(P.t['7e5k7O']);
}
function ef(e, t, n) {
    var r;
    let i = V(u.useMemo(() => x.r.build(e.config).rewardsExpireAt, [e.config])),
        a = W(e),
        s = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        o = Y(e),
        l = (0, D.D)({
            quest: e,
            location: w.dr.QUESTS_BAR,
            questContent: A.jn.QUEST_BAR_V2,
            taskDetails: a,
            useV2Variants: !0
        });
    if (s) return P.intl.formatToPlainString(P.t.APddvL, { expirationDate: i });
    if (t) return n === A.LI.SELECT ? P.intl.string(P.t.sWUpNz) : l;
    if ((0, N.q8)(e)) return P.intl.string(P.t['o+e9ys']);
    if (a.percentComplete > 0)
        return o
            ? (0, N.AV)({
                  quest: e,
                  taskDetails: a
              })
            : P.intl.string(P.t.mOrpXF);
    return P.intl.string(P.t.S6UUc3);
}
function e_(e, t) {
    let n = (0, p.e7)([y.Z], () => y.Z.getQuest(e), [e]),
        r = u.useMemo(() => (null == n ? void 0 : n.config.features.includes(w.S7.QUESTS_CDN)) === !0, [n]);
    return u.useMemo(
        () =>
            (null == n ? void 0 : n.config.cosponsorMetadata) == null
                ? null
                : (0, L.Rt)(e, n.config.cosponsorMetadata.logotype, {
                      theme: t,
                      newCdn: r
                  }),
        [t, e, null == n ? void 0 : n.config.cosponsorMetadata, r]
    );
}
