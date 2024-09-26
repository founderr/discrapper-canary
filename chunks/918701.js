n.d(t, {
    $H: function () {
        return eB;
    },
    $J: function () {
        return e6;
    },
    AV: function () {
        return eg;
    },
    Bz: function () {
        return e8;
    },
    C1: function () {
        return ts;
    },
    C9: function () {
        return to;
    },
    CE: function () {
        return j;
    },
    FE: function () {
        return ej;
    },
    Fs: function () {
        return tl;
    },
    GN: function () {
        return eS;
    },
    Gs: function () {
        return eE;
    },
    Jg: function () {
        return eb;
    },
    K: function () {
        return eC;
    },
    KM: function () {
        return eZ;
    },
    Kr: function () {
        return eN;
    },
    Mi: function () {
        return eI;
    },
    Nj: function () {
        return eG;
    },
    OG: function () {
        return tr;
    },
    PM: function () {
        return ep;
    },
    Qe: function () {
        return k;
    },
    Rs: function () {
        return eh;
    },
    Sz: function () {
        return ef;
    },
    U3: function () {
        return X;
    },
    UZ: function () {
        return eF;
    },
    V$: function () {
        return tn;
    },
    WP: function () {
        return $;
    },
    XT: function () {
        return ti;
    },
    Xh: function () {
        return ea;
    },
    Xv: function () {
        return eO;
    },
    ZZ: function () {
        return V;
    },
    _: function () {
        return em;
    },
    _D: function () {
        return Z;
    },
    _j: function () {
        return ta;
    },
    b7: function () {
        return e2;
    },
    dl: function () {
        return eV;
    },
    f2: function () {
        return eW;
    },
    fY: function () {
        return te;
    },
    gI: function () {
        return tt;
    },
    gO: function () {
        return eu;
    },
    hQ: function () {
        return et;
    },
    iQ: function () {
        return K;
    },
    il: function () {
        return e1;
    },
    j8: function () {
        return ec;
    },
    lQ: function () {
        return Y;
    },
    mN: function () {
        return eU;
    },
    nP: function () {
        return eD;
    },
    o9: function () {
        return eY;
    },
    oo: function () {
        return ew;
    },
    ph: function () {
        return ed;
    },
    q6: function () {
        return z;
    },
    t2: function () {
        return eT;
    },
    uo: function () {
        return e_;
    },
    vQ: function () {
        return eR;
    },
    vR: function () {
        return ey;
    },
    xn: function () {
        return ev;
    },
    yH: function () {
        return tu;
    },
    yI: function () {
        return en;
    },
    ys: function () {
        return eL;
    },
    zE: function () {
        return eA;
    },
    zK: function () {
        return eH;
    },
    zi: function () {
        return W;
    }
});
var r = n(627341);
var i = n(47120);
var a = n(411104);
var o = n(571269);
var s = n(298267);
var l = n(653041);
var u = n(991998),
    c = n(392711);
var d = n(266067),
    _ = n(278074),
    E = n(754700),
    f = n(551910),
    h = n(887003),
    p = n(742635),
    m = n(570140),
    I = n(230711),
    T = n(782568);
n(597688);
var g = n(231757);
n(706454);
var S = n(572004),
    A = n(70956),
    v = n(630388),
    N = n(823379),
    O = n(49012),
    R = n(960048),
    C = n(617136),
    y = n(569984),
    L = n(497505),
    b = n(566078),
    D = n(312046),
    M = n(46140),
    P = n(981631),
    U = n(701488),
    w = n(689938);
let x = 'https://cdn.discordapp.com/assets/quests/',
    G = 2592000000;
