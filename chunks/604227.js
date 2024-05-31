"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120"), s("757143"), s("653041");
var a = s("735250");
s("470079");
var n = s("525654"),
  l = s.n(n),
  i = s("481060"),
  r = s("579806"),
  o = s("304761"),
  d = s("969832"),
  u = s("689938"),
  c = s("107287");

function S() {
  var e, t, s, n, S, E;
  let T = window.GLOBAL_ENV.RELEASE_CHANNEL,
    _ = "298055",
    f = (e = "405d448060a407c8c36fdb371efca01b975ebf2c", e.substring(0, 7)),
    m = null === r.default || void 0 === r.default ? void 0 : r.default.remoteApp.getVersion(),
    g = null === r.default || void 0 === r.default ? void 0 : null === (t = (s = r.default.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(s),
    I = null === r.default || void 0 === r.default ? void 0 : null === (n = (S = r.default.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(S),
    N = null === (E = o.default.getCurrentBuildOverride().overrides) || void 0 === E ? void 0 : E.discord_web,
    h = function() {
      var e;
      let t = null === l() || void 0 === l() ? void 0 : null === (e = l().os) || void 0 === e ? void 0 : e.toString();
      if (null == t || null == r.default) return null;
      let s = r.default.os.release,
        [a, n, i] = s.split(".").map(e => parseInt(e, 10));
      return t.includes("Windows 10") && void 0 !== i && i >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== a && a >= 20 && (t = "macOS ".concat(a - 9)), "".concat(t, " (").concat(s, ")")
    }(),
    C = [T, _, "(".concat(f, ")")];
  return null != m && (C.push("Host ".concat(m)), null != I && C.push(I.toLowerCase()), null != g && C.push("(".concat(g, ")"))), C.push("Build Override: ".concat(null != N ? N.id : "N/A")), null != h && C.push(h), (0, a.jsx)(d.CopiableField, {
    copyValue: C.join(" "),
    disableCopy: !1,
    copyTooltip: u.default.Messages.COPY_VERSION,
    showCopyIcon: !1,
    children: (0, a.jsxs)("div", {
      className: c.info,
      children: [(0, a.jsxs)(i.Text, {
        tag: "span",
        className: c.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: [T, " ", _, " ", (0, a.jsxs)("span", {
          className: c.versionHash,
          children: ["(", f, ")"]
        })]
      }), " ", null != m ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(i.Text, {
          tag: "span",
          className: c.line,
          variant: "text-xs/normal",
          color: "text-muted",
          children: ["Host ", m, " ", null != I ? (0, a.jsxs)("span", {
            className: c.appArch,
            children: [I.toLowerCase(), " "]
          }) : null, null != g ? (0, a.jsxs)("span", {
            children: ["(", g, ")"]
          }) : null]
        }), " "]
      }) : null, null != h ? (0, a.jsx)(i.Text, {
        tag: "span",
        className: c.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: h
      }) : null]
    })
  })
}