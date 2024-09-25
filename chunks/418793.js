n.d(t, {
    v: function () {
        return l;
    }
});
var r = n(47120);
var i = n(887003),
    a = n(497505);
function o(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let r = parseInt(n);
        a.xw.has(r) && (t[r] = e[n]);
    }
    return t;
}
let s = (e) => {
        let t = {
            skuId: e.sku_id,
            asset: e.asset,
            assetVideo: e.asset_video
        };
        switch (e.type) {
            case i.w.REWARD_CODE:
                return {
                    type: i.w.REWARD_CODE,
                    messages: {
                        redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    approximateCount: e.approximate_count,
                    ...t
                };
            case i.w.COLLECTIBLE:
                return {
                    type: i.w.COLLECTIBLE,
                    messages: {
                        redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    expiresAt: e.expires_at,
                    ...t
                };
            case i.w.IN_GAME:
                return {
                    type: i.w.IN_GAME,
                    messages: {
                        redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    ...t
                };
        }
    },
    l = (e) => ({
        assignmentMethod: e.assignment_method,
        rewards: e.rewards.map(s),
        rewardsExpireAt: e.rewards_expire_at,
        platforms: e.platforms
    });
