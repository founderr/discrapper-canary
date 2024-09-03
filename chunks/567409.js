n.d(a, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var t = n(470079),
    r = n(392711),
    s = n.n(r),
    i = n(876215),
    o = n(442837),
    l = n(146282),
    c = n(897674),
    d = n(709054),
    u = n(206583);
let _ = new Set([i.s.PLAYED_GAME]),
    E = (e) => _.has(e.content_type);
function I() {
    let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
        a = (0, c.Z)(u.YN.GLOBAL_FEED),
        n = t.useMemo(
            () =>
                s()(a)
                    .unionBy(e, (e) => e.id)
                    .filter(E)
                    .orderBy((e) => d.default.extractTimestamp(e.id), 'desc')
                    .uniqWith((e, a) => e.author_id === a.author_id && e.extra.application_id === a.extra.application_id)
                    .value(),
            [e, a]
        );
    return {
        requestId: (0, o.e7)([l.Z], () => l.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)),
        entries: n
    };
}
