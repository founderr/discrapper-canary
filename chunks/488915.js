n.d(t, {
    M: function () {
        return i;
    }
}),
    n(47120);
var i,
    a,
    r,
    o,
    l,
    s,
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    p = n(759174),
    m = n(570140),
    _ = n(959546),
    f = n(55563);
function h(e) {
    return 'subscription_listing:'.concat(e);
}
function g(e) {
    return 'application:'.concat(e);
}
function I(e) {
    return 'plan:'.concat(e);
}
function b(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function x(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED');
let v = new p.h(
        (e) => [g(e.application_id), ...e.subscription_listings_ids.map(h)],
        (e) => e.id
    ),
    C = new p.h(
        (e) => [g(e.application_id), I(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    N = new p.h(
        (e) => [b(e.applicationId, e.isValid(null, f.Z), e.guildId), x(e.isValid(null, f.Z), e.guildId)],
        (e) => e.id
    ),
    S = {},
    T = {};
function j(e) {
    var t;
    for (let n of (v.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
        (function (e) {
            C.set(e.id, e);
        })(n);
}
class y extends (a = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null !== (t = S[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return v.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = v.values(h(e));
        return d()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return C.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return C.values(g(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = C.values(I(e));
        return d()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return N.values(b(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return N.values(x(t, e));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (l = 'displayName') in (o = y)
        ? Object.defineProperty(o, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = s),
    (t.Z = new y(m.Z, {
        LOGOUT: function () {
            v.clear(), C.clear(), N.clear(), (S = {}), (T = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            S[t] = 1;
            let i = v.get(n);
            if (null != i) for (let e of i.subscription_listings_ids) C.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (S[t] = 2), j(n);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            S[t] = 2;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            T[t] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (T[t] = 2),
                n.forEach((e) => {
                    let t = _.Z.createFromServer(e);
                    N.set(t.id, t);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            T[t] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: t } = e;
            j(t);
        }
    }));
