e.d(t, {
    Z: function () {
        return s;
    }
});
var l = e(200651);
e(192379);
var r = e(481060),
    u = e(36703),
    i = e(208049),
    a = e(242291),
    o = e(388032);
function s() {
    let n = (0, a.pI)();
    return (0, l.jsx)(r.MenuControlItem, {
        id: 'user-volume',
        'aria-haspopup': !0,
        label: o.intl.string(o.t.kbFsAA),
        control: (t, e) =>
            (0, l.jsx)(r.MenuSliderControl, {
                ...t,
                ref: e,
                value: (0, u.P)(n),
                maxValue: 100,
                onChange: (n) => (0, i.xz)((0, u.A)(n)),
                'aria-label': o.intl.string(o.t.kbFsAA)
            })
    });
}
