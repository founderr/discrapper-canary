"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("314897"),
  r = a("768419"),
  o = a("456190"),
  u = a("239470"),
  d = a("894344"),
  c = a("203777"),
  f = a("616922"),
  E = a("689938");

function h(e, t, a) {
  let h = (0, s.useStateFromStores)([r.default, i.default], () => null != t ? (0, u.default)(r.default, i.default, t, e) : void 0, [e, t]);
  if (null == h || null == e || null == t) return null;
  let _ = h.isCurrentUser || h.notPlayable || h.playingSameTrack,
    C = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
  return [(0, n.jsx)(l.MenuItem, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, c.default)(h, f.SpotifyActionTypes.USER_ACTIVITY_PLAY, a),
    label: E.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
    subtext: _ ? (0, o.default)(h, f.SpotifyActionTypes.USER_ACTIVITY_PLAY) : void 0,
    disabled: _
  }, "spotify-play-".concat(e.session_id)), h.canPlaySpotify ? (0, n.jsx)(l.MenuItem, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, d.default)(h, f.SpotifyActionTypes.USER_ACTIVITY_SYNC, a),
    label: E.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
    subtext: C ? (0, o.default)(h, f.SpotifyActionTypes.USER_ACTIVITY_SYNC) : void 0,
    disabled: C
  }, "spotify-sync-".concat(e.session_id)) : null]
}