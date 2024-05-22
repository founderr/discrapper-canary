"use strict";
n.r(t), n.d(t, {
  MessageForward: function() {
    return d
  }
});
var s = n("933557"),
  a = n("592125"),
  l = n("430824"),
  i = n("699516"),
  r = n("594174"),
  o = n("55935");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d {
  getForwardInfo() {
    var e, t, n, u;
    let {
      snapshotIndex: d,
      parentMessage: c,
      messageSnapshot: f
    } = this, E = (0, o.calendarFormatCompact)(f.message.timestamp), _ = a.default.getChannel(f.message.channel_id), m = a.default.getChannel(this.parentMessage.channel_id);
    if (null != _ && null != m && _.guild_id === m.guild_id) return {
      snapshotIndex: d,
      originLabel: (0, s.computeChannelName)(_, r.default, i.default, !0),
      timestampLabel: E
    };
    let T = null === (e = c.messageReference) || void 0 === e ? void 0 : e.guild_id,
      I = null != T ? l.default.getGuild(T) : null,
      p = null !== (n = null == I ? void 0 : I.name) && void 0 !== n ? n : null === (t = f.guild) || void 0 === t ? void 0 : t.name;
    return null != p ? {
      snapshotIndex: d,
      originLabel: p,
      originIconUrl: null !== (u = null == I ? void 0 : I.getIconURL(16, !1)) && void 0 !== u ? u : void 0,
      timestampLabel: E
    } : {
      snapshotIndex: d,
      timestampLabel: E
    }
  }
  constructor(e, t, n) {
    u(this, "parentMessage", void 0), u(this, "messageSnapshot", void 0), u(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}