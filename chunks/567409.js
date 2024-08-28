n.d(a, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var s = n(470079),
    r = n(392711),
    t = n.n(r),
    o = n(876215),
    i = n(442837),
    l = n(146282),
    c = n(897674),
    _ = n(709054),
    E = n(206583);
let d = new Set([o.s.PLAYED_GAME]),
    u = (e) => d.has(e.content_type);
function I() {
    let e = (0, c.Z)(E.YN.GAME_PROFILE_FEED),
        a = (0, c.Z)(E.YN.GLOBAL_FEED),
        n = s.useMemo(
            () =>
                t()(a)
                    .unionBy(e, (e) => e.id)
                    .filter(u)
                    .orderBy((e) => _.default.extractTimestamp(e.id), 'desc')
                    .uniqWith((e, a) => e.author_id === a.author_id && e.extra.application_id === a.extra.application_id)
                    .value(),
            [e, a]
        );
    return {
        requestId: (0, i.e7)([l.Z], () => l.Z.getFeedRequestId(E.YN.GAME_PROFILE_FEED)),
        entries: n
    };
}
