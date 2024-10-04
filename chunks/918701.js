n.d(t, {
    $H: function () {
        return eR;
    },
    $J: function () {
        return eK;
    },
    AV: function () {
        return ed;
    },
    Bz: function () {
        return eq;
    },
    C1: function () {
        return e3;
    },
    C9: function () {
        return e2;
    },
    CE: function () {
        return H;
    },
    FE: function () {
        return eM;
    },
    Fs: function () {
        return e4;
    },
    GN: function () {
        return e_;
    },
    Jg: function () {
        return eS;
    },
    K: function () {
        return eI;
    },
    KM: function () {
        return ey;
    },
    Kr: function () {
        return eh;
    },
    Mi: function () {
        return eu;
    },
    Nj: function () {
        return eN;
    },
    OG: function () {
        return e0;
    },
    PM: function () {
        return es;
    },
    Qe: function () {
        return x;
    },
    Rs: function () {
        return eo;
    },
    U3: function () {
        return q;
    },
    UZ: function () {
        return eC;
    },
    V$: function () {
        return eJ;
    },
    WP: function () {
        return Q;
    },
    Xh: function () {
        return er;
    },
    Xv: function () {
        return ep;
    },
    ZZ: function () {
        return F;
    },
    _: function () {
        return el;
    },
    _D: function () {
        return B;
    },
    _j: function () {
        return e1;
    },
    b7: function () {
        return eH;
    },
    dl: function () {
        return eL;
    },
    f2: function () {
        return eP;
    },
    fY: function () {
        return eX;
    },
    gI: function () {
        return e$;
    },
    hQ: function () {
        return J;
    },
    iQ: function () {
        return j;
    },
    il: function () {
        return eV;
    },
    lQ: function () {
        return V;
    },
    o9: function () {
        return eD;
    },
    oo: function () {
        return eA;
    },
    q6: function () {
        return W;
    },
    t2: function () {
        return ec;
    },
    vQ: function () {
        return em;
    },
    vR: function () {
        return eT;
    },
    xn: function () {
        return ef;
    },
    yH: function () {
        return e5;
    },
    yI: function () {
        return ee;
    },
    ys: function () {
        return eg;
    },
    zE: function () {
        return eE;
    },
    zK: function () {
        return eb;
    },
    zi: function () {
        return Y;
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
var d = n(278074),
    _ = n(754700),
    E = n(551910),
    f = n(887003),
    h = n(742635),
    p = n(570140),
    m = n(230711),
    I = n(782568);
n(597688);
var T = n(231757);
n(706454);
var g = n(572004),
    S = n(70956),
    A = n(630388),
    v = n(823379),
    N = n(49012),
    O = n(960048),
    R = n(617136),
    C = n(569984),
    y = n(497505),
    L = n(566078),
    b = n(312046),
    D = n(46140),
    M = n(981631),
    P = n(701488),
    U = n(689938);
let w = 2592000000;
function x(e) {
    try {
        return (0, d.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let G = (e) => e.application_id === P.Ev || e.platform === M.M7m.XBOX,
    k = (e) => e.platform === M.M7m.PS4 || e.platform === M.M7m.PS5;
function B(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = L.r.build(t.config).application.name.toLowerCase();
    return G(e) || k(e) ? n === r : null != e.application_id && Z(e.application_id, t);
}
function F(e, t) {
    for (let [n, r] of e) if (B(t, r) && !Y(r)) return r;
}
function Z(e, t) {
    return null != L.r.build(t.config).application.ids.find((t) => t === e);
}
function V(e, t) {
    let n;
    for (let [r, i] of e)
        if (Z(t, i) && !Y(i)) {
            n = i;
            break;
        }
    return n;
}
function H(e, t) {
    return Array.from(e.values()).find((e) => Z(t, e) && !Y(e) && eN({ quest: e }));
}
function Y(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function j(e) {
    if (!Y(e)) return !1;
    let t = Date.now() - w,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function W(e) {
    return (0, d.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, b.Q)(e))
        .exhaustive();
}
function K(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function z(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: K(r.heartbeat)
        };
    return t;
}
function q(e) {
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
        progress: z(e.progress)
    };
}
function Q(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: W(e.config),
        userStatus: null == e.user_status ? null : q(e.user_status),
        targetedContent: e.targeted_content
    };
}
function X(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video
    };
}
function $(e) {
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
        rewards: e.rewards.map(X)
    };
}
function J(e) {
    return {
        id: e.id,
        config: $(e.config),
        userStatus: null == e.user_status ? null : q(e.user_status)
    };
}
function ee(e) {
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
function et(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case f.w.IN_GAME:
            return { questRewards: { reward: { tag: t.reward.tag } } };
        case f.w.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: t.reward.tag,
                        rewardCode: ee(t.reward.reward_code)
                    }
                }
            };
    }
}
function en(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: et(e.tenant_metadata)
    };
}
function er(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(en),
        errors: e.errors
    };
}
function ei(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
function ea(e) {
    let t = {};
    for (let [n, r] of Object.entries(e.tasks)) t[n] = ei(r);
    return {
        tasks: t,
        joinOperator: e.join_operator
    };
}
let eo = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function es(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.id);
    if (null != i && !Y(i)) return i;
}
function el(e, t) {
    for (let [n, r] of e) if (!Y(r) && r.targetedContent.includes(t)) return r;
    return null;
}
function eu(e, t) {
    return e.targetedContent.includes(t);
}
let ec = (e) => {
    switch (e) {
        case y.y$.XBOX:
            return U.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
        case y.y$.PLAYSTATION:
            return U.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
        case y.y$.SWITCH:
            return U.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
        case y.y$.PC:
            return U.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
        case y.y$.CROSS_PLATFORM:
            return U.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function ed(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return U.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? U.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? U.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? U.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : U.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return U.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function e_(e) {
    return Object.keys(D.a_).includes(y.jn[e]);
}
function eE(e, t) {
    if (!e_(t)) return !1;
    let n = y.jn[t];
    return (0, A.yE)(e.dismissedQuestContent, D.a_[n]);
}
function ef(e) {
    return (0, d.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig.rewards.find((e) => e.type === f.w.COLLECTIBLE);
            return (null == t ? void 0 : t.type) === f.w.COLLECTIBLE ? t : null;
        })
        .exhaustive();
}
function eh(e) {
    let t = ef(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        r = new Date(t.expiresAt),
        i = (0, u.Z)(r, n),
        a = Math.floor(i / 30) + (i % 30 >= 25 ? 1 : 0);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return U.Z.Messages.DURATION_YEARS.format({ years: e });
    }
    if (a > 0) return U.Z.Messages.DURATION_MONTHS.format({ months: a });
    {
        let e = (0, u.Z)(r, n);
        if (!(e >= 7)) return U.Z.Messages.DURATION_DAYS.format({ days: e });
        {
            let t = Math.ceil(e / 7);
            return U.Z.Messages.DURATION_WEEKS.format({ weeks: t });
        }
    }
}
function ep(e) {
    return null != ef(e);
}
function em(e) {
    return (0, d.EQ)(e)
        .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards.some((e) => e.type === f.w.IN_GAME))
        .exhaustive();
}
function eI(e) {
    return (0, d.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            var t;
            return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === f.w.IN_GAME)) && void 0 !== t ? t : null;
        })
        .exhaustive();
}
function eT(e, t) {
    return e.targetedContent.includes(t);
}
function eg(e, t) {
    O.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function eS(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = F(e, n);
        if (null != t) return t;
    }
    return null;
}
function eA(e) {
    let {
        quest: { config: t }
    } = e;
    return (0, d.EQ)(t)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig;
            return t.assignmentMethod === E.j.TIERED && t.rewards.length > 0 && t.rewards.every((e) => e.type === f.w.REWARD_CODE);
        })
        .exhaustive();
}
let ev = (e) =>
    (0, d.EQ)(e.taskConfig)
        .with({ type: h.L.FIRST_PARTY }, (e) => null != e.tasks[_.X.PLAY_ON_DESKTOP])
        .otherwise(() => !1);
