"use strict";
n.r(t), n.d(t, {
  getQuestByApplicationId: function() {
    return i
  },
  questUserStatusFromServer: function() {
    return u
  },
  questWithUserStatusFromServer: function() {
    return o
  },
  questsRewardCodeFromServer: function() {
    return d
  },
  getRewardAssetUrl: function() {
    return c
  },
  getHeroStaticAssetUrl: function() {
    return f
  },
  getHeroAnimatedAssetUrl: function() {
    return E
  },
  getQuestBarStaticHeroAssetUrl: function() {
    return S
  },
  getQuestBarAnimatedHeroAssetUrl: function() {
    return h
  },
  getGameTileAssetUrl: function() {
    return _
  },
  getGameLogotypeAssetUrl: function() {
    return C
  },
  getQuestForTargetedContent: function() {
    return p
  },
  getPlatformString: function() {
    return m
  },
  calculatePercentComplete: function() {
    return T
  },
  getContextualEntrypointHeading: function() {
    return g
  }
}), n("222007");
var a = n("588025"),
  r = n("782340");
let s = "https://cdn.discordapp.com/assets/quests/";

function i(e, t) {
  let n;
  for (let [a, r] of e)
    if (r.config.applicationId === t && !l(r)) {
      n = r;
      break
    } return n
}

function l(e) {
  let t = new Date(e.config.expiresAt);
  return t.valueOf() <= Date.now()
}

function u(e) {
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

function o(e) {
  var t, n, r;
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
            let r = parseInt(n);
            a.QUEST_REWARD_CODE_PLATFORMS_SET.has(r) && (t[r] = e[n])
          }
          return t
        }(n.reward_redemption_instructions_by_platform),
        gameTitle: n.game_title,
        gamePublisher: n.game_publisher
      },
      colors: {
        primary: (r = t.colors).primary,
        secondary: r.secondary
      },
      rewardCodePlatforms: t.reward_code_platforms.filter(e => a.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
      videoAssets: t.video_assets
    },
    userStatus: null == e.user_status ? null : u(e.user_status),
    targetedContent: e.targeted_content
  }
}

function d(e) {
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at
  }
}
let c = e => "".concat(s).concat(e).concat("/reward.png"),
  f = e => "".concat(s).concat(e).concat("/hero.png"),
  E = e => "".concat(s).concat(e).concat("/hero.webm"),
  S = e => "".concat(s).concat(e).concat("/quests_bar_hero.png"),
  h = e => "".concat(s).concat(e).concat("/quests_bar_hero.webm"),
  _ = e => "".concat(s).concat(e).concat("/game_tile.png"),
  C = (e, t) => "".concat(s).concat(e, "/").concat(t).concat("/game_logotype.png");

function p(e, t) {
  for (let [n, a] of e)
    if (!l(a) && a.targetedContent.includes(t)) return a;
  return null
}
let m = e => {
  switch (e) {
    case a.QuestRewardCodePlatforms.XBOX:
      return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case a.QuestRewardCodePlatforms.PLAYSTATION:
      return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case a.QuestRewardCodePlatforms.SWITCH:
      return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case a.QuestRewardCodePlatforms.PC:
      return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case a.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function T(e) {
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

function g(e) {
  var t, n;
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return r.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let t = T(e);
    return t >= .75 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : r.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return r.default.Messages.QUESTS_TITLE.format({
    questName: e.config.messages.questName
  })
}