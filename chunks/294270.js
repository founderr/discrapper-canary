n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(846519),
    s = n(147913),
    o = n(314897),
    l = n(70956),
    u = n(557177),
    c = n(697492),
    d = n(37091),
    f = n(721264);
let _ = 15 * l.Z.Millis.SECOND,
    h = 15 * l.Z.Millis.SECOND,
    p = ['\uD83C\uDDE9', '\uD83C\uDDF4', '\uD83C\uDDF9', '\uD83C\uDDE6'],
    m = p.length,
    g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(t, ':').concat(n);
    },
    E = new a.V7(),
    v = [],
    I = {},
    S = (0, u.tu)('highfive_whistle', 'highfive_whistle', 0.6),
    T = (0, u.tu)('highfive_clap', 'highfive_clap', 0.6);
function b(e) {
    let { emoji: t, channelId: n, userId: r } = e,
        s = o.default.getId(),
        l = d.Z.getEnabled();
    if (null != t) {
        if (l && (0, f.Z)(t.name))
            return (function (e, t, n) {
                var r;
                let i = g(t, n);
                if (null != d.Z.getWaitingHighFive(n, t)) return;
                let [s, o] =
                    null !==
                        (r = Object.entries(I).find((e) => {
                            let [t] = e;
                            return t !== i;
                        })) && void 0 !== r
                        ? r
                        : [];
                if (null != s && null != o) o.cancel(), T.play(), delete I[s], (0, c.Ym)(s.split(':')[0], t, n, e);
                else {
                    (0, c._g)(e, t, n), S.play();
                    let r = new a.sW(h, () => {
                        delete I[t], (0, c.Gd)(t, n);
                    });
                    (I[t] = r), r.delay();
                }
            })(t.name, r, n);
        r === s && ((v = [...v, t.name].slice(-1 * m)), i().isEqual(v, p) ? (S.play(), E.stop(), (v = []), (0, c.ME)(!l)) : E.start(_, () => (v = [])));
    }
}
function y(e) {
    let { completingUserId: t, waitingUserId: n, channelId: r } = e,
        i = g(''.concat(t).concat(n), r, !0);
    (I[i] = new a.sW(550, () => {
        delete I[i], (0, c.hu)(t, n, r);
    })),
        I[i].delay();
}
class A extends s.Z {
    _terminate() {
        Object.values(I).forEach((e) => e.cancel()), (I = {});
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                VOICE_CHANNEL_EFFECT_SEND: b,
                HIGH_FIVE_COMPLETE: y
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new A();
