"use strict";
t(47120);
var n, i, l, a, r = t(442837),
  o = t(570140),
  c = t(45966),
  d = t(734893),
  u = t(999382),
  E = t(392885),
  _ = t(740903),
  I = t(889369),
  T = t(969632),
  N = t(208665),
  m = t(84658),
  S = t(142961),
  h = t(981631);
let g = new Set,
  C = m.PG.LANDING,
  x = null;

function R(e) {
  let {
    subsection: s
  } = e;
  if (u.Z.getGuildId() === x) return !1;
  C = s === h.KsC.SERVER_GUIDE ? m.PG.HOME_SETTINGS : m.PG.LANDING, x = u.Z.getGuildId()
}
class L extends(n = r.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, I.Z, N.Z, T.Z, E.Z), this.syncWith([c.Z, I.Z, N.Z, T.Z, E.Z], () => !0)
  }
  isEducationUpsellDismissed(e) {
    return g.has(e)
  }
  getCurrentPage() {
    return C
  }
  hasChanges() {
    if (null == x) return !1;
    let e = c.Z.isAdvancedMode(x);
    if (C === m.PG.DEFAULT_CHANNELS) return e ? I.Z.hasChanges() || N.Z.hasChanges() : I.Z.hasChanges();
    if (C === m.PG.CUSTOMIZATION_QUESTIONS) return N.Z.hasChanges();
    if (C === m.PG.HOME_SETTINGS) return T.Z.hasChanges();
    return !1
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == x) return !1;
    if (C === m.PG.SAFETY_CHECK) return !0;
    if (C === m.PG.DEFAULT_CHANNELS) return I.Z.editedDefaultChannelIds.size > 0;
    if (C === m.PG.CUSTOMIZATION_QUESTIONS) return N.Z.editedOnboardingPrompts.length > 0;
    else if (C === m.PG.HOME_SETTINGS) return !(0, d.av)(T.Z.getSettings());
    return !1
  }
  hasErrors() {
    return C === m.PG.CUSTOMIZATION_QUESTIONS && null != N.Z.errors.find(e => null != e)
  }
  showNotice() {
    if (null == x) return !1;
    if ((0, S.C)(x)) return this.hasChanges();
    let e = E.Z.getCurrentPage();
    return (C !== m.PG.SAFETY_CHECK || e === _.u.OVERVIEW) && null != C && C !== m.PG.LANDING
  }
  canCloseEarly() {
    return null == x || !this.hasErrors() && (!(0, S.C)(x) || !this.hasChanges())
  }
}
a = "GuildSettingsOnboardingStore", (l = "displayName") in(i = L) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, s.Z = new L(o.Z, {
  GUILD_SETTINGS_INIT: R,
  GUILD_SETTINGS_SET_SECTION: R,
  GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
    let {
      step: s
    } = e;
    C = s
  },
  GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
    let {
      upsellType: s
    } = e;
    g.add(s)
  }
})