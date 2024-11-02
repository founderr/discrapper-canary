n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(51407),
    s = n(524437),
    o = n(433517),
    l = n(147913),
    u = n(254238),
    c = n(258609),
    d = n(763296),
    f = n(314897),
    _ = n(131951),
    h = n(709054),
    p = n(725380),
    m = n(340332),
    g = n(675478),
    E = n(65154);
let v = (e) => 'AudioContextSettingsMigrated:'.concat(e),
    I = (e) => (e === E.Yn.STREAM ? a.h.STREAM : a.h.USER);
function S() {
    o.K.get(v(f.default.getId())) ||
        g.hW.updateAsync(
            'audioContextSettings',
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(_.Z.getState().settingsByContext)) {
                    let i = (0, m.z)(n);
                    if (null == i) continue;
                    let a = e[i],
                        s = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        o[e] = {
                            muted: t,
                            volume: I(n),
                            modifiedAt: s,
                            soundboardMuted: !1
                        };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        o[e] = {
                            muted: !1,
                            modifiedAt: s,
                            ...o[e],
                            volume: (0, m.r)(t, n)
                        };
                    let l = Object.keys(a).length;
                    for (let [e, [n, r]] of Object.entries(o).entries()) {
                        if (300 - l - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = r));
                    }
                }
                return o.K.set(v(f.default.getId()), !0), t;
            },
            g.fy.AUTOMATED
        );
}
let T = i().debounce(() => {
        y();
    }, 2000),
    b = i().debounce(u.On, 500, { maxWait: 500 });
function y() {
    g.hW.updateAsync(
        'audioContextSettings',
        (e) => {
            let t = !1;
            return (
                (0, p.$E)((n, r, i) => {
                    let a = (function (e, t, n, r) {
                        var i, a, o, l, u;
                        let c = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                            d = (0, m.z)(n);
                        if (null == d) return !1;
                        let f = e[d];
                        if (
                            ((f[t] =
                                null !== (i = f[t]) && void 0 !== i
                                    ? i
                                    : ((a = n),
                                      s.JY.create({
                                          muted: !1,
                                          volume: I(a)
                                      }))),
                            r(f[t]),
                            (f[t].modifiedAt = String(Date.now())),
                            c)
                        ) {
                            (o = f), (l = t), (u = n), o[l].volume !== I(u) || o[l].muted || o[l].soundboardMuted || delete o[l];
                        }
                        return (
                            !(function (e) {
                                let t = h.default.entries(e),
                                    n = t.length;
                                if (n <= 300) return;
                                let r = t.sort((e, t) => {
                                        let [n, { modifiedAt: r }] = e,
                                            [i, { modifiedAt: a }] = t;
                                        return Number(r) - Number(a);
                                    }),
                                    i = n - 300;
                                for (let t = 0; t < i; t++) {
                                    let [n] = r[t];
                                    delete e[n];
                                }
                            })(f),
                            !0
                        );
                    })(e, r, n, (e) => {
                        Object.assign(e, i);
                    });
                    t = t || a;
                }),
                t
            );
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function A(e) {
    var t, n, r;
    let { context: i, userId: a, volume: s } = e;
    if (a === f.default.getId()) return;
    let o = c.Z.getRemoteSessionId();
    null != o &&
        b(o, a, i, {
            muted: _.Z.isLocalMute(a, i),
            volume: s
        }),
        (t = i),
        (n = a),
        (r = s),
        (0, p.RF)(t, n, { volume: r }),
        T();
}
function N(e) {
    let { context: t, userId: n } = e;
    if (n !== f.default.getId()) {
        var r, i, a;
        (r = t), (i = n), (a = _.Z.isLocalMute(n, t)), (0, p.RF)(r, i, { muted: a }), T.cancel(), y();
    }
}
function C(e) {
    let { context: t, userId: n } = e;
    if (n !== f.default.getId()) {
        var r, i, a;
        (r = t), (i = n), (a = d.Z.isLocalSoundboardMuted(n)), (0, p.RF)(r, i, { soundboardMuted: a }), T.cancel(), y();
    }
}
class R extends l.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: S,
                AUDIO_SET_LOCAL_VOLUME: A,
                AUDIO_TOGGLE_LOCAL_MUTE: N,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: C
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
t.Z = new R();
