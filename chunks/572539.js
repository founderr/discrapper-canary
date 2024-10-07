o.d(t, {
    Z: function () {
        return u;
    }
});
var n = o(735250);
o(470079);
var a = o(120356),
    s = o.n(a),
    l = o(481060),
    i = o(259580),
    r = o(20535);
function u(e) {
    let { options: t, onClick: o, className: a, optionClassName: u, hideCaret: c } = e;
    return (0, n.jsx)('div', {
        className: s()(r.root, a),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                l.Clickable,
                {
                    onClick: () => o(e),
                    className: s()(r.option, u),
                    children: [
                        (0, n.jsx)(l.Text, {
                            className: r.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, n.jsx)(i.Z, {
                                className: r.caret,
                                direction: i.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
