s.d(t, {
  Db: function() {
return d;
  }
}), s(610138), s(216116), s(78328), s(815648), s(47120);
var n, r, a = s(470079),
  o = s(266067),
  i = s(37234),
  l = s(703656),
  c = s(981631);

function d() {
  let {
search: e
  } = (0, o.TH)(), t = (0, o.UO)(), s = a.useMemo(() => new URLSearchParams(e), [e]).get('source'), n = null != s ? parseInt(s, 10) : null;
  return {
onClose: a.useCallback(() => {
  if (0 === n) {
    (0, l.op)(), (0, i.jN)(c.S9g.USER_SETTINGS);
    return;
  }
  if ((0, l.uv)()) {
    (0, l.op)();
    return;
  }
  (0, l.uL)(c.Z5c.APP);
}, [n]),
source: n,
...t
  };
}
(r = n || (n = {}))[r.SETTINGS = 0] = 'SETTINGS', r[r.CHANGELOG = 1] = 'CHANGELOG', r[r.DM_LIST = 2] = 'DM_LIST';