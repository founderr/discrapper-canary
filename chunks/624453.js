n(733860);
var i, a, s, r, l = n(392711),
  o = n.n(l),
  c = n(442837),
  u = n(570140),
  d = n(163268),
  _ = n(786761),
  E = n(706454),
  I = n(592125),
  m = n(271383),
  T = n(430824),
  h = n(375954),
  N = n(699516),
  f = n(594174);
let C = {};

function p(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
a = I.Z.getChannel(e),
s = null != a ? a.getGuildId() : null;
  return {
id: e,
messages: t.map(e => (0, _.e5)(e)),
guildId: s,
loaded: n,
loading: i
  };
}

function g(e) {
  let {
channel: t
  } = e;
  delete C[t.id];
}

function S() {
  o().forEach(C, e => {
e.messages = e.messages.map(e => e.set('blocked', N.Z.isBlockedForMessage(e)));
  });
}
class A extends(i = c.ZP.Store) {
  initialize() {
this.waitFor(I.Z, T.Z, m.ZP, h.Z, f.default, E.default);
  }
  getPinnedMessages(e) {
var t;
return null !== (t = C[e]) && void 0 !== t ? t : void 0;
  }
  loaded(e) {
return null != C[e] && C[e].loaded;
  }
}
r = 'ChannelPinsStore', (s = 'displayName') in(a = A) ? Object.defineProperty(a, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = r, t.Z = new A(u.Z, {
  CONNECTION_OPEN: function() {
C = {};
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
C = o()(C).filter(e => e.guildId !== t.id).keyBy('id').value();
  },
  MESSAGE_UPDATE: function(e) {
let t = e.message.id,
  n = e.message.channel_id;
if (null == n)
  return !1;
let i = C[n];
if (null == i && !e.message.pinned)
  return !1;
if (null == e.message.author) {
  if (null != i) {
    let a = o().findIndex(i.messages, e => e.id === t);
    if (a >= 0) {
      let t = i.messages[a],
        s = (0, _.wi)(t, e.message);
      if (s !== t) {
        let e = i.messages.slice();
        e[a] = s, C[n].messages = e;
      }
    }
  }
  return;
}
if (e.message.pinned) {
  if (null == i) {
    i = p(n, [e.message], !1), C[n] = i;
    return;
  }
  i.messages = i.messages.slice();
  let a = o().findIndex(i.messages, e => e.id === t); -
  1 === a ? i.messages.unshift((0, _.e5)(e.message)) : i.messages[a] = (0, _.wi)(i.messages[a], e.message), C[n] = i;
} else {
  if (null == i)
    return;
  let e = o().findIndex(i.messages, e => e.id === t);
  if (-1 === e)
    return;
  i.messages = i.messages.slice(), i.messages.splice(e, 1), C[n] = i;
}
  },
  MESSAGE_DELETE: function(e) {
let {
  id: t,
  channelId: n
} = e, i = C[n];
if (null == i || 0 === o().remove(i.messages, e => e.id === t).length)
  return !1;
i.messages = i.messages.slice(), C[n] = i;
  },
  MESSAGE_DELETE_BULK: function(e) {
let {
  ids: t,
  channelId: n
} = e, i = C[n];
if (null != i)
  i.messages = i.messages.filter(e => -1 === t.indexOf(e.id));
  },
  LOAD_PINNED_MESSAGES: function(e) {
let {
  channelId: t
} = e;
C[t] = p(t, [], !1, !0);
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
let {
  channelId: t,
  messages: n
} = e;
C[t] = p(t, n, !0);
  },
  LOAD_PINNED_MESSAGES_FAILURE: function(e) {
let {
  channelId: t
} = e;
delete C[t];
  },
  CHANNEL_DELETE: g,
  THREAD_DELETE: g,
  RELATIONSHIP_ADD: S,
  RELATIONSHIP_REMOVE: S,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
let {
  messageId: t,
  channelId: n
} = e, i = C[n];
if (null == i)
  return;
let a = o().findIndex(i.messages, e => e.id === t);
if (-1 !== a)
  i.messages = i.messages.slice(), i.messages[a] = (0, d.Cm)(i.messages[a]), C[n] = i;
  }
});