var a = ["vas\xe1rnap", "h\xe9tfőn", "kedden", "szerd\xe1n", "cs\xfct\xf6rt\xf6k\xf6n", "p\xe9nteken", "szombaton"];

function i(e) {
  return function(t) {
    var i = a[t.getUTCDay()];
    return "".concat(e ? "" : "'m\xfalt' ", "'").concat(i, "' p'-kor'")
  }
}
var n = {
  lastWeek: i(!1),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: i(!0),
  other: "P"
};
t.Z = function(e, t) {
  var a = n[e];
  return "function" == typeof a ? a(t) : a
}