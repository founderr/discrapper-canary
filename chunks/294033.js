n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(131478);
function o(e) {
    let { keybind: t, separator: n = '+', className: r } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, o) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: a()(l.key, r),
                            children: e
                        }),
                        o === t.length - 1 ? void 0 : n
                    ]
                },
                o
            )
        )
    });
}
