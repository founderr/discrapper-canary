r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(647162);
function a(e, n, r, a) {
    var s, o, l;
    let u = e.hasConnectedAccount(),
        c = (0, i.PY)(e),
        d = e.getTrack(),
        f = e.getSyncingWith(),
        _ = e.getActivity(),
        h = null !== (l = null !== (o = null == d ? void 0 : d.id) && void 0 !== o ? o : null == _ ? void 0 : _.sync_id) && void 0 !== l ? l : e.getLastPlayedTrackId(),
        p = r.id === n.getId(),
        m = u && !c,
        g = null != h && h === (null == a ? void 0 : a.sync_id),
        E = (null == _ ? void 0 : _.party) != null && (null == a ? void 0 : null === (s = a.party) || void 0 === s ? void 0 : s.id) === _.party.id,
        v = (null == f ? void 0 : f.userId) != null && (null == f ? void 0 : f.userId) === r.id,
        I = p || m || g,
        T = p || v || E;
    return {
        user: r,
        activity: a,
        hasSpotifyAccount: u,
        canPlaySpotify: c,
        notPlayable: m,
        syncingWithParty: E,
        syncingWithUser: v,
        isCurrentUser: p,
        currentUserTrackId: h,
        playingSameTrack: g,
        playDisabled: I,
        syncDisabled: T
    };
}
