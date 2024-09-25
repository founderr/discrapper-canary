n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(274718);
let u = 500;
function c(e) {
    let { children: t, 'aria-label': n, className: a, position: c, ...d } = e,
        _ = i.useRef(null),
        E = null != n ? n : 'string' == typeof t && t;
    return (0, r.jsx)(s.Tooltip, {
        ...d,
        position: null != c ? c : 'top',
        delay: u,
        text: t,
        'aria-label': E,
        children: (n) => {
            let { onMouseEnter: i, onMouseLeave: s } = n;
            return (0, r.jsx)('div', {
                className: o()(a, l.overflow),
                ref: _,
                'aria-hidden': e['aria-hidden'],
                onMouseEnter: () => {
                    let { current: e } = _;
                    null != e && e.offsetWidth < e.scrollWidth && (null == i || i());
                },
                onMouseLeave: s,
                children: t
            });
        }
    });
}
