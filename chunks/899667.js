a(47120);
var n,
    o,
    r,
    c,
    i = a(442837),
    s = a(570140);
let l = {},
    d = null,
    p = [],
    f = !1,
    u = !1,
    _ = null,
    g = null;
function b() {
    u = !0;
}
class m extends (n = i.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != l[e] ? l[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != l[e] ? l[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return p;
    }
    getAppliedGuildBoost(e) {
        return p.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return u;
    }
    get applyBoostError() {
        return _;
    }
    get unapplyBoostError() {
        return g;
    }
    get cooldownEndsAt() {
        return d;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return f;
    }
}
(c = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (o = m)
        ? Object.defineProperty(o, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = c),
    (t.Z = new m(s.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: a } = e;
            l[t] = {
                subscriptions: a,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (f = !1), (p = t);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            d = t;
        },
        GUILD_UNAPPLY_BOOST_START: b,
        GUILD_APPLY_BOOST_START: b,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
                a = new Set(t.map((e) => e.id));
            (p = [...t, ...p.filter((e) => !a.has(e.id))]), (_ = null), (u = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (u = !1), (_ = t);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (p = p.filter((e) => e.id !== t)), (u = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (u = !1), (g = t);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            f = !0;
        }
    }));
