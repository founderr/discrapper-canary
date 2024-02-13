"use strict";
E.r(_), E.d(_, {
  getQuestByApplicationId: function() {
    return r
  },
  questUserStatusFromServer: function() {
    return a
  },
  questWithUserStatusFromServer: function() {
    return I
  },
  questsRewardCodeFromServer: function() {
    return s
  },
  getRewardAssetUrl: function() {
    return T
  },
  getHeroAssetUrl: function() {
    return S
  },
  getQuestBarStaticHeroAssetUrl: function() {
    return N
  },
  getQuestBarAnimatedHeroAssetUrl: function() {
    return O
  },
  getGameTileAssetUrl: function() {
    return A
  },
  getGameLogotypeAssetUrl: function() {
    return R
  },
  getQuestForTargetedContent: function() {
    return l
  },
  getPlatformString: function() {
    return u
  },
  calculatePercentComplete: function() {
    return L
  }
}), E("222007");
var t = E("588025"),
  o = E("782340");
let n = "https://cdn.discordapp.com/assets/quests/";

function r(e, _) {
  let E;
  for (let [t, o] of e)
    if (o.config.applicationId === _ && !i(o)) {
      E = o;
      break
    } return E
}

function i(e) {
  let _ = new Date(e.config.expiresAt);
  return _.valueOf() <= Date.now()
}

function a(e) {
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

function I(e) {
  var _, E, o;
  return {
    id: e.id,
    config: {
      expiresAt: (_ = e.config).expires_at,
      streamDurationRequirementMinutes: _.stream_duration_requirement_minutes,
      gameTitle: _.game_title,
      getGameLink: _.get_game_link,
      applicationId: _.application_id,
      messages: {
        questName: (E = _.messages).quest_name,
        rewardName: E.reward_name,
        rewardNameWithArticle: E.reward_name_with_article,
        rewardRedemptionInstructionsByPlatform: function(e) {
          let _ = {};
          for (let E in e) {
            let o = parseInt(E);
            t.QUEST_REWARD_CODE_PLATFORMS_SET.has(o) && (_[o] = e[E])
          }
          return _
        }(E.reward_redemption_instructions_by_platform),
        gameTitle: E.game_title,
        gamePublisher: E.game_publisher
      },
      colors: {
        primary: (o = _.colors).primary,
        secondary: o.secondary
      },
      rewardCodePlatforms: _.reward_code_platforms.filter(e => t.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
      videoAssets: _.video_assets
    },
    userStatus: null == e.user_status ? null : a(e.user_status),
    targetedContent: e.targeted_content
  }
}

function s(e) {
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at
  }
}
let T = e => "".concat(n).concat(e).concat("/reward.png"),
  S = e => "".concat(n).concat(e).concat("/hero.png"),
  N = e => "".concat(n).concat(e).concat("/quests_bar_hero.png"),
  O = e => "".concat(n).concat(e).concat("/quests_bar_hero.webm"),
  A = e => "".concat(n).concat(e).concat("/game_tile.png"),
  R = (e, _) => "".concat(n).concat(e, "/").concat(_).concat("/game_logotype.png");

function l(e, _) {
  for (let [E, t] of e)
    if (!i(t) && t.targetedContent.includes(_)) return t;
  return null
}
let u = e => {
  switch (e) {
    case t.QuestRewardCodePlatforms.XBOX:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case t.QuestRewardCodePlatforms.PLAYSTATION:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case t.QuestRewardCodePlatforms.SWITCH:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case t.QuestRewardCodePlatforms.PC:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case t.QuestRewardCodePlatforms.CROSS_PLATFORM:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
  }
};

function L(e) {
  if (null == e.userStatus) return 0;
  let {
    streamProgressSeconds: _,
    completedAt: E
  } = e.userStatus;
  if (null != E) return 1;
  let {
    streamDurationRequirementMinutes: t
  } = e.config;
  return Math.min(_ / 60 / t, 1)
}