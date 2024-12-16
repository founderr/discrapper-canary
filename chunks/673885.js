n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(481060),
    l = n(906732),
    c = n(171368),
    s = n(768581),
    d = n(51144),
    u = n(981631),
    m = n(388032),
    f = n(64371);
function b(e) {
    let { user: t, joinRequestId: n, className: r } = e,
        { username: b } = t,
        x = s.ZP.getUserAvatarURL(t),
        { analyticsLocations: p } = (0, l.ZP)(),
        h = () => {
            (0, c.openUserProfileModal)({
                userId: t.id,
                joinRequestId: n,
                sourceAnalyticsLocations: p,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, i.jsxs)('div', {
        className: a()(f.container, r),
        children: [
            (0, i.jsx)(o.Anchor, {
                onClick: h,
                children: (0, i.jsx)(o.Avatar, {
                    src: x,
                    size: o.AvatarSizes.SIZE_80,
                    'aria-label': b,
                    className: f.avatar
                })
            }),
            (0, i.jsx)('div', {
                className: f.username,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(t)
                })
            }),
            (0, i.jsx)(o.Anchor, {
                onClick: h,
                children: m.intl.string(m.t.iXAna2)
            })
        ]
    });
}
