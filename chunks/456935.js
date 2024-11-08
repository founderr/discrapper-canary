t.d(n, {
    I9: function () {
        return m;
    }
});
var r = t(200651),
    a = t(192379),
    i = t(692547),
    o = t(481060),
    s = t(496675),
    l = t(484455),
    c = t(981631),
    d = t(388032),
    u = t(55529);
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
let f = {
    [c.sFg.NONE]: '',
    [c.sFg.LOW]: i.Z.unsafe_rawColors.GREEN_360.css,
    [c.sFg.MEDIUM]: i.Z.unsafe_rawColors.YELLOW_300.css,
    [c.sFg.HIGH]: i.Z.unsafe_rawColors.ORANGE_345.css,
    [c.sFg.VERY_HIGH]: i.Z.unsafe_rawColors.RED_400.css
};
n.ZP = function (e) {
    let { guild: n } = e,
        i = s.Z.can(c.Plq.MANAGE_GUILD, n),
        h = n.verificationLevel,
        x = h === c.sFg.VERY_HIGH ? o.MobilePhoneIcon : o.EnvelopeIcon,
        p = a.useMemo(() => m(h), [h]),
        g = f[h],
        C = (0, r.jsx)('div', {
            className: u.verificationLevelTitle,
            children: d.intl.format(d.t.OpV87e, {
                verificationLevelHook: function () {
                    return (0, r.jsx)(
                        o.Text,
                        {
                            className: u.verificationLevelHook,
                            style: { color: g },
                            variant: 'text-sm/semibold',
                            children: p
                        },
                        'hook'
                    );
                }
            })
        }),
        b = h === c.sFg.VERY_HIGH ? d.intl.string(d.t.IlXyd3) : d.intl.string(d.t.JlzMPj);
    return (0, r.jsx)(l.Z, {
        title: C,
        children: (0, r.jsxs)('div', {
            className: u.verificationContainer,
            children: [
                (0, r.jsx)(x, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20,
                    className: u.icon
                }),
                (0, r.jsx)(o.Text, {
                    className: u.guildVerificationText,
                    variant: 'text-sm/normal',
                    children: b
                }),
                i &&
                    (0, r.jsx)(o.Clickable, {
                        className: u.iconInteractiveContainer,
                        onClick: () =>
                            (0, o.openModalLazy)(async () => {
                                let { default: e } = await t.e('72458').then(t.bind(t, 694278));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        ...t,
                                        guild: n
                                    });
                            }),
                        children: (0, r.jsx)(o.PencilIcon, {
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
