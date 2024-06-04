"use strict";
let i;
n.r(t), n.d(t, {
  calculatePercentComplete: function() {
    return W
  },
  captureQuestsException: function() {
    return J
  },
  copyShareLink: function() {
    return eE
  },
  getCollectiblesQuestReward: function() {
    return X
  },
  getContextualEntrypointHeading: function() {
    return K
  },
  getGameLogotypeAssetUrl: function() {
    return x
  },
  getGameTileAssetUrl: function() {
    return V
  },
  getHeroAssetUrl: function() {
    return k
  },
  getPlatformString: function() {
    return j
  },
  getPlayOnDesktopQuestByApplicationId: function() {
    return v
  },
  getQuestBarHeroAssetUrl: function() {
    return B
  },
  getQuestByApplicationId: function() {
    return L
  },
  getQuestForTargetedContent: function() {
    return H
  },
  getQuestTaskDetails: function() {
    return eS
  },
  getQuestUrl: function() {
    return F
  },
  getQuestsFromActivities: function() {
    return $
  },
  getQuestsInstructionsToWinReward: function() {
    return e_
  },
  getRewardAsset: function() {
    return w
  },
  getRewardCodeQuestReward: function() {
    return ed
  },
  getVideoAssetMimeType: function() {
    return ei
  },
  hasCollectiblesQuestReward: function() {
    return Q
  },
  hasPlayOnDesktopTask: function() {
    return ea
  },
  hasVariant: function() {
    return eu
  },
  includesTarget: function() {
    return q
  },
  isAssetAnimated: function() {
    return ee
  },
  isConsoleQuest: function() {
    return eA
  },
  isDismissed: function() {
    return Z
  },
  isDismissible: function() {
    return z
  },
  isQuestExpired: function() {
    return D
  },
  isQuestProgressingOnConsole: function() {
    return eN
  },
  isQuestWithKnownConfigVersion: function() {
    return R
  },
  isTargetedForContent: function() {
    return Y
  },
  isTieredRewardCodeQuest: function() {
    return er
  },
  openGameLink: function() {
    return ec
  },
  questUserStatusFromServer: function() {
    return M
  },
  questWithUserStatusFromServer: function() {
    return y
  },
  questsEntitlementsFromServer: function() {
    return b
  },
  questsRewardCodeFromServer: function() {
    return P
  },
  shouldShowSocialEntrypoints: function() {
    return el
  },
  shouldUsePlayOnDesktopTask: function() {
    return eo
  }
}), n("627341"), n("47120"), n("411104");
var r = n("278074"),
  s = n("754700"),
  a = n("551910"),
  o = n("887003"),
  l = n("742635"),
  u = n("782568");
n("597688");
var d = n("572004"),
  _ = n("70956"),
  c = n("630388"),
  E = n("823379"),
  I = n("49012"),
  T = n("960048"),
  f = n("617136"),
  S = n("687744"),
  h = n("497505"),
  A = n("242755"),
  m = n("566078"),
  N = n("312046"),
  p = n("46140"),
  O = n("689938");
let C = "https://cdn.discordapp.com/assets/quests/";

function R(e) {
  try {
    return (0, r.match)(e.config).with({
      config_version: 1
    }, () => !0).with({
      config_version: 2
    }, () => !0).exhaustive()
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1
  }
}

function g(e, t) {
  return null != m.SharedQuestFields.build(t.config).application.ids.find(t => t === e)
}

function L(e, t) {
  let n;
  for (let [i, r] of e)
    if (g(t, r) && !D(r)) {
      n = r;
      break
    } return n
}

function v(e, t) {
  return Array.from(e.values()).find(e => g(t, e) && !D(e) && ea({
    quest: e
  }))
}

function D(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function M(e) {
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
        completedAt: i.completed_at,
        unsavedProgress: i.unsaved_progress
      };
      return t
    }(e.progress)
  }
}

