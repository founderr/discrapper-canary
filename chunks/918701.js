"use strict";
let i;
n.r(t), n.d(t, {
  captureQuestsException: function() {
    return $
  },
  copyShareLink: function() {
    return eI
  },
  getCollectibleQuestRewardDuration: function() {
    return X
  },
  getCollectiblesQuestReward: function() {
    return Q
  },
  getContextualEntrypointHeading: function() {
    return K
  },
  getGameLogotypeAssetUrl: function() {
    return F
  },
  getGameTileAssetUrl: function() {
    return x
  },
  getHeroAssetUrl: function() {
    return B
  },
  getPlatformString: function() {
    return W
  },
  getPlayOnDesktopQuestByApplicationId: function() {
    return D
  },
  getQuestBarHeroAssetUrl: function() {
    return V
  },
  getQuestByApplicationId: function() {
    return v
  },
  getQuestForTargetedContent: function() {
    return Y
  },
  getQuestTaskDetails: function() {
    return eA
  },
  getQuestUrl: function() {
    return H
  },
  getQuestsFromActivities: function() {
    return ee
  },
  getQuestsInstructionsToWinReward: function() {
    return ec
  },
  getRewardAsset: function() {
    return k
  },
  getRewardCodeQuestReward: function() {
    return e_
  },
  getVideoAssetMimeType: function() {
    return er
  },
  hasCollectiblesQuestReward: function() {
    return q
  },
  hasPlayOnDesktopTask: function() {
    return eo
  },
  hasVariant: function() {
    return ed
  },
  includesTarget: function() {
    return J
  },
  isAssetAnimated: function() {
    return et
  },
  isConsoleQuest: function() {
    return eN
  },
  isDismissed: function() {
    return Z
  },
  isDismissible: function() {
    return z
  },
  isQuestExpired: function() {
    return M
  },
  isQuestProgressingOnConsole: function() {
    return eO
  },
  isQuestWithKnownConfigVersion: function() {
    return g
  },
  isTargetedForContent: function() {
    return j
  },
  isTieredRewardCodeQuest: function() {
    return es
  },
  openGameLink: function() {
    return eE
  },
  questUserStatusFromServer: function() {
    return y
  },
  questWithUserStatusFromServer: function() {
    return P
  },
  questsEntitlementsFromServer: function() {
    return G
  },
  questsRewardCodeFromServer: function() {
    return U
  },
  shouldShowSocialEntrypoints: function() {
    return eu
  },
  shouldUsePlayOnDesktopTask: function() {
    return el
  }
}), n("627341"), n("47120"), n("411104");
var r = n("283398"),
  s = n("278074"),
  a = n("754700"),
  o = n("551910"),
  l = n("887003"),
  u = n("742635"),
  d = n("782568");
n("597688");
var _ = n("572004"),
  c = n("70956"),
  E = n("630388"),
  I = n("823379"),
  T = n("49012"),
  f = n("960048"),
  S = n("617136"),
  h = n("687744"),
  A = n("497505"),
  m = n("242755"),
  N = n("566078"),
  p = n("312046"),
  O = n("46140"),
  C = n("689938");
let R = "https://cdn.discordapp.com/assets/quests/";

function g(e) {
  try {
    return (0, s.match)(e.config).with({
      config_version: 1
    }, () => !0).with({
      config_version: 2
    }, () => !0).exhaustive()
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1
  }
}

function L(e, t) {
  return null != N.SharedQuestFields.build(t.config).application.ids.find(t => t === e)
}

function v(e, t) {
  let n;
  for (let [i, r] of e)
    if (L(t, r) && !M(r)) {
      n = r;
      break
    } return n
}

function D(e, t) {
  return Array.from(e.values()).find(e => L(t, e) && !M(e) && eo({
    quest: e
  }))
}

function M(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function y(e) {
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
      for (let [i, r] of Object.entries(e)) {
        var n;
        t[i] = {
          eventName: r.event_name,
          value: r.value,
          updatedAt: r.updated_at,
          completedAt: r.completed_at,
          heartbeat: null == (n = r.heartbeat) ? null : {
            lastBeatAt: n.last_beat_at,
            expiresAt: n.expires_at
          }
        }
      }
      return t
    }(e.progress)
  }
}

