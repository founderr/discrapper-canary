var i = r(47120);
var a = r(213919),
    s = r(570140),
    o = r(317770),
    l = r(358085);
function u(e, n, r) {
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
class c extends o.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    constructor(...e) {
        super(...e),
            u(this, 'handleConnectionOpen', (e) => {
                ((0, l.isWindows)() || (0, l.isMac)()) && a.encryptAndStoreTokens();
            });
    }
}
n.Z = new c();
