r.d(n, {
    UB: function () {
        return O;
    },
    Uc: function () {
        return i;
    },
    kE: function () {
        return D;
    }
});
var i,
    a,
    s = r(192379),
    o = r(442837),
    l = r(570140),
    u = r(872810),
    c = r(998594),
    d = r(592125),
    f = r(430824),
    _ = r(131951),
    h = r(496675),
    p = r(944486),
    m = r(102172),
    g = r(74299),
    E = r(299570),
    v = r(65154);
function I(e, n, r) {
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
!(function (e) {
    (e[(e.Present = 0)] = 'Present'), (e[(e.Update = 1)] = 'Update'), (e[(e.Cancel = 2)] = 'Cancel'), (e[(e.Error = 3)] = 'Error');
})(i || (i = {}));
let T = !1,
    b = 0,
    y = 0,
    S = !1,
    A = {};
function N() {
    return _.Z.supports(v.AN.NATIVE_SCREENSHARE_PICKER);
}
function C() {
    return _.Z.getUseSystemScreensharePicker();
}
function R() {
    let e = C() && (y > 0 || (T && 0 === b));
    if (e !== S) {
        var n, r;
        (S = e), null === (r = _.Z.getMediaEngine()) || void 0 === r || null === (n = r.setNativeDesktopVideoSourcePickerActive) || void 0 === n || n.call(r, S);
    }
}
function O() {
    return (0, s.useEffect)(
        () => (
            b++,
            R(),
            () => {
                0 == --b && R();
            }
        ),
        []
    );
}
function D() {
    return (0, s.useEffect)(
        () => (
            y++,
            R(),
            () => {
                --y, R();
            }
        ),
        []
    );
}
function L() {
    let e = d.Z.getChannel(p.Z.getVoiceChannelId());
    return (T = null != e && (0, g.Z)(_.Z) && (0, m.JL)(e, f.Z, h.Z, !1)), R(), !1;
}
class x extends (a = o.ZP.Store) {
    initialize() {
        this.syncWith([_.Z, p.Z, d.Z, f.Z, h.Z], L), c.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, R), L();
    }
    supported() {
        return N();
    }
    enabled() {
        return C();
    }
    releasePickerStream() {
        (0, E.t)();
    }
    getPickerState() {
        return A;
    }
}
function w(e) {
    let { existing: n } = e;
    if (((A = { lastPickerAction: 1 }), 0 === b && !n)) {
        let e = d.Z.getChannel(p.Z.getVoiceChannelId());
        null != e && (0, g.Z)(_.Z) && (0, m.JL)(e, f.Z, h.Z, !1) && (0, u.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
    }
}
function P() {
    A = { lastPickerAction: 2 };
}
function M(e) {
    let { error: n } = e;
    A = {
        lastPickerAction: 3,
        lastPickerError: n
    };
}
function k() {
    A = { lastPickerAction: 0 };
}
function U() {
    A = {};
}
I(x, 'displayName', 'NativeScreenSharePickerStore'),
    (n.ZP = new x(l.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: w,
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: P,
        NATIVE_SCREEN_SHARE_PICKER_ERROR: M,
        NATIVE_SCREEN_SHARE_PICKER_PRESENT: k,
        NATIVE_SCREEN_SHARE_PICKER_RELEASE: U
    }));
