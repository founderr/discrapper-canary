"use strict";
n.r(t), n("47120");
var s, a, i, l, r = n("153832"),
  o = n("442837"),
  c = n("570140"),
  d = n("944163"),
  u = n("227120"),
  S = n("116175"),
  T = n("308083");
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
      ...d.NO_MEMBER_VERIFICATION_FORM
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
class _ extends(s = o.default.Store) {
  getState() {
    return {
      settings: p,
      errors: m,
      submitting: C
    }
  }
}
l = "ClanSettingsStore", (i = "displayName") in(a = _) ? Object.defineProperty(a, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = l, t.default = new _(c.default, {
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
      error: n
    } = e;
    C = !1, m = {
      gameApplicationIds: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: n.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: n.getFirstFieldErrorMessage("search_terms"),
      tag: n.getFirstFieldErrorMessage("tag"),
      primetime: null !== (t = n.getFirstFieldErrorMessage("prime_time_updates")) && void 0 !== t ? t : n.getFirstFieldErrorMessage("new_prime_times")
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