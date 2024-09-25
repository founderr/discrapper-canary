var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(51407),
    s = n(524437),
    l = n(433517),
    u = n(147913),
    c = n(254238),
    d = n(258609),
    _ = n(763296),
    E = n(314897),
    f = n(131951),
    h = n(709054),
    p = n(725380),
    m = n(340332),
    I = n(675478),
    T = n(65154);
function g(e, t, n) {
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
let S = 300,
    A = 2000,
    v = (e) => 'AudioContextSettingsMigrated:'.concat(e),
    N = (e) => (e === T.Yn.STREAM ? o.h.STREAM : o.h.USER);
function O(e, t, n) {
    return e[t].volume === N(n) && !e[t].muted && !e[t].soundboardMuted && delete e[t], e;
}
function R(e) {
    let t = h.default.entries(e),
        n = t.length;
    if (n <= S) return;
    let r = t.sort((e, t) => {
            let [n, { modifiedAt: r }] = e,
                [i, { modifiedAt: a }] = t;
            return Number(r) - Number(a);
        }),
        i = n - S;
    for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n];
    }
}
function C(e) {
    return s.JY.create({
        muted: !1,
        volume: N(e)
    });
}
function y() {
    !l.K.get(v(E.default.getId())) &&
        I.hW.updateAsync(
            'audioContextSettings',
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(f.Z.getState().settingsByContext)) {
                    let i = (0, m.z)(n);
                    if (null == i) continue;
                    let a = e[i],
                        o = String(Date.now()),
                        s = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        s[e] = {
                            muted: t,
                            volume: N(n),
                            modifiedAt: o,
                            soundboardMuted: !1
                        };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        s[e] = {
                            muted: !1,
                            modifiedAt: o,
                            ...s[e],
                            volume: (0, m.r)(t, n)
                        };
                    let l = Object.keys(a).length;
                    for (let [e, [n, r]] of Object.entries(s).entries()) {
                        if (S - l - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = r));
                    }
                }
                return l.K.set(v(E.default.getId()), !0), t;
            },
            I.fy.AUTOMATED
        );
}
function b(e, t, n, r) {
    var i;
    let a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        o = (0, m.z)(n);
    if (null == o) return !1;
    let s = e[o];
    return (s[t] = null !== (i = s[t]) && void 0 !== i ? i : C(n)), r(s[t]), (s[t].modifiedAt = String(Date.now())), a && O(s, t, n), R(s), !0;
}
function L() {
    y();
}
let D = a().debounce(() => {
    x();
}, A);
function M(e, t, n) {
    (0, p.RF)(e, t, { volume: n }), D();
}
function P(e, t, n) {
    (0, p.RF)(e, t, { muted: n }), D.cancel(), x();
}
function U(e, t, n) {
    (0, p.RF)(e, t, { soundboardMuted: n }), D.cancel(), x();
}
let w = a().debounce(c.On, 500, { maxWait: 500 });
function x() {
    I.hW.updateAsync(
        'audioContextSettings',
        (e) => {
            let t = !1;
            return (
                (0, p.$E)((n, r, i) => {
                    let a = b(e, r, n, (e) => {
                        Object.assign(e, i);
                    });
                    t = t || a;
                }),
                t
            );
        },
        I.fy.INFREQUENT_USER_ACTION
    );
}
function G(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === E.default.getId()) return;
    let i = d.Z.getRemoteSessionId();
    null != i &&
        w(i, n, t, {
            muted: f.Z.isLocalMute(n, t),
            volume: r
        }),
        M(t, n, r);
}
function k(e) {
    let { context: t, userId: n } = e;
    n !== E.default.getId() && P(t, n, f.Z.isLocalMute(n, t));
}
function B(e) {
    let { context: t, userId: n } = e;
    n !== E.default.getId() && U(t, n, _.Z.isLocalSoundboardMuted(n));
}
class F extends u.Z {
    constructor(...e) {
        super(...e),
            g(this, 'actions', {
                POST_CONNECTION_OPEN: L,
                AUDIO_SET_LOCAL_VOLUME: G,
                AUDIO_TOGGLE_LOCAL_MUTE: k,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: B
            });
    }
}
t.Z = new F();
