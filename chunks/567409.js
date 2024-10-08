t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var a = t(470079),
    r = t(392711),
    s = t.n(r),
    i = t(876215),
    o = t(442837),
    l = t(146282),
    c = t(897674),
    d = t(709054),
    u = t(206583);
let _ = new Set([i.s.PLAYED_GAME]),
    E = (e) => _.has(e.content_type);
function I() {
    let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
        n = (0, c.Z)(u.YN.GLOBAL_FEED),
        t = a.useMemo(
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
        entries: t
    };
}
