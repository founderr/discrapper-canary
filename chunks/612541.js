"use strict";
let i, a, l;
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var s = n("450911"),
  r = n("267363"),
  o = n("990766"),
  u = n("689988"),
  d = n("374014"),
  c = n("845579"),
  f = n("271938"),
  E = n("42203"),
  h = n("546463"),
  _ = n("568307"),
  C = n("18494"),
  S = n("101125"),
  g = n("713726"),
  T = n("9759"),
  m = n("705565"),
  p = n("754493"),
  I = n("49111");
let A = [];
class N extends u.default {
  handleRunningGamesChange() {
    let e = _.default.getVisibleGame();
    if (null == e) return;
    let {
      canBroadcast: t
    } = T.default.getCurrentConfig({
      location: "handle_running_games_change"
    }, {
      autoTrackExposure: !1
    }), n = S.default.getBroadcast(), i = (0, g.getGameName)(e), a = null != h.default.getGameByName(i), l = (0, p.getIsBroadcastingToAnyone)();
    if (!t || null != n || !c.BroadcastAutoBroadcast.getSetting() || !a || !l) return;
    let s = null != A.find(t => t.pid === e.pid);
    if (s) return;
    A = _.default.getRunningGames();
    let r = (0, m.getCanStartBroadcast)();
    if (!r) return;
    let u = C.default.getVoiceChannelId();
    (0, o.createBroadcastChannelOrStartStream)({
      pid: e.pid,
      channelId: u
    })
  }
  handleStreamCreate(e) {
    let {
      streamKey: t
    } = e;
    (0, g.startBroadcastForStream)(t, i)
  }
  handleStreamStop(e) {
    let {
      streamKey: t
    } = e;
    if (null == i) return;
    let n = (0, d.decodeStreamKey)(t),
      {
        ownerId: s,
        channelId: r
      } = n;
    if (null == s || null == r) return;
    let o = f.default.getId();
    if (s !== o) return;
    let u = E.default.getChannel(r),
      c = null != u && u.isBroadcastChannel();
    null != u && s === u.ownerId && c && (i = null, a = null, l = null, (0, g.stopBroadcast)())
  }
  handleStartBroadcastStream(e) {
    let {
      options: t
    } = e;
    i = t.pid, a = t.sourceId, l = t.sourceName
  }
  handleCallCreate(e) {
    let {
      channelId: t
    } = e;
    if (null == t || null == i && null == a && null == l) return;
    let n = f.default.getId(),
      s = E.default.getChannel(t);
    null != s && n === s.ownerId && s.isBroadcastChannel() && (0, o.startStream)(null, t, {
      pid: i,
      sourceId: a,
      sourceName: l
    })
  }
  handleRTCConnectionState(e) {
    let {
      channelId: t,
      state: n
    } = e;
    if (n !== I.RTCConnectionStates.DISCONNECTED) return;
    let i = C.default.getChannelId(),
      a = E.default.getChannel(t);
    if (null == a || !a.isBroadcastChannel()) return;
    s.default.closePrivateChannel(t, i === t, !0);
    let l = S.default.getBroadcast();
    null != l && a.id === l.channelId && (0, g.stopBroadcast)()
  }
  handleChannelDelete(e) {
    let {
      channel: t
    } = e, n = S.default.getBroadcast();
    null != n && t.id === n.channelId && (0, g.stopBroadcast)()
  }
  handleMessageCreate(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null != n) return;
    let i = E.default.getChannel(t);
    if (null == i || !i.isBroadcastChannel()) return;
    let a = C.default.getVoiceChannelId(),
      l = a !== i.id;
    l && (0, r.localAck)(t)
  }
  constructor(...e) {
    super(...e), this.actions = {
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_CREATE: this.handleStreamCreate,
      STREAM_STOP: this.handleStreamStop,
      START_BROADCAST_STREAM: this.handleStartBroadcastStream,
      CALL_CREATE: this.handleCallCreate,
      RTC_CONNECTION_STATE: this.handleRTCConnectionState,
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate
    }
  }
}
var O = new N