n.d(t, {
    F: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(799248);
function c(e) {
    return '' === e || '-' === e;
}
let d = (e) => {
    let { value: t, onChange: n, className: r, minValue: o, maxValue: d } = e,
        [_, E] = a.useState(t),
        f = c(_) || (null != o && _ <= o),
        h = c(_) || (null != d && _ >= d),
        p = (e) => {
            n(c(e) ? (null != o ? o : 0) : e), E(e);
        },
        m = (e) => {
            if ((e.stopPropagation(), !f)) p(_ - 1);
        },
        I = (e) => {
            if ((e.stopPropagation(), !h)) p(_ + 1);
        },
        T = (e) => {
            if (c(e)) return p(e);
            let t = parseInt(e);
            return isNaN(t) ? void 0 : null != d && t >= d ? p(d) : null != o && t <= o ? p(o) : p(t);
        };
    return (0, i.jsx)(l.FocusRing, {
        within: !0,
        children: (0, i.jsxs)('div', {
            className: s()(u.actions, r),
            children: [
                (0, i.jsx)(l.Clickable, {
                    onClick: m,
                    tabIndex: -1,
                    className: s()(u.iconWrapper, u.__invalid_subtract, { [u.disabled]: f }),
                    children: (0, i.jsx)(l.MinusIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(u.icon, { [u.disabled]: f })
                    })
                }),
                (0, i.jsx)(l.TextInput, {
                    value: ''.concat(_),
                    onChange: T,
                    inputClassName: u.value
                }),
                (0, i.jsx)(l.Clickable, {
                    onClick: I,
                    tabIndex: -1,
                    className: s()(u.iconWrapper, u.__invalid_add, { [u.disabled]: h }),
                    children: (0, i.jsx)(l.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(u.icon, { [u.disabled]: h })
                    })
                })
            ]
        })
    });
};
