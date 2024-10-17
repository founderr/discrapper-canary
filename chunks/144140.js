n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(786761),
    _ = n(131704),
    E = n(23750),
    f = n(598077),
    h = n(592125),
    p = n(375954),
    I = n(709054),
    m = n(124368),
    T = n(981631);
let S = new Set(),
    g = {},
    A = {};
function N(e, t) {
    _.AW.has(e.type) &&
        R(
            (function (e) {
                if (!(e.id in g)) {
                    var t;
                    g[e.id] = {
                        guildId: e.guild_id,
                        parentId: e.parent_id,
                        count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                        mostRecentRawMessage: null,
                        mostRecentMessage: null
                    };
                }
                return g[e.id];
            })(e),
            t
        );
}
function R(e, t) {
    var n;
    let r = (null !== (n = A[e.parentId]) && void 0 !== n ? n : 0) + 1;
    (A[e.parentId] = r), t(e);
}
function O(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(v);
}
function v(e) {
    N(e, (t) => {
        var n;
        null != e.messageCount && (t.count = e.messageCount);
        let r = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
        null != e.lastMessageId && (null == r ? void 0 : r.id) !== e.lastMessageId && ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function C(e) {
    if (null != e && !(e.id in g)) {
        let t = h.Z.getChannel(e.id);
        if (null != t) return v(t), !0;
    }
    return !1;
}
function L(e) {
    let { channel: t } = e;
    v(t);
}
function D(e) {
    let { threads: t } = e;
    t.forEach(C);
}
function y(e) {
    let { messages: t, threads: n } = e;
    for (let e of t) for (let t of e) C(t.thread);
    n.forEach(C);
}
class b extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z);
    }
    getCount(e) {
        var t, n;
        return null !== (n = null === (t = g[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null;
    }
    getMostRecentMessage(e) {
        var t, n;
        let r = g[e];
        return null == r ? null : (null == r.mostRecentMessage && null != r.mostRecentRawMessage && ((r.mostRecentMessage = null !== (t = p.Z.getMessage(e, r.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, d.e5)(r.mostRecentRawMessage)), (r.mostRecentRawMessage = null)), null !== (n = r.mostRecentMessage) && void 0 !== n ? n : null);
    }
    getChannelThreadsVersion(e) {
        return A[e];
    }
    getInitialOverlayState() {
        return g;
    }
}
(s = 'ThreadMessageStore'),
    (a = 'displayName') in (i = b)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new b(c.Z, {
        CONNECTION_OPEN: function (e) {
            (A = {}), S.clear(), e.guilds.forEach(O);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { threadMessages: t } = e;
            for (let e in (g = { ...t })) {
                let n = t[e].mostRecentMessage;
                null != n &&
                    (t[e].mostRecentMessage = new E.ZP({
                        ...n,
                        author: new f.Z(n.author)
                    }));
            }
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            O(t);
        },
        GUILD_DELETE: function (e) {
            var t;
            let { guild: n } = e;
            (t = n.id),
                (g = l().omitBy(g, (e) => {
                    let n = e.guildId === t;
                    return n && delete A[e.parentId], n;
                }));
        },
        THREAD_CREATE: L,
        THREAD_UPDATE: L,
        THREAD_LIST_SYNC: function (e) {
            let { threads: t, mostRecentMessages: n } = e;
            t.forEach(v),
                null == n ||
                    n.forEach((e) => {
                        let t = h.Z.getChannel(e.channel_id);
                        null != t &&
                            e.type !== T.uaV.THREAD_STARTER_MESSAGE &&
                            N(t, (t) => {
                                (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                            });
                    });
        },
        LOAD_THREADS_SUCCESS: D,
        LOAD_ARCHIVED_THREADS_SUCCESS: D,
        SEARCH_FINISH: y,
        MOD_VIEW_SEARCH_FINISH: y,
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            delete g[t.id];
        },
        CHANNEL_DELETE: function (e) {
            var t;
            let { channel: n } = e;
            (t = n.id), (g = l().omitBy(g, (e) => e.parentId === t)), delete A[t];
        },
        MESSAGE_CREATE: function (e) {
            let { message: t, optimistic: n, isPushNotification: r, sendMessageOptions: i } = e;
            if (n || r || null != i) return !1;
            let a = h.Z.getChannel(t.channel_id);
            if (
                null == a ||
                !_.Ec.has(a.type) ||
                !(function (e, t) {
                    return !(t.type === T.uaV.THREAD_STARTER_MESSAGE || (e.isForumPost() && t.id === I.default.castChannelIdAsMessageId(e.id))) && !0;
                })(a, t)
            )
                return !1;
            N(a, (e) => {
                (e.count = Math.min(e.count + 1, m.M3)), (e.mostRecentRawMessage = t), (e.mostRecentMessage = null);
            });
        },
        MESSAGE_UPDATE: function (e) {
            var t;
            let { message: n } = e,
                r = g[n.channel_id],
                i = null !== (t = null == r ? void 0 : r.mostRecentRawMessage) && void 0 !== t ? t : null == r ? void 0 : r.mostRecentMessage;
            if (null == r || null == i || i.id !== n.id) return !1;
            R(r, (e) => {
                null != e.mostRecentMessage && (e.mostRecentMessage = (0, d.wi)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, d.gx)(e.mostRecentRawMessage, n));
            });
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e,
                r = g[n];
            if (null == r) return !1;
            let i = I.default.castChannelIdAsMessageId(n) !== t,
                a = !S.has(t);
            R(r, (e) => {
                var n;
                let r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                null != r && r.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count = i && a ? Math.max(e.count - 1, 0) : e.count), S.add(t);
            });
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e,
                r = g[n];
            if (null == r) return !1;
            let i = t.filter((e) => {
                let t = I.default.castChannelIdAsMessageId(n) !== e,
                    r = !S.has(e);
                return t && r;
            }).length;
            i > 0 &&
                R(r, (e) => {
                    var n;
                    let r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                    null != r && t.includes(r.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count -= i), t.forEach((e) => S.add(e));
                });
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = C(n.thread) || t;
            if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
            let n = h.Z.getChannel(e.channelId);
            if (null == n || !_.Ec.has(n.type)) return t;
            N(n, (t) => {
                if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
                else {
                    var n;
                    let r = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                    (t.count = e.messages.length >= m.M3 ? m.M3 : t.count), (null == r ? void 0 : r.type) !== T.uaV.THREAD_STARTER_MESSAGE && ((t.mostRecentRawMessage = r), (t.mostRecentMessage = null));
                }
            });
        }
    }));
