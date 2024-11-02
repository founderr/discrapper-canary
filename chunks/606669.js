t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(857595),
    a = t(607070),
    c = t(388032);
function u() {
    let {
            saturation: e,
            useReducedMotion: n,
            roleStyle: t
        } = (0, o.cj)([a.Z], () => ({
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
        (0, r.jsx)(
            i.MenuGroup,
            {
                children: (0, r.jsx)(i.MenuCheckboxItem, {
                    id: 'reduced-motion',
                    label: c.intl.string(c.t.b3XBzs),
                    checked: n,
                    action: () => (0, l.Zt)(n ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, r.jsx)(
            i.MenuGroup,
            {
                children: (0, r.jsx)(i.MenuControlItem, {
                    id: 'input',
                    label: c.intl.string(c.t['5PWWCQ']),
                    control: (n, t) =>
                        (0, r.jsx)(i.MenuSliderControl, {
                            ...n,
                            ref: t,
                            value: 100 * e,
                            onChange: (e) => (0, l.o2)(e / 100),
                            'aria-label': c.intl.string(c.t['5PWWCQ'])
                        })
                })
            },
            'input'
        ),
        (0, r.jsx)(
            i.MenuGroup,
            {
                children: (0, r.jsx)(i.MenuItem, {
                    id: 'role-colors',
                    label: c.intl.string(c.t.uSOPWl),
                    children: u.map((e) => {
                        let { name: n, value: o } = e;
                        return (0, r.jsx)(
                            i.MenuRadioItem,
                            {
                                id: o,
                                group: 'role-colors',
                                checked: o === t,
                                label: n,
                                action: () => (0, l.u1)(o)
                            },
                            o
                        );
                    })
                })
            },
            'role-colors'
        )
    ];
}
