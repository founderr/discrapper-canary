var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = 'UPDATE_NOT_AVAILABLE';
function l(e) {
    s = e.type;
}
class u extends (r = i.ZP.Store) {
    getState() {
        return s;
    }
}
o(u, 'displayName', 'AutoUpdateStore'),
    (t.Z = new u(a.Z, {
        CHECKING_FOR_UPDATES: l,
        UPDATE_NOT_AVAILABLE: l,
        UPDATE_AVAILABLE: l,
        UPDATE_MANUALLY: l,
        UPDATE_ERROR: l,
        UPDATE_DOWNLOADED: l
    }));
