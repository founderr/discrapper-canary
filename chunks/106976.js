n.d(e, {
    i1: function () {
        return u;
    },
    rx: function () {
        return d;
    },
    sB: function () {
        return _;
    },
    vY: function () {
        return p;
    }
}),
    n(47120);
var i = n(570140),
    o = n(821849),
    a = n(307643),
    r = n(981631);
function c(t) {
    return {
        id: t.id,
        type: r.epS.SUBSCRIPTION,
        application_id: t.application_id,
        product_line: r.POd.APPLICATION,
        name: t.name,
        summary: '',
        description: t.description,
        flags: t.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: '',
        deleted: t.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1
    };
}
function s(t) {
    var e;
    return {
        id: t.id,
        sku: c(t),
        summary: t.description,
        description: t.description,
        benefits: null !== (e = t.store_listing_benefits) && void 0 !== e ? e : [],
        thumbnail: t.image_asset,
        published: t.published
    };
}
function l(t) {
    for (let e of (i.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: t.map(c)
    }),
    i.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: t.map(s)
    }),
    t))
        i.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: e.id,
            subscriptionPlans: e.subscription_plans
        });
}
async function d(t, e) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: t,
        groupListingId: e
    });
    try {
        var n;
        let o = await a.jz(t, e);
        return (
            i.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: t,
                groupListing: o
            }),
            l(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
            o
        );
    } catch (e) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: t
        });
    }
}
async function u(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: t
    });
    try {
        let e = await a.GF(t);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: t,
            entitlements: e
        });
    } catch (e) {
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: t
        });
    }
}
function _(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: t
    });
}
async function p(t) {
    i.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: t
    });
    try {
        var e;
        let n = await a.a_(t);
        i.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: n
        });
        let r = null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
        for (let e of r) e.subscription_plans[0].id === t && (await o.GZ(e.id, void 0, void 0, !0));
        l(r);
    } catch (t) {}
}
