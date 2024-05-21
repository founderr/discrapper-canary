"use strict";
n.r(t), n.d(t, {
  formatRecentlyOnlineStatus: function() {
    return i
  }
});
var l = n("913527"),
  a = n.n(l),
  s = n("689938");

function i(e) {
  let t = function(e) {
    let t = a().duration(a()().diff(e)),
      n = Math.floor(t.asDays()),
      l = Math.floor(t.asHours()),
      s = Math.floor(t.asMinutes());
    if (n > 0) return "".concat(n, "d");
    if (l > 0) return "".concat(l, "h");
    if (s > 0) return "".concat(s, "m");
    else return "1m"
  }(new Date(e));
  return s.default.Messages.RECENTLY_ONLINE_STATUS.format({
    time: t
  })
}