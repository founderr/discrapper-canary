e.d(n, {
    Z: function () {
        return o;
    }
});
var a = e(200651);
e(192379);
var i = e(481060),
    r = e(660151);
function o(t) {
    var n;
    let { attachment: e } = t,
        o = Math.round(((null !== (n = e.size) && void 0 !== n ? n : 0) / 1024 / 1024) * 100) / 100;
    return (0, a.jsxs)('div', {
        className: r.container,
        children: [
            (0, a.jsx)(i.ImageFileIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r.fileIcon
            }),
            (0, a.jsx)(i.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: r.fileName,
                children: e.filename
            }),
            (0, a.jsx)(i.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)('div', { className: r.dot }),
            (0, a.jsx)(i.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsxs)(i.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [o, 'MB']
            })
        ]
    });
}
