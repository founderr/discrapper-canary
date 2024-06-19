n.d(t, {
  r: function() {
    return T
  }
});
var s = n(933557),
  i = n(356264),
  l = n(592125),
  a = n(430824),
  r = n(496675),
  o = n(699516),
  c = n(594174),
  u = n(768581),
  d = n(55935);
n(978003);
var E = n(689938);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function I(e, t) {
  return {
    originLabel: e.name,
    originIconUrl: u.ZP.getGuildIconURL({
      id: e.id,
      size: 16,
      icon: e.icon,
      canAnimate: !1
    }),
    timestampLabel: t,
    accessibilityLabel: E.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
      origin: e.name,
      timestamp: t
    })
  }
}
class T {
  getForwardInfo() {
    var e, t, n, u, _;
    let T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z,
      N = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
      m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
      h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Z,
      C = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.Z,
      S = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
      {
        snapshotIndex: A,
        parentMessage: p,
        messageSnapshot: g
      } = this,
      f = (0, d.Xf)(g.message.timestamp),
      O = T.getChannel(this.parentMessage.channel_id);
    if (null != O && O.guild_id === (null === (e = p.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
      let e = T.getChannel(null === (u = p.messageReference) || void 0 === u ? void 0 : u.channel_id);
      if (null == e) {
        let e = C.getGuild(O.guild_id);
        return null == e ? {
          snapshotIndex: A
        } : {
          snapshotIndex: A,
          footerInfo: I(e, f)
        }
      }
      if (!h.can(e.accessPermissions, e)) return {
        snapshotIndex: A
      };
      let t = (0, s.F6)(e, N, m, !0);
      return {
        snapshotIndex: A,
        footerInfo: {
          originLabel: t,
          timestampLabel: f,
          accessibilityLabel: E.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: t,
            timestamp: f
          })
        }
      }
    }
    let R = null === (t = p.messageReference) || void 0 === t ? void 0 : t.guild_id;
    if (null == R) return {
      snapshotIndex: A
    };
    let M = null !== (_ = C.getGuild(R)) && void 0 !== _ ? _ : S.getGuild(R);
    if (null == M) return {
      snapshotIndex: A
    };
    let x = T.getChannel(null === (n = p.messageReference) || void 0 === n ? void 0 : n.channel_id);
    return null == x || h.can(x.accessPermissions, x) ? {
      snapshotIndex: A,
      footerInfo: I(M, f)
    } : {
      snapshotIndex: A
    }
  }
  constructor(e, t, n) {
    _(this, "parentMessage", void 0), _(this, "messageSnapshot", void 0), _(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}