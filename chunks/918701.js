"use strict";
n.r(t), n.d(t, {
  calculatePercentComplete: function() {
    return Y
  },
  captureQuestsException: function() {
    return Q
  },
  copyShareLink: function() {
    return eu
  },
  getCollectiblesQuestReward: function() {
    return z
  },
  getContextualEntrypointHeading: function() {
    return j
  },
  getGameLogotypeAssetUrl: function() {
    return B
  },
  getGameTileAssetUrl: function() {
    return k
  },
  getHeroAssetUrl: function() {
    return G
  },
  getPlatformString: function() {
    return H
  },
  getPlayOnDesktopQuestByApplicationId: function() {
    return g
  },
  getQuestBarHeroAssetUrl: function() {
    return w
  },
  getQuestByApplicationId: function() {
    return R
  },
  getQuestForTargetedContent: function() {
    return x
  },
  getQuestTaskDetails: function() {
    return e_
  },
  getQuestUrl: function() {
    return V
  },
  getQuestsFromActivities: function() {
    return q
  },
  getQuestsInstructionsToWinReward: function() {
    return eo
  },
  getRewardAsset: function() {
    return b
  },
  getRewardCodeQuestReward: function() {
    return ea
  },
  getVideoAssetMimeType: function() {
    return et
  },
  hasCollectiblesQuestReward: function() {
    return Z
  },
  hasPlayOnDesktopTask: function() {
    return er
  },
  includesTarget: function() {
    return X
  },
  isAssetAnimated: function() {
    return J
  },
  isDismissed: function() {
    return K
  },
  isDismissible: function() {
    return W
  },
  isQuestExpired: function() {
    return L
  },
  isQuestWithKnownConfigVersion: function() {
    return O
  },
  isTargetedForContent: function() {
    return F
  },
  isTieredRewardCodeQuest: function() {
    return en
  },
  openGameLink: function() {
    return el
  },
  questUserStatusFromServer: function() {
    return v
  },
  questWithUserStatusFromServer: function() {
    return D
  },
  questsEntitlementsFromServer: function() {
    return P
  },
  questsRewardCodeFromServer: function() {
    return M
  },
  shouldUsePlayOnDesktopTask: function() {
    return es
  }
}), n("627341"), n("47120"), n("411104");
var i = n("278074"),
  r = n("754700"),
  s = n("551910"),
  a = n("887003"),
  o = n("742635"),
  l = n("782568");
n("597688");
var u = n("572004"),
  d = n("70956"),
  _ = n("630388"),
  c = n("49012"),
  E = n("960048"),
  I = n("617136"),
  T = n("687744"),
  f = n("497505"),
  S = n("242755"),
  h = n("566078"),
  A = n("312046"),
  m = n("46140"),
  N = n("689938");
let p = "https://cdn.discordapp.com/assets/quests/";

