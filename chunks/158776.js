n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(122810),
    p = n(106301),
    h = n(709054),
    m = n(314897),
    g = n(594174),
    E = n(981631);
let v = Object.freeze([]),
    I = {},
    T = {},
    b = {},
    S = {},
    y = {};
function A(e, t) {
    let n = I[e];
    return null != n ? n[t] : null;
}
let N = (e) => {
        switch (e.type) {
            case E.IIU.CUSTOM_STATUS:
                return 4;
            case E.IIU.COMPETING:
                return 3;
            case E.IIU.STREAMING:
                return 2;
            case E.IIU.PLAYING:
                return 1;
            default:
                return 0;
        }
    },
    C = (e) => ((0, _.Z)(e) ? 1 : 0);
function R(e, t) {
    var n, r, i, a, s;
    return (n = e), N(t) - N(n) || ((r = e), C(t) - C(r)) || ((i = e), (null !== (a = t.created_at) && void 0 !== a ? a : 0) - (null !== (s = i.created_at) && void 0 !== s ? s : 0));
}
function O(e) {
    if ((delete T[e], delete b[e], delete S[e], null == I[e])) return;
    let [t] = c().sortBy(I[e], (e) => -e.timestamp);
    t.status !== E.Skl.OFFLINE ? ((T[e] = t.status), (b[e] = t.activities), null != t.clientStatus && (S[e] = t.clientStatus)) : c().every(I[e], (e) => e.status === E.Skl.OFFLINE) && delete I[e];
}
function D(e) {
    let t = I[e];
    if (null == t) return;
    let n = c().maxBy(Object.values(t), (e) => e.timestamp);
    n.status !== E.Skl.OFFLINE && ((T[e] = n.status), (b[e] = n.activities), null != n.clientStatus && (S[e] = n.clientStatus));
}
function L(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a } = e;
    if (n === m.default.getId()) return !1;
    let s = I[n];
    if (null == s) {
        if (r === E.Skl.OFFLINE) return !1;
        s = I[n] = {};
    }
    if (r === E.Skl.OFFLINE)
        s[t] = {
            status: r,
            clientStatus: i,
            activities: v,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(R) : a,
            n = s[t];
        (a = null != n && l()(n.activities, e) ? n.activities : e),
            (s[t] = {
                status: r,
                clientStatus: i,
                activities: a,
                timestamp: Date.now()
            });
    }
    return delete y[n], O(n), !0;
}
function x(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, timestamp: s } = e;
    if (n === m.default.getId()) return;
    let o = I[n];
    if (null == o) {
        if (r === E.Skl.OFFLINE) return;
        o = I[n] = {};
    }
    if (r === E.Skl.OFFLINE)
        o[t] = {
            status: r,
            clientStatus: i,
            activities: v,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(R) : a;
        o[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            timestamp: s
        };
    }
}
function w(e, t) {
    if (t === m.default.getId()) return !1;
    let n = I[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete I[t], O(t);
}
function P(e) {
    for (let t of h.default.keys(I)) w(e, t);
}
class M extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(m.default, p.Z);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (T[m.default.getId()] = e), (b[m.default.getId()] = t);
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Skl.OFFLINE,
            a = g.default.getUser(e);
        if ((null != a && a.hasFlag(E.xW$.BOT_HTTP_INTERACTIONS) && (i = E.Skl.UNKNOWN), null == a ? void 0 : a.isClyde())) return E.Skl.ONLINE;
        if (null == r) return null !== (t = T[e]) && void 0 !== t ? t : i;
        let s = A(e, r);
        return null !== (n = null == s ? void 0 : s.status) && void 0 !== n ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null !== (n = b[e]) && void 0 !== n ? n : v;
        }
        let r = A(e, t);
        return null == r || null == r.activities ? v : r.activities;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== E.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of h.default.keys(b))
            for (let r of b[n])
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
        return y[e];
    }
    getUserIds() {
        return h.default.keys(b);
    }
    isMobileOnline(e) {
        let t = S[e];
        return null != t && t[E.X5t.MOBILE] === E.Skl.ONLINE && t[E.X5t.DESKTOP] !== E.Skl.ONLINE;
    }
    getClientStatus(e) {
        return S[e];
    }
    getState() {
        return {
            presencesForGuilds: I,
            statuses: T,
            activities: b,
            activityMetadata: y,
            clientStatuses: S
        };
    }
}
(s = 'PresenceStore'),
    (a = 'displayName') in (i = M)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new M(f.Z, {
        CONNECTION_OPEN: function () {
            return !0;
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
                r = m.default.getId();
            (I = {}), (y = {}), (T = { [r]: T[r] }), (b = { [r]: b[r] }), (S = { [r]: {} });
            let i = new Set(),
                a = Date.now();
            t.forEach((e) => {
                e.presences.forEach((t) => {
                    let { user: n, status: r, clientStatus: s, activities: o } = t;
                    x({
                        guildId: e.id,
                        userId: n.id,
                        status: r,
                        clientStatus: s,
                        activities: o,
                        timestamp: a
                    }),
                        i.add(n.id);
                });
            }),
                n.forEach((e) => {
                    let { user: t, status: n, clientStatus: r, activities: s } = e;
                    null != t &&
                        (x({
                            guildId: E.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: s,
                            timestamp: a
                        }),
                        i.add(t.id));
                }),
                i.delete(r),
                i.forEach(D);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { presences: t } = e;
            (I = t.presencesForGuilds), (T = t.statuses), (b = t.activities), (y = t.activityMetadata);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            t.presences.forEach((e) => {
                let { user: n, status: r, clientStatus: i, activities: a } = e;
                L({
                    guildId: t.id,
                    userId: n.id,
                    status: r,
                    clientStatus: i,
                    activities: a
                });
            });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            P(t.id);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e;
            return w(t, n.id);
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t
                .map((e) => {
                    let { guildId: t, user: n, status: r, clientStatus: i, activities: a } = e;
                    return L({
                        guildId: null != t ? t : E.ME,
                        userId: n.id,
                        status: r,
                        clientStatus: i,
                        activities: a
                    });
                })
                .some((e) => e);
        },
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e;
            P(E.ME),
                t.forEach((e) => {
                    let { user: t, status: n, clientStatus: r, activities: i } = e;
                    null != t &&
                        L({
                            guildId: E.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        });
                });
        },
        ACTIVITY_METADATA_UPDATE: function (e) {
            let { userId: t, metadata: n } = e;
            return (y[t] = n), !1;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            n.forEach((e) => {
                null != e.presence &&
                    L({
                        guildId: t,
                        userId: e.user_id,
                        status: e.presence.status,
                        clientStatus: e.presence.clientStatus,
                        activities: e.presence.activities
                    });
            });
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            null == n ||
                n.forEach((e) => {
                    null != e.presence &&
                        L({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        });
                });
        },
        SELF_PRESENCE_STORE_UPDATE: function (e) {
            let t = m.default.getId();
            if (T[t] === e.status && b[t] === e.activities) return !1;
            (T[t] = e.status), (b[t] = e.activities), delete y[t];
        }
    }));
