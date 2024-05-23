"use strict";
n.r(t), n.d(t, {
  calculatePercentComplete: function() {
    return w
  },
  captureQuestsException: function() {
    return Y
  },
  getCollectiblesQuestReward: function() {
    return x
  },
  getContextualEntrypointHeading: function() {
    return k
  },
  getGameLogotypeAssetUrl: function() {
    return y
  },
  getGameTileAssetUrl: function() {
    return M
  },
  getHeroAssetUrl: function() {
    return v
  },
  getPlatformString: function() {
    return G
  },
  getPlaytimeQuestByApplicationId: function() {
    return A
  },
  getQuestBarHeroAssetUrl: function() {
    return D
  },
  getQuestByApplicationId: function() {
    return h
  },
  getQuestForTargetedContent: function() {
    return U
  },
  getQuestUrl: function() {
    return P
  },
  getQuestsFromActivities: function() {
    return j
  },
  getQuestsInstructionsToWinReward: function() {
    return J
  },
  getRewardAsset: function() {
    return L
  },
  getRewardCodeQuestReward: function() {
    return q
  },
  getVideoAssetMimeType: function() {
    return Z
  },
  hasCollectiblesQuestReward: function() {
    return F
  },
  hasPlaytimeTaskVariant: function() {
    return Q
  },
  includesTarget: function() {
    return H
  },
  isAssetAnimated: function() {
    return W
  },
  isDismissed: function() {
    return V
  },
  isDismissible: function() {
    return B
  },
  isQuestExpired: function() {
    return m
  },
  isQuestWithKnownConfigVersion: function() {
    return f
  },
  isTargetedForContent: function() {
    return b
  },
  isTieredRewardCodeQuest: function() {
    return X
  },
  questUserStatusFromServer: function() {
    return N
  },
  questWithUserStatusFromServer: function() {
    return p
  },
  questsEntitlementsFromServer: function() {
    return R
  },
  questsRewardCodeFromServer: function() {
    return O
  }
}), n("627341"), n("47120"), n("411104");
var i = n("278074"),
  r = n("551910"),
  s = n("887003");
n("597688");
var a = n("630388"),
  o = n("960048"),
  l = n("687744"),
  u = n("497505"),
  d = n("242755"),
  _ = n("566078"),
  c = n("312046"),
  E = n("46140"),
  I = n("689938");
let T = "https://cdn.discordapp.com/assets/quests/";

function f(e) {
  try {
    return (0, i.match)(e.config).with({
      config_version: 1
    }, () => !0).with({
      config_version: 2
    }, () => !0).exhaustive()
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1
  }
}

function S(e, t) {
  return null != _.SharedQuestFields.build(t.config).application.ids.find(t => t === e)
}

function h(e, t) {
  let n;
  for (let [i, r] of e)
    if (S(t, r) && !m(r)) {
      n = r;
      break
    } return n
}

function A(e, t) {
  return Array.from(e.values()).find(e => S(t, e) && !m(e) && Q({
    quest: e
  }))
}

function m(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function N(e) {
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
    progress: function(e) {
      let t = {};
      for (let [n, i] of Object.entries(e)) t[n] = {
        eventName: i.event_name,
        value: i.value,
        updatedAt: i.updated_at,
        completedAt: i.completed_at
      };
      return t
    }(e.progress)
  }
}

function p(e) {
  var t;
  return {
    id: e.id,
    preview: e.preview,
    config: (t = e.config, (0, i.match)(t).with({
      config_version: 1
    }, e => {
      var t, n, i;
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
          rewardRedemptionInstructionsByPlatform: function(e) {
            let t = {};
            for (let n in e) {
              let i = parseInt(n);
              u.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
            }
            return t
          }(t.reward_redemption_instructions_by_platform),
          gameTitle: t.game_title,
          gamePublisher: t.game_publisher
        },
        colors: {
          primary: (n = e.colors).primary,
          secondary: n.secondary
        },
        rewardsConfig: (0, l.questRewardsConfigFromServer)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => u.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
        assets: {
          rewardTile: (i = e.assets).reward_tile,
          hero: i.hero,
          questBarHero: i.quest_bar_hero,
          gameTile: i.game_tile,
          logotype: i.logotype
        },
        inGameQuestConfig: null,
        variants: e.variants,
        supplementaryApplicationIds: e.supplementary_application_ids
      }
    }).with({
      config_version: 2
    }, e => (0, c.questFromServerV2)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : N(e.user_status),
    targetedContent: e.targeted_content
  }
}

