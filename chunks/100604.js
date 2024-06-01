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
    var e, t, n, d, c, E;
    let {
      snapshotIndex: f,
      parentMessage: _,
      messageSnapshot: T
    } = this, m = (0, u.calendarFormatCompact)(T.message.timestamp), I = a.default.getChannel(null === (e = _.messageReference) || void 0 === e ? void 0 : e.channel_id), N = a.default.getChannel(this.parentMessage.channel_id);
    if (null != I && null != N && I.guild_id === N.guild_id) return i.default.can(I.accessPermissions, I) ? {
      snapshotIndex: f,
      originLabel: (0, s.computeChannelName)(I, o.default, r.default, !0),
      timestampLabel: m
    } : {
      snapshotIndex: f,
      timestampLabel: m
    };
    if ((null === (t = T.guild) || void 0 === t ? void 0 : t.name) == null) return {
      snapshotIndex: f,
      timestampLabel: m
    };
    let p = null === (n = _.messageReference) || void 0 === n ? void 0 : n.guild_id,
      S = null != p ? l.default.getGuild(p) : null;
    return {
      snapshotIndex: f,
      originLabel: null !== (c = null == S ? void 0 : S.name) && void 0 !== c ? c : null === (d = T.guild) || void 0 === d ? void 0 : d.name,
      originIconUrl: null !== (E = null == S ? void 0 : S.getIconURL(16, !1)) && void 0 !== E ? E : void 0,
      timestampLabel: m
    }
  }
  constructor(e, t, n) {
    d(this, "parentMessage", void 0), d(this, "messageSnapshot", void 0), d(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}