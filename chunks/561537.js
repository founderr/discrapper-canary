n.d(t, {
    l: function () {
        return o;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(557533),
    l = n.n(r),
    a = n(329363);
function o(e) {
    let { className: t, header: n, children: r } = e,
        o = s.useMemo(() => {
            let e = !1;
            return (
                s.Children.forEach(r, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [r]);
    return (0, i.jsxs)('div', {
        className: l()(a.wrapper, t),
        children: [
            (0, i.jsx)('div', {
                className: a.header,
                children: n
            }),
            o &&
                (0, i.jsx)('div', {
                    className: a.content,
                    children: r
                })
        ]
    });
}
