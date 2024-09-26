n.d(t, {
    Y: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(653041);
var s = n(31775),
    l = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(163268),
    _ = n(786761),
    E = n(592125),
    f = n(375954),
    h = n(981631);
function p(e, t, n) {
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
!(function (e) {
    (e[(e.LOADED = 0)] = 'LOADED'), (e[(e.NOT_LOADED = 1)] = 'NOT_LOADED'), (e[(e.DELETED = 2)] = 'DELETED');
})(r || (r = {}));
let m = Object.freeze({ state: 1 }),
    I = new Set();
class T {
    handleCacheDisposed(e, t) {
        this._cachedMessageIds.has(e) && ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.delete(e));
    }
    set(e, t) {
        this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.add(e));
    }
    has(e) {
        return this._cachedMessageIds.has(e);
    }
    get(e) {
        return this._cachedMessages.get(e);
    }
    getCachedMessageIds() {
        return this._cachedMessageIds;
    }
    constructor() {
        p(
            this,
            '_cachedMessages',
            new (l())({
                max: 100,
                dispose: (e, t) => this.handleCacheDisposed(e, t)
            })
        ),
            p(this, '_cachedMessageIds', new Set());
    }
}
class g {
    has(e, t) {
        var n, r;
        return null !== (r = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== r && r;
    }
    get(e, t) {
        var n;
        return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
    set(e, t, n) {
        let r = this._channelCaches.get(e);
        null == r && ((r = new T()), this._channelCaches.set(e, r)), r.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return (
            !!(null != t && t.has(e.id)) &&
            (t.set(e.id, {
                state: 0,
                message: (0, _.e5)(e)
            }),
            !0)
        );
    }
    deleteChannelCache(e) {
        return this._channelCaches.delete(e);
    }
    retainWhere(e) {
        let t = [];
        for (let [n] of this._channelCaches) !e(n) && t.push(n);
        for (let e of t) this.deleteChannelCache(e);
        return t.length;
    }
    getCachedMessageIdsForChannel(e) {
        let t = this._channelCaches.get(e);
        return null == t ? null : t.getCachedMessageIds();
    }
    clear() {
        this._channelCaches.clear();
    }
    constructor() {
        p(this, '_channelCaches', new Map());
    }
}
let S = new g();
function A(e) {
    let t = !1;
    if ((S.updateExistingMessageIfCached(e) && (t = !0), h.OBS.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let r = n.message_id;
        if (null == r) return t;
        if ('referenced_message' in e) {
            let t = e.referenced_message;
            null != t
                ? (S.set(t.channel_id, t.id, {
                      state: 0,
                      message: (0, _.e5)(t)
                  }),
                  e.type === h.uaV.THREAD_STARTER_MESSAGE && A(t))
                : S.set(e.channel_id, r, { state: 2 });
        } else {
            let e = f.Z.getMessage(n.channel_id, r);
            null != e
                ? S.set(n.channel_id, r, {
                      state: 0,
                      message: e
                  })
                : S.set(n.channel_id, r, m);
        }
        t = !0;
    }
    return t;
}
function v(e, t) {
    let n = !1;
    for (let r of e) n = !1 !== t(r) || n;
    return n;
}
function N(e) {
    let { messages: t } = e;
    return v(t, (e) => A(e));
}
function O(e) {
    let { messages: t } = e;
    return v(Object.values(t), (e) => v(Object.values(e), (e) => A(e)));
}
function R(e) {
    let { messages: t } = e;
    return v(t, (e) => v(e, (e) => A(e)));
}
function C(e) {
    let { message: t } = e;
    return !!f.Z.getMessages(t.channel_id).ready && A(t);
}
function y(e) {
    let { messageId: t, channelId: n } = e;
    if (!S.has(n, t)) return !1;
    let r = S.get(n, t);
    if (null == r || 0 !== r.state) return !1;
    S.set(n, t, {
        state: 0,
        message: (0, d.Cm)(r.message)
    });
}
function L(e) {
    let { message: t } = e,
        n = t.id,
        r = t.channel_id;
    if (!S.has(r, n)) return !1;
    let i = S.get(r, n);
    if (null == i || 0 !== i.state) return !1;
    S.set(r, n, {
        state: 0,
        message: (0, _.wi)(i.message, t)
    });
}
function b(e) {
    return S.deleteChannelCache(e.channel.id);
}
function D() {
    if (0 === S.retainWhere((e) => null != E.Z.getChannel(e))) return !1;
}
function M(e, t) {
    if (!S.has(e, t)) return !1;
    S.set(e, t, { state: 2 });
}
function P(e) {
    let { id: t, channelId: n } = e;
    return M(n, t);
}
function U(e) {
    let { ids: t, channelId: n } = e;
    return v(t, (e) => M(n, e));
}
function w(e) {
    let { message: t } = e;
    S.set(t.channel_id, t.id, {
        state: 0,
        message: t
    });
}
function x() {
    S.clear();
}
function G(e) {
    let { firstMessages: t } = e;
    return null != t && v(t, (e) => A(e));
}
function k(e) {
    let { threads: t } = e;
    return v(Object.values(t), (e) => {
        let { first_message: t } = e;
        return null != t && A(t);
    });
}
class B extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, E.Z);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = S.get(e.channel_id, e.message_id)), null != t ? t : m;
    }
    getMessage(e, t) {
        var n;
        return null !== (n = S.get(e, t)) && void 0 !== n ? n : m;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = S.getCachedMessageIdsForChannel(e)), null != t ? t : I;
    }
}
p(B, 'displayName', 'ReferencedMessageStore'),
    (t.Z = new B(c.Z, {
        CACHE_LOADED: O,
        LOCAL_MESSAGES_LOADED: N,
        LOAD_MESSAGES_SUCCESS: N,
        LOAD_MESSAGES_AROUND_SUCCESS: N,
        SEARCH_FINISH: R,
        MOD_VIEW_SEARCH_FINISH: R,
        LOAD_THREADS_SUCCESS: G,
        LOAD_ARCHIVED_THREADS_SUCCESS: G,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: y,
        LOAD_FORUM_POSTS: k,
        MESSAGE_CREATE: C,
        MESSAGE_UPDATE: L,
        MESSAGE_DELETE: P,
        MESSAGE_DELETE_BULK: U,
        CREATE_PENDING_REPLY: w,
        CHANNEL_DELETE: b,
        THREAD_DELETE: b,
        GUILD_DELETE: D,
        CONNECTION_OPEN: x,
        LOGOUT: x
    }));
