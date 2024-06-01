"use strict";
n.r(t), n.d(t, {
  MessageForward: function() {
    return E
  }
});
var s = n("933557"),
  a = n("592125"),
  l = n("430824"),
  i = n("496675"),
  r = n("699516"),
  o = n("594174"),
  u = n("55935"),
  d = n("689938");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E {
  getForwardInfo() {
    var e, t, n, c, E, f;
    let {
      snapshotIndex: _,
      parentMessage: T,
      messageSnapshot: m
    } = this, I = (0, u.calendarFormatCompact)(m.message.timestamp), N = a.default.getChannel(null === (e = T.messageReference) || void 0 === e ? void 0 : e.channel_id), p = a.default.getChannel(this.parentMessage.channel_id);
    if (null != N && null != p && N.guild_id === p.guild_id) {
      if (!i.default.can(N.accessPermissions, N)) return {
        snapshotIndex: _
      };
      let e = (0, s.computeChannelName)(N, o.default, r.default, !0);
      return {
        snapshotIndex: _,
        originLabel: e,
        timestampLabel: I,
        accessibilityLabel: d.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
          origin: e,
          timestamp: I
        })
      }
    }
    if ((null === (t = m.guild) || void 0 === t ? void 0 : t.name) == null) return {
      snapshotIndex: _
    };
    let S = null === (n = T.messageReference) || void 0 === n ? void 0 : n.guild_id,
      C = null != S ? l.default.getGuild(S) : null,
      A = null !== (E = null == C ? void 0 : C.name) && void 0 !== E ? E : null === (c = m.guild) || void 0 === c ? void 0 : c.name;
    return {
      snapshotIndex: _,
      originLabel: A,
      originIconUrl: null !== (f = null == C ? void 0 : C.getIconURL(16, !1)) && void 0 !== f ? f : void 0,
      timestampLabel: I,
      accessibilityLabel: d.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
        origin: A,
        timestamp: I
      })
    }
  }
  constructor(e, t, n) {
    c(this, "parentMessage", void 0), c(this, "messageSnapshot", void 0), c(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}