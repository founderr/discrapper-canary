n.d(a, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    l = n(481060),
    s = n(665692),
    o = n(992534);
function c(e) {
    let { commands: a, className: n } = e;
    return (0, i.jsx)('div', {
        className: r()(o.list, n),
        children: a.map((e) =>
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
