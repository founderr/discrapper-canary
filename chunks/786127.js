var r = t(200651);
t(192379);
var a = t(707592),
    i = t(137158),
    s = t(388032),
    o = t(631403);
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
        children: (0, r.jsx)(a.Gi, {
            className: o.fieldBackground,
            placeholder: null != p ? p : s.intl.string(s.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
