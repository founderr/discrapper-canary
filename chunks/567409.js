n.d(a, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var t = n(470079),
    r = n(392711),
    s = n.n(r),
    o = n(876215),
    i = n(442837),
    l = n(146282),
    c = n(897674),
    u = n(709054),
    _ = n(206583);
let E = new Set([o.s.PLAYED_GAME]),
    d = (e) => E.has(e.content_type);
function I() {
    let e = (0, c.Z)(_.YN.GAME_PROFILE_FEED),
        a = (0, c.Z)(_.YN.GLOBAL_FEED),
        n = t.useMemo(
            () =>
                s()(a)
                    .unionBy(e, (e) => e.id)
                    .filter(d)
                    .orderBy((e) => u.default.extractTimestamp(e.id), 'desc')
                    .uniqWith((e, a) => e.author_id === a.author_id && e.extra.application_id === a.extra.application_id)
                    .value(),
            [e, a]
        );
    return {
        requestId: (0, i.e7)([l.Z], () => l.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
        entries: n
    };
}
