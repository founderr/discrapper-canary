n.d(t, {
    Z: function () {
        return o;
    }
});
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(388905),
    l = n(929650);
function o(e) {
    let { children: t, className: n, ...r } = e,
        o = t();
    return (0, s.jsx)(a.ZP, {
        ...r,
        className: i()(n, l.container),
        contentClassName: l.content,
        children: o.map((e, t) =>
            (0, s.jsx)(
                'div',
                {
                    className: l.column,
                    style: { flexBasis: ''.concat(100 / o.length, '%') },
                    children: e
                },
                t
            )
        )
    });
}
