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
function g(e) {
    return 'application:'.concat(e);
}
function h(e) {
    return 'plan:'.concat(e);
}
function C(e, n, t) {
    return 'entitlement:'.concat(e, ':').concat(t, ':').concat(n);
}
function b(e, n) {
    return 'entitlement:'.concat(n, ':').concat(e);
}
((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED');
let E = new _.h(
        (e) => [g(e.application_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    v = new _.h(
        (e) => [g(e.application_id), h(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    x = new _.h(
        (e) => [C(e.applicationId, e.isValid(null, I.Z), e.guildId), b(e.isValid(null, I.Z), e.guildId)],
        (e) => e.id
    ),
    P = {},
    T = {};
function S(e) {
    var n;
    for (let t of (E.set(e.id, e), null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
        (function (e) {
            v.set(e.id, e);
        })(t);
}
class N extends (a = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var n;
        return null !== (n = P[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(e) {
        return E.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = E.values(f(e));
        return d()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return v.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return v.values(g(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var n;
        return null !== (n = T[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(e) {
        let n = v.values(h(e));
        return d()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return x.values(C(e, t, n));
    }
    getEntitlementsForGuild(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return x.values(b(n, e));
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
            E.clear(), v.clear(), x.clear(), (P = {}), (T = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            P[n] = 1;
            let i = E.get(t);
            if (null != i) for (let e of i.subscription_listings_ids) v.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (P[n] = 2), S(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            P[n] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            T[n] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (T[n] = 2),
                t.forEach((e) => {
                    let n = m.Z.createFromServer(e);
                    x.set(n.id, n);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            T[n] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: n } = e;
            S(n);
        }
    }));
