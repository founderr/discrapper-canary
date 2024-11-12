n.d(t, {
    PI: function () {
        return d;
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
var r = n(120356),
    l = n.n(r),
    o = n(692547),
    a = n(481060),
    s = n(765250),
    u = n(388032),
    c = n(614043);
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: c.titleWrapper,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: t
        })
    });
}
function h(e) {
    let { onClick: t } = e,
        n = u.intl.string(u.t['3D5yo6']);
    return (0, i.jsx)(a.Tooltip, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: c.button,
                onClick: t,
                children: (0, i.jsx)(a.SettingsIcon, {
                    size: 'xxs',
                    color: o.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function f(e) {
    let { id: t, pinned: n } = e,
        r = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
    return (0, i.jsx)(a.Tooltip, {
        text: r,
        'aria-label': r,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: l()(c.button, n && c.active),
                onClick: () => (0, s.xh)(t),
                children: (0, i.jsx)(a.PinUprightIcon, {
                    size: 'xxs',
                    color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
