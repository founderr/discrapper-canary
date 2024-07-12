let r;
n.d(t, {
    $H: function () {
        return ep;
    },
    $J: function () {
        return eU;
    },
    AV: function () {
        return $;
    },
    Bz: function () {
        return ex;
    },
    CE: function () {
        return U;
    },
    FE: function () {
        return eS;
    },
    GN: function () {
        return J;
    },
    Gs: function () {
        return K;
    },
    Jg: function () {
        return el;
    },
    K: function () {
        return ea;
    },
    Kr: function () {
        return en;
    },
    Mi: function () {
        return Q;
    },
    Nj: function () {
        return eh;
    },
    OG: function () {
        return eB;
    },
    Qe: function () {
        return b;
    },
    Rs: function () {
        return z;
    },
    U3: function () {
        return G;
    },
    V$: function () {
        return ek;
    },
    WP: function () {
        return k;
    },
    Xh: function () {
        return V;
    },
    Xv: function () {
        return er;
    },
    _: function () {
        return q;
    },
    b7: function () {
        return eM;
    },
    dl: function () {
        return em;
    },
    f2: function () {
        return eA;
    },
    gI: function () {
        return eG;
    },
    gO: function () {
        return Z;
    },
    iQ: function () {
        return x;
    },
    il: function () {
        return eb;
    },
    j8: function () {
        return Y;
    },
    lQ: function () {
        return P;
    },
    mN: function () {
        return e_;
    },
    nP: function () {
        return eu;
    },
    o9: function () {
        return eT;
    },
    oo: function () {
        return eE;
    },
    pG: function () {
        return eg;
    },
    ph: function () {
        return j;
    },
    t2: function () {
        return X;
    },
    uo: function () {
        return W;
    },
    vQ: function () {
        return ei;
    },
    vR: function () {
        return eo;
    },
    xn: function () {
        return et;
    },
    yI: function () {
        return B;
    },
    ys: function () {
        return es;
    },
    zE: function () {
        return ee;
    },
    zK: function () {
        return eI;
    },
    zi: function () {
        return w;
    }
}), n(627341), n(47120), n(411104);
var i = n(164369), a = n(392711), o = n(278074), s = n(754700), l = n(551910), u = n(887003), c = n(742635), d = n(570140), _ = n(230711), E = n(782568);
n(597688);
var f = n(231757), h = n(572004), p = n(70956), m = n(630388), I = n(823379), T = n(49012), g = n(960048), S = n(617136), A = n(687744), N = n(569984), v = n(497505), O = n(566078), R = n(312046), C = n(46140), y = n(981631), D = n(689938);
let L = 'https://cdn.discordapp.com/assets/quests/';
function b(e) {
    try {
        return (0, o.EQ)(e.config).with({ config_version: 1 }, () => !0).with({ config_version: 2 }, () => !0).exhaustive();
    } catch (n) {
        var t;
        return console.error('Unknown config version \''.concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, '\''), n), !1;
    }
}
function M(e, t) {
    return null != O.r.build(t.config).application.ids.find(t => t === e);
}
function P(e, t) {
    let n;
    for (let [r, i] of e)
        if (M(t, i) && !w(i)) {
            n = i;
            break;
        }
    return n;
}
function U(e, t) {
    return Array.from(e.values()).find(e => M(t, e) && !w(e) && eh({ quest: e }));
}
function w(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function x(e) {
    if (!w(e))
        return !1;
    let t = Date.now() - 2592000000, n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function G(e) {
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
function k(e) {
    var t;
    return {
        id: e.id,
        preview: e.preview,
        config: (t = e.config, (0, o.EQ)(t).with({ config_version: 1 }, e => {
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
                            v.xw.has(r) && (t[r] = e[n]);
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
                rewardsConfig: (0, A.Q)(e.rewards_config),
                rewardCodeExpiresAt: e.reward_code_expires_at,
                rewardCodePlatforms: e.reward_code_platforms.filter(e => v.xw.has(e)),
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
        }).with({ config_version: 2 }, e => (0, R.Q)(e)).exhaustive()),
        userStatus: null == e.user_status ? null : G(e.user_status),
        targetedContent: e.targeted_content
    };
}
function B(e) {
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
function F(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: function (e) {
            if ((null == e ? void 0 : e.quest_rewards) == null)
                return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
            case u.w.IN_GAME:
                return { questRewards: { reward: { tag: t.reward.tag } } };
            case u.w.REWARD_CODE:
                return {
                    questRewards: {
                        reward: {
                            tag: t.reward.tag,
                            rewardCode: B(t.reward.reward_code)
                        }
                    }
                };
            }
        }(e.tenant_metadata)
    };
}
function V(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(F),
        errors: e.errors
    };
}
function H(e, t) {
    return e.startsWith('data') ? e : t;
}
let Z = e => {
        var t, n;
        let r = eT({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }), i = O.r.build(e.config).defaultRewardAsset, a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: H(a, ''.concat(L).concat(e.id, '/').concat(a))
        };
    }, Y = e => H(e.config.assets.hero, ''.concat(L).concat(e.id, '/').concat(e.config.assets.hero)), j = e => H(e.config.assets.questBarHero, ''.concat(L).concat(e.id, '/').concat(e.config.assets.questBarHero)), W = (e, t) => H(e.config.assets.gameTile, ''.concat(L).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)), K = (e, t) => H(e.config.assets.logotype, ''.concat(L).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)), z = e => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function q(e, t) {
    for (let [n, r] of e)
        if (!w(r) && r.targetedContent.includes(t))
            return r;
    return null;
}
function Q(e, t) {
    return e.targetedContent.includes(t);
}
let X = e => {
    switch (e) {
    case v.y$.XBOX:
        return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case v.y$.PLAYSTATION:
        return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case v.y$.SWITCH:
        return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case v.y$.PC:
        return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case v.y$.CROSS_PLATFORM:
        return D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function $(e) {
    var t, n;
    let {
        quest: r,
        taskDetails: i,
        thirdPartyTaskDetails: a
    } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null)
        return D.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let {percentComplete: e} = i, t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? D.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? D.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? D.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : D.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return D.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function J(e) {
    return Object.keys(C.a_).includes(v.jn[e]);
}
function ee(e, t) {
    if (!J(t))
        return !1;
    let n = v.jn[t];
    return (0, m.yE)(e.dismissedQuestContent, C.a_[n]);
}
function et(e) {
    return (0, o.EQ)(e).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.tag === u.w.COLLECTIBLE);
        return (null == t ? void 0 : t.tag) === u.w.COLLECTIBLE ? t : null;
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.type === u.w.COLLECTIBLE);
        return (null == t ? void 0 : t.type) === u.w.COLLECTIBLE ? t : null;
    }).exhaustive();
}
function en(e) {
    let t = et(e);
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
    return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? D.Z.Messages.DURATION_YEARS.format({ years: n.years }) : n.months > 0 ? D.Z.Messages.DURATION_MONTHS.format({ months: n.months }) : n.weeks > 0 ? D.Z.Messages.DURATION_WEEKS.format({ weeks: n.weeks }) : D.Z.Messages.DURATION_DAYS.format({ days: n.days });
}
function er(e) {
    return null != et(e);
}
function ei(e) {
    return (0, o.EQ)(e).with({ configVersion: 1 }, e => !1).with({ configVersion: 2 }, e => e.rewardsConfig.rewards.some(e => e.type === u.w.IN_GAME)).exhaustive();
}
function ea(e) {
    return (0, o.EQ)(e).with({ configVersion: 1 }, e => null).with({ configVersion: 2 }, e => {
        var t;
        return null !== (t = e.rewardsConfig.rewards.find(e => e.type === u.w.IN_GAME)) && void 0 !== t ? t : null;
    }).exhaustive();
}
function eo(e, t) {
    return e.targetedContent.includes(t);
}
function es(e, t) {
    g.Z.captureException(e, {
        ...t,
        tags: {
            ...null == t ? void 0 : t.tags,
            app_context: 'quests'
        }
    });
}
function el(e, t) {
    if (null == t || null == e)
        return null;
    for (let n of t) {
        if (null == n.application_id)
            continue;
        let t = P(e, n.application_id);
        if (null != t)
            return t;
    }
    return null;
}
function eu(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let ec = /\.([a-zA-Z0-9]+)$/, ed = /^data:video\/([a-zA-Z0-9]+)\;/;
function e_(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = ec.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = ed.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
    case 'webm':
        return 'video/webm';
    case 'mp4':
        return 'video/mp4';
    default:
        throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function eE(e) {
    let {
        quest: {config: t}
    } = e;
    return (0, o.EQ)(t).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig;
        return t.assignmentMethod === l.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === u.w.REWARD_CODE);
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig;
        return t.assignmentMethod === l.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === u.w.REWARD_CODE);
    }).exhaustive();
}
let ef = e => (0, o.EQ)(e.taskConfig).with({ type: c.L.FIRST_PARTY }, e => null != e.tasks[s.X.PLAY_ON_DESKTOP]).otherwise(() => !1);
function eh(e) {
    let {quest: t} = e;
    return (0, o.EQ)(t.config).with({ configVersion: 1 }, e => eI(t, C.S7.PLAYTIME_TASK)).with({ configVersion: 2 }, e => eI(t, C.S7.PLAYTIME_TASK) || ef(e)).exhaustive();
}
function ep(e) {
    return null != e && eh({ quest: e });
}
function em(e) {
    return !eI(e, C.S7.IN_HOUSE_CONSOLE_QUEST);
}
function eI(e, t) {
    return O.r.build(e.config).features.has(t);
}
function eT(e) {
    let {
        quest: t,
        idx: n
    } = e;
    if (null == n)
        return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, o.EQ)(r).with({ tag: u.w.REWARD_CODE }, e => e).with({ type: u.w.REWARD_CODE }, e => e).otherwise(() => null);
}
function eg(e) {
    let {
            quest: t,
            useV2Variants: n = !1,
            taskDetails: r,
            thirdPartyTaskDetails: i,
            expiryDate: a
        } = e, o = t.config.messages.gameTitle, s = O.r.build(t.config).defaultReward.messages.nameWithArticle, {targetMinutes: l} = r, u = eI(t, C.S7.IN_HOUSE_CONSOLE_QUEST), c = en(t.config), d = eU(t) && ep(t);
    if (u && null != c)
        return function (e, t, n) {
            var r;
            let i = O.r.build(e.config).defaultReward.messages.nameWithArticle, a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null, o = en(e.config), {targetMinutes: s} = null != t ? t : eb(e);
            return a ? null != n ? D.Z.Messages.QUEST_REWARD_WITH_EXPIRATION_WITH_EXPIRY_DATE.format({
                reward: i,
                duration: o,
                expiryDate: n
            }) : D.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                reward: i,
                duration: o
            }) : null != n ? D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE_WITH_EXPIRY_DATE.format({
                targetMinutes: s,
                rewardNameWithArticle: i,
                duration: o,
                expiryDate: n
            }) : D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
                targetMinutes: s,
                rewardNameWithArticle: i,
                duration: o
            });
        }(t, r, a);
    if (d)
        return function (e, t, n) {
            var r;
            let i = O.r.build(e.config).defaultReward.messages.nameWithArticle, a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null, o = en(e.config), {targetMinutes: s} = null != t ? t : eb(e), l = e.config.messages.gameTitle, u = () => {
                    _.Z.open(y.oAB.CONNECTIONS);
                };
            if (null != o)
                return a ? null != n ? D.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                    gameTitle: l,
                    reward: i,
                    streamingDurationRequirement: eb(e).targetMinutes,
                    onClick: u,
                    duration: o,
                    expiryDate: n
                }) : D.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                    gameTitle: l,
                    reward: i,
                    streamingDurationRequirement: eb(e).targetMinutes,
                    onClick: u,
                    duration: o
                }) : null != n ? D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                    gameTitle: l,
                    targetMinutes: s,
                    rewardNameWithArticle: i,
                    duration: o,
                    expiryDate: n
                }) : D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                    gameTitle: l,
                    targetMinutes: s,
                    rewardNameWithArticle: i,
                    duration: o
                });
            return null != n ? D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRY_DATE.format({
                gameTitle: l,
                targetMinutes: s,
                rewardNameWithArticle: i,
                expiryDate: n
            }) : D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
                gameTitle: l,
                targetMinutes: s,
                rewardNameWithArticle: i
            });
        }(t, r, a);
    if (eU(t))
        return function (e, t, n) {
            let r = O.r.build(e.config).defaultReward.messages.nameWithArticle, i = en(e.config), {targetMinutes: a} = null != t ? t : eb(e), o = e.config.messages.gameTitle;
            return null != i ? null != n ? D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r,
                duration: i,
                expiryDate: n
            }) : D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r,
                duration: i
            }) : null != n ? D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r,
                expiryDate: n
            }) : D.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r
            });
        }(t, r, a);
    else if (ep(t))
        return function (e, t, n) {
            let r = O.r.build(e.config).defaultReward.messages.nameWithArticle, i = en(e.config), {targetMinutes: a} = null != t ? t : eb(e), o = e.config.messages.gameTitle;
            return null != i ? null != n ? D.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                streamingDurationRequirement: a,
                rewardNameWithArticle: r,
                duration: i,
                expiryDate: n
            }) : D.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: o,
                streamingDurationRequirement: a,
                rewardNameWithArticle: r,
                duration: i
            }) : null != n ? D.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                questReward: r,
                streamingDurationRequirement: a,
                expiryDate: n
            }) : D.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
                gameTitle: o,
                questReward: r,
                streamingDurationRequirement: a
            });
        }(t, r, a);
    else if (eE({ quest: t }))
        return function (e, t, n, r) {
            let {targetMinutes: i} = null != n ? n : eb(t), a = t.config.messages.gameTitle;
            return e ? null != r ? D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2_WITH_EXPIRY_DATE.format({
                gameTitle: a,
                streamingDurationRequirement: i,
                expiryDate: r
            }) : D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2.format({
                gameTitle: a,
                streamingDurationRequirement: i
            }) : null != r ? D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_WITH_EXPIRY_DATE.format({
                gameTitle: a,
                streamingDurationRequirement: i,
                expiryDate: r
            }) : D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED.format({
                gameTitle: a,
                streamingDurationRequirement: i
            });
        }(n, t, r, a);
    return null != i ? i.description : null != c ? null != a ? D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
        gameTitle: o,
        streamingDurationRequirement: l,
        questReward: s,
        duration: c,
        expiryDate: a
    }) : D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
        gameTitle: o,
        streamingDurationRequirement: l,
        questReward: s,
        duration: c
    }) : n ? null != a ? D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2_WITH_EXPIRY_DATE.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l,
        expiryDate: a
    }) : D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l
    }) : null != a ? D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRY_DATE.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l,
        expiryDate: a
    }) : D.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l
    });
}
function eS(e, t) {
    let n = O.r.build(e.config).application.link;
    (0, T.q)({
        href: n,
        onConfirm: () => {
            (0, S._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }), (0, E.Z)(n);
        }
    });
}
let eA = (e, t) => {
        (0, S._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }), (0, h.JG)(z(e));
    }, eN = (e, t) => e > 0 ? (0, a.floor)(Math.min(t / e, 1), 4) : 0, ev = e => ex(e) || N.Z.isProgressingOnDesktop(e.id), eO = (e, t) => {
        var n, r, i, o;
        let s = null === (o = e.userStatus) || void 0 === o ? void 0 : null === (i = o.progress) || void 0 === i ? void 0 : null === (r = i[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == s || !ev(e))
            return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, a.floor)(l / p.Z.Millis.SECOND, 2);
    }, eR = (e, t) => {
        var n, r, i;
        let o = t.target, s = e.userStatus;
        if ((null == s ? void 0 : s.completedAt) != null)
            return o;
        let l = null == s ? void 0 : null === (n = s.progress) || void 0 === n ? void 0 : n[t.eventName], u = null !== (i = null !== (r = null == l ? void 0 : l.value) && void 0 !== r ? r : null == s ? void 0 : s.streamProgressSeconds) && void 0 !== i ? i : 0, c = eO(e, t), d = Math.min(0.99 * o, u + c);
        return (0, a.floor)(d, 2);
    }, eC = e => {
        var t, n;
        let {
                quest: r,
                taskType: i,
                includeTaskTypes: a = s.T.ALL
            } = e, o = r.config.taskConfig;
        if (o.type !== c.L.FIRST_PARTY)
            throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != i ? i : null === (t = Object.values(o.tasks).filter(e => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName, u = null !== (n = o.tasks[l]) && void 0 !== n ? n : o.tasks[s.X.STREAM_ON_DESKTOP];
        if (null == u)
            throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = u.target, _ = eR(r, u);
        return {
            progressSeconds: _,
            targetSeconds: d,
            targetMinutes: Math.round(d / p.Z.Seconds.MINUTE),
            percentComplete: eN(d, _),
            taskType: l
        };
    }, ey = e => s.T.ALL.has(e) ? e : null, eD = e => {
        var t, n;
        let {
            quest: r,
            includeTaskTypes: i = s.T.ALL
        } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => {
                var n, r;
                let i = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt, a = null == t ? void 0 : null === (r = t.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
                if (null != i && null != a)
                    return new Date(i).valueOf() > new Date(a).valueOf() ? -1 : 1;
                if (null == i && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null)
                    return new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1;
                if (null != i && null == a)
                    return -1;
                else
                    return 1;
            }).filter(I.lm)) {
            let t = ey(e.eventName);
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
    }, eL = e => {
        var t, n;
        let r = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0, i = Math.round(e.config.streamDurationRequirementMinutes * p.Z.Seconds.MINUTE);
        return {
            progressSeconds: r,
            targetSeconds: i,
            targetMinutes: e.config.streamDurationRequirementMinutes,
            percentComplete: eN(i, r),
            taskType: s.X.STREAM_ON_DESKTOP
        };
    }, eb = (e, t) => (0, o.EQ)(e).with({ config: { configVersion: 1 } }, eL).with({ config: { configVersion: 2 } }, e => e.config.taskConfig.type !== c.L.FIRST_PARTY ? {
        progressSeconds: 0,
        targetSeconds: 1,
        targetMinutes: 1,
        percentComplete: 0,
        taskType: s.X.STREAM_ON_DESKTOP
    } : eP(e) ? eD({
        quest: e,
        includeTaskTypes: null != t ? t : ex(e) ? s.T.CONSOLE : s.T.ALL
    }) : ep(e) ? eC({
        quest: e,
        taskType: s.X.PLAY_ON_DESKTOP
    }) : eC({
        quest: e,
        taskType: s.X.STREAM_ON_DESKTOP
    })).exhaustive();
function eM(e) {
    return (0, o.EQ)(e.config).with({ configVersion: 1 }, e => null).with({ configVersion: 2 }, t => {
        var n, r, i, a;
        if (t.taskConfig.type !== c.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length)
            return null;
        let o = Object.keys(t.taskConfig.tasks)[0], s = t.taskConfig.tasks[o], l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0, u = eN(s.target, l);
        return {
            title: s.title,
            description: s.description,
            target: s.target,
            progress: l,
            completedRatio: u
        };
    }).exhaustive();
}
let eP = (r = [
        s.X.PLAY_ON_XBOX,
        s.X.PLAY_ON_PLAYSTATION
    ], e => r.some(t => null != e.config.taskConfig.tasks[t])), eU = e => (0, o.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, eP).exhaustive(), ew = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i)
            return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    }, ex = e => (0, o.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, e => null != e.userStatus && (ew(e.userStatus, s.X.PLAY_ON_XBOX) || ew(e.userStatus, s.X.PLAY_ON_PLAYSTATION))).exhaustive();
function eG(e, t) {
    let {
        quest: n,
        showInline: r
    } = e;
    (0, S._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }), !r && _.Z.open(y.oAB.CONNECTIONS), d.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: e => (0, f.Z)({ platformType: e }),
        includedPlatformTypes: new Set([
            y.ABu.XBOX,
            y.ABu.PLAYSTATION
        ])
    });
}
function ek(e, t) {
    let {quest: n} = e;
    (0, S._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    });
    _.Z.open(y.oAB.CONNECTIONS);
}
function eB() {
    return window.location.pathname.startsWith(y.Z5c.QUEST_HOME);
}
