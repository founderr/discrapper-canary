"use strict";
a.r(t), a("47120");
var n, r, i, s, l = a("392711"),
  o = a.n(l),
  d = a("906280"),
  c = a.n(d),
  u = a("442837"),
  f = a("570140"),
  m = a("944163"),
  E = a("116175"),
  h = a("308083");
let T = () => ({
    gameApplicationIds: new Set,
    playstyle: h.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [h.EMPTY_WILDCARD, h.EMPTY_WILDCARD, h.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...m.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: E.ClanBadgeKind.SWORD,
    badgePrimaryColor: E.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: E.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: h.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: h.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: h.CLAN_BRAND_PALETTE_PRESETS["0"].secondary
  }),
  _ = T(),
  C = c()(_),
  x = !1,
  p = !1,
  I = {};
class g extends(n = u.default.Store) {
  getState() {
    return {
      initialSettings: _,
      settings: C,
      dirty: x,
      errors: I,
      submitting: p
    }
  }
}
s = "ClanSettingsStore", (i = "displayName") in(r = g) ? Object.defineProperty(r, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = s, t.default = new g(f.default, {
  CLAN_SETTINGS_FETCH_START: function() {
    p = !1, _ = T(), C = c()(_), x = !1, I = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    _ = {
      ...T(),
      ...t
    }, C = c()(_), x = !1
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    for (let e in C = {
        ...C,
        ...c()(t)
      }, t) delete I[e], I = {
      ...I
    };
    x = !o().isEqual(o().omit(C, "verificationForm"), o().omit(_, "verificationForm"))
  },
  CLAN_SETTINGS_SUBMIT: function() {
    p = !0, I = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    p = !1, _ = c()(C), x = !1, I = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: t
    } = e;
    p = !1, I = {
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
    if (null == C.verificationForm) return !1;
    if (C = {
        ...C,
        verificationForm: {
          ...C.verificationForm,
          ...t
        }
      }, a) {
      var n;
      x = !o().isEqual(C.verificationForm.formFields, null === (n = _.verificationForm) || void 0 === n ? void 0 : n.formFields)
    } else x = !1
  }
})