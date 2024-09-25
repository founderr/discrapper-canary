var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = {};
function l(e) {
    return (s[e.key] = e.value), !0;
}
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(s, e);
    }
    getState() {
        return s;
    }
    shouldShowEducation(e) {
        return !0 !== s[e];
    }
}
o(u, 'displayName', 'ActivityInviteEducationStore'), o(u, 'persistKey', 'ActivityInviteEducationExperimentStore'), (t.Z = new u(a.Z, { ACTIVITY_INVITE_EDUCATION_DISMISS: l }));
