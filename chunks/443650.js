r.d(n, {
    Z: function () {
        return d;
    }
});
var t = r(735250);
r(470079);
var a = r(120356),
    o = r.n(a),
    i = r(481060),
    s = r(809086),
    l = r(16990);
function c(e) {
    let { className: n, onClose: r } = e;
    return (0, t.jsx)(i.Clickable, {
        className: o()(l.closeButtonContainer, n),
        onClick: r,
        children: (0, t.jsx)(i.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            className: l.closeButtonIcon
        })
    });
}
function d(e) {
    let { guildProductListing: n, onClose: r, className: a } = e;
    return (0, t.jsxs)(i.ModalHeader, {
        className: o()(l.header, a),
        separator: !1,
        children: [
            (0, t.jsx)(s.Z, {
                className: l.headerImage,
                listing: n,
                imageSize: 500,
                alt: ''
            }),
            (0, t.jsx)(c, {
                className: l.closeButton,
                onClose: r
            })
        ]
    });
}
