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
let s = { matureAgree: !1 };
function l() {
    s.matureAgree = !0;
}
class u extends (r = i.ZP.Store) {
    get didMatureAgree() {
        return s.matureAgree;
    }
}
o(u, 'displayName', 'ApplicationStoreSettingsStore'), (t.Z = new u(a.Z, { APPLICATION_STORE_MATURE_AGREE: l }));
