t.d(n, {
    I9: function () {
        return m;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(692547),
    s = t(481060),
    r = t(496675),
    o = t(484455),
    c = t(981631),
    d = t(388032),
    u = t(31619);
function m(e) {
    switch (e) {
        case c.sFg.LOW:
            return d.intl.string(d.t.SsCK8P);
        case c.sFg.MEDIUM:
            return d.intl.string(d.t.WwNoR0);
        case c.sFg.HIGH:
            return d.intl.string(d.t.I2jMUF);
        case c.sFg.VERY_HIGH:
            return d.intl.string(d.t.cJY8w8);
        default:
            return '';
    }
}
let x = {
    [c.sFg.NONE]: '',
    [c.sFg.LOW]: a.Z.unsafe_rawColors.GREEN_360.css,
    [c.sFg.MEDIUM]: a.Z.unsafe_rawColors.YELLOW_300.css,
    [c.sFg.HIGH]: a.Z.unsafe_rawColors.ORANGE_345.css,
    [c.sFg.VERY_HIGH]: a.Z.unsafe_rawColors.RED_400.css
};
n.ZP = function (e) {
    let { guild: n } = e,
        a = r.Z.can(c.Plq.MANAGE_GUILD, n),
        f = n.verificationLevel,
        h = f === c.sFg.VERY_HIGH ? s.MobilePhoneIcon : s.EnvelopeIcon,
        g = l.useMemo(() => m(f), [f]),
        v = x[f],
        j = (0, i.jsx)('div', {
            className: u.verificationLevelTitle,
            children: d.intl.format(d.t.OpV87e, {
                verificationLevelHook: function () {
                    return (0, i.jsx)(
                        s.Text,
                        {
                            className: u.verificationLevelHook,
                            style: { color: v },
                            variant: 'text-sm/semibold',
                            children: g
                        },
                        'hook'
                    );
                }
            })
        }),
        C = f === c.sFg.VERY_HIGH ? d.intl.string(d.t.IlXyd3) : d.intl.string(d.t.JlzMPj);
    return (0, i.jsx)(o.Z, {
        title: j,
        children: (0, i.jsxs)('div', {
            className: u.verificationContainer,
            children: [
                (0, i.jsx)(h, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20,
                    className: u.icon
                }),
                (0, i.jsx)(s.Text, {
                    className: u.guildVerificationText,
                    variant: 'text-sm/normal',
                    children: C
                }),
                a &&
                    (0, i.jsx)(s.Clickable, {
                        className: u.iconInteractiveContainer,
                        onClick: () =>
                            (0, s.openModalLazy)(async () => {
                                let { default: e } = await t.e('72458').then(t.bind(t, 694278));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        guild: n
                                    });
                            }),
                        children: (0, i.jsx)(s.PencilIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20,
                            className: u.iconInteractive
                        })
                    })
            ]
        })
    });
};
