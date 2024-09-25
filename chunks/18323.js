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
let s = !1;
function l(e) {
    let { isRegistered: t } = e;
    s = t;
}
class u extends (r = i.ZP.Store) {
    isProtocolRegistered() {
        return s;
    }
}
o(u, 'displayName', 'SpotifyProtocolStore'), (t.Z = new u(a.Z, { SPOTIFY_SET_PROTOCOL_REGISTERED: l }));
