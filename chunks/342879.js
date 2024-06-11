"use strict";
n.r(t), n("47120");
var i = n("392711"),
  r = n("570140"),
  s = n("147913"),
  a = n("38618"),
  o = n("553795"),
  l = n("517100"),
  u = n("451478"),
  d = n("162461"),
  _ = n("564990"),
  c = n("146282"),
  E = n("206583"),
  I = n("981631");
let T = E.ContentInventoryFeedKey.GLOBAL_FEED,
  f = null,
  S = !1,
  h = 0,
  A = null,
  m = (0, i.debounce)(_.postTrackToContentInventory, 3e3, {
    trailing: !0
  });

function N(e) {
  r.default.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: T,
    state: e
  })
}

function p() {
  C()
}

function O() {
  if (!(0, d.isEligibleForContentInventoryV1)("ContentInventoryManager") || S || c.default.hidden || !u.default.isFocused() || !a.default.isConnected()) return !1;
  let e = l.default.getIdleSince();
  return !(null != e && Date.now() - e > 9e5) && !0
}

function C() {
  N({
    loading: !1
  }), clearTimeout(f), f = null
}

function R() {
  if (C(), !O()) return;
  let e = c.default.getFeed(T);
  if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == A) return;
  let t = null != A ? A : null == e ? void 0 : e.expired_at,
    n = null == t ? 0 : new Date(t).getTime() - Date.now();
  N({
    loading: !1,
    nextFetchDate: new Date(Date.now() + n)
  }), f = setTimeout(() => g(), Math.max(0, n))
}
async function g() {
  let {
    force: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (O() || e) try {
    S = !0, N({
      loading: !0
    });
    let e = await (0, _.getMyContentInventory)();
    r.default.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: T,
      feed: e
    }), h = 0, S = !1, N({
      loading: !1
    }), A = null, R()
  } catch (e) {
    h < 3 ? (f = setTimeout(() => g(), 1e3 * Math.pow(5, h)), h += 1) : r.default.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: T
    }), S = !1
  }
}

function L() {
  R()
}

function v() {
  C(), g({
    force: !0
  })
}

function D(e) {
  let {
    refreshAfterMs: t
  } = e, n = c.default.getFeed(T);
  if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) A = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), R()
}

function M(e) {
  var t;
  let {
    connectionId: n,
    track: i
  } = e;
  if (null != n && !!(0, d.isEligibleForListenedMediaInventory)("ContentInventoryManager.handleSpotifyNewTrack"))(null === (t = o.default.getAccount(n, I.PlatformTypes.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && m(n, i)
}
class y extends s.default {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: L,
      CONNECTION_CLOSED: p,
      WINDOW_FOCUS: L,
      IDLE: L,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: L,
      CONTENT_INVENTORY_MANUAL_REFRESH: v,
      CONTENT_INVENTORY_INBOX_STALE: D,
      SPOTIFY_NEW_TRACK: M
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = new y