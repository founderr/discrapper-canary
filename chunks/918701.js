n.d(t, {
    $H: function () {
        return eR;
    },
    $J: function () {
        return ej;
    },
    AV: function () {
        return eo;
    },
    Bz: function () {
        return eK;
    },
    C1: function () {
        return e1;
    },
    C9: function () {
        return e0;
    },
    CE: function () {
        return k;
    },
    FE: function () {
        return eb;
    },
    Fs: function () {
        return e2;
    },
    GN: function () {
        return el;
    },
    Gs: function () {
        return ee;
    },
    Jg: function () {
        return eI;
    },
    K: function () {
        return ef;
    },
    KM: function () {
        return eC;
    },
    Kr: function () {
        return ed;
    },
    Mi: function () {
        return ea;
    },
    Nj: function () {
        return eO;
    },
    OG: function () {
        return eX;
    },
    PM: function () {
        return er;
    },
    Qe: function () {
        return b;
    },
    Rs: function () {
        return en;
    },
    Sz: function () {
        return et;
    },
    U3: function () {
        return H;
    },
    UZ: function () {
        return ev;
    },
    V$: function () {
        return eQ;
    },
    WP: function () {
        return Z;
    },
    XT: function () {
        return e$;
    },
    Xh: function () {
        return z;
    },
    Xv: function () {
        return e_;
    },
    ZZ: function () {
        return w;
    },
    _: function () {
        return ei;
    },
    _D: function () {
        return U;
    },
    _j: function () {
        return eJ;
    },
    b7: function () {
        return eV;
    },
    dl: function () {
        return ey;
    },
    f2: function () {
        return eM;
    },
    fY: function () {
        return ez;
    },
    gI: function () {
        return eq;
    },
    gO: function () {
        return Q;
    },
    hQ: function () {
        return j;
    },
    iQ: function () {
        return F;
    },
    il: function () {
        return eF;
    },
    j8: function () {
        return X;
    },
    lQ: function () {
        return G;
    },
    mN: function () {
        return eg;
    },
    nP: function () {
        return em;
    },
    o9: function () {
        return eD;
    },
    oo: function () {
        return eA;
    },
    ph: function () {
        return $;
    },
    q6: function () {
        return V;
    },
    t2: function () {
        return es;
    },
    uo: function () {
        return J;
    },
    vQ: function () {
        return eE;
    },
    vR: function () {
        return eh;
    },
    xn: function () {
        return ec;
    },
    yH: function () {
        return e3;
    },
    yI: function () {
        return W;
    },
    ys: function () {
        return ep;
    },
    zE: function () {
        return eu;
    },
    zK: function () {
        return eL;
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
    a = n(266067),
    s = n(278074),
    o = n(754700),
    l = n(551910),
    u = n(887003),
    c = n(742635),
    d = n(570140),
    _ = n(230711),
    E = n(782568);
n(597688);
var f = n(231757);
n(706454);
var h = n(572004),
    p = n(70956),
    I = n(630388),
    m = n(823379),
    T = n(49012),
    S = n(960048),
    g = n(617136),
    A = n(569984),
    N = n(497505),
    O = n(566078),
    R = n(312046),
    v = n(46140),
    C = n(981631),
    y = n(701488),
    L = n(689938);
let D = 'https://cdn.discordapp.com/assets/quests/';
function b(e) {
    try {
        return (0, s.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let M = (e) => e.application_id === y.Ev || e.platform === C.M7m.XBOX,
    P = (e) => e.platform === C.M7m.PS4 || e.platform === C.M7m.PS5;
function U(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = O.r.build(t.config).application.name.toLowerCase();
    return M(e) || P(e) ? n === r : null != e.application_id && x(e.application_id, t);
}
function w(e, t) {
    for (let [n, r] of e) if (U(t, r) && !B(r)) return r;
}
function x(e, t) {
    return null != O.r.build(t.config).application.ids.find((t) => t === e);
}
function G(e, t) {
    let n;
    for (let [r, i] of e)
        if (x(t, i) && !B(i)) {
            n = i;
            break;
        }
    return n;
}
function k(e, t) {
    return Array.from(e.values()).find((e) => x(t, e) && !B(e) && eO({ quest: e }));
}
function B(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function F(e) {
    if (!B(e)) return !1;
    let t = Date.now() - 2592000000,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function V(e) {
    return (0, s.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, R.Q)(e))
        .exhaustive();
}
function H(e) {
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
function Z(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: V(e.config),
        userStatus: null == e.user_status ? null : H(e.user_status),
        targetedContent: e.targeted_content
    };
}
function Y(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video
    };
}
function j(e) {
    var t;
    return {
        id: e.id,
        config: {
            id: (t = e.config).id,
            startsAt: t.starts_at,
            expiresAt: t.expires_at,
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
            rewards: t.rewards.map(Y)
        },
        userStatus: null == e.user_status ? null : H(e.user_status)
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
                case u.w.IN_GAME:
                    return { questRewards: { reward: { tag: t.reward.tag } } };
                case u.w.REWARD_CODE:
                    return {
                        questRewards: {
                            reward: {
                                tag: t.reward.tag,
                                rewardCode: W(t.reward.reward_code)
                            }
                        }
                    };
            }
        })(e.tenant_metadata)
    };
}
function z(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(K),
        errors: e.errors
    };
}
function q(e, t) {
    return e.startsWith('data') ? e : t;
}
let Q = (e) => {
        var t, n;
        let r = eD({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }),
            i = O.r.build(e.config).defaultRewardAsset,
            a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: q(a, ''.concat(D).concat(e.id, '/').concat(a))
        };
    },
    X = (e) => {
        let t = null != e.config.assets.heroVideo ? e.config.assets.heroVideo : e.config.assets.hero;
        return q(t, ''.concat(D).concat(e.id, '/').concat(t));
    },
    $ = (e) => {
        let t = null != e.config.assets.questBarHeroVideo ? e.config.assets.questBarHeroVideo : e.config.assets.questBarHero;
        return q(t, ''.concat(D).concat(e.id, '/').concat(t));
    },
    J = (e, t) => q(e.config.assets.gameTile, ''.concat(D).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)),
    ee = (e, t) => q(e.config.assets.logotype, ''.concat(D).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)),
    et = (e, t, n) => {
        let r = ''.concat(D).concat(e);
        return null != n && (r += '/'.concat(n)), (r += '/'.concat(t)), q(t, r);
    },
    en = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function er(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.id);
    if (null != i && !B(i)) return i;
}
function ei(e, t) {
    for (let [n, r] of e) if (!B(r) && r.targetedContent.includes(t)) return r;
    return null;
}
function ea(e, t) {
    return e.targetedContent.includes(t);
}
let es = (e) => {
    switch (e) {
        case N.y$.XBOX:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
        case N.y$.PLAYSTATION:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
        case N.y$.SWITCH:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
        case N.y$.PC:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
        case N.y$.CROSS_PLATFORM:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function eo(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return L.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : L.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return L.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function el(e) {
    return Object.keys(v.a_).includes(N.jn[e]);
}
function eu(e, t) {
    if (!el(t)) return !1;
    let n = N.jn[t];
    return (0, I.yE)(e.dismissedQuestContent, v.a_[n]);
}
function ec(e) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig.rewards.find((e) => e.type === u.w.COLLECTIBLE);
            return (null == t ? void 0 : t.type) === u.w.COLLECTIBLE ? t : null;
        })
        .exhaustive();
}
function ed(e) {
    let t = ec(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        s = Math.floor(a / 30),
        o = s + (a % 30 >= 25 ? 1 : 0);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return L.Z.Messages.DURATION_YEARS.format({ years: e });
    }
    if (o > 0) return L.Z.Messages.DURATION_MONTHS.format({ months: o });
    {
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return L.Z.Messages.DURATION_DAYS.format({ days: e });
        {
            let t = Math.ceil(e / 7);
            return L.Z.Messages.DURATION_WEEKS.format({ weeks: t });
        }
    }
}
function e_(e) {
    return null != ec(e);
}
function eE(e) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards.some((e) => e.type === u.w.IN_GAME))
        .exhaustive();
}
function ef(e) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            var t;
            return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === u.w.IN_GAME)) && void 0 !== t ? t : null;
        })
        .exhaustive();
}
function eh(e, t) {
    return e.targetedContent.includes(t);
}
function ep(e, t) {
    S.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function eI(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = w(e, n);
        if (null != t) return t;
    }
    return null;
}
function em(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let eT = /\.([a-zA-Z0-9]+)$/,
    eS = /^data:video\/([a-zA-Z0-9]+)\;/;
function eg(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = eT.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = eS.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
        case 'webm':
            return 'video/webm';
        case 'mp4':
            return 'video/mp4';
        default:
            throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function eA(e) {
    let {
        quest: { config: t }
    } = e;
    return (0, s.EQ)(t)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig;
            return t.assignmentMethod === l.j.TIERED && t.rewards.length > 0 && t.rewards.every((e) => e.type === u.w.REWARD_CODE);
        })
        .exhaustive();
}
let eN = (e) =>
    (0, s.EQ)(e.taskConfig)
        .with({ type: c.L.FIRST_PARTY }, (e) => null != e.tasks[o.X.PLAY_ON_DESKTOP])
        .otherwise(() => !1);
