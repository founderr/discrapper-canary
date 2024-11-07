t(47120);
var n,
    o,
    r,
    a,
    i = t(442837),
    c = t(570140);
let l = {},
    u = null,
    f = [],
    d = !1,
    p = !1,
    x = null,
    g = null;
function v() {
    p = !0;
}
class b extends (n = i.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != l[e] ? l[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != l[e] ? l[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return f;
    }
    getAppliedGuildBoost(e) {
        return f.find((s) => s.id === e);
    }
    get isModifyingAppliedBoost() {
        return p;
    }
    get applyBoostError() {
        return x;
    }
    get unapplyBoostError() {
        return g;
    }
    get cooldownEndsAt() {
        return u;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return d;
    }
}
(a = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (o = b)
        ? Object.defineProperty(o, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = a),
    (s.Z = new b(c.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: s, appliedBoosts: t } = e;
            l[s] = {
                subscriptions: t,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: s } = e;
            (d = !1), (f = s);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: s } = e;
            u = s;
        },
        GUILD_UNAPPLY_BOOST_START: v,
        GUILD_APPLY_BOOST_START: v,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: s } = e,
                t = new Set(s.map((e) => e.id));
            (f = [...s, ...f.filter((e) => !t.has(e.id))]), (x = null), (p = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (x = s);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: s } = e;
            (f = f.filter((e) => e.id !== s)), (p = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (g = s);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            d = !0;
        }
    }));
