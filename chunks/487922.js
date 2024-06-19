i.d(n, {
  Z: function() {
    return r
  }
}), i(789020);
var l = i(735250);
i(470079);
var s = i(442837),
  t = i(954295),
  o = i(621853),
  a = i(667589);

function r(e) {
  var n;
  let {
    user: i
  } = e, r = null === (n = (0, s.e7)([o.Z], () => o.Z.getUserProfile(i.id))) || void 0 === n ? void 0 : n.application;
  return (0, l.jsx)(t.Z, {
    flags: null == r ? void 0 : r.flags,
    listScrollerStyle: a.listScroller
  })
}