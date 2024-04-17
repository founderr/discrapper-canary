"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("153832"),
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
  m = {},
  N = null;
class I extends(a = o.default.Store) {
  getState(e) {
    return e !== N ? {} : {
      settings: p,
      errors: m,
      submitting: C
    }
  }
}
i = "ClanSettingsStore", (l = "displayName") in(s = I) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new I(c.default, {
  CLAN_SETTINGS_FETCH: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    N = t, p = {
      ...E(),
      ...n
    }
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    for (let e in N !== t ? (p = {
        ...E(),
        ...n
      }, N = t) : p = {
        ...p,
        ...n
      }, n) delete m[e]
  },
  CLAN_SETTINGS_SUBMIT: function() {
    C = !0, m = {}
  }
})