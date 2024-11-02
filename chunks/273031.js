n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(951394),
    u = n(661421);
function c(e) {
    let { onClick: t, children: n, tooltip: a, dangerous: c = !1, className: d, 'aria-label': f } = e;
    return (0, r.jsx)(o.Tooltip, {
        text: a,
        hideOnClick: !0,
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: _, onClick: h } = e;
            return (0, r.jsx)(l.zx, {
                onMouseEnter: o,
                onMouseLeave: _,
                onClick: (e) => {
                    e.stopPropagation(), null == h || h(), t(e);
                },
                dangerous: c,
                'aria-label': null != f ? f : a,
                className: d,
                children: i.Children.map(n, (e) => (i.isValidElement(e) ? i.cloneElement(e, { className: s()(e.props.className, u.actionBarIcon) }) : e))
            });
        }
    });
}
