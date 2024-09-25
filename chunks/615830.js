var r,
    i = n(653041);
var a = n(47120);
var o = n(442837),
    s = n(570140);
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
let u = [],
    c = !1,
    d = u;
function _(e) {
    c = e.persistentCodesEnabled;
}
function E(e) {
    let t = [];
    for (let n of d) {
        if (n === e.keyVersion) return;
        t.push(n);
    }
    t.push(e.keyVersion), (d = t);
}
function f() {
    d = u;
}
class h extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        (c = null !== (t = null == e ? void 0 : e.persistentCodesEnabled) && void 0 !== t && t), (d = null !== (n = null == e ? void 0 : e.uploadedKeyVersions) && void 0 !== n ? n : u);
    }
    getState() {
        return {
            persistentCodesEnabled: c,
            uploadedKeyVersions: d
        };
    }
    getPersistentCodesEnabled() {
        return c;
    }
    getUploadedKeyVersionsCached() {
        return d;
    }
}
l(h, 'displayName', 'SecureFramesPersistedStore'),
    l(h, 'persistKey', 'SecureFramesPersistedStore'),
    (t.Z = new h(s.Z, {
        SECURE_FRAMES_SETTINGS_UPDATE: _,
        SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: E,
        SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: f
    }));
