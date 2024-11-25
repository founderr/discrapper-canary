n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(518950),
    s = n(182294),
    l = n(388032),
    o = n(818826),
    c = n(144343);
function d(e) {
    var t;
    let { referrer: n } = e,
        { avatarSrc: d, eventHandlers: u } = (0, a.Z)({
            user: n,
            size: s.EF.SIZE_32,
            animateOnHover: !0
        });
    return (0, i.jsx)('div', {
        className: o.attributionBannerContainer,
        children: (0, i.jsxs)('div', {
            className: o.attributionBannerContent,
            children: [
                (0, i.jsx)('div', {
                    className: o.iconContainer,
                    children: (0, i.jsx)(r.Avatar, {
                        className: o.icon,
                        src: d,
                        'aria-label': n.username,
                        size: s.EF.SIZE_32,
                        ...u
                    })
                }),
                (0, i.jsx)(r.Heading, {
                    variant: 'heading-lg/medium',
                    className: o.textContainer,
                    children: l.intl.format(l.t.IqxblZ, { username: null != (t = n).globalName ? t.globalName : t.username })
                }),
                (0, i.jsx)('img', {
                    src: c,
                    alt: '',
                    className: o.attributionIcon
                })
            ]
        })
    });
}
