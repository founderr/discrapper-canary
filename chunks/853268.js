n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(600164),
    o = n(388905),
    c = n(262437),
    u = n(232186);
function d(e) {
    let { value: t, onChange: n, subText: r, muted: d, marginTopStyle: h } = e;
    return (0, i.jsx)(a.Z, {
        className: null != h ? h : u.marginTop20,
        align: a.Z.Align.CENTER,
        children: (0, i.jsx)(l.Checkbox, {
            value: t,
            type: l.Checkbox.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, i.jsx)(o.i_, {
                className: s()({ [c.subText]: !d }),
                children: r
            })
        })
    });
}
