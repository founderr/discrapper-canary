let i;
n(47120);
var s = n(735250);
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
  g = n(914010),
  p = n(594174),
  N = n(823379),
  T = n(358085),
  C = n(929809),
  S = n(179645),
  A = n(701476),
  f = n(785997),
  Z = n(981631),
  v = n(188785),
  L = n(630724);

function O() {
  null != i && (0, l.closeModal)(i)
}
class R extends r.Z {
  _initialize() {
    a.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.subscribe("LOGOUT", O)
  }
  _terminate() {
    a.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.unsubscribe("LOGOUT", O)
  }
  handleConnectionOpen() {
    var e;
    let t, a = S.Z.getType();
    if (null == a) return;
    switch (a) {
      case A.M5.INVITE_UNCLAIMED:
        E.Z.flowStart(L.MK.INVITE, L.EW.NUF_STARTED);
        break;
      case A.M5.ORGANIC_REGISTERED:
        E.Z.flowStart(L.MK.ORGANIC, L.EW.NUF_STARTED);
        break;
      case A.M5.MARKETING_UNCLAIMED:
        E.Z.flowStart(L.MK.ORGANIC_MARKETING, L.EW.NUF_STARTED)
    }
    let r = !1,
      O = g.Z.getGuildId();
    if (a === A.M5.INVITE_UNCLAIMED) {
      let e = m.Z.getGuild(O);
      (null == e ? void 0 : e.hasVerificationGate()) && (r = !0, (0, h.RM)(e.id))
    }
    let R = () => 0 === I.Z.totalGuilds && !T.isPlatformEmbedded,
      x = o.b();
    e = [{
      key: "Unified NUF Modal",
      open: async function e(e) {
        let t = e => {
          switch (e) {
            case f.F.AGE_GATE:
              E.Z.flowStep(L.MK.ANY, L.EW.AGE_GATE);
              break;
            case f.F.CHOOSE_TEMPLATE:
              E.Z.flowStep(L.MK.ANY, L.X2.GUILD_TEMPLATES);
              break;
            case f.F.CUSTOMIZE_GUILD:
              E.Z.flowStep(L.MK.ANY, L.X2.GUILD_CREATE);
              break;
            case f.F.CHANNEL_PROMPT:
              E.Z.flowStep(L.MK.ANY, L.X2.CHANNEL_PROMPT);
              break;
            case f.F.JOIN_GUILD:
              E.Z.flowStep(L.MK.ANY, L.X2.JOIN_GUILD);
              break;
            case f.F.CREATION_INTENT:
              E.Z.flowStep(L.MK.ANY, L.X2.CREATION_INTENT);
              break;
            case f.F.COMPLETE:
              E.Z.flowStep(L.MK.ANY, L.X2.SUCCESS);
              break;
            case null:
              break;
            default:
              N.vE(e)
          }
        };
        i = await (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("42483"), n.e("22458")]).then(n.bind(n, 599219));
          return n => (0, s.jsx)(e, {
            ...n,
            onSlideChange: t
          })
        }, {
          onCloseRequest: Z.dG4,
          onCloseCallback: e,
          modalKey: i
        })
      },
      predicate: () => R() && !v.a
    }, {
      key: "New User Age Gate",
      open: c.i,
      predicate: () => x && !R() && !v.a
    }, {
      key: "Claim Account Modal",
      open: e => c.j(T.isPlatformEmbedded, e),
      predicate: () => {
        var e;
        return !r && null != p.default.getCurrentUser() && !(null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !v.a && !(0, d.g)("new_user_manager")
      }
    }, {
      key: "Verification Gate with Claim Account",
      open: e => (0, u.hk)(O, null != e ? e : void 0),
      predicate: () => {
        var e;
        return r && !(null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !v.a
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("77578")]).then(n.bind(n, 184782));
        return t => (0, s.jsx)(e, {
          ...t,
          guildId: O
        })
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != O && null != _.Z.get(O) && _.Z.get(O) !== _.a
    }], t = () => {
      C.H(), E.Z.flowStep(L.MK.ANY, L.EW.NUF_COMPLETE, !0)
    }, [...e].reverse().forEach(e => {
      let n = t;
      t = () => {
        e.predicate() ? e.open(n) : n()
      }
    }), t()
  }
}
t.Z = new R