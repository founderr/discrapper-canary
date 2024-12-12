r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(626135),
    a = r(647162),
    s = r(616922),
    o = r(981631);
let l = [s.kG.USER_ACTIVITY_SYNC, s.kG.EMBED_SYNC];
function u(e, n, r, s) {
    i.default.track(o.rMx.SPOTIFY_BUTTON_CLICKED, {
        type: e,
        source: s,
        is_premium: (0, a.Wo)(),
        party_id: l.includes(e) && (null == r ? void 0 : r.party) != null ? r.party.id : null,
        other_user_id: n.id
    });
}
