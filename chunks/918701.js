let r;
n.d(t, {
    $H: function () {
        return ef;
    },
    $J: function () {
        return eL;
    },
    AV: function () {
        return Q;
    },
    Bz: function () {
        return eM;
    },
    CE: function () {
        return M;
    },
    FE: function () {
        return eT;
    },
    GN: function () {
        return X;
    },
    Gh: function () {
        return eO;
    },
    Gs: function () {
        return j;
    },
    Jg: function () {
        return eo;
    },
    K: function () {
        return er;
    },
    Kr: function () {
        return ee;
    },
    Mi: function () {
        return z;
    },
    Nj: function () {
        return eE;
    },
    OG: function () {
        return ew;
    },
    Qe: function () {
        return D;
    },
    Rs: function () {
        return W;
    },
    U3: function () {
        return w;
    },
    V$: function () {
        return eU;
    },
    WP: function () {
        return x;
    },
    Xh: function () {
        return B;
    },
    Xv: function () {
        return et;
    },
    _: function () {
        return K;
    },
    b7: function () {
        return ey;
    },
    dl: function () {
        return eh;
    },
    f2: function () {
        return eg;
    },
    gI: function () {
        return eP;
    },
    gO: function () {
        return V;
    },
    iQ: function () {
        return U;
    },
    il: function () {
        return eC;
    },
    j8: function () {
        return H;
    },
    lQ: function () {
        return b;
    },
    mN: function () {
        return ec;
    },
    nP: function () {
        return es;
    },
    o9: function () {
        return em;
    },
    oo: function () {
        return ed;
    },
    pG: function () {
        return eI;
    },
    ph: function () {
        return Z;
    },
    t2: function () {
        return q;
    },
    uo: function () {
        return Y;
    },
    vQ: function () {
        return en;
    },
    vR: function () {
        return ei;
    },
    xn: function () {
        return J;
    },
    yI: function () {
        return G;
    },
    ys: function () {
        return ea;
    },
    zE: function () {
        return $;
    },
    zK: function () {
        return ep;
    },
    zi: function () {
        return P;
    }
}), n(627341), n(47120), n(411104);
var i = n(164369), a = n(278074), o = n(754700), s = n(551910), l = n(887003), u = n(742635), c = n(570140), d = n(230711), _ = n(782568);
n(597688);
var E = n(231757), f = n(572004), h = n(70956), p = n(630388), m = n(823379), I = n(49012), T = n(960048), g = n(617136), S = n(687744), A = n(497505), N = n(566078), v = n(312046), O = n(46140), R = n(981631), C = n(689938);
let y = 'https://cdn.discordapp.com/assets/quests/';
function D(e) {
    try {
        return (0, a.EQ)(e.config).with({ config_version: 1 }, () => !0).with({ config_version: 2 }, () => !0).exhaustive();
    } catch (n) {
        var t;
        return console.error('Unknown config version \''.concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, '\''), n), !1;
    }
}
function L(e, t) {
    return null != N.r.build(t.config).application.ids.find(t => t === e);
}
function b(e, t) {
    let n;
    for (let [r, i] of e)
        if (L(t, i) && !P(i)) {
            n = i;
            break;
        }
    return n;
}
function M(e, t) {
    return Array.from(e.values()).find(e => L(t, e) && !P(e) && eE({ quest: e }));
}
function P(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function U(e) {
    if (!P(e))
        return !1;
    let t = Date.now() - 2592000000, n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function w(e) {
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
        progress: function (e) {
            let t = {};
            for (let [r, i] of Object.entries(e)) {
                var n;
                t[r] = {
                    eventName: i.event_name,
                    value: i.value,
                    updatedAt: i.updated_at,
                    completedAt: i.completed_at,
                    heartbeat: null == (n = i.heartbeat) ? null : {
                        lastBeatAt: n.last_beat_at,
                        expiresAt: n.expires_at
                    }
                };
            }
            return t;
        }(e.progress)
    };
}
function x(e) {
    var t;
    return {
        id: e.id,
        preview: e.preview,
        config: (t = e.config, (0, a.EQ)(t).with({ config_version: 1 }, e => {
            var t, n, r;
            return {
                configVersion: 1,
                expiresAt: e.expires_at,
                streamDurationRequirementMinutes: e.stream_duration_requirement_minutes,
                gameTitle: e.game_title,
                getGameLink: e.get_game_link,
                applicationId: e.application_id,
                applicationName: e.application_name,
                messages: {
                    questName: (t = e.messages).quest_name,
                    rewardName: t.reward_name,
                    rewardNameWithArticle: t.reward_name_with_article,
                    rewardRedemptionInstructionsByPlatform: function (e) {
                        let t = {};
                        for (let n in e) {
                            let r = parseInt(n);
                            A.xw.has(r) && (t[r] = e[n]);
                        }
                        return t;
                    }(t.reward_redemption_instructions_by_platform),
                    gameTitle: t.game_title,
                    gamePublisher: t.game_publisher
                },
                colors: {
                    primary: (n = e.colors).primary,
                    secondary: n.secondary
                },
                rewardsConfig: (0, S.Q)(e.rewards_config),
                rewardCodeExpiresAt: e.reward_code_expires_at,
                rewardCodePlatforms: e.reward_code_platforms.filter(e => A.xw.has(e)),
                assets: {
                    rewardTile: (r = e.assets).reward_tile,
                    hero: r.hero,
                    questBarHero: r.quest_bar_hero,
                    gameTile: r.game_tile,
                    logotype: r.logotype
                },
                inGameQuestConfig: null,
                variants: e.variants,
                supplementaryApplicationIds: e.supplementary_application_ids
            };
        }).with({ config_version: 2 }, e => (0, v.Q)(e)).exhaustive()),
        userStatus: null == e.user_status ? null : w(e.user_status),
        targetedContent: e.targeted_content
    };
}
function G(e) {
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
function k(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: function (e) {
            if ((null == e ? void 0 : e.quest_rewards) == null)
                return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
            case l.w.IN_GAME:
                return { questRewards: { reward: { tag: t.reward.tag } } };
            case l.w.REWARD_CODE:
                return {
                    questRewards: {
                        reward: {
                            tag: t.reward.tag,
                            rewardCode: G(t.reward.reward_code)
                        }
                    }
                };
            }
        }(e.tenant_metadata)
    };
}
function B(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(k),
        errors: e.errors
    };
}
function F(e, t) {
    return e.startsWith('data') ? e : t;
}
let V = e => {
        var t, n;
        let r = em({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }), i = N.r.build(e.config).defaultRewardAsset, a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: F(a, ''.concat(y).concat(e.id, '/').concat(a))
        };
    }, H = e => F(e.config.assets.hero, ''.concat(y).concat(e.id, '/').concat(e.config.assets.hero)), Z = e => F(e.config.assets.questBarHero, ''.concat(y).concat(e.id, '/').concat(e.config.assets.questBarHero)), Y = (e, t) => F(e.config.assets.gameTile, ''.concat(y).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)), j = (e, t) => F(e.config.assets.logotype, ''.concat(y).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)), W = e => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function K(e, t) {
    for (let [n, r] of e)
        if (!P(r) && r.targetedContent.includes(t))
            return r;
    return null;
}
function z(e, t) {
    return e.targetedContent.includes(t);
}
let q = e => {
    switch (e) {
    case A.y$.XBOX:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case A.y$.PLAYSTATION:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case A.y$.SWITCH:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case A.y$.PC:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case A.y$.CROSS_PLATFORM:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function Q(e) {
    var t, n;
    let {
        quest: r,
        taskDetails: i,
        thirdPartyTaskDetails: a
    } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null)
        return C.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let {percentComplete: e} = i, t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return C.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function X(e) {
    return Object.keys(O.a_).includes(A.jn[e]);
}
function $(e, t) {
    if (!X(t))
        return !1;
    let n = A.jn[t];
    return (0, p.yE)(e.dismissedQuestContent, O.a_[n]);
}
function J(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.tag === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.tag) === l.w.COLLECTIBLE ? t : null;
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.type === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null;
    }).exhaustive();
}
function ee(e) {
    let t = J(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt)
        return null;
    let n = {
        days: 0,
        weeks: 0,
        months: 0,
        years: 0,
        ...(0, i.Z)({
            start: new Date(e.expiresAt),
            end: new Date(t.expiresAt)
        })
    };
    return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? C.Z.Messages.DURATION_YEARS.format({ years: n.years }) : n.months > 0 ? C.Z.Messages.DURATION_MONTHS.format({ months: n.months }) : n.weeks > 0 ? C.Z.Messages.DURATION_WEEKS.format({ weeks: n.weeks }) : C.Z.Messages.DURATION_DAYS.format({ days: n.days });
}
function et(e) {
    return null != J(e);
}
function en(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => !1).with({ configVersion: 2 }, e => e.rewardsConfig.rewards.some(e => e.type === l.w.IN_GAME)).exhaustive();
}
function er(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => null).with({ configVersion: 2 }, e => {
        var t;
        return null !== (t = e.rewardsConfig.rewards.find(e => e.type === l.w.IN_GAME)) && void 0 !== t ? t : null;
    }).exhaustive();
}
function ei(e, t) {
    return e.targetedContent.includes(t);
}
function ea(e, t) {
    T.Z.captureException(e, {
        ...t,
        tags: {
            ...null == t ? void 0 : t.tags,
            app_context: 'quests'
        }
    });
}
function eo(e, t) {
    if (null == t || null == e)
        return null;
    for (let n of t) {
        if (null == n.application_id)
            continue;
        let t = b(e, n.application_id);
        if (null != t)
            return t;
    }
    return null;
}
function es(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let el = /\.([a-zA-Z0-9]+)$/, eu = /^data:video\/([a-zA-Z0-9]+)\;/;
function ec(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = el.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = eu.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
    case 'webm':
        return 'video/webm';
    case 'mp4':
        return 'video/mp4';
    default:
        throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function ed(e) {
    let {
        quest: {config: t}
    } = e;
    return (0, a.EQ)(t).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig;
        return t.assignmentMethod === s.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === l.w.REWARD_CODE);
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig;
        return t.assignmentMethod === s.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === l.w.REWARD_CODE);
    }).exhaustive();
}
let e_ = e => (0, a.EQ)(e.taskConfig).with({ type: u.L.FIRST_PARTY }, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);
function eE(e) {
    let {quest: t} = e;
    return (0, a.EQ)(t.config).with({ configVersion: 1 }, e => ep(t, O.S7.PLAYTIME_TASK)).with({ configVersion: 2 }, e => ep(t, O.S7.PLAYTIME_TASK) || e_(e)).exhaustive();
}
function ef(e) {
    return null != e && eE({ quest: e });
}
function eh(e) {
    return !ep(e, O.S7.IN_HOUSE_CONSOLE_QUEST);
}
function ep(e, t) {
    return N.r.build(e.config).features.has(t);
}
function em(e) {
    let {
        quest: t,
        idx: n
    } = e;
    if (null == n)
        return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, a.EQ)(r).with({ tag: l.w.REWARD_CODE }, e => e).with({ type: l.w.REWARD_CODE }, e => e).otherwise(() => null);
}
function eI(e) {
    let {
            quest: t,
            useV2Variants: n = !1,
            taskDetails: r,
            thirdPartyTaskDetails: i
        } = e, a = t.config.messages.gameTitle, o = N.r.build(t.config).defaultReward.messages.nameWithArticle, {targetMinutes: s} = null != r ? r : eC(t), l = ep(t, O.S7.IN_HOUSE_CONSOLE_QUEST), u = ee(t.config), c = eL(t) && ef(t);
    if (l && null != u)
        return function (e, t) {
            var n;
            let r = N.r.build(e.config).defaultReward.messages.nameWithArticle, i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, a = ee(e.config), {targetMinutes: o} = null != t ? t : eC(e);
            return i && C.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                reward: r,
                duration: a
            }), C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
                targetMinutes: o,
                rewardNameWithArticle: r,
                duration: a
            });
        }(t, r);
    if (c)
        !function (e, t) {
            var n;
            let r = N.r.build(e.config).defaultReward.messages.nameWithArticle, i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, a = ee(e.config), {targetMinutes: o} = null != t ? t : eC(e), s = e.config.messages.gameTitle;
            null != a ? i ? C.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: s,
                reward: r,
                streamingDurationRequirement: eC(e).targetMinutes,
                onClick: () => {
                    d.Z.open(R.oAB.CONNECTIONS);
                },
                duration: a
            }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: s,
                targetMinutes: o,
                rewardNameWithArticle: r,
                duration: a
            }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
                gameTitle: s,
                targetMinutes: o,
                rewardNameWithArticle: r
            });
        }(t, r);
    else if (eL(t))
        return function (e, t) {
            let n = N.r.build(e.config).defaultReward.messages.nameWithArticle, r = ee(e.config), {targetMinutes: i} = null != t ? t : eC(e), a = e.config.messages.gameTitle;
            return null != r ? C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: a,
                targetMinutes: i,
                rewardNameWithArticle: n,
                duration: r
            }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
                gameTitle: a,
                targetMinutes: i,
                rewardNameWithArticle: n
            });
        }(t, r);
    else if (ef(t))
        return function (e, t) {
            let n = N.r.build(e.config).defaultReward.messages.nameWithArticle, r = ee(e.config), {targetMinutes: i} = null != t ? t : eC(e), a = e.config.messages.gameTitle;
            return null != r ? C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: a,
                streamingDurationRequirement: i,
                rewardNameWithArticle: n,
                duration: r
            }) : C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
                gameTitle: a,
                questReward: n,
                streamingDurationRequirement: i
            });
        }(t, r);
    else if (ed({ quest: t }))
        return function (e, t, n) {
            let {targetMinutes: r} = null != n ? n : eC(t), i = t.config.messages.gameTitle;
            return (e ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
                gameTitle: i,
                streamingDurationRequirement: r
            });
        }(n, t, r);
    return null != i ? i.description : null != u ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
        gameTitle: a,
        streamingDurationRequirement: s,
        questReward: o,
        duration: u
    }) : (n ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
        gameTitle: a,
        questReward: o,
        streamingDurationRequirement: s
    });
}
function eT(e, t) {
    let n = N.r.build(e.config).application.link;
    (0, I.q)({
        href: n,
        onConfirm: () => {
            (0, g._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }), (0, _.Z)(n);
        }
    });
}
let eg = (e, t) => {
        (0, g._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }), (0, f.JG)(W(e));
    }, eS = (e, t) => e > 0 ? Math.min(t / e, 1) : 0, eA = e => {
        var t, n, r, i, a, s, l, c;
        let {
                quest: d,
                taskType: _,
                includeTaskTypes: E = o.T.ALL
            } = e, f = d.config.taskConfig;
        if (f.type !== u.L.FIRST_PARTY)
            throw Error('Cannot retrieve task details for task config with type '.concat(f.type, '!'));
        let p = null != _ ? _ : null === (t = Object.values(f.tasks).filter(e => E.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName, m = null !== (s = f.tasks[p]) && void 0 !== s ? s : f.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == m)
            throw Error('No task with type '.concat(_, ' found for quest ').concat(d.id, '!'));
        let I = m.target, T = null !== (c = null !== (l = null === (i = d.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[p]) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : null === (a = d.userStatus) || void 0 === a ? void 0 : a.streamProgressSeconds) && void 0 !== c ? c : 0;
        return {
            progressSeconds: T,
            targetSeconds: I,
            targetMinutes: Math.round(I / h.Z.Seconds.MINUTE),
            percentComplete: eS(I, T),
            taskType: p
        };
    }, eN = e => o.T.ALL.has(e) ? e : null, ev = e => {
        var t, n;
        let {
            quest: r,
            includeTaskTypes: i = o.T.ALL
        } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(m.lm)) {
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
    }, eO = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => null).with({ config: { configVersion: 2 } }, e => eD(e) ? ev({
        quest: e,
        includeTaskTypes: o.T.CONSOLE
    }) : null).exhaustive(), eR = e => {
        var t, n;
        let r = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0, i = Math.round(e.config.streamDurationRequirementMinutes * h.Z.Seconds.MINUTE);
        return {
            progressSeconds: r,
            targetSeconds: i,
            targetMinutes: e.config.streamDurationRequirementMinutes,
            percentComplete: eS(i, r),
            taskType: o.X.STREAM_ON_DESKTOP
        };
    }, eC = (e, t) => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, eR).with({ config: { configVersion: 2 } }, e => e.config.taskConfig.type !== u.L.FIRST_PARTY ? {
        progressSeconds: 0,
        targetSeconds: 1,
        targetMinutes: 1,
        percentComplete: 0,
        taskType: o.X.STREAM_ON_DESKTOP
    } : eD(e) ? ev({
        quest: e,
        includeTaskTypes: null != t ? t : eM(e) ? o.T.CONSOLE : o.T.ALL
    }) : ef(e) ? eA({
        quest: e,
        taskType: o.X.PLAY_ON_DESKTOP
    }) : eA({
        quest: e,
        taskType: o.X.STREAM_ON_DESKTOP
    })).exhaustive();
