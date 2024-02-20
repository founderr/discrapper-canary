"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("872717"),
  a = n("913144"),
  l = n("34966"),
  s = n("234222");

function r() {
  let e = new Date().getMinutes();
  return "x=".concat(Math.floor(e / 5))
}
var o = {
  lockChangeLog(e) {
    a.default.dispatch({
      type: "CHANGE_LOG_LOCK",
      key: e
    })
  },
  unlockChangeLog(e) {
    a.default.dispatch({
      type: "CHANGE_LOG_UNLOCK",
      key: e
    })
  },
  markChangelogAsSeen(e, t) {
    a.default.dispatch({
      type: "CHANGE_LOG_MARK_SEEN",
      changelogId: e,
      changelogDate: t
    })
  },
  setChangelogOverride(e) {
    a.default.dispatch({
      type: "CHANGE_LOG_SET_OVERRIDE",
      id: e
    })
  },
  fetchChangelogConfig() {
    let e = s.ChangelogPlatforms.DESKTOP;
    return i.default.get({
      url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(r())
    })
  },
  async fetchChangelog(e, t) {
    if (null != l.default.getChangelog(e, t)) return null;
    let n = s.ChangelogPlatforms.DESKTOP;
    try {
      let l = await i.default.get({
        url: "https://cdn.discordapp.com/changelogs/".concat(n, "/").concat(e, "/").concat(t, ".json?").concat(r())
      });
      return a.default.dispatch({
        type: "CHANGE_LOG_FETCH_SUCCESS",
        id: e,
        changelog: l.body
      }), l.body
    } catch {
      if (a.default.dispatch({
          type: "CHANGE_LOG_FETCH_FAILED",
          id: e,
          locale: t
        }), "en-US" !== t) return await this.fetchChangelog(e, "en-US");
      return null
    }
  }
}