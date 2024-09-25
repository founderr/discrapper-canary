var r = n(47120);
var i = n(213919),
    a = n(570140),
    o = n(317770),
    s = n(358085);
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
class u extends o.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    constructor(...e) {
        super(...e),
            l(this, 'handleConnectionOpen', (e) => {
                ((0, s.isWindows)() || (0, s.isMac)()) && i.encryptAndStoreTokens();
            });
    }
}
t.Z = new u();
