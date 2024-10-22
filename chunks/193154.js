n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(460562),
    s = n(768581),
    o = n(682662),
    c = n(662146),
    u = n(779033);
function d(e) {
    let [t, d] = l.useState(!1);
    return (0, i.jsx)(o.H, {
        children: (0, i.jsx)(c.Z, {
            text: e.name,
            children: (0, i.jsx)(a.BlobMask, {
                className: u.circleIconButton,
                selected: t,
                lowerBadge: (0, i.jsx)(a.IconBadge, {
                    icon: (0, a.makeIconCompat)(r.Z),
                    disableColor: !0,
                    className: u.geoRestrictedBadge
                }),
                children: (0, i.jsx)(a.NavItem, {
                    name: e.name,
                    onMouseEnter: () => {
                        d(!0);
                    },
                    onMouseLeave: () => {
                        d(!1);
                    },
                    onClick: () => {
                        (0, a.openModalLazy)(async () => {
                            let { default: t } = await n.e('42358').then(n.bind(n, 210995));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    name: e.name,
                                    guildId: e.id,
                                    ...n
                                });
                        });
                    },
                    icon:
                        null != e.icon
                            ? s.ZP.getGuildIconURL({
                                  id: e.id,
                                  icon: e.icon,
                                  canAnimate: !1,
                                  size: 42
                              })
                            : null
                })
            })
        })
    });
}
