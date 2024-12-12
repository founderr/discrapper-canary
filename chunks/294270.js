var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(846519),
    l = r(147913),
    u = r(314897),
    c = r(70956),
    d = r(557177),
    f = r(697492),
    _ = r(37091),
    h = r(721264);
function p(e, n, r) {
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
let m = 15 * c.Z.Millis.SECOND,
    g = 15 * c.Z.Millis.SECOND,
    E = 550,
    v = ['\uD83C\uDDE9', '\uD83C\uDDF4', '\uD83C\uDDF9', '\uD83C\uDDE6'],
    I = v.length,
    T = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(n, ':').concat(r);
    },
    b = new o.V7(),
    y = [],
    S = {},
    A = (0, d.tu)('highfive_whistle', 'highfive_whistle', 0.6),
    N = (0, d.tu)('highfive_clap', 'highfive_clap', 0.6);
function C(e) {
    let { emoji: n, channelId: r, userId: i } = e,
        a = u.default.getId(),
        o = _.Z.getEnabled();
    if (null != n) {
        if (o && (0, h.Z)(n.name)) return O(n.name, i, r);
        i === a && ((y = [...y, n.name].slice(-1 * I)), s().isEqual(y, v) ? (A.play(), b.stop(), (y = []), (0, f.ME)(!o)) : b.start(m, () => (y = [])));
    }
}
function R(e) {
    let { completingUserId: n, waitingUserId: r, channelId: i } = e,
        a = T(''.concat(n).concat(r), i, !0);
    (S[a] = new o.sW(E, () => {
        delete S[a], (0, f.hu)(n, r, i);
    })),
        S[a].delay();
}
function O(e, n, r) {
    var i;
    let a = T(n, r);
    if (null != _.Z.getWaitingHighFive(r, n)) return;
    let [s, l] =
        null !==
            (i = Object.entries(S).find((e) => {
                let [n] = e;
                return n !== a;
            })) && void 0 !== i
            ? i
            : [];
    if (null != s && null != l) l.cancel(), N.play(), delete S[s], (0, f.Ym)(s.split(':')[0], n, r, e);
    else {
        (0, f._g)(e, n, r), A.play();
        let i = new o.sW(g, () => {
            delete S[n], (0, f.Gd)(n, r);
        });
        (S[n] = i), i.delay();
    }
}
class D extends l.Z {
    _terminate() {
        Object.values(S).forEach((e) => e.cancel()), (S = {});
    }
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                VOICE_CHANNEL_EFFECT_SEND: C,
                HIGH_FIVE_COMPLETE: R
            });
    }
}
n.Z = new D();
