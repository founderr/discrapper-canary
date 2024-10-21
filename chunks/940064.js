t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    s = t(665692),
    l = t(992534);
function c(e) {
    let { commands: n, className: t } = e;
    return (0, i.jsx)('div', {
        className: r()(l.list, t),
        children: n.map((e) =>
            (0, i.jsxs)(
                'div',
                {
                    className: l.row,
                    children: [
                        (0, i.jsxs)(o.Text, {
                            className: l.commandName,
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: [s.GI, e.displayName]
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
