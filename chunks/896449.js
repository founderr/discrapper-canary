n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(239091),
    r = n(299206),
    o = n(810568),
    s = n(168524),
    u = n(725119),
    c = n(26033),
    d = n(388032),
    h = n(301698);
function m(e) {
    var t;
    let { user: n, guildId: m, channel: x, entry: v, onSelect: f, disableGameProfileLinks: p } = e,
        g = (0, u.Z)({
            userId: n.id,
            guildId: m,
            channelId: null == x ? void 0 : x.id
        }),
        C = (0, r.Z)({
            id: n.id,
            label: d.intl.string(d.t['/AXYnJ'])
        }),
        I = (0, c.dX)(v),
        P = (0, s.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: I && !0 !== p ? (null === (t = v.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: o.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: v.author_id
        });
    return (0, i.jsx)(l.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(l.Menu, {
                navId: 'content-inventory-context',
                onClose: () => {
                    (0, a.Zy)(), t();
                },
                'aria-label': d.intl.string(d.t.liqwPD),
                onSelect: f,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.MenuGroup, {
                            children: [
                                g,
                                null != P &&
                                    (0, i.jsx)(l.MenuItem, {
                                        id: 'game-profile',
                                        label: d.intl.string(d.t.f7aVGh),
                                        action: P
                                    })
                            ]
                        }),
                        (0, i.jsx)(l.MenuGroup, { children: C })
                    ]
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(l.Tooltip, {
                text: d.intl.string(d.t.UKOtz8),
                children: (t) =>
                    (0, i.jsx)(l.Clickable, {
                        ...t,
                        className: h.menuIcon,
                        ...e,
                        children: (0, i.jsx)(l.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
