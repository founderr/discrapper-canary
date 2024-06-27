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
  h = new Map,
  f = new Set,
  S = new Map,
  A = null,
  N = (0, i.debounce)(c.y, 3e3, {
    trailing: !0
  });

function m(e, t) {
  r.Z.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: e,
    state: t
  })
}

function O() {
  p(T)
}

function R(e) {
  if (!(0, _.sA)("ContentInventoryManager") || f.has(e) || e === E.YN.GAME_PROFILE_FEED && void 0 !== d.Z.getFeed(e)) return !1;
  if (e === T) {
    if (d.Z.hidden || !u.Z.isFocused() || !o.Z.isConnected()) return !1;
    let e = l.Z.getIdleSince();
    if (null != e && Date.now() - e > 9e5) return !1
  }
  return !0
}

function p(e) {
  m(e, {
    loading: !1
  });
  let t = h.get(e);
  void 0 !== t && (clearTimeout(t), h.delete(e))
}

function g() {
  if (p(T), !R(T)) return;
  let e = d.Z.getFeed(T);
  if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == A) return;
  let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
    n = Math.max(0, null == A ? 0 : new Date(A).getTime() - Date.now(), t);
  m(T, {
    loading: !1,
    nextFetchDate: new Date(Date.now() + n)
  }), h.set(T, setTimeout(() => C(T), n))
}
async function C(e) {
  let {
    force: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!!(R(e) || t)) try {
    let t = d.Z.getFeed(e);
    f.add(e), m(e, {
      loading: !0
    });
    let n = await (0, c.m)({
      token: null == t ? void 0 : t.refresh_token,
      feedId: e
    });
    r.Z.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: e,
      feed: n
    }), S.set(e, 0), f.delete(e), m(e, {
      loading: !1
    }), e === T && (A = null, g())
  } catch (s) {
    var n;
    let i = null !== (n = S.get(e)) && void 0 !== n ? n : 0;
    if (i < 3) {
      let n = 1e3 * Math.pow(5, i);
      h.set(e, setTimeout(() => C(e, {
        force: t
      }), n)), S.set(e, i + 1)
    } else r.Z.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: e
    });
    f.delete(e)
  }
}

function v() {
  g()
}

function L(e) {
  let {
    feedId: t
  } = e;
  p(t), C(t, {
    force: !0
  })
}

function D(e) {
  let {
    refreshAfterMs: t
  } = e, n = d.Z.getFeed(T);
  if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) A = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), g()
}

function M(e) {
  var t;
  let {
    connectionId: n,
    track: i
  } = e;
  if (null != n && !!(0, _.Dy)("ContentInventoryManager.handleSpotifyNewTrack"))(null === (t = a.Z.getAccount(n, I.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && N(n, i)
}

function P() {
  C(E.YN.GAME_PROFILE_FEED)
}
class y extends s.Z {
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
      SPOTIFY_NEW_TRACK: M,
      GAME_PROFILE_OPEN: P
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new y