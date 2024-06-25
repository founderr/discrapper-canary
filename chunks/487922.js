i.d(n, {
  Z: function() {
    return r
  }
}), i(789020);
var t = i(735250);
i(470079);
var s = i(442837),
  o = i(954295),
  l = i(621853),
  a = i(667589);

function r(e) {
  var n;
  let {
    user: i
  } = e, r = null === (n = (0, s.e7)([l.Z], () => l.Z.getUserProfile(i.id))) || void 0 === n ? void 0 : n.application;
  return (0, t.jsx)(o.Z, {
    flags: null == r ? void 0 : r.flags,
    listScrollerStyle: a.listScroller
  })
}