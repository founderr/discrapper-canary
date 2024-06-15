"use strict";
n.r(t), n.d(t, {
  MessageForward: function() {
    return m
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

function _(e, t) {
  return {
    originLabel: e.name,
    originIconUrl: d.default.getGuildIconURL({
      id: e.id,
      size: 16,
      icon: e.icon,
      canAnimate: !1
    }),
    timestampLabel: t,
    accessibilityLabel: f.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
      origin: e.name,
      timestamp: t
    })
  }
}
class m {
  getForwardInfo() {
    var e, t, n, d, E, m;
    let T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default,
      I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
      p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
      h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
      N = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.default,
      S = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : a.default,
      {
        snapshotIndex: C,
        parentMessage: g,
        messageSnapshot: A
      } = this,
      M = (0, c.calendarFormatCompact)(A.message.timestamp),
      R = T.getChannel(this.parentMessage.channel_id);
    if (null != R && R.guild_id === (null === (e = g.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
      let e = T.getChannel(null === (E = g.messageReference) || void 0 === E ? void 0 : E.channel_id);
      if (null == e) {
        let e = N.getGuild(R.guild_id);
        return null == e ? {
          snapshotIndex: C
        } : {
          snapshotIndex: C,
          footerInfo: _(e, M)
        }
      }
      if (!h.can(e.accessPermissions, e)) return {
        snapshotIndex: C
      };
      let t = (0, s.computeChannelName)(e, I, p, !0);
      return {
        snapshotIndex: C,
        footerInfo: {
          originLabel: t,
          timestampLabel: M,
          accessibilityLabel: f.default.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: t,
            timestamp: M
          })
        }
      }
    }
    let v = null === (t = A.guild) || void 0 === t ? void 0 : t.id;
    if (null != v) {
      let e = null !== (m = N.getGuild(v)) && void 0 !== m ? m : S.getGuild(v);
      return null == e ? {
        snapshotIndex: C
      } : {
        snapshotIndex: C,
        footerInfo: _(e, M)
      }
    }
    let O = null === (n = g.messageReference) || void 0 === n ? void 0 : n.guild_id;
    if (null == O) return {
      snapshotIndex: C
    };
    let x = N.getGuild(O);
    if (null == x) return {
      snapshotIndex: C
    };
    let L = T.getChannel(null === (d = g.messageReference) || void 0 === d ? void 0 : d.channel_id);
    return null == L || h.can(L.accessPermissions, L) ? {
      snapshotIndex: C,
      footerInfo: _(x, M)
    } : {
      snapshotIndex: C
    }
  }
  constructor(e, t, n) {
    E(this, "parentMessage", void 0), E(this, "messageSnapshot", void 0), E(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}