a.d(n, {
    Ns: function () {
        return I;
    }
}),
    a(47120);
var t = a(470079),
    r = a(392711),
    s = a.n(r),
    i = a(876215),
    o = a(442837),
    l = a(146282),
    c = a(26033),
    d = a(897674),
    u = a(709054),
    _ = a(206583);
let E = new Set([i.s.PLAYED_GAME]),
    m = (e) => E.has(e.content_type);
function I(e) {
    let { entries: n } = (function () {
        let e = (0, d.Z)(_.YN.GAME_PROFILE_FEED),
            n = (0, d.Z)(_.YN.GLOBAL_FEED),
            a = t.useMemo(
                () =>
                    s()(n)
                        .unionBy(e, (e) => e.id)
                        .filter(m)
                        .orderBy((e) => u.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, n) => e.author_id === n.author_id && e.extra.application_id === n.extra.application_id)
                        .value(),
                [e, n]
            );
        return {
            requestId: (0, o.e7)([l.Z], () => l.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
            entries: a
        };
    })();
    return t.useMemo(() => (null == n ? void 0 : n.filter((n) => (0, c.dX)(n) && n.extra.application_id === e)), [n, e]);
}