function eN(e) {
    let { quest: t } = e;
    return (0, d.EQ)(t.config)
        .with({ configVersion: 2 }, (e) => eb(t, D.S7.PLAYTIME_TASK) || ev(e))
        .exhaustive();
}
function eO(e) {
    let { quest: t } = e;
    return (0, d.EQ)(t.config)
        .with(
            {
                configVersion: 2,
                taskConfig: { type: h.L.FIRST_PARTY }
            },
            (e) => null != e.taskConfig.tasks[_.X.STREAM_ON_DESKTOP]
        )
        .otherwise(() => !1);
}
function eR(e) {
    return null != e && eN({ quest: e });
}
function eC(e, t) {
    return L.r.build(t.config).application.id === e || ey(t);
}
function ey(e) {
    return eb(e, D.S7.FRACTIONS_QUEST);
}
function eL(e) {
    return !eb(e, D.S7.IN_HOUSE_CONSOLE_QUEST);
}
function eb(e, t) {
    return L.r.build(e.config).features.has(t);
}
function eD(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, d.EQ)(r)
        .with({ type: f.w.REWARD_CODE }, (e) => e)
        .otherwise(() => null);
}
function eM(e, t) {
    let n = L.r.build(e.config).application.link;
    (0, N.q)({
        href: n,
        onConfirm: () => {
            (0, R._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }),
                (0, I.Z)(n);
        }
    });
}
let eP = (e, t) => {
        (0, R._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }),
            (0, g.JG)(eo(e));
    },
    eU = (e, t) => (e > 0 ? (0, c.floor)(Math.min(t / e, 1), 4) : 0),
    ew = (e) => eq(e) || C.Z.isProgressingOnDesktop(e.id),
    ex = (e, t) => {
        var n, r, i, a;
        let o = null === (a = e.userStatus) || void 0 === a ? void 0 : null === (i = a.progress) || void 0 === i ? void 0 : null === (r = i[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !ew(e)) return 0;
        let s = Date.now() - new Date(o).valueOf();
        return (0, c.floor)(s / S.Z.Millis.SECOND, 2);
    },
    eG = 0.99,
    ek = (e, t) => {
        var n, r, i;
        let a = t.target,
            o = e.userStatus;
        if ((null == o ? void 0 : o.completedAt) != null) return a;
        let s = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (i = null !== (r = null == s ? void 0 : s.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== i ? i : 0,
            u = Math.min(a * eG, l + ex(e, t));
        return Math.max((0, c.floor)(u, 2), 0);
    },
    eB = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = _.T.ALL } = e,
            o = r.config.taskConfig;
        if (o.type !== h.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let s = null != i ? i : null === (t = Object.values(o.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            l = null !== (n = o.tasks[s]) && void 0 !== n ? n : o.tasks[_.X.STREAM_ON_DESKTOP];
        if (null == l) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let u = l.target,
            c = ek(r, l);
        return {
            progressSeconds: c,
            targetSeconds: u,
            targetMinutes: Math.round(u / S.Z.Seconds.MINUTE),
            percentComplete: eU(u, c),
            taskType: s
        };
    },
    eF = (e) => (_.T.ALL.has(e) ? e : null),
    eZ = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = _.T.ALL } = e;
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
            .filter(v.lm)) {
            let t = eF(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eB({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eB({
            quest: r,
            includeTaskTypes: i
        });
    },
    eV = (e, t) =>
        (0, d.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => {
                if (e.config.taskConfig.type !== h.L.FIRST_PARTY)
                    return {
                        progressSeconds: 0,
                        targetSeconds: 1,
                        targetMinutes: 1,
                        percentComplete: 0,
                        taskType: _.X.STREAM_ON_DESKTOP
                    };
                if (ej(e))
                    return eZ({
                        quest: e,
                        includeTaskTypes: null != t ? t : eq(e) ? _.T.CONSOLE : _.T.ALL
                    });
                if (eW(e)) {
                    var n, r, i, a, o;
                    let t = null !== (a = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress[_.X.PLAY_ON_DESKTOP_V2]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                        s = null !== (o = null === (i = e.config.taskConfig.tasks[_.X.PLAY_ON_DESKTOP_V2]) || void 0 === i ? void 0 : i.target) && void 0 !== o ? o : 1000,
                        l = s / 1000;
                    return {
                        taskType: _.X.PLAY_ON_DESKTOP_V2,
                        progressSeconds: Math.floor(t / 1000),
                        targetSeconds: l,
                        targetMinutes: Math.round(l / 60),
                        percentComplete: eU(s, t)
                    };
                }
                return eR(e)
                    ? eB({
                          quest: e,
                          taskType: _.X.PLAY_ON_DESKTOP
                      })
                    : eB({
                          quest: e,
                          taskType: _.X.STREAM_ON_DESKTOP
                      });
            })
            .exhaustive();
function eH(e) {
    return (0, d.EQ)(e.config)
        .with({ configVersion: 2 }, (t) => {
            var n, r, i, a;
            if (t.taskConfig.type !== h.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length) return null;
            let o = Object.keys(t.taskConfig.tasks)[0],
                s = t.taskConfig.tasks[o],
                l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                u = eU(s.target, l);
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
let eY = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]),
    ej = eY([_.X.PLAY_ON_XBOX, _.X.PLAY_ON_PLAYSTATION]),
    eW = eY([_.X.PLAY_ON_DESKTOP_V2]),
    eK = (e) =>
        (0, d.EQ)(e)
            .with({ config: { configVersion: 2 } }, ej)
            .exhaustive(),
    ez = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i) return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    },
    eq = (e) =>
        (0, d.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => null != e.userStatus && (ez(e.userStatus, _.X.PLAY_ON_XBOX) || ez(e.userStatus, _.X.PLAY_ON_PLAYSTATION)))
            .exhaustive();
function eQ() {
    m.Z.open(M.oAB.CONNECTIONS);
}
function eX(e, t) {
    let { platformType: n, quest: r } = e;
    (0, R._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent
    }),
        (0, T.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function e$(e, t) {
    let { quest: n } = e;
    (0, R._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent
    });
    let r = e6(n);
    if (1 === r.length) return (0, T.Z)({ platformType: r.at(0) });
    p.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, T.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function eJ(e, t) {
    let { quest: n } = e;
    (0, R._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        eQ();
}
function e0() {
    return window.location.pathname.startsWith(M.Z5c.QUEST_HOME);
}
function e1(e) {
    return 'xbox' === e.connected_account_type ? M.ABu.XBOX : M.ABu.PLAYSTATION;
}
function e2(e) {
    return e1(e) === M.ABu.XBOX ? U.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_XBOX : U.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_PSN;
}
function e3(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        u = eA({ quest: a }),
        c = null != s ? s : null == o ? void 0 : o.platform,
        d = u
            ? eD({
                  quest: a,
                  idx: null !== (r = null == o ? void 0 : o.tier) && void 0 !== r ? r : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        _ = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? _[c] : void 0;
}
function e4(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, isInHouseQuest: i } = e;
    if (i) return t ? U.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : U.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_HOME;
    return t
        ? U.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({ gamePublisher: i ? U.Z.Messages.DISCORD : n })
        : U.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING_QUEST_HOME.format({
              gamePublisher: n,
              gameTitle: r
          });
}
function e5(e) {
    let t = eN({ quest: e }) || eO({ quest: e }),
        n = ej(e),
        r = [];
    return t && r.push(D.cd.DESKTOP), n && r.push(D.cd.CONSOLE), r;
}
function e6(e) {
    let t = Object.keys(e.config.taskConfig.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case _.X.PLAY_ON_XBOX:
                n.push(M.ABu.XBOX);
                break;
            case _.X.PLAY_ON_PLAYSTATION:
                n.push(M.ABu.PLAYSTATION);
        }
    return n;
}
