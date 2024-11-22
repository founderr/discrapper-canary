n.d(t, {
    $H: function () {
        return ep;
    },
    $J: function () {
        return eM;
    },
    AV: function () {
        return $;
    },
    BM: function () {
        return eU;
    },
    Bg: function () {
        return ei;
    },
    Bz: function () {
        return ek;
    },
    C1: function () {
        return eH;
    },
    C9: function () {
        return ej;
    },
    CE: function () {
        return U;
    },
    FE: function () {
        return eE;
    },
    Fs: function () {
        return eY;
    },
    GN: function () {
        return ee;
    },
    Jg: function () {
        return ec;
    },
    K: function () {
        return eo;
    },
    Kr: function () {
        return er;
    },
    Mi: function () {
        return X;
    },
    Nj: function () {
        return ef;
    },
    OG: function () {
        return eF;
    },
    PM: function () {
        return q;
    },
    Qe: function () {
        return O;
    },
    Rs: function () {
        return z;
    },
    U3: function () {
        return F;
    },
    UZ: function () {
        return eh;
    },
    V$: function () {
        return eZ;
    },
    WP: function () {
        return V;
    },
    Xh: function () {
        return K;
    },
    Xv: function () {
        return ea;
    },
    ZZ: function () {
        return w;
    },
    _: function () {
        return Q;
    },
    _D: function () {
        return x;
    },
    _j: function () {
        return eV;
    },
    b7: function () {
        return eO;
    },
    f2: function () {
        return ev;
    },
    fY: function () {
        return eB;
    },
    gI: function () {
        return eG;
    },
    hQ: function () {
        return H;
    },
    iQ: function () {
        return G;
    },
    il: function () {
        return eR;
    },
    lQ: function () {
        return P;
    },
    o9: function () {
        return eg;
    },
    oo: function () {
        return ed;
    },
    q6: function () {
        return Z;
    },
    q8: function () {
        return ew;
    },
    si: function () {
        return eL;
    },
    t2: function () {
        return J;
    },
    tF: function () {
        return k;
    },
    u7: function () {
        return eK;
    },
    vQ: function () {
        return es;
    },
    vR: function () {
        return el;
    },
    xn: function () {
        return en;
    },
    yH: function () {
        return eW;
    },
    yI: function () {
        return Y;
    },
    ys: function () {
        return eu;
    },
    zE: function () {
        return et;
    },
    zK: function () {
        return em;
    },
    zi: function () {
        return B;
    }
}),
    n(627341),
    n(47120),
    n(411104),
    n(571269),
    n(298267),
    n(653041);
var r = n(991998),
    i = n(392711),
    a = n(278074),
    s = n(754700),
    o = n(551910),
    l = n(887003),
    u = n(742635),
    c = n(570140),
    d = n(230711),
    f = n(782568);
n(597688);
var _ = n(231757);
n(706454);
var p = n(572004),
    h = n(70956),
    m = n(630388),
    g = n(823379),
    E = n(49012),
    v = n(960048),
    b = n(617136);
n(272008);
var I = n(569984),
    T = n(497505),
    S = n(566078),
    y = n(312046),
    A = n(46140),
    N = n(981631),
    C = n(701488),
    R = n(388032);
