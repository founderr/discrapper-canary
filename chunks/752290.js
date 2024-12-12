var i = r(47120);
var a = r(729357),
    s = r.n(a),
    o = r(147913),
    l = r(557177);
function u(e, n, r) {
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
let c = 100,
    d = 0.5,
    f = 500,
    _ = (0, l.tu)('vibing_wumpus', 'vibing_wumpus', 0),
    h = 0,
    p = 0,
    m = null;
function g(e, n) {
    let r = Math.round(100 * e),
        i = Math.round(100 * p),
        a = Math.round(100 * h);
    (r > 0 && a >= i) || (r < 0 && a <= i) ? (clearInterval(m), 0 === i && null != n && n()) : ((a += r), (h = a / 100), (_.volume = s()(h, 0, d)));
}
function E(e) {
    null != m && clearInterval(m), (p = 0);
    let n = b();
    m = setInterval(() => {
        g(n, e);
    }, c);
}
function v() {
    null != m && clearInterval(m), _.loop(), (p = d);
    let e = b();
    m = setInterval(() => g(e), c);
}
function I() {
    E(_.pause.bind(_));
}
function T() {
    E(_.stop.bind(_));
}
function b() {
    return (c / f) * (p - h);
}
class y extends o.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                VIBING_WUMPUS_PLAY_MUSIC: v,
                VIBING_WUMPUS_STOP_MUSIC: T,
                VIBING_WUMPUS_PAUSE_MUSIC: I
            });
    }
}
n.Z = new y();
