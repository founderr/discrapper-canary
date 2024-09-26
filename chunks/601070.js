var r,
    i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(131704),
    d = n(592125),
    _ = n(430824),
    E = n(306680),
    f = n(944486),
    h = n(709054),
    p = n(344185),
    m = n(569471),
    I = n(819168),
    T = n(176505);
function g(e, t, n) {
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
let S = {},
    A = {},
    v = {},
    N = {},
    O = {},
    R = {},
    C = null,
    y = {};
function L() {
    for (let e in ((S = {}), (O = {}), (A = {}), (v = {}), (N = {}), (C = f.Z.getChannelId()), y)) clearTimeout(y[e]);
    (y = {}),
        p.Z.forEachGuild((e) => {
            D(e);
        }),
        M();
}
function b(e) {
    for (let t in (delete S[e], delete O[e], delete A[e], delete v[e], delete N[e], D(e), v[e])) U(e, t);
}
function D(e) {
    let t = p.Z.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            X(n);
            let e = d.Z.getChannel(n);
            if (null == e) continue;
            let t = m.Z.joinTimestamp(n);
            if (null != t) {
                let n = {
                        channel: e,
                        joinTimestamp: t.getTime()
                    },
                    { isUnread: r, isRelevant: i, isTimedRelevant: a } = z(e);
                $(S, e, n, !1), $(O, e, i ? n : null, !1), $(A, e, r ? n : null, !1), a && q(e, !0);
            } else {
                $(v, e, e, !1);
                let t = E.ZP.isForumPostUnread(e.id);
                $(N, e, t ? e : null, !1);
            }
        }
}
function M() {
    for (let e in ((R = {}), v)) for (let t in v[e]) U(e, t);
}
function P(e) {
    let t = d.Z.getBasicChannel(e);
    null != t && c.uC.has(t.type) && U(t.guild_id, t.id);
}
function U(e, t) {
    let n = d.Z.getChannel(t);
    if (null == n || !n.isForumLikeChannel()) return;
    if ((null == R[e] && (R[e] = {}), (R[e][t] = 0), null == v[e] || null == v[e][t])) return;
    let r = _.Z.getGuild(e);
    if (null == r) return;
    let i = E.ZP.getTrackedAckMessageId(t);
    if (null == i) {
        let e = Date.now();
        null != r.joinedAt && (r.joinedAt instanceof Date ? (e = r.joinedAt.getTime()) : 'string' == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())), (i = h.default.fromTimestamp(e));
    }
    for (let n in v[e][t]) t === C ? E.ZP.isNewForumThread(n, t, r) && R[e][t]++ : h.default.compare(n, i) > 0 && !E.ZP.hasOpenedThread(n) && R[e][t]++;
}
function w(e, t, n) {
    if (null == t) return !1;
    let r = d.Z.getChannel(n),
        i = m.Z.joinTimestamp(n);
    if (null != r && p.Z.isActive(e, t, n)) {
        if (null != i) {
            let e = {
                    channel: r,
                    joinTimestamp: i.getTime()
                },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = z(r);
            $(S, r, e, !0), $(O, r, n ? e : null, !0), $(A, r, t ? e : null, !0), $(v, r, null, !0), $(N, r, null, !0), q(r, a);
        } else {
            let e = E.ZP.isForumPostUnread(r.id);
            $(S, r, null, !0), $(A, r, null, !0), $(O, r, null, !0), $(v, r, r, !0), $(N, r, e ? r : null, !0), X(r.id);
        }
        U(e, t);
    } else J(S, e, t, n), J(O, e, t, n), J(A, e, t, n), J(v, e, t, n), J(N, e, t, n), X(n), U(e, t);
}
function x(e) {
    return w(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function G(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isNSFW() !== k(e.guild_id, e.parent_id)) {
            L();
            return;
        }
    return !1;
}
function k(e, t) {
    if (null == t) return !1;
    let n = S[e],
        r = null == n ? null : n[t];
    if (null != r) {
        for (let e in r) if (r[e].channel.isNSFW()) return !0;
    }
    let i = v[e],
        a = null == i ? null : i[t];
    if (null != a) {
        for (let e in a) if (a[e].isNSFW()) return !0;
    }
    return !1;
}
function B(e) {
    let { channel: t } = e,
        n = !1;
    return null != t.guild_id && null != t.parent_id && (t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)), t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)), t.guild_id in O && t.parent_id in O[t.guild_id] && (h.default.keys(O[t.guild_id][t.parent_id]).forEach(X), delete O[t.guild_id][t.parent_id], (n = !0)), t.guild_id in v && t.parent_id in v[t.guild_id] && (delete v[t.guild_id][t.parent_id], (n = !0)), t.guild_id in N && t.parent_id in N[t.guild_id] && (delete N[t.guild_id][t.parent_id], (n = !0)), n && U(t.guild_id, t.parent_id)), n;
}
function F(e) {
    let t = d.Z.getChannel(e.id);
    return !!(null != t && p.Z.isActive(e.guildId, t.parent_id, e.id)) && w(t.guild_id, t.parent_id, t.id);
}
function Z(e) {
    let t = d.Z.getChannel(e.channelId);
    if (null == t) V();
    else {
        let { guild_id: e, parent_id: r } = t;
        if (!c.Ec.has(t.type)) {
            var n;
            return !!(Number(null === (n = R[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (U(e, t.id), !0);
        }
        if (null == r) return !1;
        if (ee(S, t)) {
            let { isUnread: n, isRelevant: i, isTimedRelevant: a } = z(t);
            q(t, a);
            let o = ee(A, t),
                s = ee(O, t);
            if (n === o && i === s) return !1;
            let l = S[e][r][t.id],
                u = n ? l : null,
                c = i ? l : null;
            $(A, t, u, !0), $(O, t, c, !0), U(e, r);
        } else {
            let e = ee(N, t),
                n = E.ZP.isForumPostUnread(t.id);
            if (n === e) return !1;
            $(N, t, n ? t : null, !0);
        }
    }
}
function V() {
    for (let e in ((A = {}), (O = {}), S))
        for (let t in S[e])
            for (let n in S[e][t]) {
                let r = S[e][t][n],
                    { isUnread: i, isRelevant: a, isTimedRelevant: o } = z(r.channel);
                i && $(A, r.channel, r, !1), a && $(O, r.channel, r, !1), q(r.channel, o);
            }
    for (let e in ((N = {}), v))
        for (let t in v[e])
            for (let n in v[e][t]) {
                let r = v[e][t][n];
                E.ZP.isForumPostUnread(n) && $(N, r, r, !1);
            }
    M();
}
function H(e) {
    if (e.channels.length > 0) return b(e.guildId);
}
function Y(e) {
    let { guild: t } = e;
    return b(t.id);
}
function j(e) {
    let { guildId: t } = e;
    return b(t);
}
function W(e) {
    Z(e), K();
}
function K() {
    let e = C;
    if ((C = f.Z.getChannelId()) === e) return !1;
    P(e), P(C);
}
function z(e) {
    let t = E.ZP.getMentionCount(e.id) > 0,
        n = E.ZP.hasUnread(e.id) && !m.Z.isMuted(e.id),
        r = e.hasFlag(T.zZ.PINNED),
        i = e.isActiveThread(),
        a = i && (0, I.Z)(e) > Date.now();
    return {
        isUnread: ((i || r) && n) || t,
        isRelevant: a || r || n || t,
        isTimedRelevant: a
    };
}
function q(e, t) {
    X(e.id), t && Q(e);
}
function Q(e) {
    y[e.id] = setTimeout(
        () => {
            let t = d.Z.getChannel(e.id);
            null != t &&
                u.Z.dispatch({
                    type: 'THREAD_UPDATE',
                    channel: t
                });
        },
        (0, I.Z)(e) - Date.now() + 1
    );
}
function X(e) {
    e in y && (clearTimeout(y[e]), delete y[e]);
}
function $(e, t, n, r) {
    let { guild_id: i, parent_id: a, id: o } = t;
    null != i &&
        null != a &&
        null != o &&
        (!(i in e) && (e[i] = {}),
        !(a in e[i]) && (e[i][a] = {}),
        r &&
            (e[i] = {
                ...e[i],
                [a]: { ...e[i][a] }
            }),
        null === n ? (delete e[i][a][o], s().isEmpty(e[i][a]) && delete e[i][a]) : (e[i][a][o] = n));
}
function J(e, t, n, r) {
    if (null != t && null != n && null != r)
        et(e, t, n, r) &&
            ((e[t] = {
                ...e[t],
                [n]: { ...e[t][n] }
            }),
            delete e[t][n][r],
            s().isEmpty(e[t][n]) && delete e[t][n]);
}
function ee(e, t) {
    return et(e, t.guild_id, t.parent_id, t.id);
}
function et(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let en = {},
    er = {},
    ei = {},
    ea = {},
    eo = {};
class es extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, d.Z, m.Z, E.ZP), this.syncWith([f.Z], K);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in A && t in A[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        var n;
        return e in v && null !== (n = v[e][t]) && void 0 !== n ? n : ea;
    }
    getActiveJoinedThreadsForParent(e, t) {
        var n;
        return e in S && null !== (n = S[e][t]) && void 0 !== n ? n : ei;
    }
    getActiveJoinedThreadsForGuild(e) {
        var t;
        return null !== (t = S[e]) && void 0 !== t ? t : en;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        var t;
        return null !== (t = A[e]) && void 0 !== t ? t : en;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ei;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        var t;
        return null !== (t = O[e]) && void 0 !== t ? t : en;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ei;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        var t;
        return null !== (t = v[e]) && void 0 !== t ? t : er;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        var t;
        return null !== (t = N[e]) && void 0 !== t ? t : en;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ei;
    }
    getNewThreadCountsForGuild(e) {
        var t;
        return null !== (t = R[e]) && void 0 !== t ? t : eo;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in S) if (n === e || null == e) for (let e in S[n]) for (let r in S[n][e]) t.push(S[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        var n, r;
        return null !== (r = null === (n = R[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0;
    }
    getActiveThreadCount(e, t) {
        var n, r, i, a;
        let o = s().size(null !== (i = null === (n = S[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : {});
        return o + s().size(null !== (a = null === (r = v[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {});
    }
}
g(es, 'displayName', 'ActiveJoinedThreadsStore'),
    (t.Z = new es(u.Z, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: L,
        THREAD_LIST_SYNC: j,
        LOAD_THREADS_SUCCESS: L,
        LOAD_ARCHIVED_THREADS_SUCCESS: L,
        SEARCH_FINISH: L,
        MOD_VIEW_SEARCH_FINISH: L,
        GUILD_CREATE: Y,
        GUILD_DELETE: L,
        CURRENT_USER_UPDATE: L,
        THREAD_CREATE: x,
        THREAD_UPDATE: x,
        THREAD_DELETE: x,
        CHANNEL_UPDATES: G,
        CHANNEL_DELETE: B,
        THREAD_MEMBER_UPDATE: F,
        THREAD_MEMBERS_UPDATE: F,
        LOAD_MESSAGES_SUCCESS: Z,
        MESSAGE_CREATE: Z,
        MESSAGE_DELETE: Z,
        MESSAGE_DELETE_BULK: Z,
        MESSAGE_ACK: Z,
        CHANNEL_ACK: Z,
        CHANNEL_LOCAL_ACK: Z,
        CHANNEL_SELECT: W,
        PASSIVE_UPDATE_V2: H,
        WINDOW_FOCUS: V,
        UPDATE_CHANNEL_DIMENSIONS: V,
        DRAWER_OPEN: V,
        DRAWER_CLOSE: V,
        BULK_ACK: V
    }));
