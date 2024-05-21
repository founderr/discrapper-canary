"use strict";
n.r(t), n.d(t, {
  questRewardsConfigV2FromServer: function() {
    return o
  }
}), n("47120");
var i = n("887003"),
  r = n("497505");

function s(e) {
  let t = {};
  for (let n of Object.keys(e)) {
    let i = parseInt(n);
    r.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
  }
  return t
}
let a = e => {
    let t = {
      skuId: e.sku_id,
      asset: e.asset
    };
    switch (e.type) {
      case i.QuestRewardTypes.REWARD_CODE:
        return {
          type: i.QuestRewardTypes.REWARD_CODE, messages: {
            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, approximateCount: e.approximate_count, ...t
        };
      case i.QuestRewardTypes.COLLECTIBLE:
        return {
          type: i.QuestRewardTypes.COLLECTIBLE, messages: {
            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, ...t
        };
      case i.QuestRewardTypes.IN_GAME:
        return {
          type: i.QuestRewardTypes.IN_GAME, messages: {
            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, ...t
        }
    }
  },
  o = e => ({
    assignmentMethod: e.assignment_method,
    rewards: e.rewards.map(a),
    rewardsExpireAt: e.rewards_expire_at,
    platforms: e.platforms
  })