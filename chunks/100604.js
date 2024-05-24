"use strict";
n.r(t), n.d(t, {
  MessageForward: function() {
    return c
  }
});
var s = n("933557"),
  a = n("592125"),
  l = n("430824"),
  i = n("496675"),
  r = n("699516"),
  o = n("594174"),
  u = n("55935");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c {
  getForwardInfo() {
    var e, t, n, d, c;
    let {
      snapshotIndex: f,
      parentMessage: E,
      messageSnapshot: _
    } = this, m = (0, u.calendarFormatCompact)(_.message.timestamp), T = a.default.getChannel(_.message.channel_id), I = a.default.getChannel(this.parentMessage.channel_id);
    if (null != T && null != I && T.guild_id === I.guild_id) return i.default.can(T.accessPermissions, T) ? {
      snapshotIndex: f,
      originLabel: (0, s.computeChannelName)(T, o.default, r.default, !0),
      timestampLabel: m
    } : {
      snapshotIndex: f,
      timestampLabel: m
    };
    if ((null === (e = _.guild) || void 0 === e ? void 0 : e.name) == null) return {
      snapshotIndex: f,
      timestampLabel: m
    };
    let p = null === (t = E.messageReference) || void 0 === t ? void 0 : t.guild_id,
      h = null != p ? l.default.getGuild(p) : null;
    return {
      snapshotIndex: f,
      originLabel: null !== (d = null == h ? void 0 : h.name) && void 0 !== d ? d : null === (n = _.guild) || void 0 === n ? void 0 : n.name,
      originIconUrl: null !== (c = null == h ? void 0 : h.getIconURL(16, !1)) && void 0 !== c ? c : void 0,
      timestampLabel: m
    }
  }
  constructor(e, t, n) {
    d(this, "parentMessage", void 0), d(this, "messageSnapshot", void 0), d(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}