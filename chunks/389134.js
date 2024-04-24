"use strict";
a.r(t), a("47120");
var n, l, i, s, r = a("442837"),
  o = a("570140"),
  d = a("944163"),
  u = a("116175"),
  c = a("308083");
let f = () => ({
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
  S = f(),
  E = !1,
  p = {};
class T extends(n = r.default.Store) {
  getState() {
    return {
      settings: S,
      errors: p,
      submitting: E
    }
  }
}
s = "ClanSettingsStore", (i = "displayName") in(l = T) ? Object.defineProperty(l, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = s, t.default = new T(o.default, {
  CLAN_SETTINGS_FETCH_START: function() {
    E = !1, S = f(), p = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    S = {
      ...f(),
      ...t
    }
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    for (let e in S = {
        ...S,
        ...t
      }, t) delete p[e]
  },
  CLAN_SETTINGS_SUBMIT: function() {
    E = !0, p = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    E = !1, p = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: t
    } = e;
    E = !1, p = {
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
    if (null == S.verificationForm) return !1;
    S = {
      ...S,
      verificationForm: {
        ...S.verificationForm,
        ...t
      }
    }
  }
})