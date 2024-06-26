n.d(t, {
  b: function() {
    return c
  }
});
var r = n(735250),
  o = n(470079),
  l = n(120356),
  s = n.n(l),
  i = n(481060),
  u = n(727857);

function c(e) {
  let {
    chunks: t,
    columns: n,
    className: l
  } = e, c = o.useMemo(() => ({
    "--secure-frames-columns": n
  }), [n]);
  return (0, r.jsx)("div", {
    style: c,
    className: s()(u.code, l),
    children: t.map((e, t) => (0, r.jsx)("div", {
      className: s()(u.chunk, {
        [u.divider]: t > n - 1
      }),
      children: (0, r.jsx)(i.Text, {
        className: u.codeText,
        variant: "code",
        color: "text-normal",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}