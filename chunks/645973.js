n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    c = n(90641),
    s = n(256690),
    d = n(986310);
function u() {
    let e = a.useRef(null);
    return (0, r.jsx)('div', {
        ref: e,
        className: i()(d.panel, s.panel),
        children: (0, r.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            onClick: c.Z.clearUploadedKeyVersions,
            children: 'Reset Uploaded Key Versions Cache'
        })
    });
}
