n(47120);
var i,
    r,
    l,
    s,
    a = n(442837),
    o = n(570140),
    c = n(45966),
    d = n(734893),
    u = n(999382),
    m = n(392885),
    h = n(740903),
    g = n(889369),
    x = n(969632),
    p = n(208665),
    f = n(84658),
    C = n(142961),
    I = n(981631);
let _ = new Set(),
    v = f.PG.LANDING,
    N = null;
function T(e) {
    let { subsection: t } = e;
    if (u.Z.getGuildId() === N) return !1;
    (v = t === I.KsC.SERVER_GUIDE ? f.PG.HOME_SETTINGS : f.PG.LANDING), (N = u.Z.getGuildId());
}
class b extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, g.Z, p.Z, x.Z, m.Z), this.syncWith([c.Z, g.Z, p.Z, x.Z, m.Z], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return _.has(e);
    }
    getCurrentPage() {
        return v;
    }
    hasChanges() {
        if (null == N) return !1;
        let e = c.Z.isAdvancedMode(N);
        if (v === f.PG.DEFAULT_CHANNELS) return e ? g.Z.hasChanges() || p.Z.hasChanges() : g.Z.hasChanges();
        if (v === f.PG.CUSTOMIZATION_QUESTIONS) return p.Z.hasChanges();
        if (v === f.PG.HOME_SETTINGS) return x.Z.hasChanges();
        return !1;
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == N) return !1;
        if (v === f.PG.SAFETY_CHECK) return !0;
        if (v === f.PG.DEFAULT_CHANNELS) return g.Z.editedDefaultChannelIds.size > 0;
        if (v === f.PG.CUSTOMIZATION_QUESTIONS) return p.Z.editedOnboardingPrompts.length > 0;
        else if (v === f.PG.HOME_SETTINGS) return !(0, d.av)(x.Z.getSettings());
        return !1;
    }
    hasErrors() {
        return v === f.PG.CUSTOMIZATION_QUESTIONS && null != p.Z.errors.find((e) => null != e);
    }
    showNotice() {
        if (null == N) return !1;
        if ((0, C.C)(N)) return this.hasChanges();
        let e = m.Z.getCurrentPage();
        return (v !== f.PG.SAFETY_CHECK || e === h.u.OVERVIEW) && null != v && v !== f.PG.LANDING;
    }
    canCloseEarly() {
        return null == N || (!this.hasErrors() && (!(0, C.C)(N) || !this.hasChanges()));
    }
}
(s = 'GuildSettingsOnboardingStore'),
    (l = 'displayName') in (r = b)
        ? Object.defineProperty(r, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = s),
    (t.Z = new b(o.Z, {
        GUILD_SETTINGS_INIT: T,
        GUILD_SETTINGS_SET_SECTION: T,
        GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
            let { step: t } = e;
            v = t;
        },
        GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
            let { upsellType: t } = e;
            _.add(t);
        }
    }));
