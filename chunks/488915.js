i.d(e, {
    M: function () {
        return n;
    }
}),
    i(47120);
var n,
    a,
    o,
    r,
    c,
    s,
    l = i(512722),
    d = i.n(l),
    u = i(442837),
    _ = i(759174),
    p = i(570140),
    C = i(959546),
    f = i(55563);
function S(t) {
    return 'subscription_listing:'.concat(t);
}
function I(t) {
    return 'application:'.concat(t);
}
function T(t) {
    return 'plan:'.concat(t);
}
function b(t, e, i) {
    return 'entitlement:'.concat(t, ':').concat(i, ':').concat(e);
}
function m(t, e) {
    return 'entitlement:'.concat(e, ':').concat(t);
}
((o = n || (n = {}))[(o.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED');
let N = new _.h(
        (t) => [I(t.application_id), ...t.subscription_listings_ids.map(S)],
        (t) => t.id
    ),
    L = new _.h(
        (t) => [I(t.application_id), T(t.subscription_plans[0].id)],
        (t) => t.id
    ),
    E = new _.h(
        (t) => [b(t.applicationId, t.isValid(null, f.Z), t.guildId), m(t.isValid(null, f.Z), t.guildId)],
        (t) => t.id
    ),
    h = {},
    g = {};
function P(t) {
    var e;
    for (let i of (N.set(t.id, t), null !== (e = t.subscription_listings) && void 0 !== e ? e : []))
        (function (t) {
            L.set(t.id, t);
        })(i);
}
class O extends (a = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        var e;
        return null !== (e = h[t]) && void 0 !== e ? e : 0;
    }
    getSubscriptionGroupListing(t) {
        return N.get(t);
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let e = N.values(S(t));
        return d()(e.length <= 1, 'Found multiple group listings for listing'), e[0];
    }
    getSubscriptionListing(t) {
        return L.get(t);
    }
    getSubscriptionListingsForApplication(t) {
        return L.values(I(t));
    }
    getEntitlementsForGuildFetchState(t) {
        var e;
        return null !== (e = g[t]) && void 0 !== e ? e : 0;
    }
    getSubscriptionListingForPlan(t) {
        let e = L.values(T(t));
        return d()(e.length <= 1, 'Found multiple listings for plan'), e[0];
    }
    getApplicationEntitlementsForGuild(t, e) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return E.values(b(t, i, e));
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return E.values(m(e, t));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (c = 'displayName') in (r = O)
        ? Object.defineProperty(r, c, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[c] = s),
    (e.Z = new O(p.Z, {
        LOGOUT: function () {
            N.clear(), L.clear(), E.clear(), (h = {}), (g = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: e, groupListingId: i } = t;
            h[e] = 1;
            let n = N.get(i);
            if (null != n) for (let t of n.subscription_listings_ids) L.delete(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: e, groupListing: i } = t;
            (h[e] = 2), P(i);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: e } = t;
            h[e] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: e } = t;
            g[e] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: e, entitlements: i } = t;
            (g[e] = 2),
                i.forEach((t) => {
                    let e = C.Z.createFromServer(t);
                    E.set(e.id, e);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: e } = t;
            g[e] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (t) {
            let { groupListing: e } = t;
            P(e);
        }
    }));
