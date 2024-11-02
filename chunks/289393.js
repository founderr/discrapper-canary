n.d(t, {
    M: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(512722),
    c = n.n(u),
    d = n(442837),
    f = n(759174),
    _ = n(570140),
    h = n(308636);
function p(e) {
    return 'guild:'.concat(e);
}
function m(e) {
    return 'subscription_listing:'.concat(e);
}
function g(e) {
    return 'application:'.concat(e);
}
function E(e) {
    return 'plan:'.concat(e);
}
((a = r || (r = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED');
let v = new f.h(
        (e) => [p(e.guild_id), ...e.subscription_listings_ids.map(m)],
        (e) => e.id
    ),
    I = new f.h(
        (e) => [g(e.application_id), E(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    S = {},
    T = new Set(),
    b = {},
    y = {},
    A = {},
    N = {},
    C = new Map();
function R(e) {
    return v.values(p(e));
}
function O(e) {
    var t;
    for (let n of (v.set(e.id, e), C.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) D(n);
}
function D(e) {
    I.set(e.id, e);
}
let L = [];
class x extends (i = d.ZP.Store) {
    getSubscriptionGroupListingsForGuildFetchState(e) {
        var t;
        return null !== (t = S[e]) && void 0 !== t ? t : 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return T.has(e);
    }
    getSubscriptionGroupListing(e) {
        return v.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return R(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = v.values(m(e));
        return c()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return I.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var t;
        let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
        return null != n ? I.values(g(n)) : L;
    }
    getSubscriptionListingForPlan(e) {
        let t = I.values(E(e));
        return c()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getSubscriptionSettings(e) {
        return b[e];
    }
    getSubscriptionTrial(e) {
        return y[e];
    }
    getMonetizationRestrictions(e) {
        return A[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var t;
        return null !== (t = N[e]) && void 0 !== t ? t : 0;
    }
    getApplicationIdForGuild(e) {
        return C.get(e);
    }
}
(l = 'GuildRoleSubscriptionsStore'),
    (o = 'displayName') in (s = x)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new x(_.Z, {
        CONNECTION_OPEN: function () {
            v.clear(), I.clear(), (S = {}), T.clear(), (b = {}), (y = {}), (A = {}), (N = {}), C.clear();
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function (e) {
            let { settings: t } = e;
            b[t.guild_id] = t;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { guildId: t } = e;
            for (let e of ((S[t] = 1), R(t))) for (let t of (v.delete(e.id), e.subscription_listings_ids)) I.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
            for (let e of ((S[t] = 2), n)) O(e);
            for (let e of ((b[t] = r), i)) y[e.id] = e;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { guildId: t } = e;
            S[t] = 2;
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function (e) {
            let { listing: t } = e;
            O(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function (e) {
            let { groupListingId: t } = e;
            v.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function (e) {
            let { planId: t } = e;
            T.add(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: t } = e;
            O(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function (e) {
            let { listing: t, groupListing: n } = e;
            D(t), O(n);
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function (e) {
            let { listing: t } = e;
            D(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function (e) {
            let { listingId: t } = e;
            return I.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function (e) {
            let { subscriptionTrial: t } = e;
            y[t.id] = t;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function (e) {
            let { guildId: t } = e;
            N[t] = 1;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
            let { guildId: t, restrictions: n } = e;
            (A[t] = n), (N[t] = 2);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
            let { guildId: t } = e;
            (N[t] = 2), (A[t] = h.m);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function (e) {
            let { guildId: t } = e;
            N[t] = 0;
        }
    }));
