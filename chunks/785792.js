t.d(n, {
  b: function() {
    return a
  }
});
var r = t(735250),
  o = t(470079),
  s = t(120356),
  l = t.n(s),
  u = t(481060),
  i = t(727857);

function a(e) {
  let {
    chunks: n,
    columns: t,
    className: s
  } = e, a = o.useMemo(() => ({
    "--secure-frames-columns": t
  }), [t]);
  return (0, r.jsx)("div", {
    style: a,
    className: l()(i.code, s),
    children: n.map((e, n) => (0, r.jsx)("div", {
      className: l()(i.chunk, {
        [i.divider]: n > t - 1
      }),
      children: (0, r.jsx)(u.Text, {
        className: i.codeText,
        variant: "code",
        color: "text-normal",
        children: e
      })
    }, "".concat(e, "-").concat(n)))
  })
}