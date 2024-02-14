"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var s = n("37983");
n("884691");
var l = n("77078"),
  i = n("913144"),
  r = n("316272"),
  o = n("19009"),
  u = n("774146"),
  d = n("233322"),
  c = n("894887"),
  f = n("42963"),
  E = n("223170"),
  h = n("59811"),
  _ = n("341542"),
  C = n("305961"),
  I = n("162771"),
  S = n("697218"),
  p = n("449008"),
  m = n("773336"),
  T = n("165926"),
  g = n("527441"),
  A = n("56235"),
  N = n("218971"),
  R = n("49111"),
  v = n("492397"),
  O = n("149806");

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
    let t, i = g.default.getType();
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
      L = I.default.getGuildId();
    if (i === A.NewUserTypes.INVITE_UNCLAIMED) {
      let e = C.default.getGuild(L);
      (null == e ? void 0 : e.hasVerificationGate()) && (r = !0, (0, E.fetchWelcomeScreen)(e.id))
    }
    let M = () => 0 === _.default.totalGuilds && !m.isPlatformEmbedded,
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
          } = await n.el("439431").then(n.bind(n, "439431"));
          return n => (0, s.jsx)(e, {
            ...n,
            onSlideChange: t
          })
        }, {
          onCloseRequest: R.NOOP,
          onCloseCallback: e,
          modalKey: a
        })
      },
      predicate: () => M() && !v.CONFERENCE_MODE_ENABLED
    }, {
      key: "New User Age Gate",
      open: u.openNewUserAgeGateModal,
      predicate: () => P && !M() && !v.CONFERENCE_MODE_ENABLED
    }, {
      key: "Claim Account Modal",
      open: e => u.openClaimAccountModal(m.isPlatformEmbedded, e),
      predicate: () => {
        var e;
        return !r && null != S.default.getCurrentUser() && !(null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !v.CONFERENCE_MODE_ENABLED && !(0, c.isMidjourneyOnboardingFlow)("new_user_manager")
      }
    }, {
      key: "Verification Gate with Claim Account",
      open: e => (0, d.openMemberVerificationModal)(L, null != e ? e : void 0),
      predicate: () => {
        var e;
        return r && !(null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !v.CONFERENCE_MODE_ENABLED
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("900257").then(n.bind(n, "900257"));
        return t => (0, s.jsx)(e, {
          ...t,
          guildId: L
        })
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != L && null != h.default.get(L) && h.default.get(L) !== h.NO_WELCOME_SCREEN
    }], t = () => {
      T.setNewUserFlowCompleted(), f.default.flowStep(O.FlowType.ANY, O.RegistrationSteps.NUF_COMPLETE, !0)
    }, [...e].reverse().forEach(e => {
      let n = t;
      t = () => {
        e.predicate() ? e.open(n) : n()
      }
    }), t()
  }
}
var P = new M