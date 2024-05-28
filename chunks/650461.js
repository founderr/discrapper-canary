"use strict";
E.r(t), E.d(t, {
  useDefaultClanProgress: function() {
    return g
  }
}), E("47120");
var s, _ = E("470079"),
  a = E("392711"),
  T = E.n(a),
  n = E("442837"),
  A = E("570140"),
  I = E("944163"),
  u = E("709054"),
  i = E("116175"),
  l = E("308083");

function L(e, t, E) {
  return t in e ? Object.defineProperty(e, t, {
    value: E,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = E, e
}
let o = new Map,
  r = new Map,
  d = !1,
  N = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: l.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [l.EMPTY_WILDCARD, l.EMPTY_WILDCARD, l.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...I.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: i.ClanBadgeKind.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: l.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: l.ClanSetupSteps.GAMES,
    furthestStep: l.ClanSetupSteps.GAMES,
    requiredGameId: void 0
  });

function S() {
  let e = T().cloneDeep(N);
  return e.badgeKind = (0, i.getRandomClanBadgeKind)(), e.banner = (0, l.getRandomClanBannerKind)(), e
}

function g() {
  return _.useState(() => S())[0]
}

function D(e) {
  var t;
  return null !== (t = o.get(e)) && void 0 !== t ? t : S()
}

function G(e, t) {
  let E = D(e);
  o.set(e, {
    ...E,
    ...t
  });
  let s = r.get(e);
  if (null != s) {
    let E = {
      ...s
    };
    Object.keys(t).forEach(e => {
      delete E[e]
    }), r.set(e, E)
  }
}
class O extends(s = n.default.PersistedStore) {
  initialize(e) {
    null != e && u.default.keys(e.progressByGuild).forEach(t => {
      var E, s, _, a, T;
      o.set(t, (E = e.progressByGuild[t], {
        gameApplicationIds: new Set(E.gameApplicationIds),
        playstyle: E.playstyle,
        interests: new Set(E.interests),
        description: E.description,
        wildcardDescriptors: null !== (s = E.wildcardDescriptors) && void 0 !== s ? s : [l.EMPTY_WILDCARD, l.EMPTY_WILDCARD, l.EMPTY_WILDCARD],
        tag: E.tag,
        verificationForm: null !== (_ = E.verificationForm) && void 0 !== _ ? _ : {
          ...I.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (a = E.badgeKind) && void 0 !== a ? a : i.ClanBadgeKind.SWORD,
        badgePrimaryColor: E.badgePrimaryColor,
        badgeSecondaryColor: E.badgeSecondaryColor,
        banner: null !== (T = E.banner) && void 0 !== T ? T : l.ClanBannerKind.NIGHT_SKY,
        brandPrimaryColor: E.brandPrimaryColor,
        brandSecondaryColor: E.brandSecondaryColor,
        currentStep: E.currentStep,
        furthestStep: E.furthestStep,
        requiredGameId: E.requiredGameId
      }))
    })
  }
  getState() {
    let e = {};
    return o.forEach((t, E) => {
      var s;
      e[E] = {
        gameApplicationIds: Array.from((s = t).gameApplicationIds),
        playstyle: s.playstyle,
        interests: Array.from(s.interests),
        description: s.description,
        wildcardDescriptors: s.wildcardDescriptors,
        tag: s.tag,
        verificationForm: s.verificationForm,
        badgeKind: s.badgeKind,
        badgePrimaryColor: s.badgePrimaryColor,
        badgeSecondaryColor: s.badgeSecondaryColor,
        banner: s.banner,
        brandPrimaryColor: s.brandPrimaryColor,
        brandSecondaryColor: s.brandSecondaryColor,
        currentStep: s.currentStep,
        furthestStep: s.furthestStep,
        requiredGameId: s.requiredGameId
      }
    }), {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: o.get(e),
      errors: r.get(e),
      submitting: d
    }
  }
  getGuildIds() {
    return [...o.keys()]
  }
}
L(O, "displayName", "ClanSetupStore"), L(O, "persistKey", "ClanSetupStore"), t.default = new O(A.default, {
  CLAN_SETUP_RESET: function() {
    o.clear(), r.clear()
  },
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: E
    } = e;
    G(t, E)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    d = !0, r.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    d = !1, o.delete(t), r.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: E
    } = e;
    d = !1, r.set(t, {
      gameApplicationIds: E.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: E.getFirstFieldErrorMessage("play_style"),
      description: E.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: E.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: E.getFirstFieldErrorMessage("search_terms"),
      tag: E.getFirstFieldErrorMessage("tag")
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: E,
      guildId: s,
      isLocalUpdate: _
    } = e;
    _ && (t = null == E ? I.NO_MEMBER_VERIFICATION_FORM : {
      ...D(s).verificationForm,
      ...E
    }, G(s, {
      verificationForm: t
    }))
  }
})