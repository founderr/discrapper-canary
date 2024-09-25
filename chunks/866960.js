var r,
    i = n(442837),
    a = n(570140),
    o = n(931619),
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
let u = s.IWh.UNKNOWN,
    c = s.IyS.UNKNOWN,
    d = null;
function _(e) {
    var t;
    (u = null != e.type ? e.type : s.IWh.UNKNOWN), (c = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : s.IyS.UNKNOWN), (d = e.serviceProvider), f.emitChange();
}
class E extends (r = i.ZP.Store) {
    initialize() {
        o.Z.getNetworkInformation().then(_), o.Z.addChangeCallback(_);
    }
    getType() {
        return u;
    }
    getEffectiveConnectionSpeed() {
        return c;
    }
    getServiceProvider() {
        return d;
    }
}
l(E, 'displayName', 'NetworkStore');
let f = new E(a.Z, {});
t.Z = f;
