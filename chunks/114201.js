n.d(t, {
    Z: function () {
        return h;
    }
});
var l = n(735250);
n(470079);
var a = n(442837),
    i = n(481060),
    r = n(239091),
    s = n(553795),
    o = n(425128),
    u = n(981631),
    c = n(689938),
    d = n(288984);
function h(e) {
    let t = (0, a.e7)([s.Z], () => s.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS)),
        n = (0, a.e7)([s.Z], () => s.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS)),
        h =
            null != n && null != t
                ? () => {
                      (0, o._)(t.id, n.id);
                  }
                : u.dG4;
    return (0, l.jsx)(i.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(i.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, r.Zy)(), t();
                },
                'aria-label': c.Z.Messages.LEADERBOARD_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(i.MenuGroup, {
                        children: (0, l.jsx)(i.MenuItem, {
                            id: 'refresh-my-data',
                            label: c.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_MENU_REFRESH_MY_DATA,
                            action: h
                        })
                    })
                })
            });
        },
        children: (e) =>
            (0, l.jsx)(i.Tooltip, {
                text: c.Z.Messages.MORE,
                children: (t) =>
                    (0, l.jsx)(i.Clickable, {
                        ...t,
                        className: d.menuIcon,
                        ...e,
                        children: (0, l.jsx)(i.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
