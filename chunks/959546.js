r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(81825),
    a = r(74538),
    s = r(981631);
function o(e, n, r) {
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
class l extends i.Z {
    static createFromServer(e) {
        var n, r;
        return new l({
            id: e.id,
            skuId: e.sku_id,
            applicationId: e.application_id,
            userId: e.user_id,
            gifterId: e.gifter_user_id,
            type: e.type,
            branches: null !== (n = e.branches) && void 0 !== n ? n : [],
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
            subscriptionId: e.subscription_id,
            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : null,
            parentId: null != e.parent_id ? e.parent_id : null,
            consumed: null != e.consumed ? e.consumed : null,
            giftCodeBatchId: null !== (r = e.gift_code_batch_id) && void 0 !== r ? r : null,
            giftStyle: e.gift_style,
            guildId: e.guild_id,
            deleted: e.deleted
        });
    }
    get isGiftable() {
        return this.type === s.qc2.USER_GIFT && null == this.gifterId;
    }
    isValid(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (this.isGiftable || this.deleted) return !1;
        if (this.type === s.qc2.PREMIUM_SUBSCRIPTION) {
            let r = n.get(this.skuId);
            if ((null != r && !r.premium) || !a.ZP.canInstallPremiumApplications(e)) return !1;
        }
        let i = new Date();
        if ((null != this.startsAt && i < this.startsAt) || (null != this.endsAt && i >= this.endsAt)) return !1;
        if (null != r) {
            if (0 === this.branches.length) {
                if (this.applicationId !== r) return !1;
            } else if (!this.branches.includes(r)) return !1;
        }
        return !0;
    }
    constructor(e) {
        super(), o(this, 'id', void 0), o(this, 'skuId', void 0), o(this, 'applicationId', void 0), o(this, 'userId', void 0), o(this, 'gifterId', void 0), o(this, 'type', void 0), o(this, 'branches', void 0), o(this, 'startsAt', void 0), o(this, 'endsAt', void 0), o(this, 'subscriptionId', void 0), o(this, 'subscriptionPlanId', void 0), o(this, 'parentId', void 0), o(this, 'consumed', void 0), o(this, 'giftCodeBatchId', void 0), o(this, 'giftStyle', void 0), o(this, 'guildId', void 0), o(this, 'deleted', void 0), (this.id = e.id), (this.skuId = e.skuId), (this.applicationId = e.applicationId), (this.userId = e.userId), (this.gifterId = e.gifterId), (this.type = e.type), (this.branches = e.branches), (this.startsAt = e.startsAt), (this.endsAt = e.endsAt), (this.subscriptionId = e.subscriptionId), (this.subscriptionPlanId = e.subscriptionPlanId), (this.parentId = e.parentId), (this.consumed = e.consumed), (this.giftCodeBatchId = e.giftCodeBatchId), (this.giftStyle = e.giftStyle), (this.guildId = e.guildId), (this.deleted = e.deleted);
    }
}
