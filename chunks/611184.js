var r = n(47120);
var i = n(147913),
    a = n(594190),
    o = n(77498),
    s = n(454293);
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
function u(e) {
    var t, n;
    let { game: r } = e,
        i = a.ZP.isDetectionEnabled(r),
        l = null !== (n = r.id) && void 0 !== n ? n : null === (t = o.Z.getGameByName(r.name)) || void 0 === t ? void 0 : t.id;
    null != l && (0, s.M)(l, i);
}
class c extends i.Z {
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                RUNNING_GAME_TOGGLE_DETECTION: u,
                RUNNING_GAME_DELETE_ENTRY: u
            });
    }
}
t.Z = new c();
