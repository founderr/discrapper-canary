n.d(e, {
  g: function() {
    return s
  }
});
var r = n(46834),
  i = n(876122),
  a = n(633401);

function s(t, e, n = () => {}) {
  let s;
  let o = {
    ...t
  };
  void 0 !== o.name && void 0 === o.description && (o.description = o.name);
  let l = (0, i.Gd)(),
    u = l.getScope(),
    c = u.getSpan(),
    d = function() {
      if (!!(0, a.z)()) return c ? c.startChild(o) : l.startTransaction(o)
    }();

  function h() {
    d && d.finish(), l.getScope().setSpan(c)
  }
  u.setSpan(d);
  try {
    s = e(d)
  } catch (t) {
    throw d && d.setStatus("internal_error"), n(t), h(), t
  }
  return (0, r.J8)(s) ? Promise.resolve(s).then(() => {
    h()
  }, t => {
    d && d.setStatus("internal_error"), n(t), h()
  }) : h(), s
}