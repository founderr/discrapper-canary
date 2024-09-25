n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(512722),
    s = n.n(o),
    l = n(442837),
    u = n(759174),
    c = n(570140),
    d = n(959546),
    _ = n(55563);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    return 'subscription_listing:'.concat(e);
}
function h(e) {
    return 'application:'.concat(e);
}
function p(e) {
    return 'plan:'.concat(e);
}
function m(e, t, n) {
    return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}
function I(e, t) {
    return 'entitlement:'.concat(t, ':').concat(e);
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(r || (r = {}));
let T = new u.h(
        (e) => [h(e.application_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    g = new u.h(
        (e) => [h(e.application_id), p(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    S = new u.h(
        (e) => [m(e.applicationId, e.isValid(null, _.Z), e.guildId), I(e.isValid(null, _.Z), e.guildId)],
        (e) => e.id
    ),
    A = {},
    v = {};
function N(e) {
    var t;
    for (let n of (T.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) O(n);
}
function O(e) {
    g.set(e.id, e);
}
function R() {
    T.clear(), g.clear(), S.clear(), (A = {}), (v = {});
}
function C(e) {
    let { applicationId: t, groupListingId: n } = e;
    A[t] = 1;
    let r = T.get(n);
    if (null != r) for (let e of r.subscription_listings_ids) g.delete(e);
}
function y(e) {
    let { applicationId: t, groupListing: n } = e;
    (A[t] = 2), N(n);
}
function b(e) {
    let { applicationId: t } = e;
    A[t] = 2;
}
function L(e) {
    let { groupListing: t } = e;
    N(t);
}
class D extends (i = l.yh) {
    getSubscriptionGroupListingsForApplicationFetchState(e) {
        var t;
        return null !== (t = A[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionGroupListing(e) {
        return T.get(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = T.values(f(e));
        return s()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return g.get(e);
    }
    getSubscriptionListingsForApplication(e) {
        return g.values(h(e));
    }
    getEntitlementsForGuildFetchState(e) {
        var t;
        return null !== (t = v[e]) && void 0 !== t ? t : 0;
    }
    getSubscriptionListingForPlan(e) {
        let t = g.values(p(e));
        return s()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getApplicationEntitlementsForGuild(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return S.values(m(e, n, t));
    }
    getEntitlementsForGuild(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return S.values(I(t, e));
    }
}
E(D, 'displayName', 'ApplicationSubscriptionStore'),
    (t.Z = new D(c.Z, {
        LOGOUT: R,
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: C,
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: y,
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: b,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            v[t] = 1;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (v[t] = 2),
                n.forEach((e) => {
                    let t = d.Z.createFromServer(e);
                    S.set(t.id, t);
                });
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            v[t] = 0;
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: L
    }));
