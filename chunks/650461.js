"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return h
  }
}), n("47120");
var a, s = n("153832"),
  l = n("442837"),
  i = n("570140"),
  r = n("944163"),
  o = n("227120"),
  u = n("308083");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {},
  f = !1,
  E = {};

function h() {
  return {
    selectedGames: new Map,
    playstyle: u.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    tag: "",
    primetime: [{
      id: s.default.v4(),
      day: void 0,
      time: o.ExtendedTimeOptions.MORNING
    }],
    verificationForm: {
      ...r.NO_MEMBER_VERIFICATION_FORM
    },
    currentStep: u.ClanSetupSteps.GAMES
  }
}

function _(e, t) {
  let n = null != c[e] ? c[e] : h();
  if (c[e] = {
      ...n,
      ...t
    }, null != E[e])
    for (let n in t) delete E[e][n]
}
class C extends(a = l.default.PersistedStore) {
  initialize(e) {
    if (null != e)
      for (let t in e.progressByGuild) c[t] = function(e) {
        var t;
        let n = e.primetime.map(e => {
          var t;
          return {
            ...e,
            id: null !== (t = e.id) && void 0 !== t ? t : s.default.v4()
          }
        });
        return {
          selectedGames: new Map(Object.entries(e.selectedGames)),
          playstyle: e.playstyle,
          interests: new Set(e.interests),
          description: e.description,
          tag: e.tag,
          primetime: n,
          verificationForm: null !== (t = e.verificationForm) && void 0 !== t ? t : {
            ...r.NO_MEMBER_VERIFICATION_FORM
          },
          currentStep: e.currentStep,
          requiredGameId: e.requiredGameId
        }
      }(e.progressByGuild[t])
  }
  getState() {
    let e = {};
    for (let n in c) {
      var t;
      e[n] = {
        selectedGames: Object.fromEntries((t = c[n]).selectedGames.entries()),
        playstyle: t.playstyle,
        interests: Array.from(t.interests),
        description: t.description,
        tag: t.tag,
        primetime: t.primetime,
        verificationForm: t.verificationForm,
        currentStep: t.currentStep,
        requiredGameId: t.requiredGameId
      }
    }
    return {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: c[e],
      errors: E[e],
      submitting: f
    }
  }
}
d(C, "displayName", "ClanSetupStore"), d(C, "persistKey", "ClanSetupStore"), t.default = new C(i.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    _(t, n)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    f = !0, delete E[t]
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    f = !1, delete c[t], delete E[t]
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    f = !1, E[t] = {
      selectedGames: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      interests: n.getFirstFieldErrorMessage("search_terms"),
      tag: n.getFirstFieldErrorMessage("tag"),
      primetime: n.getFirstFieldErrorMessage("prime_time")
    }
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: n,
      guildId: a,
      isLocalUpdate: s
    } = e;
    s && (t = null == n ? r.NO_MEMBER_VERIFICATION_FORM : {
      ...(null != c[a] ? c[a] : h()).verificationForm,
      ...n
    }, _(a, {
      verificationForm: t
    }))
  }
})