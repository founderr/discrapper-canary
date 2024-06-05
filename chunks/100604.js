"use strict";
n.r(t), n.d(t, {
  MessageForward: function() {
    return f
  }
});
var s = n("933557"),
  a = n("592125"),
  l = n("430824"),
  i = n("496675"),
  r = n("699516"),
  o = n("594174"),
  u = n("55935");
n("978003");
var d = n("689938");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f {
  getForwardInfo() {
    var e, t, n, c, f, E;
    let {
      snapshotIndex: _,
      parentMessage: m,
      messageSnapshot: T
    } = this, I = (0, u.calendarFormatCompact)(T.message.timestamp), p = a.default.getChannel(null === (e = m.messageReference) || void 0 === e ? void 0 : e.channel_id), h = a.default.getChannel(this.parentMessage.channel_id);
    if (null != p && null != h && p.guild_id === h.guild_id) {
      if (!i.default.can(p.accessPermissions, p)) return {
        snapshotIndex: _
      };
      let e = (0, s.computeChannelName)(p, o.default, r.default, !0);
      return {
        snapshotIndex: _,
        footerInfo: {
          originLabel: e,
          timestampLabel: I,
          accessibilityLabel: d.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: e,
            timestamp: I
          })
        }
      }
    }
    if ((null === (t = T.guild) || void 0 === t ? void 0 : t.name) == null) return {
      snapshotIndex: _
    };
    let N = null === (n = m.messageReference) || void 0 === n ? void 0 : n.guild_id,
      S = null != N ? l.default.getGuild(N) : null,
      C = null !== (f = null == S ? void 0 : S.name) && void 0 !== f ? f : null === (c = T.guild) || void 0 === c ? void 0 : c.name;
    return {
      snapshotIndex: _,
      footerInfo: {
        originLabel: C,
        originIconUrl: null !== (E = null == S ? void 0 : S.getIconURL(16, !1)) && void 0 !== E ? E : void 0,
        timestampLabel: I,
        accessibilityLabel: d.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
          origin: C,
          timestamp: I
        })
      }
    }
  }
  constructor(e, t, n) {
    c(this, "parentMessage", void 0), c(this, "messageSnapshot", void 0), c(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}