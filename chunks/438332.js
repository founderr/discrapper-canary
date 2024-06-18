"use strict";
var i, r = n(913527),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(709054);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
    lastSeenNewlyAddedEmojiIds: {}
  },
  c = _,
  d = {};

function E() {
  for (let e in d) c.lastSeenNewlyAddedEmojiIds[e] = d[e]
}
class I extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    c = null != e ? e : _
  }
  getState() {
    return c
  }
  getLastSeenEmojiByGuild(e) {
    return c.lastSeenNewlyAddedEmojiIds[e]
  }
  isNewerThanLastSeen(e, t) {
    if (null == e || null == t) return !1;
    let n = this.getLastSeenEmojiByGuild(e);
    if (null == n) return !0;
    if (l.default.compare(t, n.id) > 0) return !0;
    {
      let e = s()(n.lastSeen);
      return s()().isBefore(e.add(2, "weeks")) && !n.acknowledged
    }
  }
}
u(I, "displayName", "NewlyAddedEmojiStore"), u(I, "persistKey", "NewlyAddedEmojiStore"), u(I, "migrations", [e => {
  let t = e.lastSeenNewlyAddedEmojiIds,
    n = {};
  for (let e in t) {
    let i = t[e];
    n[e] = {
      id: i,
      lastSeen: Date.now(),
      acknowledged: !1
    }
  }
  return {
    lastSeenNewlyAddedEmojiIds: n
  }
}]), t.Z = new I(a.Z, {
  LOGOUT: function() {
    c = _, d = {}
  },
  NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function(e) {
    var t;
    let {
      guildId: n,
      emojiId: i
    } = e, r = null !== (t = d[n]) && void 0 !== t ? t : c.lastSeenNewlyAddedEmojiIds[n];
    null == r || 0 > l.default.compare(r.id, i) ? d[n] = {
      id: i,
      lastSeen: Date.now(),
      acknowledged: !0
    } : d[n] = {
      ...r,
      acknowledged: !0
    }
  },
  NEWLY_ADDED_EMOJI_SEEN_PENDING: function(e) {
    var t;
    let {
      guildId: n,
      emojiId: i
    } = e, r = null !== (t = d[n]) && void 0 !== t ? t : c.lastSeenNewlyAddedEmojiIds[n];
    (null == r || 0 > l.default.compare(r.id, i)) && (d[n] = {
      id: i,
      lastSeen: Date.now(),
      acknowledged: !1
    })
  },
  NEWLY_ADDED_EMOJI_SEEN_UPDATED: E,
  CLEAR_CACHES: function() {
    c = _, E()
  },
  CONNECTION_CLOSED: E
})