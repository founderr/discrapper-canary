"use strict";
n.r(t), n.d(t, {
  getQuestByApplicationId: function() {
    return u
  },
  questUserStatusFromServer: function() {
    return d
  },
  questWithUserStatusFromServer: function() {
    return c
  },
  questsRewardCodeFromServer: function() {
    return f
  },
  getRewardAssetUrl: function() {
    return S
  },
  getHeroStaticAssetUrl: function() {
    return E
  },
  getHeroAnimatedAssetUrl: function() {
    return h
  },
  getQuestBarStaticHeroAssetUrl: function() {
    return _
  },
  getQuestBarAnimatedHeroAssetUrl: function() {
    return C
  },
  getGameTileAssetUrl: function() {
    return p
  },
  getGameLogotypeAssetUrl: function() {
    return m
  },
  getQuestForTargetedContent: function() {
    return T
  },
  getPlatformString: function() {
    return g
  },
  calculatePercentComplete: function() {
    return A
  },
  getContextualEntrypointHeading: function() {
    return v
  },
  isDismissible: function() {
    return I
  },
  isDismissed: function() {
    return R
  }
}), n("222007");
var a = n("568734"),
  r = n("588025"),
  s = n("166604"),
  i = n("782340");
let l = "https://cdn.discordapp.com/assets/quests/";

function u(e, t) {
  let n;
  for (let [a, r] of e)
    if (r.config.applicationId === t && !o(r)) {
      n = r;
      break
    } return n
}

function o(e) {
  let t = new Date(e.config.expiresAt);
  return t.valueOf() <= Date.now()
}

function d(e) {
  return {
    userId: e.user_id,
    questId: e.quest_id,
    enrolledAt: e.enrolled_at,
    completedAt: e.completed_at,
    claimedAt: e.claimed_at,
    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
    streamProgressSeconds: e.stream_progress_seconds,
    dismissedQuestContent: e.dismissed_quest_content
  }
}

function c(e) {
  var t, n, a;
  return {
    id: e.id,
    config: {
      expiresAt: (t = e.config).expires_at,
      streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
      gameTitle: t.game_title,
      getGameLink: t.get_game_link,
      applicationId: t.application_id,
      messages: {
        questName: (n = t.messages).quest_name,
        rewardName: n.reward_name,
        rewardNameWithArticle: n.reward_name_with_article,
        rewardRedemptionInstructionsByPlatform: function(e) {
          let t = {};
          for (let n in e) {
            let a = parseInt(n);
            r.QUEST_REWARD_CODE_PLATFORMS_SET.has(a) && (t[a] = e[n])
          }
          return t
        }(n.reward_redemption_instructions_by_platform),
        gameTitle: n.game_title,
        gamePublisher: n.game_publisher
      },
      colors: {
        primary: (a = t.colors).primary,
        secondary: a.secondary
      },
      rewardCodePlatforms: t.reward_code_platforms.filter(e => r.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
      videoAssets: t.video_assets
    },
    userStatus: null == e.user_status ? null : d(e.user_status),
    targetedContent: e.targeted_content
  }
}

function f(e) {
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at
  }
}
let S = e => "".concat(l).concat(e).concat("/reward.png"),
  E = e => "".concat(l).concat(e).concat("/hero.png"),
  h = e => "".concat(l).concat(e).concat("/hero.webm"),
  _ = e => "".concat(l).concat(e).concat("/quests_bar_hero.png"),
  C = e => "".concat(l).concat(e).concat("/quests_bar_hero.webm"),
  p = e => "".concat(l).concat(e).concat("/game_tile.png"),
  m = (e, t) => "".concat(l).concat(e, "/").concat(t).concat("/game_logotype.png");

function T(e, t) {
  for (let [n, a] of e)
    if (!o(a) && a.targetedContent.includes(t)) return a;
  return null
}
let g = e => {
  switch (e) {
    case r.QuestRewardCodePlatforms.XBOX:
      return i.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case r.QuestRewardCodePlatforms.PLAYSTATION:
      return i.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case r.QuestRewardCodePlatforms.SWITCH:
      return i.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case r.QuestRewardCodePlatforms.PC:
      return i.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case r.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return i.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function A(e) {
  if (null == e.userStatus) return 0;
  let {
    streamProgressSeconds: t,
    completedAt: n
  } = e.userStatus;
  if (null != n) return 1;
  let {
    streamDurationRequirementMinutes: a
  } = e.config;
  return Math.min(t / 60 / a, 1)
}

function v(e) {
  var t, n;
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return i.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let t = A(e);
    return t >= .75 ? i.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? i.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? i.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : i.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return i.default.Messages.QUESTS_TITLE.format({
    questName: e.config.messages.questName
  })
}

function I(e) {
  return e in s.DismissibleQuestContentFlags
}

function R(e, t) {
  return (0, a.hasFlag)(e.dismissedQuestContent, s.DismissibleQuestContentFlags[t])
}