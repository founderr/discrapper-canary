r.d(n, {
    r: function () {
        return u;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(319245),
    o = r(918701);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class u {
    static build(e) {
        if (2 !== e.configVersion) throw Error('Cannot build SharedQuestFields when [configVersion !== 2]');
        return new u(e);
    }
    get features() {
        return new Set(this.quest.features);
    }
    _defaultRewardV2(e) {
        return e.rewardsConfig.rewards[0];
    }
    get defaultReward() {
        return this._defaultRewardV2(this.quest);
    }
    get defaultRewardAsset() {
        return this._defaultRewardV2(this.quest).asset;
    }
    get defaultRewardRedemptionInstructionsByPlatform() {
        return this._defaultRewardV2(this.quest).messages.redemptionInstructionsByPlatform;
    }
    get rewardsExpireAt() {
        return this.quest.rewardsConfig.rewardsExpireAt;
    }
    get application() {
        return {
            ...this.quest.application,
            ids: [this.quest.application.id]
        };
    }
    get rewardPlatforms() {
        return this.quest.rewardsConfig.platforms;
    }
    get questType() {
        return (0, o.q8)({ config: this.quest }) ? s.W.VIDEO : s.W.GAMEPLAY;
    }
    constructor(e) {
        l(this, 'quest', void 0), (this.quest = e);
    }
}
