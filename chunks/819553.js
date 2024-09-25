n.d(t, {
    kp: function () {
        return u;
    },
    uX: function () {
        return r;
    }
});
var r,
    i,
    a = n(442837),
    o = n(570140),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    return null != e && ['started', 'ready'].includes(e);
}
!(function (e) {
    (e.STARTED = 'started'), (e.READY = 'ready'), (e.COMPLETED = 'completed'), (e.NOT_APPLICABLE = 'not_applicable');
})(r || (r = {}));
let c = {},
    d = {};
function _() {
    (c = {}), (d = {});
}
function E(e) {
    let { guildId: t } = e;
    c[t] = 'started';
}
function f(e) {
    let { guildId: t, enabled: n } = e;
    if ('started' !== c[t]) return !1;
    n ? (c[t] = 'ready') : (c[t] = 'not_applicable');
}
function h(e) {
    let { guildId: t } = e;
    c[t] = 'not_applicable';
}
function p(e) {
    let { guildId: t } = e;
    c[t] = 'completed';
}
function m(e) {
    let { guild: t } = e;
    delete c[t.id], delete d[t.id];
}
function I(e) {
    let { guildId: t, step: n } = e;
    d[t] = n;
}
function T() {
    d = {};
}
class g extends (i = a.ZP.Store) {
    shouldShowOnboarding(e) {
        return !!(e !== s.ME && e !== s.I_8 && u(c[e])) || !1;
    }
    getOnboardingStatus(e) {
        return c[e];
    }
    resetOnboardingStatus(e) {
        (c[e] = 'started'), (d[e] = 'cover');
    }
    getCurrentOnboardingStep(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : 'cover';
    }
}
l(g, 'displayName', 'GuildOnboardingStore'),
    (t.ZP = new g(o.Z, {
        LOGOUT: _,
        GUILD_DELETE: m,
        GUILD_ONBOARDING_START: E,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: f,
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: h,
        GUILD_ONBOARDING_COMPLETE: p,
        GUILD_ONBOARDING_SET_STEP: I,
        CONNECTION_OPEN: T
    }));
