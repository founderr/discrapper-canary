"use strict";
n.r(t);
var a, l, s, i, r = n("392711"),
  d = n.n(r),
  o = n("442837"),
  u = n("570140"),
  N = n("45966"),
  c = n("999382"),
  _ = n("981631"),
  I = n("290511");
let E = !1,
  O = null,
  f = [],
  S = !1,
  T = [];

function m() {
  (function() {
    E = !1, O = null, T = [], S = !1
  })(), null != (O = c.default.getGuildId()) && c.default.getSection() === _.GuildSettingsSections.ONBOARDING && (f = N.default.getOnboardingPrompts(O), S = N.default.isAdvancedMode(O))
}
class D extends(i = o.default.Store) {
  initialize() {
    this.waitFor(c.default, N.default)
  }
  hasChanges() {
    return null != O && !d().isEqual(N.default.getOnboardingPrompts(O), f)
  }
  get guildId() {
    return O
  }
  get submitting() {
    return E
  }
  get errors() {
    return T
  }
  get editedOnboardingPrompts() {
    return f
  }
  get advancedMode() {
    return S
  }
}
s = "GuildSettingsOnboardingPromptsStore", (l = "displayName") in(a = D) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = new D(u.default, {
  GUILD_SETTINGS_INIT: m,
  GUILD_SETTINGS_SET_SECTION: m,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: m,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: m,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: m,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: m,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
    var t;
    T = null !== (t = e.errors) && void 0 !== t ? t : [], E = !1
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
    let {
      prompts: t
    } = e;
    f = t
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
    E = !0, T = []
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
    var t;
    T = null !== (t = e.errors) && void 0 !== t ? t : []
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      mode: t
    } = e;
    S = t === I.GuildOnboardingMode.ONBOARDING_ADVANCED
  }
})