n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(131704),
    f = n(592125),
    _ = n(430824),
    p = n(306680),
    h = n(944486),
    m = n(709054),
    g = n(344185),
    E = n(569471),
    v = n(819168),
    I = n(176505);
let b = {},
    S = {},
    T = {},
    y = {},
    A = {},
    N = {},
    C = null,
    R = {};
function O() {
    for (let e in ((b = {}), (A = {}), (S = {}), (T = {}), (y = {}), (C = h.Z.getChannelId()), R)) clearTimeout(R[e]);
    (R = {}),
        g.Z.forEachGuild((e) => {
            L(e);
        }),
        x();
}
function D(e) {
    for (let t in (delete b[e], delete A[e], delete S[e], delete T[e], delete y[e], L(e), T[e])) M(e, t);
}
function L(e) {
    let t = g.Z.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            j(n);
            let e = f.Z.getChannel(n);
            if (null == e) continue;
            let t = E.Z.joinTimestamp(n);
            if (null != t) {
                let n = {
                        channel: e,
                        joinTimestamp: t.getTime()
                    },
                    { isUnread: r, isRelevant: i, isTimedRelevant: a } = F(e);
                H(b, e, n, !1), H(A, e, i ? n : null, !1), H(S, e, r ? n : null, !1), a && V(e, !0);
            } else {
                H(T, e, e, !1);
                let t = p.ZP.isForumPostUnread(e.id);
                H(y, e, t ? e : null, !1);
            }
        }
}
function x() {
    for (let e in ((N = {}), T)) for (let t in T[e]) M(e, t);
}
function w(e) {
    let t = f.Z.getBasicChannel(e);
    null != t && d.uC.has(t.type) && M(t.guild_id, t.id);
}
function M(e, t) {
    let n = f.Z.getChannel(t);
    if (null == n || !n.isForumLikeChannel()) return;
    if ((null == N[e] && (N[e] = {}), (N[e][t] = 0), null == T[e] || null == T[e][t])) return;
    let r = _.Z.getGuild(e);
    if (null == r) return;
    let i = p.ZP.getTrackedAckMessageId(t);
    if (null == i) {
        let e = Date.now();
        null != r.joinedAt && (r.joinedAt instanceof Date ? (e = r.joinedAt.getTime()) : 'string' == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())), (i = m.default.fromTimestamp(e));
    }
    for (let n in T[e][t]) t === C ? p.ZP.isNewForumThread(n, t, r) && N[e][t]++ : m.default.compare(n, i) > 0 && !p.ZP.hasOpenedThread(n) && N[e][t]++;
}
function P(e, t, n) {
    if (null == t) return !1;
    let r = f.Z.getChannel(n),
        i = E.Z.joinTimestamp(n);
    if (null != r && g.Z.isActive(e, t, n)) {
        if (null != i) {
            let e = {
                    channel: r,
                    joinTimestamp: i.getTime()
                },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = F(r);
            H(b, r, e, !0), H(A, r, n ? e : null, !0), H(S, r, t ? e : null, !0), H(T, r, null, !0), H(y, r, null, !0), V(r, a);
        } else {
            let e = p.ZP.isForumPostUnread(r.id);
            H(b, r, null, !0), H(S, r, null, !0), H(A, r, null, !0), H(T, r, r, !0), H(y, r, e ? r : null, !0), j(r.id);
        }
        M(e, t);
    } else Y(b, e, t, n), Y(A, e, t, n), Y(S, e, t, n), Y(T, e, t, n), Y(y, e, t, n), j(n), M(e, t);
}
function k(e) {
    return P(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function U(e) {
    let t = f.Z.getChannel(e.id);
    return !!(null != t && g.Z.isActive(e.guildId, t.parent_id, e.id)) && P(t.guild_id, t.parent_id, t.id);
}
function G(e) {
    let t = f.Z.getChannel(e.channelId);
    if (null == t) B();
    else {
        let { guild_id: e, parent_id: r } = t;
        if (!d.Ec.has(t.type)) {
            var n;
            return !!(Number(null === (n = N[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (M(e, t.id), !0);
        }
        if (null == r) return !1;
        if (W(b, t)) {
            let { isUnread: n, isRelevant: i, isTimedRelevant: a } = F(t);
            V(t, a);
            let s = W(S, t),
                o = W(A, t);
            if (n === s && i === o) return !1;
            let l = b[e][r][t.id],
                u = n ? l : null,
                c = i ? l : null;
            H(S, t, u, !0), H(A, t, c, !0), M(e, r);
        } else {
            let e = W(y, t),
                n = p.ZP.isForumPostUnread(t.id);
            if (n === e) return !1;
            H(y, t, n ? t : null, !0);
        }
    }
}
function B() {
    for (let e in ((S = {}), (A = {}), b))
        for (let t in b[e])
            for (let n in b[e][t]) {
                let r = b[e][t][n],
                    { isUnread: i, isRelevant: a, isTimedRelevant: s } = F(r.channel);
                i && H(S, r.channel, r, !1), a && H(A, r.channel, r, !1), V(r.channel, s);
            }
    for (let e in ((y = {}), T))
        for (let t in T[e])
            for (let n in T[e][t]) {
                let r = T[e][t][n];
                p.ZP.isForumPostUnread(n) && H(y, r, r, !1);
            }
    x();
}
function Z() {
    let e = C;
    if ((C = h.Z.getChannelId()) === e) return !1;
    w(e), w(C);
}
function F(e) {
    let t = p.ZP.getMentionCount(e.id) > 0,
        n = p.ZP.hasUnread(e.id) && !E.Z.isMuted(e.id),
        r = e.hasFlag(I.zZ.PINNED),
        i = e.isActiveThread(),
        a = i && (0, v.Z)(e) > Date.now();
    return {
        isUnread: ((i || r) && n) || t,
        isRelevant: a || r || n || t,
        isTimedRelevant: a
    };
}
function V(e, t) {
    j(e.id),
        t &&
            (function (e) {
                R[e.id] = setTimeout(
                    () => {
                        let t = f.Z.getChannel(e.id);
                        null != t &&
                            c.Z.dispatch({
                                type: 'THREAD_UPDATE',
                                channel: t
                            });
                    },
                    (0, v.Z)(e) - Date.now() + 1
                );
            })(e);
}
function j(e) {
    e in R && (clearTimeout(R[e]), delete R[e]);
}
function H(e, t, n, r) {
    let { guild_id: i, parent_id: a, id: s } = t;
    null != i &&
        null != a &&
        null != s &&
        (!(i in e) && (e[i] = {}),
        !(a in e[i]) && (e[i][a] = {}),
        r &&
            (e[i] = {
                ...e[i],
                [a]: { ...e[i][a] }
            }),
        null === n ? (delete e[i][a][s], l().isEmpty(e[i][a]) && delete e[i][a]) : (e[i][a][s] = n));
}
function Y(e, t, n, r) {
    if (null != t && null != n && null != r)
        K(e, t, n, r) &&
            ((e[t] = {
                ...e[t],
                [n]: { ...e[t][n] }
            }),
            delete e[t][n][r],
            l().isEmpty(e[t][n]) && delete e[t][n]);
}
function W(e, t) {
    return K(e, t.guild_id, t.parent_id, t.id);
}
function K(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let z = {},
    q = {},
    Q = {},
    X = {},
    J = {};
class $ extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.Z, E.Z, p.ZP), this.syncWith([h.Z], Z);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in S && t in S[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        var n;
        return e in T && null !== (n = T[e][t]) && void 0 !== n ? n : X;
    }
    getActiveJoinedThreadsForParent(e, t) {
        var n;
        return e in b && null !== (n = b[e][t]) && void 0 !== n ? n : Q;
    }
    getActiveJoinedThreadsForGuild(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : z;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        var t;
        return null !== (t = S[e]) && void 0 !== t ? t : z;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : Q;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        var t;
        return null !== (t = A[e]) && void 0 !== t ? t : z;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : Q;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : q;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        var t;
        return null !== (t = y[e]) && void 0 !== t ? t : z;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : Q;
    }
    getNewThreadCountsForGuild(e) {
        var t;
        return null !== (t = N[e]) && void 0 !== t ? t : J;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in b) if (n === e || null == e) for (let e in b[n]) for (let r in b[n][e]) t.push(b[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        var n, r;
        return null !== (r = null === (n = N[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0;
    }
    getActiveThreadCount(e, t) {
        var n, r, i, a;
        let s = l().size(null !== (i = null === (n = b[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : {});
        return s + l().size(null !== (a = null === (r = T[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {});
    }
}
(s = 'ActiveJoinedThreadsStore'),
    (a = 'displayName') in (i = $)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new $(c.Z, {
        CONNECTION_OPEN: O,
        OVERLAY_INITIALIZE: O,
        THREAD_LIST_SYNC: function (e) {
            let { guildId: t } = e;
            return D(t);
        },
        LOAD_THREADS_SUCCESS: O,
        LOAD_ARCHIVED_THREADS_SUCCESS: O,
        SEARCH_FINISH: O,
        MOD_VIEW_SEARCH_FINISH: O,
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return D(t.id);
        },
        GUILD_DELETE: O,
        CURRENT_USER_UPDATE: O,
        THREAD_CREATE: k,
        THREAD_UPDATE: k,
        THREAD_DELETE: k,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            for (let e of t)
                if (
                    e.isNSFW() !==
                    (function (e, t) {
                        if (null == t) return !1;
                        let n = b[e],
                            r = null == n ? null : n[t];
                        if (null != r) {
                            for (let e in r) if (r[e].channel.isNSFW()) return !0;
                        }
                        let i = T[e],
                            a = null == i ? null : i[t];
                        if (null != a) {
                            for (let e in a) if (a[e].isNSFW()) return !0;
                        }
                        return !1;
                    })(e.guild_id, e.parent_id)
                ) {
                    O();
                    return;
                }
            return !1;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e,
                n = !1;
            return null != t.guild_id && null != t.parent_id && (t.guild_id in b && t.parent_id in b[t.guild_id] && (delete b[t.guild_id][t.parent_id], (n = !0)), t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)), t.guild_id in A && t.parent_id in A[t.guild_id] && (m.default.keys(A[t.guild_id][t.parent_id]).forEach(j), delete A[t.guild_id][t.parent_id], (n = !0)), t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)), t.guild_id in y && t.parent_id in y[t.guild_id] && (delete y[t.guild_id][t.parent_id], (n = !0)), n && M(t.guild_id, t.parent_id)), n;
        },
        THREAD_MEMBER_UPDATE: U,
        THREAD_MEMBERS_UPDATE: U,
        LOAD_MESSAGES_SUCCESS: G,
        MESSAGE_CREATE: G,
        MESSAGE_DELETE: G,
        MESSAGE_DELETE_BULK: G,
        MESSAGE_ACK: G,
        CHANNEL_ACK: G,
        CHANNEL_LOCAL_ACK: G,
        CHANNEL_SELECT: function (e) {
            G(e), Z();
        },
        PASSIVE_UPDATE_V2: function (e) {
            if (e.channels.length > 0) return D(e.guildId);
        },
        WINDOW_FOCUS: B,
        UPDATE_CHANNEL_DIMENSIONS: B,
        DRAWER_OPEN: B,
        DRAWER_CLOSE: B,
        BULK_ACK: B
    }));
