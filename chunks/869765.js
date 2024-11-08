n.d(t, {
    Y: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a,
    s = n(31775),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(247206),
    d = n(786761),
    f = n(592125),
    _ = n(375954),
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
((a = r || (r = {}))[(a.LOADED = 0)] = 'LOADED'), (a[(a.NOT_LOADED = 1)] = 'NOT_LOADED'), (a[(a.DELETED = 2)] = 'DELETED');
let m = Object.freeze({ state: 1 }),
    g = new Set();
class E {
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
            new (o())({
                max: 100,
                dispose: (e, t) => this.handleCacheDisposed(e, t)
            })
        ),
            p(this, '_cachedMessageIds', new Set());
    }
}
let v = new (class e {
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
        null == r && ((r = new E()), this._channelCaches.set(e, r)), r.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return (
            !!(null != t && t.has(e.id)) &&
            (t.set(e.id, {
                state: 0,
                message: (0, d.e5)(e)
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
})();
function I(e) {
    let t = !1;
    if ((v.updateExistingMessageIfCached(e) && (t = !0), h.OBS.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let r = n.message_id;
        if (null == r) return t;
        if ('referenced_message' in e) {
            let t = e.referenced_message;
            null != t
                ? (v.set(t.channel_id, t.id, {
                      state: 0,
                      message: (0, d.e5)(t)
                  }),
                  e.type === h.uaV.THREAD_STARTER_MESSAGE && I(t))
                : v.set(e.channel_id, r, { state: 2 });
        } else {
            let e = _.Z.getMessage(n.channel_id, r);
            null != e
                ? v.set(n.channel_id, r, {
                      state: 0,
                      message: e
                  })
                : v.set(n.channel_id, r, m);
        }
        t = !0;
    }
    return t;
}
function S(e, t) {
    let n = !1;
    for (let r of e) n = !1 !== t(r) || n;
    return n;
}
function b(e) {
    let { messages: t } = e;
    return S(t, (e) => I(e));
}
function T(e) {
    let { messages: t } = e;
    return S(t, (e) => S(e, (e) => I(e)));
}
function y(e) {
    return v.deleteChannelCache(e.channel.id);
}
function A(e, t) {
    if (!v.has(e, t)) return !1;
    v.set(e, t, { state: 2 });
}
function N() {
    v.clear();
}
function C(e) {
    let { firstMessages: t } = e;
    return null != t && S(t, (e) => I(e));
}
class R extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, f.Z);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = v.get(e.channel_id, e.message_id)), null != t ? t : m;
    }
    getMessage(e, t) {
        var n;
        return null !== (n = v.get(e, t)) && void 0 !== n ? n : m;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = v.getCachedMessageIdsForChannel(e)), null != t ? t : g;
    }
}
p(R, 'displayName', 'ReferencedMessageStore'),
    (t.Z = new R(u.Z, {
        CACHE_LOADED: function (e) {
            let { messages: t } = e;
            return S(Object.values(t), (e) => S(Object.values(e), (e) => I(e)));
        },
        LOCAL_MESSAGES_LOADED: b,
        LOAD_MESSAGES_SUCCESS: b,
        LOAD_MESSAGES_AROUND_SUCCESS: b,
        SEARCH_FINISH: T,
        MOD_VIEW_SEARCH_FINISH: T,
        LOAD_THREADS_SUCCESS: C,
        LOAD_ARCHIVED_THREADS_SUCCESS: C,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: t, channelId: n } = e;
            if (!v.has(n, t)) return !1;
            let r = v.get(n, t);
            if (null == r || 0 !== r.state) return !1;
            v.set(n, t, {
                state: 0,
                message: (0, c.Cm)(r.message)
            });
        },
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            return S(Object.values(t), (e) => {
                let { first_message: t } = e;
                return null != t && I(t);
            });
        },
        MESSAGE_CREATE: function (e) {
            let { message: t } = e;
            return !!_.Z.getMessages(t.channel_id).ready && I(t);
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e,
                n = t.id,
                r = t.channel_id;
            if (!v.has(r, n)) return !1;
            let i = v.get(r, n);
            if (null == i || 0 !== i.state) return !1;
            v.set(r, n, {
                state: 0,
                message: (0, d.wi)(i.message, t)
            });
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e;
            return A(n, t);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e;
            return S(t, (e) => A(n, e));
        },
        CREATE_PENDING_REPLY: function (e) {
            let { message: t } = e;
            v.set(t.channel_id, t.id, {
                state: 0,
                message: t
            });
        },
        CHANNEL_DELETE: y,
        THREAD_DELETE: y,
        GUILD_DELETE: function () {
            if (0 === v.retainWhere((e) => null != f.Z.getChannel(e))) return !1;
        },
        CONNECTION_OPEN: N,
        LOGOUT: N
    }));
