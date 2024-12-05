n.d(t, {
    A: function () {
        return r;
    },
    h: function () {
        return m;
    }
});
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(481060),
    d = n(388032),
    u = n(676919);
function m(e) {
    let { activeType: t, onTypePicked: n } = e,
        i = s.useMemo(
            () => [
                {
                    id: 'invite',
                    title: d.intl.string(d.t['HQVS/P']),
                    body: d.intl.string(d.t.KzXzFR),
                    icon: c.LockIcon
                },
                {
                    id: 'apply',
                    title: d.intl.string(d.t.LrFEYW),
                    body: d.intl.string(d.t.kJj2oK),
                    icon: c.LockUnlockedIcon
                },
                {
                    id: 'discoverable',
                    title: d.intl.string(d.t.lhOHLy),
                    body: d.intl.string(d.t.pqQylZ),
                    icon: c.GlobeEarthIcon
                }
            ],
            []
        );
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(c.Heading, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                children: d.intl.string(d.t['N+GnPz'])
            }),
            (0, l.jsx)(c.Text, {
                color: 'text-secondary',
                variant: 'text-sm/medium',
                className: u.bodyText,
                children: d.intl.string(d.t.nBJ89v)
            }),
            (0, l.jsx)(c.TabBar, {
                selectedItem: t,
                onItemSelect: n,
                orientation: 'horizontal',
                className: u.joinOptions,
                children: i.map((e) => {
                    let n = e.id === t;
                    return (0, l.jsxs)(
                        c.TabBar.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: o()(u.joinOption, { [u.active]: n }),
                            'aria-label': e.title,
                            children: [
                                (0, l.jsx)(e.icon, {
                                    size: 'md',
                                    color: n ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.TEXT_MUTED
                                }),
                                (0, l.jsx)(c.Text, {
                                    color: n ? 'interactive-active' : 'text-muted',
                                    variant: 'text-md/semibold',
                                    children: e.title
                                }),
                                (0, l.jsx)(c.Text, {
                                    color: n ? 'interactive-active' : 'text-muted',
                                    variant: 'text-xs/medium',
                                    children: e.body
                                })
                            ]
                        },
                        e.id
                    );
                })
            })
        ]
    });
}
((i = r || (r = {})).INVITE = 'invite'), (i.APPLY = 'apply'), (i.DISCOVERABLE = 'discoverable');
