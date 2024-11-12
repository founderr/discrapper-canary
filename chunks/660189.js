n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(786761),
    c = n(797316),
    d = n(594174),
    f = n(709054);
let _ = {};
function p(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t)
        _[e.id] = {
            loaded: !0,
            firstMessage: null
        };
    for (let e of n) h(e.channel_id, e);
}
function h(e, t) {
    let n = null == t ? null : (0, u.e5)(t);
    _[e] = {
        loaded: !0,
        firstMessage: n
    };
}
function m(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, optimistic: s, reactionType: o } = e,
        l = _[n];
    if (null == l || null == l.firstMessage || r !== l.firstMessage.id) return !1;
    let u = d.default.getCurrentUser(),
        c = null != u && u.id === i;
    if (s && !c) return !1;
    (_[n] = { ...l }), 'MESSAGE_REACTION_ADD' === t ? (_[n].firstMessage = l.firstMessage.addReaction(a, c, e.colors, o)) : (_[n].firstMessage = l.firstMessage.removeReaction(a, c, o));
}
class g extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.default);
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
(s = 'ForumPostMessagesStore'),
    (a = 'displayName') in (i = g)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new g(l.Z, {
        CONNECTION_OPEN: function () {
            _ = {};
        },
        MESSAGE_CREATE: function (e) {
            if (e.isPushNotification || e.message.id !== f.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
            h(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
            if (e.message.id !== e.message.channel_id) return !1;
            let t = _[f.default.castMessageIdAsChannelId(e.message.id)];
            if (null == t || null == t.firstMessage) return !1;
            _[f.default.castMessageIdAsChannelId(e.message.id)] = {
                ...t,
                firstMessage: (0, u.wi)(t.firstMessage, e.message)
            };
        },
        MESSAGE_DELETE: function (e) {
            if (e.id !== f.default.castChannelIdAsMessageId(e.channelId)) return !1;
            _[e.channelId] = {
                loaded: !0,
                firstMessage: null
            };
        },
        THREAD_CREATE: function (e) {
            if (null != _[e.channel.id] || !c.Z.isSubscribedToThreads(e.channel.guild_id)) return !1;
            _[e.channel.id] = {
                loaded: !0,
                firstMessage: null
            };
        },
        MESSAGE_REACTION_ADD: m,
        MESSAGE_REACTION_REMOVE: m,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { channelId: t, messageId: n } = e,
                r = _[t];
            if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
            _[t] = {
                ...r,
                firstMessage: r.firstMessage.set('reactions', [])
            };
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { channelId: t, messageId: n, emoji: r } = e,
                i = _[t];
            if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
            _[t] = {
                ...i,
                firstMessage: i.firstMessage.removeReactionsForEmoji(r)
            };
        },
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { channelId: t, messageId: n, reactions: r } = e,
                i = _[t];
            if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
            let a = d.default.getCurrentUser(),
                s = i.firstMessage.addReactionBatch(r, null == a ? void 0 : a.id);
            _[t] = {
                ...i,
                firstMessage: s
            };
        },
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            for (let e in t) h(e, t[e].first_message);
        },
        LOAD_THREADS_SUCCESS: p,
        LOAD_ARCHIVED_THREADS_SUCCESS: p,
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, messages: n } = e,
                r = n[n.length - 1];
            null != r &&
                r.id === f.default.castChannelIdAsMessageId(t) &&
                (_[t] = {
                    loaded: !0,
                    firstMessage: (0, u.e5)(r)
                });
        }
    }));
