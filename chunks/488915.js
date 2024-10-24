t.d(n, {
    M: function () {
        return i;
    }
}),
    t(47120);
var i,
    a,
    r,
    o,
    s,
    l,
    c = t(512722),
    d = t.n(c),
    u = t(442837),
    _ = t(759174),
    p = t(570140),
    m = t(959546),
    I = t(55563);
function f(e) {
    return 'subscription_listing:'.concat(e);
}
function h(e) {
    return 'application:'.concat(e);
}
function g(e) {
    return 'plan:'.concat(e);
}
function C(e, n, t) {
    return 'entitlement:'.concat(e, ':').concat(t, ':').concat(n);
}
function b(e, n) {
    return 'entitlement:'.concat(n, ':').concat(e);
}
((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED');
let x = new _.h(
        (e) => [h(e.application_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    v = new _.h(
        (e) => [h(e.application_id), g(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    P = new _.h(
        (e) => [C(e.applicationId, e.isValid(null, I.Z), e.guildId), b(e.isValid(null, I.Z), e.guildId)],
        (e) => e.id
    ),
    E = {},
    S = {};
function T(e) {
    var n;
    for (let t of (x.set(e.id, e), null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
        (function (e) {
            v.set(e.id, e);
        })(t);
}
class N extends (a = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var n;
        return null !== (n = E[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(e) {
        return x.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = x.values(f(e));
        return d()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return v.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return v.values(h(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var n;
        return null !== (n = S[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(e) {
        let n = v.values(g(e));
        return d()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return P.values(C(e, t, n));
    }
    getEntitlementsForGuild(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return P.values(b(n, e));
    }
}
(l = 'ApplicationSubscriptionStore'),
    (s = 'displayName') in (o = N)
        ? Object.defineProperty(o, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[s] = l),
    (n.Z = new N(p.Z, {
        LOGOUT: function () {
            x.clear(), v.clear(), P.clear(), (E = {}), (S = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            E[n] = 1;
            let i = x.get(t);
            if (null != i) for (let e of i.subscription_listings_ids) v.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (E[n] = 2), T(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            E[n] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            S[n] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (S[n] = 2),
                t.forEach((e) => {
                    let n = m.Z.createFromServer(e);
                    P.set(n.id, n);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            S[n] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: n } = e;
            T(n);
        }
    }));
