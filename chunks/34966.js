"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var i = n("446674"),
  a = n("95410"),
  l = n("913144"),
  s = n("915639"),
  r = n("234222");
let o = {},
  u = {},
  d = null,
  c = null,
  f = null,
  E = "lastChangeLogId",
  h = "lastChangeLogDate",
  _ = null,
  C = null,
  S = new Set;
class g extends i.default.Store {
  initialize() {
    var e;
    this.waitFor(s.default), this.syncWith([s.default], () => !0), _ = null !== (e = a.default.get(E)) && void 0 !== e ? e : null;
    let t = a.default.get(h);
    if (null != t) try {
      C = new Date(t)
    } catch {
      a.default.remove(h)
    }
  }
  getChangelog(e, t) {
    var n, i;
    return null !== (i = null === (n = o[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : null
  }
  latestChangelogId() {
    return d
  }
  getChangelogLoadStatus(e, t) {
    var n, i;
    return null !== (i = null === (n = u[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : r.ChangelogLoadState.NOT_LOADED
  }
  hasLoadedConfig() {
    return null != f
  }
  getConfig() {
    return f
  }
  overrideId() {
    return c
  }
  lastSeenChangelogId() {
    return _
  }
  lastSeenChangelogDate() {
    return C
  }
  getStateForDebugging() {
    return {
      changelogConfig: f,
      loadedChangelogs: u,
      lastSeenChangelogId: _,
      lastSeenChangelogDate: C
    }
  }
  isLocked() {
    return S.size > 0
  }
}
g.displayName = "ChangelogStore";
var T = new g(l.default, {
  CHANGE_LOG_LOCK: function(e) {
    let {
      key: t
    } = e;
    if (S.has(t)) return !1;
    (S = new Set(S)).add(t)
  },
  CHANGE_LOG_UNLOCK: function(e) {
    let {
      key: t
    } = e;
    if (!S.has(t)) return !1;
    (S = new Set(S)).delete(t)
  },
  CHANGE_LOG_SET_CONFIG: function(e) {
    let {
      config: t,
      latestChangelogId: n
    } = e;
    d = n, f = t
  },
  CHANGE_LOG_FETCH_SUCCESS: function(e) {
    let {
      id: t,
      changelog: n
    } = e;
    null == o[t] && (o[t] = {}), o[t][n.locale] = {
      id: t,
      date: n.date,
      body: n.content,
      revision: 1,
      locale: n.locale,
      [n.asset_type === r.AssetType.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset
    }, null == u[t] && (u[t] = {}), u[t][n.locale] = r.ChangelogLoadState.LOADED_SUCCESS
  },
  CHANGE_LOG_FETCH_FAILED: function(e) {
    let {
      id: t,
      locale: n
    } = e;
    if (null != o[t] && null != o[t][n]) return !1;
    null == u[t] && (u[t] = {}), u[t][n] = r.ChangelogLoadState.LOADED_FAILURE
  },
  CHANGE_LOG_SET_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    c = t
  },
  CHANGE_LOG_MARK_SEEN: function(e) {
    let {
      changelogId: t,
      changelogDate: n
    } = e;
    _ = null != t ? t : null, C = new Date(n), a.default.set(E, t), a.default.set(h, n)
  }
})