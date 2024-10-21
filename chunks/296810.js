t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(873546),
    o = t(481060),
    l = t(993413),
    c = t(689938),
    d = t(322471);
function _(e) {
    let { children: s, className: t, layoutClassName: a, profilePreview: _, previewTitle: u } = e,
        E = () =>
            (0, n.jsx)(l.Z, {
                title: null != u ? u : c.Z.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                className: d.preview,
                children: _
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
