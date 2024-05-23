"use strict";
let a;
n.r(t), n("47120");
var s = n("735250");
n("470079");
var l = n("481060"),
  i = n("570140"),
  r = n("317770"),
  o = n("622822"),
  u = n("391650"),
  d = n("305325"),
  c = n("341298"),
  f = n("390885"),
  E = n("524329"),
  h = n("995532"),
  _ = n("486472"),
  C = n("430824"),
  m = n("914010"),
  S = n("594174"),
  p = n("823379"),
  I = n("358085"),
  g = n("929809"),
  T = n("179645"),
  A = n("701476"),
  N = n("785997"),
  v = n("981631"),
  R = n("188785"),
  O = n("630724");

function L() {
  null != a && (0, l.closeModal)(a)
}
class M extends r.default {
  _initialize() {
    i.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), i.default.subscribe("LOGOUT", L)
  }
  _terminate() {
    i.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), i.default.unsubscribe("LOGOUT", L)
  }
  handleConnectionOpen() {
    var e;
    let t, i = T.default.getType();
    if (null == i) return;
    switch (i) {
      case A.NewUserTypes.INVITE_UNCLAIMED:
        f.default.flowStart(O.FlowType.INVITE, O.RegistrationSteps.NUF_STARTED);
        break;
      case A.NewUserTypes.ORGANIC_REGISTERED:
        f.default.flowStart(O.FlowType.ORGANIC, O.RegistrationSteps.NUF_STARTED);
        break;
      case A.NewUserTypes.MARKETING_UNCLAIMED:
        f.default.flowStart(O.FlowType.ORGANIC_MARKETING, O.RegistrationSteps.NUF_STARTED)
    }
    let r = !1,
      L = m.default.getGuildId();
    if (i === A.NewUserTypes.INVITE_UNCLAIMED) {
      let e = C.default.getGuild(L);
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
              f.default.flowStep(O.FlowType.ANY, O.RegistrationSteps.AGE_GATE);
              break;
            case N.NUFSlides.CHOOSE_TEMPLATE:
              f.default.flowStep(O.FlowType.ANY, O.CreateGuildSteps.GUILD_TEMPLATES);
              break;
            case N.NUFSlides.CUSTOMIZE_GUILD:
              f.default.flowStep(O.FlowType.ANY, O.CreateGuildSteps.GUILD_CREATE);
              break;
            case N.NUFSlides.CHANNEL_PROMPT:
              f.default.flowStep(O.FlowType.ANY, O.CreateGuildSteps.CHANNEL_PROMPT);
              break;
            case N.NUFSlides.JOIN_GUILD:
              f.default.flowStep(O.FlowType.ANY, O.CreateGuildSteps.JOIN_GUILD);
              break;
            case N.NUFSlides.CREATION_INTENT:
              f.default.flowStep(O.FlowType.ANY, O.CreateGuildSteps.CREATION_INTENT);
              break;
            case N.NUFSlides.COMPLETE:
              f.default.flowStep(O.FlowType.ANY, O.CreateGuildSteps.SUCCESS);
              break;
            case null:
              break;
            default:
              p.assertNever(e)
          }
        };
        a = await (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("42483"), n.e("22458")]).then(n.bind(n, "599219"));
          return n => (0, s.jsx)(e, {
            ...n,
            onSlideChange: t
          })
        }, {
          onCloseRequest: v.NOOP,
          onCloseCallback: e,
          modalKey: a
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
      open: e => (0, d.openMemberVerificationModal)(L, null != e ? e : void 0),
      predicate: () => {
        var e;
        return r && !(null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !R.CONFERENCE_MODE_ENABLED
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("77578")]).then(n.bind(n, "184782"));
        return t => (0, s.jsx)(e, {
          ...t,
          guildId: L
        })
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != L && null != h.default.get(L) && h.default.get(L) !== h.NO_WELCOME_SCREEN
    }], t = () => {
      g.setNewUserFlowCompleted(), f.default.flowStep(O.FlowType.ANY, O.RegistrationSteps.NUF_COMPLETE, !0)
    }, [...e].reverse().forEach(e => {
      let n = t;
      t = () => {
        e.predicate() ? e.open(n) : n()
      }
    }), t()
  }
}
t.default = new M