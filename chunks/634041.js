var r,
    i = n(724458);
var a = n(442837),
    o = n(46973),
    s = n(570140),
    l = n(581883),
    u = n(131951),
    c = n(944486),
    d = n(594174),
    _ = n(647177);
function E(e, t, n) {
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
let f = !1,
    h = null,
    p = !1,
    m = {};
function I(e) {
    let { assets: t } = e;
    m = t.reduce(
        (e, t) => ({
            ...e,
            [t.id]: t
        }),
        {}
    );
}
function T(e) {
    let { videoFilterAsset: t } = e;
    m = {
        ...m,
        [t.id]: t
    };
}
function g(e) {
    let { videoFilterAsset: t } = e;
    (m = { ...m }), delete m[t.id];
}
function S(e) {
    var t;
    let n = d.default.getCurrentUser();
    if (null == n) return !1;
    let r = null != e ? e : (0, _.Gx)(null === (t = l.Z.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
    return null != c.Z.getVoiceChannelId() && u.Z.isVideoEnabled() && null != r;
}
function A(e) {
    let { backgroundOption: t } = e;
    S(t) && (p = !0);
}
function v(e) {
    let { settings: t } = e;
    o.TO.CAMERA_BACKGROUND_LIVE in t && (f = !0);
}
function N() {
    h !== c.Z.getVoiceChannelId() && (p = !1), S() && (p = !0), (h = c.Z.getVoiceChannelId());
}
class O extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.Z, u.Z), this.syncWith([c.Z, u.Z], N);
    }
    get videoFilterAssets() {
        return m;
    }
    get hasBeenApplied() {
        return f;
    }
    get hasUsedBackgroundInCall() {
        return p;
    }
}
E(O, 'displayName', 'VideoBackgroundStore'),
    (t.Z = new O(s.Z, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: I,
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: T,
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: g,
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: A,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: v
    }));
