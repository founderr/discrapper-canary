"use strict";
n(47120), n(789020), n(653041), n(177593);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(89892),
  d = n(673750),
  E = n(710845),
  I = n(163268),
  T = n(723352),
  h = n(160404),
  f = n(786761),
  S = n(418476),
  N = n(739566),
  A = n(995774),
  m = n(706454),
  O = n(630388),
  p = n(709054),
  R = n(314897),
  g = n(592125),
  C = n(796974),
  v = n(984933),
  L = n(271383),
  D = n(430824),
  M = n(496675),
  P = n(699516),
  y = n(944486),
  U = n(914010),
  b = n(594174),
  G = n(981631);
let w = new Set,
  x = new E.Z("MessageStore"),
  B = !1;

function k() {
  c.Z.forEach(e => {
    c.Z.commit(e.mutate({
      ready: !1,
      loadingMore: !1
    }))
  }), w.clear()
}

function V() {
  c.Z.forEach(e => {
    let {
      channelId: t
    } = e;
    null == g.Z.getChannel(t) && c.Z.clear(t)
  })
}

function Z() {
  c.Z.forEach(e => {
    c.Z.commit(e.reset(e.map(e => e.set("blocked", P.Z.isBlockedForMessage(e)))))
  })
}

function H(e) {
  let {
    type: t,
    channelId: n,
    messageId: i,
    userId: r,
    emoji: s,
    reactionType: o
  } = e, a = c.Z.get(n);
  if (null == a || !(0, A.sm)(e)) return !1;
  let l = R.default.getId() === r;
  a = a.update(i, n => "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, l, e.colors, o) : n.removeReaction(s, l, o)), c.Z.commit(a)
}

function F(e) {
  let {
    type: t,
    messageData: n
  } = e, {
    message: i
  } = n, r = (0, d.hc)(n), s = i.channelId, o = c.Z.getOrCreate(s);
  if (!o.has(r)) return !1;
  o = o.update(r, e => {
    var n;
    return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(T.K).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, O.pj)(e.flags, G.iLy.EPHEMERAL))), e
  }), c.Z.commit(o)
}
class Y extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(b.default, g.Z, C.Z, L.ZP, m.default, y.Z, U.Z, D.Z, P.Z, v.ZP), this.syncWith([h.Z], () => {})
  }
  getMessages(e) {
    if (h.Z.hasViewingRoles()) {
      let t = g.Z.getChannel(e),
        n = null == t ? void 0 : t.getGuildId();
      if (h.Z.isViewingRoles(n) && !M.Z.can(G.Plq.VIEW_CHANNEL, t)) return new c.Z(e)
    }
    return c.Z.getOrCreate(e)
  }
  getMessage(e, t) {
    return c.Z.getOrCreate(e).get(t)
  }
  getLastEditableMessage(e) {
    let t = b.default.getCurrentUser();
    return l()(this.getMessages(e).toArray()).reverse().find(e => (0, S.Z)(e, null == t ? void 0 : t.id))
  }
  getLastCommandMessage(e) {
    let t = b.default.getCurrentUser();
    return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
  }
  getLastMessage(e) {
    return l()(this.getMessages(e).toArray()).reverse().get(0)
  }
  getLastNonCurrentUserMessage(e) {
    let t = b.default.getCurrentUser();
    return l()(this.getMessages(e).toArray()).reverse().find(e => e.author.id !== (null == t ? void 0 : t.id))
  }
  jumpedMessageId(e) {
    let t = c.Z.get(e);
    return null == t ? void 0 : t.jumpTargetId
  }
  focusedMessageId(e) {
    let t = c.Z.get(e);
    return null == t ? void 0 : t.focusTargetId
  }
  hasPresent(e) {
    let t = c.Z.get(e);
    return null != t && t.ready && t.hasPresent()
  }
  isReady(e) {
    return c.Z.getOrCreate(e).ready
  }
  whenReady(e, t) {
    this.addConditionalChangeListener(() => {
      if (this.isReady(e)) return setImmediate(t), !1
    })
  }
  isLoadingMessages(e) {
    return c.Z.getOrCreate(e).loadingMore
  }
  hasCurrentUserSentMessage(e) {
    let t = b.default.getCurrentUser();
    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
  }
  hasCurrentUserSentMessageSinceAppStart() {
    return B
  }
}
o = "MessageStore", (s = "displayName") in(r = Y) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new Y(_.Z, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
    let {
      changesByChannelId: t
    } = e;
    for (let e in t) {
      let n = c.Z.get(e);
      if (null != n) {
        n.cached;
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
      }
    }
  },
  CONNECTION_OPEN: k,
  OVERLAY_INITIALIZE: k,
  CACHE_LOADED: function(e) {
    for (let [t, n] of p.default.entries(e.messages)) {
      let e = c.Z.getOrCreate(t).addCachedMessages(n, !0);
      c.Z.commit(e)
    }
  },
  LOAD_MESSAGES: function() {
    return !0
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      isBefore: n,
      isAfter: i,
      jump: r,
      hasMoreBefore: s,
      hasMoreAfter: o,
      messages: a,
      isStale: l,
      truncate: u
    } = e, _ = c.Z.getOrCreate(t);
    _ = _.loadComplete({
      newMessages: a,
      isBefore: n,
      isAfter: i,
      jump: r,
      hasMoreBefore: s,
      hasMoreAfter: o,
      cached: l,
      hasFetched: !0
    }), null != u && (n || i) && (!n || !i) && (_ = _.truncate(n, i)), c.Z.commit(_)
  },
  LOAD_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e, n = c.Z.getOrCreate(t);
    c.Z.commit(n.mutate({
      loadingMore: !1,
      error: !0
    }))
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
    let {
      channelId: t,
      jump: n,
      focus: i,
      before: r,
      after: s,
      limit: o,
      truncate: a
    } = e, l = c.Z.getOrCreate(t);
    (null == n ? void 0 : n.present) ? l = l.jumpToPresent(o): (null == i ? void 0 : i.messageId) != null ? l = l.focusOnMessage(i.messageId) : (null == n ? void 0 : n.messageId) != null ? l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != r || null != s) && (l = l.loadFromCache(null != r, o)), null != a && (null != r || null != s) && (null == r || null == s) && (l = l.truncate(null != r, null != s)), c.Z.commit(l)
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    let t = c.Z.getOrCreate(e.channelId);
    (t.cached || !t.ready) && c.Z.commit(t.addCachedMessages(e.messages, e.stale))
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
    let t = e.messageId,
      n = e.channelId,
      i = c.Z.get(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, t => t.set("interactionData", e.interactionData)), c.Z.commit(i)
  },
  TRUNCATE_MESSAGES: function(e) {
    let {
      channelId: t,
      truncateBottom: n,
      truncateTop: i
    } = e;
    x.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(i));
    let r = c.Z.getOrCreate(t);
    r = r.truncate(n, i), c.Z.commit(r)
  },
  CLEAR_MESSAGES: function(e) {
    let {
      channelId: t
    } = e;
    x.log("Clearing messages for ".concat(t)), c.Z.clear(t), w.clear()
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n,
      isPushNotification: i
    } = e, r = c.Z.getOrCreate(t);
    if (i) {
      x.log("Inserting message tapped on from a push notification", n.id, n.channel_id), c.Z.commit(r.receivePushNotification(n));
      return
    }
    if (!r.ready) return !1;
    null != n.nonce && n.state !== G.yb.SENDING && w.has(n.nonce) && (r = r.remove(n.nonce), w.delete(n.nonce)), r = r.receiveMessage(n, C.Z.isAtBottom(t)), c.Z.commit(r)
  },
  MESSAGE_SEND_FAILED: function(e) {
    let {
      channelId: t,
      messageId: n,
      reason: i
    } = e, r = c.Z.getOrCreate(t);
    if (null == r || !r.has(n)) return !1;
    let s = r.get(n, !0);
    r = (null == s ? void 0 : s.isPoll()) === !0 ? r.remove(n) : r.update(n, e => ((e = e.set("state", G.yb.SEND_FAILED)).isCommandType() ? e = (e = e.set("interactionError", null != i ? i : "")).set("flags", (0, O.pj)(e.flags, G.iLy.EPHEMERAL)) : null != i && (e = e.set("interactionError", null != i ? i : "")), e)), c.Z.commit(r)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: F,
  MESSAGE_EDIT_FAILED_AUTOMOD: F,
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      n = e.message.channel_id,
      i = c.Z.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, t => (0, f.wi)(t, e.message)), c.Z.commit(i)
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, i = c.Z.get(n);
    if (null == i || !i.has(t)) return !1;
    i = i.update(t, I.Cm), c.Z.commit(i)
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, i = c.Z.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    if (i.revealedMessageId === t) {
      let e = i.getAfter(t);
      i = null != e && e.blocked ? i.mutate({
        revealedMessageId: e.id
      }) : i.mutate({
        revealedMessageId: null
      })
    }
    i = i.remove(t), c.Z.commit(i), w.delete(t)
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, i = c.Z.getOrCreate(n);
    if (null == i) return !1;
    let r = i.removeMany(t);
    if (i === r) return !1;
    if (null != r.revealedMessageId && l().some(t, e => r.revealedMessageId === e)) {
      let e = r.getAfter(r.revealedMessageId);
      r = null != e && e.blocked ? r.mutate({
        revealedMessageId: e.id
      }) : r.mutate({
        revealedMessageId: null
      })
    }
    c.Z.commit(r), t.forEach(e => {
      w.delete(e)
    })
  },
  MESSAGE_REVEAL: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = c.Z.getOrCreate(t);
    c.Z.commit(i.mutate({
      revealedMessageId: n
    }))
  },
  THREAD_CREATE_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = c.Z.getOrCreate(t);
    n = n.loadComplete({
      newMessages: [],
      hasMoreAfter: !1,
      hasMoreBefore: !1
    }), c.Z.commit(n)
  },
  CHANNEL_DELETE: V,
  THREAD_DELETE: V,
  GUILD_DELETE: V,
  RELATIONSHIP_ADD: Z,
  RELATIONSHIP_REMOVE: Z,
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {},
  THREAD_MEMBER_LIST_UPDATE: function(e) {},
  MESSAGE_REACTION_ADD: H,
  MESSAGE_REACTION_ADD_MANY: function(e) {
    let {
      channelId: t,
      messageId: n,
      reactions: i
    } = e, r = c.Z.get(t);
    if (null == r) return !1;
    r = r.update(n, e => {
      var t;
      return e.addReactionBatch(i, null === (t = b.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    }), c.Z.commit(r)
  },
  MESSAGE_REACTION_REMOVE: H,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = c.Z.get(t);
    if (null == i) return !1;
    i = i.update(n, e => e.set("reactions", [])), c.Z.commit(i)
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
    let {
      channelId: t,
      messageId: n,
      emoji: i
    } = e, r = c.Z.get(t);
    if (null == r) return !1;
    r = r.update(n, e => e.removeReactionsForEmoji(i)), c.Z.commit(r)
  },
  LOGOUT: function() {
    c.Z.forEach(e => {
      c.Z.clear(e.channelId)
    }), w.clear()
  },
  UPLOAD_START: function(e) {
    let {
      message: t
    } = e;
    null != t.nonce && w.add(t.nonce)
  },
  UPLOAD_FAIL: function(e) {
    let {
      channelId: t,
      messageRecord: n
    } = e, i = null == n ? void 0 : n.nonce;
    if (null != i && w.has(i)) {
      let e = c.Z.getOrCreate(t),
        n = e.get(i);
      if (null == n) return;
      e = (e = e.remove(i)).merge([n]), w.delete(i), c.Z.commit(e)
    }
  },
  LOCAL_MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e, n = b.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (B = !0)
  }
})