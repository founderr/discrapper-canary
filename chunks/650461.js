"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return _
  }
}), n("47120");
var a, s = n("153832"),
  l = n("442837"),
  i = n("570140"),
  r = n("944163"),
  o = n("227120"),
  u = n("116175"),
  d = n("308083");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
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
    furthestStep: d.ClanSetupSteps.GAMES,
    badgeImage: ""
  }
}

function C(e, t) {
  let n = null != f[e] ? f[e] : _();
  if (f[e] = {
      ...n,
      ...t
    }, null != h[e])
    for (let n in t) delete h[e][n]
}
class m extends(a = l.default.PersistedStore) {
  initialize(e) {
    if (null != e)
      for (let t in e.progressByGuild) f[t] = function(e) {
        var t, n, a, l, i, o, c;
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
          badgeKind: null !== (n = e.badgeKind) && void 0 !== n ? n : u.ClanBadgeKind.SWORD,
          badgePrimaryColor: null !== (a = e.badgePrimaryColor) && void 0 !== a ? a : u.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
          badgeSecondaryColor: null !== (l = e.badgeSecondaryColor) && void 0 !== l ? l : u.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
          banner: null !== (i = e.banner) && void 0 !== i ? i : d.ClanBannerKind.PIXEL_RUSH,
          brandPrimaryColor: null !== (o = e.brandPrimaryColor) && void 0 !== o ? o : d.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
          brandSecondaryColor: null !== (c = e.brandSecondaryColor) && void 0 !== c ? c : d.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
          currentStep: e.currentStep,
          furthestStep: e.furthestStep,
          requiredGameId: e.requiredGameId,
          badgeImage: e.badgeImage
        }
      }(e.progressByGuild[t])
  }
  getState() {
    let e = {};
    for (let n in f) {
      var t;
      e[n] = {
        gameApplicationIds: Array.from((t = f[n]).gameApplicationIds),
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
        requiredGameId: t.requiredGameId,
        badgeImage: t.badgeImage
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
      updates: n
    } = e;
    C(t, n)
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
      error: n
    } = e;
    E = !1, h[t] = {
      gameApplicationIds: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: n.getFirstFieldErrorMessage("wildcard_descriptors"),
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
      ...(null != f[a] ? f[a] : _()).verificationForm,
      ...n
    }, C(a, {
      verificationForm: t
    }))
  }
})