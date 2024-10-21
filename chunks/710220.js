n.d(t, {
    Z: function () {
        return _;
    }
});
var s = n(200651);
n(192379);
var a = n(481060),
    r = n(518950),
    i = n(182294),
    l = n(689938),
    o = n(458269),
    c = n(144343);
function _(e) {
    var t;
    let { referrer: n } = e,
        { avatarSrc: _, eventHandlers: d } = (0, r.Z)({
            user: n,
            size: i.EF.SIZE_32,
            animateOnHover: !0
        });
    return (0, s.jsx)('div', {
        className: o.attributionBannerContainer,
        children: (0, s.jsxs)('div', {
            className: o.attributionBannerContent,
            children: [
                (0, s.jsx)('div', {
                    className: o.iconContainer,
                    children: (0, s.jsx)(a.Avatar, {
                        className: o.icon,
                        src: _,
                        'aria-label': n.username,
                        size: i.EF.SIZE_32,
                        ...d
                    })
                }),
                (0, s.jsx)(a.Heading, {
                    variant: 'heading-lg/medium',
                    className: o.textContainer,
                    children: l.Z.Messages.REFERRAL_PROGRAM_SUBSCRIBER_HOMER_BANNER.format({ username: null != (t = n).globalName ? t.globalName : t.username })
                }),
                (0, s.jsx)('img', {
                    src: c,
                    alt: '',
                    className: o.attributionIcon
                })
            ]
        })
    });
}
