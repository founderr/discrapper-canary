n.d(t, {
    B4: function () {
        return eh;
    },
    B6: function () {
        return W;
    },
    Bd: function () {
        return ed;
    },
    DU: function () {
        return er;
    },
    Fr: function () {
        return en;
    },
    GI: function () {
        return eo;
    },
    I: function () {
        return ec;
    },
    J2: function () {
        return G;
    },
    Jf: function () {
        return $;
    },
    KX: function () {
        return el;
    },
    OH: function () {
        return a;
    },
    Rf: function () {
        return X;
    },
    _Q: function () {
        return eu;
    },
    _s: function () {
        return es;
    },
    bA: function () {
        return V;
    },
    e5: function () {
        return i;
    },
    eN: function () {
        return H;
    },
    iO: function () {
        return et;
    },
    kJ: function () {
        return ei;
    },
    me: function () {
        return eE;
    },
    qb: function () {
        return ef;
    },
    t5: function () {
        return ee;
    },
    tP: function () {
        return j;
    },
    uA: function () {
        return J;
    },
    z: function () {
        return q;
    },
    z6: function () {
        return ea;
    }
});
var r,
    i,
    a,
    o = n(47120);
var s = n(653041);
var l = n(627341);
var u = n(470079),
    c = n(278074),
    d = n(754700),
    _ = n(959078),
    E = n(846519),
    f = n(442837),
    h = n(583434),
    p = n(706454),
    m = n(553795),
    I = n(70956),
    T = n(63063),
    g = n(930153),
    S = n(358085),
    A = n(617136),
    v = n(272008),
    N = n(569984),
    O = n(497505),
    R = n(918701),
    C = n(977156),
    y = n(665430),
    L = n(569743),
    b = n(585500),
    D = n(566078),
    M = n(46140),
    P = n(981631),
    U = n(689938);
