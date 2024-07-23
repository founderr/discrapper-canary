t(653041), t(47120);
var n, a = t(442837),
  i = t(570140);

function r(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
let o = !1,
  l = [];
class c extends(n = a.ZP.PersistedStore) {
  initialize(e) {
null != e && (o = e.persistentCodesEnabled, l = e.uploadedKeyVersions);
  }
  getState() {
return {
  persistentCodesEnabled: o,
  uploadedKeyVersions: l
};
  }
  getPersistentCodesEnabled() {
return o;
  }
  getUploadedKeyVersionsCached() {
return l;
  }
}
r(c, 'displayName', 'SecureFramesPersistedStore'), r(c, 'persistKey', 'SecureFramesPersistedStore'), s.Z = new c(i.Z, {
  SECURE_FRAMES_SETTINGS_UPDATE: function(e) {
o = e.persistentCodesEnabled;
  },
  SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS: function(e) {
let s = [];
for (let t of l) {
  if (t === e.keyVersion)
    return;
  s.push(t);
}
s.push(e.keyVersion), l = s;
  }
});