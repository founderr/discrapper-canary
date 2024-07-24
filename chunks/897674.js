t.d(n, {
  Z: function() {
return c;
  },
  g: function() {
return u;
  }
}), t(47120);
var a = t(470079),
  l = t(442837),
  r = t(146282),
  i = t(327220),
  o = t(959580);

function u(e, n) {
  let {
types: t
  } = e;
  return !!(null == t || t.has(n.content_type)) || !1;
}

function c(e) {
  let {
feed: n,
filters: t
  } = (0, l.cj)([r.Z], () => ({
feed: r.Z.getFeed(e),
filters: r.Z.getFilters()
  })), c = a.useMemo(() => {
let e = null == n ? void 0 : n.entries.map(e => e.content);
return null != t ? null == e ? void 0 : e.filter(e => u(t, e)) : e;
  }, [
n,
t
  ]);
  return c = (0, i.Z)(c), c = (0, o.Z)(c);
}