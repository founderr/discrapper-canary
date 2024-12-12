var i = r(47120);
var a = r(147913),
    s = r(579806),
    o = r(246946);
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
let u = !1;
function c() {
    var e;
    let n = null === s.Z || void 0 === s.Z ? void 0 : null === (e = s.Z.window) || void 0 === e ? void 0 : e.setContentProtection;
    if (null == n) return;
    let r = o.Z.enableContentProtection;
    r !== u && (n(r), (u = r));
}
class d extends a.Z {
    constructor() {
        c(), super(), l(this, 'stores', new Map().set(o.Z, c));
    }
}
n.Z = new d();
