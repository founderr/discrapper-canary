t.d(n, {
    Z: function () {
        return l;
    }
});
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    o = t(481060),
    s = t(176981);
function l(e) {
    let { checked: n, onChange: t, disabled: a, className: l, tooltipProps: c } = e,
        d = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, r.jsx)(o.Clickable, {
        onClick: d,
        onMouseDown: d,
        onMouseUp: d,
        className: i()(s.switch, l),
        ...c,
        children: (0, r.jsx)(o.Switch, {
            checked: n,
            onChange: t,
            disabled: a
        })
    });
}
