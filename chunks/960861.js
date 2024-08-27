n.d(t, {
    UB: function () {
        return k;
    },
    Uc: function () {
        return a;
    }
});
var r,
    i,
    o,
    c,
    a,
    l,
    u = n(470079),
    s = n(442837),
    d = n(570140),
    f = n(872810),
    _ = n(998594),
    p = n(592125),
    m = n(430824),
    g = n(131951),
    h = n(496675),
    v = n(944486),
    S = n(382182),
    C = n(74299),
    x = n(65154);
((r = a || (a = {}))[(r.Present = 0)] = 'Present'), (r[(r.Update = 1)] = 'Update'), (r[(r.Cancel = 2)] = 'Cancel'), (r[(r.Error = 3)] = 'Error');
let b = 0,
    T = {};
function E() {
    return g.Z.supports(x.AN.NATIVE_SCREENSHARE_PICKER);
}
function I() {
    return E() && _.Z.getCurrentConfig({ location: 'NativeScreenSharePickerStore_enabled' }, { autoTrackExposure: !1 }).enableSystemPicker;
}
function P() {
    var e, t;
    null === (t = g.Z.getMediaEngine()) || void 0 === t || null === (e = t.releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t);
}
function k() {
    return (0, u.useEffect)(
        () => (
            b++,
            () => {
                0 == --b && P();
            }
        ),
        []
    );
}
function N(e) {
    if (I()) {
        var t, n;
        P();
        let r = p.Z.getChannel(e),
            i = null != r && (0, C.Z)(g.Z) && (0, S.JL)(r, m.Z, h.Z, !1);
        null === (n = g.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, i);
    }
}
function w() {
    P(), N(v.Z.getVoiceChannelId());
}
class Z extends (l = s.ZP.Store) {
    initialize() {
        this.syncWith([g.Z, v.Z, p.Z, m.Z, h.Z], w), _.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, w);
    }
    supported() {
        return E();
    }
    enabled() {
        return I();
    }
    presentPicker(e) {
        var t, n;
        (T = { lastPickerAction: 0 }), null === (n = g.Z.getMediaEngine()) || void 0 === n || null === (t = n.presentNativeScreenSharePicker) || void 0 === t || t.call(n, e);
    }
    releasePickerStream() {
        P();
    }
    getPickerState() {
        return T;
    }
}
(c = 'NativeScreenSharePickerStore'),
    (o = 'displayName') in (i = Z)
        ? Object.defineProperty(i, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = c);
t.ZP = new Z(d.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t } = e;
        if (((T = { lastPickerAction: 1 }), 0 === b && !t)) {
            let e = p.Z.getChannel(v.Z.getVoiceChannelId());
            null != e && (0, C.Z)(g.Z) && (0, S.JL)(e, m.Z, h.Z, !1) && (0, f.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function (e) {
        let {} = e;
        T = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        T = {
            lastPickerAction: 3,
            lastPickerError: t
        };
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        N(t);
    }
});
