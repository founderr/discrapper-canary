var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(846519),
    s = n(147913),
    l = n(314897),
    u = n(70956),
    c = n(557177),
    d = n(697492),
    _ = n(37091),
    E = n(721264);
function f(e, t, n) {
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
let h = 15 * u.Z.Millis.SECOND,
    p = 15 * u.Z.Millis.SECOND,
    m = 550,
    I = ['\uD83C\uDDE9', '\uD83C\uDDF4', '\uD83C\uDDF9', '\uD83C\uDDE6'],
    T = I.length,
    g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(t, ':').concat(n);
    },
    S = new o.V7(),
    A = [],
    v = {},
    N = (0, c.tu)('highfive_whistle', 'highfive_whistle', 0.6),
    O = (0, c.tu)('highfive_clap', 'highfive_clap', 0.6);
function R(e) {
    let { emoji: t, channelId: n, userId: r } = e,
        i = l.default.getId(),
        o = _.Z.getEnabled();
    if (null != t) {
        if (o && (0, E.Z)(t.name)) return y(t.name, r, n);
        r === i && ((A = [...A, t.name].slice(-1 * T)), a().isEqual(A, I) ? (N.play(), S.stop(), (A = []), (0, d.ME)(!o)) : S.start(h, () => (A = [])));
    }
}
function C(e) {
    let { completingUserId: t, waitingUserId: n, channelId: r } = e,
        i = g(''.concat(t).concat(n), r, !0);
    (v[i] = new o.sW(m, () => {
        delete v[i], (0, d.hu)(t, n, r);
    })),
        v[i].delay();
}
function y(e, t, n) {
    var r;
    let i = g(t, n);
    if (null != _.Z.getWaitingHighFive(n, t)) return;
    let [a, s] =
        null !==
            (r = Object.entries(v).find((e) => {
                let [t] = e;
                return t !== i;
            })) && void 0 !== r
            ? r
            : [];
    if (null != a && null != s) s.cancel(), O.play(), delete v[a], (0, d.Ym)(a.split(':')[0], t, n, e);
    else {
        (0, d._g)(e, t, n), N.play();
        let r = new o.sW(p, () => {
            delete v[t], (0, d.Gd)(t, n);
        });
        (v[t] = r), r.delay();
    }
}
class b extends s.Z {
    _terminate() {
        Object.values(v).forEach((e) => e.cancel()), (v = {});
    }
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                VOICE_CHANNEL_EFFECT_SEND: R,
                HIGH_FIVE_COMPLETE: C
            });
    }
}
t.Z = new b();
