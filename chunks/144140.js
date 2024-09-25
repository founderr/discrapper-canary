var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(786761),
    c = n(131704),
    d = n(23750),
    _ = n(598077),
    E = n(592125),
    f = n(375954),
    h = n(709054),
    p = n(124368),
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
let T = new Set(),
    g = {},
    S = {};
function A(e) {
    g = o().omitBy(g, (t) => {
        let n = t.guildId === e;
        return n && delete S[t.parentId], n;
    });
}
function v(e) {
    (g = o().omitBy(g, (t) => t.parentId === e)), delete S[e];
}
function N(e, t) {
    c.AW.has(e.type) && O(C(e), t);
}
function O(e, t) {
    var n;
    let r = (null !== (n = S[e.parentId]) && void 0 !== n ? n : 0) + 1;
    (S[e.parentId] = r), t(e);
}
function R(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(y);
}
function C(e) {
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
}
function y(e) {
    N(e, (t) => {
        var n;
        null != e.messageCount && (t.count = e.messageCount);
        let r = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
        null != e.lastMessageId && (null == r ? void 0 : r.id) !== e.lastMessageId && ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function b(e) {
    if (null != e && !(e.id in g)) {
        let t = E.Z.getChannel(e.id);
        if (null != t) return y(t), !0;
    }
    return !1;
}
function L(e) {
    (S = {}), T.clear(), e.guilds.forEach(R);
}
function D(e) {
    let { threadMessages: t } = e;
    for (let e in (g = { ...t })) {
        let n = t[e].mostRecentMessage;
        null != n &&
            (t[e].mostRecentMessage = new d.ZP({
                ...n,
                author: new _.Z(n.author)
            }));
    }
}
function M(e) {
    let { guild: t } = e;
    R(t);
}
function P(e) {
    let { guild: t } = e;
    A(t.id);
}
function U(e) {
    let { channel: t } = e;
    y(t);
}
function w(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach(y),
        null == n ||
            n.forEach((e) => {
                let t = E.Z.getChannel(e.channel_id);
                null != t &&
                    e.type !== m.uaV.THREAD_STARTER_MESSAGE &&
                    N(t, (t) => {
                        (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                    });
            });
}
function x(e) {
    let { threads: t } = e;
    t.forEach(b);
}
function G(e) {
    let { messages: t, threads: n } = e;
    for (let e of t) for (let t of e) b(t.thread);
    n.forEach(b);
}
function k(e) {
    let { channel: t } = e;
    v(t.id);
}
function B(e) {
    let { channel: t } = e;
    delete g[t.id];
}
function F(e) {
    let { message: t, optimistic: n, isPushNotification: r, sendMessageOptions: i } = e;
    if (n || r || null != i) return !1;
    let a = E.Z.getChannel(t.channel_id);
    if (null == a || !c.Ec.has(a.type) || !Z(a, t)) return !1;
    N(a, (e) => {
        (e.count = Math.min(e.count + 1, p.M3)), (e.mostRecentRawMessage = t), (e.mostRecentMessage = null);
    });
}
function Z(e, t) {
    return !(t.type === m.uaV.THREAD_STARTER_MESSAGE || (e.isForumPost() && t.id === h.default.castChannelIdAsMessageId(e.id))) && !0;
}
function V(e) {
    var t;
    let { message: n } = e,
        r = g[n.channel_id],
        i = null !== (t = null == r ? void 0 : r.mostRecentRawMessage) && void 0 !== t ? t : null == r ? void 0 : r.mostRecentMessage;
    if (null == r || null == i || i.id !== n.id) return !1;
    O(r, (e) => {
        null != e.mostRecentMessage && (e.mostRecentMessage = (0, u.wi)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, u.gx)(e.mostRecentRawMessage, n));
    });
}
function H(e) {
    let { id: t, channelId: n } = e,
        r = g[n];
    if (null == r) return !1;
    let i = h.default.castChannelIdAsMessageId(n) !== t,
        a = !T.has(t);
    O(r, (e) => {
        var n;
        let r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
        null != r && r.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count = i && a ? Math.max(e.count - 1, 0) : e.count), T.add(t);
    });
}
function Y(e) {
    let { ids: t, channelId: n } = e,
        r = g[n];
    if (null == r) return !1;
    let i = t.filter((e) => {
        let t = h.default.castChannelIdAsMessageId(n) !== e,
            r = !T.has(e);
        return t && r;
    }).length;
    i > 0 &&
        O(r, (e) => {
            var n;
            let r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
            null != r && t.includes(r.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)), (e.count -= i), t.forEach((e) => T.add(e));
        });
}
function j(e) {
    let t = !1;
    for (let n of e.messages) t = b(n.thread) || t;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
    let n = E.Z.getChannel(e.channelId);
    if (null == n || !c.Ec.has(n.type)) return t;
    N(n, (t) => {
        if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
        else {
            var n;
            let r = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
            (t.count = e.messages.length >= p.M3 ? p.M3 : t.count), (null == r ? void 0 : r.type) !== m.uaV.THREAD_STARTER_MESSAGE && ((t.mostRecentRawMessage = r), (t.mostRecentMessage = null));
        }
    });
}
class W extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, f.Z);
    }
    getCount(e) {
        var t, n;
        return null !== (n = null === (t = g[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null;
    }
    getMostRecentMessage(e) {
        var t, n;
        let r = g[e];
        return null == r ? null : (null == r.mostRecentMessage && null != r.mostRecentRawMessage && ((r.mostRecentMessage = null !== (t = f.Z.getMessage(e, r.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, u.e5)(r.mostRecentRawMessage)), (r.mostRecentRawMessage = null)), null !== (n = r.mostRecentMessage) && void 0 !== n ? n : null);
    }
    getChannelThreadsVersion(e) {
        return S[e];
    }
    getInitialOverlayState() {
        return g;
    }
}
I(W, 'displayName', 'ThreadMessageStore'),
    (t.Z = new W(l.Z, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: D,
        GUILD_CREATE: M,
        GUILD_DELETE: P,
        THREAD_CREATE: U,
        THREAD_UPDATE: U,
        THREAD_LIST_SYNC: w,
        LOAD_THREADS_SUCCESS: x,
        LOAD_ARCHIVED_THREADS_SUCCESS: x,
        SEARCH_FINISH: G,
        MOD_VIEW_SEARCH_FINISH: G,
        THREAD_DELETE: B,
        CHANNEL_DELETE: k,
        MESSAGE_CREATE: F,
        MESSAGE_UPDATE: V,
        MESSAGE_DELETE: H,
        MESSAGE_DELETE_BULK: Y,
        LOAD_MESSAGES_SUCCESS: j
    }));
