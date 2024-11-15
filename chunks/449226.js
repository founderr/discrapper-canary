t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(481060),
    s = t(901797);
function o(e) {
    let { checked: n, onChange: t, disabled: l, className: o, tooltipProps: c } = e,
        d = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, i.jsx)(r.Clickable, {
        onClick: d,
        onMouseDown: d,
        onMouseUp: d,
        className: a()(s.switch, o),
        ...c,
        children: (0, i.jsx)(r.Switch, {
            checked: n,
            onChange: t,
            disabled: l
        })
    });
}
