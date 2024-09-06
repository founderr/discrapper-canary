t.d(n, {
    M: function () {
        return r;
    }
}),
    t(47120);
var r,
    i,
    o,
    l,
    u,
    s,
    a = t(512722),
    c = t.n(a),
    d = t(442837),
    _ = t(759174),
    f = t(570140),
    E = t(959546),
    I = t(55563);
function S(e) {
    return 'subscription_listing:'.concat(e);
}
function g(e) {
    return 'application:'.concat(e);
}
function T(e) {
    return 'plan:'.concat(e);
}
function p(e, n, t) {
    return 'entitlement:'.concat(e, ':').concat(t, ':').concat(n);
}
function C(e, n) {
    return 'entitlement:'.concat(n, ':').concat(e);
}
((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED');
let m = new _.h(
        (e) => [g(e.application_id), ...e.subscription_listings_ids.map(S)],
        (e) => e.id
    ),
    A = new _.h(
        (e) => [g(e.application_id), T(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    N = new _.h(
        (e) => [p(e.applicationId, e.isValid(null, I.Z), e.guildId), C(e.isValid(null, I.Z), e.guildId)],
        (e) => e.id
    ),
    h = {},
    L = {};
function O(e) {
    let n = m.values(g(e));
    return c()(n.length <= 1, 'Found multiple group listings for application'), n[0];
}
function R(e) {
    var n;
    for (let t of (m.set(e.id, e), null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
        (function (e) {
            A.set(e.id, e);
        })(t);
}
class v extends (i = d.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(e) {
        return m.get(e);
    }
    getSubscriptionGroupListingForApplication(e) {
        return O(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = m.values(S(e));
        return c()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return A.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return A.values(g(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var n;
        return null !== (n = L[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(e) {
        let n = A.values(T(e));
        return c()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return N.values(p(e, t, n));
    }
    getEntitlementsForGuild(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return N.values(C(n, e));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (u = 'displayName') in (l = v)
        ? Object.defineProperty(l, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = s),
    (n.Z = new v(f.Z, {
        LOGOUT: function () {
            m.clear(), A.clear(), N.clear(), (h = {}), (L = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n } = e;
            h[n] = 1;
            let t = O(n);
            if (null != t) for (let e of t.subscription_listings_ids) A.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (h[n] = 2), R(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            h[n] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            L[n] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (L[n] = 2),
                t.forEach((e) => {
                    let n = E.Z.createFromServer(e);
                    N.set(n.id, n);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            L[n] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: n } = e;
            R(n);
        }
    }));
