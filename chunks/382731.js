r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(995295);
let s = Object.freeze({ box: 'border-box' });
function o(e) {
    let { ref: n, onUpdate: r, resizeObserver: o, listenerMap: l, key: u } = e;
    (0, i.useLayoutEffect)(() => {
        let e = (e) => {
                (0, a.flushSync)(() => {
                    r(e, u);
                });
            },
            { current: i } = n;
        return (
            null != i && (l.set(i, e), o.observe(i, s)),
            () => {
                null != i && (o.unobserve(i), l.delete(i));
            }
        );
    }, [r, o, n, l, u]);
}
