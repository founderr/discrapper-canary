n.d(t, {
  r: function() {
    return m
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
  d = n(55935),
  E = n(631184);
n(978003);
var _ = n(689938);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e, t) {
  return {
    originLabel: e.name,
    originIconUrl: u.ZP.getGuildIconURL({
      id: e.id,
      size: 16,
      icon: e.icon,
      canAnimate: !1
    }),
    timestampLabel: t,
    accessibilityLabel: _.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
      origin: e.name,
      timestamp: t
    })
  }
}
class m {
  getForwardInfo() {
    var e, t, n, u, I;
    let m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z,
      N = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
      h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
      C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Z,
      S = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.Z,
      A = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
      {
        snapshotIndex: g,
        parentMessage: p,
        messageSnapshot: f
      } = this,
      {
        showForwardBreadcrumb: R
      } = E.u.getCurrentConfig({
        location: "MessageForward"
      });
    if (!R) return {
      snapshotIndex: g
    };
    let O = (0, d.Xf)(f.message.timestamp),
      M = m.getChannel(this.parentMessage.channel_id);
    if (null != M && M.guild_id === (null === (e = p.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
      let e = m.getChannel(null === (u = p.messageReference) || void 0 === u ? void 0 : u.channel_id);
      if (null == e) {
        let e = S.getGuild(M.guild_id);
        return null == e ? {
          snapshotIndex: g
        } : {
          snapshotIndex: g,
          footerInfo: T(e, O)
        }
      }
      if (!C.can(e.accessPermissions, e)) return {
        snapshotIndex: g
      };
      let t = (0, s.F6)(e, N, h, !0);
      return {
        snapshotIndex: g,
        footerInfo: {
          originLabel: t,
          timestampLabel: O,
          accessibilityLabel: _.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: t,
            timestamp: O
          })
        }
      }
    }
    let x = null === (t = p.messageReference) || void 0 === t ? void 0 : t.guild_id;
    if (null == x) return {
      snapshotIndex: g
    };
    let v = null !== (I = S.getGuild(x)) && void 0 !== I ? I : A.getGuild(x);
    if (null == v) return {
      snapshotIndex: g
    };
    let L = m.getChannel(null === (n = p.messageReference) || void 0 === n ? void 0 : n.channel_id);
    return null == L || C.can(L.accessPermissions, L) ? {
      snapshotIndex: g,
      footerInfo: T(v, O)
    } : {
      snapshotIndex: g
    }
  }
  constructor(e, t, n) {
    I(this, "parentMessage", void 0), I(this, "messageSnapshot", void 0), I(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}