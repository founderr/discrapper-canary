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
let l = r(981631).Ucd.AUTO;
function u(e) {
    l = e.mode;
}
class c extends (i = a.ZP.Store) {
    get mode() {
        return l;
    }
}
o(c, 'displayName', 'VideoQualityModeStore'), (n.Z = new c(s.Z, { SET_CHANNEL_VIDEO_QUALITY_MODE: u }));