function k(e) {
    try {
        return (0, _.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let B = (e) => e.application_id === U.Ev || e.platform === P.M7m.XBOX,
    F = (e) => e.platform === P.M7m.PS4 || e.platform === P.M7m.PS5;
function Z(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = b.r.build(t.config).application.name.toLowerCase();
    return B(e) || F(e) ? n === r : null != e.application_id && H(e.application_id, t);
}
function V(e, t) {
    for (let [n, r] of e) if (Z(t, r) && !W(r)) return r;
}
function H(e, t) {
    return null != b.r.build(t.config).application.ids.find((t) => t === e);
}
function Y(e, t) {
    let n;
    for (let [r, i] of e)
        if (H(t, i) && !W(i)) {
            n = i;
            break;
        }
    return n;
}
function j(e, t) {
    return Array.from(e.values()).find((e) => H(t, e) && !W(e) && eG({ quest: e }));
}
function W(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function K(e) {
    if (!W(e)) return !1;
    let t = Date.now() - G,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function z(e) {
    return (0, _.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, D.Q)(e))
        .exhaustive();
}
function q(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function Q(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: q(r.heartbeat)
        };
    return t;
}
function X(e) {
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
        progress: Q(e.progress)
    };
}
function $(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: z(e.config),
        userStatus: null == e.user_status ? null : X(e.user_status),
        targetedContent: e.targeted_content
    };
}
function J(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video
    };
}
function ee(e) {
    return {
        id: e.id,
        startsAt: e.starts_at,
        expiresAt: e.expires_at,
        messages: {
            questName: e.messages.quest_name,
            gamePublisher: e.messages.game_publisher,
            gameTitle: e.messages.game_title
        },
        assets: {
            hero: e.assets.hero,
            heroVideo: e.assets.hero_video,
            questBarHero: e.assets.quest_bar_hero,
            questBarHeroVideo: e.assets.quest_bar_hero_video,
            gameTile: e.assets.game_tile,
            logotype: e.assets.logotype
        },
        colors: {
            primary: e.colors.primary,
            secondary: e.colors.secondary
        },
        rewards: e.rewards.map(J)
    };
}
function et(e) {
    return {
        id: e.id,
        config: ee(e.config),
        userStatus: null == e.user_status ? null : X(e.user_status)
    };
}
function en(e) {
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
function er(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case h.w.IN_GAME:
            return { questRewards: { reward: { tag: t.reward.tag } } };
        case h.w.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: t.reward.tag,
                        rewardCode: en(t.reward.reward_code)
                    }
                }
            };
    }
}
function ei(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: er(e.tenant_metadata)
    };
}
function ea(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ei),
        errors: e.errors
    };
}
function eo(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
function es(e) {
    let t = {};
    for (let [n, r] of Object.entries(e.tasks)) t[n] = eo(r);
    return {
        tasks: t,
        joinOperator: e.join_operator
    };
}
function el(e, t) {
    return e.startsWith('data') ? e : t;
}
let eu = (e) => {
        var t, n;
        let r = eY({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }),
            i = b.r.build(e.config).defaultRewardAsset,
            a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: el(a, ''.concat(x).concat(e.id, '/').concat(a))
        };
    },
    ec = (e) => {
        let t = null != e.config.assets.heroVideo ? e.config.assets.heroVideo : e.config.assets.hero;
        return el(t, ''.concat(x).concat(e.id, '/').concat(t));
    },
    ed = (e) => {
        let t = null != e.config.assets.questBarHeroVideo ? e.config.assets.questBarHeroVideo : e.config.assets.questBarHero;
        return el(t, ''.concat(x).concat(e.id, '/').concat(t));
    },
    e_ = (e, t) => el(e.config.assets.gameTile, ''.concat(x).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)),
    eE = (e, t) => el(e.config.assets.logotype, ''.concat(x).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)),
    ef = (e, t, n) => {
        let r = ''.concat(x).concat(e);
        return null != n && (r += '/'.concat(n)), (r += '/'.concat(t)), el(t, r);
    },
    eh = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function ep(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.id);
    if (null != i && !W(i)) return i;
}
function em(e, t) {
    for (let [n, r] of e) if (!W(r) && r.targetedContent.includes(t)) return r;
    return null;
}
function eI(e, t) {
    return e.targetedContent.includes(t);
}
let eT = (e) => {
    switch (e) {
        case L.y$.XBOX:
            return w.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
        case L.y$.PLAYSTATION:
            return w.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
        case L.y$.SWITCH:
            return w.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
        case L.y$.PC:
            return w.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
        case L.y$.CROSS_PLATFORM:
            return w.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function eg(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return w.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? w.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? w.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? w.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : w.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return w.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function eS(e) {
    return Object.keys(M.a_).includes(L.jn[e]);
}
function eA(e, t) {
    if (!eS(t)) return !1;
    let n = L.jn[t];
    return (0, v.yE)(e.dismissedQuestContent, M.a_[n]);
}
function ev(e) {
    return (0, _.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig.rewards.find((e) => e.type === h.w.COLLECTIBLE);
            return (null == t ? void 0 : t.type) === h.w.COLLECTIBLE ? t : null;
        })
        .exhaustive();
}
function eN(e) {
    let t = ev(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        r = new Date(t.expiresAt),
        i = (0, u.Z)(r, n),
        a = Math.floor(i / 30) + (i % 30 >= 25 ? 1 : 0);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return w.Z.Messages.DURATION_YEARS.format({ years: e });
    }
    if (a > 0) return w.Z.Messages.DURATION_MONTHS.format({ months: a });
    {
        let e = (0, u.Z)(r, n);
        if (!(e >= 7)) return w.Z.Messages.DURATION_DAYS.format({ days: e });
        {
            let t = Math.ceil(e / 7);
            return w.Z.Messages.DURATION_WEEKS.format({ weeks: t });
        }
    }
}
function eO(e) {
    return null != ev(e);
}
function eR(e) {
    return (0, _.EQ)(e)
        .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards.some((e) => e.type === h.w.IN_GAME))
        .exhaustive();
}
function eC(e) {
    return (0, _.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            var t;
            return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === h.w.IN_GAME)) && void 0 !== t ? t : null;
        })
        .exhaustive();
}
function ey(e, t) {
    return e.targetedContent.includes(t);
}
function eL(e, t) {
    R.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function eb(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = V(e, n);
        if (null != t) return t;
    }
    return null;
}
function eD(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let eM = /\.([a-zA-Z0-9]+)$/,
    eP = /^data:video\/([a-zA-Z0-9]+)\;/;
function eU(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = eM.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = eP.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
        case 'webm':
            return 'video/webm';
        case 'mp4':
            return 'video/mp4';
        default:
            throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function ew(e) {
    let {
        quest: { config: t }
    } = e;
    return (0, _.EQ)(t)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig;
            return t.assignmentMethod === f.j.TIERED && t.rewards.length > 0 && t.rewards.every((e) => e.type === h.w.REWARD_CODE);
        })
        .exhaustive();
}
let ex = (e) =>
    (0, _.EQ)(e.taskConfig)
        .with({ type: p.L.FIRST_PARTY }, (e) => null != e.tasks[E.X.PLAY_ON_DESKTOP])
        .otherwise(() => !1);
