n.d(t, {
    X: function () {
        return A;
    }
});
var i,
    a = n(392711),
    s = n.n(a),
    r = n(442837),
    l = n(570140),
    o = n(846027),
    c = n(581883),
    d = n(358085),
    u = n(131951),
    _ = n(981631),
    E = n(65154);
function h(e, t, n) {
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
let m = {},
    I = m,
    g = !1,
    p = {},
    T = {},
    f = {},
    S = {
        id: null,
        justChanged: !1
    },
    C = {
        id: null,
        justChanged: !1
    },
    N = /\(([^)]+)\)/;
function A(e) {
    if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
        let t = e.name.match(N);
        if (null != t) return t[1];
    }
    return e.name;
}
function v(e, t, n) {
    return null == e || e.displayName !== t
        ? {
              displayName: t,
              type: n
          }
        : (e.type === _.QyF.INPUT && n === _.QyF.OUTPUT) || (e.type === _.QyF.OUTPUT && n === _.QyF.INPUT)
          ? {
                displayName: t,
                type: _.QyF.INPUT_AND_OUTPUT
            }
          : e;
}
class L extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z, c.Z), (I = null != e ? e : m);
    }
    getUserAgnosticState() {
        return I;
    }
    get initialized() {
        return g;
    }
    get lastDeviceConnected() {
        return f;
    }
    get inputDevices() {
        return p;
    }
    get lastInputSystemDevice() {
        return S;
    }
    get outputDevices() {
        return T;
    }
    get lastOutputSystemDevice() {
        return C;
    }
}
h(L, 'displayName', 'ConnectedDeviceStore'),
    h(L, 'persistKey', 'ConnectedDeviceStore'),
    (t.Z = new L(l.Z, {
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n } = e,
                i = {};
            (S.justChanged = !1),
                t.forEach((e) => {
                    if (((i[A(e)] = e.id), e.id === E.w5)) {
                        var t;
                        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                        n !== S.id && (S.justChanged = !0), (S.id = n);
                    }
                });
            let a = {};
            if (
                ((C.justChanged = !1),
                n.forEach((e) => {
                    if (((a[A(e)] = e.id), e.id === E.w5)) {
                        var t;
                        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                        n !== C.id && (C.justChanged = !0), (C.id = n);
                    }
                }),
                !g)
            ) {
                (p = i), (T = a), (g = !0);
                return;
            }
            let r = Object.keys(p),
                l = Object.keys(i),
                o = Object.keys(T),
                c = Object.keys(a),
                d = s().difference(r, l),
                u = s().difference(o, c);
            return (
                d.length > 0 || u.length > 0
                    ? (f = {})
                    : (s()
                          .difference(l, r)
                          .forEach((e) => {
                              f[e] = v(f[e], e, _.QyF.INPUT);
                          }),
                      s()
                          .difference(c, o)
                          .forEach((e) => {
                              f[e] = v(f[e], e, _.QyF.OUTPUT);
                          })),
                !(s().isEqual(r, l) && s().isEqual(o, c)) && ((p = i), (T = a), !0)
            );
        },
        CONNECTED_DEVICE_SET: function (e) {
            let { displayName: t, connectedDevicePreference: n, location: i } = e;
            !(function (e, t, n) {
                if (t === _.aVf.INPUT || t === _.aVf.INPUT_AND_OUTPUT) {
                    let t = p[e];
                    null != t && l.Z.wait(() => o.Z.setInputDevice(t, { location: n }));
                }
                if (t === _.aVf.OUTPUT || t === _.aVf.INPUT_AND_OUTPUT) {
                    let t = T[e];
                    l.Z.wait(() => o.Z.setOutputDevice(t, { location: n }));
                }
            })(t, n, i),
                delete f[t];
        },
        CONNECTED_DEVICE_IGNORE: function (e) {
            let { displayName: t } = e;
            delete f[t];
        },
        CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
            (f = {}), (I = { neverShowModal: !0 });
        }
    }));
