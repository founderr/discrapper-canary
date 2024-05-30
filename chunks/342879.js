"use strict";
n.r(t), n("47120");
var i = n("392711"),
  r = n("570140"),
  s = n("147913"),
  a = n("38618"),
  o = n("517100"),
  l = n("451478"),
  u = n("162461"),
  d = n("564990"),
  _ = n("146282"),
  c = n("206583");
let E = c.ContentInventoryFeedKey.GLOBAL_FEED,
  I = null,
  T = !1,
  f = 0,
  S = null,
  h = (0, i.debounce)(d.postTrackToContentInventory, 3e3, {
    trailing: !0
  });

function A(e) {
  r.default.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: E,
    state: e
  })
}

function m() {
  p()
}

function N() {
  if (!(0, u.isEligibleForContentInventoryV1)("ContentInventoryManager") || T || _.default.hidden || !l.default.isFocused() || !a.default.isConnected()) return !1;
  let e = o.default.getIdleSince();
  return !(null != e && Date.now() - e > 9e5) && !0
}

function p() {
  A({
    loading: !1
  }), clearTimeout(I), I = null
}

function O() {
  if (p(), !N()) return;
  let e = _.default.getFeed(E);
  if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == S) return;
  let t = null != S ? S : null == e ? void 0 : e.expired_at,
    n = null == t ? 0 : new Date(t).getTime() - Date.now();
  A({
    loading: !1,
    nextFetchDate: new Date(Date.now() + n)
  }), I = setTimeout(() => C(), Math.max(0, n))
}
async function C() {
  let {
    force: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (N() || e) try {
    T = !0, A({
      loading: !0
    });
    let e = await (0, d.getMyContentInventory)();
    r.default.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: E,
      feed: e
    }), f = 0, T = !1, A({
      loading: !1
    }), S = null, O()
  } catch (e) {
    f < 3 ? (I = setTimeout(() => C(), 1e3 * Math.pow(5, f)), f += 1) : r.default.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: E
    }), T = !1
  }
}

function R() {
  O()
}

function g() {
  p(), C({
    force: !0
  })
}

function L(e) {
  let {
    refreshAfterMs: t
  } = e, n = _.default.getFeed(E);
  if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) S = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), O()
}

function v(e) {
  let {
    connectionId: t,
    track: n
  } = e;
  if (null != t)(0, u.isEligibleForListenedMediaInventory)("ContentInventoryManager.handleSpotifyNewTrack") && h(t, n)
}
class D extends s.default {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: R,
      CONNECTION_CLOSED: m,
      WINDOW_FOCUS: R,
      IDLE: R,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: R,
      CONTENT_INVENTORY_MANUAL_REFRESH: g,
      CONTENT_INVENTORY_INBOX_STALE: L,
      SPOTIFY_NEW_TRACK: v
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = new D