function O(e) {
    try {
        return (0, a.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let D = (e) => e.application_id === C.Ev || e.platform === N.M7m.XBOX,
    L = (e) => e.platform === N.M7m.PS4 || e.platform === N.M7m.PS5;
function x(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = S.r.build(t.config).application.name.toLowerCase();
    return D(e) || L(e) ? n === r : null != e.application_id && M(e.application_id, t);
}
function w(e, t) {
    for (let [n, r] of e) if (x(t, r) && !B(r)) return r;
}
function M(e, t) {
    return null != S.r.build(t.config).application.ids.find((t) => t === e);
}
function P(e, t) {
    let n;
    for (let [r, i] of e)
        if (M(t, i) && !B(i)) {
            n = i;
            break;
        }
    return n;
}
function k(e, t) {
    let n = P(e, t.applicationId);
    if (null != n) return n;
    for (let [t, n] of e)
        if (
            !B(n) &&
            (function (e) {
                let t = S.r.build(e.config).application.id;
                return e_(e) && t === A.Ts;
            })(n)
        )
            return n;
}
function U(e, t) {
    return Array.from(e.values()).find((e) => M(t, e) && !B(e) && ef({ quest: e }));
}
function B(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function G(e) {
    if (!B(e)) return !1;
    let t = Date.now() - 2592000000,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function Z(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, y.Q)(e))
        .exhaustive();
}
function F(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: null !== (t = e.claimed_tier) && void 0 !== t ? t : null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: (function (e) {
            let t = {};
            for (let [r, i] of Object.entries(e)) {
                var n;
                t[r] = {
                    eventName: i.event_name,
                    value: i.value,
                    updatedAt: i.updated_at,
                    completedAt: i.completed_at,
                    heartbeat:
                        null == (n = i.heartbeat)
                            ? null
                            : {
                                  lastBeatAt: n.last_beat_at,
                                  expiresAt: n.expires_at
                              }
                };
            }
            return t;
        })(e.progress)
    };
}
function V(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: Z(e.config),
        userStatus: null == e.user_status ? null : F(e.user_status),
        targetedContent: e.targeted_content
    };
}
function j(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video
    };
}
function H(e) {
    var t;
    return {
        id: e.id,
        config: {
            id: (t = e.config).id,
            startsAt: t.starts_at,
            expiresAt: t.expires_at,
            features: t.features,
            messages: {
                questName: t.messages.quest_name,
                gamePublisher: t.messages.game_publisher,
                gameTitle: t.messages.game_title
            },
            assets: {
                hero: t.assets.hero,
                heroVideo: t.assets.hero_video,
                questBarHero: t.assets.quest_bar_hero,
                questBarHeroVideo: t.assets.quest_bar_hero_video,
                gameTile: t.assets.game_tile,
                logotype: t.assets.logotype
            },
            colors: {
                primary: t.colors.primary,
                secondary: t.colors.secondary
            },
            rewards: t.rewards.map(j),
            cosponsorMetadata: (0, y.s)(t.cosponsor_metadata)
        },
        userStatus: null == e.user_status ? null : F(e.user_status)
    };
}
function Y(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null !== (t = e.tier) && void 0 !== t ? t : null
    };
}
function W(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: (function (e) {
            if ((null == e ? void 0 : e.quest_rewards) == null) return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
                case l.w.IN_GAME:
                    return { questRewards: { reward: { tag: t.reward.tag } } };
                case l.w.REWARD_CODE:
                    return {
                        questRewards: {
                            reward: {
                                tag: t.reward.tag,
                                rewardCode: Y(t.reward.reward_code)
                            }
                        }
                    };
            }
        })(e.tenant_metadata)
    };
}
function K(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(W),
        errors: e.errors
    };
}
let z = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function q(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.id);
    if (null != i && !B(i)) return i;
}
function Q(e, t) {
    for (let [n, r] of e) if (!B(r) && r.targetedContent.includes(t)) return r;
    return null;
}
function X(e, t) {
    return e.targetedContent.includes(t);
}
let J = (e) => {
    switch (e) {
        case T.y$.XBOX:
            return R.intl.string(R.t.G84UWV);
        case T.y$.PLAYSTATION:
            return R.intl.string(R.t['6IeKx8']);
        case T.y$.SWITCH:
            return R.intl.string(R.t['1pp0sr']);
        case T.y$.PC:
            return R.intl.string(R.t['YK+wUl']);
        case T.y$.CROSS_PLATFORM:
            return R.intl.string(R.t.UWVbzc);
    }
};
function $(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return R.intl.string(R.t.BzFeTE);
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? R.intl.string(R.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? R.intl.string(R.t.JNx8sL) : t > 0 ? R.intl.string(R.t.JMbfnZ) : R.intl.string(R.t['7e5k7O']);
    }
    return R.intl.formatToPlainString(R.t.EQa7oq, { questName: r.config.messages.questName });
}
function ee(e) {
    return Object.keys(A.a_).includes(T.jn[e]);
}
function et(e, t) {
    if (!ee(t)) return !1;
    let n = T.jn[t];
    return (0, m.yE)(e.dismissedQuestContent, A.a_[n]);
}
function en(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null;
}
function er(e) {
    let t = en(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        s = Math.floor(a / 30),
        o = s + (a % 30 >= 25 ? 1 : 0);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return R.intl.formatToPlainString(R.t.PClsr6, { years: e });
    }
    if (o > 0) return R.intl.formatToPlainString(R.t.kridzM, { months: o });
    {
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return R.intl.formatToPlainString(R.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return R.intl.formatToPlainString(R.t.EmoBDw, { weeks: t });
        }
    }
}
function ei(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.w.FRACTIONAL_PREMIUM);
}
function ea(e) {
    return null != en(e);
}
function es(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.w.IN_GAME);
}
function eo(e) {
    var t;
    return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === l.w.IN_GAME)) && void 0 !== t ? t : null;
}
function el(e, t) {
    return e.targetedContent.includes(t);
}
function eu(e, t) {
    v.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function ec(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = w(e, n);
        if (null != t) return t;
    }
    return null;
}
function ed(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === o.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === l.w.REWARD_CODE);
}
function ef(e) {
    var t;
    let { quest: n } = e;
    return (t = n.config).taskConfig.type === u.L.FIRST_PARTY && null != t.taskConfig.tasks[s.X.PLAY_ON_DESKTOP];
}
function e_(e) {
    return e.config.taskConfig.type === u.L.FIRST_PARTY && null != e.config.taskConfig.tasks[s.X.PLAY_ACTIVITY];
}
function ep(e) {
    return null != e && ef({ quest: e });
}
function eh(e, t) {
    return S.r.build(t.config).application.id === e;
}
function em(e, t) {
    return S.r.build(e.config).features.has(t);
}
function eg(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === l.w.REWARD_CODE ? r : null;
}
function eE(e, t) {
    let n = S.r.build(e.config).application.link;
    (0, E.q)({
        href: n,
        onConfirm: () => {
            (0, b._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }),
                (0, f.Z)(n);
        }
    });
}
let ev = (e, t) => {
        (0, b._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }),
            (0, p.JG)(z(e));
    },
    eb = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eI = (e) => ek(e) || I.Z.isProgressingOnDesktop(e.id),
    eT = (e, t) => {
        var n, r, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (r = a[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !eI(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, i.floor)(l / h.Z.Millis.SECOND, 2);
    },
    eS = (e, t) => {
        var n, r, i, a, s;
        let o = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (s = null !== (a = null == o ? void 0 : o.value) && void 0 !== a ? a : null === (i = e.userStatus) || void 0 === i ? void 0 : i.streamProgressSeconds) && void 0 !== s ? s : 0;
        if (ew(e)) {
            let n = I.Z.getOptimisticProgress(e.id, t.eventName);
            return null == n || n < l ? l : n;
        }
        return l + eT(e, t);
    },
    ey = (e, t) => {
        var n;
        let r = t.target;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(0.99 * r, eS(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    eA = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = s.T.ALL } = e,
            o = r.config.taskConfig;
        if (o.type !== u.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != i ? i : null === (t = Object.values(o.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            c = null !== (n = o.tasks[l]) && void 0 !== n ? n : o.tasks[s.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = c.target,
            f = ey(r, c);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.round(d / h.Z.Seconds.MINUTE),
            percentComplete: eb(d, f),
            taskType: l
        };
    },
    eN = (e) => (s.T.ALL.has(e) ? e : null),
    eC = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = s.T.ALL } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt,
                    a = null == t ? void 0 : null === (r = t.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
                if (null != i && null != a) return new Date(i).valueOf() > new Date(a).valueOf() ? -1 : 1;
                if (null == i && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null) return new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1;
                if (null != i && null == a) return -1;
                else return 1;
            })
            .filter(g.lm)) {
            let t = eN(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eA({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eA({
            quest: r,
            includeTaskTypes: i
        });
    },
    eR = (e, t) => {
        if (e.config.taskConfig.type !== u.L.FIRST_PARTY)
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: s.X.STREAM_ON_DESKTOP
            };
        if (ex(e))
            return eC({
                quest: e,
                includeTaskTypes: null != t ? t : ek(e) ? s.T.CONSOLE : s.T.ALL
            });
        if (ew(e))
            return eA({
                quest: e,
                taskType: s.X.WATCH_VIDEO
            });
        if (ep(e))
            return eA({
                quest: e,
                taskType: s.X.PLAY_ON_DESKTOP
            });
        if (e_(e))
            return eA({
                quest: e,
                taskType: s.X.PLAY_ACTIVITY
            });
        else
            return eA({
                quest: e,
                taskType: s.X.STREAM_ON_DESKTOP
            });
    };
function eO(e) {
    var t, n, r, i;
    if (e.config.taskConfig.type !== u.L.THIRD_PARTY || 0 === Object.keys(e.config.taskConfig.tasks).length) return null;
    let a = Object.keys(e.config.taskConfig.tasks)[0],
        s = e.config.taskConfig.tasks[a],
        o = null !== (i = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t.value) && void 0 !== i ? i : 0,
        l = eb(s.target, o);
    return {
        title: s.title,
        description: s.description,
        target: s.target,
        progress: o,
        completedRatio: l
    };
}
let eD = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]);
function eL(e) {
    let t = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(t / 60),
        seconds: Math.floor(t % 60)
    };
}
let ex = eD([s.X.PLAY_ON_XBOX, s.X.PLAY_ON_PLAYSTATION]),
    ew = eD([s.X.WATCH_VIDEO]);
function eM(e) {
    return ex(e);
}
let eP = (e, t) => {
    var n, r;
    let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function ek(e) {
    return null != e.userStatus && (eP(e.userStatus, s.X.PLAY_ON_XBOX) || eP(e.userStatus, s.X.PLAY_ON_PLAYSTATION));
}
function eU(e) {
    return !!ew(e) && (0, n(952265).nf)(eK(e.id));
}
function eB(e, t) {
    let { platformType: n, quest: r } = e;
    (0, b._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent
    }),
        (0, _.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function eG(e, t) {
    let { quest: n } = e;
    (0, b._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent
    });
    let r = (function (e) {
        let t = Object.keys(e.config.taskConfig.tasks),
            n = [];
        for (let e of t)
            switch (e) {
                case s.X.PLAY_ON_XBOX:
                    n.push(N.ABu.XBOX);
                    break;
                case s.X.PLAY_ON_PLAYSTATION:
                    n.push(N.ABu.PLAYSTATION);
            }
        return n;
    })(n);
    if (1 === r.length) return (0, _.Z)({ platformType: r.at(0) });
    c.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, _.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function eZ(e, t) {
    let { quest: n } = e;
    (0, b._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        d.Z.open(N.oAB.CONNECTIONS);
}
function eF() {
    return window.location.pathname.startsWith(N.Z5c.QUEST_HOME);
}
function eV(e) {
    return 'xbox' === e.connected_account_type ? N.ABu.XBOX : N.ABu.PLAYSTATION;
}
function ej(e) {
    return eV(e) === N.ABu.XBOX ? R.t.mytEv7 : R.t.iDiwb2;
}
function eH(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: s, selectedPlatformType: o, sharedQuestFields: l } = e,
        u = ed({ quest: a }),
        c = null != o ? o : null == s ? void 0 : s.platform,
        d = u
            ? eg({
                  quest: a,
                  idx: null !== (r = null == s ? void 0 : s.tier) && void 0 !== r ? r : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        f = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? f[c] : void 0;
}
function eY(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r } = e;
    return t
        ? R.intl.formatToPlainString(R.t.Piihy8, { gamePublisher: n })
        : R.intl.formatToPlainString(R.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r
          });
}
function eW(e) {
    let t =
            ef({ quest: e }) ||
            (function (e) {
                let { quest: t } = e;
                return t.config.taskConfig.type === u.L.FIRST_PARTY && null != t.config.taskConfig.tasks[s.X.STREAM_ON_DESKTOP];
            })({ quest: e }),
        n = ex(e),
        r = [];
    return t && r.push(A.cd.DESKTOP), n && r.push(A.cd.CONSOLE), r;
}
function eK(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
