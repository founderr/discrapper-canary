t.d(n, {
    i1: function () {
        return d;
    },
    rx: function () {
        return c;
    },
    sB: function () {
        return _;
    },
    vY: function () {
        return E;
    }
}),
    t(47120);
var r = t(570140),
    i = t(821849),
    l = t(307643),
    o = t(981631);
function u(e) {
    return {
        id: e.id,
        type: o.epS.SUBSCRIPTION,
        application_id: e.application_id,
        product_line: o.POd.APPLICATION,
        name: e.name,
        summary: '',
        description: e.description,
        flags: e.sku_flags,
        manifests: [],
        available_regions: [],
        legal_notice: '',
        deleted: e.soft_deleted,
        price_tier: 0,
        show_age_gate: !1,
        restricted: !1
    };
}
function s(e) {
    var n;
    return {
        id: e.id,
        sku: u(e),
        summary: e.description,
        description: e.description,
        benefits: null !== (n = e.store_listing_benefits) && void 0 !== n ? n : [],
        thumbnail: e.image_asset,
        published: e.published
    };
}
function a(e) {
    for (let n of (r.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: e.map(u)
    }),
    r.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: e.map(s)
    }),
    e))
        r.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: n.id,
            subscriptionPlans: n.subscription_plans
        });
}
async function c(e, n) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: e,
        groupListingId: n
    });
    try {
        var t;
        let i = await l.jz(e, n);
        return (
            r.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: e,
                groupListing: i
            }),
            a(null !== (t = i.subscription_listings) && void 0 !== t ? t : []),
            i
        );
    } catch (n) {
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: e
        });
    }
}
async function d(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: e
    });
    try {
        let n = await l.GF(e);
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: e,
            entitlements: n
        });
    } catch (n) {
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: e
        });
    }
}
function _(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: e
    });
}
async function E(e) {
    r.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    try {
        var n;
        let t = await l.a_(e);
        r.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: t
        });
        let o = null !== (n = t.subscription_listings) && void 0 !== n ? n : [];
        for (let n of o) n.subscription_plans[0].id === e && (await i.GZ(n.id, void 0, void 0, !0));
        a(o);
    } catch (e) {}
}
