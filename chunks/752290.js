var r = n(47120);
var i = n(729357),
    a = n.n(i),
    o = n(147913),
    s = n(557177);
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
let u = 100,
    c = 0.5,
    d = 500,
    _ = (0, s.tu)('vibing_wumpus', 'vibing_wumpus', 0),
    E = 0,
    f = 0,
    h = null;
function p(e, t) {
    let n = Math.round(100 * e),
        r = Math.round(100 * f),
        i = Math.round(100 * E);
    (n > 0 && i >= r) || (n < 0 && i <= r) ? (clearInterval(h), 0 === r && null != t && t()) : ((i += n), (E = i / 100), (_.volume = a()(E, 0, c)));
}
function m(e) {
    null != h && clearInterval(h), (f = 0);
    let t = S();
    h = setInterval(() => {
        p(t, e);
    }, u);
}
function I() {
    null != h && clearInterval(h), _.loop(), (f = c);
    let e = S();
    h = setInterval(() => p(e), u);
}
function T() {
    m(_.pause.bind(_));
}
function g() {
    m(_.stop.bind(_));
}
function S() {
    return (u / d) * (f - E);
}
class A extends o.Z {
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                VIBING_WUMPUS_PLAY_MUSIC: I,
                VIBING_WUMPUS_STOP_MUSIC: g,
                VIBING_WUMPUS_PAUSE_MUSIC: T
            });
    }
}
t.Z = new A();