function eO(e) {
    let { quest: t } = e;
    return (0, s.EQ)(t.config)
        .with({ configVersion: 2 }, (e) => eL(t, v.S7.PLAYTIME_TASK) || eN(e))
        .exhaustive();
}
function eR(e) {
    return null != e && eO({ quest: e });
}
function ev(e, t) {
    return O.r.build(t.config).application.id === e || eC(t);
}
function eC(e) {
    return eL(e, v.S7.FRACTIONS_QUEST);
}
function ey(e) {
    return !eL(e, v.S7.IN_HOUSE_CONSOLE_QUEST);
}
function eL(e, t) {
    return O.r.build(e.config).features.has(t);
}
function eD(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, s.EQ)(r)
        .with({ type: u.w.REWARD_CODE }, (e) => e)
        .otherwise(() => null);
}
function eb(e, t) {
    let n = O.r.build(e.config).application.link;
    (0, T.q)({
        href: n,
        onConfirm: () => {
            (0, g._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }),
                (0, E.Z)(n);
        }
    });
}
let eM = (e, t) => {
        (0, g._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }),
            (0, h.JG)(en(e));
    },
    eP = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eU = (e) => eK(e) || A.Z.isProgressingOnDesktop(e.id),
    ew = (e, t) => {
        var n, r, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (r = a[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !eU(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, i.floor)(l / p.Z.Millis.SECOND, 2);
    },
    ex = (e, t) => {
        var n, r, a;
        let s = t.target,
            o = e.userStatus;
        if ((null == o ? void 0 : o.completedAt) != null) return s;
        let l = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName],
            u = null !== (a = null !== (r = null == l ? void 0 : l.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== a ? a : 0,
            c = ew(e, t),
            d = Math.min(0.99 * s, u + c);
        return Math.max((0, i.floor)(d, 2), 0);
    },
    eG = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = o.T.ALL } = e,
            s = r.config.taskConfig;
        if (s.type !== c.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(s.type, '!'));
        let l = null != i ? i : null === (t = Object.values(s.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            u = null !== (n = s.tasks[l]) && void 0 !== n ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = u.target,
            _ = ex(r, u);
        return {
            progressSeconds: _,
            targetSeconds: d,
            targetMinutes: Math.round(d / p.Z.Seconds.MINUTE),
            percentComplete: eP(d, _),
            taskType: l
        };
    },
    ek = (e) => (o.T.ALL.has(e) ? e : null),
    eB = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = o.T.ALL } = e;
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
            .filter(m.lm)) {
            let t = ek(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eG({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eG({
            quest: r,
            includeTaskTypes: i
        });
    },
    eF = (e, t) =>
        (0, s.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => {
                if (e.config.taskConfig.type !== c.L.FIRST_PARTY)
                    return {
                        progressSeconds: 0,
                        targetSeconds: 1,
                        targetMinutes: 1,
                        percentComplete: 0,
                        taskType: o.X.STREAM_ON_DESKTOP
                    };
                if (eZ(e))
                    return eB({
                        quest: e,
                        includeTaskTypes: null != t ? t : eK(e) ? o.T.CONSOLE : o.T.ALL
                    });
                if (eY(e)) {
                    var n, r, i, a, s;
                    let t = null !== (a = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress[o.X.PLAY_ON_DESKTOP_V2]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                        l = null !== (s = null === (i = e.config.taskConfig.tasks[o.X.PLAY_ON_DESKTOP_V2]) || void 0 === i ? void 0 : i.target) && void 0 !== s ? s : 1000,
                        u = l / 1000;
                    return {
                        taskType: o.X.PLAY_ON_DESKTOP_V2,
                        progressSeconds: Math.floor(t / 1000),
                        targetSeconds: u,
                        targetMinutes: Math.round(u / 60),
                        percentComplete: eP(l, t)
                    };
                }
                return eR(e)
                    ? eG({
                          quest: e,
                          taskType: o.X.PLAY_ON_DESKTOP
                      })
                    : eG({
                          quest: e,
                          taskType: o.X.STREAM_ON_DESKTOP
                      });
            })
            .exhaustive();
function eV(e) {
    return (0, s.EQ)(e.config)
        .with({ configVersion: 2 }, (t) => {
            var n, r, i, a;
            if (t.taskConfig.type !== c.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length) return null;
            let s = Object.keys(t.taskConfig.tasks)[0],
                o = t.taskConfig.tasks[s],
                l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                u = eP(o.target, l);
            return {
                title: o.title,
                description: o.description,
                target: o.target,
                progress: l,
                completedRatio: u
            };
        })
        .exhaustive();
}
let eH = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]),
    eZ = eH([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    eY = eH([o.X.PLAY_ON_DESKTOP_V2]),
    ej = (e) =>
        (0, s.EQ)(e)
            .with({ config: { configVersion: 2 } }, eZ)
            .exhaustive(),
    eW = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i) return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    },
    eK = (e) =>
        (0, s.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => null != e.userStatus && (eW(e.userStatus, o.X.PLAY_ON_XBOX) || eW(e.userStatus, o.X.PLAY_ON_PLAYSTATION)))
            .exhaustive();
function ez(e, t) {
    let { platformType: n, quest: r } = e;
    (0, g._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent
    }),
        (0, f.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function eq(e, t) {
    let { quest: n } = e;
    (0, g._3)({
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
                case o.X.PLAY_ON_XBOX:
                    n.push(C.ABu.XBOX);
                    break;
                case o.X.PLAY_ON_PLAYSTATION:
                    n.push(C.ABu.PLAYSTATION);
            }
        return n;
    })(n);
    if (1 === r.length) return (0, f.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, f.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function eQ(e, t) {
    let { quest: n } = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        _.Z.open(C.oAB.CONNECTIONS);
}
function eX() {
    return window.location.pathname.startsWith(C.Z5c.QUEST_HOME);
}
function e$() {
    var e;
    let t = (0, a.TH)();
    return (null === (e = (0, a.LX)(t.pathname, C.Z5c.QUEST_HOME)) || void 0 === e ? void 0 : e.isExact) === !0;
}
function eJ(e) {
    return 'xbox' === e.connected_account_type ? C.ABu.XBOX : C.ABu.PLAYSTATION;
}
function e0(e) {
    return eJ(e) === C.ABu.XBOX ? L.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_XBOX : L.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_PSN;
}
function e1(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: s, selectedPlatformType: o, sharedQuestFields: l } = e,
        u = eA({ quest: a }),
        c = null != o ? o : null == s ? void 0 : s.platform,
        d = u
            ? eD({
                  quest: a,
                  idx: null !== (r = null == s ? void 0 : s.tier) && void 0 !== r ? r : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        _ = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? _[c] : void 0;
}
function e2(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, isInHouseQuest: i } = e;
    if (i) return t ? L.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : L.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_HOME;
    return t
        ? L.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({ gamePublisher: i ? L.Z.Messages.DISCORD : n })
        : L.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING_QUEST_HOME.format({
              gamePublisher: n,
              gameTitle: r
          });
}
function e3(e) {
    let t =
            eO({ quest: e }) ||
            (function (e) {
                let { quest: t } = e;
                return (0, s.EQ)(t.config)
                    .with(
                        {
                            configVersion: 2,
                            taskConfig: { type: c.L.FIRST_PARTY }
                        },
                        (e) => null != e.taskConfig.tasks[o.X.STREAM_ON_DESKTOP]
                    )
                    .otherwise(() => !1);
            })({ quest: e }),
        n = eZ(e),
        r = [];
    return t && r.push(v.cd.DESKTOP), n && r.push(v.cd.CONSOLE), r;
}
