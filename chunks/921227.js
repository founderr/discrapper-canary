var r,
    i = n(442837),
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
let o = {};
class l extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(o, e);
    }
    getState() {
        return o;
    }
    shouldShowEducation(e) {
        return !0 !== o[e];
    }
}
s(l, 'displayName', 'ActivityInviteEducationStore'),
    s(l, 'persistKey', 'ActivityInviteEducationExperimentStore'),
    (t.Z = new l(a.Z, {
        ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
            return (o[e.key] = e.value), !0;
        }
    }));
