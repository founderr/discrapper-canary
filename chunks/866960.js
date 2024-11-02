var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(931619),
    c = n(981631);
let d = c.IWh.UNKNOWN,
    f = c.IyS.UNKNOWN,
    _ = null;
function h(e) {
    var t;
    (d = null != e.type ? e.type : c.IWh.UNKNOWN), (f = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : c.IyS.UNKNOWN), (_ = e.serviceProvider), m.emitChange();
}
class p extends (s = o.ZP.Store) {
    initialize() {
        u.Z.getNetworkInformation().then(h), u.Z.addChangeCallback(h);
    }
    getType() {
        return d;
    }
    getEffectiveConnectionSpeed() {
        return f;
    }
    getServiceProvider() {
        return _;
    }
}
(a = 'NetworkStore'),
    (i = 'displayName') in (r = p)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a);
let m = new p(l.Z, {});
t.Z = m;
