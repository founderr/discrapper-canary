"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("843762");
var s = n("917351"),
  a = n.n(s),
  l = n("446674"),
  i = n("913144"),
  r = n("447435"),
  d = n("692038"),
  u = n("915639"),
  o = n("42203"),
  c = n("26989"),
  f = n("305961"),
  E = n("377253"),
  g = n("27618"),
  m = n("697218");
let M = {};

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = o.default.getChannel(e),
    l = null != a ? a.getGuildId() : null;
  return {
    id: e,
    messages: t.map(e => (0, d.createMessageRecord)(e)),
    guildId: l,
    loaded: n,
    loading: s
  }
}

function _(e) {
  let {
    channel: t
  } = e;
  delete M[t.id]
}

function N() {
  a.forEach(M, e => {
    a.forEach(e.messages, e => {
      e.timestamp.locale(u.default.locale)
    })
  })
}

function p() {
  a.forEach(M, e => {
    e.messages = e.messages.map(e => e.set("blocked", g.default.isBlocked(e.author.id)))
  })
}
class S extends l.default.Store {
  initialize() {
    this.waitFor(o.default, f.default, c.default, E.default, m.default, u.default)
  }
  getPinnedMessages(e) {
    var t;
    return null !== (t = M[e]) && void 0 !== t ? t : void 0
  }
  loaded(e) {
    return null != M[e] && M[e].loaded
  }
}
S.displayName = "ChannelPinsStore";
var I = new S(i.default, {
  CONNECTION_OPEN: function() {
    M = {}
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    M = a(M).filter(e => e.guildId !== t.id).keyBy("id").value()
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      n = e.message.channel_id;
    if (null == n) return !1;
    let s = M[n];
    if (null == s && !e.message.pinned) return !1;
    if (null == e.message.author) {
      if (null != s) {
        let l = a.findIndex(s.messages, e => e.id === t);
        if (l >= 0) {
          let t = s.messages[l],
            a = (0, d.updateMessageRecord)(t, e.message);
          if (a !== t) {
            let e = s.messages.slice();
            e[l] = a, M[n].messages = e
          }
        }
      }
      return
    }
    if (e.message.pinned) {
      if (null == s) {
        s = h(n, [e.message], !1), M[n] = s;
        return
      }
      s.messages = s.messages.slice();
      let l = a.findIndex(s.messages, e => e.id === t); - 1 === l ? s.messages.unshift((0, d.createMessageRecord)(e.message)) : s.messages[l] = (0, d.updateMessageRecord)(s.messages[l], e.message), M[n] = s
    } else {
      if (null == s) return;
      let e = a.findIndex(s.messages, e => e.id === t);
      if (-1 === e) return;
      s.messages = s.messages.slice(), s.messages.splice(e, 1), M[n] = s
    }
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, s = M[n];
    if (null == s) return !1;
    let l = a.remove(s.messages, e => e.id === t);
    if (0 === l.length) return !1;
    s.messages = s.messages.slice(), M[n] = s
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, s = M[n];
    null != s && (s.messages = s.messages.filter(e => -1 === t.indexOf(e.id)))
  },
  LOAD_PINNED_MESSAGES: function(e) {
    let {
      channelId: t
    } = e;
    M[t] = h(t, [], !1, !0)
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      messages: n
    } = e;
    M[t] = h(t, n, !0)
  },
  LOAD_PINNED_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    delete M[t]
  },
  USER_SETTINGS_PROTO_UPDATE: N,
  I18N_LOAD_SUCCESS: N,
  CHANNEL_DELETE: _,
  THREAD_DELETE: _,
  RELATIONSHIP_ADD: p,
  RELATIONSHIP_REMOVE: p,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, s = M[n];
    if (null == s) return;
    let l = a.findIndex(s.messages, e => e.id === t); - 1 !== l && (s.messages = s.messages.slice(), s.messages[l] = (0, r.handleExplicitMediaScanTimeoutForMessage)(s.messages[l]), M[n] = s)
  }
})