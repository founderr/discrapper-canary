r.d(t, {
    Z: function () {
        return u;
    }
});
var a = r(735250),
    n = r(470079),
    i = r(120356),
    o = r.n(i),
    l = r(481060),
    c = r(718629),
    s = r(405047),
    d = r(535271);
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
