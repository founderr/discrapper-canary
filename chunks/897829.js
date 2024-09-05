n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(470079),
    r = n(442837),
    u = n(355467),
    l = n(78839);
function o() {
    let e = (0, r.e7)([l.ZP], () => l.ZP.hasFetchedSubscriptions());
    return (
        i.useEffect(() => {
            !e && (0, u.jg)();
        }, [e]),
        e
    );
}
