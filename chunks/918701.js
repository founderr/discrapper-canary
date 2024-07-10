let r;
n.d(t, {
    $H: function () {
        return e_;
    },
    $J: function () {
        return ey;
    },
    AV: function () {
        return q;
    },
    Bz: function () {
        return eL;
    },
    CE: function () {
        return M;
    },
    FE: function () {
        return em;
    },
    GN: function () {
        return Q;
    },
    Gh: function () {
        return eN;
    },
    Gs: function () {
        return Y;
    },
    Jg: function () {
        return ei;
    },
    Kr: function () {
        return J;
    },
    Mi: function () {
        return K;
    },
    Nj: function () {
        return ed;
    },
    OG: function () {
        return eP;
    },
    Qe: function () {
        return D;
    },
    Rs: function () {
        return j;
    },
    U3: function () {
        return U;
    },
    V$: function () {
        return eM;
    },
    WP: function () {
        return w;
    },
    Xh: function () {
        return k;
    },
    Xv: function () {
        return ee;
    },
    _: function () {
        return W;
    },
    b7: function () {
        return eR;
    },
    dl: function () {
        return eE;
    },
    f2: function () {
        return eI;
    },
    gI: function () {
        return eb;
    },
    gO: function () {
        return F;
    },
    il: function () {
        return eO;
    },
    j8: function () {
        return V;
    },
    lQ: function () {
        return b;
    },
    mN: function () {
        return el;
    },
    nP: function () {
        return ea;
    },
    o9: function () {
        return eh;
    },
    oo: function () {
        return eu;
    },
    pG: function () {
        return ep;
    },
    ph: function () {
        return H;
    },
    t2: function () {
        return z;
    },
    uo: function () {
        return Z;
    },
    vQ: function () {
        return et;
    },
    vR: function () {
        return en;
    },
    xn: function () {
        return $;
    },
    yI: function () {
        return x;
    },
    ys: function () {
        return er;
    },
    zE: function () {
        return X;
    },
    zK: function () {
        return ef;
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
    return Array.from(e.values()).find(e => L(t, e) && !P(e) && ed({ quest: e }));
}
function P(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function U(e) {
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
function w(e) {
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
        userStatus: null == e.user_status ? null : U(e.user_status),
        targetedContent: e.targeted_content
    };
}
function x(e) {
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
function G(e) {
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
                            rewardCode: x(t.reward.reward_code)
                        }
                    }
                };
            }
        }(e.tenant_metadata)
    };
}
function k(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(G),
        errors: e.errors
    };
}
function B(e, t) {
    return e.startsWith('data') ? e : t;
}
let F = e => {
        var t, n;
        let r = eh({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }), i = N.r.build(e.config).defaultRewardAsset, a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: B(a, ''.concat(y).concat(e.id, '/').concat(a))
        };
    }, V = e => B(e.config.assets.hero, ''.concat(y).concat(e.id, '/').concat(e.config.assets.hero)), H = e => B(e.config.assets.questBarHero, ''.concat(y).concat(e.id, '/').concat(e.config.assets.questBarHero)), Z = (e, t) => B(e.config.assets.gameTile, ''.concat(y).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)), Y = (e, t) => B(e.config.assets.logotype, ''.concat(y).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)), j = e => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function W(e, t) {
    for (let [n, r] of e)
        if (!P(r) && r.targetedContent.includes(t))
            return r;
    return null;
}
function K(e, t) {
    return e.targetedContent.includes(t);
}
let z = e => {
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
function q(e) {
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
function Q(e) {
    return e === A.jn.QUEST_BAR_V2 || Object.keys(O.a_).includes(A.jn[e]);
}
function X(e, t) {
    if (!Q(t))
        return !1;
    let n = A.jn[t];
    return (0, p.yE)(e.dismissedQuestContent, O.a_[n]);
}
function $(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.tag === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.tag) === l.w.COLLECTIBLE ? t : null;
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.type === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null;
    }).exhaustive();
}
function J(e) {
    let t = $(e);
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
function ee(e) {
    return null != $(e);
}
function et(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => !1).with({ configVersion: 2 }, e => e.rewardsConfig.rewards.some(e => e.type === l.w.IN_GAME)).exhaustive();
}
function en(e, t) {
    return e.targetedContent.includes(t);
}
function er(e, t) {
    T.Z.captureException(e, {
        ...t,
        tags: {
            ...null == t ? void 0 : t.tags,
            app_context: 'quests'
        }
    });
}
function ei(e, t) {
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
function ea(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let eo = /\.([a-zA-Z0-9]+)$/, es = /^data:video\/([a-zA-Z0-9]+)\;/;
function el(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = eo.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = es.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
    case 'webm':
        return 'video/webm';
    case 'mp4':
        return 'video/mp4';
    default:
        throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function eu(e) {
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
let ec = e => (0, a.EQ)(e.taskConfig).with({ type: u.L.FIRST_PARTY }, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);
function ed(e) {
    let {quest: t} = e;
    return (0, a.EQ)(t.config).with({ configVersion: 1 }, e => ef(t, O.S7.PLAYTIME_TASK)).with({ configVersion: 2 }, e => ef(t, O.S7.PLAYTIME_TASK) || ec(e)).exhaustive();
}
function e_(e) {
    return null != e && ed({ quest: e });
}
function eE(e) {
    return !ef(e, O.S7.IN_HOUSE_CONSOLE_QUEST);
}
function ef(e, t) {
    return N.r.build(e.config).features.has(t);
}
function eh(e) {
    let {
        quest: t,
        idx: n
    } = e;
    if (null == n)
        return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, a.EQ)(r).with({ tag: l.w.REWARD_CODE }, e => e).with({ type: l.w.REWARD_CODE }, e => e).otherwise(() => null);
}
function ep(e) {
    var t;
    let {
            quest: n,
            useV2Variants: r = !1,
            taskDetails: i,
            thirdPartyTaskDetails: a
        } = e, o = n.config.messages.gameTitle, s = N.r.build(n.config).defaultReward.messages.nameWithArticle, {targetMinutes: l} = null != i ? i : eO(n), u = ef(n, O.S7.IN_HOUSE_CONSOLE_QUEST), c = J(n.config), _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, E = ey(n) && e_(n);
    if (u && null != c)
        return _ ? C.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
            reward: s,
            duration: c
        }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
            targetMinutes: l,
            rewardNameWithArticle: s,
            duration: c
        });
    if (E)
        return null != c ? _ ? C.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: o,
            reward: s,
            streamingDurationRequirement: eO(n).targetMinutes,
            onClick: () => {
                d.Z.open(R.oAB.CONNECTIONS);
            },
            duration: c
        }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: o,
            targetMinutes: l,
            rewardNameWithArticle: s,
            duration: c
        }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
            gameTitle: o,
            targetMinutes: l,
            rewardNameWithArticle: s
        });
    if (ey(n))
        return null != c ? C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: o,
            targetMinutes: l,
            rewardNameWithArticle: s,
            duration: c
        }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
            gameTitle: o,
            targetMinutes: l,
            rewardNameWithArticle: s
        });
    else if (e_(n))
        return null != c ? C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: o,
            streamingDurationRequirement: l,
            rewardNameWithArticle: s,
            duration: c
        }) : C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
            gameTitle: o,
            questReward: s,
            streamingDurationRequirement: l
        });
    else if (eu({ quest: n }))
        return (r ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
            gameTitle: o,
            streamingDurationRequirement: l
        });
    return null != a ? a.description : null != c ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
        gameTitle: o,
        streamingDurationRequirement: l,
        questReward: s,
        duration: c
    }) : (r ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
        gameTitle: o,
        questReward: s,
        streamingDurationRequirement: l
    });
}
function em(e, t) {
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
let eI = (e, t) => {
        (0, g._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }), (0, f.JG)(j(e));
    }, eT = (e, t) => e > 0 ? Math.min(t / e, 1) : 0, eg = e => {
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
            percentComplete: eT(I, T),
            taskType: p
        };
    }, eS = e => o.T.ALL.has(e) ? e : null, eA = e => {
        var t, n;
        let {
            quest: r,
            includeTaskTypes: i = o.T.ALL
        } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(m.lm)) {
            let t = eS(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eg({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eg({
            quest: r,
            includeTaskTypes: i
        });
    }, eN = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => null).with({ config: { configVersion: 2 } }, e => eC(e) ? eA({
        quest: e,
        includeTaskTypes: o.T.CONSOLE
    }) : null).exhaustive(), ev = e => {
        var t, n;
        let r = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0, i = Math.round(e.config.streamDurationRequirementMinutes * h.Z.Seconds.MINUTE);
        return {
            progressSeconds: r,
            targetSeconds: i,
            targetMinutes: e.config.streamDurationRequirementMinutes,
            percentComplete: eT(i, r),
            taskType: o.X.STREAM_ON_DESKTOP
        };
    }, eO = (e, t) => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, ev).with({ config: { configVersion: 2 } }, e => e.config.taskConfig.type !== u.L.FIRST_PARTY ? {
        progressSeconds: 0,
        targetSeconds: 1,
        targetMinutes: 1,
        percentComplete: 0,
        taskType: o.X.STREAM_ON_DESKTOP
    } : eC(e) ? eA({
        quest: e,
        includeTaskTypes: null != t ? t : eL(e) ? o.T.CONSOLE : o.T.ALL
    }) : e_(e) ? eg({
        quest: e,
        taskType: o.X.PLAY_ON_DESKTOP
    }) : eg({
        quest: e,
        taskType: o.X.STREAM_ON_DESKTOP
    })).exhaustive();
function eR(e) {
    return (0, a.EQ)(e.config).with({ configVersion: 1 }, e => null).with({ configVersion: 2 }, t => {
        var n, r, i, a;
        if (t.taskConfig.type !== u.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length)
            return null;
        let o = Object.keys(t.taskConfig.tasks)[0], s = t.taskConfig.tasks[o], l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0, c = eT(s.target, l);
        return {
            title: s.title,
            description: s.description,
            target: s.target,
            progress: l,
            completedRatio: c
        };
    }).exhaustive();
}
let eC = (r = [
        o.X.PLAY_ON_XBOX,
        o.X.PLAY_ON_PLAYSTATION
    ], e => r.some(t => null != e.config.taskConfig.tasks[t])), ey = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, eC).exhaustive(), eD = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i)
            return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    }, eL = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, e => null != e.userStatus && (eD(e.userStatus, o.X.PLAY_ON_XBOX) || eD(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive();
function eb(e, t) {
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
function eM(e, t) {
    let {quest: n} = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    });
    d.Z.open(R.oAB.CONNECTIONS);
}
function eP() {
    return window.location.pathname.startsWith(R.Z5c.QUEST_HOME);
}
