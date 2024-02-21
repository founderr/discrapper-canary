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
    return E
  },
  getRewardAssetUrl: function() {
    return S
  },
  getHeroStaticAssetUrl: function() {
    return f
  },
  getHeroAnimatedAssetUrl: function() {
    return _
  },
  getQuestBarStaticHeroAssetUrl: function() {
    return T
  },
  getQuestBarAnimatedHeroAssetUrl: function() {
    return C
  },
  getGameTileAssetUrl: function() {
    return p
  },
  getGameLogotypeAssetUrl: function() {
    return A
  },
  getQuestUrl: function() {
    return g
  },
  getQuestForTargetedContent: function() {
    return h
  },
  getPlatformString: function() {
    return I
  },
  calculatePercentComplete: function() {
    return m
  },
  getContextualEntrypointHeading: function() {
    return R
  },
  isDismissible: function() {
    return N
  },
  isDismissed: function() {
    return U
  }
}), n("222007");
var s = n("568734"),
  i = n("588025"),
  r = n("166604"),
  a = n("782340");
let l = "https://cdn.discordapp.com/assets/quests/";

function u(e, t) {
  let n;
  for (let [s, i] of e)
    if (i.config.applicationId === t && !o(i)) {
      n = i;
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
  var t, n, s;
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
            let s = parseInt(n);
            i.QUEST_REWARD_CODE_PLATFORMS_SET.has(s) && (t[s] = e[n])
          }
          return t
        }(n.reward_redemption_instructions_by_platform),
        gameTitle: n.game_title,
        gamePublisher: n.game_publisher
      },
      colors: {
        primary: (s = t.colors).primary,
        secondary: s.secondary
      },
      rewardCodePlatforms: t.reward_code_platforms.filter(e => i.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
      videoAssets: t.video_assets
    },
    userStatus: null == e.user_status ? null : d(e.user_status),
    targetedContent: e.targeted_content
  }
}

function E(e) {
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at
  }
}
let S = e => "".concat(l).concat(e).concat("/reward.png"),
  f = e => "".concat(l).concat(e).concat("/hero.png"),
  _ = e => "".concat(l).concat(e).concat("/hero.webm"),
  T = e => "".concat(l).concat(e).concat("/quests_bar_hero.png"),
  C = e => "".concat(l).concat(e).concat("/quests_bar_hero.webm"),
  p = e => "".concat(l).concat(e).concat("/game_tile.png"),
  A = (e, t) => "".concat(l).concat(e, "/").concat(t).concat("/game_logotype.png"),
  g = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function h(e, t) {
  for (let [n, s] of e)
    if (!o(s) && s.targetedContent.includes(t)) return s;
  return null
}
let I = e => {
  switch (e) {
    case i.QuestRewardCodePlatforms.XBOX:
      return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case i.QuestRewardCodePlatforms.PLAYSTATION:
      return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case i.QuestRewardCodePlatforms.SWITCH:
      return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case i.QuestRewardCodePlatforms.PC:
      return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case i.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function m(e) {
  if (null == e.userStatus) return 0;
  let {
    streamProgressSeconds: t,
    completedAt: n
  } = e.userStatus;
  if (null != n) return 1;
  let {
    streamDurationRequirementMinutes: s
  } = e.config;
  return Math.min(t / 60 / s, 1)
}

function R(e) {
  var t, n;
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return a.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
    let t = m(e);
    return t >= .75 ? a.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? a.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? a.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : a.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
  }
  return a.default.Messages.QUESTS_TITLE.format({
    questName: e.config.messages.questName
  })
}

function N(e) {
  return e in r.DismissibleQuestContentFlags
}

function U(e, t) {
  return (0, s.hasFlag)(e.dismissedQuestContent, r.DismissibleQuestContentFlags[t])
}