n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079);
function a(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
function o(e) {
    let { ref: t, onDrag: n, onDragStart: r, onDragEnd: o } = e,
        [s, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (!!s)
                return (
                    window.addEventListener('mouseup', e),
                    window.addEventListener('mousemove', r),
                    () => {
                        window.removeEventListener('mouseup', e), window.removeEventListener('mousemove', r);
                    }
                );
            function e() {
                null == o || o(), l(!1);
            }
            function r(e) {
                let r = t.current;
                if (null != r) null == n || n(a(r, e));
            }
        }, [t, s, o, n]),
        [
            s,
            i.useCallback(
                (e) => {
                    e.preventDefault();
                    let i = t.current;
                    if (null != i) l(!0), null == r || r(), null == n || n(a(i, e));
                },
                [t, r, n]
            )
        ]
    );
}
