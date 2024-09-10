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
    l,
    s,
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
function v(e, n, t) {
    return 'entitlement:'.concat(e, ':').concat(t, ':').concat(n);
}
function C(e, n) {
    return 'entitlement:'.concat(n, ':').concat(e);
}
((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED');
let x = new _.h(
        (e) => [g(e.application_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    b = new _.h(
        (e) => [g(e.application_id), h(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    E = new _.h(
        (e) => [v(e.applicationId, e.isValid(null, I.Z), e.guildId), C(e.isValid(null, I.Z), e.guildId)],
        (e) => e.id
    ),
    S = {},
    T = {};
function P(e) {
    let n = x.values(g(e));
    return d()(n.length <= 1, 'Found multiple group listings for application'), n[0];
}
function N(e) {
    var n;
    for (let t of (x.set(e.id, e), null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
        (function (e) {
            b.set(e.id, e);
        })(t);
}
class A extends (a = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var n;
        return null !== (n = S[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionGroupListing(e) {
        return x.get(e);
    }
    getSubscriptionGroupListingForApplication(e) {
        return P(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let n = x.values(f(e));
        return d()(n.length <= 1, 'Found multiple group listings for listing'), n[0];
    }
    getSubscriptionListing(e) {
        return b.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return b.values(g(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var n;
        return null !== (n = T[e]) && void 0 !== n ? n : 0;
    }
    getSubscriptionListingForPlan(e) {
        let n = b.values(h(e));
        return d()(n.length <= 1, 'Found multiple listings for plan'), n[0];
    }
    getApplicationEntitlementsForGuild(e, n) {
        let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return E.values(v(e, t, n));
    }
    getEntitlementsForGuild(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return E.values(C(n, e));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (l = 'displayName') in (o = A)
        ? Object.defineProperty(o, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = s),
    (n.Z = new A(p.Z, {
        LOGOUT: function () {
            x.clear(), b.clear(), E.clear(), (S = {}), (T = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n } = e;
            S[n] = 1;
            let t = P(n);
            if (null != t) for (let e of t.subscription_listings_ids) b.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (S[n] = 2), N(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            S[n] = 2;
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
                    E.set(n.id, n);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            T[n] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: n } = e;
            N(n);
        }
    }));
