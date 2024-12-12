n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    o = n(481060),
    l = n(857595),
    a = n(607070),
    c = n(388032);
function u() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n
        } = (0, r.cj)([a.Z], () => ({
            saturation: a.Z.saturation,
            useReducedMotion: a.Z.useReducedMotion,
            roleStyle: a.Z.roleStyle
        })),
        u = [
            {
                name: c.intl.string(c.t.YEOEi4),
                value: 'username'
            },
            {
                name: c.intl.string(c.t.mQaro6),
                value: 'dot'
            },
            {
                name: c.intl.string(c.t.Ji2EVF),
                value: 'hidden'
            }
        ];
    return [
        (0, i.jsx)(
            o.MenuGroup,
            {
                children: (0, i.jsx)(o.MenuCheckboxItem, {
                    id: 'reduced-motion',
                    label: c.intl.string(c.t.b3XBzs),
                    checked: t,
                    action: () => (0, l.Zt)(t ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, i.jsx)(
            o.MenuGroup,
            {
                children: (0, i.jsx)(o.MenuControlItem, {
                    id: 'input',
                    label: c.intl.string(c.t['5PWWCQ']),
                    control: (t, n) =>
                        (0, i.jsx)(o.MenuSliderControl, {
                            ...t,
                            ref: n,
                            value: 100 * e,
                            onChange: (e) => (0, l.o2)(e / 100),
                            'aria-label': c.intl.string(c.t['5PWWCQ'])
                        })
                })
            },
            'input'
        ),
        (0, i.jsx)(
            o.MenuGroup,
            {
                children: (0, i.jsx)(o.MenuItem, {
                    id: 'role-colors',
                    label: c.intl.string(c.t.uSOPWl),
                    children: u.map((e) => {
                        let { name: t, value: r } = e;
                        return (0, i.jsx)(
                            o.MenuRadioItem,
                            {
                                id: r,
                                group: 'role-colors',
                                checked: r === n,
                                label: t,
                                action: () => (0, l.u1)(r)
                            },
                            r
                        );
                    })
                })
            },
            'role-colors'
        )
    ];
}
