n(47120);
var a,
    o,
    r,
    i,
    c = n(442837),
    l = n(570140);
let d = {},
    _ = null,
    s = [],
    p = !1,
    f = !1,
    u = null,
    m = null;
function g() {
    f = !0;
}
class S extends (a = c.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != d[e] ? d[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != d[e] ? d[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return s;
    }
    getAppliedGuildBoost(e) {
        return s.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return f;
    }
    get applyBoostError() {
        return u;
    }
    get unapplyBoostError() {
        return m;
    }
    get cooldownEndsAt() {
        return _;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return p;
    }
}
(i = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (o = S)
        ? Object.defineProperty(o, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = i),
    (t.Z = new S(l.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: n } = e;
            d[t] = {
                subscriptions: n,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (p = !1), (s = t);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            _ = t;
        },
        GUILD_UNAPPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
                n = new Set(t.map((e) => e.id));
            (s = [...t, ...s.filter((e) => !n.has(e.id))]), (u = null), (f = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (u = t);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (s = s.filter((e) => e.id !== t)), (f = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (m = t);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            p = !0;
        }
    }));
