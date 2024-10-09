a.d(n, {
    Z: function () {
        return m;
    }
}),
    a(47120);
var t = a(470079),
    r = a(392711),
    s = a.n(r),
    i = a(876215),
    o = a(442837),
    l = a(146282),
    c = a(897674),
    d = a(709054),
    u = a(206583);
let _ = new Set([i.s.PLAYED_GAME]),
    E = (e) => _.has(e.content_type);
function m() {
    let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
        n = (0, c.Z)(u.YN.GLOBAL_FEED),
        a = t.useMemo(
            () =>
                s()(n)
                    .unionBy(e, (e) => e.id)
                    .filter(E)
                    .orderBy((e) => d.default.extractTimestamp(e.id), 'desc')
                    .uniqWith((e, n) => e.author_id === n.author_id && e.extra.application_id === n.extra.application_id)
                    .value(),
            [e, n]
        );
    return {
        requestId: (0, o.e7)([l.Z], () => l.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)),
        entries: a
    };
}