function y(e) {
  var t;
  return {
    id: e.id,
    preview: e.preview,
    config: (t = e.config, (0, r.match)(t).with({
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
              h.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
        rewardsConfig: (0, S.questRewardsConfigFromServer)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => h.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
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
    }, e => (0, N.questFromServerV2)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : M(e.user_status),
    targetedContent: e.targeted_content
  }
}

function P(e) {
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

function U(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: function(e) {
      if ((null == e ? void 0 : e.quest_rewards) == null) return null;
      let t = e.quest_rewards;
      switch (t.reward.tag) {
        case o.QuestRewardTypes.IN_GAME:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag
              }
            }
          };
        case o.QuestRewardTypes.REWARD_CODE:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag,
                rewardCode: P(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function b(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(U),
    errors: e.errors
  }
}

function G(e, t) {
  return e.startsWith("data") ? e : t
}
let w = e => {
    var t, n;
    let i = ed({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = m.SharedQuestFields.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: G(s, "".concat(C).concat(e.id, "/").concat(s))
    }
  },
  k = e => G(e.config.assets.hero, "".concat(C).concat(e.id, "/").concat(e.config.assets.hero)),
  B = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : G(e.config.assets.questBarHero, "".concat(C).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  V = (e, t) => G(e.config.assets.gameTile, "".concat(C).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  x = (e, t) => G(e.config.assets.logotype, "".concat(C).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  F = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function H(e, t) {
  for (let [n, i] of e)
    if (!D(i) && i.targetedContent.includes(t)) return i;
  return null
}

function Y(e, t) {
  return e.targetedContent.includes(t)
}
let j = e => {
  switch (e) {
    case h.QuestRewardCodePlatforms.XBOX:
      return O.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case h.QuestRewardCodePlatforms.PLAYSTATION:
      return O.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case h.QuestRewardCodePlatforms.SWITCH:
      return O.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case h.QuestRewardCodePlatforms.PC:
      return O.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case h.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return O.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function W(e) {
  let {
    quest: t,
    location: n
  } = e;
  if (null == t.userStatus) return 0;
  if (null != t.userStatus.completedAt) return 1;
  let {
    progressSeconds: i,
    targetSeconds: r
  } = eS({
    quest: t,
    location: n
  });
  return r <= 0 ? 0 : Math.min(i / r, 1)
}

function K(e) {
  var t, n;
  let {
    quest: i,
    location: r
  } = e;
  if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return O.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let e = W({
      quest: i,
      location: r
    });
    return e >= .75 ? O.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : e >= .45 && e <= .55 ? O.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : e > 0 ? O.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : O.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return O.default.Messages.QUESTS_TITLE.format({
    questName: i.config.messages.questName
  })
}

function z(e) {
  return Object.keys(p.DismissibleQuestContentFlags).includes(h.QuestContent[e])
}

function Z(e, t) {
  if (!z(t)) return !1;
  let n = h.QuestContent[t];
  return (0, c.hasFlag)(e.dismissedQuestContent, p.DismissibleQuestContentFlags[n])
}

function X(e) {
  return (0, r.match)(e).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.tag === o.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.tag) === o.QuestRewardTypes.COLLECTIBLE ? t : null
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.type === o.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === o.QuestRewardTypes.COLLECTIBLE ? t : null
  }).exhaustive()
}

function Q(e) {
  return null != X(e)
}

function q(e, t) {
  return e.targetedContent.includes(t)
}

function J(e, t) {
  T.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function $(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = L(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function ee(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let et = /\.([a-zA-Z0-9]+)$/,
  en = /^data:video\/([a-zA-Z0-9]+)\;/;

function ei(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = et.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = en.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function er(e) {
  let {
    quest: {
      config: t
    }
  } = e;
  return (0, r.match)(t).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === a.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === o.QuestRewardTypes.REWARD_CODE)
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === a.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === o.QuestRewardTypes.REWARD_CODE)
  }).exhaustive()
}
let es = e => (0, r.match)(e.taskConfig).with({
  type: l.QuestTaskConfigTypes.FIRST_PARTY
}, e => null != e.tasks[s.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP]).otherwise(() => !1);

function ea(e) {
  let {
    quest: t
  } = e;
  return (0, r.match)(t.config).with({
    configVersion: 1
  }, e => eu(t, p.QuestVariants.PLAYTIME_TASK)).with({
    configVersion: 2
  }, e => eu(t, p.QuestVariants.PLAYTIME_TASK) || es(e)).exhaustive()
}

function eo(e) {
  let {
    quest: t,
    location: n
  } = e;
  return null != t && ea({
    quest: t
  }) && (0, A.isEligibleForQuestPlaytime)({
    location: n
  })
}

function el(e) {
  return !eu(e, p.QuestVariants.IN_HOUSE_CONSOLE_QUEST)
}

function eu(e, t) {
  return m.SharedQuestFields.build(e.config).features.has(t)
}

function ed(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let i = t.config.rewardsConfig.rewards[n];
  return (0, r.match)(i).with({
    tag: o.QuestRewardTypes.REWARD_CODE
  }, e => e).with({
    type: o.QuestRewardTypes.REWARD_CODE
  }, e => e).otherwise(() => null)
}

function e_(e) {
  let {
    quest: t,
    location: n,
    useV2Variants: i = !1
  } = e, r = t.config.messages.gameTitle, s = m.SharedQuestFields.build(t.config).defaultReward, a = eS({
    quest: t,
    location: n
  }).targetMinutes;
  return eo({
    quest: t,
    location: n
  }) ? O.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  }) : er({
    quest: t
  }) ? (i ? O.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : O.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: r,
    streamingDurationRequirement: a
  }) : (i ? O.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : O.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  })
}

function ec(e, t) {
  let n = m.SharedQuestFields.build(e.config).application.link;
  (0, I.handleClick)({
    href: n,
    onConfirm: () => {
      (0, f.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, u.default)(n)
    }
  })
}
let eE = (e, t) => {
    (0, f.trackQuestContentClicked)({
      questId: e,
      questContent: t.content,
      questContentCTA: t.ctaContent,
      questContentPosition: t.position
    }), (0, d.copy)(F(e))
  },
  eI = e => {
    var t, n, i, r, a, o, u, d;
    let {
      quest: c,
      taskType: E
    } = e, I = c.config.taskConfig;
    if (I.type !== l.QuestTaskConfigTypes.FIRST_PARTY) throw Error("Cannot retrieve task details for task config with type ".concat(I.type, "!"));
    let T = null != E ? E : null === (t = Object.values(I.tasks)[0]) || void 0 === t ? void 0 : t.eventName,
      f = null !== (o = I.tasks[T]) && void 0 !== o ? o : I.tasks[s.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
    if (null == f) throw Error("No task with type ".concat(E, " found for quest ").concat(c.id, "!"));
    let S = f.target;
    return {
      progressSeconds: null !== (d = null !== (u = null === (r = c.userStatus) || void 0 === r ? void 0 : null === (i = r.progress) || void 0 === i ? void 0 : null === (n = i[T]) || void 0 === n ? void 0 : n.value) && void 0 !== u ? u : null === (a = c.userStatus) || void 0 === a ? void 0 : a.streamProgressSeconds) && void 0 !== d ? d : 0,
      targetSeconds: S,
      targetMinutes: Math.round(S / _.default.Seconds.MINUTE),
      taskType: T
    }
  },
  eT = e => s.FirstPartyQuestTaskTypesSets.ALL.has(e) ? e : null,
  ef = e => {
    var t, n;
    let {
      quest: i
    } = e;
    for (let e of Object.values(null !== (n = null === (t = i.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(E.isNotNullish)) {
      let t = eT(e.eventName);
      if (null != t) return eI({
        quest: i,
        taskType: t
      })
    }
    return eI({
      quest: i
    })
  },
  eS = e => {
    let {
      quest: t,
      location: n
    } = e;
    return (0, r.match)(t).with({
      config: {
        configVersion: 1
      }
    }, e => {
      var t, n;
      return {
        progressSeconds: null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0,
        targetSeconds: Math.round(e.config.streamDurationRequirementMinutes * _.default.Seconds.MINUTE),
        targetMinutes: e.config.streamDurationRequirementMinutes,
        taskType: s.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
      }
    }).with({
      config: {
        configVersion: 2
      }
    }, e => eh(e) ? ef({
      quest: e
    }) : eo({
      quest: e,
      location: n
    }) ? eI({
      quest: e,
      taskType: s.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP
    }) : eI({
      quest: e,
      taskType: s.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
    })).exhaustive()
  };
let eh = (i = [s.FirstPartyQuestTaskTypes.PLAY_ON_XBOX, s.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION], e => i.some(t => null != e.config.taskConfig.tasks[t])),
  eA = e => (0, r.match)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, eh).exhaustive(),
  em = (e, t) => {
    var n;
    let i = null == e ? void 0 : e.progress[t];
    if ((null == i ? void 0 : null === (n = i.unsavedProgress) || void 0 === n ? void 0 : n.expires) == null) return !1;
    let r = new Date(i.unsavedProgress.expires).valueOf();
    return !isNaN(r) && r > Date.now()
  },
  eN = e => (0, r.match)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, e => null != e.userStatus && (em(e.userStatus, s.FirstPartyQuestTaskTypes.PLAY_ON_XBOX) || em(e.userStatus, s.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION))).exhaustive()