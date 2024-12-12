r.d(n, {
    R: function () {
        return u;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(675478),
    o = r(654455),
    l = r(526761);
function u(e) {
    i.useEffect(() => {
        s.DZ.loadIfUncached(l.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, a.e7)([o.ZP], () => o.ZP.getTopCommandsWithoutLoadingLatest());
    return i.useMemo(() => (0, o.LU)(n, e), [n, e]);
}
