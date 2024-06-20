t.d(s, {
  Z: function() {
    return _
  }
}), t(47120), t(757143), t(653041);
var n = t(735250);
t(470079);
var i = t(525654),
  a = t.n(i),
  l = t(481060),
  r = t(579806),
  o = t(304761),
  c = t(969832),
  E = t(689938),
  d = t(450092);

function _() {
  var e, s, t, i, _, T;
  let S = window.GLOBAL_ENV.RELEASE_CHANNEL,
    u = "303686",
    I = (e = "14fc5d502edf4a0f02d9d23d85f0410c76f0605b", e.substring(0, 7)),
    N = null === r.Z || void 0 === r.Z ? void 0 : r.Z.remoteApp.getVersion(),
    A = null === r.Z || void 0 === r.Z ? void 0 : null === (s = (t = r.Z.remoteApp).getBuildNumber) || void 0 === s ? void 0 : s.call(t),
    C = null === r.Z || void 0 === r.Z ? void 0 : null === (i = (_ = r.Z.remoteApp).getAppArch) || void 0 === i ? void 0 : i.call(_),
    O = null === (T = o.C.getCurrentBuildOverride().overrides) || void 0 === T ? void 0 : T.discord_web,
    m = function() {
      var e;
      let s = null === a() || void 0 === a() ? void 0 : null === (e = a().os) || void 0 === e ? void 0 : e.toString();
      if (null == s || null == r.Z) return null;
      let t = r.Z.os.release,
        [n, i, l] = t.split(".").map(e => parseInt(e, 10));
      return s.includes("Windows 10") && void 0 !== l && l >= 22e3 && (s = s.replace("Windows 10", "Windows 11")), s.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (s = "macOS ".concat(n - 9)), "".concat(s, " (").concat(t, ")")
    }(),
    h = [S, u, "(".concat(I, ")")];
  return null != N && (h.push("Host ".concat(N)), null != C && h.push(C.toLowerCase()), null != A && h.push("(".concat(A, ")"))), h.push("Build Override: ".concat(null != O ? O.id : "N/A")), null != m && h.push(m), (0, n.jsx)(c.o, {
    copyValue: h.join(" "),
    disableCopy: !1,
    copyTooltip: E.Z.Messages.COPY_VERSION,
    showCopyIcon: !1,
    children: (0, n.jsxs)("div", {
      className: d.info,
      children: [(0, n.jsxs)(l.Text, {
        tag: "span",
        className: d.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: [S, " ", u, " ", (0, n.jsxs)("span", {
          className: d.versionHash,
          children: ["(", I, ")"]
        })]
      }), " ", null != N ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(l.Text, {
          tag: "span",
          className: d.line,
          variant: "text-xs/normal",
          color: "text-muted",
          children: ["Host ", N, " ", null != C ? (0, n.jsxs)("span", {
            className: d.appArch,
            children: [C.toLowerCase(), " "]
          }) : null, null != A ? (0, n.jsxs)("span", {
            children: ["(", A, ")"]
          }) : null]
        }), " "]
      }) : null, null != m ? (0, n.jsx)(l.Text, {
        tag: "span",
        className: d.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: m
      }) : null]
    })
  })
}