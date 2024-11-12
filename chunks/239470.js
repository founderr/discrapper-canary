n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(647162);
function i(e, t, n, i) {
    var a, s, o;
    let l = e.hasConnectedAccount(),
        u = (0, r.PY)(e),
        c = e.getTrack(),
        d = e.getSyncingWith(),
        f = e.getActivity(),
        _ = null !== (o = null !== (s = null == c ? void 0 : c.id) && void 0 !== s ? s : null == f ? void 0 : f.sync_id) && void 0 !== o ? o : e.getLastPlayedTrackId(),
        p = n.id === t.getId(),
        h = l && !u,
        m = null != _ && _ === (null == i ? void 0 : i.sync_id),
        g = (null == f ? void 0 : f.party) != null && (null == i ? void 0 : null === (a = i.party) || void 0 === a ? void 0 : a.id) === f.party.id,
        E = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id;
    return {
        user: n,
        activity: i,
        hasSpotifyAccount: l,
        canPlaySpotify: u,
        notPlayable: h,
        syncingWithParty: g,
        syncingWithUser: E,
        isCurrentUser: p,
        currentUserTrackId: _,
        playingSameTrack: m,
        playDisabled: p || h || m,
        syncDisabled: p || E || g
    };
}
