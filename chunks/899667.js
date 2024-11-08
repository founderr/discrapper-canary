s(47120);
var n,
    r,
    i,
    o,
    a = s(442837),
    l = s(570140);
let c = {},
    d = null,
    u = [],
    p = !1,
    f = !1,
    x = null,
    C = null;
function g() {
    f = !0;
}
class h extends (n = a.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != c[e] ? c[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != c[e] ? c[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return u;
    }
    getAppliedGuildBoost(e) {
        return u.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return f;
    }
    get applyBoostError() {
        return x;
    }
    get unapplyBoostError() {
        return C;
    }
    get cooldownEndsAt() {
        return d;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return p;
    }
}
(o = 'AppliedGuildBoostStore'),
    (i = 'displayName') in (r = h)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (t.Z = new h(l.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: s } = e;
            c[t] = {
                subscriptions: s,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (p = !1), (u = t);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            d = t;
        },
        GUILD_UNAPPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
                s = new Set(t.map((e) => e.id));
            (u = [...t, ...u.filter((e) => !s.has(e.id))]), (x = null), (f = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (x = t);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (u = u.filter((e) => e.id !== t)), (f = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (C = t);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            p = !0;
        }
    }));
