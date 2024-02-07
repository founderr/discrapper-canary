"use strict";
l.r(t), l.d(t, {
  useSpotifyPlayAction: function() {
    return g
  },
  useSpotifySyncAction: function() {
    return A
  },
  useSpotifyJoinAction: function() {
    return I
  }
}), l("222007");
var n = l("884691"),
  a = l("446674"),
  s = l("862337"),
  i = l("84339"),
  r = l("271938"),
  o = l("718517"),
  u = l("158998"),
  d = l("662285"),
  c = l("782911"),
  f = l("629414"),
  m = l("53887"),
  p = l("486150"),
  h = l("555759"),
  T = l("450484");
let E = 30 * o.default.Millis.SECOND;

function S(e) {
  let {
    currentUserTrackId: t,
    syncingWithUser: l,
    syncingWithParty: a
  } = e, [r, o] = n.useState(!1), [u] = n.useState(() => new s.Timeout), d = (0, i.default)(t);
  n.useEffect(() => {
    r && (t !== d || l || a) && (o(!1), u.stop())
  }, [t, d, l, a, r, u]);
  let c = n.useCallback(() => {
      o(!0), u.start(E, () => o(!1))
    }, [u]),
    f = n.useCallback(() => {
      o(!1), u.stop()
    }, [u]);
  return n.useEffect(() => () => u.stop(), [u]), {
    loading: r,
    startLoading: c,
    clearLoading: f
  }
}

function _(e, t) {
  return (0, a.useStateFromStoresObject)([d.default, r.default], () => (0, m.default)(d.default, r.default, t, e), [e, t])
}

function g(e, t, l) {
  let a = _(e, t),
    {
      notPlayable: s,
      isCurrentUser: i,
      playingSameTrack: r
    } = a,
    {
      loading: o,
      startLoading: u,
      clearLoading: d
    } = S(a),
    m = n.useCallback(() => {
      u(), (0, h.default)(a, T.SpotifyActionTypes.USER_ACTIVITY_PLAY, l).catch(d)
    }, [a, l, u, d]);
  return {
    label: (0, c.default)(a, T.SpotifyActionTypes.USER_ACTIVITY_PLAY),
    tooltip: (0, f.default)(a, T.SpotifyActionTypes.USER_ACTIVITY_PLAY),
    disabled: !o && (i || s || r),
    loading: o,
    onClick: m,
    spotifyData: a
  }
}

function A(e, t, l, a) {
  let s = null != a ? a : u.default.getName(t),
    i = _(e, t),
    {
      syncingWithUser: r,
      syncingWithParty: o,
      isCurrentUser: d
    } = i,
    {
      loading: m,
      startLoading: h,
      clearLoading: E
    } = S(i),
    g = n.useCallback(() => {
      h(), (0, p.default)(i, T.SpotifyActionTypes.USER_ACTIVITY_SYNC, l).catch(E)
    }, [i, l, h, E]);
  return {
    label: (0, c.default)(i, T.SpotifyActionTypes.USER_ACTIVITY_SYNC),
    tooltip: (0, f.default)(i, T.SpotifyActionTypes.USER_ACTIVITY_SYNC, s),
    disabled: !m && (d || r || o),
    loading: m,
    onClick: g,
    spotifyData: i
  }
}

function I(e, t, l) {
  let a = _(e, t),
    {
      notPlayable: s,
      syncingWithUser: i,
      syncingWithParty: r,
      isCurrentUser: o
    } = a,
    {
      loading: u,
      startLoading: d,
      clearLoading: m
    } = S(a),
    h = n.useCallback(() => {
      d(), (0, p.default)(a, T.SpotifyActionTypes.EMBED_SYNC, l).catch(m)
    }, [a, l, d, m]);
  return {
    label: (0, c.default)(a, T.SpotifyActionTypes.EMBED_SYNC),
    tooltip: (0, f.default)(a, T.SpotifyActionTypes.EMBED_SYNC),
    disabled: !u && (o || i || r || s),
    loading: u,
    onClick: h,
    spotifyData: a
  }
}