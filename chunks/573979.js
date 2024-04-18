"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n, s, l, i, r = a("358085");

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
}(n = l || (l = {}))[n.UNHANDLED = -1] = "UNHANDLED", n[n.NOMINAL = 0] = "NOMINAL", n[n.FAIR = 1] = "FAIR", n[n.SERIOUS = 2] = "SERIOUS", n[n.CRITICAL = 3] = "CRITICAL", (s = i || (i = {}))[s.NONE = 0] = "NONE", s[s.LIGHT = 1] = "LIGHT", s[s.MODERATE = 2] = "MODERATE", s[s.SEVERE = 3] = "SEVERE", s[s.CRITICAL = 4] = "CRITICAL", s[s.EMERGENCY = 5] = "EMERGENCY", s[s.SHUTDOWN = 6] = "SHUTDOWN"