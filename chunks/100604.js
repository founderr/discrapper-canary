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
    var e, t, n, d, c, f;
    let {
      snapshotIndex: E,
      parentMessage: _,
      messageSnapshot: m
    } = this, T = (0, u.calendarFormatCompact)(m.message.timestamp), I = a.default.getChannel(null === (e = _.messageReference) || void 0 === e ? void 0 : e.channel_id), p = a.default.getChannel(this.parentMessage.channel_id);
    if (null != I && null != p && I.guild_id === p.guild_id) return i.default.can(I.accessPermissions, I) ? {
      snapshotIndex: E,
      originLabel: (0, s.computeChannelName)(I, o.default, r.default, !0),
      timestampLabel: T
    } : {
      snapshotIndex: E,
      timestampLabel: T
    };
    if ((null === (t = m.guild) || void 0 === t ? void 0 : t.name) == null) return {
      snapshotIndex: E,
      timestampLabel: T
    };
    let h = null === (n = _.messageReference) || void 0 === n ? void 0 : n.guild_id,
      N = null != h ? l.default.getGuild(h) : null;
    return {
      snapshotIndex: E,
      originLabel: null !== (c = null == N ? void 0 : N.name) && void 0 !== c ? c : null === (d = m.guild) || void 0 === d ? void 0 : d.name,
      originIconUrl: null !== (f = null == N ? void 0 : N.getIconURL(16, !1)) && void 0 !== f ? f : void 0,
      timestampLabel: T
    }
  }
  constructor(e, t, n) {
    d(this, "parentMessage", void 0), d(this, "messageSnapshot", void 0), d(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}