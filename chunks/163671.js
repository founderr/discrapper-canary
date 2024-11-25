n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(388905),
    a = n(854674);
function o(e) {
    let { children: t, className: n, ...r } = e,
        o = t();
    return (0, i.jsx)(l.ZP, {
        ...r,
        className: s()(n, a.container),
        contentClassName: a.content,
        children: o.map((e, t) =>
            (0, i.jsx)(
                'div',
                {
                    className: a.column,
                    style: { flexBasis: ''.concat(100 / o.length, '%') },
                    children: e
                },
                t
            )
        )
    });
}
