"use strict";
a.r(t), a.d(t, {
  newClanProgress: function() {
    return _
  }
}), a("47120");
var n, s = a("153832"),
  l = a("442837"),
  i = a("570140"),
  r = a("944163"),
  o = a("227120"),
  u = a("116175"),
  d = a("308083");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = {},
  E = !1,
  h = {};

function _() {
  return {
    gameApplicationIds: new Set,
    playstyle: d.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [d.EMPTY_WILDCARD, d.EMPTY_WILDCARD, d.EMPTY_WILDCARD],
    tag: "",
    primetime: [{
      id: (0, s.v4)(),
      day: void 0,
      time: o.ExtendedTimeOptions.MORNING
    }],
    verificationForm: {
      ...r.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: u.ClanBadgeKind.SWORD,
    badgePrimaryColor: u.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: u.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: d.ClanBannerKind.PIXEL_RUSH,
    brandPrimaryColor: d.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: d.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
    currentStep: d.ClanSetupSteps.GAMES,
    furthestStep: d.ClanSetupSteps.GAMES
  }
}

function C(e, t) {
  let a = null != f[e] ? f[e] : _();
  if (f[e] = {
      ...a,
      ...t
    }, null != h[e])
    for (let a in t) delete h[e][a]
}
class m extends(n = l.default.PersistedStore) {
  initialize(e) {
    if (null != e)
      for (let t in e.progressByGuild) f[t] = function(e) {
        var t, a, n, l, i, o, c;
        let f = e.primetime.map(e => {
          var t;
          return {
            ...e,
            id: null !== (t = e.id) && void 0 !== t ? t : (0, s.v4)()
          }
        });
        return {
          gameApplicationIds: new Set(e.gameApplicationIds),
          playstyle: e.playstyle,
          interests: new Set(e.interests),
          description: e.description,
          wildcardDescriptors: e.wildcardDescriptors,
          tag: e.tag,
          primetime: f,
          verificationForm: null !== (t = e.verificationForm) && void 0 !== t ? t : {
            ...r.NO_MEMBER_VERIFICATION_FORM
          },
          badgeKind: null !== (a = e.badgeKind) && void 0 !== a ? a : u.ClanBadgeKind.SWORD,
          badgePrimaryColor: null !== (n = e.badgePrimaryColor) && void 0 !== n ? n : u.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
          badgeSecondaryColor: null !== (l = e.badgeSecondaryColor) && void 0 !== l ? l : u.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
          banner: null !== (i = e.banner) && void 0 !== i ? i : d.ClanBannerKind.PIXEL_RUSH,
          brandPrimaryColor: null !== (o = e.brandPrimaryColor) && void 0 !== o ? o : d.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
          brandSecondaryColor: null !== (c = e.brandSecondaryColor) && void 0 !== c ? c : d.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
          currentStep: e.currentStep,
          furthestStep: e.furthestStep,
          requiredGameId: e.requiredGameId
        }
      }(e.progressByGuild[t])
  }
  getState() {
    let e = {};
    for (let a in f) {
      var t;
      e[a] = {
        gameApplicationIds: Array.from((t = f[a]).gameApplicationIds),
        playstyle: t.playstyle,
        interests: Array.from(t.interests),
        description: t.description,
        wildcardDescriptors: t.wildcardDescriptors,
        tag: t.tag,
        primetime: t.primetime,
        verificationForm: t.verificationForm,
        badgeKind: t.badgeKind,
        badgePrimaryColor: t.badgePrimaryColor,
        badgeSecondaryColor: t.badgeSecondaryColor,
        banner: t.banner,
        brandPrimaryColor: t.brandPrimaryColor,
        brandSecondaryColor: t.brandSecondaryColor,
        currentStep: t.currentStep,
        furthestStep: t.furthestStep,
        requiredGameId: t.requiredGameId
      }
    }
    return {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: f[e],
      errors: h[e],
      submitting: E
    }
  }
}
c(m, "displayName", "ClanSetupStore"), c(m, "persistKey", "ClanSetupStore"), t.default = new m(i.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: a
    } = e;
    C(t, a)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    E = !0, delete h[t]
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    E = !1, delete f[t], delete h[t]
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: a
    } = e;
    E = !1, h[t] = {
      gameApplicationIds: a.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: a.getFirstFieldErrorMessage("play_style"),
      description: a.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: a.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: a.getFirstFieldErrorMessage("search_terms"),
      tag: a.getFirstFieldErrorMessage("tag"),
      primetime: a.getFirstFieldErrorMessage("prime_time")
    }
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: a,
      guildId: n,
      isLocalUpdate: s
    } = e;
    s && (t = null == a ? r.NO_MEMBER_VERIFICATION_FORM : {
      ...(null != f[n] ? f[n] : _()).verificationForm,
      ...a
    }, C(n, {
      verificationForm: t
    }))
  }
})