n.d(t, {
  r: function() {
    return a
  }
});
var s = n(358085),
  o = n(918701),
  i = n(46140);

function a(e) {
  var t;
  let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    a = (0, o.zK)(e, i.S7.IN_HOUSE_CONSOLE_QUEST),
    l = (0, o.zK)(e, i.S7.MOBILE_CONSOLE_QUEST);
  return (0, s.isWeb)() && !n && !a && !l
}