let w = -1,
    x = 1;
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fetchPolicy: 'cache-only' },
        [t, n] = u.useState(!1),
        r = (0, f.Wu)([N.Z], () => [...N.Z.quests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: a } = (0, f.cj)([N.Z], () => ({
            isFetchingCurrentQuests: N.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.Z.lastFetchedCurrentQuests
        })),
        o = (0, C.cB)({ location: M.dr.USE_QUESTS });
    return (
        u.useEffect(() => {
            if ('cache-only' !== e.fetchPolicy) ('cache-and-network' === e.fetchPolicy || ('cache-or-network' === e.fetchPolicy && 0 === a)) && o && !t && !i && (n(!0), (0, v.xw)(), (0, L.Z)({ location: M.dr.USE_QUESTS }) && (0, v.w)(O.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
        }, [e.fetchPolicy, o, t, i, a]),
        {
            quests: r,
            isFetchingCurrentQuests: i
        }
    );
}
function k(e) {
    return e.sort((e, t) => {
        var n, r, i, a, o, s;
        let l = !(0, R.zi)(e),
            u = !(0, R.zi)(t),
            c = (0, R.Mi)(e, O.jn.QUEST_BAR) || (0, R.Mi)(e, O.jn.QUEST_BAR_V2),
            d = (0, R.Mi)(t, O.jn.QUEST_BAR) || (0, R.Mi)(t, O.jn.QUEST_BAR_V2),
            _ = (0, R.Mi)(e, O.jn.GIFT_INVENTORY_FOR_YOU),
            E = (0, R.Mi)(t, O.jn.GIFT_INVENTORY_FOR_YOU),
            f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
            h = (null === (r = t.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null;
        return l !== u ? (l ? w : x) : c !== d && l && u ? (c ? w : x) : _ !== E ? (_ ? w : x) : f !== h ? (f ? w : x) : l && u ? B(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 1) : B(null === (i = e.config) || void 0 === i ? void 0 : i.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 0);
    });
}
function B(e, t, n) {
    let r = 0 === n ? w : x;
    return e.localeCompare(t) * r;
}
function F(e) {
    let t = u.useRef([]);
    return u.useMemo(() => {
        if (0 === e.length) return [];
        if (t.current.length > 0 && t.current.length === e.length) return t.current;
        let n = k(e).map((e) => e.id);
        return (t.current = n), n;
    }, [e]);
}
function Z(e) {
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
                if (i !== ((null === (r = t.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null)) return i ? w : x;
                let a = D.r.build(e.config).rewardsExpireAt;
                return B(a, D.r.build(t.config).rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
function V(e) {
    let { quests: t, isFetchingCurrentQuests: n } = G({ fetchPolicy: 'cache-and-network' }),
        r = new Map(t.map((e) => [e.id, e])),
        i = F(t),
        a = Z(t),
        o = [],
        s = [];
    for (let t of (o = 'all' === e ? i : a)) {
        let e = r.get(t);
        null != e && s.push(e);
    }
    return {
        quests: s,
        isFetchingCurrentQuests: n
    };
}
function H() {
    let e = u.useRef(!1),
        t = (0, f.Wu)([N.Z], () => Array.from(N.Z.claimedQuests.values())),
        n = (0, f.e7)([N.Z], () => N.Z.isFetchingClaimedQuests);
    return (
        u.useEffect(() => {
            !n && !e.current && ((e.current = !0), (0, v.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n
        }
    );
}
function Y() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-only' }),
        [n, r] = u.useState(() => new Map(e.map((e) => [e.id, (0, R.zi)(e)])));
    return (
        u.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, R.zi)(t)) null != t && (0, R.zi)(t) && r((e) => (e.has(t.id) ? e : new Map(e).set(t.id, !0)));
                else {
                    let e = new E.V7(),
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
    let t = Y();
    return u.useMemo(() => {
        var n;
        return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n;
    }, [e, t]);
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' },
        n = (0, f.e7)([p.default], () => p.default.locale);
    return u.useMemo(() => (null == e ? '' : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function K(e) {
    return (0, f.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function z(e) {
    return u.useMemo(() => (0, R.Bz)(e), [e]);
}
function q(e) {
    let t = K(e),
        n = z(e);
    return t || n;
}
!(function (e) {
    (e[(e.DESC = 0)] = 'DESC'), (e[(e.ASC = 1)] = 'ASC');
})(r || (r = {})),
    !(function (e) {
        (e.ALL = 'all'), (e.CLAIMED = 'claimed');
    })(i || (i = {}));
let Q = 1,
    X = (e) => {
        let t = u.useCallback(() => (0, R.il)(e), [e]),
            [n, r] = u.useState(t()),
            i = u.useCallback(() => r(t()), [t]),
            a = q(e);
        return (
            u.useEffect(() => {
                var t, n, r;
                if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null || !a) {
                    i();
                    return;
                }
                let o = window.setInterval(() => {
                    i();
                }, I.Z.Millis.SECOND * Q);
                return () => {
                    clearInterval(o), i();
                };
            }, [e, a, i]),
            n
        );
    };
function $(e) {
    return u.useMemo(() => (0, R.b7)(e), [e]);
}
let J = (e) => {
    let { quest: t, questContent: n } = e,
        r = es({ quest: t });
    return () => {
        r
            ? (0, R.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.CONNECT_CONSOLE_LINK
                  }
              )
            : (0, R.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                  }
              );
    };
};
function ee(e, t, n) {
    let { targetMinutes: r } = X(e),
        i = $(e),
        a = J({
            quest: e,
            questContent: n
        });
    if ((0, R.zK)(e, M.S7.IN_HOUSE_CONSOLE_QUEST))
        return U.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a
        });
    if ((0, R.$J)(e))
        return U.Z.Messages.QUESTS_CONSOLE_QUEST_TASK_WITH_LINK.format({
            minutes: r,
            onClick: a,
            gameTitle: D.r.build(e.config).application.name
        });
    if (null != i) return i.title;
    let o = U.Z.Messages.QUESTS_STREAM_TASK;
    return (
        (0, R.Nj)({ quest: e }) && (o = U.Z.Messages.QUESTS_PLAY_TASK),
        o.format({
            minutes: r,
            gameTitle: e.config.messages.gameTitle
        })
    );
}
function et() {
    let { quests: e, isFetchingCurrentQuests: t } = G({ fetchPolicy: 'cache-or-network' }),
        n = Y();
    return u.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, R.vR)(t, O.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null !== (i = n.get(t.id)) && void 0 !== i && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, R.zE)(t.userStatus, O.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function en(e) {
    let t = (0, f.e7)([N.Z], () => N.Z.quests),
        n = u.useMemo(() => (0, R.Jg)(t, e), [e, t]);
    return j(n) ? null : n;
}
function er(e) {
    var t;
    let n = (0, R.Xv)(e),
        { product: r, isFetching: i } = (0, h.T)(D.r.build(e).defaultReward.skuId);
    return {
        hasQuestCollectibles: n,
        avatarDecoration: null == r ? void 0 : null === (t = r.items) || void 0 === t ? void 0 : t[0],
        isFetching: i
    };
}
function ei(e) {
    return u.useMemo(
        () => ({
            handleComplete: () => (0, v.Wf)(e),
            handleProgress: (t) => (0, v.Wf)(e, t),
            handleResetStatusClick: () => (0, v.eT)(e),
            handleResetDismissibilityClick: () => (0, v.T0)(e),
            handleOverrideDeliveryClick: () => (0, v.EW)(e)
        }),
        [e]
    );
}
function ea() {
    let { fetching: e, accounts: t } = (0, f.cj)([m.Z], () => ({
            fetching: m.Z.isFetching(),
            accounts: m.Z.getAccounts()
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i
        } = u.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === P.ABu.XBOX),
                r = e.filter((e) => e.type === P.ABu.PLAYSTATION),
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
let eo = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [a, o] = u.useState([]),
            [s, l] = u.useState(!1),
            c = (0, f.e7)([m.Z], () => m.Z.getAccounts());
        return (
            u.useEffect(() => {
                o((e) => e.filter((e) => e.type !== _.K.EXPIRED_CREDENTIAL));
            }, [c]),
            {
                startConsoleQuest: u.useCallback(async () => {
                    if (s) return;
                    null == r || r(), l(!0);
                    let e = null;
                    try {
                        (e = await (0, v.CS)(t, n)), o(e.errorHints);
                    } finally {
                        var a;
                        l(!1), null == i || i(null !== (a = null == e ? void 0 : e.errorHints) && void 0 !== a ? a : []);
                    }
                }, [s, r, i, n, t]),
                startingConsoleQuest: s,
                errorHints: a
            }
        );
    },
    es = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ea(),
            r = q(t),
            i = 0 === n.length;
        return (0, R.$J)(t) && i && !r;
    },
    el = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ea(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = T.Z.getArticleURL(P.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = T.Z.getArticleURL(P.BhN.QUEST_HOW_TO_XBOX),
            s = U.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o
            }),
            l = U.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({ helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a
        };
    };
function eu(e) {
    var t, n, r;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        a = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        o = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        s = X(e).percentComplete > 0;
    if (o) return 4;
    if (a) return 3;
    if (s) return 2;
    else if (i) return 1;
    else return 0;
}
function ec(e) {
    let t = (0, f.e7)([p.default], () => p.default.locale),
        { percentComplete: n } = X(e),
        r = $(e),
        i = null != r ? r.completedRatio : n,
        a = 100 * i,
        o = null != r ? ''.concat(null == r ? void 0 : r.progress, '/').concat(null == r ? void 0 : r.target) : (0, g.T3)(t, i, { roundingMode: 'floor' });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o
    };
}
function ed(e) {
    var t, n;
    let r = X(e),
        i = (0, R.b7)(e),
        a = (0, b.D)({
            quest: e,
            taskDetails: r,
            location: M.dr.QUEST_HOME_DESKTOP,
            questContent: O.jn.QUEST_HOME_DESKTOP,
            useV2Variants: !0
        }),
        o = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        s = W(null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt);
    if (o) return U.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({ claimDate: s });
    if (null != i) return i.description;
    if (null != a) return a;
    return null;
}
function e_(e) {
    let t = (0, f.e7)([N.Z], () => N.Z.selectedTaskPlatform(e));
    return [t, u.useCallback((t) => (0, v.OR)(e, t), [e])];
}
function eE(e, t) {
    let [n, r] = e_(e.id),
        i = u.useMemo(() => (0, R.yH)(e), [e]),
        a = i.includes(M.cd.DESKTOP),
        o = i.includes(M.cd.CONSOLE),
        s = K(e),
        l = z(e),
        _ = (0, y.pF)({ location: M.dr.QUESTS_BAR }),
        E = u.useMemo(
            () =>
                (0, c.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_DESKTOP_V2 }, () => M.cd.DESKTOP)
                    .with({ taskType: d.X.STREAM_ON_DESKTOP }, () => M.cd.DESKTOP)
                    .with({ taskType: d.X.PLAY_ON_XBOX }, () => M.cd.CONSOLE)
                    .with({ taskType: d.X.PLAY_ON_PLAYSTATION }, () => M.cd.CONSOLE)
                    .exhaustive(),
            [t]
        ),
        f = s ? M.cd.DESKTOP : l ? M.cd.CONSOLE : null;
    return [
        u.useMemo(
            () =>
                (0, c.EQ)({
                    lastPlatformProgress: E,
                    currentProgressingPlatform: f,
                    selectedPlatform: n
                })
                    .with({ currentProgressingPlatform: M.cd.CONSOLE }, () => O.LI.CONSOLE)
                    .with({ currentProgressingPlatform: M.cd.DESKTOP }, () => O.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.CONSOLE
                        },
                        () => O.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: M.cd.DESKTOP
                        },
                        () => O.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.CONSOLE
                        },
                        () => O.LI.CONSOLE
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: M.cd.DESKTOP
                        },
                        () => O.LI.DESKTOP
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null
                        },
                        () => (o && a && _ ? O.LI.SELECT : o ? O.LI.CONSOLE : O.LI.DESKTOP)
                    )
                    .exhaustive(),
            [o, a, _, E, f, n]
        ),
        i,
        r
    ];
}
function ef(e) {
    var t, n;
    let r = $(e),
        i = X(e),
        [a] = eE(e, i),
        o = j(e),
        s = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        u = null == r,
        c = d.T.DESKTOP.has(i.taskType),
        _ = 0 === i.percentComplete,
        E = s && !l && !o && u && (c || (_ && a === O.LI.DESKTOP)),
        f = (0, S.isWeb)() && E,
        h = (0, S.isMac)() && i.taskType === d.X.STREAM_ON_DESKTOP && E,
        p = [];
    return h && p.push(U.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP), f && p.push(U.Z.Messages.QUESTS_PROGRESS_WEB_TIP), p;
}
function eh(e) {
    var t;
    return null !== (t = (0, f.e7)([N.Z], () => N.Z.quests).get(e)) && void 0 !== t ? t : null;
}
!(function (e) {
    (e[(e.UNACCEPTED = 0)] = 'UNACCEPTED'), (e[(e.ACCEPTED = 1)] = 'ACCEPTED'), (e[(e.IN_PROGRESS = 2)] = 'IN_PROGRESS'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CLAIMED = 4)] = 'CLAIMED');
})(a || (a = {}));