function P(e) {
  var t;
  return {
    id: e.id,
    preview: e.preview,
    config: (t = e.config, (0, s.match)(t).with({
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
              A.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
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
        rewardsConfig: (0, h.questRewardsConfigFromServer)(e.rewards_config),
        rewardCodeExpiresAt: e.reward_code_expires_at,
        rewardCodePlatforms: e.reward_code_platforms.filter(e => A.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
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
    }, e => (0, p.questFromServerV2)(e)).exhaustive()),
    userStatus: null == e.user_status ? null : y(e.user_status),
    targetedContent: e.targeted_content
  }
}

function U(e) {
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

function b(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: function(e) {
      if ((null == e ? void 0 : e.quest_rewards) == null) return null;
      let t = e.quest_rewards;
      switch (t.reward.tag) {
        case l.QuestRewardTypes.IN_GAME:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag
              }
            }
          };
        case l.QuestRewardTypes.REWARD_CODE:
          return {
            questRewards: {
              reward: {
                tag: t.reward.tag,
                rewardCode: U(t.reward.reward_code)
              }
            }
          }
      }
    }(e.tenant_metadata)
  }
}

function G(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(b),
    errors: e.errors
  }
}

function w(e, t) {
  return e.startsWith("data") ? e : t
}
let k = e => {
    var t, n;
    let i = e_({
        quest: e,
        idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
      }),
      r = N.SharedQuestFields.build(e.config).defaultRewardAsset,
      s = null !== (n = null == i ? void 0 : i.asset) && void 0 !== n ? n : r;
    return {
      name: s,
      url: w(s, "".concat(R).concat(e.id, "/").concat(s))
    }
  },
  B = e => w(e.config.assets.hero, "".concat(R).concat(e.id, "/").concat(e.config.assets.hero)),
  V = e => e.config.assets.questBarHero.startsWith("data") ? e.config.assets.questBarHero : w(e.config.assets.questBarHero, "".concat(R).concat(e.id, "/").concat(e.config.assets.questBarHero)),
  x = (e, t) => w(e.config.assets.gameTile, "".concat(R).concat(e.id, "/").concat(t, "/").concat(e.config.assets.gameTile)),
  F = (e, t) => w(e.config.assets.logotype, "".concat(R).concat(e.id, "/").concat(t, "/").concat(e.config.assets.logotype)),
  H = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function Y(e, t) {
  for (let [n, i] of e)
    if (!M(i) && i.targetedContent.includes(t)) return i;
  return null
}

function j(e, t) {
  return e.targetedContent.includes(t)
}
let W = e => {
  switch (e) {
    case A.QuestRewardCodePlatforms.XBOX:
      return C.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case A.QuestRewardCodePlatforms.PLAYSTATION:
      return C.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case A.QuestRewardCodePlatforms.SWITCH:
      return C.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case A.QuestRewardCodePlatforms.PC:
      return C.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case A.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return C.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function K(e) {
  var t, n;
  let {
    quest: i,
    taskDetails: r
  } = e;
  if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return C.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = r;
    return e >= .75 ? C.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : e >= .45 && e <= .55 ? C.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : e > 0 ? C.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : C.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return C.default.Messages.QUESTS_TITLE.format({
    questName: i.config.messages.questName
  })
}

function z(e) {
  return Object.keys(O.DismissibleQuestContentFlags).includes(A.QuestContent[e])
}

function Z(e, t) {
  if (!z(t)) return !1;
  let n = A.QuestContent[t];
  return (0, E.hasFlag)(e.dismissedQuestContent, O.DismissibleQuestContentFlags[n])
}

function Q(e) {
  return (0, s.match)(e).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.tag === l.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.tag) === l.QuestRewardTypes.COLLECTIBLE ? t : null
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig.rewards.find(e => e.type === l.QuestRewardTypes.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === l.QuestRewardTypes.COLLECTIBLE ? t : null
  }).exhaustive()
}

function X(e) {
  let t = Q(e);
  if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
  let n = {
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
    ...(0, r.intervalToDuration)({
      start: new Date(e.expiresAt),
      end: new Date(t.expiresAt)
    })
  };
  return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? C.default.Messages.DURATION_YEARS.format({
    years: n.years
  }) : n.months > 0 ? C.default.Messages.DURATION_MONTHS.format({
    months: n.months
  }) : n.weeks > 0 ? C.default.Messages.DURATION_WEEKS.format({
    weeks: n.weeks
  }) : C.default.Messages.DURATION_DAYS.format({
    days: n.days
  })
}

