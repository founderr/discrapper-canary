n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(239091),
    o = n(911969),
    s = n(399860),
    c = n(388032),
    d = n(83956);
function u(e) {
    let { applicationIcon: t, applicationName: u, canNavigate: m, command: h, guildId: p } = e,
        g = l.useMemo(() => {
            var e;
            return 0 !== Object.keys(null !== (e = h.permissions) && void 0 !== e ? e : {}).length;
        }, [h.permissions]),
        x = l.useCallback(() => {
            null != h &&
                m() &&
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('78786').then(n.bind(n, 50474));
                    return (n) =>
                        (0, i.jsx)(e, {
                            applicationIcon: t,
                            applicationId: h.applicationId,
                            applicationName: u,
                            command: h,
                            guildId: p,
                            ...n
                        });
                });
        }, [t, u, m, h, p]),
        f = l.useCallback(
            (e) => {
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            id: h.id,
                            label: c.intl.string(c.t.oJ1Mu7)
                        });
                });
            },
            [h]
        ),
        b = h.type === o.yU.CHAT ? r.SlashBoxIcon : r.PaperIcon,
        v = (0, s.gw)(h.type, h.displayName);
    return (0, i.jsxs)(r.Clickable, {
        onClick: x,
        className: d.item,
        onContextMenu: f,
        children: [
            (0, i.jsxs)('div', {
                className: d.identifier,
                children: [
                    (0, i.jsx)(b, {
                        className: d.icon,
                        size: 'md',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: v
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.statusContainer,
                children: g
                    ? (0, i.jsxs)('div', {
                          className: d.statusLine,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  children: c.intl.string(c.t.jH4B9P)
                              }),
                              (0, i.jsx)(r.CircleInformationIcon, {
                                  size: 'sm',
                                  color: 'currentColor',
                                  className: d.statusIcon
                              })
                          ]
                      })
                    : null
            })
        ]
    });
}