function O(e) {
  var t;
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at,
    tier: null !== (t = e.tier) && void 0 !== t ? t : null
  }
}

function C(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: function(e) {
      if ((null == e ? void 0 : e.quest_rewards) == null) return null;
      let t = e.quest_rewards;
      switch (t.reward.tag) {
        case s.QuestRewardTypes.IN_GAME:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag
              }
            }
          };
        case s.QuestRewardTypes.REWARD_CODE:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag,
                rewardCode: O(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function R(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(C),
    errors: e.errors
  }
}

function g(e, t) {
  return e.startsWith("data") ? e : t
}
let L = e => {
    var t, n;
    let i = q({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = _.SharedQuestFields.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: g(s, "".concat(T).concat(e.id, "/").concat(s))
    }
  },
  v = e => g(e.config.assets.hero, "".concat(T).concat(e.id, "/").concat(e.config.assets.hero)),
  D = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : g(e.config.assets.questBarHero, "".concat(T).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  M = (e, t) => g(e.config.assets.gameTile, "".concat(T).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  y = (e, t) => g(e.config.assets.logotype, "".concat(T).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  P = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function U(e, t) {
  for (let [n, i] of e)
    if (!m(i) && i.targetedContent.includes(t)) return i;
  return null
}

function b(e, t) {
  return e.targetedContent.includes(t)
}
let G = e => {
  switch (e) {
    case u.QuestRewardCodePlatforms.XBOX:
      return I.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case u.QuestRewardCodePlatforms.PLAYSTATION:
      return I.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case u.QuestRewardCodePlatforms.SWITCH:
      return I.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case u.QuestRewardCodePlatforms.PC:
      return I.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case u.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return I.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function w(e) {
  if (null == e.userStatus) return 0;
  let {
    streamProgressSeconds: t,
    completedAt: n
  } = e.userStatus;
  if (null != n) return 1;
  let i = _.SharedQuestFields.build(e.config).streamTargetSeconds;
  return null == i ? 0 : Math.min(t / i, 1)
}

function k(e) {
  var t, n;
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return I.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let t = w(e);
    return t >= .75 ? I.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? I.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? I.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : I.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return I.default.Messages.QUESTS_TITLE.format({
    questName: e.config.messages.questName
  })
}

function B(e) {
  return Object.keys(E.DismissibleQuestContentFlags).includes(u.QuestContent[e])
}

function V(e, t) {
  if (!B(t)) return !1;
  let n = u.QuestContent[t];
  return (0, a.hasFlag)(e.dismissedQuestContent, E.DismissibleQuestContentFlags[n])
}

function x(e) {
  return (0, i.match)(e).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.tag === s.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.tag) === s.QuestRewardTypes.COLLECTIBLE ? t : null
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.type === s.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === s.QuestRewardTypes.COLLECTIBLE ? t : null
  }).exhaustive()
}

function F(e) {
  return null != x(e)
}

function H(e, t) {
  return e.targetedContent.includes(t)
}

function Y(e, t) {
  o.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function j(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = h(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function W(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let K = /\.([a-zA-Z0-9]+)$/,
  z = /^data:video\/([a-zA-Z0-9]+)\;/;

function Z(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = K.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = z.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function X(e) {
  let {
    quest: {
      config: t
    }
  } = e;
  return (0, i.match)(t).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === r.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === s.QuestRewardTypes.REWARD_CODE)
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === r.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === s.QuestRewardTypes.REWARD_CODE)
  }).exhaustive()
}

function Q(e) {
  let {
    quest: t
  } = e;
  return _.SharedQuestFields.build(t.config).features.has(E.QuestVariants.PLAYTIME_TASK)
}

function q(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let r = t.config.rewardsConfig.rewards[n];
  return (0, i.match)(r).with({
    tag: s.QuestRewardTypes.REWARD_CODE
  }, e => e).with({
    type: s.QuestRewardTypes.REWARD_CODE
  }, e => e).otherwise(() => null)
}

function J(e) {
  let {
    quest: t,
    location: n,
    useV2Variants: i = !1
  } = e, r = t.config.messages.gameTitle, {
    defaultReward: s,
    streamTargetMinutes: a
  } = _.SharedQuestFields.build(t.config);
  return (0, d.isEligibleForQuestPlaytime)({
    location: n
  }) && Q({
    quest: t
  }) ? I.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  }) : X({
    quest: t
  }) ? (i ? I.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : I.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: r,
    streamingDurationRequirement: a
  }) : (i ? I.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : I.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  })
}