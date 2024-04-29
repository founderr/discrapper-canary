"use strict";
let n;
a.r(t), a("47120");
var s = a("735250");
a("470079");
var l = a("481060"),
  i = a("570140"),
  r = a("317770"),
  o = a("622822"),
  u = a("391650"),
  d = a("305325"),
  c = a("341298"),
  f = a("390885"),
  E = a("524329"),
  h = a("995532"),
  _ = a("486472"),
  C = a("430824"),
  m = a("914010"),
  S = a("594174"),
  p = a("823379"),
  I = a("358085"),
  T = a("929809"),
  g = a("179645"),
  A = a("701476"),
  N = a("785997"),
  v = a("981631"),
  R = a("188785"),
  L = a("630724");

function O() {
  null != n && (0, l.closeModal)(n)
}
class M extends r.default {
  _initialize() {
    i.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), i.default.subscribe("LOGOUT", O)
  }
  _terminate() {
    i.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), i.default.unsubscribe("LOGOUT", O)
  }
  handleConnectionOpen() {
    var e;
    let t, i = g.default.getType();
    if (null == i) return;
    switch (i) {
      case A.NewUserTypes.INVITE_UNCLAIMED:
        f.default.flowStart(L.FlowType.INVITE, L.RegistrationSteps.NUF_STARTED);
        break;
      case A.NewUserTypes.ORGANIC_REGISTERED:
        f.default.flowStart(L.FlowType.ORGANIC, L.RegistrationSteps.NUF_STARTED);
        break;
      case A.NewUserTypes.MARKETING_UNCLAIMED:
        f.default.flowStart(L.FlowType.ORGANIC_MARKETING, L.RegistrationSteps.NUF_STARTED)
    }
    let r = !1,
      O = m.default.getGuildId();
    if (i === A.NewUserTypes.INVITE_UNCLAIMED) {
      let e = C.default.getGuild(O);
      (null == e ? void 0 : e.hasVerificationGate()) && (r = !0, (0, E.fetchWelcomeScreen)(e.id))
    }
    let M = () => 0 === _.default.totalGuilds && !I.isPlatformEmbedded,
      P = o.userNeedsAgeGate();
    e = [{
      key: "Unified NUF Modal",
      open: async function e(e) {
        let t = e => {
          switch (e) {
            case N.NUFSlides.AGE_GATE:
              f.default.flowStep(L.FlowType.ANY, L.RegistrationSteps.AGE_GATE);
              break;
            case N.NUFSlides.CHOOSE_TEMPLATE:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.GUILD_TEMPLATES);
              break;
            case N.NUFSlides.CUSTOMIZE_GUILD:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.GUILD_CREATE);
              break;
            case N.NUFSlides.CHANNEL_PROMPT:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.CHANNEL_PROMPT);
              break;
            case N.NUFSlides.JOIN_GUILD:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.JOIN_GUILD);
              break;
            case N.NUFSlides.CREATION_INTENT:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.CREATION_INTENT);
              break;
            case N.NUFSlides.COMPLETE:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.SUCCESS);
              break;
            case null:
              break;
            default:
              p.assertNever(e)
          }
        };
        n = await (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("96427"), a.e("42483"), a.e("22458")]).then(a.bind(a, "599219"));
          return a => (0, s.jsx)(e, {
            ...a,
            onSlideChange: t
          })
        }, {
          onCloseRequest: v.NOOP,
          onCloseCallback: e,
          modalKey: n
        })
      },
      predicate: () => M() && !R.CONFERENCE_MODE_ENABLED
    }, {
      key: "New User Age Gate",
      open: u.openNewUserAgeGateModal,
      predicate: () => P && !M() && !R.CONFERENCE_MODE_ENABLED
    }, {
      key: "Claim Account Modal",
      open: e => u.openClaimAccountModal(I.isPlatformEmbedded, e),
      predicate: () => {
        var e;
        return !r && null != S.default.getCurrentUser() && !(null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !R.CONFERENCE_MODE_ENABLED && !(0, c.isMidjourneyOnboardingFlow)("new_user_manager")
      }
    }, {
      key: "Verification Gate with Claim Account",
      open: e => (0, d.openMemberVerificationModal)(O, null != e ? e : void 0),
      predicate: () => {
        var e;
        return r && !(null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !R.CONFERENCE_MODE_ENABLED
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("77578")]).then(a.bind(a, "184782"));
        return t => (0, s.jsx)(e, {
          ...t,
          guildId: O
        })
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != O && null != h.default.get(O) && h.default.get(O) !== h.NO_WELCOME_SCREEN
    }], t = () => {
      T.setNewUserFlowCompleted(), f.default.flowStep(L.FlowType.ANY, L.RegistrationSteps.NUF_COMPLETE, !0)
    }, [...e].reverse().forEach(e => {
      let a = t;
      t = () => {
        e.predicate() ? e.open(a) : a()
      }
    }), t()
  }
}
t.default = new M