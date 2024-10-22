n(47120), n(789020), n(653041), n(177593);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(911969),
    _ = n(89892),
    E = n(673750),
    f = n(710845),
    h = n(163268),
    p = n(723352),
    I = n(160404),
    m = n(786761),
    T = n(418476),
    S = n(739566),
    g = n(995774),
    A = n(706454),
    N = n(630388),
    R = n(709054),
    O = n(314897),
    v = n(592125),
    C = n(796974),
    L = n(984933),
    D = n(271383),
    y = n(430824),
    b = n(496675),
    M = n(699516),
    P = n(944486),
    U = n(914010),
    w = n(594174),
    x = n(981631);
let G = new Set(),
    k = new f.Z('MessageStore'),
    B = !1;
function F() {
    _.Z.forEach((e) => {
        _.Z.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1
            })
        );
    }),
        G.clear();
}
function V() {
    _.Z.forEach((e) => {
        let { channelId: t } = e;
        null == v.Z.getChannel(t) && _.Z.clear(t);
    });
}
function H() {
    _.Z.forEach((e) => {
        _.Z.commit(e.reset(e.map((e) => e.set('blocked', M.Z.isBlockedForMessage(e)))));
    });
}
function Z(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, reactionType: s } = e,
        o = _.Z.get(n);
    if (null == o || !(0, g.sm)(e)) return !1;
    let l = O.default.getId() === i;
    (o = o.update(r, (n) => ('MESSAGE_REACTION_ADD' === t ? n.addReaction(a, l, e.colors, s) : n.removeReaction(a, l, s)))), _.Z.commit(o);
}
function Y(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, E.hc)(n),
        a = r.channelId,
        s = _.Z.getOrCreate(a);
    if (!s.has(i)) return !1;
    (s = s.update(i, (e) => {
        var n;
        return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(p.K).length) > 0 && (e = e.set('embeds', [])), 'MESSAGE_SEND_FAILED_AUTOMOD' === t && (e = e.set('flags', (0, N.pj)(e.flags, x.iLy.EPHEMERAL))), e;
    })),
        _.Z.commit(s);
}
class j extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(w.default, v.Z, C.Z, D.ZP, A.default, P.Z, U.Z, y.Z, M.Z, L.ZP), this.syncWith([I.Z], () => {});
    }
    getMessages(e) {
        if (I.Z.hasViewingRoles()) {
            let t = v.Z.getChannel(e),
                n = null == t ? void 0 : t.getGuildId();
            if (I.Z.isViewingRoles(n) && !b.Z.can(x.Plq.VIEW_CHANNEL, t)) return new _.Z(e);
        }
        return _.Z.getOrCreate(e);
    }
    getMessage(e, t) {
        return _.Z.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = w.default.getCurrentUser();
        return l()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, T.Z)(e, null == t ? void 0 : t.id));
    }
    getLastChatCommandMessage(e) {
        let t = w.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => {
                var n, r;
                return (null === (n = e.interaction) || void 0 === n ? void 0 : n.type) === d.B8.APPLICATION_COMMAND && (null === (r = e.interactionData) || void 0 === r ? void 0 : r.type) === d.yU.CHAT && e.interaction.user.id === (null == t ? void 0 : t.id);
            });
    }
    getLastMessage(e) {
        return l()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = w.default.getCurrentUser();
        return l()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== (null == t ? void 0 : t.id));
    }
    jumpedMessageId(e) {
        let t = _.Z.get(e);
        return null == t ? void 0 : t.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = _.Z.get(e);
        return null == t ? void 0 : t.focusTargetId;
    }
    hasPresent(e) {
        let t = _.Z.get(e);
        return null != t && t.ready && t.hasPresent();
    }
    isReady(e) {
        return _.Z.getOrCreate(e).ready;
    }
    whenReady(e, t) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return setImmediate(t), !1;
        });
    }
    isLoadingMessages(e) {
        return _.Z.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let t = w.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return B;
    }
}
(s = 'MessageStore'),
    (a = 'displayName') in (i = j)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new j(c.Z, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = _.Z.get(e);
                if (null != n) {
                    n.cached;
                    n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
                }
            }
        },
        CONNECTION_OPEN: F,
        OVERLAY_INITIALIZE: F,
        CACHE_LOADED: function (e) {
            for (let [t, n] of R.default.entries(e.messages)) {
                let e = _.Z.getOrCreate(t).addCachedMessages(n, !0);
                _.Z.commit(e);
            }
        },
        LOAD_MESSAGES: function () {
            return !0;
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, isBefore: n, isAfter: r, jump: i, hasMoreBefore: a, hasMoreAfter: s, messages: o, isStale: l, truncate: u } = e,
                c = _.Z.getOrCreate(t);
            (c = c.loadComplete({
                newMessages: o,
                isBefore: n,
                isAfter: r,
                jump: i,
                hasMoreBefore: a,
                hasMoreAfter: s,
                cached: l,
                hasFetched: !0
            })),
                null != u && (n || r) && (!n || !r) && (c = c.truncate(n, r)),
                _.Z.commit(c);
        },
        LOAD_MESSAGES_FAILURE: function (e) {
            let { channelId: t } = e,
                n = _.Z.getOrCreate(t);
            _.Z.commit(
                n.mutate({
                    loadingMore: !1,
                    error: !0
                })
            );
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function (e) {
            let { channelId: t, jump: n, focus: r, before: i, after: a, limit: s, truncate: o } = e,
                l = _.Z.getOrCreate(t);
            (null == n ? void 0 : n.present) ? (l = l.jumpToPresent(s)) : (null == r ? void 0 : r.messageId) != null ? (l = l.focusOnMessage(r.messageId)) : (null == n ? void 0 : n.messageId) != null ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType)) : (null != i || null != a) && (l = l.loadFromCache(null != i, s)), null != o && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)), _.Z.commit(l);
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let t = _.Z.getOrCreate(e.channelId);
            (t.cached || !t.ready) && _.Z.commit(t.addCachedMessages(e.messages, e.stale));
        },
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function (e) {
            let t = e.messageId,
                n = e.channelId,
                r = _.Z.get(n);
            if (null == r || !r.has(t)) return !1;
            (r = r.update(t, (t) => t.set('interactionData', e.interactionData))), _.Z.commit(r);
        },
        TRUNCATE_MESSAGES: function (e) {
            let { channelId: t, truncateBottom: n, truncateTop: r } = e;
            k.log('Truncating messages for '.concat(t, ' bottom:').concat(n, ' top:').concat(r));
            let i = _.Z.getOrCreate(t);
            (i = i.truncate(n, r)), _.Z.commit(i);
        },
        CLEAR_MESSAGES: function (e) {
            let { channelId: t } = e;
            k.log('Clearing messages for '.concat(t)), _.Z.clear(t), G.clear();
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n, isPushNotification: r } = e,
                i = _.Z.getOrCreate(t);
            if (r) {
                k.log('Inserting message tapped on from a push notification', n.id, n.channel_id), _.Z.commit(i.receivePushNotification(n));
                return;
            }
            if (!i.ready) return !1;
            null != n.nonce && n.state !== x.yb.SENDING && G.has(n.nonce) && ((i = i.remove(n.nonce)), G.delete(n.nonce)), (i = i.receiveMessage(n, !0 === C.Z.isAtBottom(t))), _.Z.commit(i);
        },
        MESSAGE_SEND_FAILED: function (e) {
            let { channelId: t, messageId: n, reason: r } = e,
                i = _.Z.getOrCreate(t);
            if (null == i || !i.has(n)) return !1;
            let a = i.get(n, !0);
            (i = (null == a ? void 0 : a.isPoll()) === !0 ? i.remove(n) : i.update(n, (e) => ((e = e.set('state', x.yb.SEND_FAILED)).isCommandType() ? (e = (e = e.set('interactionError', null != r ? r : '')).set('flags', (0, N.pj)(e.flags, x.iLy.EPHEMERAL))) : null != r && (e = e.set('interactionError', null != r ? r : '')), e))), _.Z.commit(i);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: Y,
        MESSAGE_EDIT_FAILED_AUTOMOD: Y,
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id,
                n = e.message.channel_id,
                r = _.Z.getOrCreate(n);
            if (null == r || !r.has(t)) return !1;
            (r = r.update(t, (t) => (0, m.wi)(t, e.message))), _.Z.commit(r);
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: t, channelId: n } = e,
                r = _.Z.get(n);
            if (null == r || !r.has(t)) return !1;
            (r = r.update(t, h.Cm)), _.Z.commit(r);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e,
                r = _.Z.getOrCreate(n);
            if (null == r || !r.has(t)) return !1;
            if (r.revealedMessageId === t) {
                let e = r.getAfter(t);
                r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
            }
            (r = r.remove(t)), _.Z.commit(r), G.delete(t);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e,
                r = _.Z.getOrCreate(n);
            if (null == r) return !1;
            let i = r.removeMany(t);
            if (r === i) return !1;
            if (null != i.revealedMessageId && l().some(t, (e) => i.revealedMessageId === e)) {
                let e = i.getAfter(i.revealedMessageId);
                i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
            }
            _.Z.commit(i),
                t.forEach((e) => {
                    G.delete(e);
                });
        },
        MESSAGE_REVEAL: function (e) {
            let { channelId: t, messageId: n } = e,
                r = _.Z.getOrCreate(t);
            _.Z.commit(r.mutate({ revealedMessageId: n }));
        },
        THREAD_CREATE_LOCAL: function (e) {
            let { channelId: t } = e,
                n = _.Z.getOrCreate(t);
            (n = n.loadComplete({
                newMessages: [],
                hasMoreAfter: !1,
                hasMoreBefore: !1
            })),
                _.Z.commit(n);
        },
        CHANNEL_DELETE: V,
        THREAD_DELETE: V,
        GUILD_DELETE: V,
        RELATIONSHIP_ADD: H,
        RELATIONSHIP_REMOVE: H,
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
        THREAD_MEMBER_LIST_UPDATE: function (e) {},
        MESSAGE_REACTION_ADD: Z,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { channelId: t, messageId: n, reactions: r } = e,
                i = _.Z.get(t);
            if (null == i) return !1;
            (i = i.update(n, (e) => {
                var t;
                return e.addReactionBatch(r, null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
            })),
                _.Z.commit(i);
        },
        MESSAGE_REACTION_REMOVE: Z,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { channelId: t, messageId: n } = e,
                r = _.Z.get(t);
            if (null == r) return !1;
            (r = r.update(n, (e) => e.set('reactions', []))), _.Z.commit(r);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { channelId: t, messageId: n, emoji: r } = e,
                i = _.Z.get(t);
            if (null == i) return !1;
            (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), _.Z.commit(i);
        },
        LOGOUT: function () {
            _.Z.forEach((e) => {
                _.Z.clear(e.channelId);
            }),
                G.clear();
        },
        UPLOAD_START: function (e) {
            let { message: t } = e;
            null != t.nonce && G.add(t.nonce);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, messageRecord: n } = e,
                r = null == n ? void 0 : n.nonce;
            if (null != r && G.has(r)) {
                let e = _.Z.getOrCreate(t),
                    n = e.get(r);
                if (null == n) return;
                (e = (e = e.remove(r)).merge([n])), G.delete(r), _.Z.commit(e);
            }
        },
        LOCAL_MESSAGE_CREATE: function (e) {
            let { message: t } = e,
                n = w.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (B = !0);
        }
    }));
