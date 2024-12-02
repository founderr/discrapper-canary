i.d(e, {
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
    i(47120);
var n = i(570140),
    a = i(821849),
    o = i(307643),
    r = i(981631);
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
    for (let e of (n.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: t.map(c)
    }),
    n.Z.dispatch({
        type: 'STORE_LISTINGS_FETCH_SUCCESS',
        storeListings: t.map(s)
    }),
    t))
        n.Z.dispatch({
            type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
            skuId: e.id,
            subscriptionPlans: e.subscription_plans
        });
}
async function d(t, e) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS',
        applicationId: t,
        groupListingId: e
    });
    try {
        var i;
        let a = await o.jz(t, e);
        return (
            n.Z.dispatch({
                type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
                applicationId: t,
                groupListing: a
            }),
            l(null !== (i = a.subscription_listings) && void 0 !== i ? i : []),
            a
        );
    } catch (e) {
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            applicationId: t
        });
    }
}
async function u(t) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS',
        guildId: t
    });
    try {
        let e = await o.GF(t);
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS',
            guildId: t,
            entitlements: e
        });
    } catch (e) {
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE',
            guildId: t
        });
    }
}
function _(t) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED',
        guildId: t
    });
}
async function p(t) {
    n.Z.dispatch({
        type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: t
    });
    try {
        var e;
        let i = await o.a_(t);
        n.Z.dispatch({
            type: 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
            groupListing: i
        });
        let r = null !== (e = i.subscription_listings) && void 0 !== e ? e : [];
        await Promise.all(
            r.map((e) => {
                if (e.subscription_plans[0].id === t) return a.GZ(e.id, void 0, void 0, !0);
            })
        ),
            l(r);
    } catch (t) {}
}
