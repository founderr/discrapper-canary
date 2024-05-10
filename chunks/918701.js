"use strict";
n.r(t), n.d(t, {
  calculatePercentComplete: function() {
    return P
  },
  captureQuestsException: function() {
    return V
  },
  getContextualEntrypointHeading: function() {
    return U
  },
  getGameLogotypeAssetUrl: function() {
    return L
  },
  getGameTileAssetUrl: function() {
    return g
  },
  getHeroAssetUrl: function() {
    return C
  },
  getPlatformString: function() {
    return y
  },
  getQuestBarHeroAssetUrl: function() {
    return R
  },
  getQuestByApplicationId: function() {
    return T
  },
  getQuestForTargetedContent: function() {
    return D
  },
  getQuestUrl: function() {
    return v
  },
  getQuestsFromActivities: function() {
    return x
  },
  getQuestsInstructionsToWinReward: function() {
    return Z
  },
  getRewardAssetUrl: function() {
    return O
  },
  getRewardCodeQuestReward: function() {
    return z
  },
  getVideoAssetMimeType: function() {
    return j
  },
  hasPlaytimeTaskVariant: function() {
    return K
  },
  hasQuestCollectibleRewards: function() {
    return B
  },
  includesTarget: function() {
    return k
  },
  isAssetAnimated: function() {
    return F
  },
  isCollectibleReward: function() {
    return w
  },
  isDismissed: function() {
    return G
  },
  isDismissible: function() {
    return b
  },
  isQuestExpired: function() {
    return f
  },
  isQuestWithKnownConfigVersion: function() {
    return I
  },
  isTargetedForContent: function() {
    return M
  },
  isTieredRewardCodeQuest: function() {
    return W
  },
  questUserStatusFromServer: function() {
    return S
  },
  questWithUserStatusFromServer: function() {
    return h
  },
  questsEntitlementsFromServer: function() {
    return N
  },
  questsRewardCodeFromServer: function() {
    return A
  }
}), n("627341"), n("47120"), n("411104");
var i = n("278074"),
  r = n("551910"),
  a = n("887003");
n("597688");
var s = n("630388"),
  o = n("960048"),
  l = n("687744"),
  u = n("497505"),
  d = n("242755"),
  _ = n("46140"),
  c = n("689938");
let E = "https://cdn.discordapp.com/assets/quests/";

function I(e) {
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

function T(e, t) {
  let n;
  for (let [i, r] of e)
    if (r.config.applicationId === t && !f(r)) {
      n = r;
      break
    } return n
}

function f(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function S(e) {
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

function h(e) {
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
        variants: e.variants
      }
    }).with({
      config_version: 2
    }, e => ({
      configVersion: 2,
      expiresAt: e.expires_at,
      getGameLink: e.get_game_link,
      applicationId: e.application_id,
      applicationName: e.application_name,
      variants: e.variants,
      streamDurationRequirementMinutes: 0,
      rewardCodeExpiresAt: "",
      gameTitle: "",
      messages: {
        questName: "",
        rewardName: "",
        rewardNameWithArticle: "",
        rewardRedemptionInstructionsByPlatform: {},
        gameTitle: "",
        gamePublisher: ""
      },
      colors: {
        primary: "",
        secondary: ""
      },
      rewardsConfig: {
        assignmentMethod: r.QuestRewardAssignmentMethods.ALL,
        rewards: []
      },
      rewardCodePlatforms: [],
      assets: {
        rewardTile: "",
        hero: "",
        questBarHero: "",
        gameTile: "",
        logotype: ""
      },
      inGameQuestConfig: null
    })).exhaustive()),
    userStatus: null == e.user_status ? null : S(e.user_status),
    targetedContent: e.targeted_content
  }
}

