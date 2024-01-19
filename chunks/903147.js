"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("917351"),
  o = n.n(i),
  l = n("379881"),
  a = n("15131"),
  u = n("393027"),
  d = n("42203"),
  s = n("957255"),
  r = n("18494"),
  E = n("677099"),
  _ = n("330338"),
  c = n("722525"),
  A = n("49111"),
  C = o.throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      t = E.default.getFlattenedGuildIds(),
      n = function(e) {
        let t = u.default.getState().guildId;
        if (null == t) return -2;
        if (t === A.FAVORITES) return -1;
        let n = e.indexOf(t);
        return -1 === n ? -2 : n
      }(t);
    if (-1 === (n += e) && !(0, a.isFavoritesGuildVisible)(l.default, d.default, s.default) && (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n) {
      (0, c.transitionToPage)(_.default.getHomeLink());
      return
    }
    let i = -1 === n ? A.FAVORITES : t[n],
      o = r.default.getChannelId(i);
    (0, c.transitionToChannel)(i, o === i ? null : o, !1)
  }, A.NAVIGATION_THROTTLE)