n.d(t, {
    M: function () {
        return i;
    }
}),
    n(47120);
var i,
    a,
    r,
    l,
    o,
    s,
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    p = n(759174),
    m = n(570140),
    _ = n(959546),
    h = n(55563);
function f(e) {
    return 'subscription_listing:'.concat(e);
}
function g(e) {
    return 'application:'.concat(e);
}
function v(e) {
    return 'plan:'.concat(e);
}
function I(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function x(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED');
let C = new p.h(
        (e) => [g(e.application_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    S = new p.h(
        (e) => [g(e.application_id), v(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    N = new p.h(
        (e) => [I(e.applicationId, e.isValid(null, h.Z), e.guildId), x(e.isValid(null, h.Z), e.guildId)],
        (e) => e.id
    ),
    b = {},
    T = {};
function j(e) {
    var t;
    for (let n of (C.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
        (function (e) {
            S.set(e.id, e);
        })(n);
}
class y extends (a = u.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return C.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = C.values(f(e));
        return d()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return S.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return S.values(g(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = S.values(v(e));
        return d()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return N.values(I(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return N.values(x(t, e));
    }
}
(s = 'ApplicationSubscriptionStore'),
    (o = 'displayName') in (l = y)
        ? Object.defineProperty(l, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[o] = s),
    (t.Z = new y(m.Z, {
        LOGOUT: function () {
            C.clear(), S.clear(), N.clear(), (b = {}), (T = {});
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            b[t] = 1;
            let i = C.get(n);
            if (null != i) for (let e of i.subscription_listings_ids) S.delete(e);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (b[t] = 2), j(n);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            b[t] = 2;
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