function O(e) {
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

function C(e, t) {
  return null != h.SharedQuestFields.build(t.config).application.ids.find(t => t === e)
}

function R(e, t) {
  let n;
  for (let [i, r] of e)
    if (C(t, r) && !L(r)) {
      n = r;
      break
    } return n
}

function g(e, t) {
  return Array.from(e.values()).find(e => C(t, e) && !L(e) && er({
    quest: e
  }))
}

function L(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function v(e) {
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

function D(e) {
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
              f.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
        rewardsConfig: (0, T.questRewardsConfigFromServer)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => f.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
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
    }, e => (0, A.questFromServerV2)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : v(e.user_status),
    targetedContent: e.targeted_content
  }
}

function M(e) {
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

function y(e) {
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
                rewardCode: M(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function P(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(y),
    errors: e.errors
  }
}

function U(e, t) {
  return e.startsWith("data") ? e : t
}
let b = e => {
    var t, n;
    let i = ea({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = h.SharedQuestFields.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: U(s, "".concat(p).concat(e.id, "/").concat(s))
    }
  },
  G = e => U(e.config.assets.hero, "".concat(p).concat(e.id, "/").concat(e.config.assets.hero)),
  w = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : U(e.config.assets.questBarHero, "".concat(p).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  k = (e, t) => U(e.config.assets.gameTile, "".concat(p).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  B = (e, t) => U(e.config.assets.logotype, "".concat(p).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  V = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function x(e, t) {
  for (let [n, i] of e)
    if (!L(i) && i.targetedContent.includes(t)) return i;
  return null
}

function F(e, t) {
  return e.targetedContent.includes(t)
}
let H = e => {
  switch (e) {
    case f.QuestRewardCodePlatforms.XBOX:
      return N.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case f.QuestRewardCodePlatforms.PLAYSTATION:
      return N.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case f.QuestRewardCodePlatforms.SWITCH:
      return N.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case f.QuestRewardCodePlatforms.PC:
      return N.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case f.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return N.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function Y(e) {
  let {
    quest: t,
    location: n
  } = e;
  if (null == t.userStatus) return 0;
  if (null != t.userStatus.completedAt) return 1;
  let {
    progressSeconds: i,
    targetSeconds: r
  } = e_({
    quest: t,
    location: n
  });
  return r <= 0 ? 0 : Math.min(i / r, 1)
}

function j(e) {
  var t, n;
  let {
    quest: i,
    location: r
  } = e;
  if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return N.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let e = Y({
      quest: i,
      location: r
    });
    return e >= .75 ? N.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : e >= .45 && e <= .55 ? N.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : e > 0 ? N.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : N.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return N.default.Messages.QUESTS_TITLE.format({
    questName: i.config.messages.questName
  })
}

function W(e) {
  return Object.keys(m.DismissibleQuestContentFlags).includes(f.QuestContent[e])
}

function K(e, t) {
  if (!W(t)) return !1;
  let n = f.QuestContent[t];
  return (0, _.hasFlag)(e.dismissedQuestContent, m.DismissibleQuestContentFlags[n])
}

function z(e) {
  return (0, i.match)(e).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.tag === a.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.tag) === a.QuestRewardTypes.COLLECTIBLE ? t : null
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.type === a.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === a.QuestRewardTypes.COLLECTIBLE ? t : null
  }).exhaustive()
}

function Z(e) {
  return null != z(e)
}

function X(e, t) {
  return e.targetedContent.includes(t)
}

function Q(e, t) {
  E.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function q(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = R(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function J(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let $ = /\.([a-zA-Z0-9]+)$/,
  ee = /^data:video\/([a-zA-Z0-9]+)\;/;

function et(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = $.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = ee.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function en(e) {
  let {
    quest: {
      config: t
    }
  } = e;
  return (0, i.match)(t).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === s.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === a.QuestRewardTypes.REWARD_CODE)
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === s.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === a.QuestRewardTypes.REWARD_CODE)
  }).exhaustive()
}
let ei = e => (0, i.match)(e.taskConfig).with({
  type: o.QuestTaskConfigTypes.FIRST_PARTY
}, e => null != e.tasks[r.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP]).otherwise(() => !1);

function er(e) {
  let {
    quest: t
  } = e;
  return (0, i.match)(t.config).with({
    configVersion: 1
  }, e => h.SharedQuestFields.build(e).features.has(m.QuestVariants.PLAYTIME_TASK)).with({
    configVersion: 2
  }, e => h.SharedQuestFields.build(e).features.has(m.QuestVariants.PLAYTIME_TASK) || ei(e)).exhaustive()
}

function es(e) {
  let {
    quest: t,
    location: n
  } = e;
  return null != t && er({
    quest: t
  }) && (0, S.isEligibleForQuestPlaytime)({
    location: n
  })
}

function ea(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let r = t.config.rewardsConfig.rewards[n];
  return (0, i.match)(r).with({
    tag: a.QuestRewardTypes.REWARD_CODE
  }, e => e).with({
    type: a.QuestRewardTypes.REWARD_CODE
  }, e => e).otherwise(() => null)
}

function eo(e) {
  let {
    quest: t,
    location: n,
    useV2Variants: i = !1
  } = e, r = t.config.messages.gameTitle, s = h.SharedQuestFields.build(t.config).defaultReward, a = e_({
    quest: t,
    location: n
  }).targetMinutes;
  return es({
    quest: t,
    location: n
  }) ? N.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  }) : en({
    quest: t
  }) ? (i ? N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: r,
    streamingDurationRequirement: a
  }) : (i ? N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  })
}

function el(e, t) {
  let n = h.SharedQuestFields.build(e.config).application.link;
  (0, c.handleClick)({
    href: n,
    onConfirm: () => {
      (0, I.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, l.default)(n)
    }
  })
}
let eu = (e, t) => {
    (0, I.trackQuestContentClicked)({
      questId: e,
      questContent: t.content,
      questContentCTA: t.ctaContent,
      questContentPosition: t.position
    }), (0, u.copy)(V(e))
  },
  ed = e => {
    var t, n, i, s, a, l, u;
    let {
      quest: _,
      taskType: c
    } = e, E = _.config.taskConfig;
    if (E.type !== o.QuestTaskConfigTypes.FIRST_PARTY) throw Error("Cannot retrieve task details for task config with type ".concat(E.type, "!"));
    let I = null !== (a = E.tasks[c]) && void 0 !== a ? a : E.tasks[r.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
    if (null == I) throw Error("No task with type ".concat(c, " found for quest ").concat(_.id, " - Quest is malformed!"));
    let T = I.target;
    return {
      progressSeconds: null !== (u = null !== (l = null === (i = _.userStatus) || void 0 === i ? void 0 : null === (n = i.progress) || void 0 === n ? void 0 : null === (t = n[c]) || void 0 === t ? void 0 : t.value) && void 0 !== l ? l : null === (s = _.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds) && void 0 !== u ? u : 0,
      targetSeconds: T,
      targetMinutes: Math.round(T / d.default.Seconds.MINUTE),
      taskType: c
    }
  },
  e_ = e => {
    let {
      quest: t,
      location: n
    } = e;
    return (0, i.match)(t).with({
      config: {
        configVersion: 1
      }
    }, e => {
      var t, n;
      return {
        progressSeconds: null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0,
        targetSeconds: Math.round(e.config.streamDurationRequirementMinutes * d.default.Seconds.MINUTE),
        targetMinutes: e.config.streamDurationRequirementMinutes
      }
    }).with({
      config: {
        configVersion: 2
      }
    }, e => es({
      quest: e,
      location: n
    }) ? ed({
      quest: e,
      taskType: r.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP
    }) : ed({
      quest: e,
      taskType: r.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
    })).exhaustive()
  }