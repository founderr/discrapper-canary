a.d(n, {
    Z: function () {
        return c;
    }
});
var i = a(735250);
a(470079);
var t = a(120356),
    r = a.n(t),
    l = a(481060),
    s = a(665692),
    o = a(992534);
function c(e) {
    let { commands: n, className: a } = e;
    return (0, i.jsx)('div', {
        className: r()(o.list, a),
        children: n.map((e) =>
            (0, i.jsxs)(
                'div',
                {
                    className: o.row,
                    children: [
                        (0, i.jsxs)(l.Text, {
                            className: o.commandName,
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: [s.GI, e.displayName]
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: e.displayDescription
                        })
                    ]
                },
                e.id
            )
        )
    });
}
