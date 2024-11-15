n.d(e, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(38477),
    s = n(660097);
function r(t) {
    let { user: e, size: n } = t,
        r = (0, a.getAvatarSpecs)(n),
        o = null != e ? e.getAvatarURL(null, r.size) : s;
    return (0, i.jsx)('div', {
        className: l.avatarBackground,
        children: (0, i.jsx)('div', {
            className: l.avatar,
            style: {
                width: r.size,
                height: r.size
            },
            children: (0, i.jsx)(a.Avatar, {
                src: o,
                'aria-hidden': !0,
                size: n
            })
        })
    });
}
