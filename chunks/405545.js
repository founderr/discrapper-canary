var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    o = t(186078),
    s = t(137158),
    l = t(631403);
n.Z = function (e) {
    let { formField: n, index: t, isDragEnabled: a, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: f, actionsLocation: h } = e,
        { label: x } = n;
    return (0, r.jsx)(s.Z, {
        field: n,
        index: t,
        isDragEnabled: a,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: x,
        canRemove: f,
        actionsLocation: h,
        children: (0, r.jsx)(o.BO, {
            field: n,
            value: void 0,
            radioItemClassName: i()(l.fieldBackground, l.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
