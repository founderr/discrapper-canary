var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(786761),
    l = n(797316),
    u = n(594174),
    c = n(709054);
function d(e, t, n) {
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
let _ = {};
function E() {
    _ = {};
}
function f(e) {
    let { threads: t } = e;
    for (let e in t) m(e, t[e].first_message);
}
function h(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t)
        _[e.id] = {
            loaded: !0,
            firstMessage: null
        };
    for (let e of n) m(e.channel_id, e);
}
function p(e) {
    if (e.isPushNotification || e.message.id !== c.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
    m(e.message.channel_id, e.message);
}
function m(e, t) {
    let n = null == t ? null : (0, s.e5)(t);
    _[e] = {
        loaded: !0,
        firstMessage: n
    };
}
function I(e) {
    if (e.message.id !== e.message.channel_id) return !1;
    let t = _[c.default.castMessageIdAsChannelId(e.message.id)];
    if (null == t || null == t.firstMessage) return !1;
    _[c.default.castMessageIdAsChannelId(e.message.id)] = {
        ...t,
        firstMessage: (0, s.wi)(t.firstMessage, e.message)
    };
}
function T(e) {
    if (e.id !== c.default.castChannelIdAsMessageId(e.channelId)) return !1;
    _[e.channelId] = {
        loaded: !0,
        firstMessage: null
    };
}
function g(e) {
    if (null != _[e.channel.id] || !l.Z.isSubscribedToThreads(e.channel.guild_id)) return !1;
    _[e.channel.id] = {
        loaded: !0,
        firstMessage: null
    };
}
function S(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, optimistic: o, reactionType: s } = e,
        l = _[n];
    if (null == l || null == l.firstMessage || r !== l.firstMessage.id) return !1;
    let c = u.default.getCurrentUser(),
        d = null != c && c.id === i;
    if (o && !d) return !1;
    (_[n] = { ...l }), 'MESSAGE_REACTION_ADD' === t ? (_[n].firstMessage = l.firstMessage.addReaction(a, d, e.colors, s)) : (_[n].firstMessage = l.firstMessage.removeReaction(a, d, s));
}
function A(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = _[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    let a = u.default.getCurrentUser(),
        o = i.firstMessage.addReactionBatch(r, null == a ? void 0 : a.id);
    _[t] = {
        ...i,
        firstMessage: o
    };
}
function v(e) {
    let { channelId: t, messageId: n } = e,
        r = _[t];
    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
    _[t] = {
        ...r,
        firstMessage: r.firstMessage.set('reactions', [])
    };
}
function N(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = _[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    _[t] = {
        ...i,
        firstMessage: i.firstMessage.removeReactionsForEmoji(r)
    };
}
function O(e) {
    let { channelId: t, messages: n } = e,
        r = n[n.length - 1];
    null != r &&
        r.id === c.default.castChannelIdAsMessageId(t) &&
        (_[t] = {
            loaded: !0,
            firstMessage: (0, s.e5)(r)
        });
}
class R extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.default);
    }
    isLoading(e) {
        var t;
        return (null === (t = _[e]) || void 0 === t ? void 0 : t.loaded) !== !0;
    }
    getMessage(e) {
        return (
            !(e in _) &&
                (_[e] = {
                    loaded: !1,
                    firstMessage: null
                }),
            _[e]
        );
    }
}
d(R, 'displayName', 'ForumPostMessagesStore'),
    (t.Z = new R(o.Z, {
        CONNECTION_OPEN: E,
        MESSAGE_CREATE: p,
        MESSAGE_UPDATE: I,
        MESSAGE_DELETE: T,
        THREAD_CREATE: g,
        MESSAGE_REACTION_ADD: S,
        MESSAGE_REACTION_REMOVE: S,
        MESSAGE_REACTION_REMOVE_ALL: v,
        MESSAGE_REACTION_REMOVE_EMOJI: N,
        MESSAGE_REACTION_ADD_MANY: A,
        LOAD_FORUM_POSTS: f,
        LOAD_THREADS_SUCCESS: h,
        LOAD_ARCHIVED_THREADS_SUCCESS: h,
        LOAD_MESSAGES_SUCCESS: O
    }));
