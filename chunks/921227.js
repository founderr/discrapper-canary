var i,
    o = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let l = {};
class r extends (i = o.ZP.PersistedStore) {
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
s(r, 'displayName', 'ActivityInviteEducationStore'),
    s(r, 'persistKey', 'ActivityInviteEducationExperimentStore'),
    (t.Z = new r(a.Z, {
        ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
            return (l[e.key] = e.value), !0;
        }
    }));
