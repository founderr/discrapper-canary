t(47120);
var n,
    a,
    r,
    o,
    i = t(442837),
    c = t(570140);
let l = {},
    u = null,
    d = [],
    f = !1,
    p = !1,
    _ = null,
    g = null;
function T() {
    p = !0;
}
class x extends (n = i.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != l[e] ? l[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != l[e] ? l[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return d;
    }
    getAppliedGuildBoost(e) {
        return d.find((s) => s.id === e);
    }
    get isModifyingAppliedBoost() {
        return p;
    }
    get applyBoostError() {
        return _;
    }
    get unapplyBoostError() {
        return g;
    }
    get cooldownEndsAt() {
        return u;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return f;
    }
}
(o = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (a = x)
        ? Object.defineProperty(a, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = o),
    (s.Z = new x(c.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: s, appliedBoosts: t } = e;
            l[s] = {
                subscriptions: t,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: s } = e;
            (f = !1), (d = s);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: s } = e;
            u = s;
        },
        GUILD_UNAPPLY_BOOST_START: T,
        GUILD_APPLY_BOOST_START: T,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: s } = e,
                t = new Set(s.map((e) => e.id));
            (d = [...s, ...d.filter((e) => !t.has(e.id))]), (_ = null), (p = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (_ = s);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: s } = e;
            (d = d.filter((e) => e.id !== s)), (p = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (g = s);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            f = !0;
        }
    }));
