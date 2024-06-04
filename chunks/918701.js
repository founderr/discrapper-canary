"use strict";
n.r(t), n.d(t, {
  calculatePercentComplete: function() {
    return j
  },
  captureQuestsException: function() {
    return q
  },
  copyShareLink: function() {
    return ec
  },
  getCollectiblesQuestReward: function() {
    return Z
  },
  getContextualEntrypointHeading: function() {
    return W
  },
  getGameLogotypeAssetUrl: function() {
    return V
  },
  getGameTileAssetUrl: function() {
    return B
  },
  getHeroAssetUrl: function() {
    return w
  },
  getPlatformString: function() {
    return Y
  },
  getPlayOnDesktopQuestByApplicationId: function() {
    return L
  },
  getQuestBarHeroAssetUrl: function() {
    return k
  },
  getQuestByApplicationId: function() {
    return g
  },
  getQuestForTargetedContent: function() {
    return F
  },
  getQuestTaskDetails: function() {
    return ef
  },
  getQuestUrl: function() {
    return x
  },
  getQuestsFromActivities: function() {
    return J
  },
  getQuestsInstructionsToWinReward: function() {
    return ed
  },
  getRewardAsset: function() {
    return G
  },
  getRewardCodeQuestReward: function() {
    return eu
  },
  getVideoAssetMimeType: function() {
    return en
  },
  hasCollectiblesQuestReward: function() {
    return X
  },
  hasPlayOnDesktopTask: function() {
    return es
  },
  includesTarget: function() {
    return Q
  },
  isAssetAnimated: function() {
    return $
  },
  isDismissed: function() {
    return z
  },
  isDismissible: function() {
    return K
  },
  isQuestExpired: function() {
    return v
  },
  isQuestWithKnownConfigVersion: function() {
    return C
  },
  isTargetedForContent: function() {
    return H
  },
  isTieredRewardCodeQuest: function() {
    return ei
  },
  openGameLink: function() {
    return e_
  },
  questUserStatusFromServer: function() {
    return D
  },
  questWithUserStatusFromServer: function() {
    return M
  },
  questsEntitlementsFromServer: function() {
    return U
  },
  questsRewardCodeFromServer: function() {
    return y
  },
  shouldShowSocialEntrypoints: function() {
    return eo
  },
  shouldUsePlayOnDesktopTask: function() {
    return ea
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
  c = n("823379"),
  E = n("49012"),
  I = n("960048"),
  T = n("617136"),
  f = n("687744"),
  S = n("497505"),
  h = n("242755"),
  A = n("566078"),
  m = n("312046"),
  N = n("46140"),
  p = n("689938");
let O = "https://cdn.discordapp.com/assets/quests/";

function C(e) {
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

function R(e, t) {
  return null != A.SharedQuestFields.build(t.config).application.ids.find(t => t === e)
}

function g(e, t) {
  let n;
  for (let [i, r] of e)
    if (R(t, r) && !v(r)) {
      n = r;
      break
    } return n
}

function L(e, t) {
  return Array.from(e.values()).find(e => R(t, e) && !v(e) && es({
    quest: e
  }))
}

function v(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function D(e) {
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

function M(e) {
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
              S.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
        rewardsConfig: (0, f.questRewardsConfigFromServer)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => S.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
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
    }, e => (0, m.questFromServerV2)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : D(e.user_status),
    targetedContent: e.targeted_content
  }
}

function y(e) {
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

function P(e) {
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
                rewardCode: y(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function U(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(P),
    errors: e.errors
  }
}

function b(e, t) {
  return e.startsWith("data") ? e : t
}
let G = e => {
    var t, n;
    let i = eu({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = A.SharedQuestFields.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: b(s, "".concat(O).concat(e.id, "/").concat(s))
    }
  },
  w = e => b(e.config.assets.hero, "".concat(O).concat(e.id, "/").concat(e.config.assets.hero)),
  k = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : b(e.config.assets.questBarHero, "".concat(O).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  B = (e, t) => b(e.config.assets.gameTile, "".concat(O).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  V = (e, t) => b(e.config.assets.logotype, "".concat(O).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  x = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function F(e, t) {
  for (let [n, i] of e)
    if (!v(i) && i.targetedContent.includes(t)) return i;
  return null
}

function H(e, t) {
  return e.targetedContent.includes(t)
}
let Y = e => {
  switch (e) {
    case S.QuestRewardCodePlatforms.XBOX:
      return p.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case S.QuestRewardCodePlatforms.PLAYSTATION:
      return p.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case S.QuestRewardCodePlatforms.SWITCH:
      return p.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case S.QuestRewardCodePlatforms.PC:
      return p.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case S.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return p.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function j(e) {
  let {
    quest: t,
    location: n
  } = e;
  if (null == t.userStatus) return 0;
  if (null != t.userStatus.completedAt) return 1;
  let {
    progressSeconds: i,
    targetSeconds: r
  } = ef({
    quest: t,
    location: n
  });
  return r <= 0 ? 0 : Math.min(i / r, 1)
}

function W(e) {
  var t, n;
  let {
    quest: i,
    location: r
  } = e;
  if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return p.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let e = j({
      quest: i,
      location: r
    });
    return e >= .75 ? p.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : e >= .45 && e <= .55 ? p.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : e > 0 ? p.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : p.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return p.default.Messages.QUESTS_TITLE.format({
    questName: i.config.messages.questName
  })
}

function K(e) {
  return Object.keys(N.DismissibleQuestContentFlags).includes(S.QuestContent[e])
}

function z(e, t) {
  if (!K(t)) return !1;
  let n = S.QuestContent[t];
  return (0, _.hasFlag)(e.dismissedQuestContent, N.DismissibleQuestContentFlags[n])
}

function Z(e) {
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

function X(e) {
  return null != Z(e)
}

function Q(e, t) {
  return e.targetedContent.includes(t)
}

function q(e, t) {
  I.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function J(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = g(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function $(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let ee = /\.([a-zA-Z0-9]+)$/,
  et = /^data:video\/([a-zA-Z0-9]+)\;/;

function en(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = ee.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = et.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function ei(e) {
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
let er = e => (0, i.match)(e.taskConfig).with({
  type: o.QuestTaskConfigTypes.FIRST_PARTY
}, e => null != e.tasks[r.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP]).otherwise(() => !1);

function es(e) {
  let {
    quest: t
  } = e;
  return (0, i.match)(t.config).with({
    configVersion: 1
  }, e => el(t, N.QuestVariants.PLAYTIME_TASK)).with({
    configVersion: 2
  }, e => el(t, N.QuestVariants.PLAYTIME_TASK) || er(e)).exhaustive()
}

function ea(e) {
  let {
    quest: t,
    location: n
  } = e;
  return null != t && es({
    quest: t
  }) && (0, h.isEligibleForQuestPlaytime)({
    location: n
  })
}

function eo(e) {
  return !el(e, N.QuestVariants.IN_HOUSE_CONSOLE_QUEST)
}

function el(e, t) {
  return A.SharedQuestFields.build(e.config).features.has(t)
}

function eu(e) {
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

function ed(e) {
  let {
    quest: t,
    location: n,
    useV2Variants: i = !1
  } = e, r = t.config.messages.gameTitle, s = A.SharedQuestFields.build(t.config).defaultReward, a = ef({
    quest: t,
    location: n
  }).targetMinutes;
  return ea({
    quest: t,
    location: n
  }) ? p.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  }) : ei({
    quest: t
  }) ? (i ? p.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : p.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: r,
    streamingDurationRequirement: a
  }) : (i ? p.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : p.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: r,
    questReward: s.messages.nameWithArticle,
    streamingDurationRequirement: a
  })
}

function e_(e, t) {
  let n = A.SharedQuestFields.build(e.config).application.link;
  (0, E.handleClick)({
    href: n,
    onConfirm: () => {
      (0, T.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, l.default)(n)
    }
  })
}
let ec = (e, t) => {
    (0, T.trackQuestContentClicked)({
      questId: e,
      questContent: t.content,
      questContentCTA: t.ctaContent,
      questContentPosition: t.position
    }), (0, u.copy)(x(e))
  },
  eE = e => {
    var t, n, i, s, a, l, u, _;
    let {
      quest: c,
      taskType: E
    } = e, I = c.config.taskConfig;
    if (I.type !== o.QuestTaskConfigTypes.FIRST_PARTY) throw Error("Cannot retrieve task details for task config with type ".concat(I.type, "!"));
    let T = null != E ? E : null === (t = Object.values(I.tasks)[0]) || void 0 === t ? void 0 : t.eventName,
      f = null !== (l = I.tasks[T]) && void 0 !== l ? l : I.tasks[r.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
    if (null == f) throw Error("No task with type ".concat(E, " found for quest ").concat(c.id, "!"));
    let S = f.target;
    return {
      progressSeconds: null !== (_ = null !== (u = null === (s = c.userStatus) || void 0 === s ? void 0 : null === (i = s.progress) || void 0 === i ? void 0 : null === (n = i[T]) || void 0 === n ? void 0 : n.value) && void 0 !== u ? u : null === (a = c.userStatus) || void 0 === a ? void 0 : a.streamProgressSeconds) && void 0 !== _ ? _ : 0,
      targetSeconds: S,
      targetMinutes: Math.round(S / d.default.Seconds.MINUTE),
      taskType: T
    }
  },
  eI = e => r.FirstPartyQuestTaskTypesSets.ALL.has(e) ? e : null,
  eT = e => {
    var t, n;
    let {
      quest: i
    } = e;
    for (let e of Object.values(null !== (n = null === (t = i.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(c.isNotNullish)) {
      let t = eI(e.eventName);
      if (null != t) return eE({
        quest: i,
        taskType: t
      })
    }
    return eE({
      quest: i
    })
  },
  ef = e => {
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
        targetMinutes: e.config.streamDurationRequirementMinutes,
        taskType: r.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
      }
    }).with({
      config: {
        configVersion: 2
      }
    }, e => e.config.features.some(e => e === N.QuestVariants.IN_HOUSE_CONSOLE_QUEST || e === N.QuestVariants.MOBILE_CONSOLE_QUEST) ? eT({
      quest: e
    }) : ea({
      quest: e,
      location: n
    }) ? eE({
      quest: e,
      taskType: r.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP
    }) : eE({
      quest: e,
      taskType: r.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
    })).exhaustive()
  }