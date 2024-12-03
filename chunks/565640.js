n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    s = n(26033),
    o = n(897674),
    l = n(561308),
    u = n(709054),
    c = n(456644),
    d = n(206583);
function f(e, t) {
    let n = (0, o.Z)(d.YN.GLOBAL_FEED),
        i = (0, o.Z)(d.YN.GAME_PROFILE_FEED),
        { recentActivityEnabled: f } = (0, c.i)({ location: t });
    return (0, r.useMemo)(() => {
        var t;
        return f && null != e
            ? null !==
                  (t = a()(n)
                      .unionBy(i, (e) => e.id)
                      .filter((t) => !(0, l.kr)(t) && (0, s.LP)(t) && t.author_id === e)
                      .uniqWith((e, t) => 'application_id' in e.extra && 'application_id' in t.extra && e.extra.application_id === t.extra.application_id)
                      .orderBy((e) => {
                          let { id: t } = e;
                          return u.default.extractTimestamp(t);
                      }, 'desc')
                      .value()[0]) && void 0 !== t
                ? t
                : null
            : null;
    }, [f, e, n, i]);
}
