t.d(n, {
    M: function () {
        return i;
    }
}),
    t(47120);
var i,
    r,
    l,
    o,
    u,
    s,
    a = t(512722),
    c = t.n(a),
    d = t(442837),
    _ = t(759174),
    E = t(570140),
    f = t(959546),
    I = t(55563);
function S(e) {
    return 'subscription_listing:'.concat(e);
}
function T(e) {
    return 'application:'.concat(e);
}
function C(e) {
    return 'plan:'.concat(e);
}
function p(e, n, t) {
    return 'entitlement:'.concat(e, ':').concat(t, ':').concat(n);
}
function N(e, n) {
    return 'entitlement:'.concat(n, ':').concat(e);
}
((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED');
let A = new _.h(
        (e) => [T(e.application_id), ...e.subscription_listings_ids.map(S)],
        (e) => e.id
    ),
    g = new _.h(
        (e) => [T(e.application_id), C(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    m = new _.h(
        (e) => [p(e.applicationId, e.isValid(null, I.Z), e.guildId), N(e.isValid(null, I.Z), e.guildId)],
        (e) => e.id
    ),
    L = {},
    O = {};
function R(e) {
    var n;
    for (let t of (A.set(e.id, e), null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
        (function (e) {
            g.set(e.id, e);
        })(t);
}
class h extends (r = d.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var n;
        return null !== (n = L[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(e) {
        return A.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = A.values(S(e));
        return c()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return g.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return g.values(T(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var n;
        return null !== (n = O[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(e) {
        let n = g.values(C(e));
        return c()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return m.values(p(e, t, n));
    }
    getEntitlementsForGuild(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return m.values(N(n, e));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (u = 'displayName') in (o = h)
        ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[u] = s),
    (n.Z = new h(E.Z, {
        LOGOUT: function () {
            A.clear(), g.clear(), m.clear(), (L = {}), (O = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            L[n] = 1;
            let i = A.get(t);
            if (null != i) for (let e of i.subscription_listings_ids) g.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (L[n] = 2), R(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            L[n] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            O[n] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (O[n] = 2),
                t.forEach((e) => {
                    let n = f.Z.createFromServer(e);
                    m.set(n.id, n);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            O[n] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: n } = e;
            R(n);
        }
    }));
