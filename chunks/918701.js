n.d(t, {
    $H: function () {
        return eh;
    },
    $J: function () {
        return ek;
    },
    AV: function () {
        return ee;
    },
    BM: function () {
        return eG;
    },
    Bg: function () {
        return ea;
    },
    Bz: function () {
        return eB;
    },
    C1: function () {
        return eW;
    },
    C9: function () {
        return eY;
    },
    CE: function () {
        return B;
    },
    FE: function () {
        return eI;
    },
    FI: function () {
        return eX;
    },
    Fs: function () {
        return eK;
    },
    GN: function () {
        return et;
    },
    Gd: function () {
        return eQ;
    },
    Jg: function () {
        return ed;
    },
    K: function () {
        return el;
    },
    KM: function () {
        return eg;
    },
    Kr: function () {
        return ei;
    },
    Mi: function () {
        return J;
    },
    Nj: function () {
        return e_;
    },
    OG: function () {
        return ej;
    },
    PM: function () {
        return Q;
    },
    Qe: function () {
        return D;
    },
    Rs: function () {
        return q;
    },
    U3: function () {
        return V;
    },
    UZ: function () {
        return em;
    },
    V$: function () {
        return eV;
    },
    WP: function () {
        return j;
    },
    Xh: function () {
        return z;
    },
    Xv: function () {
        return es;
    },
    ZZ: function () {
        return P;
    },
    _: function () {
        return X;
    },
    _D: function () {
        return w;
    },
    _j: function () {
        return eH;
    },
    b7: function () {
        return eL;
    },
    f2: function () {
        return eT;
    },
    fY: function () {
        return eZ;
    },
    gI: function () {
        return eF;
    },
    hQ: function () {
        return Y;
    },
    iQ: function () {
        return Z;
    },
    il: function () {
        return eD;
    },
    lQ: function () {
        return k;
    },
    o9: function () {
        return ev;
    },
    oo: function () {
        return ef;
    },
    pO: function () {
        return ep;
    },
    q6: function () {
        return F;
    },
    q8: function () {
        return eM;
    },
    si: function () {
        return ew;
    },
    t2: function () {
        return $;
    },
    tF: function () {
        return U;
    },
    u7: function () {
        return eq;
    },
    vQ: function () {
        return eo;
    },
    vR: function () {
        return eu;
    },
    xn: function () {
        return er;
    },
    yH: function () {
        return ez;
    },
    yI: function () {
        return W;
    },
    ys: function () {
        return ec;
    },
    zE: function () {
        return en;
    },
    zK: function () {
        return eE;
    },
    zi: function () {
        return G;
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
    I = n(617136),
    T = n(272008),
    b = n(569984),
    S = n(497505),
    y = n(566078),
    A = n(312046),
    N = n(46140),
    C = n(981631),
    R = n(701488),
    O = n(388032);
function D(e) {
    try {
        return (0, a.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let L = (e) => e.application_id === R.Ev || e.platform === C.M7m.XBOX,
    x = (e) => e.platform === C.M7m.PS4 || e.platform === C.M7m.PS5;
function w(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = y.r.build(t.config).application.name.toLowerCase();
    return L(e) || x(e) ? n === r : null != e.application_id && M(e.application_id, t);
}
function P(e, t) {
    for (let [n, r] of e) if (w(t, r) && !G(r)) return r;
}
function M(e, t) {
    return null != y.r.build(t.config).application.ids.find((t) => t === e);
}
function k(e, t) {
    let n;
    for (let [r, i] of e)
        if (M(t, i) && !G(i)) {
            n = i;
            break;
        }
    return n;
}
function U(e, t) {
    let n = k(e, t.applicationId);
    if (null != n) return n;
    for (let [t, n] of e) if (!G(n) && eg(n)) return n;
}
function B(e, t) {
    return Array.from(e.values()).find((e) => M(t, e) && !G(e) && e_({ quest: e }));
}
function G(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function Z(e) {
    if (!G(e)) return !1;
    let t = Date.now() - 2592000000,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function F(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, A.Q)(e))
        .exhaustive();
}
function V(e) {
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
function j(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: F(e.config),
        userStatus: null == e.user_status ? null : V(e.user_status),
        targetedContent: e.targeted_content
    };
}
function H(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video
    };
}
function Y(e) {
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
            rewards: t.rewards.map(H),
            cosponsorMetadata: (0, A.s)(t.cosponsor_metadata)
        },
        userStatus: null == e.user_status ? null : V(e.user_status)
    };
}
function W(e) {
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
function K(e) {
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
                                rewardCode: W(t.reward.reward_code)
                            }
                        }
                    };
            }
        })(e.tenant_metadata),
        consumed: e.consumed
    };
}
function z(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(K),
        errors: e.errors
    };
}
let q = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function Q(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.id);
    if (null != i && !G(i)) return i;
}
function X(e, t) {
    for (let [n, r] of e) if (!G(r) && r.targetedContent.includes(t)) return r;
    return null;
}
function J(e, t) {
    return e.targetedContent.includes(t);
}
let $ = (e) => {
    switch (e) {
        case S.y$.XBOX:
            return O.intl.string(O.t.G84UWV);
        case S.y$.PLAYSTATION:
            return O.intl.string(O.t['6IeKx8']);
        case S.y$.SWITCH:
            return O.intl.string(O.t['1pp0sr']);
        case S.y$.PC:
            return O.intl.string(O.t['YK+wUl']);
        case S.y$.CROSS_PLATFORM:
            return O.intl.string(O.t.UWVbzc);
    }
};
function ee(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return O.intl.string(O.t.BzFeTE);
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? O.intl.string(O.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? O.intl.string(O.t.JNx8sL) : t > 0 ? O.intl.string(O.t.JMbfnZ) : O.intl.string(O.t['7e5k7O']);
    }
    return O.intl.formatToPlainString(O.t.EQa7oq, { questName: r.config.messages.questName });
}
function et(e) {
    return Object.keys(N.a_).includes(S.jn[e]);
}
function en(e, t) {
    if (!et(t)) return !1;
    let n = S.jn[t];
    return (0, m.yE)(e.dismissedQuestContent, N.a_[n]);
}
function er(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null;
}
function ei(e) {
    let t = er(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        s = Math.floor(a / 30),
        o = s + (a % 30 >= 25 ? 1 : 0);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return O.intl.formatToPlainString(O.t.PClsr6, { years: e });
    }
    if (o > 0) return O.intl.formatToPlainString(O.t.kridzM, { months: o });
    {
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return O.intl.formatToPlainString(O.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return O.intl.formatToPlainString(O.t.EmoBDw, { weeks: t });
        }
    }
}
function ea(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.w.FRACTIONAL_PREMIUM);
}
function es(e) {
    return null != er(e);
}
function eo(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.w.IN_GAME);
}
function el(e) {
    var t;
    return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === l.w.IN_GAME)) && void 0 !== t ? t : null;
}
function eu(e, t) {
    return e.targetedContent.includes(t);
}
function ec(e, t) {
    v.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function ed(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = P(e, n);
        if (null != t) return t;
    }
    return null;
}
function ef(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === o.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === l.w.REWARD_CODE);
}
function e_(e) {
    var t;
    let { quest: n } = e;
    return (t = n.config).taskConfig.type === u.L.FIRST_PARTY && null != t.taskConfig.tasks[s.X.PLAY_ON_DESKTOP];
}
function ep(e) {
    return e.config.taskConfig.type === u.L.FIRST_PARTY && null != e.config.taskConfig.tasks[s.X.PLAY_ACTIVITY];
}
function eh(e) {
    return null != e && e_({ quest: e });
}
function em(e, t) {
    return y.r.build(t.config).application.id === e;
}
function eg(e) {
    let t = y.r.build(e.config).application.id;
    return ep(e) && t === N.Ts;
}
function eE(e, t) {
    return y.r.build(e.config).features.has(t);
}
function ev(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === l.w.REWARD_CODE ? r : null;
}
function eI(e, t) {
    let n = y.r.build(e.config).application.link;
    (0, E.q)({
        href: n,
        onConfirm: () => {
            (0, I._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }),
                (0, f.Z)(n);
        }
    });
}
let eT = (e, t) => {
        (0, I._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }),
            (0, p.JG)(q(e));
    },
    eb = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eS = (e) => eB(e) || b.Z.isProgressingOnDesktop(e.id),
    ey = (e, t) => {
        var n, r, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (r = a[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !eS(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, i.floor)(l / h.Z.Millis.SECOND, 2);
    },
    eA = (e, t) => {
        var n, r, i, a, s;
        let o = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (s = null !== (a = null == o ? void 0 : o.value) && void 0 !== a ? a : null === (i = e.userStatus) || void 0 === i ? void 0 : i.streamProgressSeconds) && void 0 !== s ? s : 0;
        if (eM(e)) {
            let n = b.Z.getOptimisticProgress(e.id, t.eventName);
            return null == n || n < l ? l : n;
        }
        return l + ey(e, t);
    },
    eN = (e, t) => {
        var n;
        let r = t.target;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(0.99 * r, eA(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    eC = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = s.T.ALL } = e,
            o = r.config.taskConfig;
        if (o.type !== u.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != i ? i : null === (t = Object.values(o.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            c = null !== (n = o.tasks[l]) && void 0 !== n ? n : o.tasks[s.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = c.target,
            f = eN(r, c);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.round(d / h.Z.Seconds.MINUTE),
            percentComplete: eb(d, f),
            taskType: l
        };
    },
    eR = (e) => (s.T.ALL.has(e) ? e : null),
    eO = (e) => {
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
            let t = eR(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eC({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eC({
            quest: r,
            includeTaskTypes: i
        });
    },
    eD = (e, t) => {
        if (e.config.taskConfig.type !== u.L.FIRST_PARTY)
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: s.X.STREAM_ON_DESKTOP
            };
        if (eP(e))
            return eO({
                quest: e,
                includeTaskTypes: null != t ? t : eB(e) ? s.T.CONSOLE : s.T.ALL
            });
        if (eM(e))
            return eC({
                quest: e,
                taskType: s.X.WATCH_VIDEO
            });
        if (eh(e))
            return eC({
                quest: e,
                taskType: s.X.PLAY_ON_DESKTOP
            });
        if (ep(e))
            return eC({
                quest: e,
                taskType: s.X.PLAY_ACTIVITY
            });
        else
            return eC({
                quest: e,
                taskType: s.X.STREAM_ON_DESKTOP
            });
    };
function eL(e) {
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
let ex = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]);
function ew(e) {
    let t = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(t / 60),
        seconds: Math.floor(t % 60)
    };
}
let eP = ex([s.X.PLAY_ON_XBOX, s.X.PLAY_ON_PLAYSTATION]),
    eM = ex([s.X.WATCH_VIDEO]);
function ek(e) {
    return eP(e);
}
let eU = (e, t) => {
    var n, r;
    let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function eB(e) {
    return null != e.userStatus && (eU(e.userStatus, s.X.PLAY_ON_XBOX) || eU(e.userStatus, s.X.PLAY_ON_PLAYSTATION));
}
function eG(e) {
    return !!eM(e) && (0, n(952265).nf)(eq(e.id));
}
function eZ(e, t) {
    let { platformType: n, quest: r } = e;
    (0, I._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent
    }),
        (0, _.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function eF(e, t) {
    let { quest: n } = e;
    (0, I._3)({
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
                    n.push(C.ABu.XBOX);
                    break;
                case s.X.PLAY_ON_PLAYSTATION:
                    n.push(C.ABu.PLAYSTATION);
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
function eV(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        d.Z.open(C.oAB.CONNECTIONS);
}
function ej() {
    return window.location.pathname.startsWith(C.Z5c.QUEST_HOME);
}
function eH(e) {
    return 'xbox' === e.connected_account_type ? C.ABu.XBOX : C.ABu.PLAYSTATION;
}
function eY(e) {
    return eH(e) === C.ABu.XBOX ? O.t.mytEv7 : O.t.iDiwb2;
}
function eW(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: s, selectedPlatformType: o, sharedQuestFields: l } = e,
        u = ef({ quest: a }),
        c = null != o ? o : null == s ? void 0 : s.platform,
        d = u
            ? ev({
                  quest: a,
                  idx: null !== (r = null == s ? void 0 : s.tier) && void 0 !== r ? r : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        f = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? f[c] : void 0;
}
function eK(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? O.intl.formatToPlainString(O.t.Piihy8, { gamePublisher: n })
            : O.intl.formatToPlainString(O.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i
              })
        : O.intl.formatToPlainString(O.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r
          });
}
function ez(e) {
    let t =
            e_({ quest: e }) ||
            (function (e) {
                let { quest: t } = e;
                return t.config.taskConfig.type === u.L.FIRST_PARTY && null != t.config.taskConfig.tasks[s.X.STREAM_ON_DESKTOP];
            })({ quest: e }),
        n = eP(e),
        r = [];
    return t && r.push(N.cd.DESKTOP), n && r.push(N.cd.CONSOLE), r;
}
function eq(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function eQ(e) {
    let t = eM(e),
        n = ep(e);
    return t || n;
}
function eX(e, t) {
    var n, r;
    if (!G(e) && (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) == null) (0, T.cT)(e.id, t);
}