function eG(e) {
    let { quest: t } = e;
    return (0, _.EQ)(t.config)
        .with({ configVersion: 2 }, (e) => eH(t, M.S7.PLAYTIME_TASK) || ex(e))
        .exhaustive();
}
function ek(e) {
    let { quest: t } = e;
    return (0, _.EQ)(t.config)
        .with(
            {
                configVersion: 2,
                taskConfig: { type: p.L.FIRST_PARTY }
            },
            (e) => null != e.taskConfig.tasks[E.X.STREAM_ON_DESKTOP]
        )
        .otherwise(() => !1);
}
function eB(e) {
    return null != e && eG({ quest: e });
}
function eF(e, t) {
    return b.r.build(t.config).application.id === e || eZ(t);
}
function eZ(e) {
    return eH(e, M.S7.FRACTIONS_QUEST);
}
function eV(e) {
    return !eH(e, M.S7.IN_HOUSE_CONSOLE_QUEST);
}
function eH(e, t) {
    return b.r.build(e.config).features.has(t);
}
function eY(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, _.EQ)(r)
        .with({ type: h.w.REWARD_CODE }, (e) => e)
        .otherwise(() => null);
}
function ej(e, t) {
    let n = b.r.build(e.config).application.link;
    (0, O.q)({
        href: n,
        onConfirm: () => {
            (0, C._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }),
                (0, T.Z)(n);
        }
    });
}
let eW = (e, t) => {
        (0, C._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }),
            (0, S.JG)(eh(e));
    },
    eK = (e, t) => (e > 0 ? (0, c.floor)(Math.min(t / e, 1), 4) : 0),
    ez = (e) => e8(e) || y.Z.isProgressingOnDesktop(e.id),
    eq = (e, t) => {
        var n, r, i, a;
        let o = null === (a = e.userStatus) || void 0 === a ? void 0 : null === (i = a.progress) || void 0 === i ? void 0 : null === (r = i[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !ez(e)) return 0;
        let s = Date.now() - new Date(o).valueOf();
        return (0, c.floor)(s / A.Z.Millis.SECOND, 2);
    },
    eQ = 0.99,
    eX = (e, t) => {
        var n, r, i;
        let a = t.target,
            o = e.userStatus;
        if ((null == o ? void 0 : o.completedAt) != null) return a;
        let s = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (i = null !== (r = null == s ? void 0 : s.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== i ? i : 0,
            u = Math.min(a * eQ, l + eq(e, t));
        return Math.max((0, c.floor)(u, 2), 0);
    },
    e$ = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = E.T.ALL } = e,
            o = r.config.taskConfig;
        if (o.type !== p.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let s = null != i ? i : null === (t = Object.values(o.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            l = null !== (n = o.tasks[s]) && void 0 !== n ? n : o.tasks[E.X.STREAM_ON_DESKTOP];
        if (null == l) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let u = l.target,
            c = eX(r, l);
        return {
            progressSeconds: c,
            targetSeconds: u,
            targetMinutes: Math.round(u / A.Z.Seconds.MINUTE),
            percentComplete: eK(u, c),
            taskType: s
        };
    },
    eJ = (e) => (E.T.ALL.has(e) ? e : null),
    e0 = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = E.T.ALL } = e;
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
            .filter(N.lm)) {
            let t = eJ(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return e$({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return e$({
            quest: r,
            includeTaskTypes: i
        });
    },
    e1 = (e, t) =>
        (0, _.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => {
                if (e.config.taskConfig.type !== p.L.FIRST_PARTY)
                    return {
                        progressSeconds: 0,
                        targetSeconds: 1,
                        targetMinutes: 1,
                        percentComplete: 0,
                        taskType: E.X.STREAM_ON_DESKTOP
                    };
                if (e4(e))
                    return e0({
                        quest: e,
                        includeTaskTypes: null != t ? t : e8(e) ? E.T.CONSOLE : E.T.ALL
                    });
                if (e5(e)) {
                    var n, r, i, a, o;
                    let t = null !== (a = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress[E.X.PLAY_ON_DESKTOP_V2]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                        s = null !== (o = null === (i = e.config.taskConfig.tasks[E.X.PLAY_ON_DESKTOP_V2]) || void 0 === i ? void 0 : i.target) && void 0 !== o ? o : 1000,
                        l = s / 1000;
                    return {
                        taskType: E.X.PLAY_ON_DESKTOP_V2,
                        progressSeconds: Math.floor(t / 1000),
                        targetSeconds: l,
                        targetMinutes: Math.round(l / 60),
                        percentComplete: eK(s, t)
                    };
                }
                return eB(e)
                    ? e$({
                          quest: e,
                          taskType: E.X.PLAY_ON_DESKTOP
                      })
                    : e$({
                          quest: e,
                          taskType: E.X.STREAM_ON_DESKTOP
                      });
            })
            .exhaustive();
function e2(e) {
    return (0, _.EQ)(e.config)
        .with({ configVersion: 2 }, (t) => {
            var n, r, i, a;
            if (t.taskConfig.type !== p.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length) return null;
            let o = Object.keys(t.taskConfig.tasks)[0],
                s = t.taskConfig.tasks[o],
                l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                u = eK(s.target, l);
            return {
                title: s.title,
                description: s.description,
                target: s.target,
                progress: l,
                completedRatio: u
            };
        })
        .exhaustive();
}
let e3 = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]),
    e4 = e3([E.X.PLAY_ON_XBOX, E.X.PLAY_ON_PLAYSTATION]),
    e5 = e3([E.X.PLAY_ON_DESKTOP_V2]),
    e6 = (e) =>
        (0, _.EQ)(e)
            .with({ config: { configVersion: 2 } }, e4)
            .exhaustive(),
    e7 = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i) return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    },
    e8 = (e) =>
        (0, _.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => null != e.userStatus && (e7(e.userStatus, E.X.PLAY_ON_XBOX) || e7(e.userStatus, E.X.PLAY_ON_PLAYSTATION)))
            .exhaustive();
function e9() {
    I.Z.open(P.oAB.CONNECTIONS);
}
function te(e, t) {
    let { platformType: n, quest: r } = e;
    (0, C._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent
    }),
        (0, g.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function tt(e, t) {
    let { quest: n } = e;
    (0, C._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent
    });
    let r = tc(n);
    if (1 === r.length) return (0, g.Z)({ platformType: r.at(0) });
    m.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, g.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function tn(e, t) {
    let { quest: n } = e;
    (0, C._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        e9();
}
function tr() {
    return window.location.pathname.startsWith(P.Z5c.QUEST_HOME);
}
function ti() {
    var e;
    let t = (0, d.TH)();
    return (null === (e = (0, d.LX)(t.pathname, P.Z5c.QUEST_HOME)) || void 0 === e ? void 0 : e.isExact) === !0;
}
function ta(e) {
    return 'xbox' === e.connected_account_type ? P.ABu.XBOX : P.ABu.PLAYSTATION;
}
function to(e) {
    return ta(e) === P.ABu.XBOX ? w.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_XBOX : w.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_PSN;
}
function ts(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        u = ew({ quest: a }),
        c = null != s ? s : null == o ? void 0 : o.platform,
        d = u
            ? eY({
                  quest: a,
                  idx: null !== (r = null == o ? void 0 : o.tier) && void 0 !== r ? r : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        _ = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? _[c] : void 0;
}
function tl(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, isInHouseQuest: i } = e;
    if (i) return t ? w.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : w.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_HOME;
    return t
        ? w.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({ gamePublisher: i ? w.Z.Messages.DISCORD : n })
        : w.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING_QUEST_HOME.format({
              gamePublisher: n,
              gameTitle: r
          });
}
function tu(e) {
    let t = eG({ quest: e }) || ek({ quest: e }),
        n = e4(e),
        r = [];
    return t && r.push(M.cd.DESKTOP), n && r.push(M.cd.CONSOLE), r;
}
function tc(e) {
    let t = Object.keys(e.config.taskConfig.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case E.X.PLAY_ON_XBOX:
                n.push(P.ABu.XBOX);
                break;
            case E.X.PLAY_ON_PLAYSTATION:
                n.push(P.ABu.PLAYSTATION);
        }
    return n;
}
