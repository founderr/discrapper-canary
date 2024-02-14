"use strict";
E.r(_), E.d(_, {
  default: function() {
    return S
  }
}), E("222007");
var t = E("249654"),
  o = E("913144"),
  n = E("776156"),
  a = E("689988"),
  i = E("915639"),
  r = E("34966"),
  I = E("473006"),
  T = E("788434");
class s extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }, this.handleConnectionOpen = async e => {
      let _ = await n.default.fetchChangelogConfig(),
        E = _.body,
        a = (0, I.getClientVersionForChangelog)(),
        s = function(e, _) {
          let E = 0,
            t = null;
          for (var [o, {
              min_version: n
            }] of Object.entries(e)) n <= _ && n > E && (E = n, t = o);
          return t
        }(E, a);
      if (o.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: _.body,
          latestChangelogId: s
        }), null == s || !0 !== E[s].show_on_startup) return;
      let S = r.default.lastSeenChangelogId(),
        N = r.default.lastSeenChangelogDate();
      if (null != S && 0 >= t.default.compare(s, S)) return;
      let O = await n.default.fetchChangelog(s, i.default.locale);
      if (null != O) {
        if (null == N || null == r.default.lastSeenChangelogDate()) {
          n.default.markChangelogAsSeen(s, O.date);
          return
        }!r.default.isLocked() && new Date(O.date) > new Date(N) && (0, T.openChangelog)()
      }
    }
  }
}
var S = new s