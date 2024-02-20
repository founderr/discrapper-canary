"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("862337"),
  a = n("819689"),
  l = n("987317"),
  s = n("689988"),
  r = n("191225"),
  o = n("42203"),
  u = n("101125"),
  d = n("800762"),
  c = n("316133"),
  f = n("782340");
let E = 18e4;

function h() {
  let e = d.default.getCurrentClientVoiceChannelId(null);
  if (null == e) return !1;
  let t = o.default.getChannel(e);
  if (null == t || !t.isPrivate()) return !1;
  let n = t.recipients.length;
  if (n > 1) return !1;
  let i = c.default.countVoiceStatesForChannel(e);
  if (i > 1) return !1;
  let a = r.default.getSelfEmbeddedActivityForChannel(e);
  if (null != a) return !1;
  let l = null != u.default.getBroadcast();
  return !l && !0
}

function _() {
  if (!h()) return;
  let e = d.default.getCurrentClientVoiceChannelId(null);
  null != e && (a.default.sendBotMessage(e, f.default.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({
    number: 3
  })), l.default.selectVoiceChannel(null))
}
class C extends s.default {
  constructor(...e) {
    super(...e), this.idleTimeout = new i.Timeout, this.handleConnectionClosed = () => {
      this.idleTimeout.stop()
    }, this.handleEmbeddedActivityDisconnect = () => {
      h() && this.idleTimeout.start(E, _, !0)
    }, this.handleVoiceStateUpdates = () => {
      if (!h()) {
        this.idleTimeout.stop();
        return
      }
      this.idleTimeout.start(E, _, !1)
    }, this.actions = {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      CONNECTION_CLOSED: this.handleConnectionClosed,
      EMBEDDED_ACTIVITY_DISCONNECT: this.handleEmbeddedActivityDisconnect
    }
  }
}
var S = new C