var i = r(47120);
var a = r(956067),
    s = r(147913),
    o = r(70956),
    l = r(640795),
    u = r(139674);
function c(e, n, r) {
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
let d = 4 * o.Z.Millis.HOUR;
class f extends s.Z {
    _initialize() {
        setTimeout(() => a.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => u.Z.getBlockedDomainList()), 1000), setTimeout(() => (0, l.q)(), 10 * o.Z.Millis.SECOND), (this.intervalID = setInterval(l.q, d));
    }
    _terminate() {
        clearInterval(this.intervalID);
    }
    constructor(...e) {
        super(...e), c(this, 'intervalID', void 0);
    }
}
n.Z = new f();
