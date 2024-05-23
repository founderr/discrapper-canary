"use strict";
n.r(t), n.d(t, {
  formatRecentlyOnlineStatus: function() {
    return a
  }
});
var i = n("913527"),
  r = n.n(i),
  s = n("689938");

function a(e) {
  let t = function(e) {
    let t = r().duration(r()().diff(e)),
      n = Math.floor(t.asDays()),
      i = Math.floor(t.asHours()),
      s = Math.floor(t.asMinutes());
    if (n > 0) return "".concat(n, "d");
    if (i > 0) return "".concat(i, "h");
    if (s > 0) return "".concat(s, "m");
    else return "1m"
  }(new Date(e));
  return s.default.Messages.RECENTLY_ONLINE_STATUS.format({
    time: t
  })
}