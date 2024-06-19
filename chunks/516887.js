var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(826298),
  c = n(719065);
t.Z = i.memo(function(e) {
  var t;
  let {
    className: n,
    channel: i,
    section: s
  } = e, u = null != s ? (0, o.ky)(s) : null;
  return (0, l.jsx)("div", {
    className: a()(n, c.wrapper),
    children: (0, l.jsx)("div", {
      className: c.icon,
      children: null != u ? (0, l.jsx)(r.Tooltip, {
        text: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : "",
        position: "top",
        children: e => (0, l.jsx)(u, {
          ...e,
          channel: i,
          section: s,
          width: 24,
          height: 24
        })
      }) : null
    })
  })
})