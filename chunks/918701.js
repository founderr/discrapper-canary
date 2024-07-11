let r;
n.d(t, {
    $H: function () {
        return eh;
    },
    $J: function () {
        return eP;
    },
    AV: function () {
        return X;
    },
    Bz: function () {
        return ew;
    },
    CE: function () {
        return P;
    },
    FE: function () {
        return eg;
    },
    GN: function () {
        return $;
    },
    Gs: function () {
        return W;
    },
    Jg: function () {
        return es;
    },
    K: function () {
        return ei;
    },
    Kr: function () {
        return et;
    },
    Mi: function () {
        return q;
    },
    Nj: function () {
        return ef;
    },
    OG: function () {
        return ek;
    },
    Qe: function () {
        return L;
    },
    Rs: function () {
        return K;
    },
    U3: function () {
        return x;
    },
    V$: function () {
        return eG;
    },
    WP: function () {
        return G;
    },
    Xh: function () {
        return F;
    },
    Xv: function () {
        return en;
    },
    _: function () {
        return z;
    },
    b7: function () {
        return eb;
    },
    dl: function () {
        return ep;
    },
    f2: function () {
        return eS;
    },
    gI: function () {
        return ex;
    },
    gO: function () {
        return H;
    },
    iQ: function () {
        return w;
    },
    il: function () {
        return eL;
    },
    j8: function () {
        return Z;
    },
    lQ: function () {
        return M;
    },
    mN: function () {
        return ed;
    },
    nP: function () {
        return el;
    },
    o9: function () {
        return eI;
    },
    oo: function () {
        return e_;
    },
    pG: function () {
        return eT;
    },
    ph: function () {
        return Y;
    },
    t2: function () {
        return Q;
    },
    uo: function () {
        return j;
    },
    vQ: function () {
        return er;
    },
    vR: function () {
        return ea;
    },
    xn: function () {
        return ee;
    },
    yI: function () {
        return k;
    },
    ys: function () {
        return eo;
    },
    zE: function () {
        return J;
    },
    zK: function () {
        return em;
    },
    zi: function () {
        return U;
    }
}), n(627341), n(47120), n(411104);
var i = n(164369), a = n(278074), o = n(754700), s = n(551910), l = n(887003), u = n(742635), c = n(570140), d = n(230711), _ = n(782568);
n(597688);
var E = n(231757), f = n(572004), h = n(70956), p = n(630388), m = n(823379), I = n(49012), T = n(960048), g = n(617136), S = n(687744), A = n(569984), N = n(497505), v = n(566078), O = n(312046), R = n(46140), C = n(981631), y = n(689938);
let D = 'https://cdn.discordapp.com/assets/quests/';
function L(e) {
    try {
        return (0, a.EQ)(e.config).with({ config_version: 1 }, () => !0).with({ config_version: 2 }, () => !0).exhaustive();
    } catch (n) {
        var t;
        return console.error('Unknown config version \''.concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, '\''), n), !1;
    }
}
function b(e, t) {
    return null != v.r.build(t.config).application.ids.find(t => t === e);
}
function M(e, t) {
    let n;
    for (let [r, i] of e)
        if (b(t, i) && !U(i)) {
            n = i;
            break;
        }
    return n;
}
function P(e, t) {
    return Array.from(e.values()).find(e => b(t, e) && !U(e) && ef({ quest: e }));
}
function U(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function w(e) {
    if (!U(e))
        return !1;
    let t = Date.now() - 2592000000, n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function x(e) {
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
function G(e) {
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
                            N.xw.has(r) && (t[r] = e[n]);
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
                rewardCodePlatforms: e.reward_code_platforms.filter(e => N.xw.has(e)),
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
        }).with({ config_version: 2 }, e => (0, O.Q)(e)).exhaustive()),
        userStatus: null == e.user_status ? null : x(e.user_status),
        targetedContent: e.targeted_content
    };
}
function k(e) {
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
function B(e) {
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
                            rewardCode: k(t.reward.reward_code)
                        }
                    }
                };
            }
        }(e.tenant_metadata)
    };
}
function F(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(B),
        errors: e.errors
    };
}
function V(e, t) {
    return e.startsWith('data') ? e : t;
}
let H = e => {
        var t, n;
        let r = eI({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }), i = v.r.build(e.config).defaultRewardAsset, a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: V(a, ''.concat(D).concat(e.id, '/').concat(a))
        };
    }, Z = e => V(e.config.assets.hero, ''.concat(D).concat(e.id, '/').concat(e.config.assets.hero)), Y = e => V(e.config.assets.questBarHero, ''.concat(D).concat(e.id, '/').concat(e.config.assets.questBarHero)), j = (e, t) => V(e.config.assets.gameTile, ''.concat(D).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)), W = (e, t) => V(e.config.assets.logotype, ''.concat(D).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)), K = e => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function z(e, t) {
    for (let [n, r] of e)
        if (!U(r) && r.targetedContent.includes(t))
            return r;
    return null;
}
function q(e, t) {
    return e.targetedContent.includes(t);
}
let Q = e => {
    switch (e) {
    case N.y$.XBOX:
        return y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case N.y$.PLAYSTATION:
        return y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case N.y$.SWITCH:
        return y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case N.y$.PC:
        return y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case N.y$.CROSS_PLATFORM:
        return y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function X(e) {
    var t, n;
    let {
        quest: r,
        taskDetails: i,
        thirdPartyTaskDetails: a
    } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null)
        return y.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let {percentComplete: e} = i, t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? y.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? y.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? y.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : y.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return y.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function $(e) {
    return Object.keys(R.a_).includes(N.jn[e]);
}
function J(e, t) {
    if (!$(t))
        return !1;
    let n = N.jn[t];
    return (0, p.yE)(e.dismissedQuestContent, R.a_[n]);
}
function ee(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.tag === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.tag) === l.w.COLLECTIBLE ? t : null;
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.type === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null;
    }).exhaustive();
}
function et(e) {
    let t = ee(e);
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
    return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? y.Z.Messages.DURATION_YEARS.format({ years: n.years }) : n.months > 0 ? y.Z.Messages.DURATION_MONTHS.format({ months: n.months }) : n.weeks > 0 ? y.Z.Messages.DURATION_WEEKS.format({ weeks: n.weeks }) : y.Z.Messages.DURATION_DAYS.format({ days: n.days });
}
function en(e) {
    return null != ee(e);
}
function er(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => !1).with({ configVersion: 2 }, e => e.rewardsConfig.rewards.some(e => e.type === l.w.IN_GAME)).exhaustive();
}
function ei(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => null).with({ configVersion: 2 }, e => {
        var t;
        return null !== (t = e.rewardsConfig.rewards.find(e => e.type === l.w.IN_GAME)) && void 0 !== t ? t : null;
    }).exhaustive();
}
function ea(e, t) {
    return e.targetedContent.includes(t);
}
function eo(e, t) {
    T.Z.captureException(e, {
        ...t,
        tags: {
            ...null == t ? void 0 : t.tags,
            app_context: 'quests'
        }
    });
}
function es(e, t) {
    if (null == t || null == e)
        return null;
    for (let n of t) {
        if (null == n.application_id)
            continue;
        let t = M(e, n.application_id);
        if (null != t)
            return t;
    }
    return null;
}
function el(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let eu = /\.([a-zA-Z0-9]+)$/, ec = /^data:video\/([a-zA-Z0-9]+)\;/;
function ed(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = eu.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = ec.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
    case 'webm':
        return 'video/webm';
    case 'mp4':
        return 'video/mp4';
    default:
        throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function e_(e) {
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
let eE = e => (0, a.EQ)(e.taskConfig).with({ type: u.L.FIRST_PARTY }, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);
function ef(e) {
    let {quest: t} = e;
    return (0, a.EQ)(t.config).with({ configVersion: 1 }, e => em(t, R.S7.PLAYTIME_TASK)).with({ configVersion: 2 }, e => em(t, R.S7.PLAYTIME_TASK) || eE(e)).exhaustive();
}
function eh(e) {
    return null != e && ef({ quest: e });
}
function ep(e) {
    return !em(e, R.S7.IN_HOUSE_CONSOLE_QUEST);
}
function em(e, t) {
    return v.r.build(e.config).features.has(t);
}
function eI(e) {
    let {
        quest: t,
        idx: n
    } = e;
    if (null == n)
        return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, a.EQ)(r).with({ tag: l.w.REWARD_CODE }, e => e).with({ type: l.w.REWARD_CODE }, e => e).otherwise(() => null);
}
function eT(e) {
    let {
            quest: t,
            useV2Variants: n = !1,
            taskDetails: r,
            thirdPartyTaskDetails: i,
            expiryDate: a
        } = e, o = t.config.messages.gameTitle, s = v.r.build(t.config).defaultReward.messages.nameWithArticle, {targetMinutes: l} = r, u = em(t, R.S7.IN_HOUSE_CONSOLE_QUEST), c = et(t.config), _ = eP(t) && eh(t);
    if (u && null != c)
        return function (e, t, n) {
            var r;
            let i = v.r.build(e.config).defaultReward.messages.nameWithArticle, a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null, o = et(e.config), {targetMinutes: s} = null != t ? t : eL(e);
            return a ? null != n ? y.Z.Messages.QUEST_REWARD_WITH_EXPIRATION_WITH_EXPIRY_DATE.format({
                reward: i,
                duration: o,
                expiryDate: n
            }) : y.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                reward: i,
                duration: o
            }) : null != n ? y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE_WITH_EXPIRY_DATE.format({
                targetMinutes: s,
                rewardNameWithArticle: i,
                duration: o,
                expiryDate: n
            }) : y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
                targetMinutes: s,
                rewardNameWithArticle: i,
                duration: o
            });
        }(t, r, a);
    if (_)
        return function (e, t, n) {
            var r;
            let i = v.r.build(e.config).defaultReward.messages.nameWithArticle, a = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null, o = et(e.config), {targetMinutes: s} = null != t ? t : eL(e), l = e.config.messages.gameTitle, u = () => {
                    d.Z.open(C.oAB.CONNECTIONS);
                };
            if (null != o)
                return a ? null != n ? y.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                    gameTitle: l,
                    reward: i,
                    streamingDurationRequirement: eL(e).targetMinutes,
                    onClick: u,
                    duration: o,
                    expiryDate: n
                }) : y.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                    gameTitle: l,
                    reward: i,
                    streamingDurationRequirement: eL(e).targetMinutes,
                    onClick: u,
                    duration: o
                }) : null != n ? y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                    gameTitle: l,
                    targetMinutes: s,
                    rewardNameWithArticle: i,
                    duration: o,
                    expiryDate: n
                }) : y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                    gameTitle: l,
                    targetMinutes: s,
                    rewardNameWithArticle: i,
                    duration: o
                });
            return null != n ? y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRY_DATE.format({
                gameTitle: l,
                targetMinutes: s,
                rewardNameWithArticle: i,
                expiryDate: n
            }) : y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
                gameTitle: l,
                targetMinutes: s,
                rewardNameWithArticle: i
            });
        }(t, r, a);
    if (eP(t))
        return function (e, t, n) {
            let r = v.r.build(e.config).defaultReward.messages.nameWithArticle, i = et(e.config), {targetMinutes: a} = null != t ? t : eL(e), o = e.config.messages.gameTitle;
            return null != i ? null != n ? y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r,
                duration: i,
                expiryDate: n
            }) : y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r,
                duration: i
            }) : null != n ? y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r,
                expiryDate: n
            }) : y.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
                gameTitle: o,
                targetMinutes: a,
                rewardNameWithArticle: r
            });
        }(t, r, a);
    else if (eh(t))
        return function (e, t, n) {
            let r = v.r.build(e.config).defaultReward.messages.nameWithArticle, i = et(e.config), {targetMinutes: a} = null != t ? t : eL(e), o = e.config.messages.gameTitle;
            return null != i ? null != n ? y.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                streamingDurationRequirement: a,
                rewardNameWithArticle: r,
                duration: i,
                expiryDate: n
            }) : y.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                gameTitle: o,
                streamingDurationRequirement: a,
                rewardNameWithArticle: r,
                duration: i
            }) : null != n ? y.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRY_DATE.format({
                gameTitle: o,
                questReward: r,
                streamingDurationRequirement: a,
                expiryDate: n
            }) : y.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
                gameTitle: o,
                questReward: r,
                streamingDurationRequirement: a
            });
        }(t, r, a);
    else if (e_({ quest: t }))
        return function (e, t, n, r) {
            let {targetMinutes: i} = null != n ? n : eL(t), a = t.config.messages.gameTitle;
            return e ? null != r ? y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2_WITH_EXPIRY_DATE.format({
                gameTitle: a,
                streamingDurationRequirement: i,
                expiryDate: r
            }) : y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2.format({
                gameTitle: a,
                streamingDurationRequirement: i
            }) : null != r ? y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_WITH_EXPIRY_DATE.format({
                gameTitle: a,
                streamingDurationRequirement: i,
                expiryDate: r
            }) : y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED.format({
                gameTitle: a,
                streamingDurationRequirement: i
            });
        }(n, t, r, a);
    return null != i ? i.description : null != c ? null != a ? y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD_WITH_EXPIRY_DATE.format({
        gameTitle: o,
        streamingDurationRequirement: l,
        questReward: s,
        duration: c,
        expiryDate: a
    }) : y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
        gameTitle: o,
        streamingDurationRequirement: l,
        questReward: s,
        duration: c
    }) : n ? null != a ? y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2_WITH_EXPIRY_DATE.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l,
        expiryDate: a
    }) : y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l
    }) : null != a ? y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRY_DATE.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l,
        expiryDate: a
    }) : y.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l
    });
}
function eg(e, t) {
    let n = v.r.build(e.config).application.link;
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
let eS = (e, t) => {
        (0, g._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }), (0, f.JG)(K(e));
    }, eA = (e, t) => e > 0 ? Math.min(t / e, 1) : 0, eN = e => ew(e) || A.Z.isProgressingOnDesktop(e.id), ev = (e, t) => {
        var n, r, i, a;
        let o = null === (a = e.userStatus) || void 0 === a ? void 0 : null === (i = a.progress) || void 0 === i ? void 0 : null === (r = i[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        return null != o && eN(e) ? (Date.now() - new Date(o).valueOf()) / h.Z.Millis.SECOND : 0;
    }, eO = (e, t) => {
        var n, r, i;
        let a = t.target, o = e.userStatus;
        if ((null == o ? void 0 : o.completedAt) != null)
            return a;
        let s = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName], l = null !== (i = null !== (r = null == s ? void 0 : s.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== i ? i : 0, u = ev(e, t);
        return Math.round(Math.min(a, l + u));
    }, eR = e => {
        var t, n;
        let {
                quest: r,
                taskType: i,
                includeTaskTypes: a = o.T.ALL
            } = e, s = r.config.taskConfig;
        if (s.type !== u.L.FIRST_PARTY)
            throw Error('Cannot retrieve task details for task config with type '.concat(s.type, '!'));
        let l = null != i ? i : null === (t = Object.values(s.tasks).filter(e => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName, c = null !== (n = s.tasks[l]) && void 0 !== n ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == c)
            throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = c.target, _ = eO(r, c);
        return {
            progressSeconds: _,
            targetSeconds: d,
            targetMinutes: Math.round(d / h.Z.Seconds.MINUTE),
            percentComplete: eA(d, _),
            taskType: l
        };
    }, eC = e => o.T.ALL.has(e) ? e : null, ey = e => {
        var t, n;
        let {
            quest: r,
            includeTaskTypes: i = o.T.ALL
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
            }).filter(m.lm)) {
            let t = eC(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eR({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eR({
            quest: r,
            includeTaskTypes: i
        });
    }, eD = e => {
        var t, n;
        let r = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0, i = Math.round(e.config.streamDurationRequirementMinutes * h.Z.Seconds.MINUTE);
        return {
            progressSeconds: r,
            targetSeconds: i,
            targetMinutes: e.config.streamDurationRequirementMinutes,
            percentComplete: eA(i, r),
            taskType: o.X.STREAM_ON_DESKTOP
        };
    }, eL = (e, t) => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, eD).with({ config: { configVersion: 2 } }, e => e.config.taskConfig.type !== u.L.FIRST_PARTY ? {
        progressSeconds: 0,
        targetSeconds: 1,
        targetMinutes: 1,
        percentComplete: 0,
        taskType: o.X.STREAM_ON_DESKTOP
    } : eM(e) ? ey({
        quest: e,
        includeTaskTypes: null != t ? t : ew(e) ? o.T.CONSOLE : o.T.ALL
    }) : eh(e) ? eR({
        quest: e,
        taskType: o.X.PLAY_ON_DESKTOP
    }) : eR({
        quest: e,
        taskType: o.X.STREAM_ON_DESKTOP
    })).exhaustive();
function eb(e) {
    return (0, a.EQ)(e.config).with({ configVersion: 1 }, e => null).with({ configVersion: 2 }, t => {
        var n, r, i, a;
        if (t.taskConfig.type !== u.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length)
            return null;
        let o = Object.keys(t.taskConfig.tasks)[0], s = t.taskConfig.tasks[o], l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0, c = eA(s.target, l);
        return {
            title: s.title,
            description: s.description,
            target: s.target,
            progress: l,
            completedRatio: c
        };
    }).exhaustive();
}
let eM = (r = [
        o.X.PLAY_ON_XBOX,
        o.X.PLAY_ON_PLAYSTATION
    ], e => r.some(t => null != e.config.taskConfig.tasks[t])), eP = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, eM).exhaustive(), eU = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i)
            return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    }, ew = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, e => null != e.userStatus && (eU(e.userStatus, o.X.PLAY_ON_XBOX) || eU(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive();
function ex(e, t) {
    let {
        quest: n,
        showInline: r
    } = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }), !r && d.Z.open(C.oAB.CONNECTIONS), c.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: e => (0, E.Z)({ platformType: e }),
        includedPlatformTypes: new Set([
            C.ABu.XBOX,
            C.ABu.PLAYSTATION
        ])
    });
}
function eG(e, t) {
    let {quest: n} = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    });
    d.Z.open(C.oAB.CONNECTIONS);
}
function ek() {
    return window.location.pathname.startsWith(C.Z5c.QUEST_HOME);
}
