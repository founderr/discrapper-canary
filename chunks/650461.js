"use strict";
s.r(t), s.d(t, {
  DEFAULT_CLAN_PROGRESS: function() {
    return L
  }
}), s("47120");
var a, n = s("392711"),
  i = s.n(n),
  E = s("442837"),
  l = s("570140"),
  _ = s("944163"),
  r = s("709054"),
  u = s("116175"),
  o = s("308083");

function T(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let d = new Map,
  A = new Map,
  I = !1,
  L = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: o.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [o.EMPTY_WILDCARD, o.EMPTY_WILDCARD, o.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ..._.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: u.ClanBadgeKind.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: o.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: o.ClanSetupSteps.GAMES,
    furthestStep: o.ClanSetupSteps.GAMES,
    badgeImage: "",
    requiredGameId: void 0
  });

function c(e) {
  var t;
  return null !== (t = d.get(e)) && void 0 !== t ? t : i().cloneDeep(L)
}

function N(e, t) {
  let s = c(e);
  d.set(e, {
    ...s,
    ...t
  });
  let a = A.get(e);
  if (null != a) {
    let s = {
      ...a
    };
    Object.keys(t).forEach(e => {
      delete s[e]
    }), A.set(e, s)
  }
}
class S extends(a = E.default.PersistedStore) {
  initialize(e) {
    null != e && r.default.keys(e.progressByGuild).forEach(t => {
      var s, a, n, i, E;
      d.set(t, (s = e.progressByGuild[t], {
        gameApplicationIds: new Set(s.gameApplicationIds),
        playstyle: s.playstyle,
        interests: new Set(s.interests),
        description: s.description,
        wildcardDescriptors: null !== (a = s.wildcardDescriptors) && void 0 !== a ? a : [o.EMPTY_WILDCARD, o.EMPTY_WILDCARD, o.EMPTY_WILDCARD],
        tag: s.tag,
        verificationForm: null !== (n = s.verificationForm) && void 0 !== n ? n : {
          ..._.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (i = s.badgeKind) && void 0 !== i ? i : u.ClanBadgeKind.SWORD,
        badgePrimaryColor: s.badgePrimaryColor,
        badgeSecondaryColor: s.badgeSecondaryColor,
        banner: null !== (E = s.banner) && void 0 !== E ? E : o.ClanBannerKind.NIGHT_SKY,
        brandPrimaryColor: s.brandPrimaryColor,
        brandSecondaryColor: s.brandSecondaryColor,
        currentStep: s.currentStep,
        furthestStep: s.furthestStep,
        requiredGameId: s.requiredGameId,
        badgeImage: s.badgeImage
      }))
    })
  }
  getState() {
    let e = {};
    return d.forEach((t, s) => {
      var a;
      e[s] = {
        gameApplicationIds: Array.from((a = t).gameApplicationIds),
        playstyle: a.playstyle,
        interests: Array.from(a.interests),
        description: a.description,
        wildcardDescriptors: a.wildcardDescriptors,
        tag: a.tag,
        verificationForm: a.verificationForm,
        badgeKind: a.badgeKind,
        badgePrimaryColor: a.badgePrimaryColor,
        badgeSecondaryColor: a.badgeSecondaryColor,
        banner: a.banner,
        brandPrimaryColor: a.brandPrimaryColor,
        brandSecondaryColor: a.brandSecondaryColor,
        currentStep: a.currentStep,
        furthestStep: a.furthestStep,
        requiredGameId: a.requiredGameId,
        badgeImage: a.badgeImage
      }
    }), {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: d.get(e),
      errors: A.get(e),
      submitting: I
    }
  }
  getGuildIds() {
    return [...d.keys()]
  }
}
T(S, "displayName", "ClanSetupStore"), T(S, "persistKey", "ClanSetupStore"), t.default = new S(l.default, {
  CLAN_SETUP_RESET: function() {
    d.clear(), A.clear()
  },
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: s
    } = e;
    N(t, s)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    I = !0, A.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    I = !1, d.delete(t), A.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: s
    } = e;
    I = !1, A.set(t, {
      gameApplicationIds: s.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: s.getFirstFieldErrorMessage("play_style"),
      description: s.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: s.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: s.getFirstFieldErrorMessage("search_terms"),
      tag: s.getFirstFieldErrorMessage("tag")
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: s,
      guildId: a,
      isLocalUpdate: n
    } = e;
    n && (t = null == s ? _.NO_MEMBER_VERIFICATION_FORM : {
      ...c(a).verificationForm,
      ...s
    }, N(a, {
      verificationForm: t
    }))
  }
})