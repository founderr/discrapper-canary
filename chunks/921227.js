var i,
    a = r(442837),
    s = r(570140);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = {};
function u(e) {
    return (l[e.key] = e.value), !0;
}
class c extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(l, e);
    }
    getState() {
        return l;
    }
    shouldShowEducation(e) {
        return !0 !== l[e];
    }
}
o(c, 'displayName', 'ActivityInviteEducationStore'), o(c, 'persistKey', 'ActivityInviteEducationExperimentStore'), (n.Z = new c(s.Z, { ACTIVITY_INVITE_EDUCATION_DISMISS: u }));
