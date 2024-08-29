n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    c = n(718629),
    s = n(405047),
    u = n(535271);
function d() {
    let e = a.useRef(null);
    return (0, r.jsx)('div', {
        ref: e,
        className: i()(u.panel, s.panel),
        children: (0, r.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            onClick: c.Z.clearUploadedKeyVersions,
            children: 'Reset Uploaded Key Versions Cache'
        })
    });
}
