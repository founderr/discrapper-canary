n(47120);
var i,
    a,
    s,
    l,
    r = n(392711),
    o = n.n(r),
    c = n(442837),
    d = n(570140),
    u = n(314897),
    _ = n(699516),
    E = n(885110),
    I = n(981631);
let m = {},
    T = {};
function N(e, t) {
    var n;
    return (null !== (n = m[e]) && void 0 !== n ? n : {})[t];
}
function h(e, t) {
    let n = N(e, t);
    if (null == n) return;
    let i = m[e];
    delete i[t], o().isEmpty(i) && delete m[e];
    let a = T[n];
    null != a && (a.delete(e), 0 === a.size && delete T[n]);
}
function C(e, t, n, i) {
    let a = n.find((e) => null != e.party && e.party.id),
        s = null != a && null != a.party ? a.party.id : null,
        l = N(t, e);
    if (null == s || i === I.Skl.OFFLINE) return null != l && (h(t, e), void 0);
    if (null != l) {
        if (l === s) return !1;
        h(t, e);
    }
    !(function (e, t, n) {
        var i;
        let a = m[e];
        if ((null == a && (a = m[e] = {}), (a[t] = n), _.Z.isBlocked(e))) return;
        let s = null !== (i = T[n]) && void 0 !== i ? i : new Set();
        (T[n] = s), s.add(e);
    })(t, e, s);
}
function f(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: i, activities: a } of t.presences) !1 !== C(t.id, e.id, a, i) && (n = !0);
    return n;
}
function p(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && C(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function g() {
    let e = u.default.getId(),
        t = E.Z.getActivities();
    return C(I.ME, e, t);
}
class A extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([E.Z], g), this.waitFor(E.Z, _.Z);
    }
    getParty(e) {
        return null != e && null != T[e] ? T[e] : null;
    }
    getUserParties() {
        return m;
    }
    getParties() {
        return T;
    }
}
(l = 'GamePartyStore'),
    (s = 'displayName') in (a = A)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new A(d.Z, {
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
                i = !1;
            for (let { user: e, status: t, activities: a } of n) null != e && !1 !== C(I.ME, e.id, a, t) && (i = !0);
            for (let e of t) !1 !== f({ guild: e }) && (i = !0);
            return i;
        },
        OVERLAY_INITIALIZE: function (e) {
            let { parties: t, userParties: n } = e;
            (T = {}), (m = { ...n }), Object.keys(t).forEach((e) => (T[e] = new Set(t[e])));
        },
        GUILD_CREATE: f,
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e,
                n = !1;
            for (let { user: e, activities: i } of t) null != e && !1 !== C(I.ME, e.id, i) && (n = !0);
            return n;
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t
                .map((e) => {
                    let { guildId: t, user: n, status: i, activities: a } = e;
                    return C(null != t ? t : I.ME, n.id, a, i);
                })
                .some((e) => e);
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            return p(
                t,
                n.map((e) => e.presence)
            );
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            return (
                null != n &&
                p(
                    t,
                    n.map((e) => e.presence)
                )
            );
        },
        RELATIONSHIP_ADD: function (e) {
            let { relationship: t } = e;
            if (!_.Z.isBlocked(t.id)) return !1;
            let n = m[t.id];
            if (null == n) return !1;
            for (let e of o().values(n)) {
                let n = T[e];
                null != n && n.delete(t.id);
            }
        },
        RELATIONSHIP_REMOVE: function (e) {
            let { relationship: t } = e,
                n = m[t.id];
            if (null == n) return !1;
            for (let e of o().values(n)) {
                let n = T[e];
                null != n && n.add(t.id);
            }
        }
    }));
