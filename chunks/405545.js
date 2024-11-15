var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(186078),
    s = t(137158),
    o = t(55529);
n.Z = function (e) {
    let { formField: n, index: t, isDragEnabled: l, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: x, actionsLocation: f } = e,
        { label: h } = n;
    return (0, i.jsx)(s.Z, {
        field: n,
        index: t,
        isDragEnabled: l,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: h,
        canRemove: x,
        actionsLocation: f,
        children: (0, i.jsx)(r.BO, {
            field: n,
            value: void 0,
            radioItemClassName: a()(o.fieldBackground, o.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
