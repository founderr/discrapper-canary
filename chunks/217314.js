n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var s = n(399606),
    a = n(481060),
    l = n(210975),
    r = n(158776),
    o = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(984370),
    h = n(689938),
    m = n(784237);
function p(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        p = (0, s.e7)([c.default], () => c.default.getUser(t)),
        _ = (0, s.e7)([r.Z], () => r.Z.getStatus(t)),
        f = (0, s.e7)([r.Z], () => r.Z.isMobileOnline(t)),
        E = (0, s.e7)([o.Z], () => o.Z.getNickname(t)),
        g = u.ZP.useUserTag(p),
        C = (0, l.m$)({
            channelId: e.channel.id,
            location: 'HeaderBarDirectMessageV2'
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.HiddenVisually, { children: h.Z.Messages.DIRECT_MESSAGE }),
            null != p &&
                !n &&
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(a.Avatar, {
                        status: _,
                        isMobile: f,
                        className: m.avatar,
                        size: a.AvatarSizes.SIZE_24,
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
                        (0, i.jsx)(a.TooltipContainer, {
                            text: g,
                            position: 'bottom',
                            children: null != E ? E : u.ZP.getName(p)
                        }),
                        C &&
                            (0, i.jsx)(a.Tooltip, {
                                text: h.Z.Messages.E2EE_CALL_VERIFIED_TOOLTIP,
                                children: (e) =>
                                    (0, i.jsx)(a.ShieldLockIcon, {
                                        ...e,
                                        size: 'xs',
                                        'aria-label': h.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
                                        color: a.tokens.colors.INTERACTIVE_NORMAL,
                                        className: m.secureFramesIcon
                                    })
                            })
                    ]
                })
            })
        ]
    });
}
