a.d(t, {
    Z: function () {
        return r;
    }
});
var n = a(735250);
a(470079);
var o = a(481060),
    l = a(660151);
function r(e) {
    var t;
    let { attachment: a } = e,
        r = Math.round(((null !== (t = a.size) && void 0 !== t ? t : 0) / 1024 / 1024) * 100) / 100;
    return (0, n.jsxs)('div', {
        className: l.container,
        children: [
            (0, n.jsx)(o.ImageFileIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l.fileIcon
            }),
            (0, n.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: l.fileName,
                children: a.filename
            }),
            (0, n.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, n.jsx)('div', { className: l.dot }),
            (0, n.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, n.jsxs)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [r, 'MB']
            })
        ]
    });
}
