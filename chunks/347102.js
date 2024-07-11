n.d(t, {
    e: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(693789), s = n(260034), l = n(481060), r = n(493683), o = n(699516), c = n(280006), d = n(799352), u = n(689938), h = n(995286), p = n(560580);
function m(e) {
    let {channel: t} = e;
    if (!(0, c.f)({ location: 'blocked_user_banner' }) || null == t || !t.isGroupDM() || t.blockedUserWarningDismissed)
        return null;
    let n = t.recipients.filter(e => o.Z.isBlocked(e));
    if (0 === n.length)
        return null;
    let m = n.length > 1 ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_BANNER : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_BANNER, _ = () => {
            (0, d.O)(t.id);
        };
    return (0, i.jsxs)('div', {
        className: h.safetyWarningBanner,
        children: [
            (0, i.jsxs)('div', {
                className: h.shieldAndHeading,
                children: [
                    (0, i.jsx)('img', {
                        className: h.safetyShieldIcon,
                        src: p,
                        alt: ''
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.X, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: m
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                children: u.Z.Messages.GDM_BLOCKED_USER_WARNING_BANNER_DESCRIPTION
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.buttons,
                children: [
                    (0, i.jsx)(a.zx, {
                        type: 'submit',
                        color: a.zx.Colors.BRAND,
                        size: a.zx.Sizes.MEDIUM,
                        onClick: () => {
                            _(), r.Z.closePrivateChannel(t.id, !0, !0);
                        },
                        children: u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE
                    }),
                    (0, i.jsx)(a.zx, {
                        color: a.zx.Colors.PRIMARY,
                        onClick: _,
                        children: u.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY
                    })
                ]
            })
        ]
    });
}
