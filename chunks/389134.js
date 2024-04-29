"use strict";
a.r(t), a("47120");
var n, s, l, i, r = a("442837"),
  o = a("570140"),
  d = a("944163"),
  u = a("116175"),
  c = a("308083");
let S = () => ({
    gameApplicationIds: new Set,
    playstyle: c.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [c.EMPTY_WILDCARD, c.EMPTY_WILDCARD, c.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...d.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: u.ClanBadgeKind.SWORD,
    badgePrimaryColor: u.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: u.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: c.ClanBannerKind.PIXEL_RUSH,
    brandPrimaryColor: c.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: c.CLAN_BRAND_PALETTE_PRESETS["0"].secondary
  }),
  f = S(),
  E = !1,
  T = {};
class p extends(n = r.default.Store) {
  getState() {
    return {
      settings: f,
      errors: T,
      submitting: E
    }
  }
}
i = "ClanSettingsStore", (l = "displayName") in(s = p) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new p(o.default, {
  CLAN_SETTINGS_FETCH_START: function() {
    E = !1, f = S(), T = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    f = {
      ...S(),
      ...t
    }
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    for (let e in f = {
        ...f,
        ...t
      }, t) delete T[e]
  },
  CLAN_SETTINGS_SUBMIT: function() {
    E = !0, T = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    E = !1, T = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: t
    } = e;
    E = !1, T = {
      gameApplicationIds: t.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: t.getFirstFieldErrorMessage("play_style"),
      description: t.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: t.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: t.getFirstFieldErrorMessage("search_terms"),
      tag: t.getFirstFieldErrorMessage("tag")
    }
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t
    } = e;
    if (null == f.verificationForm) return !1;
    f = {
      ...f,
      verificationForm: {
        ...f.verificationForm,
        ...t
      }
    }
  }
})