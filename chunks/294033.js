n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(131478);
function l(e) {
    let { keybind: t, separator: n = '+', className: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, l) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: a()(o.key, s),
                            children: e
                        }),
                        l === t.length - 1 ? void 0 : n
                    ]
                },
                l
            )
        )
    });
}
