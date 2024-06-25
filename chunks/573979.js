n.d(t, {
  Z: function() {
    return o
  }
});
var s, i, l, a, r = n(358085);

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
}(s = l || (l = {}))[s.UNHANDLED = -1] = "UNHANDLED", s[s.NOMINAL = 0] = "NOMINAL", s[s.FAIR = 1] = "FAIR", s[s.SERIOUS = 2] = "SERIOUS", s[s.CRITICAL = 3] = "CRITICAL", (i = a || (a = {}))[i.NONE = 0] = "NONE", i[i.LIGHT = 1] = "LIGHT", i[i.MODERATE = 2] = "MODERATE", i[i.SEVERE = 3] = "SEVERE", i[i.CRITICAL = 4] = "CRITICAL", i[i.EMERGENCY = 5] = "EMERGENCY", i[i.SHUTDOWN = 6] = "SHUTDOWN"