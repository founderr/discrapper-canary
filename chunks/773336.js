"use strict";
var t, o;
E.r(_), E.d(_, {
  PlatformTypes: function() {
    return t
  },
  isPlatformEmbedded: function() {
    return T
  },
  isWindows: function() {
    return a
  },
  isMac: function() {
    return n
  },
  isLinux: function() {
    return i
  },
  isDesktop: function() {
    return A
  },
  isWeb: function() {
    return s
  },
  isAndroidChrome: function() {
    return R
  },
  isAndroidWeb: function() {
    return N
  },
  isAndroid: function() {
    return O
  },
  isIOS: function() {
    return S
  },
  getPlatform: function() {
    return L
  },
  getPlatformName: function() {
    return l
  },
  getNativePlatform: function() {
    return D
  },
  getOS: function() {
    return C
  }
}), (o = t || (t = {})).WINDOWS = "WINDOWS", o.OSX = "OSX", o.LINUX = "LINUX", o.WEB = "WEB";
let I = window.DiscordNative,
  T = null != I,
  r = null != I ? I.process.platform : "";

function a() {
  return /^win/.test(r)
}

function n() {
  return "darwin" === r
}

function i() {
  return "linux" === r
}

function A() {
  return a() || n() || i()
}

function s() {
  return "WEB" === L()
}

function R() {
  return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
}

function N() {
  var e;
  return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null
}

function O() {
  return "android" === r
}

function S() {
  return "ios" === r
}

function L() {
  return a() ? "WINDOWS" : n() ? "OSX" : i() ? "LINUX" : "WEB"
}

function l() {
  return r
}

function D() {
  switch (r) {
    case "ios":
    case "android":
      return r;
    default:
      return "web"
  }
}

function C() {
  let {
    userAgent: e
  } = window.navigator;
  if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
  if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
  if (/Android/.test(e)) return "android";
  else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
  else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
  else if (/Linux/i.test(e)) return "linux"
}