"use strict";
n.r(t), n("47120");
var i = n("570140"),
  r = n("147913"),
  s = n("38618"),
  a = n("517100"),
  o = n("451478"),
  l = n("162461"),
  u = n("564990"),
  d = n("146282"),
  _ = n("206583");
let c = _.ContentInventoryFeedKey.GLOBAL_FEED,
  E = null,
  I = !1,
  T = 0,
  f = null;

function S(e) {
  i.default.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: c,
    state: e
  })
}

function h() {
  m()
}

function A() {
  if (!(0, l.isEligibleForContentInventoryV1)("ContentInventoryManager") || I || d.default.hidden || !o.default.isFocused() || !s.default.isConnected()) return !1;
  let e = a.default.getIdleSince();
  return !(null != e && Date.now() - e > 9e5) && !0
}

function m() {
  S({
    loading: !1
  }), clearTimeout(E), E = null
}

function N() {
  if (m(), !A()) return;
  let e = d.default.getFeed(c);
  if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == f) return;
  let t = null != f ? f : null == e ? void 0 : e.expired_at,
    n = null == t ? 0 : new Date(t).getTime() - Date.now();
  S({
    loading: !1,
    nextFetchDate: new Date(Date.now() + n)
  }), E = setTimeout(() => p(), Math.max(0, n))
}
async function p() {
  let {
    force: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (A() || e) try {
    I = !0, S({
      loading: !0
    });
    let e = await (0, u.getMyContentInventory)();
    i.default.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: c,
      feed: e
    }), T = 0, I = !1, S({
      loading: !1
    }), f = null, N()
  } catch (e) {
    T < 3 ? (E = setTimeout(() => p(), 1e3 * Math.pow(5, T)), T += 1) : i.default.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: c
    }), I = !1
  }
}

function O() {
  N()
}

function C() {
  m(), p({
    force: !0
  })
}

function R(e) {
  let {
    refreshAfterMs: t
  } = e, n = d.default.getFeed(c);
  if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) f = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), N()
}

function g(e) {
  let {
    connectionId: t,
    track: n
  } = e;
  if (null != t)(0, l.isEligibleForListenedMediaInventory)("ContentInventoryManager.handleSpotifyNewTrack") && (0, u.postTrackToContentInventory)(t, n)
}
class L extends r.default {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: O,
      CONNECTION_CLOSED: h,
      WINDOW_FOCUS: O,
      IDLE: O,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: O,
      CONTENT_INVENTORY_MANUAL_REFRESH: C,
      CONTENT_INVENTORY_INBOX_STALE: R,
      SPOTIFY_NEW_TRACK: g
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = new L