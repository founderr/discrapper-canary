var r,
    i = n(47120);
var a = n(653041);
var o = n(348327),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(122810),
    E = n(106301),
    f = n(709054),
    h = n(314897),
    p = n(594174),
    m = n(981631);
function I(e, t, n) {
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
let T = Object.freeze([]),
    g = {},
    S = {},
    A = {},
    v = {},
    N = {};
function O(e, t) {
    let n = g[e];
    return null != n ? n[t] : null;
}
let R = (e) => {
    switch (e.type) {
        case m.IIU.CUSTOM_STATUS:
            return 4;
        case m.IIU.COMPETING:
            return 3;
        case m.IIU.STREAMING:
            return 2;
        case m.IIU.PLAYING:
            return 1;
        default:
            return 0;
    }
};
function C(e, t) {
    return R(t) - R(e);
}
let y = (e) => ((0, _.Z)(e) ? 1 : 0);
function L(e, t) {
    return y(t) - y(e);
}
function b(e, t) {
    var n, r;
    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0);
}
function D(e, t) {
    return C(e, t) || L(e, t) || b(e, t);
}
function M(e) {
    if ((delete S[e], delete A[e], delete v[e], null == g[e])) return;
    let [t] = u().sortBy(g[e], (e) => -e.timestamp);
    t.status !== m.Skl.OFFLINE ? ((S[e] = t.status), (A[e] = t.activities), null != t.clientStatus && (v[e] = t.clientStatus)) : u().every(g[e], (e) => e.status === m.Skl.OFFLINE) && delete g[e];
}
function P(e) {
    let t = g[e];
    if (null == t) return;
    let n = u().maxBy(Object.values(t), (e) => e.timestamp);
    n.status !== m.Skl.OFFLINE && ((S[e] = n.status), (A[e] = n.activities), null != n.clientStatus && (v[e] = n.clientStatus));
}
function U(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a } = e;
    if (n === h.default.getId()) return !1;
    let o = g[n];
    if (null == o) {
        if (r === m.Skl.OFFLINE) return !1;
        o = g[n] = {};
    }
    if (r === m.Skl.OFFLINE)
        o[t] = {
            status: r,
            clientStatus: i,
            activities: T,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(D) : a,
            n = o[t];
        (a = null != n && s()(n.activities, e) ? n.activities : e),
            (o[t] = {
                status: r,
                clientStatus: i,
                activities: a,
                timestamp: Date.now()
            });
    }
    return delete N[n], M(n), !0;
}
function w(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, timestamp: o } = e;
    if (n === h.default.getId()) return;
    let s = g[n];
    if (null == s) {
        if (r === m.Skl.OFFLINE) return;
        s = g[n] = {};
    }
    if (r === m.Skl.OFFLINE)
        s[t] = {
            status: r,
            clientStatus: i,
            activities: T,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(D) : a;
        s[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            timestamp: o
        };
    }
}
function x(e, t) {
    if (t === h.default.getId()) return !1;
    let n = g[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete g[t], M(t);
}
function G(e) {
    for (let t of f.default.keys(g)) x(e, t);
}
function k() {
    return !0;
}
function B(e) {
    let { guilds: t, presences: n } = e,
        r = h.default.getId();
    (g = {}), (N = {}), (S = { [r]: S[r] }), (A = { [r]: A[r] }), (v = { [r]: {} });
    let i = new Set(),
        a = Date.now();
    t.forEach((e) => {
        e.presences.forEach((t) => {
            let { user: n, status: r, clientStatus: o, activities: s } = t;
            w({
                guildId: e.id,
                userId: n.id,
                status: r,
                clientStatus: o,
                activities: s,
                timestamp: a
            }),
                i.add(n.id);
        });
    }),
        n.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: o } = e;
            null != t &&
                (w({
                    guildId: m.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: o,
                    timestamp: a
                }),
                i.add(t.id));
        }),
        i.delete(r),
        i.forEach(P);
}
function F(e) {
    let { presences: t } = e;
    (g = t.presencesForGuilds), (S = t.statuses), (A = t.activities), (N = t.activityMetadata);
}
function Z(e) {
    let { presences: t } = e;
    G(m.ME),
        t.forEach((e) => {
            let { user: t, status: n, clientStatus: r, activities: i } = e;
            null != t &&
                U({
                    guildId: m.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: i
                });
        });
}
function V(e) {
    let { guild: t } = e;
    t.presences.forEach((e) => {
        let { user: n, status: r, clientStatus: i, activities: a } = e;
        U({
            guildId: t.id,
            userId: n.id,
            status: r,
            clientStatus: i,
            activities: a
        });
    });
}
function H(e) {
    let { guild: t } = e;
    G(t.id);
}
function Y(e) {
    let { guildId: t, user: n } = e;
    return x(t, n.id);
}
function j(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, clientStatus: i, activities: a } = e;
            return U({
                guildId: null != t ? t : m.ME,
                userId: n.id,
                status: r,
                clientStatus: i,
                activities: a
            });
        })
        .some((e) => e);
}
function W(e) {
    let { guildId: t, members: n } = e;
    n.forEach((e) => {
        null != e.presence &&
            U({
                guildId: t,
                userId: e.user_id,
                status: e.presence.status,
                clientStatus: e.presence.clientStatus,
                activities: e.presence.activities
            });
    });
}
function K(e) {
    let { guildId: t, addedMembers: n } = e;
    null == n ||
        n.forEach((e) => {
            null != e.presence &&
                U({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                });
        });
}
function z(e) {
    let t = h.default.getId();
    if (S[t] === e.status && A[t] === e.activities) return !1;
    (S[t] = e.status), (A[t] = e.activities), delete N[t];
}
function q(e) {
    let { userId: t, metadata: n } = e;
    return (N[t] = n), !1;
}
class Q extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(h.default, E.Z);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (S[h.default.getId()] = e), (A[h.default.getId()] = t);
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Skl.OFFLINE,
            a = p.default.getUser(e);
        if ((null != a && a.hasFlag(m.xW$.BOT_HTTP_INTERACTIONS) && (i = m.Skl.UNKNOWN), null == a ? void 0 : a.isClyde())) return m.Skl.ONLINE;
        if (null == r) return null !== (t = S[e]) && void 0 !== t ? t : i;
        let o = O(e, r);
        return null !== (n = null == o ? void 0 : o.status) && void 0 !== n ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null !== (n = A[e]) && void 0 !== n ? n : T;
        }
        let r = O(e, t);
        return null == r || null == r.activities ? T : r.activities;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== m.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of f.default.keys(A))
            for (let r of A[n])
                r.application_id === e &&
                    t.push({
                        userId: n,
                        activity: r
                    });
        return t;
    }
    getApplicationActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.findActivity(e, (e) => e.application_id === t, n);
    }
    findActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.getActivities(e, n).find(t);
    }
    getActivityMetadata(e) {
        return N[e];
    }
    getUserIds() {
        return f.default.keys(A);
    }
    isMobileOnline(e) {
        let t = v[e];
        return null != t && t[m.X5t.MOBILE] === m.Skl.ONLINE && t[m.X5t.DESKTOP] !== m.Skl.ONLINE;
    }
    getClientStatus(e) {
        return v[e];
    }
    getState() {
        return {
            presencesForGuilds: g,
            statuses: S,
            activities: A,
            activityMetadata: N,
            clientStatuses: v
        };
    }
}
I(Q, 'displayName', 'PresenceStore'),
    (t.Z = new Q(d.Z, {
        CONNECTION_OPEN: k,
        CONNECTION_OPEN_SUPPLEMENTAL: B,
        OVERLAY_INITIALIZE: F,
        GUILD_CREATE: V,
        GUILD_DELETE: H,
        GUILD_MEMBER_REMOVE: Y,
        PRESENCE_UPDATES: j,
        PRESENCES_REPLACE: Z,
        ACTIVITY_METADATA_UPDATE: q,
        THREAD_MEMBER_LIST_UPDATE: W,
        THREAD_MEMBERS_UPDATE: K,
        SELF_PRESENCE_STORE_UPDATE: z
    }));
