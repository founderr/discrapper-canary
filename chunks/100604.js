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
    var e, t, n;
    let {
      snapshotIndex: c,
      parentMessage: f,
      messageSnapshot: E
    } = this, _ = (0, u.calendarFormatCompact)(E.message.timestamp), m = a.default.getChannel(null === (e = f.messageReference) || void 0 === e ? void 0 : e.channel_id), T = a.default.getChannel(this.parentMessage.channel_id);
    if (null != m && null != T && m.guild_id === T.guild_id) {
      if (!i.default.can(m.accessPermissions, m)) return {
        snapshotIndex: c
      };
      let e = (0, s.computeChannelName)(m, o.default, r.default, !0);
      return {
        snapshotIndex: c,
        footerInfo: {
          originLabel: e,
          timestampLabel: _,
          accessibilityLabel: d.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: e,
            timestamp: _
          })
        }
      }
    }
    let I = null === (t = E.guild) || void 0 === t ? void 0 : t.id;
    if (null == I) return {
      snapshotIndex: c
    };
    let p = l.default.getGuild(I);
    return null == p ? {
      snapshotIndex: c
    } : {
      snapshotIndex: c,
      footerInfo: {
        originLabel: p.name,
        originIconUrl: null !== (n = p.getIconURL(16, !1)) && void 0 !== n ? n : void 0,
        timestampLabel: _,
        accessibilityLabel: d.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
          origin: p.name,
          timestamp: _
        })
      }
    }
  }
  constructor(e, t, n) {
    c(this, "parentMessage", void 0), c(this, "messageSnapshot", void 0), c(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}