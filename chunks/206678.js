r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(47120);
var a = r(192379);
function s(e, n) {
    let r = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (n.clientX - r.left) / r.width));
}
function o(e) {
    let { ref: n, onDrag: r, onDragStart: i, onDragEnd: o } = e,
        [l, u] = a.useState(!1);
    return (
        a.useEffect(() => {
            if (!!l)
                return (
                    window.addEventListener('mouseup', e),
                    window.addEventListener('mousemove', i),
                    () => {
                        window.removeEventListener('mouseup', e), window.removeEventListener('mousemove', i);
                    }
                );
            function e() {
                null == o || o(), u(!1);
            }
            function i(e) {
                let i = n.current;
                if (null != i) null == r || r(s(i, e));
            }
        }, [n, l, o, r]),
        [
            l,
            a.useCallback(
                (e) => {
                    e.preventDefault();
                    let a = n.current;
                    if (null != a) u(!0), null == i || i(), null == r || r(s(a, e));
                },
                [n, i, r]
            )
        ]
    );
}
