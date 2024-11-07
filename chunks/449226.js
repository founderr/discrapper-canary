t.d(n, {
    Z: function () {
        return l;
    }
});
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    s = t(481060),
    o = t(901797);
function l(e) {
    let { checked: n, onChange: t, disabled: a, className: l, tooltipProps: c } = e,
        d = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, r.jsx)(s.Clickable, {
        onClick: d,
        onMouseDown: d,
        onMouseUp: d,
        className: i()(o.switch, l),
        ...c,
        children: (0, r.jsx)(s.Switch, {
            checked: n,
            onChange: t,
            disabled: a
        })
    });
}
