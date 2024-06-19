n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(311308),
  r = n(692547),
  a = n(481060);

function o(e) {
  let t = (0, i.useRef)(null),
    [n, o] = (0, i.useState)(null),
    [u] = (0, i.useState)(() => new s.TimelineDataSeries),
    c = (0, a.useToken)(r.Z.colors.BACKGROUND_PRIMARY).hsl(),
    d = (0, a.useToken)(r.Z.colors.TEXT_NORMAL).hsl(),
    h = (0, a.useToken)(r.Z.colors.BACKGROUND_ACCENT).hsl(),
    g = (0, a.useToken)(r.Z.unsafe_rawColors.BRAND_500).hsl();
  (0, i.useEffect)(() => {
    var e;
    let n = t.current;
    if (null == n) return;
    let l = new s.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
    l.backgroundColor = c, l.textColor = d, l.gridColor = h, l.timeOptions = {
      timeStyle: "short"
    }, l.fontFamily = "gg sans", l.fontSize = 11, u.setColor(g), l.addDataSeries(u), l.updateEndDate(), o(l)
  }, [t, c, g, h, d, u]), u.setPoints(e.dataPoints), null == n || n.updateEndDate();
  let p = {
    width: e.width,
    height: e.height
  };
  return (0, l.jsx)("canvas", {
    style: p,
    width: e.width,
    height: e.height,
    ref: t
  }, "canvas")
}