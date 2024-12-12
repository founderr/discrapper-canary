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
let l = r(65154).dX;
function u(e) {
    l = e.bitrate;
}
class c extends (i = a.ZP.Store) {
    get bitrate() {
        return l;
    }
}
o(c, 'displayName', 'BitRateStore'), (n.Z = new c(s.Z, { SET_CHANNEL_BITRATE: u }));
