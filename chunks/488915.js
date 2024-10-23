t.d(n, {
    M: function () {
        return r;
    }
}),
    t(47120);
var r,
    i,
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
function p(e) {
    return 'application:'.concat(e);
}
function T(e) {
    return 'plan:'.concat(e);
}
function C(e, n, t) {
    return 'entitlement:'.concat(e, ':').concat(t, ':').concat(n);
}
function g(e, n) {
    return 'entitlement:'.concat(n, ':').concat(e);
}
((l = r || (r = {}))[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED');
let N = new _.h(
        (e) => [p(e.application_id), ...e.subscription_listings_ids.map(S)],
        (e) => e.id
    ),
    m = new _.h(
        (e) => [p(e.application_id), T(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    A = new _.h(
        (e) => [C(e.applicationId, e.isValid(null, I.Z), e.guildId), g(e.isValid(null, I.Z), e.guildId)],
        (e) => e.id
    ),
    h = {},
    v = {};
function L(e) {
    var n;
    for (let t of (N.set(e.id, e), null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
        (function (e) {
            m.set(e.id, e);
        })(t);
}
class O extends (i = d.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(e) {
        return N.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = N.values(S(e));
        return c()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return m.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return m.values(p(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var n;
        return null !== (n = v[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(e) {
        let n = m.values(T(e));
        return c()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return A.values(C(e, t, n));
    }
    getEntitlementsForGuild(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return A.values(g(n, e));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (u = 'displayName') in (o = O)
        ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[u] = s),
    (n.Z = new O(E.Z, {
        LOGOUT: function () {
            N.clear(), m.clear(), A.clear(), (h = {}), (v = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            h[n] = 1;
            let r = N.get(t);
            if (null != r) for (let e of r.subscription_listings_ids) m.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (h[n] = 2), L(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            h[n] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            v[n] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (v[n] = 2),
                t.forEach((e) => {
                    let n = f.Z.createFromServer(e);
                    A.set(n.id, n);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            v[n] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: n } = e;
            L(n);
        }
    }));
