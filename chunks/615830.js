s(653041), s(47120);
var n, a = s(442837),
  i = s(570140);

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
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
r(c, 'displayName', 'SecureFramesPersistedStore'), r(c, 'persistKey', 'SecureFramesPersistedStore'), t.Z = new c(i.Z, {
  SECURE_FRAMES_SETTINGS_UPDATE: function(e) {
o = e.persistentCodesEnabled;
  },
  SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS: function(e) {
let t = [];
for (let s of l) {
  if (s === e.keyVersion)
    return;
  t.push(s);
}
t.push(e.keyVersion), l = t;
  }
});