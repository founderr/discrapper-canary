var i = r(47120);
var a = r(570140),
    s = r(147913),
    o = r(885110);
function l(e, n, r) {
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
class u extends s.Z {
    constructor(...e) {
        super(...e), l(this, 'stores', new Map().set(o.Z, c));
    }
}
function c() {
    a.Z.dispatch({
        type: 'SELF_PRESENCE_STORE_UPDATE',
        status: o.Z.getStatus(),
        activities: o.Z.getActivities()
    });
}
n.Z = new u();
