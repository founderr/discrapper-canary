"use strict";
E.r(_), E.d(_, {
  getQuestByApplicationId: function() {
    return r
  },
  questUserStatusFromServer: function() {
    return i
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
  getQuestBarHeroAssetUrl: function() {
    return N
  },
  getGameTileAssetUrl: function() {
    return O
  },
  getGameLogotypeAssetUrl: function() {
    return A
  },
  getQuestForTargetedContent: function() {
    return R
  },
  getPlatformString: function() {
    return l
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
    if (o.config.applicationId === _ && !a(o)) {
      E = o;
      break
    } return E
}

function a(e) {
  let _ = new Date(e.config.expiresAt);
  return _.valueOf() <= Date.now()
}

function i(e) {
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
  return {
    id: e.id,
    config: function(e) {
      var _, E;
      let o = new Set(Object.values(t.QuestRewardCodePlatforms));
      return {
        expiresAt: e.expires_at,
        streamDurationRequirementMinutes: e.stream_duration_requirement_minutes,
        gameTitle: e.game_title,
        applicationId: e.application_id,
        messages: {
          questName: (_ = e.messages).quest_name,
          rewardName: _.reward_name,
          rewardNameWithArticle: _.reward_name_with_article,
          rewardRedemptionInstructions: _.reward_redemption_instructions,
          gameTitle: _.game_title,
          gamePublisher: _.game_publisher
        },
        colors: {
          primary: (E = e.colors).primary,
          secondary: E.secondary
        },
        rewardCodePlatforms: e.reward_code_platforms.filter(e => o.has(e))
      }
    }(e.config),
    userStatus: null == e.user_status ? null : i(e.user_status),
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
  N = e => "".concat(n).concat(e).concat("/quest_bar_hero.gif"),
  O = e => "".concat(n).concat(e).concat("/game_tile.png"),
  A = (e, _) => "".concat(n).concat(e, "/").concat(_).concat("/game_logotype.png");

function R(e, _) {
  for (let [E, t] of e)
    if (!a(t) && t.targetedContent.includes(_)) return t;
  return null
}
let l = e => {
  switch (e) {
    case t.QuestRewardCodePlatforms.XBOX:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case t.QuestRewardCodePlatforms.PLAYSTATION:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case t.QuestRewardCodePlatforms.SWITCH:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case t.QuestRewardCodePlatforms.PC:
      return o.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    default:
      return ""
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