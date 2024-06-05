"use strict";
s.r(t), s("733860");
var n, a, l, i, u = s("392711"),
  d = s.n(u),
  r = s("442837"),
  o = s("570140"),
  c = s("163268"),
  f = s("786761"),
  E = s("706454"),
  g = s("592125"),
  m = s("271383"),
  M = s("430824"),
  h = s("375954"),
  _ = s("699516"),
  N = s("594174");
let p = {};

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = g.default.getChannel(e),
    l = null != a ? a.getGuildId() : null;
  return {
    id: e,
    messages: t.map(e => (0, f.createMessageRecord)(e)),
    guildId: l,
    loaded: s,
    loading: n
  }
}

function A(e) {
  let {
    channel: t
  } = e;
  delete p[t.id]
}

function I() {
  d().forEach(p, e => {
    e.messages = e.messages.map(e => e.set("blocked", _.default.isBlocked(e.author.id)))
  })
}
class v extends(n = r.default.Store) {
  initialize() {
    this.waitFor(g.default, M.default, m.default, h.default, N.default, E.default)
  }
  getPinnedMessages(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : void 0
  }
  loaded(e) {
    return null != p[e] && p[e].loaded
  }
}
i = "ChannelPinsStore", (l = "displayName") in(a = v) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new v(o.default, {
  CONNECTION_OPEN: function() {
    p = {}
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    p = d()(p).filter(e => e.guildId !== t.id).keyBy("id").value()
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      s = e.message.channel_id;
    if (null == s) return !1;
    let n = p[s];
    if (null == n && !e.message.pinned) return !1;
    if (null == e.message.author) {
      if (null != n) {
        let a = d().findIndex(n.messages, e => e.id === t);
        if (a >= 0) {
          let t = n.messages[a],
            l = (0, f.updateMessageRecord)(t, e.message);
          if (l !== t) {
            let e = n.messages.slice();
            e[a] = l, p[s].messages = e
          }
        }
      }
      return
    }
    if (e.message.pinned) {
      if (null == n) {
        n = S(s, [e.message], !1), p[s] = n;
        return
      }
      n.messages = n.messages.slice();
      let a = d().findIndex(n.messages, e => e.id === t); - 1 === a ? n.messages.unshift((0, f.createMessageRecord)(e.message)) : n.messages[a] = (0, f.updateMessageRecord)(n.messages[a], e.message), p[s] = n
    } else {
      if (null == n) return;
      let e = d().findIndex(n.messages, e => e.id === t);
      if (-1 === e) return;
      n.messages = n.messages.slice(), n.messages.splice(e, 1), p[s] = n
    }
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: s
    } = e, n = p[s];
    if (null == n || 0 === d().remove(n.messages, e => e.id === t).length) return !1;
    n.messages = n.messages.slice(), p[s] = n
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: s
    } = e, n = p[s];
    null != n && (n.messages = n.messages.filter(e => -1 === t.indexOf(e.id)))
  },
  LOAD_PINNED_MESSAGES: function(e) {
    let {
      channelId: t
    } = e;
    p[t] = S(t, [], !1, !0)
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      messages: s
    } = e;
    p[t] = S(t, s, !0)
  },
  LOAD_PINNED_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    delete p[t]
  },
  CHANNEL_DELETE: A,
  THREAD_DELETE: A,
  RELATIONSHIP_ADD: I,
  RELATIONSHIP_REMOVE: I,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: s
    } = e, n = p[s];
    if (null == n) return;
    let a = d().findIndex(n.messages, e => e.id === t); - 1 !== a && (n.messages = n.messages.slice(), n.messages[a] = (0, c.handleExplicitMediaScanTimeoutForMessage)(n.messages[a]), p[s] = n)
  }
})