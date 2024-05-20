"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("647162");

function r(e, t, n, r) {
  var s, a, o;
  let l = e.hasConnectedAccount(),
    u = (0, i.isSpotifyPlayable)(e),
    d = e.getTrack(),
    _ = e.getSyncingWith(),
    c = e.getActivity(),
    E = null !== (o = null !== (a = null == d ? void 0 : d.id) && void 0 !== a ? a : null == c ? void 0 : c.sync_id) && void 0 !== o ? o : e.getLastPlayedTrackId(),
    I = n.id === t.getId(),
    T = l && !u,
    f = null != E && E === (null == r ? void 0 : r.sync_id),
    S = (null == c ? void 0 : c.party) != null && (null == r ? void 0 : null === (s = r.party) || void 0 === s ? void 0 : s.id) === c.party.id,
    h = (null == _ ? void 0 : _.userId) != null && (null == _ ? void 0 : _.userId) === n.id;
  return {
    user: n,
    activity: r,
    hasSpotifyAccount: l,
    canPlaySpotify: u,
    notPlayable: T,
    syncingWithParty: S,
    syncingWithUser: h,
    isCurrentUser: I,
    currentUserTrackId: E,
    playingSameTrack: f,
    playDisabled: I || T || f,
    syncDisabled: I || h || S
  }
}