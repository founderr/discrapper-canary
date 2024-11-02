var i,
    l,
    r,
    s,
    a = t(392711),
    o = t.n(a),
    c = t(442837),
    d = t(570140),
    u = t(45966),
    m = t(999382),
    I = t(981631),
    h = t(290511);
let N = !1,
    g = null,
    T = [],
    f = !1,
    S = [];
function x() {
    (function () {
        (N = !1), (g = null), (S = []), (f = !1);
    })(),
        null != (g = m.Z.getGuildId()) && m.Z.getSection() === I.pNK.ONBOARDING && ((T = u.Z.getOnboardingPrompts(g)), (f = u.Z.isAdvancedMode(g)));
}
class E extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, u.Z);
    }
    hasChanges() {
        return null != g && !o().isEqual(u.Z.getOnboardingPrompts(g), T);
    }
    get guildId() {
        return g;
    }
    get submitting() {
        return N;
    }
    get errors() {
        return S;
    }
    get editedOnboardingPrompts() {
        return T;
    }
    get advancedMode() {
        return f;
    }
}
(r = 'GuildSettingsOnboardingPromptsStore'),
    (l = 'displayName') in (i = E)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r),
    (n.Z = new E(d.Z, {
        GUILD_SETTINGS_INIT: x,
        GUILD_SETTINGS_SET_SECTION: x,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: x,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: x,
        GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: x,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: x,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
            var n;
            (S = null !== (n = e.errors) && void 0 !== n ? n : []), (N = !1);
        },
        GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
            let { prompts: n } = e;
            T = n;
        },
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
            (N = !0), (S = []);
        },
        GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
            var n;
            S = null !== (n = e.errors) && void 0 !== n ? n : [];
        },
        GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
            let { mode: n } = e;
            f = n === h.Un.ONBOARDING_ADVANCED;
        }
    }));
