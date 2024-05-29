"use strict";
a.r(t), a("47120");
var n, r, s, i, l = a("392711"),
  o = a.n(l),
  c = a("906280"),
  d = a.n(c),
  u = a("442837"),
  f = a("570140"),
  m = a("944163"),
  h = a("116175"),
  E = a("308083");
let p = () => ({
    gameApplicationIds: new Set,
    playstyle: E.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [E.EMPTY_WILDCARD, E.EMPTY_WILDCARD, E.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...m.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: h.ClanBadgeKind.SWORD,
    badgePrimaryColor: h.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: h.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: E.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: E.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: E.CLAN_BRAND_PALETTE_PRESETS["0"].secondary
  }),
  C = p(),
  T = d()(C),
  _ = !1,
  x = !1,
  g = {};
class N extends(n = u.default.Store) {
  getState() {
    return {
      initialSettings: C,
      settings: T,
      dirty: _,
      errors: g,
      submitting: x
    }
  }
}
i = "ClanSettingsStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = i, t.default = new N(f.default, {
  CLAN_SETTINGS_FETCH_START: function() {
    x = !1, C = p(), T = d()(C), _ = !1, g = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    C = {
      ...p(),
      ...t
    }, T = d()(C), _ = !1
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    for (let e in T = {
        ...T,
        ...d()(t)
      }, t) delete g[e], g = {
      ...g
    };
    _ = !o().isEqual(o().omit(T, "verificationForm"), o().omit(C, "verificationForm"))
  },
  CLAN_SETTINGS_SUBMIT: function() {
    x = !0, g = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    x = !1, C = d()(T), _ = !1, g = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: t
    } = e;
    x = !1, g = {
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
      form: t,
      isLocalUpdate: a
    } = e;
    if (null == T.verificationForm) return !1;
    if (T = {
        ...T,
        verificationForm: {
          ...T.verificationForm,
          ...t
        }
      }, a) {
      var n;
      _ = !o().isEqual(T.verificationForm.formFields, null === (n = C.verificationForm) || void 0 === n ? void 0 : n.formFields)
    } else _ = !1
  }
})