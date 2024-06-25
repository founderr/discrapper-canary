let s;
n(47120);
var i = n(735250);
n(470079);
var l = n(481060),
  a = n(570140),
  r = n(317770),
  o = n(622822),
  c = n(391650),
  u = n(305325),
  d = n(341298),
  E = n(390885),
  h = n(524329),
  _ = n(995532),
  I = n(486472),
  m = n(430824),
  T = n(914010),
  g = n(594174),
  p = n(823379),
  N = n(358085),
  S = n(929809),
  C = n(179645),
  A = n(701476),
  f = n(785997),
  Z = n(981631),
  L = n(188785),
  O = n(630724);

function v() {
  null != s && (0, l.closeModal)(s)
}
class R extends r.Z {
  _initialize() {
    a.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.subscribe("LOGOUT", v)
  }
  _terminate() {
    a.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.unsubscribe("LOGOUT", v)
  }
  handleConnectionOpen() {
    var e;
    let t, a = C.Z.getType();
    if (null == a) return;
    switch (a) {
      case A.M5.INVITE_UNCLAIMED:
        E.Z.flowStart(O.MK.INVITE, O.EW.NUF_STARTED);
        break;
      case A.M5.ORGANIC_REGISTERED:
        E.Z.flowStart(O.MK.ORGANIC, O.EW.NUF_STARTED);
        break;
      case A.M5.MARKETING_UNCLAIMED:
        E.Z.flowStart(O.MK.ORGANIC_MARKETING, O.EW.NUF_STARTED)
    }
    let r = !1,
      v = T.Z.getGuildId();
    if (a === A.M5.INVITE_UNCLAIMED) {
      let e = m.Z.getGuild(v);
      (null == e ? void 0 : e.hasVerificationGate()) && (r = !0, (0, h.RM)(e.id))
    }
    let R = () => 0 === I.Z.totalGuilds && !N.isPlatformEmbedded,
      P = o.b();
    e = [{
      key: "Unified NUF Modal",
      open: async function e(e) {
        let t = e => {
          switch (e) {
            case f.F.AGE_GATE:
              E.Z.flowStep(O.MK.ANY, O.EW.AGE_GATE);
              break;
            case f.F.CHOOSE_TEMPLATE:
              E.Z.flowStep(O.MK.ANY, O.X2.GUILD_TEMPLATES);
              break;
            case f.F.CUSTOMIZE_GUILD:
              E.Z.flowStep(O.MK.ANY, O.X2.GUILD_CREATE);
              break;
            case f.F.CHANNEL_PROMPT:
              E.Z.flowStep(O.MK.ANY, O.X2.CHANNEL_PROMPT);
              break;
            case f.F.JOIN_GUILD:
              E.Z.flowStep(O.MK.ANY, O.X2.JOIN_GUILD);
              break;
            case f.F.CREATION_INTENT:
              E.Z.flowStep(O.MK.ANY, O.X2.CREATION_INTENT);
              break;
            case f.F.COMPLETE:
              E.Z.flowStep(O.MK.ANY, O.X2.SUCCESS);
              break;
            case null:
              break;
            default:
              p.vE(e)
          }
        };
        s = await (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("42483"), n.e("22458")]).then(n.bind(n, 599219));
          return n => (0, i.jsx)(e, {
            ...n,
            onSlideChange: t
          })
        }, {
          onCloseRequest: Z.dG4,
          onCloseCallback: e,
          modalKey: s
        })
      },
      predicate: () => R() && !L.a
    }, {
      key: "New User Age Gate",
      open: c.i,
      predicate: () => P && !R() && !L.a
    }, {
      key: "Claim Account Modal",
      open: e => c.j(N.isPlatformEmbedded, e),
      predicate: () => {
        var e;
        return !r && null != g.default.getCurrentUser() && !(null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !L.a && !(0, d.g)("new_user_manager")
      }
    }, {
      key: "Verification Gate with Claim Account",
      open: e => (0, u.hk)(v, null != e ? e : void 0),
      predicate: () => {
        var e;
        return r && !(null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !L.a
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("77578")]).then(n.bind(n, 184782));
        return t => (0, i.jsx)(e, {
          ...t,
          guildId: v
        })
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != v && null != _.Z.get(v) && _.Z.get(v) !== _.a
    }], t = () => {
      S.H(), E.Z.flowStep(O.MK.ANY, O.EW.NUF_COMPLETE, !0)
    }, [...e].reverse().forEach(e => {
      let n = t;
      t = () => {
        e.predicate() ? e.open(n) : n()
      }
    }), t()
  }
}
t.Z = new R