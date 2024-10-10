n.d(t, {
    UB: function () {
        return b;
    },
    Uc: function () {
        return o;
    },
    kE: function () {
        return M;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(470079),
    c = n(442837),
    d = n(570140),
    _ = n(872810),
    E = n(998594),
    f = n(592125),
    h = n(430824),
    p = n(131951),
    I = n(496675),
    m = n(944486),
    T = n(382182),
    S = n(74299),
    g = n(299570),
    A = n(65154);
((r = o || (o = {}))[(r.Present = 0)] = 'Present'), (r[(r.Update = 1)] = 'Update'), (r[(r.Cancel = 2)] = 'Cancel'), (r[(r.Error = 3)] = 'Error');
let N = !1,
    R = 0,
    O = 0,
    v = !1,
    C = {};
function L() {
    return p.Z.supports(A.AN.NATIVE_SCREENSHARE_PICKER);
}
function y() {
    return L() && E.Z.getCurrentConfig({ location: 'NativeScreenSharePickerStore_enabled' }, { autoTrackExposure: !1 }).enableSystemPicker;
}
function D() {
    let e = y() && (O > 0 || (N && 0 === R));
    if (e !== v) {
        var t, n;
        (v = e), null === (n = p.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, v);
    }
}
function b() {
    return (0, u.useEffect)(
        () => (
            R++,
            D(),
            () => {
                0 == --R && D();
            }
        ),
        []
    );
}
function M() {
    return (0, u.useEffect)(
        () => (
            O++,
            D(),
            () => {
                --O, D();
            }
        ),
        []
    );
}
function P() {
    let e = f.Z.getChannel(m.Z.getVoiceChannelId());
    return (N = null != e && (0, S.Z)(p.Z) && (0, T.JL)(e, h.Z, I.Z, !1)), D(), !1;
}
class U extends (l = c.ZP.Store) {
    initialize() {
        this.syncWith([p.Z, m.Z, f.Z, h.Z, I.Z], P), E.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, D), P();
    }
    supported() {
        return L();
    }
    enabled() {
        return y();
    }
    releasePickerStream() {
        (0, g.t)();
    }
    getPickerState() {
        return C;
    }
}
(s = 'NativeScreenSharePickerStore'),
    (a = 'displayName') in (i = U)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
t.ZP = new U(d.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t } = e;
        if (((C = { lastPickerAction: 1 }), 0 === R && !t)) {
            let e = f.Z.getChannel(m.Z.getVoiceChannelId());
            null != e && (0, S.Z)(p.Z) && (0, T.JL)(e, h.Z, I.Z, !1) && (0, _.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
        C = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        C = {
            lastPickerAction: 3,
            lastPickerError: t
        };
    },
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: function () {
        C = { lastPickerAction: 0 };
    },
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
        C = {};
    }
});
