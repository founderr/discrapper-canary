t.d(n, {
  b: function() {
    return c
  }
});
var r = t(735250),
  o = t(470079),
  u = t(120356),
  l = t.n(u),
  s = t(481060),
  i = t(727857);

function c(e) {
  let {
    chunks: n,
    columns: t,
    className: u
  } = e, c = o.useMemo(() => ({
    "--secure-frames-columns": t
  }), [t]);
  return (0, r.jsx)("div", {
    style: c,
    className: l()(i.code, u),
    children: n.map((e, n) => (0, r.jsx)("div", {
      className: l()(i.chunk, {
        [i.divider]: n > t - 1
      }),
      children: (0, r.jsx)(s.Text, {
        className: i.codeText,
        variant: "code",
        color: "text-normal",
        children: e
      })
    }, "".concat(e, "-").concat(n)))
  })
}