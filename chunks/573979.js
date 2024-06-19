n.d(t, {
  Z: function() {
    return o
  }
});
var i, s, l, a, r = n(358085);

function o(e) {
  if ((0, r.isIOS)()) return e;
  if (!(0, r.isAndroid)()) return -1;
  switch (e) {
    case 0:
      return 0;
    case 1:
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
    case 5:
    case 6:
      return 3;
    default:
      return -1
  }
}(i = l || (l = {}))[i.UNHANDLED = -1] = "UNHANDLED", i[i.NOMINAL = 0] = "NOMINAL", i[i.FAIR = 1] = "FAIR", i[i.SERIOUS = 2] = "SERIOUS", i[i.CRITICAL = 3] = "CRITICAL", (s = a || (a = {}))[s.NONE = 0] = "NONE", s[s.LIGHT = 1] = "LIGHT", s[s.MODERATE = 2] = "MODERATE", s[s.SEVERE = 3] = "SEVERE", s[s.CRITICAL = 4] = "CRITICAL", s[s.EMERGENCY = 5] = "EMERGENCY", s[s.SHUTDOWN = 6] = "SHUTDOWN"