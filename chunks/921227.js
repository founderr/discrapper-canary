var i,
    o = n(442837),
    a = n(570140);
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
let s = {};
class r extends (i = o.ZP.PersistedStore) {
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
l(r, 'displayName', 'ActivityInviteEducationStore'),
    l(r, 'persistKey', 'ActivityInviteEducationExperimentStore'),
    (t.Z = new r(a.Z, {
        ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
            return (s[e.key] = e.value), !0;
        }
    }));
