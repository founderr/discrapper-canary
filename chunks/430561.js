n.d(t, {
    PI: function () {
        return c;
    },
    RT: function () {
        return f;
    },
    ls: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    r = n(692547),
    s = n(481060),
    a = n(765250),
    u = n(388032),
    d = n(614043);
function c(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: d.titleWrapper,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: t
        })
    });
}
function h(e) {
    let { onClick: t } = e,
        n = u.intl.string(u.t['3D5yo6']);
    return (0, i.jsx)(s.Tooltip, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                className: d.button,
                onClick: t,
                children: (0, i.jsx)(s.SettingsIcon, {
                    size: 'xxs',
                    color: r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function f(e) {
    let { id: t, pinned: n } = e,
        l = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
    return (0, i.jsx)(s.Tooltip, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                className: o()(d.button, n && d.active),
                onClick: () => (0, a.xh)(t),
                children: (0, i.jsx)(s.PinUprightIcon, {
                    size: 'xxs',
                    color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
