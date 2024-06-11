"use strict";
E.r(t), E.d(t, {
  useDefaultClanProgress: function() {
    return g
  }
}), E("47120");
var _, s = E("470079"),
  T = E("392711"),
  a = E.n(T),
  A = E("442837"),
  n = E("570140"),
  I = E("944163"),
  u = E("709054"),
  i = E("116175"),
  L = E("308083");

function l(e, t, E) {
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
    playstyle: L.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [L.EMPTY_WILDCARD, L.EMPTY_WILDCARD, L.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...I.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: i.ClanBadgeKind.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: L.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: L.ClanSetupSteps.GAMES,
    furthestStep: L.ClanSetupSteps.GAMES,
    requiredGameId: void 0
  });

function S() {
  let e = a().cloneDeep(N);
  return e.badgeKind = (0, i.getRandomClanBadgeKind)(), e.banner = (0, L.getRandomClanBannerKind)(), e
}

function g() {
  return s.useState(() => S())[0]
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
  let _ = r.get(e);
  if (null != _) {
    let E = {
      ..._
    };
    Object.keys(t).forEach(e => {
      delete E[e]
    }), r.set(e, E)
  }
}
class O extends(_ = A.default.PersistedStore) {
  initialize(e) {
    null != e && u.default.keys(e.progressByGuild).forEach(t => {
      var E, _, s, T, a;
      o.set(t, (E = e.progressByGuild[t], {
        gameApplicationIds: new Set(E.gameApplicationIds),
        playstyle: E.playstyle,
        interests: new Set(E.interests),
        description: E.description,
        wildcardDescriptors: null !== (_ = E.wildcardDescriptors) && void 0 !== _ ? _ : [L.EMPTY_WILDCARD, L.EMPTY_WILDCARD, L.EMPTY_WILDCARD],
        tag: E.tag,
        verificationForm: null !== (s = E.verificationForm) && void 0 !== s ? s : {
          ...I.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (T = E.badgeKind) && void 0 !== T ? T : i.ClanBadgeKind.SWORD,
        badgePrimaryColor: E.badgePrimaryColor,
        badgeSecondaryColor: E.badgeSecondaryColor,
        banner: null !== (a = E.banner) && void 0 !== a ? a : L.ClanBannerKind.NIGHT_SKY,
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
      var _;
      e[E] = {
        gameApplicationIds: Array.from((_ = t).gameApplicationIds),
        playstyle: _.playstyle,
        interests: Array.from(_.interests),
        description: _.description,
        wildcardDescriptors: _.wildcardDescriptors,
        tag: _.tag,
        verificationForm: _.verificationForm,
        badgeKind: _.badgeKind,
        badgePrimaryColor: _.badgePrimaryColor,
        badgeSecondaryColor: _.badgeSecondaryColor,
        banner: _.banner,
        brandPrimaryColor: _.brandPrimaryColor,
        brandSecondaryColor: _.brandSecondaryColor,
        currentStep: _.currentStep,
        furthestStep: _.furthestStep,
        requiredGameId: _.requiredGameId
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
l(O, "displayName", "ClanSetupStore"), l(O, "persistKey", "ClanSetupStore"), t.default = new O(n.default, {
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
      guildId: _,
      isLocalUpdate: s
    } = e;
    s && (t = null == E ? I.NO_MEMBER_VERIFICATION_FORM : {
      ...D(_).verificationForm,
      ...E
    }, G(_, {
      verificationForm: t
    }))
  }
})