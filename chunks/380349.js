n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(314897),
  r = n(768419),
  o = n(456190),
  c = n(239470),
  u = n(894344),
  d = n(203777),
  E = n(616922),
  h = n(689938);

function _(e, t, n) {
  let _ = (0, i.e7)([r.Z, a.default], () => null != t ? (0, c.Z)(r.Z, a.default, t, e) : void 0, [e, t]);
  if (null == _ || null == e || null == t) return null;
  let I = _.isCurrentUser || _.notPlayable || _.playingSameTrack,
    m = _.isCurrentUser || _.syncingWithUser || _.syncingWithParty;
  return [(0, s.jsx)(l.MenuItem, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, d.Z)(_, E.kG.USER_ACTIVITY_PLAY, n),
    label: h.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
    subtext: I ? (0, o.Z)(_, E.kG.USER_ACTIVITY_PLAY) : void 0,
    disabled: I
  }, "spotify-play-".concat(e.session_id)), _.canPlaySpotify ? (0, s.jsx)(l.MenuItem, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, u.Z)(_, E.kG.USER_ACTIVITY_SYNC, n),
    label: h.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
    subtext: m ? (0, o.Z)(_, E.kG.USER_ACTIVITY_SYNC) : void 0,
    disabled: m
  }, "spotify-sync-".concat(e.session_id)) : null]
}