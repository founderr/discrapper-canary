"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("249654"),
  a = n("913144"),
  l = n("776156"),
  s = n("689988"),
  r = n("915639"),
  o = n("34966"),
  u = n("473006"),
  d = n("788434");
class c extends s.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }, this.handleConnectionOpen = async e => {
      let t = await l.default.fetchChangelogConfig(),
        n = t.body,
        s = (0, u.getClientVersionForChangelog)(),
        c = function(e, t) {
          let n = 0,
            i = null;
          for (var [a, {
              min_version: l
            }] of Object.entries(e)) l <= t && l > n && (n = l, i = a);
          return i
        }(n, s);
      if (a.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: t.body,
          latestChangelogId: c
        }), null == c || !0 !== n[c].show_on_startup) return;
      let f = o.default.lastSeenChangelogId(),
        E = o.default.lastSeenChangelogDate();
      if (null != f && 0 >= i.default.compare(c, f)) return;
      let h = await l.default.fetchChangelog(c, r.default.locale);
      if (null != h) {
        if (null == E || null == o.default.lastSeenChangelogDate()) {
          l.default.markChangelogAsSeen(c, h.date);
          return
        }!o.default.isLocked() && new Date(h.date) > new Date(E) && (0, d.openChangelog)()
      }
    }
  }
}
var f = new c