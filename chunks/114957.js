var r = n(47120);
var i = n(224706),
    a = n(978085),
    o = n(147913),
    s = n(283595),
    l = n(358085);
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
class c extends o.Z {
    handlePostConnectionOpen() {
        (0, l.isDesktop)() && (!s.Z.fetched && (0, a.b8)(), i.Z.getDetectableGames());
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { POST_CONNECTION_OPEN: this.handlePostConnectionOpen });
    }
}
t.Z = new c();
