let l;
n(47120), n(653041);
var i, s, r, a, o = n(442837),
  u = n(570140),
  c = n(413605),
  d = n(703656),
  h = n(131704),
  g = n(601964),
  p = n(592125),
  m = n(430824),
  C = n(701190),
  E = n(496675),
  f = n(594174),
  _ = n(998502),
  I = n(981631),
  N = n(176505);
let Z = I.IlC.APP,
  S = !1,
  x = !1,
  T = [];

function L() {
  S = !0
}
class v extends(i = o.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, C.Z, f.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? I.IlC.OVERLAY : I.IlC.APP;
    return !!(S && T.length > 0 && Z === e)
  }
  getProps() {
    return {
      invite: T.length > 0 ? T[0][0] : null,
      error: null != l && "" !== l ? l : null,
      submitting: x
    }
  }
}
a = "InviteModalStore", (r = "displayName") in(s = v) ? Object.defineProperty(s, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = a, t.Z = new v(u.Z, {
  OVERLAY_INITIALIZE: L,
  CONNECTION_OPEN: L,
  CONNECTION_CLOSED: function() {
    S = !1
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) return !1;
    if (!(t.state === I.r2o.EXPIRED || t.state === I.r2o.BANNED || t.state === I.r2o.ERROR)) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) return !1;
      if ((0, h.bc)(e.type)) {
        if (null != p.Z.getChannel(e.id)) return (0, d.XU)(I.ME, e.id), _.ZP.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != m.Z.getGuild(n.id) && !(0, c.TY)(t)) {
          let e = function(e) {
            if ((0, c.W6)(e)) return N.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = p.Z.getChannel(t.id);
              if (E.Z.can(I.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, d.XU)(n.id, e), _.ZP.focus(), !1
        }
      }
    }
    if (T.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    Z = e.context, x = !1;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: l,
        state: i,
        target_type: s,
        target_user: r,
        target_application: a,
        stage_instance: o,
        type: u,
        channel: c,
        guild: d
      } = e, h = {
        code: l,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: s,
        target_user: r,
        target_application: a,
        stage_instance: o,
        type: u
      };
      return null != c && (h.channel = {
        ...c
      }), null != d && (h.guild = new g.ZP(d)), null != e.inviter && (h.inviter = {
        ...e.inviter
      }), h
    }(t);
    T.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (l = null, x = !1, T.length > 0) {
      let [, e] = T.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    x = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    l = t, x = !1
  }
})