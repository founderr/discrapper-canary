t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    l = t(665692),
    s = t(992534);
function c(e) {
    let { commands: n, className: t } = e;
    return (0, i.jsx)('div', {
        className: r()(s.list, t),
        children: n.map((e) =>
            (0, i.jsxs)(
                'div',
                {
                    className: s.row,
                    children: [
                        (0, i.jsxs)(o.Text, {
                            className: s.commandName,
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: [l.GI, e.displayName]
                        }),
                        (0, i.jsx)(o.Text, {
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
