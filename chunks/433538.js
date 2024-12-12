var i = r(47120);
var a = r(241601),
    s = r(147913),
    o = r(405656);
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
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, a.Ql)(o.Pe);
    }
    _terminate() {
        var e, n;
        null === (e = (n = this)._unsubscribeIntlLoadingStore) || void 0 === e || e.call(n);
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: o.Pe,
                POST_CONNECTION_OPEN: o.Pe
            }),
            l(this, '_unsubscribeIntlLoadingStore', void 0);
    }
}
n.Z = new u();
