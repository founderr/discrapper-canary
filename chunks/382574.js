var i = t(200651);
t(192379);
var l = t(73880),
    a = t(137158),
    s = t(388032),
    r = t(31619);
n.Z = function (e) {
    let { formField: n, index: t, isDragEnabled: o, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: x, actionsLocation: f } = e,
        { label: h, placeholder: g } = n;
    return (0, i.jsx)(a.Z, {
        field: n,
        index: t,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: h,
        canRemove: x,
        actionsLocation: f,
        children: (0, i.jsx)(l.Q8, {
            className: r.fieldBackground,
            placeholder: null != g ? g : s.intl.string(s.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
