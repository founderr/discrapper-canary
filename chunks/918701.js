"use strict";
n.r(t), n.d(t, {
  calculatePercentComplete: function() {
    return x
  },
  captureQuestsException: function() {
    return z
  },
  copyShareLink: function() {
    return er
  },
  getCollectiblesQuestReward: function() {
    return j
  },
  getContextualEntrypointHeading: function() {
    return F
  },
  getGameLogotypeAssetUrl: function() {
    return G
  },
  getGameTileAssetUrl: function() {
    return b
  },
  getHeroAssetUrl: function() {
    return P
  },
  getPlatformString: function() {
    return V
  },
  getPlaytimeQuestByApplicationId: function() {
    return O
  },
  getQuestBarHeroAssetUrl: function() {
    return U
  },
  getQuestByApplicationId: function() {
    return p
  },
  getQuestForTargetedContent: function() {
    return k
  },
  getQuestUrl: function() {
    return w
  },
  getQuestsFromActivities: function() {
    return Z
  },
  getQuestsInstructionsToWinReward: function() {
    return en
  },
  getRewardAsset: function() {
    return y
  },
  getRewardCodeQuestReward: function() {
    return et
  },
  getVideoAssetMimeType: function() {
    return J
  },
  hasCollectiblesQuestReward: function() {
    return W
  },
  hasPlaytimeTaskVariant: function() {
    return ee
  },
  includesTarget: function() {
    return K
  },
  isAssetAnimated: function() {
    return X
  },
  isDismissed: function() {
    return Y
  },
  isDismissible: function() {
    return H
  },
  isQuestExpired: function() {
    return C
  },
  isQuestWithKnownConfigVersion: function() {
    return m
  },
  isTargetedForContent: function() {
    return B
  },
  isTieredRewardCodeQuest: function() {
    return $
  },
  openGameLink: function() {
    return ei
  },
  questUserStatusFromServer: function() {
    return R
  },
  questWithUserStatusFromServer: function() {
    return g
  },
  questsEntitlementsFromServer: function() {
    return D
  },
  questsRewardCodeFromServer: function() {
    return L
  }
}), n("627341"), n("47120"), n("411104");
var i = n("278074"),
  r = n("551910"),
  s = n("887003"),
  a = n("782568");
n("597688");
var o = n("572004"),
  l = n("630388"),
  u = n("49012"),
  d = n("960048"),
  _ = n("617136"),
  c = n("687744"),
  E = n("497505"),
  I = n("242755"),
  T = n("566078"),
  f = n("312046"),
  S = n("46140"),
  h = n("689938");
let A = "https://cdn.discordapp.com/assets/quests/";

function m(e) {
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

function N(e, t) {
  return null != T.SharedQuestFields.build(t.config).application.ids.find(t => t === e)
}

function p(e, t) {
  let n;
  for (let [i, r] of e)
    if (N(t, r) && !C(r)) {
      n = r;
      break
    } return n
}

function O(e, t) {
  return Array.from(e.values()).find(e => N(t, e) && !C(e) && ee({
    quest: e
  }))
}

function C(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function R(e) {
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

function g(e) {
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
              E.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
        rewardsConfig: (0, c.questRewardsConfigFromServer)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => E.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
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
    }, e => (0, f.questFromServerV2)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : R(e.user_status),
    targetedContent: e.targeted_content
  }
}

function L(e) {
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

function v(e) {
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
                rewardCode: L(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function D(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(v),
    errors: e.errors
  }
}

function M(e, t) {
  return e.startsWith("data") ? e : t
}
let y = e => {
    var t, n;
    let i = et({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = T.SharedQuestFields.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: M(s, "".concat(A).concat(e.id, "/").concat(s))
    }
  },
  P = e => M(e.config.assets.hero, "".concat(A).concat(e.id, "/").concat(e.config.assets.hero)),
  U = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : M(e.config.assets.questBarHero, "".concat(A).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  b = (e, t) => M(e.config.assets.gameTile, "".concat(A).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  G = (e, t) => M(e.config.assets.logotype, "".concat(A).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  w = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function k(e, t) {
  for (let [n, i] of e)
    if (!C(i) && i.targetedContent.includes(t)) return i;
  return null
}

function B(e, t) {
  return e.targetedContent.includes(t)
}
let V = e => {
  switch (e) {
    case E.QuestRewardCodePlatforms.XBOX:
      return h.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case E.QuestRewardCodePlatforms.PLAYSTATION:
      return h.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case E.QuestRewardCodePlatforms.SWITCH:
      return h.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case E.QuestRewardCodePlatforms.PC:
      return h.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case E.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return h.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function x(e) {
  if (null == e.userStatus) return 0;
  let {
    streamProgressSeconds: t,
    completedAt: n
  } = e.userStatus;
  if (null != n) return 1;
  let i = T.SharedQuestFields.build(e.config).streamTargetSeconds;
  return null == i ? 0 : Math.min(t / i, 1)
}

function F(e) {
  var t, n;
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return h.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let t = x(e);
    return t >= .75 ? h.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? h.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? h.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : h.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return h.default.Messages.QUESTS_TITLE.format({
    questName: e.config.messages.questName
  })
}

function H(e) {
  return Object.keys(S.DismissibleQuestContentFlags).includes(E.QuestContent[e])
}

function Y(e, t) {
  if (!H(t)) return !1;
  let n = E.QuestContent[t];
  return (0, l.hasFlag)(e.dismissedQuestContent, S.DismissibleQuestContentFlags[n])
}

function j(e) {
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

function W(e) {
  return null != j(e)
}

function K(e, t) {
  return e.targetedContent.includes(t)
}

function z(e, t) {
  d.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function Z(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = p(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function X(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let Q = /\.([a-zA-Z0-9]+)$/,
  q = /^data:video\/([a-zA-Z0-9]+)\;/;

function J(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = Q.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = q.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function $(e) {
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

function ee(e) {
  let {
    quest: t
  } = e;
  return T.SharedQuestFields.build(t.config).features.has(S.QuestVariants.PLAYTIME_TASK)
}

function et(e) {
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

function en(e) {
  let {
    quest: t,
    location: n,
    useV2Variants: i = !1
  } = e, r = t.config.messages.gameTitle, {
    defaultReward: s,
    streamTargetMinutes: a
  } = T.SharedQuestFields.build(t.config);
  return (0, I.isEligibleForQuestPlaytime)({
    location: n
  }) && ee({
    quest: t
  }) ? h.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  }) : $({
    quest: t
  }) ? (i ? h.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : h.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: r,
    streamingDurationRequirement: a
  }) : (i ? h.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : h.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  })
}

function ei(e, t) {
  let n = T.SharedQuestFields.build(e.config).application.link;
  (0, u.handleClick)({
    href: n,
    onConfirm: () => {
      (0, _.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, a.default)(n)
    }
  })
}
let er = (e, t) => {
  (0, _.trackQuestContentClicked)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position
  }), (0, o.copy)(w(e))
}