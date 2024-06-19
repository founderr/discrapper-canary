t(733860);
var n = t(735250),
  a = t(470079),
  r = t(780384),
  l = t(481060),
  i = t(197344),
  o = t(526167),
  c = t(281979),
  u = t(293716),
  d = t(810090),
  m = t(981631),
  x = t(461113),
  p = t(542943),
  h = t(423028),
  N = t(528512),
  j = t(184984),
  f = t(646562);

function v(e) {
  let {
    movDark: s = c,
    movLight: t = u,
    mp4Dark: a = x,
    mp4Light: r = N,
    pngDark: l = p,
    pngLight: i = j,
    webmDark: d = h,
    webmLight: v = f
  } = e, g = (0, o.vu)(), T = [(0, n.jsx)("source", {
    src: a,
    type: "video/mp4"
  }, "mp4"), (0, n.jsx)("img", {
    alt: "",
    src: l
  }, "png")], b = [(0, n.jsx)("source", {
    src: r,
    type: "video/mp4"
  }, "mp4"), (0, n.jsx)("img", {
    alt: "",
    src: i
  }, "png")];
  return (g > 52 || -1 === g) && (T.unshift((0, n.jsx)("source", {
    src: d,
    type: "video/webm"
  }, "webm")), b.unshift((0, n.jsx)("source", {
    src: v,
    type: "video/webm"
  }, "webm"))), (0, o.rO)() && (T.unshift((0, n.jsx)("source", {
    src: s,
    type: "video/mp4"
  }, "hevc")), b.unshift((0, n.jsx)("source", {
    src: t,
    type: "video/mp4"
  }, "hevc"))), {
    [m.BRd.DARK]: T,
    [m.BRd.LIGHT]: b
  }
}
let g = i.Z.getAppSpinnerSources(),
  T = null != g ? v(g) : null,
  b = v({});
s.Z = e => {
  var s;
  let {
    loop: t = !0,
    autoPlay: i = !0,
    setRef: o,
    className: c,
    onReady: u
  } = e, {
    theme: x
  } = (0, l.useThemeContext)(), {
    reducedMotion: p
  } = a.useContext(l.AccessibilityPreferencesContext), h = b;
  null != T && (h = T);
  let N = null !== (s = h[(0, r.wj)(x) ? m.BRd.DARK : m.BRd.LIGHT]) && void 0 !== s ? s : h[m.BRd.DARK];
  return (0, n.jsx)(d.Z, {
    ref: o,
    onLoadedData: u,
    className: c,
    loop: !p.enabled && t,
    autoPlay: !p.enabled && i,
    playsInline: !0,
    "data-testid": "app-spinner",
    children: N
  }, x)
}