function q(e) {
  return null != Q(e)
}

function J(e, t) {
  return e.targetedContent.includes(t)
}

function $(e, t) {
  f.default.captureException(e, {
    ...t,
    tags: {
      ...null == t ? void 0 : t.tags,
      app_context: "quests"
    }
  })
}

function ee(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    if (null == n.application_id) continue;
    let t = v(e, n.application_id);
    if (null != t) return t
  }
  return null
}

function et(e) {
  return e.endsWith(".webm") || e.endsWith(".mp4") || e.startsWith("data:video")
}
let en = /\.([a-zA-Z0-9]+)$/,
  ei = /^data:video\/([a-zA-Z0-9]+)\;/;

function er(e) {
  var t, n, i, r, s;
  switch (null !== (s = null === (n = en.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : null === (r = ei.exec(e)) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    default:
      throw Error("Unexpected file extension: ".concat(e.substring(0, 15)))
  }
}

function es(e) {
  let {
    quest: {
      config: t
    }
  } = e;
  return (0, s.match)(t).with({
    configVersion: 1
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === o.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === l.QuestRewardTypes.REWARD_CODE)
  }).with({
    configVersion: 2
  }, e => {
    let t = e.rewardsConfig;
    return t.assignmentMethod === o.QuestRewardAssignmentMethods.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === l.QuestRewardTypes.REWARD_CODE)
  }).exhaustive()
}
let ea = e => (0, s.match)(e.taskConfig).with({
  type: u.QuestTaskConfigTypes.FIRST_PARTY
}, e => null != e.tasks[a.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP]).otherwise(() => !1);

function eo(e) {
  let {
    quest: t
  } = e;
  return (0, s.match)(t.config).with({
    configVersion: 1
  }, e => ed(t, O.QuestVariants.PLAYTIME_TASK)).with({
    configVersion: 2
  }, e => ed(t, O.QuestVariants.PLAYTIME_TASK) || ea(e)).exhaustive()
}

function el(e) {
  let {
    quest: t,
    location: n
  } = e;
  return null != t && eo({
    quest: t
  }) && (0, m.isEligibleForQuestPlaytime)({
    location: n
  })
}

function eu(e) {
  return !ed(e, O.QuestVariants.IN_HOUSE_CONSOLE_QUEST)
}

function ed(e, t) {
  return N.SharedQuestFields.build(e.config).features.has(t)
}

function e_(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let i = t.config.rewardsConfig.rewards[n];
  return (0, s.match)(i).with({
    tag: l.QuestRewardTypes.REWARD_CODE
  }, e => e).with({
    type: l.QuestRewardTypes.REWARD_CODE
  }, e => e).otherwise(() => null)
}

function ec(e) {
  var t;
  let {
    quest: n,
    location: i,
    useV2Variants: r = !1,
    taskDetails: s
  } = e, a = n.config.messages.gameTitle, o = N.SharedQuestFields.build(n.config).defaultReward.messages.nameWithArticle, {
    targetMinutes: l
  } = null != s ? s : eA({
    quest: n,
    location: i
  }), u = ed(n, O.QuestVariants.IN_HOUSE_CONSOLE_QUEST), d = X(n.config), _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  if (u && null != d) return _ ? C.default.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
    reward: o,
    duration: d
  }) : C.default.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
    targetMinutes: l,
    rewardNameWithArticle: o,
    duration: d
  });
  if (eN(n)) return null != d ? C.default.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: a,
    targetMinutes: l,
    rewardNameWithArticle: o,
    duration: d
  }) : C.default.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
    gameTitle: a,
    targetMinutes: l,
    rewardNameWithArticle: o
  });
  if (el({
      quest: n,
      location: i
    })) return null != d ? C.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: a,
    streamingDurationRequirement: l,
    rewardNameWithArticle: o,
    duration: d
  }) : C.default.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: a,
    questReward: o,
    streamingDurationRequirement: l
  });
  else if (es({
      quest: n
    })) return (r ? C.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : C.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
    gameTitle: a,
    streamingDurationRequirement: l
  });
  return null != d ? C.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: a,
    streamingDurationRequirement: l,
    questReward: o,
    duration: d
  }) : (r ? C.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : C.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
    gameTitle: a,
    questReward: o,
    streamingDurationRequirement: l
  })
}

