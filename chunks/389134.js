"use strict";
s.r(t), s("47120");
var n, a, l, i, r = s("153832"),
  o = s("442837"),
  d = s("570140"),
  c = s("944163"),
  u = s("227120"),
  S = s("116175"),
  T = s("308083");
let E = () => ({
    gameApplicationIds: new Set,
    playstyle: T.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [T.EMPTY_WILDCARD, T.EMPTY_WILDCARD, T.EMPTY_WILDCARD],
    tag: "",
    primetime: [{
      id: (0, r.v4)(),
      day: void 0,
      time: u.ExtendedTimeOptions.MORNING
    }],
    verificationForm: {
      ...c.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: S.ClanBadgeKind.SWORD,
    badgePrimaryColor: S.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: S.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: T.ClanBannerKind.PIXEL_RUSH,
    brandPrimaryColor: T.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: T.CLAN_BRAND_PALETTE_PRESETS["0"].secondary
  }),
  p = E(),
  C = !1,
  m = {};
class _ extends(n = o.default.Store) {
  getState() {
    return {
      settings: p,
      errors: m,
      submitting: C
    }
  }
}
i = "ClanSettingsStore", (l = "displayName") in(a = _) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new _(d.default, {
  CLAN_SETTINGS_FETCH_START: function() {
    C = !1, p = E(), m = {}
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
    C = !0, m = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    C = !1, m = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    var t;
    let {
      error: s
    } = e;
    C = !1, m = {
      gameApplicationIds: s.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: s.getFirstFieldErrorMessage("play_style"),
      description: s.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: s.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: s.getFirstFieldErrorMessage("search_terms"),
      tag: s.getFirstFieldErrorMessage("tag"),
      primetime: null !== (t = s.getFirstFieldErrorMessage("prime_time_updates")) && void 0 !== t ? t : s.getFirstFieldErrorMessage("new_prime_times")
    }
  }
})