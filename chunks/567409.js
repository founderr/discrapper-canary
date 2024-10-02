a.d(n, {
    Z: function () {
        return _;
    }
}),
    a(47120);
var t = a(470079),
    i = a(392711),
    o = a.n(i),
    r = a(876215),
    l = a(442837),
    s = a(146282),
    c = a(897674),
    d = a(709054),
    u = a(206583);
let m = new Set([r.s.PLAYED_GAME]),
    p = (e) => m.has(e.content_type);
function _() {
    let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
        n = (0, c.Z)(u.YN.GLOBAL_FEED),
        a = t.useMemo(
            () =>
                o()(n)
                    .unionBy(e, (e) => e.id)
                    .filter(p)
                    .orderBy((e) => d.default.extractTimestamp(e.id), 'desc')
                    .uniqWith((e, n) => e.author_id === n.author_id && e.extra.application_id === n.extra.application_id)
                    .value(),
            [e, n]
        );
    return {
        requestId: (0, l.e7)([s.Z], () => s.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)),
        entries: a
    };
}
