var r = t(200651);
t(192379);
var a = t(73880),
    i = t(137158),
    o = t(388032),
    s = t(55529);
n.Z = function (e) {
    let { formField: n, index: t, isDragEnabled: l, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: f, actionsLocation: h } = e,
        { label: x, placeholder: p } = n;
    return (0, r.jsx)(i.Z, {
        field: n,
        index: t,
        isDragEnabled: l,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: x,
        canRemove: f,
        actionsLocation: h,
        children: (0, r.jsx)(a.Q8, {
            className: s.fieldBackground,
            placeholder: null != p ? p : o.intl.string(o.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
