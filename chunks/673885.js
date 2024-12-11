n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(906732),
    o = n(171368),
    c = n(768581),
    d = n(51144),
    u = n(981631),
    m = n(388032),
    h = n(64371);
function x(e) {
    let { user: t, joinRequestId: n, className: s } = e,
        { username: x } = t,
        j = c.ZP.getUserAvatarURL(t),
        { analyticsLocations: g } = (0, a.ZP)(),
        v = () => {
            (0, o.openUserProfileModal)({
                userId: t.id,
                joinRequestId: n,
                sourceAnalyticsLocations: g,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, i.jsxs)('div', {
        className: r()(h.container, s),
        children: [
            (0, i.jsx)(l.Anchor, {
                onClick: v,
                children: (0, i.jsx)(l.Avatar, {
                    src: j,
                    size: l.AvatarSizes.SIZE_80,
                    'aria-label': x,
                    className: h.avatar
                })
            }),
            (0, i.jsx)('div', {
                className: h.username,
                children: (0, i.jsx)(l.Heading, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(t)
                })
            }),
            (0, i.jsx)(l.Anchor, {
                onClick: v,
                children: m.intl.string(m.t.iXAna2)
            })
        ]
    });
}
