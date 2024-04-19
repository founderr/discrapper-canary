"use strict";
a.r(t), a("47120"), a("653041");
var n = a("846519"),
  s = a("570140"),
  l = a("317770"),
  i = a("220082"),
  r = a("594174"),
  o = a("125268"),
  u = a("813900");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class c extends l.default {
  _initialize() {
    !__OVERLAY__ && (s.default.subscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), s.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived))
  }
  _terminate() {
    !__OVERLAY__ && (s.default.unsubscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), s.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop())
  }
  _handleVoiceChannelEffectReceived(e) {
    var t;
    let {
      lineId: a,
      points: n,
      userId: s,
      streamerId: l,
      emojiHose: d
    } = e;
    if (null != l && s !== (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
      if (null != n && null != a) {
        let e = r.default.getUser(s);
        null != e && (0, i.maybeFetchColors)(e.getAvatarURL(null, u.AVATAR_COLOR_AVATAR_SIZE)), (0, o.updateLinePoints)(a, s, l, n)
      } else null != d && (d.lastUpdatedAt = Date.now(), (0, o.updateEmojiHose)(d, s, l))
    }
  }
  constructor(...e) {
    super(...e), d(this, "linesToUpdate", {}), d(this, "lineBatchTimer", new n.Interval), d(this, "_handleDrawLinePoint", e => {
      let {
        channelId: t,
        lineId: a,
        streamerId: n,
        point: s
      } = e;
      null == this.linesToUpdate[a] ? this.linesToUpdate[a] = {
        channelId: t,
        streamerId: n,
        points: [s]
      } : this.linesToUpdate[a].points.push(s), null == this.lineBatchTimer._ref && this.lineBatchTimer.start(u.EVENT_TICK_RATE, this.sendLineBatch)
    }), d(this, "sendLineBatch", () => {
      for (let e in this.linesToUpdate) {
        let {
          channelId: t,
          points: a,
          streamerId: n
        } = this.linesToUpdate[e];
        (0, o.addLinePoints)(t, e, n, a)
      }
      this.linesToUpdate = {}, this.lineBatchTimer.stop()
    })
  }
}
t.default = new c