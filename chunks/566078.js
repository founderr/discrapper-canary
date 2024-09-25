n.d(t, {
    r: function () {
        return s;
    }
});
var r = n(627341);
var i = n(47120);
var a = n(278074);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s {
    static build(e) {
        return new s(e);
    }
    get features() {
        return (0, a.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => new Set(e.features))
            .exhaustive();
    }
    _defaultRewardV2(e) {
        return e.rewardsConfig.rewards[0];
    }
    get defaultReward() {
        return (0, a.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => this._defaultRewardV2(e))
            .exhaustive();
    }
    get defaultRewardAsset() {
        return (0, a.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => this._defaultRewardV2(e).asset)
            .exhaustive();
    }
    get defaultRewardRedemptionInstructionsByPlatform() {
        return (0, a.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => this._defaultRewardV2(e).messages.redemptionInstructionsByPlatform)
            .exhaustive();
    }
    get rewardsExpireAt() {
        return (0, a.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewardsExpireAt)
            .exhaustive();
    }
    get application() {
        return (0, a.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => ({
                ...e.application,
                ids: [e.application.id]
            }))
            .exhaustive();
    }
    get rewardPlatforms() {
        return (0, a.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.platforms)
            .exhaustive();
    }
    constructor(e) {
        o(this, 'quest', void 0), (this.quest = e);
    }
}
