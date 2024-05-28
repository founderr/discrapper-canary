"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("314897"),
  r = n("768419"),
  o = n("456190"),
  u = n("239470"),
  d = n("894344"),
  c = n("203777"),
  f = n("616922"),
  E = n("689938");

function C(e, t, n) {
  let C = (0, s.useStateFromStores)([r.default, i.default], () => null != t ? (0, u.default)(r.default, i.default, t, e) : void 0, [e, t]);
  if (null == C || null == e || null == t) return null;
  let h = C.isCurrentUser || C.notPlayable || C.playingSameTrack,
    _ = C.isCurrentUser || C.syncingWithUser || C.syncingWithParty;
  return [(0, a.jsx)(l.MenuItem, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, c.default)(C, f.SpotifyActionTypes.USER_ACTIVITY_PLAY, n),
    label: E.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
    subtext: h ? (0, o.default)(C, f.SpotifyActionTypes.USER_ACTIVITY_PLAY) : void 0,
    disabled: h
  }, "spotify-play-".concat(e.session_id)), C.canPlaySpotify ? (0, a.jsx)(l.MenuItem, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, d.default)(C, f.SpotifyActionTypes.USER_ACTIVITY_SYNC, n),
    label: E.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
    subtext: _ ? (0, o.default)(C, f.SpotifyActionTypes.USER_ACTIVITY_SYNC) : void 0,
    disabled: _
  }, "spotify-sync-".concat(e.session_id)) : null]
}