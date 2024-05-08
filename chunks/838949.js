"use strict";
s.r(t), s("733860");
var a = s("735250"),
  n = s("470079"),
  l = s("780384"),
  r = s("481060"),
  i = s("197344"),
  o = s("526167"),
  c = s("281979"),
  u = s("293716"),
  d = s("810090"),
  m = s("981631"),
  p = s("461113"),
  x = s("542943"),
  f = s("423028"),
  h = s("528512"),
  N = s("184984"),
  T = s("646562");

function j(e) {
  let {
    movDark: t = c,
    movLight: s = u,
    mp4Dark: n = p,
    mp4Light: l = h,
    pngDark: r = x,
    pngLight: i = N,
    webmDark: d = f,
    webmLight: j = T
  } = e, g = (0, o.getChromeVersion)(), v = [(0, a.jsx)("source", {
    src: n,
    type: "video/mp4"
  }, "mp4"), (0, a.jsx)("img", {
    alt: "",
    src: r
  }, "png")], b = [(0, a.jsx)("source", {
    src: l,
    type: "video/mp4"
  }, "mp4"), (0, a.jsx)("img", {
    alt: "",
    src: i
  }, "png")];
  return (g > 52 || -1 === g) && (v.unshift((0, a.jsx)("source", {
    src: d,
    type: "video/webm"
  }, "webm")), b.unshift((0, a.jsx)("source", {
    src: j,
    type: "video/webm"
  }, "webm"))), (0, o.supportsHEVCAlpha)() && (v.unshift((0, a.jsx)("source", {
    src: t,
    type: "video/mp4"
  }, "hevc")), b.unshift((0, a.jsx)("source", {
    src: s,
    type: "video/mp4"
  }, "hevc"))), {
    [m.ThemeTypes.DARK]: v,
    [m.ThemeTypes.LIGHT]: b
  }
}
let g = i.default.getAppSpinnerSources(),
  v = null != g ? j(g) : null,
  b = j({});
t.default = e => {
  var t;
  let {
    loop: s = !0,
    autoPlay: i = !0,
    setRef: o,
    className: c,
    onReady: u
  } = e, {
    theme: p
  } = (0, r.useThemeContext)(), {
    reducedMotion: x
  } = n.useContext(r.AccessibilityPreferencesContext), f = b;
  null != v && (f = v);
  let h = null !== (t = f[(0, l.isThemeDark)(p) ? m.ThemeTypes.DARK : m.ThemeTypes.LIGHT]) && void 0 !== t ? t : f[m.ThemeTypes.DARK];
  return (0, a.jsx)(d.default, {
    ref: o,
    onLoadedData: u,
    className: c,
    loop: !x.enabled && s,
    autoPlay: !x.enabled && i,
    playsInline: !0,
    "data-testid": "app-spinner",
    children: h
  }, p)
}