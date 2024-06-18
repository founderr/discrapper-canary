"use strict";
n(47120);
var i = n(392711),
  r = n(570140),
  s = n(147913),
  o = n(38618),
  a = n(553795),
  l = n(517100),
  u = n(451478),
  _ = n(162461),
  c = n(564990),
  d = n(146282),
  E = n(206583),
  I = n(981631);
let T = E.YN.GLOBAL_FEED,
  h = null,
  S = !1,
  f = 0,
  N = null,
  A = (0, i.debounce)(c.y, 3e3, {
    trailing: !0
  });

function m(e) {
  r.Z.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: T,
    state: e
  })
}

function O() {
  p()
}

function R() {
  if (!(0, _.sA)("ContentInventoryManager") || S || d.Z.hidden || !u.Z.isFocused() || !o.Z.isConnected()) return !1;
  let e = l.Z.getIdleSince();
  return !(null != e && Date.now() - e > 9e5) && !0
}

function p() {
  m({
    loading: !1
  }), clearTimeout(h), h = null
}

function g() {
  if (p(), !R()) return;
  let e = d.Z.getFeed(T);
  if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == N) return;
  let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
    n = Math.max(0, null == N ? 0 : new Date(N).getTime() - Date.now(), t);
  m({
    loading: !1,
    nextFetchDate: new Date(Date.now() + n)
  }), h = setTimeout(() => C(), n)
}
async function C() {
  let {
    force: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (!!(R() || e)) try {
    let e = d.Z.getFeed(T);
    S = !0, m({
      loading: !0
    });
    let t = await (0, c.m)({
      token: null == e ? void 0 : e.refresh_token
    });
    r.Z.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: T,
      feed: t
    }), f = 0, S = !1, m({
      loading: !1
    }), N = null, g()
  } catch (e) {
    f < 3 ? (h = setTimeout(() => C(), 1e3 * Math.pow(5, f)), f += 1) : r.Z.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: T
    }), S = !1
  }
}

function v() {
  g()
}

function L() {
  p(), C({
    force: !0
  })
}

function D(e) {
  let {
    refreshAfterMs: t
  } = e, n = d.Z.getFeed(T);
  if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) N = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), g()
}

function M(e) {
  var t;
  let {
    connectionId: n,
    track: i
  } = e;
  if (null != n && !!(0, _.Dy)("ContentInventoryManager.handleSpotifyNewTrack"))(null === (t = a.Z.getAccount(n, I.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && A(n, i)
}
class P extends s.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: v,
      CONNECTION_CLOSED: O,
      WINDOW_FOCUS: v,
      IDLE: v,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: v,
      CONTENT_INVENTORY_MANUAL_REFRESH: L,
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
t.Z = new P