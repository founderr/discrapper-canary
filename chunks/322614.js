n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(392711),
    a = n(709054),
    r = n(26033),
    s = n(897674),
    o = n(561308),
    c = n(206583);
function u(e) {
    let t = (0, s.Z)(c.YN.GLOBAL_FEED),
        n = (0, s.Z)(c.YN.GAME_PROFILE_FEED);
    return (0, i.useMemo)(() => {
        let i = (0, l.unionBy)(t, n, (e) => e.id).filter((t) => !(0, o.kr)(t) && (0, r.LP)(t) && t.author_id === e);
        return (0, l.uniqWith)(i, (e, t) => 'application_id' in e.extra && 'application_id' in t.extra && e.extra.application_id === t.extra.application_id).sort((e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id));
    }, [t, n, e]);
}
