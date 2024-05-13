"use strict";
n.r(t);
var i = n("392711"),
  l = n.n(i),
  o = n("853856"),
  a = n("706590"),
  u = n("905423"),
  s = n("592125"),
  d = n("496675"),
  r = n("944486"),
  E = n("771845"),
  c = n("774343"),
  _ = n("475468"),
  A = n("981631");
t.default = l().throttle(function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
    t = E.default.getFlattenedGuildIds(),
    n = function(e) {
      let t = u.default.getState().guildId;
      if (null == t) return -2;
      if (t === A.FAVORITES) return -1;
      let n = e.indexOf(t);
      return -1 === n ? -2 : n
    }(t);
  if (-1 === (n += e) && !(0, a.isFavoritesGuildVisible)(o.default, s.default, d.default) && (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n) {
    (0, _.transitionToPage)(c.default.getHomeLink());
    return
  }
  let i = -1 === n ? A.FAVORITES : t[n],
    l = r.default.getChannelId(i);
  (0, _.transitionToChannel)(i, l === i ? null : l, !1)
}, A.NAVIGATION_THROTTLE)