function A(e) {
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

function m(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: function(e) {
      if ((null == e ? void 0 : e.quest_rewards) == null) return null;
      let t = e.quest_rewards;
      switch (t.reward.tag) {
        case a.QuestRewardTypes.IN_GAME:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag
              }
            }
          };
        case a.QuestRewardTypes.REWARD_CODE:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag,
                rewardCode: A(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function N(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(m),
    errors: e.errors
  }
}

function p(e, t) {
  return e.startsWith("data") ? e : t
}
let O = e => {
    var t, n;
    let i = W({
        quest: e
      }) ? z({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }) : null,
      r = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : e.config.assets.rewardTile;
    return p(r, "".concat(E).concat(e.id, "/").concat(r))
  },
  C = e => p(e.config.assets.hero, "".concat(E).concat(e.id, "/").concat(e.config.assets.hero)),
  R = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : p(e.config.assets.questBarHero, "".concat(E).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  g = (e, t) => p(e.config.assets.gameTile, "".concat(E).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  L = (e, t) => p(e.config.assets.logotype, "".concat(E).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  v = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function D(e, t) {
  for (let [n, i] of e)
    if (!f(i) && i.targetedContent.includes(t)) return i;
  return null
}

function M(e, t) {
  return e.targetedContent.includes(t)
}
let y = e => {
  switch (e) {
    case u.QuestRewardCodePlatforms.XBOX:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case u.QuestRewardCodePlatforms.PLAYSTATION:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case u.QuestRewardCodePlatforms.SWITCH:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case u.QuestRewardCodePlatforms.PC:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case u.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function P(e) {
  if (null == e.userStatus) return 0;
  let {
    streamProgressSeconds: t,
    completedAt: n
  } = e.userStatus;
  if (null != n) return 1;
  let {
    streamDurationRequirementMinutes: i
  } = e.config;
  return Math.min(t / 60 / i, 1)
}

function U(e) {
  var t, n;
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return c.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let t = P(e);
    return t >= .75 ? c.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? c.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? c.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : c.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return c.default.Messages.QUESTS_TITLE.format({
    questName: e.config.messages.questName
  })
}

function b(e) {
  return Object.keys(_.DismissibleQuestContentFlags).includes(u.QuestContent[e])
}

function G(e, t) {
  if (!b(t)) return !1;
  let n = u.QuestContent[t];
  return (0, s.hasFlag)(e.dismissedQuestContent, _.DismissibleQuestContentFlags[n])
}

function w(e) {
  return e.tag === a.QuestRewardTypes.COLLECTIBLE
}

function B(e) {
  return e.rewardsConfig.rewards.some(w)
}

function k(e, t) {
  return e.targetedContent.includes(t)
}

function V(e, t) {
  o.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function x(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = T(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function F(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let H = /\.([a-zA-Z0-9]+)$/,
  Y = /^data:video\/([a-zA-Z0-9]+)\;/;

function j(e) {
  var t, n, i, r, a;
  switch (null !== (a = null === (n = H.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (r = Y.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function W(e) {
  let {
    quest: t
  } = e, n = t.config.rewardsConfig;
  return n.assignmentMethod === r.QuestRewardAssignmentMethods.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.tag === a.QuestRewardTypes.REWARD_CODE)
}

function K(e) {
  let {
    quest: t
  } = e;
  return t.config.variants.includes(_.QuestVariants.PLAYTIME_TASK)
}

function z(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let i = t.config.rewardsConfig.rewards[n];
  if (null == i);
  else if (i.tag === a.QuestRewardTypes.REWARD_CODE) return i;
  return null
}

function Z(e) {
  let {
    quest: t,
    location: n,
    useV2Variants: i = !1
  } = e, {
    messages: r,
    streamDurationRequirementMinutes: a
  } = t.config, {
    gameTitle: s,
    rewardNameWithArticle: o
  } = r;
  return (0, d.isEligibleForQuestPlaytime)({
    location: n
  }) && K({
    quest: t
  }) ? c.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: s,
    questReward: o,
    streamingDurationRequirement: a
  }) : W({
    quest: t
  }) ? (i ? c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: s,
    streamingDurationRequirement: a
  }) : (i ? c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : c.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: s,
    questReward: o,
    streamingDurationRequirement: a
  })
}