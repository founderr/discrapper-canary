r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(763472),
    a = r(647162),
    s = r(680686),
    o = r(131303);
async function l(e, n, r) {
    let { hasSpotifyAccount: l, activity: u, user: c } = e;
    (0, o.Z)(l) && null != u && null != u.sync_id && (await (0, a.KV)(), i.hY(u, c.id), (0, s.Z)(n, c, u, r));
}
