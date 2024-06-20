t.d(n, {
  b: function() {
    return c
  }
});
var r = t(735250),
  o = t(470079),
  s = t(120356),
  u = t.n(s),
  l = t(481060),
  i = t(727857);

function c(e) {
  let {
    chunks: n,
    columns: t,
    className: s
  } = e, c = o.useMemo(() => ({
    "--secure-frames-columns": t
  }), [t]);
  return (0, r.jsx)("div", {
    style: c,
    className: u()(i.code, s),
    children: n.map((e, n) => (0, r.jsx)("div", {
      className: u()(i.chunk, {
        [i.divider]: n > t - 1
      }),
      children: (0, r.jsx)(l.Text, {
        className: i.codeText,
        variant: "code",
        color: "text-normal",
        children: e
      })
    }, "".concat(e, "-").concat(n)))
  })
}