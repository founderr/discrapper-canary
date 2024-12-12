r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(192379),
    a = r(392711),
    s = r.n(a),
    o = r(442837),
    l = r(26033),
    u = r(897674),
    c = r(561308),
    d = r(314897),
    f = r(709054),
    _ = r(456644),
    h = r(206583);
function p(e, n) {
    let r = (0, u.Z)(h.YN.GLOBAL_FEED),
        a = (0, u.Z)(h.YN.GAME_PROFILE_FEED),
        { recentActivityEnabled: p } = (0, _.i)({ location: n }),
        m = (0, o.e7)([d.default], () => d.default.getId() === e),
        g = p && null != e && !m;
    return (0, i.useMemo)(() => {
        var n;
        return g
            ? null !==
                  (n = s()(r)
                      .unionBy(a, (e) => e.id)
                      .filter((n) => n.author_id === e && !(0, c.kr)(n) && (0, l.Rh)(n) && (0, c.Ae)(n))
                      .uniqWith((e, n) => 'application_id' in e.extra && 'application_id' in n.extra && e.extra.application_id === n.extra.application_id)
                      .orderBy((e) => {
                          let { id: n } = e;
                          return f.default.extractTimestamp(n);
                      }, 'desc')
                      .value()[0]) && void 0 !== n
                ? n
                : null
            : null;
    }, [g, e, r, a]);
}
