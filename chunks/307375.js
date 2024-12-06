n.d(t, {
    A: function () {
        return r;
    },
    h: function () {
        return h;
    }
});
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(481060),
    d = n(981631),
    u = n(388032),
    m = n(676919);
function h(e) {
    let { activeType: t, onTypePicked: n, guild: i } = e,
        r = i.hasFeature(d.oNc.COMMUNITY),
        a = i.hasFeature(d.oNc.DISCOVERABLE),
        h = s.useMemo(
            () => [
                {
                    id: 'invite',
                    title: u.intl.string(u.t['HQVS/P']),
                    body: u.intl.string(u.t.KzXzFR),
                    icon: c.LockIcon,
                    enabled: !0,
                    ineligibleText: null
                },
                {
                    id: 'apply',
                    title: u.intl.string(u.t.LrFEYW),
                    body: u.intl.string(u.t.kJj2oK),
                    icon: c.LockUnlockedIcon,
                    enabled: !a,
                    ineligibleText: u.intl.string(u.t.dUXCFh)
                },
                {
                    id: 'discoverable',
                    title: u.intl.string(u.t.lhOHLy),
                    body: u.intl.string(u.t.pqQylZ),
                    icon: c.GlobeEarthIcon,
                    enabled: r,
                    ineligibleText: u.intl.string(u.t['5TQ+eH'])
                }
            ],
            [r, a]
        );
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(c.Heading, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                children: u.intl.string(u.t['N+GnPz'])
            }),
            (0, l.jsx)(c.Text, {
                color: 'text-secondary',
                variant: 'text-sm/medium',
                className: m.bodyText,
                children: u.intl.string(u.t.nBJ89v)
            }),
            (0, l.jsx)(c.TabBar, {
                selectedItem: t,
                onItemSelect: n,
                orientation: 'horizontal',
                className: m.joinOptions,
                children: h.map((e) => {
                    let n = e.id === t;
                    return (0, l.jsx)(
                        c.TabBar.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: m.joinOptionTab,
                            disabled: !e.enabled,
                            'aria-label': e.title,
                            children: (0, l.jsx)(c.TooltipContainer, {
                                text: e.ineligibleText,
                                position: 'bottom',
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                tooltipClassName: m.tooltip,
                                children: (0, l.jsxs)('div', {
                                    className: o()(m.joinOptionContent, {
                                        [m.active]: n,
                                        [m.uninteractive]: !e.enabled
                                    }),
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
                                })
                            })
                        },
                        e.id
                    );
                })
            })
        ]
    });
}
((i = r || (r = {})).INVITE = 'invite'), (i.APPLY = 'apply'), (i.DISCOVERABLE = 'discoverable');
