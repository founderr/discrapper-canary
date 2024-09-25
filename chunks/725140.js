var r = n(47120);
var i = n(147913),
    a = n(579806),
    o = n(246946);
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
let l = !1;
function u() {
    var e;
    let t = null === a.Z || void 0 === a.Z ? void 0 : null === (e = a.Z.window) || void 0 === e ? void 0 : e.setContentProtection;
    if (null == t) return;
    let n = o.Z.enableContentProtection;
    n !== l && (t(n), (l = n));
}
class c extends i.Z {
    constructor() {
        u(), super(), s(this, 'stores', new Map().set(o.Z, u));
    }
}
t.Z = new c();
