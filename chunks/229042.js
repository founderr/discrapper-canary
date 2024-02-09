n("70102");
var r = n("478098"),
  o = n("952133");
e.exports = function(e, t, n) {
  var l = !0,
    i = !0;
  if ("function" != typeof e) throw TypeError("Expected a function");
  return o(n) && (l = "leading" in n ? !!n.leading : l, i = "trailing" in n ? !!n.trailing : i), r(e, t, {
    leading: l,
    maxWait: t,
    trailing: i
  })
}