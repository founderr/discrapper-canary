n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(388905),
    l = n(463143);
function o(e) {
    let { children: t, className: n, ...r } = e,
        o = t();
    return (0, i.jsx)(a.ZP, {
        ...r,
        className: s()(n, l.container),
        contentClassName: l.content,
        children: o.map((e, t) =>
            (0, i.jsx)(
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
