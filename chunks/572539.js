n.d(t, {
    Z: function () {
        return u;
    }
});
var o = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    i = n(481060),
    l = n(259580),
    r = n(20535);
function u(e) {
    let { options: t, onClick: n, className: a, optionClassName: u, hideCaret: c } = e;
    return (0, o.jsx)('div', {
        className: s()(r.root, a),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                i.Clickable,
                {
                    onClick: () => n(e),
                    className: s()(r.option, u),
                    children: [
                        (0, o.jsx)(i.Text, {
                            className: r.text,
                            color: 'none',
                            variant: 'text-md/normal',
                            children: e.label
                        }),
                        !(null == c ? void 0 : c(e)) &&
                            (0, o.jsx)(l.Z, {
                                className: r.caret,
                                direction: l.Z.Directions.RIGHT
                            })
                    ]
                },
                t
            )
        )
    });
}