function ey(e) {
    return (0, a.EQ)(e.config).with({ configVersion: 1 }, e => null).with({ configVersion: 2 }, t => {
        var n, r, i, a;
        if (t.taskConfig.type !== u.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length)
            return null;
        let o = Object.keys(t.taskConfig.tasks)[0], s = t.taskConfig.tasks[o], l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0, c = eS(s.target, l);
        return {
            title: s.title,
            description: s.description,
            target: s.target,
            progress: l,
            completedRatio: c
        };
    }).exhaustive();
}
let eD = (r = [
        o.X.PLAY_ON_XBOX,
        o.X.PLAY_ON_PLAYSTATION
    ], e => r.some(t => null != e.config.taskConfig.tasks[t])), eL = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, eD).exhaustive(), eb = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i)
            return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    }, eM = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, e => null != e.userStatus && (eb(e.userStatus, o.X.PLAY_ON_XBOX) || eb(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive();
function eP(e, t) {
    let {
        quest: n,
        showInline: r
    } = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }), !r && d.Z.open(R.oAB.CONNECTIONS), c.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: e => (0, E.Z)({ platformType: e }),
        includedPlatformTypes: new Set([
            R.ABu.XBOX,
            R.ABu.PLAYSTATION
        ])
    });
}
function eU(e, t) {
    let {quest: n} = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    });
    d.Z.open(R.oAB.CONNECTIONS);
}
function ew() {
    return window.location.pathname.startsWith(R.Z5c.QUEST_HOME);
}
