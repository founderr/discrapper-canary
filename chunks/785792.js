t.d(n, {
  b: function() {
    return a
  }
});
var r = t(735250),
  o = t(470079),
  u = t(120356),
  s = t.n(u),
  l = t(481060),
  i = t(727857);

function a(e) {
  let {
    chunks: n,
    columns: t,
    className: u
  } = e, a = o.useMemo(() => ({
    "--secure-frames-columns": t
  }), [t]);
  return (0, r.jsx)("div", {
    style: a,
    className: s()(i.code, u),
    children: n.map((e, n) => (0, r.jsx)("div", {
      className: s()(i.chunk, {
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