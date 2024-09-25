n.d(t, {
    Z: function () {
        return m;
    }
});
var a = n(735250);
n(470079);
var l = n(481060),
    i = n(239091),
    r = n(299206),
    s = n(810568),
    o = n(168524),
    u = n(725119),
    c = n(26033),
    d = n(689938),
    h = n(301698);
function m(e) {
    var t;
    let { user: n, guildId: m, channel: x, entry: E, onSelect: v, disableGameProfileLinks: _ } = e,
        f = (0, u.Z)({
            userId: n.id,
            guildId: m,
            channelId: null == x ? void 0 : x.id
        }),
        T = (0, r.Z)({
            id: n.id,
            label: d.Z.Messages.COPY_ID_USER
        }),
        p = (0, c.dX)(E),
        g = (0, o.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: p && !0 !== _ ? (null === (t = E.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: s.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: E.author_id
        });
    return (0, a.jsx)(l.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(l.Menu, {
                navId: 'content-inventory-context',
                onClose: () => {
                    (0, i.Zy)(), t();
                },
                'aria-label': d.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: v,
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(l.MenuGroup, {
                            children: [
                                f,
                                null != g &&
                                    (0, a.jsx)(l.MenuItem, {
                                        id: 'game-profile',
                                        label: d.Z.Messages.GAME_PROFILE,
                                        action: g
                                    })
                            ]
                        }),
                        (0, a.jsx)(l.MenuGroup, { children: T })
                    ]
                })
            });
        },
        children: (e) =>
            (0, a.jsx)(l.Tooltip, {
                text: d.Z.Messages.MORE,
                children: (t) =>
                    (0, a.jsx)(l.Clickable, {
                        ...t,
                        className: h.menuIcon,
                        ...e,
                        children: (0, a.jsx)(l.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
