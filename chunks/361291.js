var r,
    i = n(442837),
    a = n(570140),
    o = n(37113),
    s = n(65154);
function l(e, t, n) {
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
let u = o.tI.PRESET_VIDEO,
    c = o.LY.RESOLUTION_720,
    d = o.ws.FPS_30,
    _ = !0;
function E(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.context) === s.Yn.STREAM) {
        if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
        (c = t.qualityOptions.resolution), (d = t.qualityOptions.frameRate);
    }
}
function f(e) {
    let { preset: t, resolution: n, frameRate: r, soundshareEnabled: i } = e,
        a = !1;
    return null != t && ((u = t), (a = !0)), null != n && ((c = n), (a = !0)), null != r && ((d = r), (a = !0)), null != i && ((_ = i), (a = !0)), a;
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (u = null !== (t = e.preset) && void 0 !== t ? t : o.tI.PRESET_VIDEO), (c = e.resolution), (d = e.fps), (_ = null === (n = e.soundshareEnabled) || void 0 === n || n);
        }
    }
    getState() {
        return {
            preset: u,
            resolution: c,
            fps: d,
            soundshareEnabled: _
        };
    }
}
l(h, 'displayName', 'ApplicationStreamingSettingsStore'),
    l(h, 'persistKey', 'ApplicationStreamingSettingStore'),
    (t.Z = new h(a.Z, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: E,
        STREAM_UPDATE_SETTINGS: f
    }));
