"use strict";
n.r(t), n.d(t, {
  getChromeVersion: function() {
    return c
  },
  getFirefoxVersion: function() {
    return A
  },
  canUseWebp: function() {
    return S
  },
  supportsHEVCAlpha: function() {
    return f
  }
});
var r, i, o, l, u, a = n("597755"),
  s = n.n(a);
let E = (null !== (r = s.name) && void 0 !== r ? r : "unknown").toLowerCase(),
  _ = "chrome" === E.toLowerCase() ? parseInt(null !== (i = s.version) && void 0 !== i ? i : "", 10) : -1;

function c() {
  return _
}
let d = "electron" === E.toLowerCase() ? parseInt(null !== (o = s.version) && void 0 !== o ? o : "", 10) : -1,
  T = "firefox" === E.toLowerCase() ? parseInt(null !== (l = s.version) && void 0 !== l ? l : "", 10) : -1;

function A() {
  return T
}
let I = "edge" === E.toLowerCase() ? parseInt(null !== (u = s.version) && void 0 !== u ? u : "", 10) : -1;

function S() {
  return -1 !== _ || -1 !== d || -1 !== T || -1 !== I
}

function f() {
  var e;
  let t = window.navigator,
    n = t.userAgent.toLowerCase(),
    r = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null,
    i = -1 !== n.indexOf("safari") && !(-1 !== n.indexOf("chrome")) && -1 !== n.indexOf("version/");
  return i && r
}