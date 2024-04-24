"use strict";
a.r(t), a("47120");
var n, i, l, s, r = a("153832"),
  o = a("442837"),
  d = a("570140"),
  u = a("944163"),
  c = a("227120"),
  S = a("116175"),
  f = a("308083");
let E = () => ({
    gameApplicationIds: new Set,
    playstyle: f.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [f.EMPTY_WILDCARD, f.EMPTY_WILDCARD, f.EMPTY_WILDCARD],
    tag: "",
    primetime: [{
      id: (0, r.v4)(),
      day: void 0,
      time: c.ExtendedTimeOptions.MORNING
    }],
    verificationForm: {
      ...u.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: S.ClanBadgeKind.SWORD,
    badgePrimaryColor: S.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: S.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: f.ClanBannerKind.PIXEL_RUSH,
    brandPrimaryColor: f.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: f.CLAN_BRAND_PALETTE_PRESETS["0"].secondary
  }),
  p = E(),
  T = !1,
  m = {};
class I extends(n = o.default.Store) {
  getState() {
    return {
      settings: p,
      errors: m,
      submitting: T
    }
  }
}
s = "ClanSettingsStore", (l = "displayName") in(i = I) ? Object.defineProperty(i, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = s, t.default = new I(d.default, {
  CLAN_SETTINGS_FETCH_START: function() {
    T = !1, p = E(), m = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    p = {
      ...E(),
      ...t
    }
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    for (let e in p = {
        ...p,
        ...t
      }, t) delete m[e]
  },
  CLAN_SETTINGS_SUBMIT: function() {
    T = !0, m = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    T = !1, m = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    var t;
    let {
      error: a
    } = e;
    T = !1, m = {
      gameApplicationIds: a.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: a.getFirstFieldErrorMessage("play_style"),
      description: a.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: a.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: a.getFirstFieldErrorMessage("search_terms"),
      tag: a.getFirstFieldErrorMessage("tag"),
      primetime: null !== (t = a.getFirstFieldErrorMessage("prime_time_updates")) && void 0 !== t ? t : a.getFirstFieldErrorMessage("new_prime_times")
    }
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t
    } = e;
    if (null == p.verificationForm) return !1;
    p = {
      ...p,
      verificationForm: {
        ...p.verificationForm,
        ...t
      }
    }
  }
})