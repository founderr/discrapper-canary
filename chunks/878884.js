t(47120), t(724458);
var r, u, l, i, c = t(286379),
  a = t(442837),
  o = t(570140),
  s = t(642047),
  d = t(797614),
  f = t(413402),
  C = t(189786),
  E = t(5192),
  Z = t(592125),
  g = t(19780),
  h = t(594174),
  N = t(979651),
  S = t(938475),
  T = t(981631),
  I = t(354459);
let _ = new s.Z(),
  y = new s.Z(),
  m = new Set(),
  p = !1;

function v(e, n, t) {
  let r = new C.Z({
  userId: e.id,
  channelId: t
}),
u = (0, S.PH)(r, null != n ? n : T.ME, e.id);
  _.set(e.id, u);
  let l = {
type: I.fO.USER,
user: e,
id: e.id,
streamId: null,
voiceState: r,
voicePlatform: null,
speaking: !1,
lastSpoke: 0,
soundsharing: !1,
ringing: !1,
userNick: E.ZP.getName(n, t, e),
localVideoDisabled: !1
  };
  y.set(e.id, l);
}

function O(e) {
  let n = _.delete(e),
t = y.delete(e),
r = m.delete(e);
  return n || t || r;
}

function R() {
  var e;
  let n = g.Z.getChannelId();
  if (null == n)
return !1;
  let t = null === (e = Z.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId(),
r = !1;
  return m.forEach(e => {
if (null != N.Z.getVoiceStateForChannel(n, e)) {
  m.delete(e);
  return;
}
let u = h.default.getUser(e);
null != u && (r = !0, m.delete(e), v(u, t, n));
  }), r;
}

function b() {
  _.clear(), y.clear(), m.clear();
}
class D extends(r = a.ZP.Store) {
  initialize() {
this.waitFor(N.Z, h.default, Z.Z, g.Z), this.syncWith([h.default], R);
  }
  get desyncedVoiceStatesCount() {
return _.size();
  }
  getDesyncedUserIds() {
return _.keys();
  }
  getDesyncedVoiceStates() {
return _.values();
  }
  getDesyncedParticipants() {
return y.values();
  }
}
i = 'RTCConnectionDesyncStore', (l = 'displayName') in(u = D) ? Object.defineProperty(u, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[l] = i, n.Z = new D(o.Z, {
  CONNECTION_OPEN: function() {
p = (0, f.i)(), b();
  },
  VOICE_CHANNEL_SELECT: b,
  RTC_CONNECTION_STATE: function(e) {
let {
  state: n
} = e;
if (n !== T.hes.DISCONNECTED)
  return !1;
b();
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: n
} = e, t = g.Z.getChannelId();
return null != t && n.reduce((e, n) => {
  let {
    userId: r,
    channelId: u
  } = n;
  return u === t && !!O(r) || e;
}, !1);
  },
  RTC_CONNECTION_CLIENT_CONNECT: function(e) {
let {
  userIds: n,
  guildId: t,
  channelId: r
} = e;
return n.reduce((e, n) => {
  if (null != N.Z.getVoiceStateForChannel(r, n))
    return e;
  let u = h.default.getUser(n);
  return null == u ? (null == t && p && d.Z.increment({
    name: c.V.RTC_CONNECTION_DESYNC_STORE_UNKNOWN_USER
  }), m.add(n), e) : (v(u, t, r), !0);
}, !1);
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
let {
  userId: n
} = e;
return O(n);
  }
});