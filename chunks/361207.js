t.d(r, {
  DW: function() {
    return u
  },
  Gn: function() {
    return m
  },
  t3: function() {
    return h
  },
  w4: function() {
    return s
  }
});
var a = t(525654),
  n = t.n(a),
  i = t(271579),
  l = t(314897),
  o = t(981631);
let c = "linux";

function s(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    t = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(o.fzT.DESKTOP).concat(r ? "/ptb" : "", "?platform=").concat(e).concat(null != t ? "&format=".concat(t) : "")
}

function d() {
  var e;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = n().os) || void 0 === e ? void 0 : e.family;
  return null == r ? "win" : -1 !== r.indexOf("Ubuntu") || -1 !== r.indexOf("Debian") || -1 !== r.indexOf("Fedora") || -1 !== r.indexOf("Red Hat") || -1 !== r.indexOf("SuSE") || -1 !== r.indexOf("Linux") ? c : -1 !== r.indexOf("OS X") ? "osx" : "win"
}

function u(e) {
  return ({
    win: "Windows",
    osx: "Mac",
    [c]: "Linux"
  })[d(e)]
}

function h() {
  let e = d();
  return s(e, !1, e === c ? "tar.gz" : null)
}

function m(e, r, t) {
  let a = null != t ? t.toString() : null;
  switch (r) {
    case "iOS":
      return (0, i.ZP)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: l.default.getFingerprint(),
        attemptId: (0, i.WS)()
      });
    case "Android":
      return (0, i.ZP)(null != a ? a : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: l.default.getFingerprint(),
        attemptId: (0, i.WS)()
      });
    default:
      return null != a ? a : "https://www.discord.com"
  }
}