n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(192379),
    i = n(442837),
    a = n(355467),
    s = n(78839);
function o() {
    let e = (0, i.e7)([s.ZP], () => s.ZP.hasFetchedSubscriptions());
    return (
        r.useEffect(() => {
            !e && (0, a.jg)();
        }, [e]),
        e
    );
}
