var i,
    a = r(442837),
    s = r(570140);
function o(e, n, r) {
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
let l = !1;
function u(e) {
    let { isRegistered: n } = e;
    l = n;
}
class c extends (i = a.ZP.Store) {
    isProtocolRegistered() {
        return l;
    }
}
o(c, 'displayName', 'SpotifyProtocolStore'), (n.Z = new c(s.Z, { SPOTIFY_SET_PROTOCOL_REGISTERED: u }));
