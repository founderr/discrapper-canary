n.d(a, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var t = n(470079),
    i = n(392711),
    r = n.n(i),
    o = n(876215),
    l = n(442837),
    s = n(146282),
    c = n(897674),
    d = n(709054),
    u = n(206583);
let m = new Set([o.s.PLAYED_GAME]),
    p = (e) => m.has(e.content_type);
function g() {
    let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
        a = (0, c.Z)(u.YN.GLOBAL_FEED),
        n = t.useMemo(
            () =>
                r()(a)
                    .unionBy(e, (e) => e.id)
                    .filter(p)
                    .orderBy((e) => d.default.extractTimestamp(e.id), 'desc')
                    .uniqWith((e, a) => e.author_id === a.author_id && e.extra.application_id === a.extra.application_id)
                    .value(),
            [e, a]
        );
    return {
        requestId: (0, l.e7)([s.Z], () => s.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)),
        entries: n
    };
}
