t(733860);
var a = t(735250),
  i = t(470079),
  r = t(780384),
  o = t(481060),
  l = t(197344),
  s = t(526167),
  c = t(281979),
  d = t(293716),
  u = t(810090),
  p = t(981631),
  m = t(461113),
  x = t(542943),
  f = t(423028),
  b = t(528512),
  h = t(184984),
  _ = t(646562);

function g(e) {
  let {
movDark: n = c,
movLight: t = d,
mp4Dark: i = m,
mp4Light: r = b,
pngDark: o = x,
pngLight: l = h,
webmDark: u = f,
webmLight: g = _
  } = e, v = (0, s.vu)(), N = [
(0, a.jsx)('source', {
  src: i,
  type: 'video/mp4'
}, 'mp4'),
(0, a.jsx)('img', {
  alt: '',
  src: o
}, 'png')
  ], j = [
(0, a.jsx)('source', {
  src: r,
  type: 'video/mp4'
}, 'mp4'),
(0, a.jsx)('img', {
  alt: '',
  src: l
}, 'png')
  ];
  return (v > 52 || -1 === v) && (N.unshift((0, a.jsx)('source', {
src: u,
type: 'video/webm'
  }, 'webm')), j.unshift((0, a.jsx)('source', {
src: g,
type: 'video/webm'
  }, 'webm'))), (0, s.rO)() && (N.unshift((0, a.jsx)('source', {
src: n,
type: 'video/mp4'
  }, 'hevc')), j.unshift((0, a.jsx)('source', {
src: t,
type: 'video/mp4'
  }, 'hevc'))), {
[p.BRd.DARK]: N,
[p.BRd.LIGHT]: j
  };
}
let v = l.Z.getAppSpinnerSources(),
  N = null != v ? g(v) : null,
  j = g({});
n.Z = e => {
  var n;
  let {
loop: t = !0,
autoPlay: l = !0,
setRef: s,
className: c,
onReady: d
  } = e, {
theme: m
  } = (0, o.useThemeContext)(), {
reducedMotion: x
  } = i.useContext(o.AccessibilityPreferencesContext), f = j;
  null != N && (f = N);
  let b = null !== (n = f[(0, r.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) && void 0 !== n ? n : f[p.BRd.DARK];
  return (0, a.jsx)(u.Z, {
ref: s,
onLoadedData: d,
className: c,
loop: !x.enabled && t,
autoPlay: !x.enabled && l,
playsInline: !0,
'data-testid': 'app-spinner',
children: b
  }, m);
};