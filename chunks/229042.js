e("70102");
var r = e("478098"),
  u = e("952133");
t.exports = function(t, n, e) {
  var o = !0,
    i = !0;
  if ("function" != typeof t) throw TypeError("Expected a function");
  return u(e) && (o = "leading" in e ? !!e.leading : o, i = "trailing" in e ? !!e.trailing : i), r(t, n, {
    leading: o,
    maxWait: n,
    trailing: i
  })
}