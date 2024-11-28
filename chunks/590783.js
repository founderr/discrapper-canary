i.d(e, {
    Z: function () {
        return d;
    }
}),
    i(789020);
var n = i(913527),
    s = i.n(n),
    r = i(81825),
    o = i(630388),
    a = i(301766),
    l = i(474936);
function c(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let u = Object.freeze({
    PAYMENT_SOURCE_REQUIRED: 1,
    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
    NOT_SELF_REDEEMABLE: 4
});
class d extends r.Z {
    static createFromServer(t) {
        return new d({
            userId: null != t.user ? t.user.id : null,
            code: t.code,
            skuId: t.sku_id,
            applicationId: t.application_id,
            uses: t.uses,
            maxUses: t.max_uses,
            storeListingId: null != t.store_listing ? t.store_listing.id : null,
            expiresAt: null != t.expires_at ? s()(t.expires_at) : null,
            redeemed: t.redeemed,
            subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
            subscriptionPlan: null != t.subscription_plan ? a.ZP.createFromServer(t.subscription_plan) : null,
            revoked: !1,
            entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
            flags: null != t.flags ? t.flags : 0,
            giftStyle: t.gift_style,
            subscriptionTrial:
                null != t.subscription_trial
                    ? {
                          id: t.subscription_trial.id,
                          interval: t.subscription_trial.interval,
                          intervalCount: t.subscription_trial.interval_count,
                          skuId: t.subscription_trial.sku_id
                      }
                    : null,
            promotion:
                null != t.promotion
                    ? {
                          id: t.promotion.id,
                          startDate: t.promotion.start_date,
                          endDate: t.promotion.end_date,
                          inboundHeaderText: t.promotion.inbound_header_text,
                          inboundBodyText: t.promotion.inbound_body_text,
                          inboundHelpCenterLink: t.promotion.inbound_help_center_link
                      }
                    : null
        });
    }
    isExpired() {
        let t = this.expiresAt;
        return null != t && s()().isAfter(t);
    }
    get hasMultipleCopies() {
        return this.maxUses > 1;
    }
    get isClaimed() {
        return this.uses >= this.maxUses;
    }
    get remainingUses() {
        return this.maxUses - this.uses;
    }
    get isSubscription() {
        return null != this.subscriptionPlanId;
    }
    get premiumSubscriptionType() {
        return (this.isSubscription && l.y7[this.skuId]) || null;
    }
    get isSelfRedeemable() {
        return !(0, o.yE)(this.flags, u.NOT_SELF_REDEEMABLE);
    }
    get isExistingPremiumSubscriptionDisallowed() {
        return (0, o.yE)(this.flags, u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
    }
    get analyticsData() {
        return {
            gift_code: this.code,
            gift_code_max_uses: this.maxUses
        };
    }
    toString() {
        return this.code;
    }
    constructor(t) {
        super(), c(this, 'userId', void 0), c(this, 'code', void 0), c(this, 'skuId', void 0), c(this, 'applicationId', void 0), c(this, 'uses', void 0), c(this, 'maxUses', void 0), c(this, 'expiresAt', void 0), c(this, 'redeemed', void 0), c(this, 'storeListingId', void 0), c(this, 'subscriptionPlanId', void 0), c(this, 'subscriptionPlan', void 0), c(this, 'revoked', void 0), c(this, 'entitlementBranches', void 0), c(this, 'flags', void 0), c(this, 'subscriptionTrial', void 0), c(this, 'promotion', void 0), c(this, 'giftStyle', void 0), (this.userId = t.userId), (this.code = t.code), (this.skuId = t.skuId), (this.applicationId = t.applicationId), (this.uses = t.uses), (this.maxUses = t.maxUses), (this.expiresAt = t.expiresAt), (this.redeemed = t.redeemed), (this.storeListingId = t.storeListingId), (this.subscriptionPlanId = t.subscriptionPlanId), (this.subscriptionPlan = t.subscriptionPlan), (this.revoked = t.revoked), (this.entitlementBranches = t.entitlementBranches), (this.flags = t.flags), (this.subscriptionTrial = t.subscriptionTrial), (this.promotion = t.promotion), (this.giftStyle = t.giftStyle);
    }
}
