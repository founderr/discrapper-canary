n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    o = n(526299);
function l(e) {
    let { icon: t, tooltip: n, onClick: a, className: l } = e,
        c = (e) => {
            e.preventDefault(), e.stopPropagation(), a(e);
        };
    return (0, s.jsx)(i.Tooltip, {
        text: n,
        children: (e) =>
            (0, s.jsx)(i.Clickable, {
                ...e,
                'aria-label': n,
                onClick: c,
                className: r()(o.actionButton, l),
                children: (0, s.jsx)(t, {
                    className: o.icon,
                    color: 'currentColor'
                })
            })
    });
}
