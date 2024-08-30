t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(873546),
    o = t(481060),
    l = t(993413),
    c = t(689938),
    d = t(308152);
function u(e) {
    let { children: s, className: t, layoutClassName: a, profilePreview: u, previewTitle: _ } = e,
        E = () =>
            (0, n.jsx)(l.Z, {
                title: null != _ ? _ : c.Z.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                className: d.preview,
                children: u
            });
    return (0, n.jsx)('div', {
        className: t,
        children: (0, n.jsxs)(o.FormSection, {
            className: d.profileCustomizationSection,
            children: [
                r.tq && E(),
                (0, n.jsxs)('div', {
                    className: i()(d.baseLayout, a),
                    children: [s, !r.tq && E()]
                })
            ]
        })
    });
}
