n.d(t, {
    Z: function () {
        return x;
    }
});
var l = n(200651);
n(192379);
var a = n(481060),
    i = n(239091),
    r = n(299206),
    o = n(810568),
    s = n(168524),
    c = n(37258),
    u = n(26033),
    d = n(388032),
    m = n(863362);
function x(e) {
    var t;
    let { user: n, guildId: x, channel: h, entry: p, onSelect: C, disableGameProfileLinks: v } = e,
        g = (0, c.Z)({
            userId: n.id,
            guildId: x,
            channelId: null == h ? void 0 : h.id
        }),
        f = (0, r.Z)({
            id: n.id,
            label: d.intl.string(d.t['/AXYnJ'])
        }),
        I = (0, u.dX)(p),
        j = (0, s.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: I && !0 !== v ? (null === (t = p.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: o.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id
        });
    return (0, l.jsx)(a.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(a.Menu, {
                navId: 'content-inventory-context',
                onClose: () => {
                    (0, i.Zy)(), t();
                },
                'aria-label': d.intl.string(d.t.liqwPD),
                onSelect: C,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(a.MenuGroup, {
                            children: [
                                g,
                                null != j &&
                                    (0, l.jsx)(a.MenuItem, {
                                        id: 'game-profile',
                                        label: d.intl.string(d.t.f7aVGh),
                                        action: j
                                    })
                            ]
                        }),
                        (0, l.jsx)(a.MenuGroup, { children: f })
                    ]
                })
            });
        },
        children: (e) =>
            (0, l.jsx)(a.Tooltip, {
                text: d.intl.string(d.t.UKOtz8),
                children: (t) =>
                    (0, l.jsx)(a.Clickable, {
                        ...t,
                        className: m.menuIcon,
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
