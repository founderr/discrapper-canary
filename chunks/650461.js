"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return E
  }
}), n("47120");
var a, s = n("442837"),
  l = n("570140"),
  i = n("944163"),
  r = n("227120"),
  o = n("308083");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = {},
  c = !1,
  f = {};

function E() {
  return {
    selectedGames: new Map,
    playstyle: o.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    tag: "",
    primetime: [{
      day: void 0,
      time: r.ExtendedTimeOptions.MORNING
    }],
    verificationForm: {
      ...i.NO_MEMBER_VERIFICATION_FORM
    },
    currentStep: o.ClanSetupSteps.GAMES
  }
}

function h(e, t) {
  let n = null != d[e] ? d[e] : E();
  if (d[e] = {
      ...n,
      ...t
    }, null != f[e])
    for (let n in t) delete f[e][n]
}
class _ extends(a = s.default.PersistedStore) {
  initialize(e) {
    if (null != e)
      for (let t in e.progressByGuild) d[t] = function(e) {
        var t;
        return {
          selectedGames: new Map(Object.entries(e.selectedGames)),
          playstyle: e.playstyle,
          interests: new Set(e.interests),
          description: e.description,
          tag: e.tag,
          primetime: e.primetime,
          verificationForm: null !== (t = e.verificationForm) && void 0 !== t ? t : {
            ...i.NO_MEMBER_VERIFICATION_FORM
          },
          currentStep: e.currentStep
        }
      }(e.progressByGuild[t])
  }
  getState() {
    let e = {};
    for (let n in d) {
      var t;
      e[n] = {
        selectedGames: Object.fromEntries((t = d[n]).selectedGames.entries()),
        playstyle: t.playstyle,
        interests: Array.from(t.interests),
        description: t.description,
        tag: t.tag,
        primetime: t.primetime,
        verificationForm: t.verificationForm,
        currentStep: t.currentStep
      }
    }
    return {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: d[e],
      errors: f[e],
      submitting: c
    }
  }
}
u(_, "displayName", "ClanSetupStore"), u(_, "persistKey", "ClanSetupStore"), t.default = new _(l.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    h(t, n)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    c = !0, delete f[t]
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    c = !1, delete d[t], delete f[t]
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    c = !1, f[t] = {
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
    s && (t = null == n ? i.NO_MEMBER_VERIFICATION_FORM : {
      ...(null != d[a] ? d[a] : E()).verificationForm,
      ...n
    }, h(a, {
      verificationForm: t
    }))
  }
})