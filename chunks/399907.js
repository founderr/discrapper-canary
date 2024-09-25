var r = n(47120);
var i = n(956067),
    a = n(147913),
    o = n(70956),
    s = n(640795),
    l = n(139674);
function u(e, t, n) {
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
let c = 4 * o.Z.Millis.HOUR;
class d extends a.Z {
    _initialize() {
        setTimeout(() => i.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => l.Z.getBlockedDomainList()), 1000), setTimeout(() => (0, s.q)(), 10 * o.Z.Millis.SECOND), (this.intervalID = setInterval(s.q, c));
    }
    _terminate() {
        clearInterval(this.intervalID);
    }
    constructor(...e) {
        super(...e), u(this, 'intervalID', void 0);
    }
}
t.Z = new d();
