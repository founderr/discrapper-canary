"use strict";
n.r(t), n.d(t, {
  getCurrentPlatformDownloadURL: function() {
    return h
  },
  getMobileDownloadLink: function() {
    return f
  },
  getPlatformReadableName: function() {
    return c
  },
  makeDesktopDownloadURL: function() {
    return u
  }
});
var i = n("525654"),
  r = n.n(i),
  a = n("271579"),
  l = n("314897"),
  s = n("981631");
let o = "linux";

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(s.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = r().os) || void 0 === e ? void 0 : e.family;
  return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
}

function c(e) {
  return ({
    win: "Windows",
    osx: "Mac",
    [o]: "Linux"
  })[d(e)]
}

function h() {
  let e = d();
  return u(e, !1, e === o ? "tar.gz" : null)
}

function f(e, t, n) {
  let i = null != n ? n.toString() : null;
  switch (t) {
    case "iOS":
      return (0, a.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: l.default.getFingerprint(),
        attemptId: (0, a.generateAttemptId)()
      });
    case "Android":
      return (0, a.default)(null != i ? i : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: l.default.getFingerprint(),
        attemptId: (0, a.generateAttemptId)()
      });
    default:
      return null != i ? i : "https://www.discord.com"
  }
}