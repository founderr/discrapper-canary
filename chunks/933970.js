n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(129258);
function o(e) {
    let { icon: t, tooltip: n, onClick: r, className: o } = e,
        c = (e) => {
            e.preventDefault(), e.stopPropagation(), r(e);
        };
    return (0, i.jsx)(s.Tooltip, {
        text: n,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                'aria-label': n,
                onClick: c,
                className: a()(l.actionButton, o),
                children: (0, i.jsx)(t, {
                    className: l.icon,
                    color: 'currentColor'
                })
            })
    });
}
