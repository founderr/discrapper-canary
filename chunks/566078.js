n.d(t, {
    r: function () {
        return r;
    }
}),
    n(411104),
    n(47120);
class r {
    static build(e) {
        if (2 !== e.configVersion) throw Error('Cannot build SharedQuestFields when [configVersion !== 2]');
        return new r(e);
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
    constructor(e) {
        var t, n, r;
        (t = this),
            (r = void 0),
            (n = 'quest') in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r),
            (this.quest = e);
    }
}
