t.d(n, {
    Ns: function () {
        return I;
    }
}),
    t(47120);
var a = t(192379),
    r = t(392711),
    s = t.n(r),
    i = t(876215),
    o = t(442837),
    l = t(146282),
    c = t(26033),
    d = t(897674),
    u = t(709054),
    _ = t(206583);
let E = new Set([i.s.PLAYED_GAME]),
    m = (e) => E.has(e.content_type);
function I(e) {
    let { entries: n } = (function () {
        let e = (0, d.Z)(_.YN.GAME_PROFILE_FEED),
            n = (0, d.Z)(_.YN.GLOBAL_FEED),
            t = a.useMemo(
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
            entries: t
        };
    })();
    return a.useMemo(() => (null == n ? void 0 : n.filter((n) => (0, c.dX)(n) && n.extra.application_id === e)), [n, e]);
}
