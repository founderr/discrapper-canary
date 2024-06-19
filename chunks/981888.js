i.d(e, {
  Z: function() {
    return a
  }
}), i(47120);
var l = i(470079),
  t = i(881052);

function a(n, e) {
  let [i, a] = l.useState(!1), [r, s] = l.useState(null);
  return [async () => {
    a(!0), s(null);
    try {
      let e = await n();
      return a(!1), s(null), e
    } catch (i) {
      let n = new t.Hx(i);
      return null == e || e(n), s(n), a(!1), null
    }
  }, {
    loading: i,
    error: r
  }]
}