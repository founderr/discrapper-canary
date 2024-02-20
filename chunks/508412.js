"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var i = n("627445"),
  a = n.n(i),
  l = n("862337"),
  s = n("404118"),
  r = n("629109"),
  o = n("689988"),
  u = n("605250"),
  d = n("271938"),
  c = n("42887"),
  f = n("945956"),
  E = n("235660"),
  h = n("800762"),
  _ = n("449008"),
  C = n("700507"),
  S = n("893243"),
  g = n("76393"),
  T = n("209969"),
  m = n("201615"),
  p = n("171644"),
  I = n("353927"),
  A = n("782340");
let N = new u.default("GameConsoleManager");
async function O(e) {
  let t = f.default.getChannelId();
  a(null == t, "Syncing to remote while in voice!"), e.selfMute !== c.default.isSelfMute() && await r.default.toggleSelfMute({
    syncRemote: !1
  }), e.selfDeaf !== c.default.isSelfDeaf() && r.default.toggleSelfDeaf({
    syncRemote: !1
  })
}
class v extends o.default {
  constructor(...e) {
    super(...e), this.rollbackCommandTimeout = new l.Timeout, this.awaitRemoteTimeout = new l.Timeout, this.actions = {
      WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
      POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
      SESSIONS_REPLACE: () => this.handleSessionsChanged(),
      AUDIO_TOGGLE_SELF_DEAF: e => this.handleAudioStateToggle(e),
      AUDIO_TOGGLE_SELF_MUTE: e => this.handleAudioStateToggle(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e),
      CONSOLE_COMMAND_UPDATE: e => this.handleConsoleCommandUpdate(e),
      PASSIVE_UPDATE_V1: e => this.handleVoiceStateUpdates(e),
      REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
    }, this.maybeConnect = e => {
      let t = function(e) {
        let t = g.default.getAwaitingRemoteSessionInfo();
        return e.find(e => {
          let n = p.GAME_CONSOLE_SESSIONS.has(e.clientInfo.os),
            i = null != h.default.getVoiceStateForSession(d.default.getId(), e.sessionId),
            a = null == t || (0, T.coercePlatformTypeToConsoleType)(t.type) === e.clientInfo.os;
          return n && a && i
        })
      }(e);
      if (null == t) return null;
      this.awaitRemoteTimeout.stop(), (0, C.connectToRemote)(t.sessionId);
      let n = h.default.getVoiceStateForSession(d.default.getId(), t.sessionId);
      null != n && O(n)
    }, this.handleAudioStateToggle = e => {
      let {
        syncRemote: t,
        context: n
      } = e;
      if (!t || n !== I.MediaEngineContextTypes.DEFAULT) return;
      let i = c.default.isSelfDeaf(),
        a = c.default.isSelfMute(),
        l = d.default.getId(),
        s = g.default.getRemoteSessionId();
      if (null == s) return;
      let r = h.default.getVoiceStateForSession(l, s);
      if (null != r)(r.selfDeaf !== i || r.selfMute !== a) && ((0, C.remoteVoiceStateUpdate)(s, {
        selfDeaf: i,
        selfMute: a
      }), this.rollbackCommandTimeout.start(3e3, () => {
        O(r)
      }))
    }, this.handleVoiceStateUpdates = e => {
      var t;
      let n = null !== (t = e.voiceStates) && void 0 !== t ? t : [],
        i = g.default.getRemoteSessionId();
      if (null == i) {
        let e = n.map(e => {
          let {
            sessionId: t
          } = e;
          return null != t ? E.default.getSessionById(t) : null
        }).filter(_.isNotNullish);
        return this.maybeConnect(e)
      }
      let a = n.find(e => {
        let {
          sessionId: t
        } = e;
        return t === i
      });
      null != a && (this.rollbackCommandTimeout.stop(), O(a))
    }, this.handleSessionsChanged = () => {
      let e = g.default.getRemoteSessionId();
      null != e && null == E.default.getSessionById(e) && (0, C.disconnectRemote)(), null == e && this.maybeConnect(Object.values(E.default.getSessions()))
    }, this.handleWaitForRemoteSession = () => {
      this.awaitRemoteTimeout.start(6e4, () => {
        (0, C.disconnectRemote)(), s.default.show({
          title: A.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_TITLE,
          body: A.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_BODY
        })
      })
    }, this.handleConsoleCommandUpdate = e => {
      var t;
      let {
        id: n,
        result: i,
        error: a
      } = e;
      if ("failed" !== i && "n/a" !== i || null == a) return;
      N.info("Console command Error result:", i, a);
      let l = g.default.getAwaitingRemoteSessionInfo();
      if ((null == l ? void 0 : l.commandId) !== n) return;
      let s = g.default.getDevice(l.type, null !== (t = l.deviceId) && void 0 !== t ? t : ""),
        r = (0, m.default)(null != s ? s : {
          id: "id",
          platform: A.default.Messages.STATUS_UNKNOWN,
          name: A.default.Messages.STATUS_UNKNOWN
        }, i, a);
      null != r && S.default.showSelfDismissableAlert({
        title: r.title,
        body: r.body,
        errorCodeMessage: r.errorCodeMessage,
        reconnectPlatformType: r.isAccountLinkError ? l.type : void 0
      }), p.USER_ACTION_REQUIRED_ERROR_CODES.has(a.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(18e4, () => (0, C.disconnectRemote)(), !0) : "failed" === i && (0, C.disconnectRemote)()
    }, this.handleRemoteSessionDisconnect = () => {
      this.awaitRemoteTimeout.stop()
    }
  }
}
var R = new v