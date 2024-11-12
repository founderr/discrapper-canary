n.d(t, {
    kp: function () {
        return f;
    },
    uX: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(981631);
function f(e) {
    return null != e && ['started', 'ready'].includes(e);
}
((r = o || (o = {})).STARTED = 'started'), (r.READY = 'ready'), (r.COMPLETED = 'completed'), (r.NOT_APPLICABLE = 'not_applicable');
let _ = {},
    p = {};
class h extends (l = u.ZP.Store) {
    shouldShowOnboarding(e) {
        return !!(e !== d.ME && e !== d.I_8 && f(_[e])) || !1;
    }
    getOnboardingStatus(e) {
        return _[e];
    }
    resetOnboardingStatus(e) {
        (_[e] = 'started'), (p[e] = 'cover');
    }
    getCurrentOnboardingStep(e) {
        var t;
        return null !== (t = p[e]) && void 0 !== t ? t : 'cover';
    }
}
(s = 'GuildOnboardingStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.ZP = new h(c.Z, {
        LOGOUT: function () {
            (_ = {}), (p = {});
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete _[t.id], delete p[t.id];
        },
        GUILD_ONBOARDING_START: function (e) {
            let { guildId: t } = e;
            _[t] = 'started';
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, enabled: n } = e;
            if ('started' !== _[t]) return !1;
            n ? (_[t] = 'ready') : (_[t] = 'not_applicable');
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function (e) {
            let { guildId: t } = e;
            _[t] = 'not_applicable';
        },
        GUILD_ONBOARDING_COMPLETE: function (e) {
            let { guildId: t } = e;
            _[t] = 'completed';
        },
        GUILD_ONBOARDING_SET_STEP: function (e) {
            let { guildId: t, step: n } = e;
            p[t] = n;
        },
        CONNECTION_OPEN: function () {
            p = {};
        }
    }));
