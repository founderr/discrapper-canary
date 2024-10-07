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
    _ = n(759174),
    E = n(570140),
    f = n(308636);
function h(e) {
    return 'guild:'.concat(e);
}
function p(e) {
    return 'subscription_listing:'.concat(e);
}
function I(e) {
    return 'application:'.concat(e);
}
function m(e) {
    return 'plan:'.concat(e);
}
((a = r || (r = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED');
let T = new _.h(
        (e) => [h(e.guild_id), ...e.subscription_listings_ids.map(p)],
        (e) => e.id
    ),
    S = new _.h(
        (e) => [I(e.application_id), m(e.subscription_plans[0].id)],
        (e) => e.id
    ),
    g = {},
    A = new Set(),
    N = {},
    O = {},
    R = {},
    v = {},
    C = new Map();
function L(e) {
    return T.values(h(e));
}
function y(e) {
    var t;
    for (let n of (T.set(e.id, e), C.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) D(n);
}
function D(e) {
    S.set(e.id, e);
}
let b = [];
class M extends (i = d.ZP.Store) {
    getSubscriptionGroupListingsForGuildFetchState(e) {
        var t;
        return null !== (t = g[e]) && void 0 !== t ? t : 0;
    }
    getDidFetchListingForSubscriptionPlanId(e) {
        return A.has(e);
    }
    getSubscriptionGroupListing(e) {
        return T.get(e);
    }
    getSubscriptionGroupListingsForGuild(e) {
        return L(e);
    }
    getSubscriptionGroupListingForSubscriptionListing(e) {
        let t = T.values(p(e));
        return c()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
    }
    getSubscriptionListing(e) {
        return S.get(e);
    }
    getSubscriptionListingsForGuild(e) {
        var t;
        let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
        return null != n ? S.values(I(n)) : b;
    }
    getSubscriptionListingForPlan(e) {
        let t = S.values(m(e));
        return c()(t.length <= 1, 'Found multiple listings for plan'), t[0];
    }
    getSubscriptionSettings(e) {
        return N[e];
    }
    getSubscriptionTrial(e) {
        return O[e];
    }
    getMonetizationRestrictions(e) {
        return R[e];
    }
    getMonetizationRestrictionsFetchState(e) {
        var t;
        return null !== (t = v[e]) && void 0 !== t ? t : 0;
    }
    getApplicationIdForGuild(e) {
        return C.get(e);
    }
}
(l = 'GuildRoleSubscriptionsStore'),
    (o = 'displayName') in (s = M)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new M(E.Z, {
        CONNECTION_OPEN: function () {
            T.clear(), S.clear(), (g = {}), A.clear(), (N = {}), (O = {}), (R = {}), (v = {}), C.clear();
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function (e) {
            let { settings: t } = e;
            N[t.guild_id] = t;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { guildId: t } = e;
            for (let e of ((g[t] = 1), L(t))) for (let t of (T.delete(e.id), e.subscription_listings_ids)) S.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
            for (let e of ((g[t] = 2), n)) y(e);
            for (let e of ((N[t] = r), i)) O[e.id] = e;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { guildId: t } = e;
            g[t] = 2;
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function (e) {
            let { listing: t } = e;
            y(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function (e) {
            let { groupListingId: t } = e;
            T.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function (e) {
            let { planId: t } = e;
            A.add(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
            let { groupListing: t } = e;
            y(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function (e) {
            let { listing: t, groupListing: n } = e;
            D(t), y(n);
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function (e) {
            let { listing: t } = e;
            D(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function (e) {
            let { listingId: t } = e;
            return S.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function (e) {
            let { subscriptionTrial: t } = e;
            O[t.id] = t;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function (e) {
            let { guildId: t } = e;
            v[t] = 1;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
            let { guildId: t, restrictions: n } = e;
            (R[t] = n), (v[t] = 2);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
            let { guildId: t } = e;
            (v[t] = 2), (R[t] = f.m);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function (e) {
            let { guildId: t } = e;
            v[t] = 0;
        }
    }));
