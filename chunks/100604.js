"use strict";
n.r(t), n.d(t, {
  MessageForward: function() {
    return _
  }
});
var s = n("933557"),
  a = n("356264"),
  l = n("592125"),
  i = n("430824"),
  r = n("496675"),
  o = n("699516"),
  u = n("594174"),
  d = n("768581"),
  c = n("55935");
n("978003");
var f = n("689938");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ {
  getForwardInfo() {
    var e, t, n;
    let E = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default,
      _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
      m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
      T = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
      I = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.default,
      h = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : a.default,
      {
        snapshotIndex: p,
        parentMessage: N,
        messageSnapshot: S
      } = this,
      C = (0, c.calendarFormatCompact)(S.message.timestamp),
      g = E.getChannel(null === (e = N.messageReference) || void 0 === e ? void 0 : e.channel_id),
      A = E.getChannel(this.parentMessage.channel_id);
    if (null != g && null != A && g.guild_id === A.guild_id) {
      if (!T.can(g.accessPermissions, g)) return {
        snapshotIndex: p
      };
      let e = (0, s.computeChannelName)(g, _, m, !0);
      return {
        snapshotIndex: p,
        footerInfo: {
          originLabel: e,
          timestampLabel: C,
          accessibilityLabel: f.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: e,
            timestamp: C
          })
        }
      }
    }
    let M = null === (t = S.guild) || void 0 === t ? void 0 : t.id;
    if (null == M) return {
      snapshotIndex: p
    };
    let R = null !== (n = I.getGuild(M)) && void 0 !== n ? n : h.getGuild(M);
    return null == R ? {
      snapshotIndex: p
    } : {
      snapshotIndex: p,
      footerInfo: {
        originLabel: R.name,
        originIconUrl: d.default.getGuildIconURL({
          id: M,
          size: 16,
          icon: R.icon,
          canAnimate: !1
        }),
        timestampLabel: C,
        accessibilityLabel: f.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
          origin: R.name,
          timestamp: C
        })
      }
    }
  }
  constructor(e, t, n) {
    E(this, "parentMessage", void 0), E(this, "messageSnapshot", void 0), E(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}