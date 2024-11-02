n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    a = n(210975),
    s = n(158776),
    o = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(984370),
    h = n(388032),
    m = n(784237);
function p(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        p = (0, l.e7)([c.default], () => c.default.getUser(t)),
        f = (0, l.e7)([s.Z], () => s.Z.getStatus(t)),
        g = (0, l.e7)([s.Z], () => s.Z.isMobileOnline(t)),
        C = (0, l.e7)([o.Z], () => o.Z.getNickname(t)),
        x = u.ZP.useUserTag(p),
        v = (0, a.m$)({
            channelId: e.channel.id,
            location: 'HeaderBarDirectMessageV2'
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.HiddenVisually, { children: h.intl.string(h.t.EJRzg4) }),
            null != p &&
                !n &&
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(r.Avatar, {
                        status: f,
                        isMobile: g,
                        className: m.avatar,
                        size: r.AvatarSizes.SIZE_24,
                        'aria-label': u.ZP.getName(p),
                        src: p.getAvatarURL(void 0, 24)
                    })
                }),
            (0, i.jsx)(d.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? m.cursorPointer : null,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.TooltipContainer, {
                            text: x,
                            position: 'bottom',
                            children: null != C ? C : u.ZP.getName(p)
                        }),
                        v &&
                            (0, i.jsx)(r.Tooltip, {
                                text: h.intl.string(h.t.QyZ4TU),
                                children: (e) =>
                                    (0, i.jsx)(r.ShieldLockIcon, {
                                        ...e,
                                        size: 'xs',
                                        'aria-label': h.intl.string(h.t.VHXh8f),
                                        color: r.tokens.colors.INTERACTIVE_NORMAL,
                                        className: m.secureFramesIcon
                                    })
                            })
                    ]
                })
            })
        ]
    });
}