function eE(e, t) {
  let n = N.SharedQuestFields.build(e.config).application.link;
  (0, T.handleClick)({
    href: n,
    onConfirm: () => {
      (0, S.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, d.default)(n)
    }
  })
}
let eI = (e, t) => {
    (0, S.trackQuestContentClicked)({
      questId: e,
      questContent: t.content,
      questContentCTA: t.ctaContent,
      questContentPosition: t.position
    }), (0, _.copy)(H(e))
  },
  eT = (e, t) => e > 0 ? Math.min(t / e, 1) : 0,
  ef = e => {
    var t, n, i, r, s, o, l, d;
    let {
      quest: _,
      taskType: E
    } = e, I = _.config.taskConfig;
    if (I.type !== u.QuestTaskConfigTypes.FIRST_PARTY) throw Error("Cannot retrieve task details for task config with type ".concat(I.type, "!"));
    let T = null != E ? E : null === (t = Object.values(I.tasks)[0]) || void 0 === t ? void 0 : t.eventName,
      f = null !== (o = I.tasks[T]) && void 0 !== o ? o : I.tasks[a.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
    if (null == f) throw Error("No task with type ".concat(E, " found for quest ").concat(_.id, "!"));
    let S = f.target,
      h = null !== (d = null !== (l = null === (r = _.userStatus) || void 0 === r ? void 0 : null === (i = r.progress) || void 0 === i ? void 0 : null === (n = i[T]) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : null === (s = _.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds) && void 0 !== d ? d : 0;
    return {
      progressSeconds: h,
      targetSeconds: S,
      targetMinutes: Math.round(S / c.default.Seconds.MINUTE),
      percentComplete: eT(S, h),
      taskType: T
    }
  },
  eS = e => a.FirstPartyQuestTaskTypesSets.ALL.has(e) ? e : null,
  eh = e => {
    var t, n;
    let {
      quest: i
    } = e;
    for (let e of Object.values(null !== (n = null === (t = i.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(I.isNotNullish)) {
      let t = eS(e.eventName);
      if (null != t) return ef({
        quest: i,
        taskType: t
      })
    }
    return ef({
      quest: i
    })
  },
  eA = e => {
    let {
      quest: t,
      location: n
    } = e;
    return (0, s.match)(t).with({
      config: {
        configVersion: 1
      }
    }, e => {
      var t, n;
      let i = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0,
        r = Math.round(e.config.streamDurationRequirementMinutes * c.default.Seconds.MINUTE);
      return {
        progressSeconds: i,
        targetSeconds: r,
        targetMinutes: e.config.streamDurationRequirementMinutes,
        percentComplete: eT(r, i),
        taskType: a.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
      }
    }).with({
      config: {
        configVersion: 2
      }
    }, e => e.config.taskConfig.type !== u.QuestTaskConfigTypes.FIRST_PARTY ? {
      progressSeconds: 0,
      targetSeconds: 1,
      targetMinutes: 1,
      percentComplete: 0,
      taskType: a.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
    } : em(e) ? eh({
      quest: e
    }) : el({
      quest: e,
      location: n
    }) ? ef({
      quest: e,
      taskType: a.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP
    }) : ef({
      quest: e,
      taskType: a.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP
    })).exhaustive()
  };
let em = (i = [a.FirstPartyQuestTaskTypes.PLAY_ON_XBOX, a.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION], e => i.some(t => null != e.config.taskConfig.tasks[t])),
  eN = e => (0, s.match)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, em).exhaustive(),
  ep = (e, t) => {
    var n, i;
    let r = null == e ? void 0 : null === (i = e.progress[t]) || void 0 === i ? void 0 : null === (n = i.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == r) return !1;
    let s = new Date(r).valueOf();
    return !isNaN(s) && s > Date.now()
  },
  eO = e => (0, s.match)(e).with({
    config: {
      configVersion: 1
    }
  }, () => !1).with({
    config: {
      configVersion: 2
    }
  }, e => null != e.userStatus && (ep(e.userStatus, a.FirstPartyQuestTaskTypes.PLAY_ON_XBOX) || ep(e.userStatus, a.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION))).exhaustive()