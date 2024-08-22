t.d(r, {
    Z: function () {
        return u;
    }
});
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(481060),
    c = t(718629),
    s = t(405047),
    d = t(535271);
function u() {
    let e = n.useRef(null);
    return (0, a.jsx)('div', {
        ref: e,
        className: o()(d.panel, s.panel),
        children: (0, a.jsx)(l.Button, {
            size: l.Button.Sizes.SMALL,
            onClick: c.Z.clearUploadedKeyVersions,
            children: 'Reset Uploaded Key Versions Cache'
        })
    });
}
