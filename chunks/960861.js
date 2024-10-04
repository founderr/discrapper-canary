n.d(t, {
    UB: function () {
        return y;
    },
    Uc: function () {
        return r;
    },
    kE: function () {
        return L;
    }
});
var r,
    i,
    a = n(470079),
    o = n(442837),
    s = n(570140),
    l = n(872810),
    u = n(998594),
    c = n(592125),
    d = n(430824),
    _ = n(131951),
    E = n(496675),
    f = n(944486),
    h = n(382182),
    p = n(74299),
    m = n(299570),
    I = n(65154);
function T(e, t, n) {
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
!(function (e) {
    (e[(e.Present = 0)] = 'Present'), (e[(e.Update = 1)] = 'Update'), (e[(e.Cancel = 2)] = 'Cancel'), (e[(e.Error = 3)] = 'Error');
})(r || (r = {}));
let g = !1,
    S = 0,
    A = 0,
    v = !1,
    N = {};
function O() {
    return _.Z.supports(I.AN.NATIVE_SCREENSHARE_PICKER);
}
function R() {
    return O() && u.Z.getCurrentConfig({ location: 'NativeScreenSharePickerStore_enabled' }, { autoTrackExposure: !1 }).enableSystemPicker;
}
function C() {
    let e = R() && (A > 0 || (g && 0 === S));
    if (e !== v) {
        var t, n;
        (v = e), null === (n = _.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, v);
    }
}
function y() {
    return (0, a.useEffect)(
        () => (
            S++,
            C(),
            () => {
                0 == --S && C();
            }
        ),
        []
    );
}
function L() {
    return (0, a.useEffect)(
        () => (
            A++,
            C(),
            () => {
                --A, C();
            }
        ),
        []
    );
}
function b() {
    let e = c.Z.getChannel(f.Z.getVoiceChannelId());
    return (g = null != e && (0, p.Z)(_.Z) && (0, h.JL)(e, d.Z, E.Z, !1)), C(), !1;
}
class D extends (i = o.ZP.Store) {
    initialize() {
        this.syncWith([_.Z, f.Z, c.Z, d.Z, E.Z], b), u.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, C), b();
    }
    supported() {
        return O();
    }
    enabled() {
        return R();
    }
    releasePickerStream() {
        (0, m.t)();
    }
    getPickerState() {
        return N;
    }
}
function M(e) {
    let { existing: t } = e;
    if (((N = { lastPickerAction: 1 }), 0 === S && !t)) {
        let e = c.Z.getChannel(f.Z.getVoiceChannelId());
        null != e && (0, p.Z)(_.Z) && (0, h.JL)(e, d.Z, E.Z, !1) && (0, l.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
    }
}
function P() {
    N = { lastPickerAction: 2 };
}
function U(e) {
    let { error: t } = e;
    N = {
        lastPickerAction: 3,
        lastPickerError: t
    };
}
function w() {
    N = { lastPickerAction: 0 };
}
function x() {
    N = {};
}
T(D, 'displayName', 'NativeScreenSharePickerStore'),
    (t.ZP = new D(s.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: M,
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: P,
        NATIVE_SCREEN_SHARE_PICKER_ERROR: U,
        NATIVE_SCREEN_SHARE_PICKER_PRESENT: w,
        NATIVE_SCREEN_SHARE_PICKER_RELEASE: x
    }));
