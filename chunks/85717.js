"use strict";
let i, r, s;
n(47120);
var o = n(493683),
  a = n(45114),
  l = n(872810),
  u = n(147913),
  _ = n(594190),
  c = n(569545),
  d = n(695346),
  E = n(314897),
  I = n(592125),
  T = n(77498),
  h = n(944486),
  f = n(885110),
  S = n(67212),
  N = n(770471),
  A = n(757454),
  m = n(158631),
  O = n(981631);
let p = [];
class R extends u.Z {
  handleRunningGamesChange() {
    let e = _.ZP.getVisibleGame();
    if (null == e) return;
    let {
      canBroadcast: t
    } = N.Z.getCurrentConfig({
      location: "handle_running_games_change"
    }, {
      autoTrackExposure: !1
    }), n = f.Z.getBroadcast(), i = (0, S.Ds)(e), r = null != T.Z.getGameByName(i), s = (0, m.dD)();
    if (!t || null != n || !d.xd.getSetting() || !r || !s || null != p.find(t => t.pid === e.pid)) return;
    if (p = _.ZP.getRunningGames(), !(0, A.Q)()) return;
    let o = h.Z.getVoiceChannelId();
    (0, l.tE)({
      pid: e.pid,
      channelId: o
    })
  }
  handleStreamCreate(e) {
    let {
      streamKey: t
    } = e;
    (0, S.v$)(t, i)
  }
  handleStreamStop(e) {
    let {
      streamKey: t
    } = e;
    if (null == i) return;
    let {
      ownerId: n,
      channelId: o
    } = (0, c.my)(t);
    if (null == n || null == o || n !== E.default.getId()) return;
    let a = I.Z.getChannel(o),
      l = null != a && a.isBroadcastChannel();
    null != a && n === a.ownerId && l && (i = null, r = null, s = null, (0, S.b_)())
  }
  handleStartBroadcastStream(e) {
    let {
      options: t
    } = e;
    i = t.pid, r = t.sourceId, s = t.sourceName
  }
  handleCallCreate(e) {
    let {
      channelId: t
    } = e;
    if (null == t || null == i && null == r && null == s) return;
    let n = E.default.getId(),
      o = I.Z.getChannel(t);
    null != o && n === o.ownerId && o.isBroadcastChannel() && (0, l.WH)(null, t, {
      pid: i,
      sourceId: r,
      sourceName: s
    })
  }
  handleRTCConnectionState(e) {
    let {
      channelId: t,
      state: n
    } = e;
    if (n !== O.hes.DISCONNECTED) return;
    let i = h.Z.getChannelId(),
      r = I.Z.getChannel(t);
    if (null == r || !r.isBroadcastChannel()) return;
    o.Z.closePrivateChannel(t, i === t, !0);
    let s = f.Z.getBroadcast();
    null != s && r.id === s.channelId && (0, S.b_)()
  }
  handleChannelDelete(e) {
    let {
      channel: t
    } = e, n = f.Z.getBroadcast();
    null != n && t.id === n.channelId && (0, S.b_)()
  }
  handleMessageCreate(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null != n) return;
    let i = I.Z.getChannel(t);
    if (null != i && !!i.isBroadcastChannel()) h.Z.getVoiceChannelId() !== i.id && (0, a.iV)(t)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_CREATE: this.handleStreamCreate,
      STREAM_STOP: this.handleStreamStop,
      START_BROADCAST_STREAM: this.handleStartBroadcastStream,
      CALL_CREATE: this.handleCallCreate,
      RTC_CONNECTION_STATE: this.handleRTCConnectionState,
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new R