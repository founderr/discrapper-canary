n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var r = n(120356),
    i = n.n(r),
    a = n(388905),
    o = n(929650);
function l(e) {
    let { children: t, className: n, ...r } = e,
        l = t();
    return (0, s.jsx)(a.ZP, {
        ...r,
        className: i()(n, o.container),
        contentClassName: o.content,
        children: l.map((e, t) =>
            (0, s.jsx)(
                'div',
                {
                    className: o.column,
                    style: { flexBasis: ''.concat(100 / l.length, '%') },
                    children: e
                },
                t
            )
        )
    });
}
