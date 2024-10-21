n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(192379),
    i = n(995295);
let a = Object.freeze({ box: 'border-box' });
function s(e) {
    let { ref: t, onUpdate: n, resizeObserver: s, listenerMap: o, key: l } = e;
    (0, r.useLayoutEffect)(() => {
        let { current: e } = t;
        return (
            null != e &&
                (o.set(e, (e) => {
                    (0, i.flushSync)(() => {
                        n(e, l);
                    });
                }),
                s.observe(e, a)),
            () => {
                null != e && (s.unobserve(e), o.delete(e));
            }
        );
    }, [n, s, t, o, l]);
}
