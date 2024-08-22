t.d(n, {
    Z: function () {
        return _;
    }
});
var a = t(735250);
t(470079);
var l = t(481060),
    i = t(239091),
    r = t(299206),
    s = t(810568),
    o = t(168524),
    u = t(725119),
    c = t(26033),
    d = t(689938),
    m = t(243113);
function _(e) {
    var n;
    let { user: t, guildId: _, channel: E, entry: T, onSelect: h, disableGameProfileLinks: x } = e,
        N = (0, u.Z)({
            userId: t.id,
            guildId: _,
            channelId: null == E ? void 0 : E.id
        }),
        I = (0, r.Z)({
            id: t.id,
            label: d.Z.Messages.COPY_ID_USER
        }),
        C = (0, c.dX)(T),
        p = (0, o.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: C && !0 !== x ? (null === (n = T.extra) || void 0 === n ? void 0 : n.application_id) : void 0,
            source: s.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: T.author_id
        });
    return (0, a.jsx)(l.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(l.Menu, {
                navId: 'content-inventory-context',
                onClose: () => {
                    (0, i.Zy)(), n();
                },
                'aria-label': d.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: h,
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(l.MenuGroup, {
                            children: [
                                N,
                                null != p &&
                                    (0, a.jsx)(l.MenuItem, {
                                        id: 'game-profile',
                                        label: d.Z.Messages.GAME_PROFILE,
                                        action: p
                                    })
                            ]
                        }),
                        (0, a.jsx)(l.MenuGroup, { children: I })
                    ]
                })
            });
        },
        children: (e) =>
            (0, a.jsx)(l.Tooltip, {
                text: d.Z.Messages.MORE,
                children: (n) =>
                    (0, a.jsx)(l.Clickable, {
                        ...n,
                        className: m.menuIcon,
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
