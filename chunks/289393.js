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
    d = n(308636);
function _(e, t, n) {
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
function E(e) {
    return 'guild:'.concat(e);
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
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(r || (r = {}));
let m = new u.h(
        (e) => [E(e.guild_id), ...e.subscription_listings_ids.map(f)],
        (e) => e.id
    ),
    I = new u.h(
        (e) => [h(e.application_id), p(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    T = {},
    g = new Set(),
    S = {},
    A = {},
    v = {},
    N = {},
    O = new Map();
function R(e) {
    return m.values(E(e));
}
function C(e) {
    var t;
    for (let n of (m.set(e.id, e), O.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) y(n);
}
function y(e) {
    I.set(e.id, e);
}
function L() {
    m.clear(), I.clear(), (T = {}), g.clear(), (S = {}), (A = {}), (v = {}), (N = {}), O.clear();
}
function b(e) {
    let { settings: t } = e;
    S[t.guild_id] = t;
}
function D(e) {
    let { guildId: t } = e;
    for (let e of ((T[t] = 1), R(t))) for (let t of (m.delete(e.id), e.subscription_listings_ids)) I.delete(t);
}
function M(e) {
    let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
    for (let e of ((T[t] = 2), n)) C(e);
    for (let e of ((S[t] = r), i)) A[e.id] = e;
}
function P(e) {
    let { guildId: t } = e;
    T[t] = 2;
}
function U(e) {
    let { listing: t } = e;
    C(t);
}
function w(e) {
    let { groupListingId: t } = e;
    m.delete(t);
}
function x(e) {
    let { planId: t } = e;
    g.add(t);
}
function G(e) {
    let { groupListing: t } = e;
    C(t);
}
function k(e) {
    let { listing: t, groupListing: n } = e;
    y(t), C(n);
}
function B(e) {
    let { listing: t } = e;
    y(t);
}
function F(e) {
    let { listingId: t } = e;
    return I.delete(t);
}
function Z(e) {
    let { subscriptionTrial: t } = e;
    A[t.id] = t;
}
function V(e) {
    let { guildId: t } = e;
    N[t] = 1;
}
function H(e) {
    let { guildId: t, restrictions: n } = e;
    (v[t] = n), (N[t] = 2);
}
function Y(e) {
    let { guildId: t } = e;
    (N[t] = 2), (v[t] = d.m);
}
function j(e) {
    let { guildId: t } = e;
    N[t] = 0;
}
let W = [];
class K extends (i = l.ZP.Store) {
    getSubscriptionGroupListingsForGuildFetchState(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return g.has(e);
    }
    getSubscriptionGroupListing(e) {
        return m.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return R(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = m.values(f(e));
        return s()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return I.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var t;
        let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
        return null != n ? I.values(h(n)) : W;
    }
    getSubscriptionListingForPlan(e) {
        let t = I.values(p(e));
        return s()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getSubscriptionSettings(e) {
        return S[e];
    }
    getSubscriptionTrial(e) {
        return A[e];
    }
    getMonetizationRestrictions(e) {
        return v[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var t;
        return null !== (t = N[e]) && void 0 !== t ? t : 0;
    }
    getApplicationIdForGuild(e) {
        return O.get(e);
    }
}
_(K, 'displayName', 'GuildRoleSubscriptionsStore'),
    (t.Z = new K(c.Z, {
        CONNECTION_OPEN: L,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: b,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: D,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: M,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: P,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: U,
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: w,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: x,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: G,
        GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: k,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: B,
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: F,
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: Z,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: V,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: H,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: Y,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: j
    }));
