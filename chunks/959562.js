n.d(t, {
    Z: function () {
        return r;
    }
});
var a = n(735250);
n(470079);
var i = n(481060),
    s = n(371497),
    l = n(660097);
function r(e) {
    let { user: t, size: n } = e,
        r = (0, i.getAvatarSpecs)(n),
        o = null != t ? t.getAvatarURL(null, r.size) : l;
    return (0, a.jsx)('div', {
        className: s.avatarBackground,
        children: (0, a.jsx)('div', {
            className: s.avatar,
            style: {
                width: r.size,
                height: r.size
            },
            children: (0, a.jsx)(i.Avatar, {
                src: o,
                'aria-hidden': !0,
                size: n
            })
        })
    });
}
