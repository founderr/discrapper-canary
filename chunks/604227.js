"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120"), s("757143"), s("653041");
var a = s("735250");
s("470079");
var n = s("525654"),
  i = s.n(n),
  l = s("481060"),
  r = s("579806"),
  o = s("304761"),
  d = s("969832"),
  u = s("689938"),
  c = s("107287");

function S() {
  var e, t, s, n, S, E;
  let T = window.GLOBAL_ENV.RELEASE_CHANNEL,
    _ = "301219",
    I = (e = "2e41cc4653b15ded49a76c7f1821e5f57bd55f7b", e.substring(0, 7)),
    N = null === r.default || void 0 === r.default ? void 0 : r.default.remoteApp.getVersion(),
    g = null === r.default || void 0 === r.default ? void 0 : null === (t = (s = r.default.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(s),
    f = null === r.default || void 0 === r.default ? void 0 : null === (n = (S = r.default.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(S),
    m = null === (E = o.default.getCurrentBuildOverride().overrides) || void 0 === E ? void 0 : E.discord_web,
    A = function() {
      var e;
      let t = null === i() || void 0 === i() ? void 0 : null === (e = i().os) || void 0 === e ? void 0 : e.toString();
      if (null == t || null == r.default) return null;
      let s = r.default.os.release,
        [a, n, l] = s.split(".").map(e => parseInt(e, 10));
      return t.includes("Windows 10") && void 0 !== l && l >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== a && a >= 20 && (t = "macOS ".concat(a - 9)), "".concat(t, " (").concat(s, ")")
    }(),
    C = [T, _, "(".concat(I, ")")];
  return null != N && (C.push("Host ".concat(N)), null != f && C.push(f.toLowerCase()), null != g && C.push("(".concat(g, ")"))), C.push("Build Override: ".concat(null != m ? m.id : "N/A")), null != A && C.push(A), (0, a.jsx)(d.CopiableField, {
    copyValue: C.join(" "),
    disableCopy: !1,
    copyTooltip: u.default.Messages.COPY_VERSION,
    showCopyIcon: !1,
    children: (0, a.jsxs)("div", {
      className: c.info,
      children: [(0, a.jsxs)(l.Text, {
        tag: "span",
        className: c.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: [T, " ", _, " ", (0, a.jsxs)("span", {
          className: c.versionHash,
          children: ["(", I, ")"]
        })]
      }), " ", null != N ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(l.Text, {
          tag: "span",
          className: c.line,
          variant: "text-xs/normal",
          color: "text-muted",
          children: ["Host ", N, " ", null != f ? (0, a.jsxs)("span", {
            className: c.appArch,
            children: [f.toLowerCase(), " "]
          }) : null, null != g ? (0, a.jsxs)("span", {
            children: ["(", g, ")"]
          }) : null]
        }), " "]
      }) : null, null != A ? (0, a.jsx)(l.Text, {
        tag: "span",
        className: c.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: A
      }) : null]
    })
  })
}