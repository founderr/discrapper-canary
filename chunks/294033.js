var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(846337);
let o = (e) => {
    let { keybind: t, separator: n, className: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, o) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: l()(a.key, s),
                            children: e
                        }),
                        o === t.length - 1 ? void 0 : n
                    ]
                },
                o
            )
        )
    });
};
(o.defaultProps = { separator: '+' }), (t.Z = o);
