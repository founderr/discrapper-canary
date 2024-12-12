r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(763472),
    o = r(647162),
    l = r(680686),
    u = r(131303);
async function c(e, n, c) {
    let { hasSpotifyAccount: d, activity: f, user: _ } = e;
    (0, u.Z)(d) &&
        null != f &&
        null != f.sync_id &&
        (await (0, o.KV)(),
        await (0, o.yp)().catch(
            (e) => (
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await r.e('46317').then(r.bind(r, 841178));
                    return (n) => (0, i.jsx)(e, { ...n });
                }),
                Promise.reject(e)
            )
        ),
        s.Z_(f, _.id),
        (0, l.Z)(n, _, f, c));
}
