var r = n(47120);
var i = n(570140),
    a = n(147913),
    o = n(885110);
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
class l extends a.Z {
    constructor(...e) {
        super(...e), s(this, 'stores', new Map().set(o.Z, u));
    }
}
function u() {
    i.Z.dispatch({
        type: 'SELF_PRESENCE_STORE_UPDATE',
        status: o.Z.getStatus(),
        activities: o.Z.getActivities()
    });
}
t.Z = new l();
