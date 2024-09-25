var r,
    i = n(47120);
var a = n(789020);
var o = n(653041);
var s = n(177593);
var l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(89892),
    E = n(673750),
    f = n(710845),
    h = n(163268),
    p = n(723352),
    m = n(160404),
    I = n(786761),
    T = n(418476),
    g = n(739566),
    S = n(995774),
    A = n(706454),
    v = n(630388),
    N = n(709054),
    O = n(314897),
    R = n(592125),
    C = n(796974),
    y = n(984933),
    b = n(271383),
    L = n(430824),
    D = n(496675),
    M = n(699516),
    P = n(944486),
    U = n(914010),
    w = n(594174),
    x = n(981631);
function G(e, t, n) {
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
let k = new Set(),
    B = new f.Z('MessageStore'),
    F = !1;
function Z() {
    _.Z.forEach((e) => {
        _.Z.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1
            })
        );
    }),
        k.clear();
}
function V(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = _.Z.get(e);
        if (null == n) continue;
        let r = !1;
        if (!(n.cached || !r)) {
            B.log('Skipping background message sync for '.concat(e, ' cached:').concat(n.cached, ' ') + 'ready:'.concat(n.ready, ' hasMoreAfter:').concat(n.hasMoreAfter, ' ') + 'isConnected:'.concat(r));
            continue;
        }
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
    }
}
function H() {
    return !0;
}
function Y(e) {
    let { channelId: t, truncateBottom: n, truncateTop: r } = e;
    B.log('Truncating messages for '.concat(t, ' bottom:').concat(n, ' top:').concat(r));
    let i = _.Z.getOrCreate(t);
    (i = i.truncate(n, r)), _.Z.commit(i);
}
function j(e) {
    let { channelId: t } = e;
    B.log('Clearing messages for '.concat(t)), _.Z.clear(t), k.clear();
}
function W(e) {
    let { channelId: t, jump: n, focus: r, before: i, after: a, limit: o, truncate: s } = e,
        l = _.Z.getOrCreate(t);
    (null == n ? void 0 : n.present) ? (l = l.jumpToPresent(o)) : (null == r ? void 0 : r.messageId) != null ? (l = l.focusOnMessage(r.messageId)) : (null == n ? void 0 : n.messageId) != null ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType)) : (null != i || null != a) && (l = l.loadFromCache(null != i, o)), null != s && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)), _.Z.commit(l);
}
function K(e) {
    let { channelId: t, isBefore: n, isAfter: r, jump: i, hasMoreBefore: a, hasMoreAfter: o, messages: s, isStale: l, truncate: u } = e,
        c = _.Z.getOrCreate(t);
    (c = c.loadComplete({
        newMessages: s,
        isBefore: n,
        isAfter: r,
        jump: i,
        hasMoreBefore: a,
        hasMoreAfter: o,
        cached: l,
        hasFetched: !0
    })),
        null != u && (n || r) && (!n || !r) && (c = c.truncate(n, r)),
        _.Z.commit(c);
}
function z(e) {
    let { channelId: t } = e,
        n = _.Z.getOrCreate(t);
    _.Z.commit(
        n.mutate({
            loadingMore: !1,
            error: !0
        })
    );
}
function q(e) {
    let { message: t } = e;
    null != t.nonce && k.add(t.nonce);
}
function Q(e) {
    let { channelId: t, messageRecord: n } = e,
        r = null == n ? void 0 : n.nonce;
    if (null != r && k.has(r)) {
        let e = _.Z.getOrCreate(t),
            n = e.get(r);
        if (null == n) return;
        (e = (e = e.remove(r)).merge([n])), k.delete(r), _.Z.commit(e);
    }
}
function X(e) {
    let { channelId: t, message: n, isPushNotification: r } = e,
        i = _.Z.getOrCreate(t);
    if (r) {
        B.log('Inserting message tapped on from a push notification', n.id, n.channel_id), _.Z.commit(i.receivePushNotification(n));
        return;
    }
    if (!i.ready) return !1;
    null != n.nonce && n.state !== x.yb.SENDING && k.has(n.nonce) && ((i = i.remove(n.nonce)), k.delete(n.nonce)), (i = i.receiveMessage(n, !0 === C.Z.isAtBottom(t))), _.Z.commit(i);
}
function $(e) {
    let { message: t } = e,
        n = _.Z.getOrCreate(t.channel_id);
    B.log('Inserting message from a reaction in-app notification', t.id, t.channel_id), _.Z.commit(n.receiveReactionInAppNotification(t));
}
function J(e) {
    let { channelId: t, messageId: n, reason: r } = e,
        i = _.Z.getOrCreate(t);
    if (null == i || !i.has(n)) return !1;
    let a = i.get(n, !0);
    (i = (null == a ? void 0 : a.isPoll()) === !0 ? i.remove(n) : i.update(n, (e) => ((e = e.set('state', x.yb.SEND_FAILED)).isCommandType() ? (e = (e = e.set('interactionError', null != r ? r : '')).set('flags', (0, v.pj)(e.flags, x.iLy.EPHEMERAL))) : null != r && (e = e.set('interactionError', null != r ? r : '')), e))), _.Z.commit(i);
}
function ee(e) {
    let { id: t, channelId: n } = e,
        r = _.Z.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    if (r.revealedMessageId === t) {
        let e = r.getAfter(t);
        r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
    }
    (r = r.remove(t)), _.Z.commit(r), k.delete(t);
}
function et(e) {
    let { ids: t, channelId: n } = e,
        r = _.Z.getOrCreate(n);
    if (null == r) return !1;
    let i = r.removeMany(t);
    if (r === i) return !1;
    if (null != i.revealedMessageId && u().some(t, (e) => i.revealedMessageId === e)) {
        let e = i.getAfter(i.revealedMessageId);
        i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
    }
    _.Z.commit(i),
        t.forEach((e) => {
            k.delete(e);
        });
}
function en(e) {
    let t = e.message.id,
        n = e.message.channel_id,
        r = _.Z.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => (0, I.wi)(t, e.message))), _.Z.commit(r);
}
function er(e) {
    let { messageId: t, channelId: n } = e,
        r = _.Z.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, h.Cm)), _.Z.commit(r);
}
function ei(e) {
    let t = e.messageId,
        n = e.channelId,
        r = _.Z.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => t.set('interactionData', e.interactionData))), _.Z.commit(r);
}
function ea(e) {
    let { channelId: t } = e,
        n = _.Z.getOrCreate(t);
    (n = n.loadComplete({
        newMessages: [],
        hasMoreAfter: !1,
        hasMoreBefore: !1
    })),
        _.Z.commit(n);
}
function eo() {
    _.Z.forEach((e) => {
        let { channelId: t } = e;
        null == R.Z.getChannel(t) && _.Z.clear(t);
    });
}
function es() {
    _.Z.forEach((e) => {
        _.Z.commit(e.reset(e.map((e) => e.set('blocked', M.Z.isBlockedForMessage(e)))));
    });
}
function el(e) {
    let { channelId: t, messageId: n } = e,
        r = _.Z.getOrCreate(t);
    _.Z.commit(r.mutate({ revealedMessageId: n }));
}
function eu(e) {}
function ec(e) {}
function ed(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, reactionType: o } = e,
        s = _.Z.get(n);
    if (null == s || !(0, S.sm)(e)) return !1;
    let l = O.default.getId() === i;
    (s = s.update(r, (n) => ('MESSAGE_REACTION_ADD' === t ? n.addReaction(a, l, e.colors, o) : n.removeReaction(a, l, o)))), _.Z.commit(s);
}
function e_(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = _.Z.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => {
        var t;
        return e.addReactionBatch(r, null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
    })),
        _.Z.commit(i);
}
function eE(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, E.hc)(n),
        a = r.channelId,
        o = _.Z.getOrCreate(a);
    if (!o.has(i)) return !1;
    (o = o.update(i, (e) => {
        var n;
        return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(p.K).length) > 0 && (e = e.set('embeds', [])), 'MESSAGE_SEND_FAILED_AUTOMOD' === t && (e = e.set('flags', (0, v.pj)(e.flags, x.iLy.EPHEMERAL))), e;
    })),
        _.Z.commit(o);
}
function ef(e) {
    let { channelId: t, messageId: n } = e,
        r = _.Z.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => e.set('reactions', []))), _.Z.commit(r);
}
function eh(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = _.Z.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), _.Z.commit(i);
}
function ep() {
    _.Z.forEach((e) => {
        _.Z.clear(e.channelId);
    }),
        k.clear();
}
function em(e) {
    for (let [t, n] of N.default.entries(e.messages)) {
        let e = _.Z.getOrCreate(t).addCachedMessages(n, !0);
        _.Z.commit(e);
    }
}
function eI(e) {
    let t = _.Z.getOrCreate(e.channelId);
    (t.cached || !t.ready) && _.Z.commit(t.addCachedMessages(e.messages, e.stale));
}
function eT(e) {
    let { message: t } = e,
        n = w.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (F = !0);
}
class eg extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(w.default, R.Z, C.Z, b.ZP, A.default, P.Z, U.Z, L.Z, M.Z, y.ZP), this.syncWith([m.Z], () => {});
    }
    getMessages(e) {
        if (m.Z.hasViewingRoles()) {
            let t = R.Z.getChannel(e),
                n = null == t ? void 0 : t.getGuildId();
            if (m.Z.isViewingRoles(n) && !D.Z.can(x.Plq.VIEW_CHANNEL, t)) return new _.Z(e);
        }
        return _.Z.getOrCreate(e);
    }
    getMessage(e, t) {
        return _.Z.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = w.default.getCurrentUser();
        return u()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, T.Z)(e, null == t ? void 0 : t.id));
    }
    getLastCommandMessage(e) {
        let t = w.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id));
    }
    getLastMessage(e) {
        return u()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = w.default.getCurrentUser();
        return u()(this.getMessages(e).toArray())
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
        return F;
    }
}
G(eg, 'displayName', 'MessageStore'),
    (t.Z = new eg(d.Z, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: V,
        CONNECTION_OPEN: Z,
        OVERLAY_INITIALIZE: Z,
        CACHE_LOADED: em,
        LOAD_MESSAGES: H,
        LOAD_MESSAGES_SUCCESS: K,
        LOAD_MESSAGES_FAILURE: z,
        LOAD_MESSAGES_SUCCESS_CACHED: W,
        LOCAL_MESSAGES_LOADED: eI,
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: ei,
        TRUNCATE_MESSAGES: Y,
        CLEAR_MESSAGES: j,
        MESSAGE_CREATE: X,
        MESSAGE_SEND_FAILED: J,
        MESSAGE_SEND_FAILED_AUTOMOD: eE,
        MESSAGE_EDIT_FAILED_AUTOMOD: eE,
        MESSAGE_UPDATE: en,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: er,
        MESSAGE_DELETE: ee,
        MESSAGE_DELETE_BULK: et,
        MESSAGE_REVEAL: el,
        THREAD_CREATE_LOCAL: ea,
        CHANNEL_DELETE: eo,
        THREAD_DELETE: eo,
        GUILD_DELETE: eo,
        RELATIONSHIP_ADD: es,
        RELATIONSHIP_REMOVE: es,
        GUILD_MEMBERS_CHUNK_BATCH: eu,
        THREAD_MEMBER_LIST_UPDATE: ec,
        MESSAGE_REACTION_ADD: ed,
        MESSAGE_REACTION_ADD_MANY: e_,
        MESSAGE_REACTION_REMOVE: ed,
        MESSAGE_REACTION_REMOVE_ALL: ef,
        MESSAGE_REACTION_REMOVE_EMOJI: eh,
        LOGOUT: ep,
        UPLOAD_START: q,
        UPLOAD_FAIL: Q,
        LOCAL_MESSAGE_CREATE: eT,
        REACTION_MESSAGE_FETCHED: $
    }));
