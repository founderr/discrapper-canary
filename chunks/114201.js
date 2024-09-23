n.d(t, {
    Z: function () {
        return o;
    }
});
var l = n(735250);
n(470079);
var a = n(481060),
    i = n(239091),
    r = n(689938),
    s = n(288984);
function o(e) {
    let t = () => {};
    return (0, l.jsx)(a.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(a.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, i.Zy)(), n();
                },
                'aria-label': r.Z.Messages.LEADERBOARD_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(a.MenuGroup, {
                        children: (0, l.jsx)(a.MenuItem, {
                            id: 'refresh-my-data',
                            label: r.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_MENU_REFRESH_MY_DATA,
                            action: t
                        })
                    })
                })
            });
        },
        children: (e) =>
            (0, l.jsx)(a.Tooltip, {
                text: r.Z.Messages.MORE,
                children: (t) =>
                    (0, l.jsx)(a.Clickable, {
                        ...t,
                        className: s.menuIcon,
                        ...e,
                        children: (0, l.jsx)(a.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
