"use strict";
n.r(t), n.d(t, {
  SharedQuestFields: function() {
    return l
  }
}), n("627341"), n("47120");
var i = n("278074"),
  r = n("754700"),
  s = n("887003"),
  a = n("742635"),
  o = n("70956");
class l {
  static build(e) {
    return new l(e)
  }
  get streamTargetSeconds() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => Math.round(e.streamDurationRequirementMinutes * o.default.Seconds.MINUTE)).with({
      configVersion: 2
    }, e => {
      var t, n;
      return e.taskConfig.type === a.QuestTaskConfigTypes.FIRST_PARTY && null !== (n = null === (t = e.taskConfig.tasks[r.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP]) || void 0 === t ? void 0 : t.target) && void 0 !== n ? n : null
    }).exhaustive()
  }
  get streamTargetMinutes() {
    return null != this.streamTargetSeconds ? Math.round(this.streamTargetSeconds / o.default.Seconds.MINUTE) : null
  }
  get features() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => new Set(e.variants)).with({
      configVersion: 2
    }, e => new Set(e.features)).exhaustive()
  }
  _defaultRewardV2(e) {
    return e.rewardsConfig.rewards[0]
  }
  _defaultRewardV1(e) {
    var t;
    return null !== (t = e.rewardsConfig.rewards[0]) && void 0 !== t ? t : {
      messages: {
        name: e.messages.rewardName,
        nameWithArticle: e.messages.rewardNameWithArticle,
        redemptionInstructionsByPlatform: e.messages.rewardRedemptionInstructionsByPlatform
      },
      tag: s.QuestRewardTypes.REWARD_CODE,
      asset: e.assets.rewardTile,
      approximateCount: null
    }
  }
  get defaultReward() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => this._defaultRewardV1(e)).with({
      configVersion: 2
    }, e => this._defaultRewardV2(e)).exhaustive()
  }
  get defaultRewardAsset() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => e.assets.rewardTile).with({
      configVersion: 2
    }, e => this._defaultRewardV2(e).asset).exhaustive()
  }
  get defaultRewardRedemptionInstructionsByPlatform() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => e.messages.rewardRedemptionInstructionsByPlatform).with({
      configVersion: 2
    }, e => this._defaultRewardV2(e).messages.redemptionInstructionsByPlatform).exhaustive()
  }
  get rewardsExpireAt() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => e.rewardCodeExpiresAt).with({
      configVersion: 2
    }, e => e.rewardsConfig.rewardsExpireAt).exhaustive()
  }
  get application() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => ({
      id: e.applicationId,
      name: e.applicationName,
      link: e.getGameLink,
      ids: [e.applicationId, ...e.supplementaryApplicationIds]
    })).with({
      configVersion: 2
    }, e => ({
      ...e.application,
      ids: [e.application.id]
    })).exhaustive()
  }
  get rewardPlatforms() {
    return (0, i.match)(this.quest).with({
      configVersion: 1
    }, e => e.rewardCodePlatforms).with({
      configVersion: 2
    }, e => e.rewardsConfig.platforms).exhaustive()
  }
  constructor(e) {
    var t, n, i;
    t = this, i = void 0, (n = "quest") in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, this.quest = e
  }
}