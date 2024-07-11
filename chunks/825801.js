n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(404975), l = n(785717), u = n(689938), c = n(328849);
function d(e) {
    let {
            isHovering: t,
            className: n
        } = e, {trackUserProfileAction: i} = (0, l.KZ)();
    return (0, r.jsxs)(s.ZP, {
        className: a()(n, c.popover, { [c.visible]: t }),
        children: [
            (0, r.jsx)(o.TooltipContainer, {
                text: u.Z.Messages.USER_PROFILE_SEND_REACTION,
                children: (0, r.jsx)(s.zx, {
                    className: c.button,
                    'aria-label': u.Z.Messages.USER_PROFILE_SEND_REACTION,
                    onClick: () => {
                        i({ action: 'PRESS_REACT' });
                    },
                    children: (0, r.jsx)(o.ReactionIcon, { className: c.icon })
                })
            }),
            (0, r.jsx)(o.TooltipContainer, {
                text: u.Z.Messages.USER_PROFILE_REPLY,
                children: (0, r.jsx)(s.zx, {
                    className: c.button,
                    'aria-label': u.Z.Messages.USER_PROFILE_REPLY,
                    onClick: () => {
                        i({ action: 'PRESS_REPLY' });
                    },
                    children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, { className: c.icon })
                })
            })
        ]
    });
}
