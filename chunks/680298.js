t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(239091),
    o = t(911969),
    s = t(399860),
    d = t(388032),
    c = t(83956);
function u(e) {
    let { applicationIcon: n, applicationName: u, canNavigate: m, command: h, guildId: p } = e,
        g = l.useMemo(() => {
            var e;
            return 0 !== Object.keys(null !== (e = h.permissions) && void 0 !== e ? e : {}).length;
        }, [h.permissions]),
        f = l.useCallback(() => {
            null != h &&
                m() &&
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await t.e('78786').then(t.bind(t, 50474));
                    return (t) =>
                        (0, i.jsx)(e, {
                            applicationIcon: n,
                            applicationId: h.applicationId,
                            applicationName: u,
                            command: h,
                            guildId: p,
                            ...t
                        });
                });
        }, [n, u, m, h, p]),
        x = l.useCallback(
            (e) => {
                (0, a.jW)(e, async () => {
                    let { default: e } = await t.e('5396').then(t.bind(t, 731646));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            id: h.id,
                            label: d.intl.string(d.t.oJ1Mu7)
                        });
                });
            },
            [h]
        ),
        b = h.type === o.yU.CHAT ? r.SlashBoxIcon : r.PaperIcon,
        v = (0, s.gw)(h.type, h.displayName);
    return (0, i.jsxs)(r.Clickable, {
        onClick: f,
        className: c.item,
        onContextMenu: x,
        children: [
            (0, i.jsxs)('div', {
                className: c.identifier,
                children: [
                    (0, i.jsx)(b, {
                        className: c.icon,
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
                className: c.statusContainer,
                children: g
                    ? (0, i.jsxs)('div', {
                          className: c.statusLine,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  children: d.intl.string(d.t.jH4B9P)
                              }),
                              (0, i.jsx)(r.CircleInformationIcon, {
                                  size: 'sm',
                                  color: 'currentColor',
                                  className: c.statusIcon
                              })
                          ]
                      })
                    : null
            })
        ]
    });
}
